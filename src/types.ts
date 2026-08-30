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
  'BAB I: Berpikir Komputasional dalam Analisis Data',
  'BAB II: Berpikir Komputasional dalam Algoritma dan Pemrograman',
  'BAB III: Literasi Digital untuk Produktivitas',
  'BAB IV: Keamanan Digital',
];

export interface SubTopicItem {
  number: number;
  title: string;
  page?: number;
}

export interface SubBabItem {
  code: string; // 'A', 'B', 'C', etc.
  title: string;
  page?: number;
  subTopics?: SubTopicItem[];
}

export interface ChapterInfo {
  id: string;
  babNumber: string; // 'BAB I', 'BAB II', etc.
  title: string;
  fullTitle: string;
  pages: string;
  subBabs: SubBabItem[];
}

export const GRADE9_TEXTBOOK_CHAPTERS: ChapterInfo[] = [
  {
    id: 'bab-1',
    babNumber: 'BAB I',
    title: 'Berpikir Komputasional dalam Analisis Data',
    fullTitle: 'BAB I: Berpikir Komputasional dalam Analisis Data',
    pages: 'Hal. 1 - 38',
    subBabs: [
      {
        code: 'A',
        title: 'Struktur Data Tree',
        page: 7,
      },
      {
        code: 'B',
        title: 'Struktur Data Graph',
        page: 15,
      },
      {
        code: 'C',
        title: 'Analisis Himpunan Data Terstruktur dengan Teknik Visualisasi',
        page: 19,
        subTopics: [
          { number: 1, title: 'Menentukan Tujuan Analisis Data', page: 20 },
          { number: 2, title: 'Mengumpulkan Data yang Diperlukan', page: 21 },
          { number: 3, title: 'Menyiapkan dan Membersihkan Data', page: 21 },
          { number: 4, title: 'Mengeksplorasi Data', page: 22 },
          { number: 5, title: 'Memvisualisasikan dan Memublikasikan Hasil Analisis Data', page: 23 },
        ],
      },
    ],
  },
  {
    id: 'bab-2',
    babNumber: 'BAB II',
    title: 'Berpikir Komputasional dalam Algoritma dan Pemrograman',
    fullTitle: 'BAB II: Berpikir Komputasional dalam Algoritma dan Pemrograman',
    pages: 'Hal. 39 - 114',
    subBabs: [
      {
        code: 'A',
        title: 'Mengembangkan Library dalam Pemrograman Visual Blok',
        page: 42,
        subTopics: [
          { number: 1, title: 'Modularisasi Program', page: 43 },
          { number: 2, title: 'Library', page: 64 },
          { number: 3, title: 'Penggunaan Library', page: 66 },
        ],
      },
      {
        code: 'B',
        title: 'Pemrograman Visual Blok vs Pemrograman Tekstual',
        page: 76,
        subTopics: [
          { number: 1, title: 'Transisi dari Pemrograman Visual Blok ke Pemrograman Tekstual', page: 76 },
          { number: 2, title: 'Analisis Pseudocode', page: 106 },
        ],
      },
    ],
  },
  {
    id: 'bab-3',
    babNumber: 'BAB III',
    title: 'Literasi Digital untuk Produktivitas',
    fullTitle: 'BAB III: Literasi Digital untuk Produktivitas',
    pages: 'Hal. 115 - 180',
    subBabs: [
      {
        code: 'A',
        title: 'Pemrosesan Data',
        page: 119,
        subTopics: [
          { number: 1, title: 'Permasalahan Dasar Pemrosesan Data', page: 122 },
          { number: 2, title: 'Dampak Penggunaan Perkakas yang Baik dan Benar', page: 125 },
        ],
      },
      {
        code: 'B',
        title: 'Penyajian Data',
        page: 130,
        subTopics: [
          { number: 1, title: 'Jenis dan Format Data', page: 130 },
          { number: 2, title: 'Perangkat Lunak Produktivitas', page: 150 },
          { number: 3, title: 'Integrasi Data Konten', page: 164 },
        ],
      },
      {
        code: 'C',
        title: 'Perancangan Konten',
        page: 170,
        subTopics: [
          { number: 1, title: 'Strategi Perancangan Konten Digital', page: 171 },
          { number: 2, title: 'Perancangan Konten Digital Menggunakan Kecerdasan Artifisial (KA)', page: 174 },
        ],
      },
    ],
  },
  {
    id: 'bab-4',
    babNumber: 'BAB IV',
    title: 'Keamanan Digital',
    fullTitle: 'BAB IV: Keamanan Digital',
    pages: 'Hal. 181 - 240',
    subBabs: [
      {
        code: 'A',
        title: 'Jenis Informasi',
        page: 185,
        subTopics: [
          { number: 1, title: 'Data Pribadi Umum', page: 187 },
          { number: 2, title: 'Data Pribadi Spesifik', page: 187 },
        ],
      },
      {
        code: 'B',
        title: 'Serangan Siber',
        page: 194,
        subTopics: [
          { number: 1, title: 'Jenis Serangan Siber', page: 194 },
          { number: 2, title: 'Dampak Pada Teknologi Modern', page: 202 },
          { number: 3, title: 'Penanganan', page: 203 },
        ],
      },
      {
        code: 'C',
        title: 'Keamanan Jaringan Nirkabel di Ruang Publik',
        page: 209,
        subTopics: [
          { number: 1, title: 'Jaringan Nirkabel', page: 209 },
          { number: 2, title: 'Dampak Pengabaian Keamanan Jaringan', page: 210 },
          { number: 3, title: 'Risiko Pengiriman Data di Jaringan Publik', page: 211 },
        ],
      },
      {
        code: 'D',
        title: 'Perlindungan Data Pribadi',
        page: 215,
        subTopics: [
          { number: 1, title: 'Kata Sandi yang Kuat', page: 215 },
          { number: 2, title: 'Autentikasi Dua Faktor', page: 217 },
          { number: 3, title: 'Enkripsi dan Dekripsi', page: 218 },
          { number: 4, title: 'Update Software', page: 222 },
        ],
      },
      {
        code: 'E',
        title: 'Perilaku dan Kesadaran Penuh (Mindfulness) pada Dunia Digital',
        page: 225,
        subTopics: [
          { number: 1, title: 'Perilaku Digital', page: 226 },
          { number: 2, title: 'Mindfulness Dunia Digital', page: 229 },
          { number: 3, title: 'Pola Hidup Sehat Mendukung Kesehatan Mental', page: 235 },
        ],
      },
    ],
  },
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
  const m = (materiName || '').toLowerCase();
  if (m.includes('bab i:') || m.includes('bab 1') || m.includes('bab i ')) {
    return { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' };
  }
  if (m.includes('bab ii:') || m.includes('bab 2') || m.includes('bab ii ')) {
    return { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' };
  }
  if (m.includes('bab iii:') || m.includes('bab 3') || m.includes('bab iii ')) {
    return { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' };
  }
  if (m.includes('bab iv:') || m.includes('bab 4') || m.includes('bab iv ')) {
    return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' };
  }
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
  if (m.includes('tik') || m.includes('aplikasi') || m.includes('perkantoran') || m.includes('office') || m.includes('literasi')) {
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
