export type CognitiveLevel = 'LotS' | 'MotS' | 'HoTS';

export type InformaticsElement = 'BK' | 'TIK' | 'SK' | 'JKI' | 'AD' | 'AP' | 'DSI' | 'PLB';

export interface Question {
  id: string;
  materi: string; // Materi / Pokok Bahasan Utama
  level: CognitiveLevel;
  stem: string;
  options: [string, string, string, string]; // 4 choices (A, B, C, D)
  correctIndex: number; // 0, 1, 2, 3
  explanation: string; // Pembahasan Soal Lengkap
  topic?: string; // Sub-topik / bahasan spesifik (opsional)
  element?: InformaticsElement; // Kompatibilitas elemen kurikulum
  cp?: string; // Capaian Pembelajaran
  indicator?: string; // Indikator Soal
}

export interface PackageQuestion {
  num: number;
  id: string;
  materi: string;
  level: CognitiveLevel;
  stem: string;
  options: string[];
  correctIndex: number;
  correctLetter: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic?: string;
  element?: InformaticsElement;
  cp?: string;
  indicator?: string;
}

export type PackageKey = 'A' | 'B' | 'C' | 'D';

export type GeneratedPackages = {
  [key in PackageKey]?: PackageQuestion[];
};

export interface ExamHeaderConfig {
  schoolName: string;
  examTitle: string;
  subject: string;
  gradeLevel: string;
  semester: string;
  academicYear: string;
  timeLimit: string;
  teacherName: string;
}

export interface GeneratorConfig {
  questionCount: number;
  packages: PackageKey[];
  shuffleOptions: boolean;
  shuffleQuestions: boolean;
  selectedMateris: string[]; // Filter berdasarkan Materi Pembahasan
  selectedElements?: InformaticsElement[];
}

export const SUGGESTED_MATERI = [
  'Berpikir Komputasional',
  'Algoritma & Pemrograman',
  'Sistem Komputer',
  'Jaringan Komputer & Internet',
  'Analisis Data',
  'Dampak Sosial Informatika',
  'Teknologi Informasi & Komunikasi',
  'Praktik Lintas Bidang',
];

export const ELEMENT_LABELS: Record<InformaticsElement, { short: string; full: string; color: string; badgeBg: string }> = {
  BK: {
    short: 'BK',
    full: 'Berpikir Komputasional',
    color: 'text-purple-700',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  TIK: {
    short: 'TIK',
    full: 'Teknologi Informasi & Komunikasi',
    color: 'text-blue-700',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  SK: {
    short: 'SK',
    full: 'Sistem Komputer',
    color: 'text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  JKI: {
    short: 'JKI',
    full: 'Jaringan Komputer & Internet',
    color: 'text-cyan-700',
    badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  AD: {
    short: 'AD',
    full: 'Analisis Data',
    color: 'text-emerald-700',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  AP: {
    short: 'AP',
    full: 'Algoritma & Pemrograman',
    color: 'text-indigo-700',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  DSI: {
    short: 'DSI',
    full: 'Dampak Sosial Informatika',
    color: 'text-rose-700',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  PLB: {
    short: 'PLB',
    full: 'Praktik Lintas Bidang',
    color: 'text-teal-700',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
  },
};

// Helper to get styling for any custom or standard materi name
export function getMateriBadgeStyle(materiName: string): { bg: string; text: string; border: string } {
  const m = materiName.toLowerCase();
  if (m.includes('algoritma') || m.includes('pemrograman') || m.includes('coding') || m.includes('python')) {
    return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
  }
  if (m.includes('berpikir') || m.includes('komputasional') || m.includes('logika')) {
    return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
  }
  if (m.includes('jaringan') || m.includes('internet') || m.includes('ip') || m.includes('router')) {
    return { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' };
  }
  if (m.includes('sistem') || m.includes('hardware') || m.includes('cpu') || m.includes('memori')) {
    return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' };
  }
  if (m.includes('data') || m.includes('analisis') || m.includes('statistik') || m.includes('chart')) {
    return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' };
  }
  if (m.includes('sosial') || m.includes('etika') || m.includes('hukum') || m.includes('keamanan')) {
    return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
  }
  if (m.includes('tik') || m.includes('aplikasi') || m.includes('perkantoran') || m.includes('office')) {
    return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
  }
  if (m.includes('praktik') || m.includes('lintas') || m.includes('proyek') || m.includes('design')) {
    return { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200' };
  }
  return { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' };
}

export const COGNITIVE_LABELS: Record<CognitiveLevel, { label: string; desc: string; badge: string }> = {
  LotS: {
    label: 'LotS',
    desc: 'C1-C2 (Mengingat & Memahami)',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  MotS: {
    label: 'MotS',
    desc: 'C3 (Menerapkan & Menghitung)',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  HoTS: {
    label: 'HoTS',
    desc: 'C4-C5 (Menganalisis & Mengevaluasi)',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
  },
};
