import { Question } from '../types';

export const DEFAULT_QUESTIONS: Question[] = [
  // ==================== BK (Berpikir Komputasional) ====================
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

  // ==================== TIK (Teknologi Informasi dan Komunikasi) ====================
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

  // ==================== SK (Sistem Komputer) ====================
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
      '54',
      '28'
    ],
    correctIndex: 0,
    explanation: 'Konversi 2E₁₆ ke desimal: (2 * 16¹) + (E * 16⁰) = (2 * 16) + (14 * 1) = 32 + 14 = 46.',
    topic: 'Sistem Bilangan Heksadesimal'
  },
  {
    id: 'q_sk_3',
    element: 'SK',
    level: 'HoTS',
    stem: 'Urutan hierarki memori komputer dari yang memiliki KECEPATAN AKSES PALING CEPAT namun berkapasitas relatif kecil hingga ke yang paling lambat adalah...',
    options: [
      'Register CPU -> Cache Memory -> RAM -> Secondary Storage (SSD/HDD)',
      'RAM -> Cache Memory -> Register CPU -> Secondary Storage',
      'Secondary Storage -> RAM -> Cache Memory -> Register CPU',
      'Cache Memory -> RAM -> Register CPU -> Cloud Storage'
    ],
    correctIndex: 0,
    explanation: 'Register berada langsung di dalam inti prosesor (paling cepat, ukuran byte), disusul Cache (L1, L2, L3), RAM (memori utama volatile), dan terakhir Secondary Storage (SSD/HDD - paling lambat tapi berkapasitas gigabyte/terabyte).',
    topic: 'Hierarki Memori Komputer'
  },
  {
    id: 'q_sk_4',
    element: 'SK',
    level: 'MotS',
    stem: 'Bilangan biner 101101₂ jika dikonversikan ke dalam sistem bilangan desimal bernilai...',
    options: [
      '45',
      '43',
      '37',
      '51'
    ],
    correctIndex: 0,
    explanation: '101101₂ = (1*32) + (0*16) + (1*8) + (1*4) + (0*2) + (1*1) = 32 + 0 + 8 + 4 + 0 + 1 = 45.',
    topic: 'Konversi Biner ke Desimal'
  },

  // ==================== JKI (Jaringan Komputer dan Internet) ====================
  {
    id: 'q_jki_1',
    element: 'JKI',
    level: 'HoTS',
    stem: 'Sebuah laboratorium komputer mengalami masalah di mana Komputer 12 tidak dapat terhubung ke internet, padahal komputer di sebelahnya yang tersambung ke switch yang sama bekerja normal. Saat diperiksa melalui Command Prompt menggunakan perintah `ipconfig`, Komputer 12 menunjukkan alamat IP: 169.254.20.101. Apakah penyebab utama kasus tersebut?',
    options: [
      'Komputer gagal mendapatkan konfigurasi IP dari server DHCP dan beralih ke APIPA (Automatic Private IP Addressing).',
      'Kabel fiber optik ISP pusat putus total sehingga seluruh kecamatan kehilangan sinyal.',
      'Sistem pendingin prosesor komputer mati sehingga port LAN dinonaktifkan secara paksa.',
      'Kartu grafis (GPU) komputer mengalami crash perangkat lunak driver.'
    ],
    correctIndex: 0,
    explanation: 'Alamat IP dengan prefiks 169.254.x.x adalah alamat APIPA (Automatic Private IP Addressing) yang dialokasikan oleh sistem operasi Windows ketika komputer gagal memperoleh alamat IP dari DHCP Server (misalnya karena kabel LAN longgar, switch port error, atau IP pool habis).',
    topic: 'Troubleshooting Jaringan & DHCP'
  },
  {
    id: 'q_jki_2',
    element: 'JKI',
    level: 'LotS',
    stem: 'Protokol transfer web yang aman dan mengenkripsi seluruh pertukaran data antara peramban (browser) dan peladen (server) dengan sertifikat SSL/TLS ditandai dengan awalan...',
    options: [
      'HTTPS (Hypertext Transfer Protocol Secure)',
      'FTP (File Transfer Protocol)',
      'HTTP (Hypertext Transfer Protocol biasa)',
      'SMTP (Simple Mail Transfer Protocol)'
    ],
    correctIndex: 0,
    explanation: 'HTTPS mengenkripsi paket data menggunakan protokol SSL/TLS sehingga data sensitif seperti password dan transaksi perbankan aman dari penyadapan (eavesdropping).',
    topic: 'Protokol Keamanan Web'
  },
  {
    id: 'q_jki_3',
    element: 'JKI',
    level: 'MotS',
    stem: 'Topologi jaringan komputer di mana setiap komputer klien terhubung secara terpusat ke satu perangkat konsentrator (Switch atau Hub) disebut topologi...',
    options: [
      'Star (Bintang)',
      'Bus (Linier)',
      'Ring (Cincin)',
      'Mesh (Jala Acak)'
    ],
    correctIndex: 0,
    explanation: 'Topologi Star menghubungkan semua node klien ke satu simpul pusat (Hub/Switch). Kelebihannya jika satu kabel node putus, node lainnya tetap dapat berkomunikasi dengan normal.',
    topic: 'Topologi Jaringan'
  },
  {
    id: 'q_jki_4',
    element: 'JKI',
    level: 'MotS',
    stem: 'Perangkat jaringan yang berfungsi untuk menghubungkan dua atau lebih jaringan yang berbeda subnet/segmen IP serta meneruskan paket data ke rute terbaik menuju tujuan dinamakan...',
    options: [
      'Router',
      'Repeater',
      'Hub Pasif',
      'Network Interface Card (NIC)'
    ],
    correctIndex: 0,
    explanation: 'Router beroperasi pada Layer 3 (Network Layer) dan berfungsi merutekan (routing) paket data antar segmen jaringan yang berbeda berdasarkan IP address.',
    topic: 'Perangkat Keras Jaringan'
  },

  // ==================== AD (Analisis Data) ====================
  {
    id: 'q_ad_1',
    element: 'AD',
    level: 'MotS',
    stem: 'Pada program aplikasi spreadsheet (MS Excel / Google Sheets), rumus yang paling tepat digunakan untuk menghitung banyaknya siswa yang memperoleh nilai Ujian di atas atau sama dengan 75 pada rentang sel C2:C40 adalah...',
    options: [
      '=COUNTIF(C2:C40, ">=75")',
      '=SUMIF(C2:C40, ">=75")',
      '=COUNT(C2:C40 >= 75)',
      '=AVERAGEIF(C2:C40, ">=75")'
    ],
    correctIndex: 0,
    explanation: 'Fungsi COUNTIF(range, criteria) digunakan untuk mencacah/menghitung frekuensi jumlah sel yang memenuhi satu kriteria tertentu (dalam kasus ini: ">=75").',
    topic: 'Formula Spreadsheet (COUNTIF)'
  },
  {
    id: 'q_ad_2',
    element: 'AD',
    level: 'HoTS',
    stem: 'Diberikan tabel data penjualan kantin sekolah selama 1 tahun. Anda diminta membuat grafik visualisasi data yang bertujuan untuk menunjukkan TREN KENAIKAN ATAU PENURUNAN omzet penjualan dari bulan Januari hingga Desember. Jenis diagram yang paling tepat dan komunikatif untuk tujuan tersebut adalah...',
    options: [
      'Line Chart (Diagram Garis)',
      'Pie Chart (Diagram Lingkaran)',
      'Radar Chart (Diagram Jaring Laba-Laba)',
      'Doughnut Chart'
    ],
    correctIndex: 0,
    explanation: 'Line Chart (Diagram Garis) adalah pilihan visualisasi data standar terbaik untuk memperlihatkan tren perubahan data berkesinambungan (time-series) dalam kurun rentang waktu tertentu.',
    topic: 'Visualisasi Data'
  },
  {
    id: 'q_ad_3',
    element: 'AD',
    level: 'MotS',
    stem: 'Fungsi dalam spreadsheet yang digunakan untuk mencari data pada kolom pertama sebuah tabel referensi secara vertikal lalu mengambil nilai dari kolom lain pada baris yang sama adalah...',
    options: [
      'VLOOKUP',
      'HLOOKUP',
      'CONCATENATE',
      'TRANSPOSE'
    ],
    correctIndex: 0,
    explanation: 'VLOOKUP (Vertical Lookup) mencari nilai kunci pada kolom paling kiri dari tabel data vertikal dan mengembalikan nilai dari nomor indeks kolom yang ditentukan.',
    topic: 'Fungsi Lookup Spreadsheet'
  },
  {
    id: 'q_ad_4',
    element: 'AD',
    level: 'LotS',
    stem: 'Aktivitas memeriksa, memperbaiki data ganda (duplicate), memformat ulang teks, dan menghapus nilai yang kosong/cacat (missing values) sebelum data diolah lebih lanjut disebut...',
    options: [
      'Data Cleaning (Pembersihan Data)',
      'Data Mining',
      'Data Encryption',
      'Data Backup'
    ],
    correctIndex: 0,
    explanation: 'Data Cleaning (pembersihan data) adalah tahapan kritis dalam analisis data untuk memastikan data valid, konsisten, bebas duplikasi, dan akurat sebelum dianalisis.',
    topic: 'Pra-pemrosesan Data'
  },

  // ==================== AP (Algoritma dan Pemrograman) ====================
  {
    id: 'q_ap_1',
    element: 'AP',
    level: 'HoTS',
    stem: 'Perhatikan penelusuran pseudocode berikut:\n\nset Total = 0\nset i = 1\nWHILE i <= 5 DO:\n    IF (i MOD 2 == 1) THEN\n        Total = Total + i\n    END IF\n    i = i + 1\nEND WHILE\n\nBerapakah nilai akhir dari variabel Total setelah perulangan selesai dieksekusi?',
    options: [
      '9',
      '15',
      '6',
      '12'
    ],
    correctIndex: 0,
    explanation: 'Perulangan memeriksa angka ganjil antara 1 hingga 5 (karena i MOD 2 == 1): i=1 (ganjil -> Total = 0+1 = 1), i=2 (genap), i=3 (ganjil -> Total = 1+3 = 4), i=4 (genap), i=5 (ganjil -> Total = 4+5 = 9). Maka nilai Total = 9.',
    topic: 'Tracing Pseudocode & Modulo'
  },
  {
    id: 'q_ap_2',
    element: 'AP',
    level: 'MotS',
    stem: 'Pada lingkungan pemrograman visual Scratch, blok perintah yang digunakan agar sebuah sprite objek dapat mengirimkan sinyal pesan ke sprite lain di dalam proyek dinamakan...',
    options: [
      'Broadcast (Siarkan Pesan)',
      'Ask and Wait (Tanya dan Tunggu)',
      'Say for 2 secs (Katakan selama 2 detik)',
      'Create clone of myself (Buat klon)'
    ],
    correctIndex: 0,
    explanation: 'Blok `broadcast [message]` pada Scratch digunakan untuk mekanisme pengiriman pesan komunikasi antar-objek (event-driven messaging) sehingga sprite lain yang memiliki blok `when I receive [message]` dapat merespons.',
    topic: 'Pemrograman Visual Scratch'
  },
  {
    id: 'q_ap_3',
    element: 'AP',
    level: 'HoTS',
    stem: 'Dalam pemrograman, pembuatan fungsi kustom atau blok prosedur terpisah (Custom Block / Function) sangat dianjurkan. Manakah alasan utama penerapan prinsip tersebut?',
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

  // ==================== DSI (Dampak Sosial Informatika) ====================
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

  // ==================== PLB (Praktik Lintas Bidang) ====================
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
  }
];
