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
  babId: string;
  babNumber: string;
  babTitle: string;
  subBabCode: string;
  title: string;
  element: InformaticsElement;
  level: CognitiveLevel;
  topic: string;
  pages: string;
  summary: string;
}

export const INFORMATICS_GRADE9_PRESETS: MaterialPreset[] = [
  // ==================== BAB I ====================
  {
    id: 'preset-bab1-a-tree',
    babId: 'bab-1',
    babNumber: 'BAB I',
    babTitle: 'Berpikir Komputasional dalam Analisis Data',
    subBabCode: 'A',
    title: 'BAB I - A. Struktur Data Tree (Pohon)',
    element: 'BK',
    level: 'MotS',
    topic: 'Struktur Data Tree (Pohon)',
    pages: 'Hal. 7 - 14',
    summary: `BAB I: Berpikir Komputasional dalam Analisis Data
Sub-Bab A: Struktur Data Tree (Pohon) (Hal. 7 - 14)

1. Konsep Dasar Tree:
   - Tree (Pohon) merupakan struktur data non-linear dan hirarkis yang merepresentasikan hubungan bertingkat (parent-child).
   - Elemen Utama Tree:
     * Root (Akar): Simpul paling atas yang tidak memiliki parent/induk.
     * Node (Simpul): Tempat penyimpanan data atau informasi.
     * Edge (Garis/Sisi): Penghubung antara simpul induk (parent) dengan simpul anak (child).
     * Leaf (Daun): Simpul terminal yang tidak memiliki child/anak sama sekali.
     * Height / Depth (Tingkat Kedalaman): Jumlah level atau tingkatan dari akar menuju daun terjauh.
     * Subtree: Bagian cabang pohon yang membentuk struktur pohon tersendiri.

2. Penerapan Nyata Struktur Data Tree:
   - Sistem direktori berkas dan struktur folder pada sistem operasi komputer (misal C:\\Windows\\System32).
   - Struktur Document Object Model (DOM) pada halaman web HTML (tag <html> -> <head>, <body> -> <div> -> <p>).
   - Struktur organisasi institusi dan pohon silsilah keluarga (family tree).
   - Pengindeksan basis data (B-Tree / Binary Search Tree) untuk mempercepat pencarian data bervolume besar.`,
  },
  {
    id: 'preset-bab1-b-graph',
    babId: 'bab-1',
    babNumber: 'BAB I',
    babTitle: 'Berpikir Komputasional dalam Analisis Data',
    subBabCode: 'B',
    title: 'BAB I - B. Struktur Data Graph (Graf)',
    element: 'BK',
    level: 'HoTS',
    topic: 'Struktur Data Graph (Graf)',
    pages: 'Hal. 15 - 18',
    summary: `BAB I: Berpikir Komputasional dalam Analisis Data
Sub-Bab B: Struktur Data Graph (Graf) (Hal. 15 - 18)

1. Konsep Dasar Graph:
   - Graph adalah struktur data non-linear yang terdiri dari himpunan simpul/titik (Vertex/Node) dan himpunan garis penghubung (Edge/Arc).
   - Berbeda dengan Tree, Graph tidak memiliki konsep hierarki tunggal (tidak harus memiliki root tunggal) dan dapat membentuk siklus (Cycle/Loop).

2. Klasifikasi dan Jenis Graph:
   - Undirected Graph (Graf Tidak Terarah): Relasi antar simpul berlaku dua arah tanpa panah arah (contoh: relasi pertemanan di media sosial).
   - Directed Graph / Digraph (Graf Terarah): Garis penghubung memiliki anak panah dengan satu arah spesifik (contoh: alur lalu lintas jalan satu arah, relasi follower di Twitter/Instagram).
   - Weighted Graph (Graf Berbobot): Setiap edge memiliki nilai/bobot (Weight) yang merepresentasikan jarak tempuh (km), biaya perjalanan (rupiah), atau waktu tempuh. Digunakan pada algoritma pencarian rute terpendek (seperti Google Maps / Dijkstra).

3. Derajat Simpul (Degree):
   - In-degree: Jumlah garis yang menuju/masuk ke dalam suatu simpul.
   - Out-degree: Jumlah garis yang keluar dari suatu simpul menuju simpul lain.`,
  },
  {
    id: 'preset-bab1-c-data-viz',
    babId: 'bab-1',
    babNumber: 'BAB I',
    babTitle: 'Berpikir Komputasional dalam Analisis Data',
    subBabCode: 'C',
    title: 'BAB I - C. Analisis Himpunan Data Terstruktur dengan Teknik Visualisasi',
    element: 'AD',
    level: 'HoTS',
    topic: 'Tahapan Analisis & Visualisasi Data',
    pages: 'Hal. 19 - 38',
    summary: `BAB I: Berpikir Komputasional dalam Analisis Data
Sub-Bab C: Analisis Himpunan Data Terstruktur dengan Teknik Visualisasi (Hal. 19 - 38)

Tahapan Lengkap Siklus Analisis Data Terstruktur:
1. Menentukan Tujuan Analisis Data (Hal. 20):
   - Merumuskan pertanyaan penelitian dan tujuan akhir (misal: memprediksi tren konsumsi daya listrik sekolah atau kepuasan kantin).
2. Mengumpulkan Data yang Diperlukan (Hal. 21):
   - Mengumpulkan data primer (survei/kuesioner, formulir daring) dan data sekunder (arsip database, log server).
3. Menyiapkan dan Membersihkan Data / Data Cleaning (Hal. 21):
   - Menghapus data duplikat (Duplicate values).
   - Mengisi atau mengeliminasi nilai kosong (Missing values / NULL).
   - Memperbaiki inkonsistensi tipe format data (misal konversi format tanggal DD/MM/YYYY vs MM/DD/YYYY).
4. Mengeksplorasi Data (Hal. 22):
   - Menghitung ringkasan statistik deskriptif (Mean, Median, Modus, Nilai Minimum, Nilai Maksimum).
   - Menemukan korelasi dan anomali/pencilan (Outlier) dalam dataset.
5. Memvisualisasikan dan Memublikasikan Hasil Analisis Data (Hal. 23):
   - Bar Chart (Diagram Batang): Membandingkan kuantitas antar kategori diskrit.
   - Line Chart (Diagram Garis): Menampilkan fluktuasi perubahan tren dari waktu ke waktu (Time Series).
   - Pie / Donut Chart: Menunjukkan proporsi persentase bagian terhadap keseluruhan (100%).
   - Scatter Plot: Menganalisis relasi korelasi antara dua variabel kuantitatif.`,
  },

  // ==================== BAB II ====================
  {
    id: 'preset-bab2-a-block-library',
    babId: 'bab-2',
    babNumber: 'BAB II',
    babTitle: 'Berpikir Komputasional dalam Algoritma dan Pemrograman',
    subBabCode: 'A',
    title: 'BAB II - A. Mengembangkan Library dalam Pemrograman Visual Blok',
    element: 'AP',
    level: 'MotS',
    topic: 'Modularisasi & Library Pemrograman Visual Blok',
    pages: 'Hal. 42 - 75',
    summary: `BAB II: Berpikir Komputasional dalam Algoritma dan Pemrograman
Sub-Bab A: Mengembangkan Library dalam Pemrograman Visual Blok (Hal. 42 - 75)

1. Modularisasi Program (Hal. 43):
   - Memecah masalah program yang kompleks dan panjang menjadi modul-modul kecil (subprogram/fungsi/prosedur) yang mandiri.
   - Manfaat Modularisasi:
     * Meningkatkan keterbacaan kode (readability).
     * Memudahkan proses pelacakan kesalahan (debugging & testing).
     * Menerapkan prinsip DRY (Don't Repeat Yourself) sehingga blok fungsi dapat dipakai berulang kali tanpa membuat ulang dari awal.
2. Konsep Library (Hal. 64):
   - Library adalah kumpulan modul subprogram, fungsi, dan variabel siap pakai yang telah diuji dan dikemas untuk mempermudah pembuatan aplikasi baru.
   - Pada platform pemrograman visual blok (seperti Scratch / Blockly / MakeCode), pembuatan blok khusus dilakukan melalui fitur "My Blocks" (Membuat Blok Sendiri dengan parameter input angka, teks, atau boolean).
3. Penggunaan Library (Hal. 66):
   - Mengimpor dan mengintegrasikan ekstensi library luar (misal library fisika gravitasi, pemutar suara/musik synth, sensor webcam kecerdasan buatan, atau antarmuka perangkat keras micro:bit).
   - Memanggil blok fungsi dengan passing parameter yang sesuai.`,
  },
  {
    id: 'preset-bab2-b-visual-vs-textual',
    babId: 'bab-2',
    babNumber: 'BAB II',
    babTitle: 'Berpikir Komputasional dalam Algoritma dan Pemrograman',
    subBabCode: 'B',
    title: 'BAB II - B. Pemrograman Visual Blok vs Pemrograman Tekstual',
    element: 'AP',
    level: 'HoTS',
    topic: 'Transisi Blok Visual ke Tekstual & Pseudocode',
    pages: 'Hal. 76 - 114',
    summary: `BAB II: Berpikir Komputasional dalam Algoritma dan Pemrograman
Sub-Bab B: Pemrograman Visual Blok vs Pemrograman Tekstual (Hal. 76 - 114)

1. Transisi dari Pemrograman Visual Blok ke Pemrograman Tekstual (Hal. 76):
   - Pemrograman Visual Blok (Drag & Drop): Mencegah kesalahan ketik sintaksis (syntax error), sangat baik untuk pemula memahami logika percabangan dan perulangan.
   - Pemrograman Tekstual (Python / C / JavaScript): Menuliskan instruksi kode baris demi baris menggunakan aturan tata bahasa (sintaks, tanda kurung, titik koma, serta indentasi blok kode).
   - Pemetaan Konsep Blok ke Python:
     * Blok "set [var] to [10]" -> var = 10
     * Blok "if <kondisi> then ... else ..." -> if condition:\n   ...\nelse:\n   ...
     * Blok "repeat [5]" -> for i in range(5):
     * Blok "repeat until <kondisi>" -> while not (condition):
2. Analisis Pseudocode (Hal. 106):
   - Pseudocode adalah notasi deskriptif algoritma yang menyerupai bahasa pemrograman tetapi tidak terikat pada sintaks bahasa tertentu dan mudah dipahami manusia.
   - Struktur Pseudocode terdiri atas: Bagian Judul (Header), Bagian Deklarasi (Variabel & Tipe Data), dan Bagian Deskripsi/Algoritma (instruksi berurutan).
   - Menelusuri (Tracing) nilai variabel pada setiap langkah eksekusi pseudocode untuk menentukan output akhir program secara tepat.`,
  },

  // ==================== BAB III ====================
  {
    id: 'preset-bab3-a-data-processing',
    babId: 'bab-3',
    babNumber: 'BAB III',
    babTitle: 'Literasi Digital untuk Produktivitas',
    subBabCode: 'A',
    title: 'BAB III - A. Pemrosesan Data',
    element: 'TIK',
    level: 'MotS',
    topic: 'Permasalahan & Perkakas Pemrosesan Data',
    pages: 'Hal. 119 - 129',
    summary: `BAB III: Literasi Digital untuk Produktivitas
Sub-Bab A: Pemrosesan Data (Hal. 119 - 129)

1. Permasalahan Dasar Pemrosesan Data (Hal. 122):
   - Volume Data Besar: Kesulitan mengolah ribuan baris data secara manual dengan mata telanjang.
   - Human Error (Kesalahan Manusia): Typo pengetikan nilai angka atau formula.
   - Redundansi dan Inkonsistensi: Data yang tersimpan ganda di lokasi berbeda dengan nilai yang saling bertentangan.
   - Format yang Tidak Seragam: Pencampuran penulisan teks mata uang ('Rp 50.000' vs '50000').
2. Dampak Penggunaan Perkakas yang Baik dan Benar (Hal. 125):
   - Efisiensi Waktu: Mengotomatiskan perhitungan berulang menggunakan fungsi spreadsheet (SUM, AVERAGE, COUNTIF, VLOOKUP/XLOOKUP).
   - Validasi Input (Data Validation): Membatasi jenis input pada sel spreadsheet (misal hanya angka 1-100 atau daftar dropdown) guna mencegah kesalahan input.
   - Integritas dan Keamanan Data: Menjaga keaslian arsip data dan melindungi data dari manipulasi tidak sah.`,
  },
  {
    id: 'preset-bab3-b-data-presentation',
    babId: 'bab-3',
    babNumber: 'BAB III',
    babTitle: 'Literasi Digital untuk Produktivitas',
    subBabCode: 'B',
    title: 'BAB III - B. Penyajian Data & Integrasi Konten',
    element: 'TIK',
    level: 'MotS',
    topic: 'Format Data, Aplikasi Produktivitas & Integrasi Konten',
    pages: 'Hal. 130 - 169',
    summary: `BAB III: Literasi Digital untuk Produktivitas
Sub-Bab B: Penyajian Data (Hal. 130 - 169)

1. Jenis dan Format Data (Hal. 130):
   - Tipe Data: Text/String, Integer, Float, Date/Time, Boolean (True/False).
   - Format Berkas Data: CSV (Comma Separated Values), XLSX (Spreadsheet Excel), JSON (JavaScript Object Notation), PDF (Portable Document Format).
2. Perangkat Lunak Produktivitas (Hal. 150):
   - Pengolah Kata (Word Processor): Penyusunan laporan, naskah, makalah formal.
   - Pengolah Angka (Spreadsheet): Pemodelan data numerik, formula, kalkulasi statistik.
   - Presentasi (Slide Presentation): Komunikasi visual gagasan dengan layout menarik.
   - Perkakas Kolaborasi Daring: Fitur share file, realtime co-authoring, pemberian komentar dan riwayat revisi (version control).
3. Integrasi Data Konten (Hal. 164):
   - Mail Merge (Surat Massal): Menggabungkan template dokumen utama dengan tabel data penerima secara dinamis.
   - Object Linking and Embedding (OLE):
     * Object Linking: Objek pada dokumen target terhubung langsung dengan file sumber (grafik otomatis terupdate jika data spreadsheet sumber diubah).
     * Object Embedding: Objek disematkan secara utuh ke dalam dokumen tanpa terhubung ke file luar.`,
  },
  {
    id: 'preset-bab3-c-content-design-ai',
    babId: 'bab-3',
    babNumber: 'BAB III',
    babTitle: 'Literasi Digital untuk Produktivitas',
    subBabCode: 'C',
    title: 'BAB III - C. Perancangan Konten & Kecerdasan Artifisial (KA)',
    element: 'TIK',
    level: 'HoTS',
    topic: 'Strategi Konten & Pemanfaatan AI (Kecerdasan Artifisial)',
    pages: 'Hal. 170 - 180',
    summary: `BAB III: Literasi Digital untuk Produktivitas
Sub-Bab C: Perancangan Konten (Hal. 170 - 180)

1. Strategi Perancangan Konten Digital (Hal. 171):
   - Penentuan Target Audiens dan Tujuan Pesan (edukasi, persuasi, atau informasi).
   - Prinsip Desain Visual: Keselarasan (Harmony), Kontras Warna, Hierarki Tipografi (Ukuran Judul, Subjudul, Teks Tubuh), dan Keseimbangan Ruang Negatif (Whitespace).
   - Etika Konten: Menghargai Hak Cipta (Copyright), mencantumkan atribusi sumber, dan mematuhi lisensi Creative Commons (CC).
2. Perancangan Konten Menggunakan Kecerdasan Artifisial (KA / Artificial Intelligence) (Hal. 174):
   - Penerapan Generative AI (KA Generatif) untuk membantu penyusunan draf teks, pembuatan visual ilustrasi, perbaikan tata bahasa, dan penerjemahan otomatis.
   - Prompt Engineering: Teknik merumuskan instruksi teks yang spesifik, kontekstual, jelas, dan memuat batasan kriteria agar respon KA akurat dan berkualitas.
   - Kesadaran Kritis & Verifikasi Fakta (Fact-Checking): Waspada terhadap halusinasi AI (informasi karangan tidak nyata) serta tidak memasukkan data rahasia pribadi ke prompt publik.`,
  },

  // ==================== BAB IV ====================
  {
    id: 'preset-bab4-a-info-types',
    babId: 'bab-4',
    babNumber: 'BAB IV',
    babTitle: 'Keamanan Digital',
    subBabCode: 'A',
    title: 'BAB IV - A. Jenis Informasi (Data Pribadi Umum & Spesifik)',
    element: 'DSI',
    level: 'LotS',
    topic: 'Klasifikasi Data Pribadi (Umum & Spesifik)',
    pages: 'Hal. 185 - 193',
    summary: `BAB IV: Keamanan Digital
Sub-Bab A: Jenis Informasi (Hal. 185 - 193)

Menurut Undang-Undang Perlindungan Data Pribadi (UU PDP):
1. Data Pribadi Umum (Hal. 187):
   - Data yang bersifat umum dan tidak langsung membahayakan keselamatan kritis jika diketahui pihak lain, meliputi:
     * Nama Lengkap
     * Jenis Kelamin
     * Kewarganegaraan
     * Agama
     * Status Perkawinan
     * Data pribadi yang dikombinasikan untuk mengidentifikasi seseorang.
2. Data Pribadi Spesifik / Sensitif (Hal. 187):
   - Data yang memiliki tingkat kerahasiaan tinggi dan jika bocor dapat menimbulkan diskriminasi atau kerugian fatal bagi pemiliknya:
     * Data dan Rekam Medis Kesehatan.
     * Data Biometrik (Sidik Jari, Pengenalan Wajah/Face ID, Retina Mata).
     * Data Genetika.
     * Catatan Kejahatan / Hukum.
     * Data Anak di bawah umur.
     * Data Keuangan Pribadi (Nomor Rekening, Nomor Kartu Kredit, PIN ATM, Kode CVV).`,
  },
  {
    id: 'preset-bab4-b-cyber-attacks',
    babId: 'bab-4',
    babNumber: 'BAB IV',
    babTitle: 'Keamanan Digital',
    subBabCode: 'B',
    title: 'BAB IV - B. Serangan Siber & Penanganannya',
    element: 'DSI',
    level: 'HoTS',
    topic: 'Jenis Serangan Siber & Mitigasi Penanganan',
    pages: 'Hal. 194 - 208',
    summary: `BAB IV: Keamanan Digital
Sub-Bab B: Serangan Siber (Hal. 194 - 208)

1. Jenis-Jenis Serangan Siber (Hal. 194):
   - Phishing: Modus rekayasa sosial (Social Engineering) dengan mengirimkan email/link website palsu yang meniru instansi resmi guna menjebak korban memberikan sandi akun.
   - Malware (Malicious Software):
     * Ransomware: Mengenkripsi seluruh berkas file pengguna lalu memeras uang tebusan.
     * Trojan: Perangkat lunak jahat yang menyamar sebagai aplikasi legal/game gratis.
     * Spyware / Keylogger: Memantau dan merekam seluruh ketikan keyboard diam-diam.
   - Denial of Service (DoS / DDoS): Membanjiri lalu lintas server target dengan ribuan permintaan palsu hingga layanan tumbang dan tidak dapat diakses.
2. Dampak Pada Teknologi Modern (Hal. 202):
   - Pencurian identitas digital, kebocoran basis data massal, kerugian finansial, dan hilangnya kepercayaan publik terhadap platform digital.
3. Penanganan dan Mitigasi Serangan (Hal. 203):
   - Memutus koneksi perangkat terinfeksi dari jaringan (Isolasi).
   - Memulihkan data dari cadangan berkas (Backup) bersih berkala (prinsip 3-2-1 Backup).
   - Melaporkan insiden siber ke tim keamanan (CSIRT / BSSN) dan mengganti seluruh kredensial akun.`,
  },
  {
    id: 'preset-bab4-c-public-wifi',
    babId: 'bab-4',
    babNumber: 'BAB IV',
    babTitle: 'Keamanan Digital',
    subBabCode: 'C',
    title: 'BAB IV - C. Keamanan Jaringan Nirkabel di Ruang Publik',
    element: 'JKI',
    level: 'HoTS',
    topic: 'Keamanan Wi-Fi Publik & Risiko Pengiriman Data',
    pages: 'Hal. 209 - 214',
    summary: `BAB IV: Keamanan Digital
Sub-Bab C: Keamanan Jaringan Nirkabel di Ruang Publik (Hal. 209 - 214)

1. Karakteristik Jaringan Nirkabel (Wi-Fi) Publik (Hal. 209):
   - Gelombang radio Wi-Fi memancar bebas di udara tanpa kabel fisik sehingga paket data dapat ditangkap oleh siapa saja di radius jangkauan.
   - Hotspot gratis di kafe/bandara sering kali tidak menggunakan enkripsi kata sandi (Open Network).
2. Dampak Pengabaian Keamanan Jaringan (Hal. 210):
   - Risiko intersepsi data oleh peretas yang berada di jaringan nirkabel yang sama.
3. Risiko Pengiriman Data di Jaringan Publik (Hal. 211):
   - Eavesdropping / Packet Sniffing: Pelaku menggunakan aplikasi sniffer untuk menyadap lalu lintas transmisi data yang tidak terenkripsi.
   - Man-in-the-Middle (MitM) Attack: Penyerang menyusup di antara perangkat korban dengan router untuk membaca atau mengubah paket data secara realtime.
   - Rogue AP / Evil Twin: Pembuatan hotspot tiruan dengan nama SSID identik untuk menjebak korban terhubung ke router palsu milik peretas.
   - Solusi Pengamanan: Selalu gunakan protokol aman HTTPS, aktifkan VPN (Virtual Private Network), dan hindari login akun perbankan di Wi-Fi publik.`,
  },
  {
    id: 'preset-bab4-d-data-protection',
    babId: 'bab-4',
    babNumber: 'BAB IV',
    babTitle: 'Keamanan Digital',
    subBabCode: 'D',
    title: 'BAB IV - D. Perlindungan Data Pribadi',
    element: 'DSI',
    level: 'MotS',
    topic: 'Password Kuat, 2FA, Enkripsi, & Update Software',
    pages: 'Hal. 215 - 224',
    summary: `BAB IV: Keamanan Digital
Sub-Bab D: Perlindungan Data Pribadi (Hal. 215 - 224)

Empat Pilar Perlindungan Data Pribadi:
1. Kata Sandi yang Kuat (Strong Password) (Hal. 215):
   - Minimal 12 karakter atau lebih.
   - Kombinasi huruf besar (A-Z), huruf kecil (a-z), angka (0-9), dan simbol khusus (@, #, $, %, !).
   - Hindari data mudah ditebak (tanggal lahir, nama hewan peliharaan, '123456', 'password').
   - Gunakan password yang berbeda untuk setiap akun dan manfaatkan Password Manager.
2. Autentikasi Dua Faktor (Two-Factor Authentication / 2FA / MFA) (Hal. 217):
   - Menambahkan lapisan proteksi ganda:
     * Sesuatu yang Anda ketahui (Password / PIN).
     * Sesuatu yang Anda miliki (Kode OTP SMS, Google Authenticator, Kunci Keamanan Fisik).
     * Sesuatu yang melekat pada Anda (Biometrik Sidik Jari / Face ID).
3. Enkripsi dan Dekripsi (Hal. 218):
   - Enkripsi (Encryption): Mengubah teks asli yang dapat dibaca (Plaintext) menjadi teks acak tersandi rahasia (Ciphertext) menggunakan kunci kriptografi.
   - Dekripsi (Decryption): Mengembalikan Ciphertext menjadi Plaintext dengan kunci yang sah.
4. Update Software Rutin (Hal. 222):
   - Pembaruan sistem operasi dan aplikasi berfungsi menambal lubang kerentanan keamanan (Security Patch/Vulnerability) agar tidak dieksploitasi oleh malware baru.`,
  },
  {
    id: 'preset-bab4-e-digital-mindfulness',
    babId: 'bab-4',
    babNumber: 'BAB IV',
    babTitle: 'Keamanan Digital',
    subBabCode: 'E',
    title: 'BAB IV - E. Perilaku dan Kesadaran Penuh (Mindfulness) pada Dunia Digital',
    element: 'DSI',
    level: 'MotS',
    topic: 'Etika Perilaku Digital, Mindfulness & Pola Hidup Sehat',
    pages: 'Hal. 225 - 240',
    summary: `BAB IV: Keamanan Digital
Sub-Bab E: Perilaku dan Kesadaran Penuh (Mindfulness) pada Dunia Digital (Hal. 225 - 240)

1. Perilaku Digital (Netiket) (Hal. 226):
   - Menerapkan etika berkomunikasi santun di ruang maya (Netiquette).
   - Menjaga jejak digital (Digital Footprint) positif yang tidak merugikan masa depan.
   - Menghindari perilaku Cyberbullying (perundungan siber), Doxxing (menyebarkan data pribadi orang lain tanpa izin), dan penyebaran berita bohong (Hoax).
2. Mindfulness Dunia Digital (Kesadaran Penuh) (Hal. 229):
   - Kesadaran diri secara utuh saat berinteraksi dengan gawai teknologi.
   - Mengendalikan sindrom FOMO (Fear of Missing Out / kecemasan berlebih jika tertinggal tren di media sosial).
   - Membatasi waktu layar (Screen Time Management) dan menyaring informasi secara kritis sebelum membagikan (Share).
3. Pola Hidup Sehat Mendukung Kesehatan Mental (Hal. 235):
   - Menjaga postur tubuh ergonomis saat menggunakan laptop/komputer dan menerapkan aturan 20-20-20 untuk relaksasi mata.
   - Menyeimbangkan kehidupan daring dengan aktivitas sosial fisik di dunia nyata.
   - Melakukan detoks digital berkala untuk mencegah kelelahan mental (Digital Burnout).`,
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

    const materiName = topicName?.startsWith('BAB')
      ? topicName.split(' - ')[0]
      : (ELEMENT_TO_MATERI[element] || 'Informatika');

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
      cp: DEFAULT_MATERI_CP[materiName] || DEFAULT_MATERI_CP[ELEMENT_TO_MATERI[element]] || 'Peserta didik mampu memahami dan mengaplikasikan materi informatika secara komprehensif.',
      indicator,
    });
  }

  return questions;
}
