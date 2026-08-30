import { Question, PackageQuestion, PackageKey, GeneratedPackages, GeneratorConfig, InformaticsElement, ELEMENT_LABELS } from '../types';

/**
 * Standard unbiased Fisher-Yates array shuffle.
 * Returns a new shuffled copy without mutating the input array.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const MAX_QUESTIONS_PER_MATERI = 50;
export const MAX_QUESTIONS_PER_ELEMENT = 50;

/**
 * Calculates proportional question quota for each active materi based on target question count.
 * Enforces a strict maximum limit of 50 questions per individual materi.
 */
export function getProportionalMateriDistribution(
  bank: Question[],
  selectedMateris: string[],
  totalRequested: number
): Record<string, number> {
  // Collect all unique materis from bank
  const allMaterisInBank = Array.from(new Set(bank.map((q) => q.materi || 'Umum')));
  
  const activeMateris = (
    selectedMateris && selectedMateris.length > 0
      ? selectedMateris
      : allMaterisInBank
  ).filter((mat) => bank.some((q) => (q.materi || 'Umum') === mat));

  const countInBank: Record<string, number> = {};
  let totalAvailableInPool = 0;
  activeMateris.forEach((mat) => {
    // Each materi is capped at a maximum of 50 questions
    const rawCount = bank.filter((q) => (q.materi || 'Umum') === mat).length;
    const c = Math.min(MAX_QUESTIONS_PER_MATERI, rawCount);
    countInBank[mat] = c;
    totalAvailableInPool += c;
  });

  const effectiveTotal = Math.min(totalRequested, totalAvailableInPool);
  const distribution: Record<string, number> = {};
  activeMateris.forEach((m) => (distribution[m] = 0));

  if (effectiveTotal <= 0 || activeMateris.length === 0) {
    return distribution;
  }

  // Base proportional distribution
  let allocated = 0;
  activeMateris.forEach((mat) => {
    const proportion = totalAvailableInPool > 0 ? countInBank[mat] / totalAvailableInPool : 0;
    const baseCount = Math.floor(proportion * effectiveTotal);
    distribution[mat] = Math.min(baseCount, Math.min(MAX_QUESTIONS_PER_MATERI, countInBank[mat]));
    allocated += distribution[mat];
  });

  // Distribute remainders to materis with available headroom (capped at max 50 per materi)
  let remainder = effectiveTotal - allocated;
  const sortedByCapacity = [...activeMateris].sort((a, b) => {
    const remA = Math.min(MAX_QUESTIONS_PER_MATERI, countInBank[a]) - (distribution[a] || 0);
    const remB = Math.min(MAX_QUESTIONS_PER_MATERI, countInBank[b]) - (distribution[b] || 0);
    return remB - remA;
  });

  let i = 0;
  while (remainder > 0 && i < sortedByCapacity.length * 4) {
    const mat = sortedByCapacity[i % sortedByCapacity.length];
    const maxCapacity = Math.min(MAX_QUESTIONS_PER_MATERI, countInBank[mat]);
    if ((distribution[mat] || 0) < maxCapacity) {
      distribution[mat] = (distribution[mat] || 0) + 1;
      remainder--;
    }
    i++;
  }

  return distribution;
}

/**
 * Backwards compatibility helper for element distribution
 */
export function getProportionalElementDistribution(
  bank: Question[],
  selectedElements: InformaticsElement[],
  totalRequested: number
): Record<InformaticsElement, number> {
  const activeElements = (
    selectedElements && selectedElements.length > 0
      ? selectedElements
      : (Object.keys(ELEMENT_LABELS) as InformaticsElement[])
  ).filter((elem) => bank.some((q) => q.element === elem));

  const countInBank: Record<string, number> = {};
  let totalAvailableInPool = 0;
  activeElements.forEach((elem) => {
    const rawCount = bank.filter((q) => q.element === elem).length;
    const c = Math.min(MAX_QUESTIONS_PER_ELEMENT, rawCount);
    countInBank[elem] = c;
    totalAvailableInPool += c;
  });

  const effectiveTotal = Math.min(totalRequested, totalAvailableInPool);
  const distribution: Record<string, number> = {};
  activeElements.forEach((e) => (distribution[e] = 0));

  if (effectiveTotal <= 0 || activeElements.length === 0) {
    return distribution as Record<InformaticsElement, number>;
  }

  let allocated = 0;
  activeElements.forEach((elem) => {
    const proportion = totalAvailableInPool > 0 ? countInBank[elem] / totalAvailableInPool : 0;
    const baseCount = Math.floor(proportion * effectiveTotal);
    distribution[elem] = Math.min(baseCount, Math.min(MAX_QUESTIONS_PER_ELEMENT, countInBank[elem]));
    allocated += distribution[elem];
  });

  let remainder = effectiveTotal - allocated;
  const sortedByCapacity = [...activeElements].sort((a, b) => {
    const remA = Math.min(MAX_QUESTIONS_PER_ELEMENT, countInBank[a]) - (distribution[a] || 0);
    const remB = Math.min(MAX_QUESTIONS_PER_ELEMENT, countInBank[b]) - (distribution[b] || 0);
    return remB - remA;
  });

  let i = 0;
  while (remainder > 0 && i < sortedByCapacity.length * 4) {
    const elem = sortedByCapacity[i % sortedByCapacity.length];
    const maxCapacity = Math.min(MAX_QUESTIONS_PER_ELEMENT, countInBank[elem]);
    if ((distribution[elem] || 0) < maxCapacity) {
      distribution[elem] = (distribution[elem] || 0) + 1;
      remainder--;
    }
    i++;
  }

  return distribution as Record<InformaticsElement, number>;
}

/**
 * Generates parallel exam packages (A, B, C, D) from the question bank.
 * Refined logic:
 * 1. Filters and distributes proportionally by selected Materi (max 50 questions per materi).
 * 2. Samples a single master question pool so all packages evaluate the same core competencies.
 * 3. Shuffles question order per package if shuffleQuestions is enabled.
 * 4. Shuffles options (A-D) independently per package if shuffleOptions is enabled, accurately updating the answer key and discussion.
 */
export function generatePackages(
  questionBank: Question[],
  config: GeneratorConfig
): GeneratedPackages {
  if (!questionBank || questionBank.length === 0) {
    return {};
  }

  // 1. Filter pool by selected materis if any
  let pool = [...questionBank];
  if (config.selectedMateris && config.selectedMateris.length > 0) {
    const filtered = pool.filter((q) => config.selectedMateris.includes(q.materi));
    if (filtered.length > 0) {
      pool = filtered;
    }
  } else if (config.selectedElements && config.selectedElements.length > 0) {
    const filtered = pool.filter((q) => q.element && config.selectedElements!.includes(q.element));
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  const requestedCount = Math.min(config.questionCount, pool.length);

  // 2. Select master question set using proportional materi distribution (max 50 per materi)
  const distribution = getProportionalMateriDistribution(
    questionBank,
    config.selectedMateris || [],
    requestedCount
  );

  let masterQuestions: Question[] = [];
  Object.keys(distribution).forEach((mat) => {
    const quota = distribution[mat] || 0;
    if (quota > 0) {
      const matPool = questionBank.filter((q) => (q.materi || 'Umum') === mat);
      const sampled = shuffleArray(matPool).slice(0, quota);
      masterQuestions.push(...sampled);
    }
  });

  // Fallback check if any rounding left gaps
  if (masterQuestions.length < requestedCount) {
    const currentIds = new Set(masterQuestions.map((q) => q.id));
    const remainingPool = pool.filter((q) => !currentIds.has(q.id));
    const extra = shuffleArray(remainingPool).slice(0, requestedCount - masterQuestions.length);
    masterQuestions.push(...extra);
  }

  // Interleave and randomize initial master pool so materis are balanced
  masterQuestions = shuffleArray(masterQuestions);

  const letterMap: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const generated: GeneratedPackages = {};

  // 3. Generate each requested package
  config.packages.forEach((pkgKey) => {
    let pkgQuestionsList = [...masterQuestions];

    // Shuffle questions order for this package if enabled
    if (config.shuffleQuestions) {
      pkgQuestionsList = shuffleArray(pkgQuestionsList);
    }

    // Process questions and option shuffling
    const packageQuestions: PackageQuestion[] = pkgQuestionsList.map((q, index) => {
      const originalOptions = [...q.options];
      const correctOptionText = originalOptions[q.correctIndex];

      let finalOptions = [...originalOptions];
      let finalCorrectIndex = q.correctIndex;

      if (config.shuffleOptions) {
        finalOptions = shuffleArray(finalOptions);
        finalCorrectIndex = finalOptions.indexOf(correctOptionText);
        if (finalCorrectIndex === -1) {
          finalCorrectIndex = 0;
        }
      }

      const correctLetter = letterMap[finalCorrectIndex] || 'A';

      return {
        num: index + 1,
        id: q.id,
        materi: q.materi || 'Umum',
        element: q.element,
        level: q.level,
        stem: q.stem,
        options: finalOptions,
        correctIndex: finalCorrectIndex,
        correctLetter,
        explanation: q.explanation || '',
        topic: q.topic || q.materi,
        cp: q.cp,
        indicator: q.indicator,
      };
    });

    generated[pkgKey] = packageQuestions;
  });

  return generated;
}

export function formatTeacherText(
  pkgKey: PackageKey,
  questions: PackageQuestion[],
  schoolName: string = 'SMP NEGERI / SWASTA'
): string {
  if (!questions || questions.length === 0) return '';

  let text = `===========================================================\n`;
  text += `NASKAH SOAL & PEMBAHASAN ASESMEN INFORMATIKA KELAS IX\n`;
  text += `SATUAN PENDIDIKAN: ${schoolName.toUpperCase()}\n`;
  text += `KURIKULUM: KURIKULUM MERDEKA\n`;
  text += `KODE NASKAH: PAKET ${pkgKey}\n`;
  text += `JUMLAH SOAL: ${questions.length} BUTIR (PILIHAN GANDA)\n`;
  text += `===========================================================\n\n`;

  text += `PETUNJUK: Pilihlah salah satu jawaban yang paling tepat (A, B, C, atau D)!\n\n`;

  questions.forEach((q) => {
    text += `${q.num}. [${q.materi} - ${q.level}] ${q.stem}\n`;
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      text += `   ${letters[idx]}. ${opt}\n`;
    });
    text += `   --> KUNCI JAWABAN: ${q.correctLetter}\n`;
    if (q.explanation) {
      text += `   --> PEMBAHASAN: ${q.explanation}\n`;
    }
    text += `\n`;
  });

  text += `===========================================================\n`;
  text += `RINGKASAN KUNCI JAWABAN PAKET ${pkgKey}:\n`;
  const keyList = questions.map((q) => `${q.num}.${q.correctLetter}`).join(' | ');
  text += keyList + '\n';
  text += `===========================================================\n`;

  return text;
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
}

export function exportBankToJson(questions: Question[], filename = 'bank_soal_informatika_ix.json') {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', filename);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

