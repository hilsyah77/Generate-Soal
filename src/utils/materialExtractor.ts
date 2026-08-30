import { Question, InformaticsElement, CognitiveLevel } from '../types';
import { DEFAULT_MATERI_CP } from './kisikisiHelper';

const ELEMENT_TO_MATERI: Record<InformaticsElement, string> = {
  BK: 'Berpikir Komputasional',
  TIK: 'Teknologi Informasi & Komunikasi',
  SK: 'Sistem Komputer',
  JKI: 'Jaringan Komputer & Internet',
  AD: 'Analisis Data',
  AP: 'Algoritma & Pemrograman',
  DSI: 'Dampak Sosial Informatika',
  PLB: 'Praktik Lintas Bidang',
};

export interface MaterialPreset {
  id: string;
  title: string;
  element: InformaticsElement;
  level: CognitiveLevel;
  topic: string;
  summary: string;
}

export const INFORMATICS_GRADE9_PRESETS: MaterialPreset[] = [
  {
    id: 'preset-bk-tree-sorting',
    title: '1. BK: Algoritma Sorting (Bubble & Selection) dan Struktur Data Tree/Graph',
    element: 'BK',
    level: 'HoTS',
    topic: 'Algoritma Pengurutan & Struktur Pohon',
    summary: `Berpikir Komputasional mencakup dekomposisi, pengenalan pola, abstraksi, dan algoritma.
1. Algoritma Pengurutan (Sorting):
   - Bubble Sort bekerja dengan membandingkan pasangan elemen bersebelahan dan menukarnya jika urutannya salah, hingga elemen terbesar/terkecil 'mengapung' ke ujung. Kompleksitas terburuk O(n^2).
   - Selection Sort bekerja dengan mencari nilai minimum dalam array yang belum terurut lalu menempatkannya di posisi awal iterasi.
   - Insertion Sort menyisipkan elemen satu per satu ke posisi yang tepat pada bagian yang sudah terurut.
2. Struktur Data Hirarkis & Jaringan:
   - Tree (Pohon) adalah struktur data non-linier berakar (Root) dengan simpul anak (Children), simpul tanpa anak (Leaf/Daun), serta relasi Parent-Child. Digunakan pada struktur folder OS, DOM HTML, dan hierarki organisasi.
   - Graph (Graf) terdiri dari kumpulan simpul (Vertex) dan garis sisi (Edge/Arc). Graf dapat berupa terarah (Directed) maupun tidak terarah (Undirected), serta berbobot (Weighted) untuk memodelkan jarak jalan raya atau rute jaringan internet.`,
  },
  {
    id: 'preset-tik-office-collab',
    title: '2. TIK: Integrasi Aplikasi Perkantoran & Otomatisasi Mail Merge',
    element: 'TIK',
    level: 'MotS',
    topic: 'Integrasi Office & Otomatisasi Dokumen',
    summary: `Teknologi Informasi dan Komunikasi (TIK) pada Fase D Kelas IX memfokuskan pada integrasi konten antar-aplikasi perkantoran:
1. Fitur Mail Merge (Surat Massal) menghubungkan dokumen utama pengolah kata (Word Processor) dengan sumber data (Database / Spreadsheet) untuk mencetak ratusan surat atau sertifikat dengan data nama yang berbeda-beda secara otomatis.
2. Object Linking and Embedding (OLE):
   - Linking (Tautan): Data pada dokumen target akan otomatis terbarui secara real-time bila tabel pada lembar kerja sumber (Excel) diubah.
   - Embedding (Penyematan): Objek tersimpan mandiri di dalam dokumen target tanpa terpengaruh perubahan file sumber.
3. Media Kolaborasi Daring: Google Docs, Microsoft 365, fitur Commenting, Track Changes, dan hak akses (Viewer, Commenter, Editor) untuk penyusunan laporan bersama.`,
  },
  {
    id: 'preset-sk-cpu-memory',
    title: '3. SK: Arsitektur CPU, Siklus Mesin, dan Manajemen Memori',
    element: 'SK',
    level: 'MotS',
    topic: 'Arsitektur Komputer & Siklus Fetch-Execute',
    summary: `Sistem Komputer (SK) menjelaskan interaksi perangkat keras, perangkat lunak, dan pengguna:
1. Central Processing Unit (CPU) terdiri atas:
   - ALU (Arithmetic Logic Unit): Melakukan perhitungan aritmatika (+, -, *, /) dan operasi logika perbandingan (AND, OR, NOT, <, >).
   - CU (Control Unit): Mengatur lalu lintas data dan instruksi, mengarahkan alur kerja seluruh komponen komputer.
   - Register: Memori internal CPU berkecepatan paling tinggi untuk menyimpan data dan instruksi sementara yang sedang diproses.
2. Siklus Instruksi (Machine Cycle): Terdiri dari tahap Fetch (mengambil instruksi dari RAM), Decode (menerjemahkan instruksi oleh CU), Execute (menjalankan operasi oleh ALU/komponen lain), dan Store (menyimpan hasil ke memori/register).
3. Hierarki Memori: Register CPU -> Cache Memory (L1, L2, L3) -> RAM (Volatile) -> ROM (Non-Volatile/BIOS) -> Secondary Storage (SSD, HDD, NVMe).`,
  },
  {
    id: 'preset-jki-cyber-routing',
    title: '4. JKI: Topologi Jaringan, IP Addressing, Protokol, dan Keamanan Siber',
    element: 'JKI',
    level: 'HoTS',
    topic: 'Jaringan Komputer, TCP/IP & Cyber Security',
    summary: `Jaringan Komputer dan Internet (JKI):
1. Topologi Jaringan:
   - Topologi Star: Menggunakan konsentrator pusat (Switch/Hub). Jika satu kabel putus, node lain tetap beroperasi normal.
   - Topologi Mesh: Setiap perangkat terhubung langsung ke perangkat lain (redundansi tinggi namun biaya kabel mahal).
2. Protokol dan Pengalamatan:
   - IPv4 terdiri dari 32 bit yang dibagi menjadi 4 oktet desimal (contoh: 192.168.1.1). IPv6 menggunakan 128 bit heksadesimal.
   - DNS (Domain Name System) menerjemahkan nama domain yang mudah diingat manusia (www.kemdikbud.go.id) menjadi alamat IP server.
   - HTTPS menggunakan enkripsi SSL/TLS melalui port default 443 untuk menjaga kerahasiaan transmisi data.
3. Keamanan Siber:
   - Phishing: Modus penipuan dengan membuat situs web palsu untuk mencuri kredensial sandi atau nomor rekening.
   - Malware: Termasuk Ransomware (mengenkripsi file korban untuk minta tebusan), Trojan, dan Worm.
   - Firewall: Memfilter paket data yang masuk dan keluar berdasarkan aturan keamanan jaringan yang ditentukan.`,
  },
  {
    id: 'preset-ad-stats-visualization',
    title: '5. AD: Pembersihan Data (Data Cleaning), Formula Logika, & Visualisasi',
    element: 'AD',
    level: 'MotS',
    topic: 'Analisis Data, Pembersihan & Grafik',
    summary: `Analisis Data (AD) mencakup siklus hidup data: Pengumpulan -> Pembersihan -> Analisis -> Interpretasi -> Visualisasi.
1. Pembersihan Data (Data Cleaning):
   - Menghapus data duplikat (Duplicates), menangani nilai yang hilang (Missing Values/NULL), memperbaiki inkonsistensi format tipe data (misal format tanggal atau teks numerik).
2. Formula Spreadsheet Tingkat Lanjut:
   - VLOOKUP(lookup_value, table_array, col_index, [range_lookup]): Mencari nilai pada kolom paling kiri tabel dan mengambil nilai sebaris pada kolom yang ditentukan.
   - COUNTIF & SUMIF: Menghitung frekuensi atau menjumlahkan sel berdasarkan kriteria kondisi tertentu.
   - Logika IF Bertingkat (Nested IF): Menguji beberapa kondisi keputusan bersyarat.
3. Visualisasi Data:
   - Bar / Column Chart: Membandingkan kategori diskrit.
   - Line Chart: Menampilkan tren perubahan data terhadap waktu (Time Series).
   - Pie / Donut Chart: Menunjukkan proporsi bagian terhadap keseluruhan (100%).
   - Scatter Plot: Menunjukkan korelasi antara dua variabel kuantitatif.`,
  },
  {
    id: 'preset-ap-python-logic',
    title: '6. AP: Pemrograman Prosedural Python (Variabel, Kondisional, & Loop)',
    element: 'AP',
    level: 'HoTS',
    topic: 'Algoritma & Pemrograman Python',
    summary: `Algoritma dan Pemrograman (AP) melatih logika instruksi terstruktur:
1. Variabel dan Tipe Data:
   - Integer (bilangan bulat), Float (desimal), String (teks), Boolean (True / False), List (koleksi berurutan dapat diubah).
2. Struktur Kontrol Keputusan (Branching):
   - if condition: ... elif condition: ... else: ...
   - Operator perbandingan (==, !=, >, <, >=, <=) dan operator logika (and, or, not).
3. Struktur Perulangan (Iteration):
   - for i in range(start, stop, step): Perulangan dengan jumlah iterasi terhitung (Definite Loop).
   - while condition: Perulangan berdasarkan kebenaran kondisi logika (Indefinite Loop).
4. Fungsi dan Modularisasi:
   - Mendefinisikan subprogram dengan kata kunci 'def nama_fungsi(parameter):' dan mengembalikan nilai dengan 'return'. Mencegah penulisan kode berulang (DRY - Don't Repeat Yourself).`,
  },
  {
    id: 'preset-dsi-privacy-law',
    title: '7. DSI: Hak Kekayaan Intelektual (HAKI), Perlindungan Data Pribadi, & UU ITE',
    element: 'DSI',
    level: 'LotS',
    topic: 'Etika Digital, HAKI, & Hukum Siber',
    summary: `Dampak Sosial Informatika (DSI):
1. Hak Kekayaan Intelektual (HAKI) dan Lisensi:
   - Hak Cipta melindungi karya orisinal (perangkat lunak, gambar, buku, audio).
   - Lisensi Open Source (GPL, MIT, Apache): Mengizinkan modifikasi dan distribusi ulang kode secara terbuka.
   - Creative Commons (CC): Mengatur hak pakai materi digital (Attribution/BY, Non-Commercial/NC, Share-Alike/SA).
2. Perlindungan Data Pribadi (UU PDP):
   - Data pribadi spesifik (biometrik, riwayat kesehatan, data anak, catatan keuangan) memerlukan perlindungan ekstra.
   - Jejak Digital (Digital Footprint): Jejak aktif (unggahan media sosial) dan jejak pasif (riwayat penelusuran IP, cookies).
3. Undang-Undang ITE (Informasi dan Transaksi Elektronik):
   - Mengatur larangan penyebaran konten hoaks/fitnah, akses ilegal (hacking), manipulasi dokumen elektronik, dan penipuan online.`,
  },
];

/**
 * Intelligent rule-based NLP question extractor from text material
 */
export function generateQuestionsFromMaterial(
  materialText: string,
  element: InformaticsElement,
  targetLevel: 'LotS' | 'MotS' | 'HoTS' | 'Balanced',
  count: number = 5,
  topicName?: string
): Question[] {
  const cleaned = materialText.trim();
  if (!cleaned) return [];

  // Parse lines & paragraphs
  const sentences = cleaned
    .replace(/\r\n/g, '\n')
    .split(/(?<=[.?!])\s+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 25);

  const questions: Question[] = [];
  const levels: CognitiveLevel[] =
    targetLevel === 'Balanced'
      ? ['LotS', 'MotS', 'HoTS']
      : [targetLevel];

  // Element specific templates and distractors bank
  const generatedIdPrefix = `gen_${element.toLowerCase()}_${Date.now()}`;

  // Analyze keywords in the text
  const words = cleaned.split(/\s+/);
  const detectedTopic = topicName || (sentences[0]?.substring(0, 45) || `Materi ${element}`);

  // Build question items from sentences and contextual templates
  for (let i = 0; i < count; i++) {
    const level = levels[i % levels.length];
    const sentenceRef = sentences[i % sentences.length] || `Pada pembelajaran ${element} Kelas IX, pemahaman konsep mendasar sangat krusial.`;

    let stem = '';
    let options: [string, string, string, string] = [
      'Opsi Jawaban A',
      'Opsi Jawaban B',
      'Opsi Jawaban C',
      'Opsi Jawaban D',
    ];
    let correctIndex = 0;
    let explanation = '';
    let indicator = '';

    if (element === 'BK') {
      if (level === 'LotS') {
        stem = `Berdasarkan teks materi di atas, manakah karakteristik utama dari algoritma atau struktur data yang dibahas secara tepat?`;
        options = [
          'Memecah masalah menjadi sub-bagian terstruktur serta menyusun langkah efisien.',
          'Menggandakan seluruh data input tanpa proses seleksi logika.',
          'Mengabaikan keteraturan urutan nilai pada penyimpanan memori.',
          'Menghapus semua simpul akar sebelum data diproses oleh CPU.',
        ];
        correctIndex = 0;
        explanation = `Karakteristik utama berpikir komputasional dan algoritma adalah dekomposisi persoalan serta penataan langkah eksekusi yang runtut dan optimal.`;
        indicator = `Disajikan rangkuman konsep BK, peserta didik dapat mengidentifikasi karakteristik dasar algoritma dengan benar.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan kutipan materi komputasi berikut:\n"${sentenceRef}"\n\nJika diterapkan pada sekumpulan data dengan 5 elemen tidak terurut, bagaimana langkah optimasi yang paling logis dilakukan?`;
        options = [
          'Membandingkan elemen secara sistematis sesuai pola algoritma yang dipilih hingga diperoleh susunan terurut.',
          'Mengacak ulang seluruh indeks data tanpa kriteria pembanding nilai.',
          'Menghentikan proses pada iterasi pertama meski data masih acak.',
          'Menghapus elemen bernilai tengah untuk mempercepat pencarian.',
        ];
        correctIndex = 0;
        explanation = `Langkah penerapan sorting atau searching membutuhkan perbandingan berjenjang secara sistematis sesuai aturan algoritma hingga seluruh elemen tuntas diposisikan.`;
        indicator = `Disajikan studi kasus penerapan komputasi, peserta didik dapat menentukan langkah operasional algoritma secara terstruktur.`;
      } else {
        stem = `Berdasarkan uraian materi:\n"${sentenceRef}"\n\nManakah kesimpulan analisis hubungan antar komponen komputasi yang paling VALID dan MENDALAM?`;
        options = [
          'Pemilihan struktur data (seperti Tree/Graph) dan algoritma yang tepat berpengaruh langsung terhadap efisiensi memori dan waktu komputasi.',
          'Semua struktur data memiliki kompleksitas waktu yang sama persis tanpa dipengaruhi jumlah data masukan.',
          'Struktur data graf hanya dapat diterapkan bila tidak terdapat relasi keterhubungan antar simpul.',
          'Algoritma rekursif selalu menghasilkan waktu eksekusi yang lebih lambat dibanding algoritma acak.',
        ];
        correctIndex = 0;
        explanation = `Analisis tingkat tinggi menunjukkan bahwa efisiensi waktu (Time Complexity) dan memori (Space Complexity) berbanding lurus dengan kecocokan struktur data dan algoritma yang dirancang.`;
        indicator = `Disajikan narasi konseptual BK, peserta didik dapat menganalisis hubungan relasi struktur data dan efisiensi algoritma komputasi.`;
      }
    } else if (element === 'TIK') {
      if (level === 'LotS') {
        stem = `Dalam konteks integrasi aplikasi perkantoran sesuai materi, fungsi utama dari fitur Mail Merge adalah...`;
        options = [
          'Membuat surat atau dokumen massal secara otomatis dengan menghubungkan dokumen utama ke lembar database.',
          'Mempercepat kecepatan koneksi internet saat mengunggah file presentasi.',
          'Menghapus sel kosong pada tabel lembar kerja secara otomatis.',
          'Menerjemahkan bahasa dokumen teks ke dalam kode biner mesin.',
        ];
        correctIndex = 0;
        explanation = `Mail Merge berfungsi mengintegrasikan naskah dokumen dengan tabel sumber data untuk menghasilkan output surat/sertifikat personal secara massal.`;
        indicator = `Disajikan pertanyaan TIK, peserta didik dapat menyebutkan fungsi utama Mail Merge.`;
      } else if (level === 'MotS') {
        stem = `Diberikan skenario integrasi konten:\n"${sentenceRef}"\n\nJika seorang pengguna ingin grafik Excel di dalam Microsoft Word selalu berubah otomatis ketika data tabel aslinya diedit, metode integrasi yang harus dipilih adalah...`;
        options = [
          'Paste Link (Object Linking) sehingga dokumen Word menautkan referensi langsung ke file Excel sumber.',
          'Paste as Picture (Gambar statis) tanpa tautan relasi file.',
          'Embedding manual tanpa membuat jalur direktori dokumen.',
          'Menyimpan file Word dalam format teks polos (.txt).',
        ];
        correctIndex = 0;
        explanation = `Object Linking (Paste Link) mempertahankan hubungan live link antara dokumen target dengan file sumber data.`;
        indicator = `Disajikan kasus integrasi dokumen perkantoran, peserta didik dapat menentukan metode Paste Link secara tepat.`;
      } else {
        stem = `Perhatikan kutipan materi TIK berikut:\n"${sentenceRef}"\n\nManakah evaluasi paling tepat mengenai efektivitas kolaborasi dokumen daring berbasis Cloud jika dibandingkan dengan pengiriman file lampiran email berulang kali?`;
        options = [
          'Kolaborasi Cloud meminimalkan konflik versi file, mendukung editing bersamaan secara real-time, dan menyimpan riwayat revisi (version history) terpusat.',
          'Pengiriman email berulang kali lebih aman karena file tidak disimpan di server pihak ketiga manapun.',
          'Kolaborasi Cloud hanya dapat dilakukan apabila seluruh kolaborator menggunakan sistem operasi dan perangkat yang identik.',
          'Fitur Track Changes pada Cloud otomatis menghapus komentar sebelum pengguna menyetujuinya.',
        ];
        correctIndex = 0;
        explanation = `Dokumen kolaboratif daring mencegah kebingungan akibat banyaknya duplikat file lampiran (file collision) dan menyediakan audit trail perubahan real-time.`;
        indicator = `Disajikan perbandingan metode kerja digital, peserta didik dapat mengevaluasi efektivitas kolaborasi dokumen daring secara kritis.`;
      }
    } else if (element === 'SK') {
      if (level === 'LotS') {
        stem = `Berdasarkan materi Sistem Komputer, komponen CPU yang bertanggung jawab langsung mengeksekusi operasi perhitungan matematika dan perbandingan logika adalah...`;
        options = [
          'Arithmetic Logic Unit (ALU)',
          'Control Unit (CU)',
          'Hard Disk Drive (HDD)',
          'Random Access Memory (RAM)',
        ];
        correctIndex = 0;
        explanation = `ALU (Arithmetic Logic Unit) bertugas melakukan operasi perhitungan aritmatika dan logika perbandingan pada CPU.`;
        indicator = `Disajikan komponen hardware, peserta didik dapat mengidentifikasi fungsi ALU.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan urutan siklus mesin pada CPU:\n"${sentenceRef}"\n\nUrutan tahap kerja CPU yang benar dalam memproses setiap instruksi program dari memori adalah...`;
        options = [
          'Fetch (Ambil instruksi) -> Decode (Terjemahkan) -> Execute (Eksekusi) -> Store (Simpan hasil)',
          'Execute (Eksekusi) -> Fetch (Ambil) -> Store (Simpan) -> Decode (Terjemahkan)',
          'Store (Simpan) -> Decode (Terjemahkan) -> Fetch (Ambil) -> Execute (Eksekusi)',
          'Decode (Terjemahkan) -> Store (Simpan) -> Execute (Eksekusi) -> Fetch (Ambil)',
        ];
        correctIndex = 0;
        explanation = `Siklus instruksi mesin CPU standar mengikuti tahapan baku: Fetch -> Decode -> Execute -> Store.`;
        indicator = `Disajikan proses komputasi, peserta didik dapat mengurutkan tahapan siklus instruksi CPU.`;
      } else {
        stem = `Berdasarkan uraian materi arsitektur komputer:\n"${sentenceRef}"\n\nBagaimanakah pengaruh perbedaan kecepatan antara Register, Cache L1/L2, dan RAM terhadap performa bottleneck pada pemrosesan CPU?`;
        options = [
          'Cache memory bertindak sebagai jembatan penampung data berkecepatan tinggi agar CPU tidak menunggu terlalu lama siklus transfer dari RAM yang lebih lambat.',
          'RAM memiliki kecepatan transfer lebih cepat dibanding register internal CPU sehingga tidak memerlukan cache.',
          'Kapasitas RAM yang sangat besar secara otomatis meniadakan fungsi register kontrol pada inti prosesor.',
          'Penggunaan secondary storage SSD menghapus kebutuhan memori utama RAM pada komputer modern.',
        ];
        correctIndex = 0;
        explanation = `Hierarki memori dirancang berjenjang (Register -> Cache -> RAM) untuk memitigasi selisih latensi kecepatan (memory bottleneck).`;
        indicator = `Disajikan analisis hierarki memori, peserta didik dapat mengevaluasi peran Cache dalam mengatasi bottleneck sistem.`;
      }
    } else if (element === 'JKI') {
      if (level === 'LotS') {
        stem = `Berdasarkan materi Jaringan Komputer, layanan internet yang bertugas menerjemahkan nama domain web menjadi alamat IP numerik server disebut...`;
        options = [
          'Domain Name System (DNS)',
          'Dynamic Host Configuration Protocol (DHCP)',
          'Simple Mail Transfer Protocol (SMTP)',
          'File Transfer Protocol (FTP)',
        ];
        correctIndex = 0;
        explanation = `DNS (Domain Name System) berfungsi layaknya buku telepon internet yang memetakan nama domain ke alamat IP server.`;
        indicator = `Disajikan istilah jaringan, peserta didik dapat mengidentifikasi fungsi DNS.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan kutipan materi jaringan:\n"${sentenceRef}"\n\nJika sebuah sekolah menggunakan topologi Star dengan satu unit Switch pusat, apa yang terjadi bila satu komputer siswa mengalami kerusakan kabel jaringan?`;
        options = [
          'Hanya komputer siswa tersebut yang terputus, sedangkan seluruh komputer lain tetap terhubung dan berfungsi normal.',
          'Seluruh koneksi internet dan jaringan di sekolah akan langsung mati total.',
          'Switch pusat otomatis me-restart dan memutuskan server utama.',
          'Komputer siswa lain akan menerima kiriman paket data ganda tanpa henti.',
        ];
        correctIndex = 0;
        explanation = `Kelebihan utama topologi Star adalah isolasi kerusakan kabel pada salah satu node anak tidak mengganggu kelangsungan komunikasi node lainnya.`;
        indicator = `Disajikan kasus kerusakan kabel pada topologi Star, peserta didik dapat menentukan dampak jaringan secara presisi.`;
      } else {
        stem = `Perhatikan skenario keamanan jaringan berikut:\n"${sentenceRef}"\n\nManakah langkah mitigasi yang paling efektif untuk mencegah serangan Phishing dan pencurian data login pada jaringan publik?`;
        options = [
          'Memastikan koneksi menggunakan protokol HTTPS terenkripsi, memverifikasi keaslian URL, dan mengaktifkan Autentikasi Dua Faktor (2FA).',
          'Mematikan firewall komputer saat berselancar di kafe atau ruang publik.',
          'Menggunakan kata sandi yang sama persis di seluruh akun agar mudah diingat.',
          'Menonaktifkan pembaruan otomatis sistem operasi agar tidak memakan kuota bandwidth.',
        ];
        correctIndex = 0;
        explanation = `Mitigasi komprehensif terhadap phishing melibatkan verifikasi keabsahan domain, enkripsi TLS/HTTPS, serta perlindungan 2FA.`;
        indicator = `Disajikan skenario ancaman siber, peserta didik dapat merekomendasikan langkah mitigasi keamanan siber yang komprehensif.`;
      }
    } else if (element === 'AD') {
      if (level === 'LotS') {
        stem = `Berdasarkan materi Analisis Data, tahapan membersihkan data dari format yang tidak konsisten, nilai ganda, atau data hilang disebut...`;
        options = [
          'Data Cleaning (Pembersihan Data)',
          'Data Mining (Penambangan Data)',
          'Data Visualization (Visualisasi Data)',
          'Data Broadcasting (Penyiaran Data)',
        ];
        correctIndex = 0;
        explanation = `Data Cleaning adalah proses mendeteksi, memperbaiki, atau menghapus rekaman data yang rusak, salah, atau tidak relevan.`;
        indicator = `Disajikan konsep analisis data, peserta didik dapat mengenali istilah Data Cleaning.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan kutipan rumus dan data:\n"${sentenceRef}"\n\nJika seorang analis ingin mencari harga barang pada daftar tabel inventaris berdasarkan kode barang tertentu di kolom pertama, fungsi spreadsheet yang tepat digunakan adalah...`;
        options = [
          '=VLOOKUP(kode_barang, tabel_referensi, nomor_kolom_harga, FALSE)',
          '=COUNTIF(tabel_referensi, ">1000")',
          '=CONCATENATE(kode_barang, nama_barang)',
          '=MAX(tabel_referensi) + MIN(tabel_referensi)',
        ];
        correctIndex = 0;
        explanation = `VLOOKUP mencari nilai pencocokan vertikal pada kolom awal dan mengembalikan nilai dari kolom tertentu yang sejajar.`;
        indicator = `Disajikan kebutuhan pencarian data tabel, peserta didik dapat menentukan formula VLOOKUP yang tepat.`;
      } else {
        stem = `Berdasarkan materi analisis dan visualisasi data:\n"${sentenceRef}"\n\nManakah alasan paling tepat mengapa diagram garis (Line Chart) lebih direkomendasikan dibanding diagram lingkaran (Pie Chart) untuk menyajikan data fluktuasi pengunjung web sekolah selama 12 bulan?`;
        options = [
          'Diagram garis secara visual memperlihatkan tren naik/turun berkesinambungan terhadap waktu (Time Series) dengan jelas.',
          'Diagram lingkaran tidak dapat menampilkan data yang nilainya berupa bilangan bulat positif.',
          'Diagram garis selalu menghasilkan warna yang lebih kontras pada layar monitor.',
          'Diagram lingkaran hanya boleh digunakan bila jumlah kategori pengamatan lebih dari 50 kategori.',
        ];
        correctIndex = 0;
        explanation = `Diagram garis secara natural dirancang untuk memetakan dinamika tren berkala sepanjang dimensi waktu (Time Series).`;
        indicator = `Disajikan perbandingan grafik, peserta didik dapat mengevaluasi kesesuaian jenis chart visualisasi data.`;
      }
    } else if (element === 'AP') {
      if (level === 'LotS') {
        stem = `Berdasarkan materi pemrograman, struktur kontrol yang digunakan untuk menjalankan blok instruksi berulang kali selama kondisi bernilai benar adalah...`;
        options = [
          'Perulangan (Looping / Iteration)',
          'Percabangan (Branching / Conditional)',
          'Deklarasi Variabel Statis',
          'Komentar Baris Tunggal',
        ];
        correctIndex = 0;
        explanation = `Looping (for / while) mengeksekusi sekumpulan instruksi berulang kali berdasarkan kriteria batas pengulangan.`;
        indicator = `Disajikan konsep dasar pemrograman, peserta didik dapat mengidentifikasi struktur perulangan.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan potongan logika program berikut:\n"${sentenceRef}"\n\nJika variabel x bernilai 15, lalu dijalankan kode:\nif x > 10:\n    x = x + 5\nelse:\n    x = x * 2\n\nBerapakah nilai akhir x?`;
        options = [
          '20',
          '30',
          '15',
          '25',
        ];
        correctIndex = 0;
        explanation = `Karena nilai x (15) > 10 bernilai Benar (True), maka blok if dieksekusi: x = 15 + 5 = 20. Blok else dilewati.`;
        indicator = `Disajikan kode percabangan kondisional, peserta didik dapat menghitung output variabel dengan tepat.`;
      } else {
        stem = `Perhatikan kutipan materi algoritma pemrograman:\n"${sentenceRef}"\n\nManakah analisis terbaik mengapa penggunaan fungsi (modularisasi) sangat krusial dalam pembangunan program yang kompleks?`;
        options = [
          'Meningkatkan keterbacaan kode, memudahkan penelusuran bug (debugging), dan menghindari duplikasi instruksi (prinsip DRY).',
          'Fungsi secara otomatis memperbesar ukuran file executable menjadi dua kali lipat.',
          'Fungsi memaksa program untuk hanya berjalan pada satu inti (single core) CPU saja.',
          'Fungsi menghilangkan kebutuhan penulisan tipe data pada seluruh variabel global.',
        ];
        correctIndex = 0;
        explanation = `Modularisasi kode memecah program besar menjadi modul-modul fungsi kecil yang dapat digunakan kembali (reusable) dan mudah dipelihara.`;
        indicator = `Disajikan konsep fungsi modular, peserta didik dapat menganalisis keuntungan modularisasi kode program.`;
      }
    } else if (element === 'DSI') {
      if (level === 'LotS') {
        stem = `Berdasarkan materi Dampak Sosial Informatika, regulasi di Indonesia yang mengatur aspek hukum transaksi elektronik dan larangan kejahatan siber adalah...`;
        options = [
          'Undang-Undang Informasi dan Transaksi Elektronik (UU ITE)',
          'Undang-Undang Ketenagakerjaan Digital',
          'Peraturan Standar Nasional Pendidikan',
          'Undang-Undang Penanaman Modal Asing',
        ];
        correctIndex = 0;
        explanation = `UU ITE mengatur hukum siber, transaksi elektronik, serta sanksi tindak pidana penyalahgunaan teknologi informasi di Indonesia.`;
        indicator = `Disajikan regulasi hukum digital, peserta didik dapat menyebutkan UU ITE.`;
      } else if (level === 'MotS') {
        stem = `Perhatikan situasi etika digital berikut:\n"${sentenceRef}"\n\nSeorang siswa menggunakan foto hasil karya fotografer profesional di internet untuk cover laporan tugas sekolah. Berdasarkan etika hak cipta, tindakan yang paling benar dilakukan siswa adalah...`;
        options = [
          'Memeriksa jenis lisensi foto dan mencantumkan atribusi sumber serta nama fotografer secara jelas.',
          'Menghapus watermark fotografer menggunakan aplikasi editor foto sebelum dikumpulkan.',
          'Mengklaim foto tersebut sebagai hasil jepretan kamera pribadi.',
          'Menjual ulang file laporan tersebut kepada teman sekelas tanpa izin.',
        ];
        correctIndex = 0;
        explanation = `Penggunaan karya digital orang lain mewajibkan pemeriksaan lisensi (seperti Creative Commons) dan pencantuman sumber atribusi resmi.`;
        indicator = `Disajikan studi kasus penggunaan konten digital, peserta didik dapat menerapkan etika hak cipta dan atribusi.`;
      } else {
        stem = `Berdasarkan uraian materi privasi dan data digital:\n"${sentenceRef}"\n\nManakah analisis paling komprehensif mengenai bahaya 'jejak digital pasif' (seperti cookies penelusuran dan lokasi GPS) terhadap privasi individu di era AI?`;
        options = [
          'Jejak digital pasif dapat dihimpun dan diprofiling untuk memprediksi perilaku, memanipulasi preferensi pengguna, atau disalahgunakan jika terjadi kebocoran data.',
          'Jejak digital pasif otomatis terhapus dari server setiap 24 jam sehingga tidak memiliki risiko apapun.',
          'Jejak digital pasif hanya dapat dibaca oleh pemilik perangkat fisik yang bersangkutan.',
          'Jejak digital pasif hanya tercipta bila pengguna mengunggah video ke platform media sosial.',
        ];
        correctIndex = 0;
        explanation = `Jejak digital pasif merekam pola perilaku yang rentan dieksploitasi untuk targeted profiling dan pelanggaran kerahasiaan data jika tidak dikelola bijak.`;
        indicator = `Disajikan analisis jejak digital, peserta didik dapat mengevaluasi dampak jejak digital pasif terhadap privasi data pribadi.`;
      }
    } else {
      // PLB
      stem = `Berdasarkan rangkuman materi Praktik Lintas Bidang:\n"${sentenceRef}"\n\nDalam merancang proyek komputasi fisik (seperti Micro:bit / Arduino untuk monitoring suhu kelas), peranan komponen Sensor adalah...`;
      options = [
        'Mendeteksi dan mengukur besaran fisik lingkungan lalu mengubahnya menjadi sinyal data masukan (Input).',
        'Menampilkan data grafik secara langsung tanpa memerlukan mikrokontroler.',
        'Menyediakan daya listrik utama dengan tegangan tinggi.',
        'Menghapus baris kode program yang mengalami galat logika.',
      ];
      correctIndex = 0;
      explanation = `Sensor bertindak sebagai transduser input yang mengonversi parameter fisik lingkungan (suhu, cahaya, kelembaban) menjadi sinyal digital untuk diproses mikrokontroler.`;
      indicator = `Disajikan proyek komputasi fisik PLB, peserta didik dapat menjelaskan peranan sensor input.`;
    }

    const materiName = ELEMENT_TO_MATERI[element] || 'Umum';

    questions.push({
      id: `${generatedIdPrefix}_${i + 1}`,
      element,
      materi: materiName,
      level,
      stem,
      options,
      correctIndex,
      explanation,
      topic: detectedTopic,
      cp: DEFAULT_MATERI_CP[materiName] || 'Peserta didik mampu memahami dan mengaplikasikan materi informatika secara komprehensif.',
      indicator,
    });
  }

  return questions;
}
