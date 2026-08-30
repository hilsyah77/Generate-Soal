export type CognitiveLevel = 'LotS' | 'MotS' | 'HoTS';

export type InformaticsElement = 'BK' | 'TIK' | 'SK' | 'JKI' | 'AD' | 'AP' | 'DSI' | 'PLB';

export interface Question {
  id: string;
  element: InformaticsElement;
  level: CognitiveLevel;
  stem: string;
  options: [string, string, string, string]; // 4 choices (A, B, C, D)
  correctIndex: number; // 0, 1, 2, 3
  explanation: string;
  topic?: string;
  cp?: string;
  indicator?: string;
}

export interface PackageQuestion {
  num: number;
  id: string;
  element: InformaticsElement;
  level: CognitiveLevel;
  stem: string;
  options: string[];
  correctIndex: number;
  correctLetter: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  topic?: string;
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
  selectedElements: InformaticsElement[];
}

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
