import { Question } from '../types';

export const DEFAULT_QUESTIONS: Question[] = [
  // ==================== BK (Berpikir Komputasional) - 7 Soal ====================
  {
    id: 'q_bk_1',
    element: 'BK',
    level: 'MotS',
    stem: 'Diberikan sekumpulan data angka tidak terurut: [14, 7, 22, 3, 11]. Jika kita menerapkan algoritma Bubble Sort untuk mengurutkannya secara ascending (dari terkecil ke terbesar), bagaimanakah susunan elemen setelah iterasi/pass pertama selesai?',
    options: [
      '[7, 14, 3, 11, 22]',
      '[3, 7, 11, 14, 22]',
      '[7, 3, 11, 14, 22]',
      '[14, 7, 3, 11, 22]'
    ],
    correctIndex: 0,
    explanation: 'Pada pass pertama Bubble Sort ascending: (14 vs 7 -> tukar -> 7,14,22,3,11), (14 vs 22 -> tetap), (22 vs 3 -> tukar -> 7,14,3,22,11), (22 vs 11 -> tukar -> 7,14,3,11,22). Nilai terbesar (22) telah berhasil mengapung ke posisi paling ujung kanan.',
    topic: 'Algoritma Pengurutan (Bubble Sort)'
  },
  {
    id: 'q_bk_2',
    element: 'BK',
    level: 'HoTS',
    stem: 'Sebuah struktur silsilah keluarga dimodelkan menggunakan Tree (Pohon). Kakek Budi berada di posisi paling atas (Root). Kakek Budi memiliki dua anak yaitu Pak Andi dan Ibu Bella. Ibu Bella memiliki seorang anak bernama Cici. Manakah analisis relasi node berikut yang paling TEPAT?',
    options: [
      'Cici adalah Leaf (daun), Ibu Bella adalah Parent dari Cici sekaligus Child dari Kakek Budi.',
      'Pak Andi adalah Root kedua dan Cici merupakan Sibling langsung dari Pak Andi.',
      'Cici adalah Ancestor dari Ibu Bella dan Kakek Budi adalah Leaf utama.',
      'Ibu Bella dan Cici berkedudukan pada derajat/level kedalaman (depth) yang sama.'
    ],
    correctIndex: 0,
    explanation: 'Kakek Budi adalah Root. Ibu Bella adalah Child dari Kakek Budi sekaligus Parent dari Cici. Karena Cici tidak memiliki cabang/anak lagi di bawahnya, maka simpul Cici disebut Leaf Node (daun).',
    topic: 'Struktur Data Tree'
  },
  {
    id: 'q_bk_3',
    element: 'BK',
    level: 'LotS',
    stem: 'Algoritma pencarian yang bekerja dengan cara membagi ruang pencarian menjadi dua bagian yang sama besar secara berulang-ulang pada data yang SUDAH terurut disebut...',
    options: [
      'Binary Search (Pencarian Biner)',
      'Linear Search (Pencarian Linier)',
      'Random Search (Pencarian Acak)',
      'Brute Force Search'
    ],
    correctIndex: 0,
    explanation: 'Binary Search (Pencarian Biner) membagi rentang pencarian data terurut menjadi 2 separuh di setiap langkah sehingga memiliki kompleksitas waktu sangat efisien O(log n).',
    topic: 'Algoritma Pencarian'
  },
  {
    id: 'q_bk_4',
    element: 'BK',
    level: 'MotS',
    stem: 'Struktur data Graph (Graf) yang digunakan untuk memodelkan jaringan peta jalan antar kota terdiri dari dua komponen pokok, yaitu...',
    options: [
      'Vertex / Node (Simpul titik) dan Edge (Sisi / Garis penghubung)',
      'Root (Akar) dan Leaf (Daun ranting)',
      'Push (Masuk) dan Pop (Keluar antrean)',
      'Field (Kolom) dan Record (Baris data)'
    ],
    correctIndex: 0,
    explanation: 'Graf matematika/komputer tersusun atas himpunan V (Vertex/simpul yang mewakili entitas/kota) dan E (Edge/sisi berbobot atau tak berbobot yang menghubungkan antar simpul).',
    topic: 'Struktur Data Graph'
  },
  {
    id: 'q_bk_5',
    element: 'BK',
    level: 'HoTS',
    stem: 'Perhatikan ekspresi logika proposisi berikut: NOT (P AND Q). Menurut Hukum De Morgan dalam logika komputasional, ekspresi tersebut ekuivalen (senilai) dengan...',
    options: [
      '(NOT P) OR (NOT Q)',
      '(NOT P) AND (NOT Q)',
      'P OR Q',
      'NOT (P OR Q)'
    ],
    correctIndex: 0,
    explanation: 'Berdasarkan Hukum De Morgan pertama: Negasi dari konjungsi (NOT (P AND Q)) ekuivalen dengan disjungsi dari masing-masing negasi, yaitu ((NOT P) OR (NOT Q)).',
    topic: 'Logika Proposisi & Aljabar Boolean'
  },
  {
    id: 'q_bk_6',
    element: 'BK',
    level: 'MotS',
    stem: 'Pada algoritma Insertion Sort, bagaimana proses penyisipan kartu baru ke dalam sekumpulan kartu yang sudah terurut di tangan kiri?',
    options: [
      'Menyisipkan kartu baru pada posisi yang tepat dengan menggeser kartu yang bernilai lebih besar ke kanan.',
      'Menukar kartu baru secara acak dengan kartu paling tengah.',
      'Menempatkan selalu di posisi paling akhir tanpa memeriksa nilai kartu lain.',
      'Membuang kartu dengan nilai terkecil lalu mengambil kartu baru.'
    ],
    correctIndex: 0,
    explanation: 'Insertion Sort bekerja analog seperti menyusun kartu di tangan, di mana elemen baru disisipkan pada posisi yang sesuai di antara elemen-elemen yang telah terurut sebelumnya.',
    topic: 'Algoritma Insertion Sort'
  },
  {
    id: 'q_bk_7',
    element: 'BK',
    level: 'HoTS',
    stem: 'Diberikan antrean rumah sakit yang menggunakan konsep struktur data Queue (Antrean) dengan prinsip FIFO (First In First Out). Pasien A, B, dan C datang berurutan. Pasien A dilayani dan keluar, kemudian pasien D datang. Siapakah yang berada di barisan paling depan untuk dilayani berikutnya?',
    options: [
      'Pasien B',
      'Pasien C',
      'Pasien D',
      'Pasien A kembali'
    ],
    correctIndex: 0,
    explanation: 'Prinsip FIFO (First In First Out) melayani elemen yang masuk lebih awal. Setelah A keluar, urutan antrean depan adalah B, kemudian C, lalu D.',
    topic: 'Struktur Data Queue (FIFO)'
  },

  // ==================== TIK (Teknologi Informasi dan Komunikasi) - 6 Soal ====================
  {
    id: 'q_tik_1',
    element: 'TIK',
    level: 'MotS',
    stem: 'Saat menyusun Surat Undangan Pengambilan Rapor Siswa menggunakan fitur Mail Merge pada aplikasi pengolah kata yang dihubungkan dengan berkas data spreadsheet, fungsi utama Mail Merge adalah...',
    options: [
      'Menghasilkan dokumen massal berformat sama namun informasi data penerima berbeda secara otomatis.',
      'Mengonversi berkas dokumen DOCX menjadi format PDF secara otomatis dalam sekali klik.',
      'Mengunci berkas dengan proteksi kata sandi enkripsi agar tidak dapat disunting orang lain.',
      'Menyisipkan rumus statistika data keuangan otomatis langsung ke dalam badan paragraf surat.'
    ],
    correctIndex: 0,
    explanation: 'Mail Merge (Surat Massal) menggabungkan dokumen template utama (Main Document) dengan basis data (Data Source) sehingga ribuan surat dapat terisi nama, alamat, dan nomor secara otomatis dan tepat.',
    topic: 'Integrasi Aplikasi Perkantoran (Mail Merge)'
  },
  {
    id: 'q_tik_2',
    element: 'TIK',
    level: 'LotS',
    stem: 'Pada aplikasi pengolah kata profesional, fitur yang digunakan untuk membuat Daftar Isi (Table of Contents) secara otomatis dan rapi mengharuskan pengguna memformat judul bab dan sub-bab dengan menggunakan...',
    options: [
      'Heading Styles (Heading 1, Heading 2, dst.)',
      'Text Highlight Color',
      'Strikethrough and Underline',
      'WordArt Effects'
    ],
    correctIndex: 0,
    explanation: 'Daftar isi otomatis bekerja dengan membaca penanda hirarki Heading Styles (Heading 1 untuk Bab, Heading 2 untuk Sub-bab) yang telah diterapkan pada teks dokumen.',
    topic: 'Pengolah Kata Lanjutan'
  },
  {
    id: 'q_tik_3',
    element: 'TIK',
    level: 'HoTS',
    stem: 'Sekelompok siswa sedang mengerjakan tugas makalah kelompok secara daring melalui Google Docs. Tiba-tiba salah satu anggota tidak sengaja menghapus 3 halaman materi penting. Langkah paling efektif dan aman untuk memulihkan halaman yang terhapus tanpa mengetik ulang adalah...',
    options: [
      'Membuka Version History (Riwayat Versi) lalu memulihkan (restore) versi dokumen sebelum waktu kejadian penghapusan.',
      'Membuat dokumen baru lalu meminta semua anggota menuliskan ulang ingatan mereka.',
      'Menutup peramban web dan menghapus riwayat cache peramban.',
      'Mengunduh dokumen ke format teks biasa (.txt) lalu mengunggahnya kembali.'
    ],
    correctIndex: 0,
    explanation: 'Cloud office suites seperti Google Docs dan Microsoft 365 memiliki fitur Version History yang mencatat setiap perubahan per menit, memungkinkan rollback / restore versi dokumen secara instan tanpa kehilangan data.',
    topic: 'Kolaborasi Dokumen Daring'
  },
  {
    id: 'q_tik_4',
    element: 'TIK',
    level: 'MotS',
    stem: 'Di aplikasi spreadsheet, rumus =VLOOKUP(A2, D2:G20, 3, FALSE) digunakan untuk mencari data. Angka 3 pada parameter rumus tersebut menunjukkan...',
    options: [
      'Mengambil nilai hasil dari kolom ke-3 pada tabel referensi range D2:G20.',
      'Melakukan pencarian sebanyak 3 kali iterasi.',
      'Mencari data yang berjarak 3 baris dari sel A2.',
      'Membagi hasil pencarian dengan angka 3.'
    ],
    correctIndex: 0,
    explanation: 'Parameter ke-3 pada fungsi VLOOKUP adalah col_index_num yang menyatakan nomor urut kolom pada range referensi yang nilainya ingin diambil.',
    topic: 'Spreadsheet Formula VLOOKUP'
  },
  {
    id: 'q_tik_5',
    element: 'TIK',
    level: 'LotS',
    stem: 'Teknologi integrasi yang memungkinkan grafik dari spreadsheet disematkan ke dalam slide presentasi dan otomatis terbarui saat data spreadsheet diubah disebut...',
    options: [
      'OLE (Object Linking and Embedding)',
      'Screenshot Capturing',
      'Plain Text Export',
      'Format Painter'
    ],
    correctIndex: 0,
    explanation: 'Object Linking and Embedding (OLE) memungkinkan penautan objek antar aplikasi sehingga perubahan pada file sumber langsung terefleksi pada dokumen penerima.',
    topic: 'Integrasi Antar Aplikasi (OLE)'
  },
  {
    id: 'q_tik_6',
    element: 'TIK',
    level: 'HoTS',
    stem: 'Guru meminta Anda membuat presentasi interaktif di mana saat siswa mengklik tombol "Kuis", slide akan langsung melompat ke slide nomor 15. Fitur yang paling tepat digunakan adalah...',
    options: [
      'Hyperlink / Action Button menuju Slide 15',
      'Slide Transition Fade Effect',
      'Custom Animation Float In',
      'Header and Footer Slide Number'
    ],
    correctIndex: 0,
    explanation: 'Fitur Hyperlink atau Action Button pada aplikasi presentasi memungkinkan navigasi non-linier ke slide tertentu, link eksternal, atau file lain.',
    topic: 'Presentasi Interaktif Hyperlink'
  },

  // ==================== SK (Sistem Komputer) - 6 Soal ====================
  {
    id: 'q_sk_1',
    element: 'SK',
    level: 'LotS',
    stem: 'Komponen utama di dalam CPU (Central Processing Unit) yang bertugas khusus melakukan perhitungan matematis (penjumlahan, pengurangan) serta perbandingan logika adalah...',
    options: [
      'ALU (Arithmetic Logic Unit)',
      'CU (Control Unit)',
      'Register Memory',
      'ROM BIOS'
    ],
    correctIndex: 0,
    explanation: 'ALU (Arithmetic Logic Unit) adalah sirkuit digital pada prosesor yang menangani seluruh operasi aritmatika numerik dan logika boolean (AND, OR, NOT, perbandingan nilai).',
    topic: 'Arsitektur CPU'
  },
  {
    id: 'q_sk_2',
    element: 'SK',
    level: 'MotS',
    stem: 'Sistem bilangan Heksadesimal berbasis 16 menggunakan kombinasi simbol angka 0–9 dan huruf A–F. Berapakah nilai desimal dari bilangan heksadesimal 2E₁₆?',
    options: [
      '46',
      '38',
      '42',
      '50'
    ],
    correctIndex: 0,
    explanation: 'Konversi 2E₁₆ ke desimal: (2 × 16¹) + (E × 16⁰) = (2 × 16) + (14 × 1) = 32 + 14 = 46.',
    topic: 'Sistem Bilangan Heksadesimal'
  },
  {
    id: 'q_sk_3',
    element: 'SK',
    level: 'HoTS',
    stem: 'Sebuah gerbang logika NAND menerima dua masukan (Input A dan Input B). Kapankah gerbang NAND tersebut akan menghasilkan sinyal keluaran (Output) bernilai 0 (Low / False)?',
    options: [
      'Hanya ketika Input A = 1 dan Input B = 1',
      'Ketika Input A = 0 dan Input B = 0',
      'Ketika salah satu input bernilai 0 dan input lain bernilai 1',
      'Gerbang NAND tidak pernah dapat menghasilkan output bernilai 0'
    ],
    correctIndex: 0,
    explanation: 'Gerbang NAND adalah negasi dari AND (NOT AND). Output bernilai 0 hanya jika semua input bernilai 1 (True). Jika ada input bernilai 0, output NAND bernilai 1.',
    topic: 'Gerbang Logika Digital (NAND Gate)'
  },
  {
    id: 'q_sk_4',
    element: 'SK',
    level: 'LotS',
    stem: 'Hierarki memori komputer dari yang memiliki kecepatan akses tertinggi hingga terendah adalah...',
    options: [
      'Register CPU -> Cache Memory -> RAM -> Harddisk / SSD',
      'Harddisk -> RAM -> Cache Memory -> Register CPU',
      'RAM -> Register CPU -> Harddisk -> Cache Memory',
      'Cache Memory -> Harddisk -> RAM -> Register CPU'
    ],
    correctIndex: 0,
    explanation: 'Register berada langsung di dalam CPU dengan akses tercepat, diikuti Cache (L1/L2/L3), RAM (Main Memory), dan Secondary Storage (SSD/HDD).',
    topic: 'Hierarki Memori Komputer'
  },
  {
    id: 'q_sk_5',
    element: 'SK',
    level: 'MotS',
    stem: 'Siklus instruksi dasar yang dijalankan prosesor komputer secara berulang-ulang untuk memproses program adalah...',
    options: [
      'Fetch (Ambil) -> Decode (Terjemahkan) -> Execute (Eksekusi)',
      'Compile -> Link -> Build',
      'Input -> Storage -> Print',
      'Download -> Install -> Reboot'
    ],
    correctIndex: 0,
    explanation: 'Siklus instruksi CPU (Instruction Cycle) terdiri atas: Fetch (mengambil instruksi dari RAM), Decode (mengartikan instruksi di CU), dan Execute (menjalankan di ALU/register).',
    topic: 'Siklus Fetch-Decode-Execute CPU'
  },
  {
    id: 'q_sk_6',
    element: 'SK',
    level: 'HoTS',
    stem: 'Ketika memori utama (RAM) komputer penuh saat membuka banyak program berat secara bersamaan, Sistem Operasi mengalokasikan sebagian ruang harddisk sebagai memori cadangan. Fitur ini dikenal sebagai...',
    options: [
      'Virtual Memory (Paging / Swap Space)',
      'Overclocking Processor',
      'Disk Defragmenter',
      'Firmware Flashing'
    ],
    correctIndex: 0,
    explanation: 'Virtual Memory memanfaatkan ruang penyimpanan sekunder sebagai perpanjangan kapasitas RAM fisik ketika alokasi memori utama telah mencapai batas maksimal.',
    topic: 'Manajemen Virtual Memory'
  },

  // ==================== JKI (Jaringan Komputer dan Internet) - 6 Soal ====================
  {
    id: 'q_jki_1',
    element: 'JKI',
    level: 'LotS',
    stem: 'Perangkat jaringan yang berfungsi menghubungkan dua atau lebih jaringan yang memiliki subnet atau segmen jaringan berbeda, serta menentukan rute terbaik (routing) untuk paket data adalah...',
    options: [
      'Router',
      'Switch Unmanaged',
      'Hub Pasif',
      'Repeater Kabel'
    ],
    correctIndex: 0,
    explanation: 'Router bekerja pada Layer 3 (Network Layer) untuk merutekan paket data antar jaringan yang berbeda subnet IP Address.',
    topic: 'Perangkat Jaringan Komputer'
  },
  {
    id: 'q_jki_2',
    element: 'JKI',
    level: 'MotS',
    stem: 'Topologi jaringan komputer di mana semua komputer klien dihubungkan ke satu konsentrator pusat (seperti Switch) disebut...',
    options: [
      'Topologi Star (Bintang)',
      'Topologi Bus (Linier)',
      'Topologi Ring (Cincin)',
      'Topologi Mesh Penuh'
    ],
    correctIndex: 0,
    explanation: 'Topologi Star menghubungkan setiap node langsung ke central node/switch. Keuntungannya jika satu kabel klien putus, jaringan klien lain tidak terganggu.',
    topic: 'Topologi Jaringan Komputer'
  },
  {
    id: 'q_jki_3',
    element: 'JKI',
    level: 'HoTS',
    stem: 'Ketika mengakses alamat situs bank https://www.bankxyz.co.id, terdapat ikon gembok hijau dan awalan protokol "HTTPS". Mengapa protokol HTTPS jauh lebih aman dibandingkan HTTP biasa?',
    options: [
      'Data transmisi antara peramban dan server dienkripsi menggunakan sertifikat SSL/TLS sehingga tidak dapat disadap (eavesdropped).',
      'HTTPS memastikan situs web bebas dari segala macam virus komputer.',
      'HTTPS membuat kecepatan koneksi internet meningkat sepuluh kali lipat.',
      'HTTPS menjamin server web tidak akan pernah mengalami downtime (server down).'
    ],
    correctIndex: 0,
    explanation: 'HTTPS (Hypertext Transfer Protocol Secure) menerapkan enkripsi end-to-end melalui protokol SSL/TLS yang melindungi kerahasiaan dan integritas data dari serangan Man-in-the-Middle.',
    topic: 'Keamanan Protokol Jaringan (HTTPS & SSL/TLS)'
  },
  {
    id: 'q_jki_4',
    element: 'JKI',
    level: 'LotS',
    stem: 'Format penulisan alamat IP versi 4 (IPv4) standar tersusun atas...',
    options: [
      '32 bit bilangan biner yang dibagi menjadi 4 oktet desimal (contoh: 192.168.1.1)',
      '128 bit bilangan heksadesimal (contoh: 2001:db8::1)',
      '64 bit bilangan oktal tanpa tanda titik',
      '16 karakter huruf alfabet'
    ],
    correctIndex: 0,
    explanation: 'IPv4 berukuran 32-bit yang direpresentasikan dalam 4 bagian oktet desimal bernilai 0–255 yang dipisahkan oleh tanda titik (dot-decimal notation).',
    topic: 'Pengalamatan IPv4'
  },
  {
    id: 'q_jki_5',
    element: 'JKI',
    level: 'MotS',
    stem: 'Layanan internet yang bertugas menerjemahkan nama domain (seperti google.com) menjadi alamat IP numerik server (seperti 142.250.190.46) adalah...',
    options: [
      'DNS (Domain Name System)',
      'DHCP (Dynamic Host Configuration Protocol)',
      'FTP (File Transfer Protocol)',
      'SMTP (Simple Mail Transfer Protocol)'
    ],
    correctIndex: 0,
    explanation: 'DNS berfungsi seperti buku telepon internet yang memetakan nama domain ramah manusia ke alamat IP mesin tujuan.',
    topic: 'Domain Name System (DNS)'
  },
  {
    id: 'q_jki_6',
    element: 'JKI',
    level: 'HoTS',
    stem: 'Di laboratorium komputer sekolah, terdapat kebutuhan agar komputer siswa tidak dapat mengakses situs media sosial selama jam pelajaran. Perangkat/sistem keamanan yang paling tepat dikonfigurasi untuk memfilter lalu lintas jaringan tersebut adalah...',
    options: [
      'Firewall & Web Content Filter pada Gateway Router',
      'Mengganti semua kabel UTP dengan kabel Fiber Optic',
      'Mematikan layar monitor semua komputer klien',
      'Menaikkan bandwidth paket internet sekolah'
    ],
    correctIndex: 0,
    explanation: 'Firewall dengan fitur URL/Content Filtering pada router gateway dapat memblokir paket dan domain tertentu sesuai aturan kebijakan akses sekolah.',
    topic: 'Keamanan Jaringan & Firewall Filtering'
  },

  // ==================== AD (Analisis Data) - 6 Soal ====================
  {
    id: 'q_ad_1',
    element: 'AD',
    level: 'MotS',
    stem: 'Sebuah berkas survei minat ekstrakurikuler siswa memiliki beberapa data kosong (missing value), format tanggal yang tidak seragam, dan nama siswa ganda (duplikat). Tahapan dalam siklus pengolahan data untuk memperbaiki masalah tersebut sebelum dilakukan analisis disebut...',
    options: [
      'Data Cleaning (Pembersihan Data)',
      'Data Visualization (Visualisasi Data)',
      'Data Encryption (Enkripsi Data)',
      'Data Mining (Penambangan Data)'
    ],
    correctIndex: 0,
    explanation: 'Data Cleaning adalah proses mendeteksi, mengoreksi, menghapus data duplikat, serta menangani nilai hilang agar dataset berkualitas dan valid untuk dianalisis.',
    topic: 'Pembersihan Data (Data Cleaning)'
  },
  {
    id: 'q_ad_2',
    element: 'AD',
    level: 'LotS',
    stem: 'Pada aplikasi pengolah angka (spreadsheet), rumus yang paling tepat digunakan untuk menghitung jumlah siswa yang mendapatkan nilai Ujian Informatika DI ATAS 75 dari rentang sel C2 sampai C40 adalah...',
    options: [
      '=COUNTIF(C2:C40, ">75")',
      '=SUMIF(C2:C40, ">75")',
      '=AVERAGEIF(C2:C40, ">75")',
      '=MAX(C2:C40)'
    ],
    correctIndex: 0,
    explanation: 'COUNTIF menghitung frekuensi sel yang memenuhi kriteria tertentu (">75"). Sedangkan SUMIF menjumlahkan total nilai numerik, bukan menghitung banyaknya siswa.',
    topic: 'Fungsi Agregasi Bersyarat (COUNTIF)'
  },
  {
    id: 'q_ad_3',
    element: 'AD',
    level: 'HoTS',
    stem: 'Seorang peneliti ingin memvisualisasikan tren kenaikan rata-rata suhu udara bulanan di Kota Jakarta selama 5 tahun berturut-turut. Jenis diagram (chart) yang paling tepat, efektif, dan komunikatif untuk menampilkan tren data berkelanjutan menurut waktu (time-series) tersebut adalah...',
    options: [
      'Line Chart (Diagram Garis)',
      'Pie Chart (Diagram Lingkaran)',
      'Donut Chart',
      'Radar Chart'
    ],
    correctIndex: 0,
    explanation: 'Line Chart (Diagram Garis) adalah standar terbaik untuk menunjukkan tren, pola fluktuasi, dan perubahan berkelanjutan sepanjang deret waktu (time series).',
    topic: 'Visualisasi Data & Pemilihan Grafik'
  },
  {
    id: 'q_ad_4',
    element: 'AD',
    level: 'LotS',
    stem: 'Ukuran pemusatan data statistik yang menunjukkan nilai yang paling sering muncul dalam suatu kumpulan data disebut...',
    options: [
      'Modus (Mode)',
      'Median (Nilai Tengah)',
      'Mean (Rata-rata)',
      'Standar Deviasi'
    ],
    correctIndex: 0,
    explanation: 'Modus adalah nilai data dengan frekuensi kemunculan tertinggi dalam suatu distribusi data statistik.',
    topic: 'Statistika Dasar Analisis Data'
  },
  {
    id: 'q_ad_5',
    element: 'AD',
    level: 'MotS',
    stem: 'Ketika kita ingin menyembunyikan identitas pribadi responden (seperti NIK, Nomor HP) dari dataset publik penelitian tanpa merusak pola analisis data, teknik yang digunakan disebut...',
    options: [
      'Anonimisasi Data (Data Anonymization)',
      'Data Compression',
      'Data Formatting',
      'Data Web Scraping'
    ],
    correctIndex: 0,
    explanation: 'Anonimisasi data melindungi privasi subjek dengan menghapus atau menyamarkan Personally Identifiable Information (PII) sebelum data dibagikan secara terbuka.',
    topic: 'Etika & Privasi Data'
  },
  {
    id: 'q_ad_6',
    element: 'AD',
    level: 'HoTS',
    stem: 'Diberikan dataset nilai matematika dan fisika 50 siswa. Nilai koefisien korelasi Pearson antara kedua mata pelajaran adalah +0.88. Kesimpulan analisis data yang paling tepat adalah...',
    options: [
      'Terdapat hubungan positif yang kuat; siswa yang nilainya tinggi di matematika cenderung memiliki nilai tinggi juga di fisika.',
      'Tidak ada korelasi sama sekali antara nilai matematika dan fisika.',
      'Siswa yang tinggi nilai matematikanya pasti gagal di nilai fisika.',
      'Nilai matematika menyebabkan langsung peningkatan nilai fisika secara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Koefisien korelasi positif mendekati +1 (+0.88) menunjukkan hubungan linier positif kuat searah antara kedua variabel.',
    topic: 'Interpretasi Korelasi Data'
  },

  // ==================== AP (Algoritma dan Pemrograman) - 7 Soal ====================
  {
    id: 'q_ap_1',
    element: 'AP',
    level: 'MotS',
    stem: 'Perhatikan potongan kode program Python berikut:\n\ntotal = 0\nfor i in range(1, 6):\n    total = total + i\nprint(total)\n\nBerapakah output angka yang dicetak pada layar saat program selesai dijalankan?',
    options: [
      '15',
      '10',
      '21',
      '6'
    ],
    correctIndex: 0,
    explanation: 'Fungsi range(1, 6) menghasilkan deret angka [1, 2, 3, 4, 5]. Nilai total dijumlahkan secara berurutan: 0 + 1 + 2 + 3 + 4 + 5 = 15.',
    topic: 'Struktur Perulangan (Looping For)'
  },
  {
    id: 'q_ap_2',
    element: 'AP',
    level: 'HoTS',
    stem: 'Perhatikan potongan kode program percabangan berikut:\n\nx = 12\nif x % 2 == 0 and x > 10:\n    print("Kategori A")\nelif x % 3 == 0:\n    print("Kategori B")\nelse:\n    print("Kategori C")\n\nManakah teks yang akan dicetak pada terminal?',
    options: [
      'Kategori A',
      'Kategori B',
      'Kategori C',
      'Kategori A dan Kategori B'
    ],
    correctIndex: 0,
    explanation: 'Nilai x = 12. Kondisi pertama diperiksa: 12 % 2 == 0 (True) AND 12 > 10 (True). Karena kondisi `if` pertama terpenuhi (True), blok program mencetak "Kategori A" dan keluar dari percabangan.',
    topic: 'Percabangan Logika Bersyarat (If-Elif-Else)'
  },
  {
    id: 'q_ap_3',
    element: 'AP',
    level: 'MotS',
    stem: 'Dalam pembuatan aplikasi perangkat lunak yang kompleks, mengapa programmer disarankan membagi kode ke dalam fungsi/prosedur modular tersendiri?',
    options: [
      'Menerapkan prinsip Modularitas dan Reusability sehingga kode program tidak perlu ditulis berulang kali dan mudah dirawat.',
      'Membuat ukuran file program menjadi dua kali lipat lebih besar agar prosesor bekerja maksimal.',
      'Menghilangkan keharusan penggunaan variabel di dalam seluruh kode program.',
      'Mengubah bahasa pemrograman visual menjadi file biner mesin secara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Fungsi / Prosedur membagi program besar menjadi bagian modular kecil yang dapat dipanggil berkali-kali (reusable), mempermudah pelacakan error (debugging), dan meningkatkan keterbacaan kode.',
    topic: 'Modularitas & Pembuatan Fungsi'
  },
  {
    id: 'q_ap_4',
    element: 'AP',
    level: 'LotS',
    stem: 'Struktur kontrol pemrograman yang digunakan untuk memilih salah satu jalur instruksi berdasarkan kondisi bernilai benar (True) atau salah (False) dinamakan...',
    options: [
      'Percabangan / Kondisional (Branching)',
      'Perulangan / Iterasi (Looping)',
      'Deklarasi Variabel (Declaration)',
      'Komentar Kode (Comments)'
    ],
    correctIndex: 0,
    explanation: 'Percabangan (If-Else / Switch) mengontrol alur eksekusi instruksi berdasarkan pengujian kondisi logika boolean.',
    topic: 'Struktur Kontrol Percabangan'
  },
  {
    id: 'q_ap_5',
    element: 'AP',
    level: 'LotS',
    stem: 'Tipe data pemrograman yang hanya dapat menyimpan dua kemungkinan nilai logika, yaitu Benar (True) atau Salah (False) adalah...',
    options: [
      'Boolean',
      'Integer',
      'String',
      'Float'
    ],
    correctIndex: 0,
    explanation: 'Tipe data Boolean (bool) merepresentasikan nilai kebenaran biner: True atau False.',
    topic: 'Tipe Data Primitif'
  },
  {
    id: 'q_ap_6',
    element: 'AP',
    level: 'HoTS',
    stem: 'Perhatikan potongan algoritma pencarian nilai maksimum berikut:\n\nangka = [8, 25, 12, 40, 19]\nmaks = angka[0]\nfor item in angka:\n    if item > maks:\n        maks = item\n\nSetelah perulangan selesai, berapakah nilai akhir pada variabel maks?',
    options: [
      '40',
      '25',
      '8',
      '19'
    ],
    correctIndex: 0,
    explanation: 'Algoritma memeriksa setiap elemen list. Ketika item bernilai 40, kondisi item > maks terpenuhi sehingga nilai maks diperbarui menjadi 40 yang merupakan nilai terbesar.',
    topic: 'Algoritma Pencarian Nilai Ekstrem (Max/Min)'
  },
  {
    id: 'q_ap_7',
    element: 'AP',
    level: 'MotS',
    stem: 'Proses menemukan, melacak, dan memperbaiki kesalahan/kerusakan (bugs) logika sintaks pada kode program sebelum dirilis disebut...',
    options: [
      'Debugging',
      'Compiling',
      'Deploying',
      'Refactoring'
    ],
    correctIndex: 0,
    explanation: 'Debugging adalah proses terstruktur untuk mendiagnosis dan menghilangkan bug atau kecacatan program agar berjalan sesuai spesifikasi yang diinginkan.',
    topic: 'Debugging Program'
  },

  // ==================== DSI (Dampak Sosial Informatika) - 6 Soal ====================
  {
    id: 'q_dsi_1',
    element: 'DSI',
    level: 'LotS',
    stem: 'Kejahatan siber berupa upaya penipuan dengan memanipulasi korban melalui email atau tautan situs web palsu yang menyerupai institusi resmi (seperti bank) untuk mencuri kata sandi dan data kartu kredit dikenal dengan istilah...',
    options: [
      'Phishing',
      'Cyberbullying',
      'Deface',
      'Carding Bot'
    ],
    correctIndex: 0,
    explanation: 'Phishing adalah bentuk rekayasa sosial (social engineering) di mana penipu membuat umpan situs/email palsu guna mengelabui korban agar menyerahkan data pribadi penting.',
    topic: 'Keamanan Digital & Phishing'
  },
  {
    id: 'q_dsi_2',
    element: 'DSI',
    level: 'MotS',
    stem: 'Lisensi perangkat lunak yang memberikan kebebasan kepada pengguna untuk melihat kode sumber (source code), memodifikasi, dan mendistribusikan kembali perangkat lunak secara terbuka disebut lisensi...',
    options: [
      'Open Source (Sumber Terbuka)',
      'Proprietary (Hak Milik Komersial Tertutup)',
      'Freemium Berbayar',
      'Trial Version Berbatas Waktu'
    ],
    correctIndex: 0,
    explanation: 'Perangkat lunak Open Source (misalnya Linux, LibreOffice, Blender) dirilis dengan lisensi terbuka (seperti GPL, MIT, Apache) yang mengizinkan siapa saja mempelajari dan memodifikasi kode sumbernya.',
    topic: 'Lisensi Perangkat Lunak'
  },
  {
    id: 'q_dsi_3',
    element: 'DSI',
    level: 'HoTS',
    stem: 'Siti menerima pesan berantai di grup aplikasi pesan singkat yang mengklaim bahwa "vaksinasi di sekolah menyebabkan sinyal ponsel terganggu". Langkah berpikir kritis dan etis yang paling benar dilakukan oleh Siti sesuai literasi digital adalah...',
    options: [
      'Melakukan cek fakta (fact-checking) di portal resmi pemerintah/Kemenkes atau situs cek fakta terpercaya sebelum membagikan.',
      'Langsung meneruskan pesan tersebut ke seluruh kontak grup keluarga agar waspada.',
      'Menyebarkan pesan tersebut dengan menambahkan opini pribadi yang lebih dramatis.',
      'Mematikan ponsel selama satu minggu tanpa memeriksa kebenarannya.'
    ],
    correctIndex: 0,
    explanation: 'Literasi digital menuntut sikap kritis (saring sebelum sharing) dengan memverifikasi sumber berita melalui saluran resmi atau lembaga pemeriksa fakta terakreditasi sebelum menyebarluaskan informasi.',
    topic: 'Literasi Digital & Verifikasi Fakta'
  },
  {
    id: 'q_dsi_4',
    element: 'DSI',
    level: 'LotS',
    stem: 'Fitur keamanan akun digital yang mengharuskan pengguna memasukkan kode verifikasi kedua (misalnya kode SMS atau aplikasi authenticator) selain kata sandi utama disebut...',
    options: [
      '2FA (Two-Factor Authentication)',
      'Captcha Verification',
      'Single Sign-On (SSO)',
      'Password Reset Token'
    ],
    correctIndex: 0,
    explanation: 'Two-Factor Authentication (2FA) memberikan lapisan pertahanan ganda sehingga akun tetap terlindungi meski kata sandi utama diketahui peretas.',
    topic: 'Keamanan Akun & Autentikasi 2FA'
  },
  {
    id: 'q_dsi_5',
    element: 'DSI',
    level: 'MotS',
    stem: 'Jejak digital (digital footprint) pasif yang ditinggalkan pengguna saat menjelajah internet tanpa disadari meliputi...',
    options: [
      'Alamat IP komputer, riwayat penjelajahan cookie, dan data lokasi perangkat',
      'Status postingan foto di media sosial',
      'Komentar yang ditulis pada video YouTube',
      'Email konfirmasi yang dikirimkan ke guru'
    ],
    correctIndex: 0,
    explanation: 'Jejak digital pasif tercipta secara otomatis tanpa aksi sadar pengguna, seperti log server, IP address, device fingerprints, dan cookies pelacak.',
    topic: 'Jejak Digital & Privasi Internet'
  },
  {
    id: 'q_dsi_6',
    element: 'DSI',
    level: 'HoTS',
    stem: 'Tindakan menyalin karya tulisan, kode program, atau desain grafis milik orang lain dari internet lalu mengakuinya sebagai karya ciptaan sendiri tanpa menyebutkan sumber referensi merupakan pelanggaran hak cipta yang disebut...',
    options: [
      'Plagiarisme (Plagiarism)',
      'Fair Use (Penggunaan Wajar)',
      'Public Domain Distribution',
      'Creative Commons Attribution'
    ],
    correctIndex: 0,
    explanation: 'Plagiarisme adalah tindakan penjiplakan karya intelektual orang lain dan mengklaimnya sebagai milik pribadi, melanggar etika akademis dan undang-undang hak cipta.',
    topic: 'Hak Kekayaan Intelektual & Etika Digital'
  },

  // ==================== PLB (Praktik Lintas Bidang) - 6 Soal ====================
  {
    id: 'q_plb_1',
    element: 'PLB',
    level: 'MotS',
    stem: 'Dalam metode Design Thinking saat mengembangkan proyek aplikasi solusi permasalahan sekolah, tahapan membuat model tiruan atau rancangan awal antarmuka sederhana (mockup/wireframe) agar dapat diuji coba langsung oleh calon pengguna disebut tahapan...',
    options: [
      'Prototyping (Pembuatan Prototipe)',
      'Empathize (Berempati)',
      'Define (Mendefinisikan Masalah)',
      'Ideate (Menghasilkan Ide Solusi)'
    ],
    correctIndex: 0,
    explanation: 'Tahap Prototype dalam Design Thinking adalah proses pembuatan artefak produk versi awal yang cepat dan berbiaya rendah untuk menguji konsep ide solusi kepada pengguna.',
    topic: 'Metodologi Design Thinking'
  },
  {
    id: 'q_plb_2',
    element: 'PLB',
    level: 'HoTS',
    stem: 'Ketika sebuah kelompok siswa sedang menyelesaikan proyek pembuatan media interaktif tentang mitigasi bencana alam, salah satu anggota tim mengusulkan agar mereka melakukan pengujian (Testing) kepada teman-teman sekelas sebelum presentasi akhir. Manakah manfaat utama dari pelaksanaan pengujian awal tersebut?',
    options: [
      'Menemukan bug, kesalahan navigasi, dan mendapatkan umpan balik langsung untuk perbaikan kualitas aplikasi sebelum dinilai.',
      'Memastikan bahwa kelompok lain tidak dapat membuat karya yang lebih menarik.',
      'Menghindari keharusan membuat laporan dokumentasi akhir proyek.',
      'Mengurangi jumlah anggota kelompok yang harus hadir saat hari presentasi.'
    ],
    correctIndex: 0,
    explanation: 'Uji coba (Testing) bermanfaat untuk validasi fungsional, menemukan kegagalan program (bug), dan mengukur kepuasan pengguna (user feedback) untuk penyempurnaan sebelum peluncuran resmi.',
    topic: 'Pengujian & Evaluasi Proyek Informatika'
  },
  {
    id: 'q_plb_3',
    element: 'PLB',
    level: 'LotS',
    stem: 'Alat bantu visual manajemen proyek berbentuk papan kolom status tugas (To Do, In Progress, Done) yang populer digunakan tim pengembang perangkat lunak disebut...',
    options: [
      'Kanban Board (Papan Kanban)',
      'Pie Chart Generator',
      'Syntax Tree Visualizer',
      'Entity Relationship Diagram'
    ],
    correctIndex: 0,
    explanation: 'Papan Kanban (seperti Trello/Jira) memvisualisasikan alur kerja tim dalam kolom tugas (To Do, Sedang Dikerjakan, Selesai) untuk transparansi progres.',
    topic: 'Manajemen Proyek Kolaboratif (Kanban)'
  },
  {
    id: 'q_plb_4',
    element: 'PLB',
    level: 'MotS',
    stem: 'Tahap pertama dalam metode Design Thinking di mana pengembang berusaha memahami kebutuhan mendalam, keluhan, dan sudut pandang calon pengguna melalui wawancara dan observasi adalah tahap...',
    options: [
      'Empathize (Empati)',
      'Ideate (Ideasi)',
      'Prototype (Prototipe)',
      'Testing (Pengujian)'
    ],
    correctIndex: 0,
    explanation: 'Empathize adalah langkah awal untuk menempatkan diri pada posisi pengguna, menggali permasalahan nyata yang mereka hadapi sebelum merancang solusi teknis.',
    topic: 'Design Thinking (Tahap Empathize)'
  },
  {
    id: 'q_plb_5',
    element: 'PLB',
    level: 'LotS',
    stem: 'Dokumen tertulis yang menjelaskan panduan instalasi, cara pengoperasian fitur aplikasi, dan petunjuk pemecahan masalah bagi pengguna akhir disebut...',
    options: [
      'User Manual / Panduan Pengguna',
      'Source Code Repository',
      'Database Schema Script',
      'Compiler Log Output'
    ],
    correctIndex: 0,
    explanation: 'User Manual / Buku Petunjuk Pengguna mendokumentasikan tata cara penggunaan aplikasi secara jelas dan mudah dipahami oleh pengguna umum.',
    topic: 'Dokumentasi Produk Informatika'
  },
  {
    id: 'q_plb_6',
    element: 'PLB',
    level: 'HoTS',
    stem: 'Dalam presentasi proyek karya informatika di hadapan guru dan juri (pitching), strategi penyampaian yang paling efektif untuk meyakinkan audiens adalah...',
    options: [
      'Menjelaskan latar belakang masalah nyata, mendemonstrasikan prototipe solusi yang bekerja, serta dampak manfaat bagi pengguna.',
      'Membacakan seluruh baris kode program dari slide awal hingga akhir.',
      'Hanya menampilkan animasi desain slide tanpa memperlihatkan cara kerja aplikasi.',
      'Menyalahkan kelompok lain yang memiliki ide topik serupa.'
    ],
    correctIndex: 0,
    explanation: 'Pitching yang baik memadukan storytelling problem-solution, live demo produk fungsional, dan uraian dampak nyata bagi penerima manfaat.',
    topic: 'Presentasi & Komunikasi Karya Teknologi'
  }
];
