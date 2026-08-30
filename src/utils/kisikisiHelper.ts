import { InformaticsElement, Question, PackageQuestion, ExamHeaderConfig } from '../types';

export interface KisiKisiItem {
  no: number;
  id: string;
  element: InformaticsElement;
  elementName: string;
  topic: string;
  cp: string;
  indicator: string;
  level: 'LotS' | 'MotS' | 'HoTS';
  cognitiveDetail: string;
  form: string;
  questionNumber: number;
  correctLetter?: string;
  stemPreview: string;
}

export const ELEMENT_DEFAULT_CP: Record<InformaticsElement, string> = {
  BK: 'Peserta didik mampu menerapkan berpikir komputasional untuk memecahkan persoalan komputasi dengan data bervolume besar, algoritma sorting/searching, serta struktur data Tree dan Graph.',
  TIK: 'Peserta didik mampu memanfaatkan integrasi aplikasi perkantoran, media kolaborasi daring, pengelolaan konten digital, dan otomatisasi dokumen terpadu.',
  SK: 'Peserta didik mampu memahami cara kerja internal sistem komputer, fungsi CPU, memori, perangkat input-output, serta mekanisme sistem operasi.',
  JKI: 'Peserta didik mampu memahami arsitektur jaringan komputer lokal/internet, protokol komunikasi data, pengalamatan IP, serta prinsip keamanan siber dasar.',
  AD: 'Peserta didik mampu melakukan pembersihan data, pengolaran fungsi statistik/logika, dan menyajikan visualisasi data yang informatif untuk penarikan kesimpulan.',
  AP: 'Peserta didik mampu merancang algoritma dan mengimplementasikan program modular menggunakan variabel, kondisional percabangan, dan perulangan secara tepat.',
  DSI: 'Peserta didik mampu mengevaluasi dampak sosial teknologi, perlindungan privasi data pribadi, etika bermedia digital, UU ITE, dan prospek karir bidang IT.',
  PLB: 'Peserta didik mampu berkolaborasi merancang proyek artefak komputasional atau sistem komputasi fisik terintegrasi guna memecahkan masalah kontekstual.',
};

/**
 * Generate intelligent default Indicator based on question stem and element if missing.
 */
export function deriveIndicator(q: Question | PackageQuestion): string {
  if (q.indicator && q.indicator.trim().length > 5) {
    return q.indicator;
  }

  const topicStr = q.topic || 'materi terkait';
  const level = q.level;

  if (level === 'LotS') {
    return `Disajikan pertanyaan mengenai ${topicStr}, peserta didik dapat mengidentifikasi atau mendefinisikan konsep dasar dengan tepat.`;
  } else if (level === 'MotS') {
    return `Disajikan stimulus/permasalahan terstruktur tentang ${topicStr}, peserta didik dapat menghitung, menerapkan langkah algoritma, atau menentukan hasil operasionalnya secara akurat.`;
  } else {
    return `Disajikan studi kasus atau analisis skenario konkret pada ${topicStr}, peserta didik dapat mengevaluasi, menganalisis hubungan relasi komponen, dan menentukan solusi komputasional yang paling optimal.`;
  }
}

/**
 * Transforms questions into official standard Kisi-Kisi entries
 */
export function buildKisiKisiList(
  questions: (Question | PackageQuestion)[],
  packageLetter?: string
): KisiKisiItem[] {
  const elementNames: Record<InformaticsElement, string> = {
    BK: 'Berpikir Komputasional (BK)',
    TIK: 'Teknologi Informasi & Komunikasi (TIK)',
    SK: 'Sistem Komputer (SK)',
    JKI: 'Jaringan Komputer & Internet (JKI)',
    AD: 'Analisis Data (AD)',
    AP: 'Algoritma & Pemrograman (AP)',
    DSI: 'Dampak Sosial Informatika (DSI)',
    PLB: 'Praktik Lintas Bidang (PLB)',
  };

  const cognitiveLabels = {
    LotS: 'LotS (C1-C2 / Pengetahuan & Pemahaman)',
    MotS: 'MotS (C3 / Aplikasi & Penerapan)',
    HoTS: 'HoTS (C4-C5 / Penalaran & Analisis)',
  };

  return questions.map((q, idx) => {
    const questionNum = 'num' in q ? q.num : idx + 1;
    const correctLetter = 'correctLetter' in q ? q.correctLetter : ['A', 'B', 'C', 'D'][q.correctIndex];
    const topic = q.topic || 'Informatika Fase D Kelas IX';
    const cp = q.cp || ELEMENT_DEFAULT_CP[q.element] || 'Capaian Pembelajaran Informatika Fase D';
    const indicator = deriveIndicator(q);

    return {
      no: idx + 1,
      id: q.id,
      element: q.element,
      elementName: elementNames[q.element] || q.element,
      topic,
      cp,
      indicator,
      level: q.level,
      cognitiveDetail: cognitiveLabels[q.level] || q.level,
      form: 'Pilihan Ganda (PG)',
      questionNumber: questionNum,
      correctLetter,
      stemPreview: q.stem.length > 80 ? q.stem.substring(0, 80) + '...' : q.stem,
    };
  });
}

/**
 * Exports Kisi-Kisi to standard CSV for Microsoft Excel / Google Sheets
 */
export function exportKisiKisiCSV(
  items: KisiKisiItem[],
  headerConfig: ExamHeaderConfig,
  packageKey?: string
): void {
  const title = `KISI_KISI_${headerConfig.subject.replace(/\s+/g, '_')}_KELAS_${headerConfig.gradeLevel.replace(/\s+/g, '_')}${packageKey ? `_PAKET_${packageKey}` : ''}.csv`;

  let csvContent = `\uFEFF`; // UTF-8 BOM for Excel
  csvContent += `KISI-KISI PENULISAN SOAL ASESMEN / UJIAN\n`;
  csvContent += `SATUAN PENDIDIKAN;${headerConfig.schoolName}\n`;
  csvContent += `MATA PELAJARAN;${headerConfig.subject}\n`;
  csvContent += `KELAS / SEMESTER;${headerConfig.gradeLevel} / ${headerConfig.semester}\n`;
  csvContent += `KURIKULUM;KURIKULUM MERDEKA\n`;
  csvContent += `TAHUN AJARAN;${headerConfig.academicYear}\n`;
  csvContent += `KODE NASKAH;${packageKey ? `PAKET ${packageKey}` : 'BANK SOAL MASTER'}\n\n`;

  // Table headers
  csvContent += `No;Elemen Capaian;Materi Pokok / Topik;Capaian Pembelajaran (CP);Indikator Soal;Level Kognitif;Bentuk Soal;No Soal;Kunci\n`;

  items.forEach((item) => {
    const clean = (str: string) => `"${(str || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`;
    csvContent += [
      item.no,
      clean(item.elementName),
      clean(item.topic),
      clean(item.cp),
      clean(item.indicator),
      clean(item.level),
      clean(item.form),
      item.questionNumber,
      item.correctLetter || '-',
    ].join(';') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', title);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
