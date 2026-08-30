import { Question, PackageQuestion, PackageKey, GeneratedPackages, GeneratorConfig } from '../types';

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

/**
 * Generates parallel exam packages (A, B, C, D) from the question bank.
 * Refined logic:
 * 1. Filters by selected curriculum elements (if configured).
 * 2. Samples a single master question pool so all packages evaluate the same core competencies.
 * 3. Shuffles question order per package if shuffleQuestions is enabled.
 * 4. Shuffles options (A-D) independently per package if shuffleOptions is enabled, accurately updating the answer key.
 */
export function generatePackages(
  questionBank: Question[],
  config: GeneratorConfig
): GeneratedPackages {
  if (!questionBank || questionBank.length === 0) {
    return {};
  }

  // 1. Filter pool by selected elements if any
  let pool = [...questionBank];
  if (config.selectedElements && config.selectedElements.length > 0) {
    const filtered = pool.filter((q) => config.selectedElements.includes(q.element));
    if (filtered.length > 0) {
      pool = filtered;
    }
  }

  const requestedCount = Math.min(config.questionCount, pool.length);

  // 2. Select master question set for this exam run
  // If pool has more questions than requested, sample a randomized subset
  let masterQuestions: Question[] = [];
  if (pool.length > requestedCount) {
    masterQuestions = shuffleArray(pool).slice(0, requestedCount);
  } else {
    masterQuestions = [...pool];
  }

  const letterMap: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
  const generated: GeneratedPackages = {};

  // 3. Generate each requested package
  config.packages.forEach((pkgKey, pkgIndex) => {
    let pkgQuestionsList = [...masterQuestions];

    // Shuffle questions order for this package if enabled
    if (config.shuffleQuestions) {
      if (pkgIndex === 0) {
        // First package can be shuffled
        pkgQuestionsList = shuffleArray(pkgQuestionsList);
      } else {
        // Subsequent packages get fresh distinct shuffles
        pkgQuestionsList = shuffleArray(pkgQuestionsList);
      }
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
        element: q.element,
        level: q.level,
        stem: q.stem,
        options: finalOptions,
        correctIndex: finalCorrectIndex,
        correctLetter,
        explanation: q.explanation,
        topic: q.topic,
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
  text += `NASKAH SOAL PENILAIAN INFORMATIKA KELAS IX\n`;
  text += `SATUAN PENDIDIKAN: ${schoolName.toUpperCase()}\n`;
  text += `KURIKULUM: KURIKULUM MERDEKA\n`;
  text += `KODE NASKAH: PAKET ${pkgKey}\n`;
  text += `JUMLAH SOAL: ${questions.length} BUTIR (PILIHAN GANDA)\n`;
  text += `===========================================================\n\n`;

  text += `PETUNJUK: Pilihlah salah satu jawaban yang paling tepat (A, B, C, atau D)!\n\n`;

  questions.forEach((q) => {
    text += `${q.num}. [${q.element} - ${q.level}] ${q.stem}\n`;
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      text += `   ${letters[idx]}. ${opt}\n`;
    });
    text += `   --> KUNCI JAWABAN: ${q.correctLetter}\n`;
    text += `   --> PEMBAHASAN: ${q.explanation}\n\n`;
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
