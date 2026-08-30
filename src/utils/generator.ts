import { Question, PackageQuestion, PackageKey, GeneratedPackages, GeneratorConfig, InformaticsElement } from '../types';

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generatePackages(
  questionBank: Question[],
  config: GeneratorConfig
): GeneratedPackages {
  if (!questionBank || questionBank.length === 0) {
    return {};
  }

  // Filter pool by selected elements if any
  let pool = questionBank;
  if (config.selectedElements && config.selectedElements.length > 0) {
    pool = pool.filter((q) => config.selectedElements.includes(q.element));
  }

  // If filtered pool is empty, fallback to entire pool
  if (pool.length === 0) {
    pool = questionBank;
  }

  const generated: GeneratedPackages = {};
  const requestedCount = Math.min(config.questionCount, pool.length);

  config.packages.forEach((pkgKey) => {
    // Shuffle the available pool to pick random questions
    let selectedQuestions = shuffleArray([...pool]).slice(0, requestedCount);

    // Optionally shuffle question display order
    if (config.shuffleQuestions) {
      selectedQuestions = shuffleArray(selectedQuestions);
    }

    // Process questions and option shuffling
    const packageQuestions: PackageQuestion[] = selectedQuestions.map((q, index) => {
      const originalOptions = [...q.options];
      const correctOptionText = originalOptions[q.correctIndex];

      let finalOptions = [...originalOptions];
      let finalCorrectIndex = q.correctIndex;

      if (config.shuffleOptions) {
        finalOptions = shuffleArray(finalOptions);
        finalCorrectIndex = finalOptions.indexOf(correctOptionText);
      }

      const letterMap: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];
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
  text += `KODE PAKET: PAKET ${pkgKey}\n`;
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
