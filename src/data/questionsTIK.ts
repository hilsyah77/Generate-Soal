import { Question } from '../types';

export const QUESTIONS_TIK: Question[] = [
  {
    id: 'q_tik_1',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Saat menyusun Surat Undangan Pengambilan Rapor Siswa menggunakan fitur Mail Merge pada aplikasi pengolah kata yang dihubungkan dengan berkas data spreadsheet, fungsi utama Mail Merge adalah...',
    options: [
      'Menghasilkan dokumen massal berformat sama namun informasi data penerima berbeda secara otomatis.',
      'Mengonversi berkas dokumen DOCX menjadi format PDF secara otomatis dalam sekali klik.',
      'Mengunci berkas dengan proteksi kata sandi enkripsi agar tidak dapat disunting orang lain.',
      'Menyisipkan rumus statistika data keuangan otomatis langsung ke dalam badan paragraf surat.'
    ],
    correctIndex: 0,
    explanation: 'Mail Merge (Surat Massal) menggabungkan dokumen template utama (Main Document) dengan basis data penerima (Data Source) sehingga ratusan surat terisi nama dan alamat secara otomatis.',
    topic: 'Integrasi Aplikasi Perkantoran (Mail Merge)'
  },
  {
    id: 'q_tik_2',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
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
    topic: 'Heading Styles & Daftar Isi Otomatis'
  },
  {
    id: 'q_tik_3',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Ketika Anda menyalin tabel keuangan dari aplikasi Spreadsheet dan menempelkannya ke aplikasi Pengolah Kata dengan metode OLE (Object Linking and Embedding) dengan opsi "Paste Link", apa yang akan terjadi jika angka pada spreadsheet asli diubah?',
    options: [
      'Angka tabel pada dokumen pengolah kata akan otomatis ikut diperbarui secara real-time.',
      'Dokumen pengolah kata akan mengalami kerusakan file (corrupt) dan tertutup otomatis.',
      'Tabel pada pengolah kata akan berubah menjadi gambar statis beresolusi rendah.',
      'Tidak ada perubahan apapun pada pengolah kata karena data telah terputus permanen.'
    ],
    correctIndex: 0,
    explanation: 'Object Linking (Paste Link) memelihara jembatan data dinamis aktif antar file; setiap pembaruan nilai pada berkas sumber (Excel) otomatis memperbarui tampilan di dokumen tujuan (Word).',
    topic: 'Integrasi Objek OLE (Paste Link)'
  },
  {
    id: 'q_tik_4',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Pada aplikasi pengolah presentasi (slide), perbedaan mendasar antara fitur "Transition" (Transisi) dan "Animation" (Animasi) adalah...',
    options: [
      'Transition mengatur efek perpindahan antar slide, sedangkan Animation mengatur pergerakan objek tertentu di dalam slide.',
      'Transition untuk memutar musik latar, sedangkan Animation untuk memotong durasi video.',
      'Transition hanya berjalan otomatis, sedangkan Animation wajib diklik dengan mouse.',
      'Transition digunakan untuk mencetak slide ke kertas, sedangkan Animation untuk proyektor.'
    ],
    correctIndex: 0,
    explanation: 'Transisi (Transition) adalah efek visual pergantian layar dari satu slide ke slide berikutnya. Animasi (Animation) diterapkan pada elemen konten (teks, gambar, ikon) di dalam slide.',
    topic: 'Presentasi: Transisi vs Animasi'
  },
  {
    id: 'q_tik_5',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Format berkas dokumen portabel standar terbuka yang dirancang agar tata letak teks, font, dan gambar tampil persis sama di semua sistem operasi dan perangkat tanpa bergeser adalah...',
    options: [
      'PDF (.pdf)',
      'TXT (.txt)',
      'RTF (.rtf)',
      'BAT (.bat)'
    ],
    correctIndex: 0,
    explanation: 'PDF (Portable Document Format) mempertahankan format tata letak, tipografi, dan elemen visual secara konsisten di semua platform dan gawai.',
    topic: 'Format Berkas Portabel (PDF)'
  },
  {
    id: 'q_tik_6',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Sekelompok siswa sedang mengerjakan tugas makalah kelompok secara daring menggunakan platform cloud document sharing. Manakah pengaturan hak akses (permission level) yang paling tepat diberikan kepada rekan satu kelompok agar dapat menyunting tulisan bersama secara kolaboratif?',
    options: [
      'Editor',
      'Viewer',
      'Commenter',
      'Restricted'
    ],
    correctIndex: 0,
    explanation: 'Akses "Editor" mengizinkan pengguna menulis, menyunting, memformat, dan menghapus konten dokumen secara langsung secara kolaboratif real-time.',
    topic: 'Kolaborasi Dokumen Cloud'
  },
  {
    id: 'q_tik_7',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Track Changes" pada aplikasi pengolah kata sangat bermanfaat ketika...',
    options: [
      'Melakukan penelaahan (review) dan koreksi naskah dengan mencatat setiap penambahan, penghapusan, dan pengubahan teks.',
      'Menghitung jumlah kata dan karakter secara otomatis.',
      'Mengubah tema warna halaman menjadi mode gelap.',
      'Mendeteksi dan menghapus virus komputer pada flashdisk.'
    ],
    correctIndex: 0,
    explanation: 'Fitur Track Changes menandai riwayat penyuntingan (coretan teks, teks sisipan baru) sehingga pemilik dokumen dapat menerima (Accept) atau menolak (Reject) perubahan.',
    topic: 'Review Dokumen & Track Changes'
  },
  {
    id: 'q_tik_8',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Kombinasi tombol pintas (keyboard shortcut) standar pada sebagian besar aplikasi untuk mencari teks tertentu (Find) dalam dokumen adalah...',
    options: [
      'Ctrl + F',
      'Ctrl + P',
      'Ctrl + S',
      'Ctrl + Z'
    ],
    correctIndex: 0,
    explanation: 'Ctrl + F (Find) membuka panel pencarian kata atau frasa dalam berkas dokumen aktif.',
    topic: 'Tombol Pintas Komputer'
  },
  {
    id: 'q_tik_9',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Kombinasi tombol pintas untuk membatalkan tindakan terakhir (Undo) dan mengulang kembali tindakan yang dibatalkan (Redo) berturut-turut adalah...',
    options: [
      'Ctrl + Z dan Ctrl + Y',
      'Ctrl + C dan Ctrl + V',
      'Ctrl + X dan Ctrl + P',
      'Ctrl + A dan Ctrl + S'
    ],
    correctIndex: 0,
    explanation: 'Ctrl + Z adalah pintasan untuk Undo, sedangkan Ctrl + Y (atau Ctrl + Shift + Z) adalah pintasan untuk Redo.',
    topic: 'Pintasan Keyboard Undo Redo'
  },
  {
    id: 'q_tik_10',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Saat membuat presentasi ilmiah, seorang siswa ingin agar diagram grafik batang yang ada di slide otomatis berubah saat data nilai survei di Excel diupdate oleh timnya. Teknik penyisipan grafik yang harus ia pilih saat menyalin dari Excel ke PowerPoint adalah...',
    options: [
      'Paste Special -> Paste Link (Excel Linked Graphic)',
      'Paste as Picture (JPEG Image)',
      'Paste Text Only',
      'Screenshot Snipping Tool'
    ],
    correctIndex: 0,
    explanation: 'Menempel dengan Paste Link (Linked Graphic) menghubungkan data grafik di PowerPoint langsung ke file spreadsheet sumber sehingga nilai grafik terhubung dinamis.',
    topic: 'Integrasi Presentasi & Spreadsheet Dinamis'
  },
  {
    id: 'q_tik_11',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Fitur pada pengolah kata yang digunakan untuk mengatur batas tepi halaman (jarak antara tepi kertas dan teks konten) disebut...',
    options: [
      'Margin',
      'Orientation',
      'Watermark',
      'Columns'
    ],
    correctIndex: 0,
    explanation: 'Margin adalah jarak spasi kosong antara batas tepi kertas (atas, bawah, kiri, kanan) dengan area pengetikan naskah.',
    topic: 'Tata Letak Halaman (Margin)'
  },
  {
    id: 'q_tik_12',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Perbedaan antara orientasi halaman Portrait dan Landscape pada dokumen adalah...',
    options: [
      'Portrait berorientasi vertikal (tegak), sedangkan Landscape berorientasi horizontal (mendatar).',
      'Portrait hanya untuk foto berwarna, sedangkan Landscape khusus tabel hitam putih.',
      'Portrait memperbesar ukuran font, sedangkan Landscape mengecilkan spasi paragraf.',
      'Portrait untuk halaman pertama, sedangkan Landscape untuk daftar pustaka.'
    ],
    correctIndex: 0,
    explanation: 'Orientasi Portrait memiliki tinggi kertas lebih besar dari lebar kertas (tegak), sedangkan Landscape memiliki lebar lebih besar dari tinggi (melebar ke samping).',
    topic: 'Orientasi Halaman Dokumen'
  },
  {
    id: 'q_tik_13',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Dalam penulisan karya ilmiah tebal (misal skripsi/makalah bab), nomor halaman pada bagian Kata Pengantar menggunakan angka romawi kecil (i, ii, iii), sedangkan Bab 1 menggunakan angka arab (1, 2, 3). Fitur pemisah yang wajib digunakan untuk membedakan format nomor halaman tersebut adalah...',
    options: [
      'Section Break (Next Page)',
      'Page Break biasa',
      'Line Break (Shift + Enter)',
      'Insert Bookmark'
    ],
    correctIndex: 0,
    explanation: 'Section Break membagi dokumen menjadi beberapa bagian independen, memungkinkan perbedaan format header, footer, orientasi kertas, dan sistem penomoran halaman antar bagian.',
    topic: 'Section Break & Penomoran Halaman Berbeda'
  },
  {
    id: 'q_tik_14',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Fitur teks atau objek yang jika diklik akan mengarahkan pengguna membuka halaman web lain, dokumen lain, atau posisi tertentu dalam dokumen disebut...',
    options: [
      'Hyperlink',
      'SmartArt',
      'Drop Cap',
      'Word Wrap'
    ],
    correctIndex: 0,
    explanation: 'Hyperlink adalah tautan interaktif yang menghubungkan teks atau objek ke lokasi target lain di dalam dokumen maupun jaringan web luar.',
    topic: 'Hyperlink Dokumen'
  },
  {
    id: 'q_tik_15',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Penyimpanan awan (Cloud Storage) seperti Google Drive, OneDrive, atau Dropbox bekerja dengan prinsip...',
    options: [
      'Menyimpan berkas di server internet jarak jauh sehingga dapat diakses dan disinkronkan dari berbagai perangkat kapan saja.',
      'Menyimpan berkas di dalam keping RAM fisik laptop sehingga hilang saat komputer dimatikan.',
      'Mengunci berkas di dalam harddisk lokal tanpa koneksi internet sama sekali.',
      'Mencetak naskah secara otomatis setiap malam.'
    ],
    correctIndex: 0,
    explanation: 'Cloud storage mengunggah file ke pusat data server daring terdistribusi, memungkinkan sinkronisasi data antar gawai dan pencadangan yang aman.',
    topic: 'Prinsip Cloud Storage'
  },
  {
    id: 'q_tik_16',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Seorang pembicara ingin agar slide presentasinya menampilkan catatan poin penting (Speaker Notes) di layar laptop pribadinya, namun layar proyektor yang dilihat audiens hanya menampilkan slide utama. Pengaturan layar di sistem operasi yang harus ia gunakan adalah...',
    options: [
      'Extend Display (mode tampilan bentang / Presenter View)',
      'Duplicate Display (tampilan cermin sama persis)',
      'Second Screen Only',
      'PC Screen Only'
    ],
    correctIndex: 0,
    explanation: 'Mode "Extend" memisahkan layar laptop dengan layar proyektor sekunder, sehingga fitur Presenter View dapat menampilkan catatan presentasi, waktu, dan slide berikutnya hanya di monitor pembicara.',
    topic: 'Pengaturan Proyektor & Presenter View'
  },
  {
    id: 'q_tik_17',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Aplikasi peramban web (Web Browser) berfungsi utama untuk...',
    options: [
      'Menjelajahi, mengakses, dan menampilkan informasi dari situs web di internet.',
      'Mengedit video berdurasi panjang dengan efek 3D.',
      'Membuat partisi baru pada harddisk komputer.',
      'Mendeteksi kerusakan fisik kabel charger laptop.'
    ],
    correctIndex: 0,
    explanation: 'Web browser (seperti Chrome, Edge, Firefox) menginterpretasikan kode HTML/CSS/JS dari server web dan merendernya menjadi halaman visual yang dapat dibaca manusia.',
    topic: 'Fungsi Web Browser'
  },
  {
    id: 'q_tik_18',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Bcc" (Blind Carbon Copy) pada layanan surat elektronik (Email) digunakan ketika pengirim ingin...',
    options: [
      'Mengirim salinan email ke penerima tanpa alamat email mereka terlihat oleh penerima lainnya.',
      'Mengirim email dengan lampiran berkas yang dienkripsi kata sandi rahasia.',
      'Membatalkan email yang sudah terlanjur terkirim dalam waktu 1 jam.',
      'Mengubah teks badan email menjadi pesan suara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Bcc menyembunyikan daftar alamat penerima salinan dari pandangan penerima di kolom To dan Cc demi menjaga privasi.',
    topic: 'Fitur Komunikasi Email (Bcc)'
  },
  {
    id: 'q_tik_19',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Pak Guru ingin membuat kuis asesmen daring yang otomatis mengoreksi jawaban siswa, membatasi pengerjaan hanya satu kali per akun sekolah, dan merekap skor ke spreadsheet. Platform aplikasi berbasis web yang paling efisien untuk kebutuhan ini adalah...',
    options: [
      'Google Forms / Microsoft Forms yang terintegrasi dengan Sheets',
      'Aplikasi Notepad di Windows',
      'Aplikasi Calculator bawaan',
      'Perangkat lunak Paint'
    ],
    correctIndex: 0,
    explanation: 'Google/Microsoft Forms menyediakan fitur pembuatan kuis otomatis (auto-grading), pembatasan 1 tanggapan per akun (Limit to 1 response), dan ekspor data langsung ke Spreadsheet.',
    topic: 'Formulir Daring & Asesmen Digital'
  },
  {
    id: 'q_tik_20',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Ekstensi berkas default standar untuk dokumen yang dihasilkan oleh aplikasi Microsoft Word modern (versi 2007 ke atas) adalah...',
    options: [
      '.docx',
      '.xlsx',
      '.pptx',
      '.mp3'
    ],
    correctIndex: 0,
    explanation: 'Format berkas dokumen Word modern berbasis Office Open XML berekstensi .docx.',
    topic: 'Ekstensi Berkas Dokumen'
  },
  {
    id: 'q_tik_21',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Watermark" pada dokumen naskah pengolah kata umumnya digunakan untuk...',
    options: [
      'Menampilkan teks samar atau logo di latar belakang halaman seperti status "DRAFT" atau "RAHASIA".',
      'Menyiram tinta printer agar tulisan menjadi mengkilap.',
      'Menghapus semua gambar yang berukuran besar secara otomatis.',
      'Mengubah font menjadi huruf sambung kuno.'
    ],
    correctIndex: 0,
    explanation: 'Watermark adalah teks atau gambar samar di latar belakang halaman untuk menandai kepemilikan, kerahasiaan, atau status dokumen.',
    topic: 'Watermark Dokumen'
  },
  {
    id: 'q_tik_22',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Sebuah berkas presentasi PPTX memiliki ukuran sangat besar (250 MB) karena memuat puluhan foto resolusi tinggi sehingga gagal dikirim lewat lampiran email. Tindakan optimasi yang paling tepat dilakukan di dalam aplikasi PowerPoint tanpa merusak tampilan naskah adalah...',
    options: [
      'Menggunakan fitur "Compress Pictures" untuk menurunkan resolusi gambar ke standar layar (96-150 ppi).',
      'Menghapus seluruh teks penjelasan dan hanya menyisakan gambar kosong.',
      'Mengubah ekstensi file secara paksa menjadi .mp4 video.',
      'Mematikan koneksi internet laptop saat menyimpan berkas.'
    ],
    correctIndex: 0,
    explanation: 'Fitur Compress Pictures mengompresi data piksel gambar yang disisipkan dan membuang area gambar yang di-crop, sehingga ukuran berkas menyusut drastis tanpa menurunkan keterbacaan di layar.',
    topic: 'Optimasi Ukuran Dokumen & Media'
  },
  {
    id: 'q_tik_23',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Proses mengunggah data atau berkas dari komputer lokal menuju server internet disebut...',
    options: [
      'Upload',
      'Download',
      'Install',
      'Restart'
    ],
    correctIndex: 0,
    explanation: 'Upload adalah proses pengiriman file dari komputer klien lokal ke server jaringan/internet. Sebaliknya, Download adalah pengambilan file dari server ke komputer lokal.',
    topic: 'Konsep Upload dan Download'
  },
  {
    id: 'q_tik_24',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fungsi dari fitur "Find and Replace" (Ctrl + H) pada aplikasi perkantoran adalah...',
    options: [
      'Mencari kata tertentu dalam seluruh dokumen dan langsung menggantinya dengan kata baru secara otomatis dan massal.',
      'Mencari berkas hilang di dalam harddisk komputer.',
      'Mengganti format warna kertas menjadi putih bersih.',
      'Memperbaiki ejaan kata bahasa asing tanpa persetujuan pengguna.'
    ],
    correctIndex: 0,
    explanation: 'Find and Replace mendeteksi kemunculan kata atau frasa tertentu di seluruh naskah lalu menggantinya secara massal dengan kata pengganti yang ditentukan.',
    topic: 'Find and Replace'
  },
  {
    id: 'q_tik_25',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Saat membuat dokumen laporan, Andi ingin agar baris judul tabel (Header Row) tetap otomatis muncul di bagian paling atas halaman berikutnya jika tabel tersebut terpotong menjadi 2 halaman. Pengaturan tabel yang harus diaktifkan Andi adalah...',
    options: [
      'Repeat as header row at the top of each page',
      'Merge Cells across columns',
      'Distribute Rows Evenly',
      'Align Top Left'
    ],
    correctIndex: 0,
    explanation: 'Opsi "Repeat Header Rows" pada Table Properties memastikan baris kepala tabel dicetak ulang secara otomatis di setiap halaman lanjutan saat tabel panjang terpecah.',
    topic: 'Format Tabel Kompleks Pengolah Kata'
  },
  {
    id: 'q_tik_26',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Perangkat lunak open source gratis yang populer digunakan untuk mengolah dokumen perkantoran alternatif selain Microsoft Office adalah...',
    options: [
      'LibreOffice / Apache OpenOffice',
      'Adobe Photoshop CC',
      'AutoCAD 3D',
      'Unity Game Engine'
    ],
    correctIndex: 0,
    explanation: 'LibreOffice adalah rangkaian aplikasi perkantoran gratis dan bersumber terbuka (open-source) yang mencakup Writer, Calc, dan Impress.',
    topic: 'Perangkat Lunak Open Source'
  },
  {
    id: 'q_tik_27',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Slide Master" pada aplikasi pengolah presentasi digunakan untuk...',
    options: [
      'Mengatur tema, tata letak default, font, dan logo seragam pada seluruh slide sekaligus dalam satu kali pengaturan terpusat.',
      'Merekam suara pembicara menjadi podcast MP3.',
      'Mengunci presentasi agar tidak dapat dibuka di komputer lain.',
      'Menampilkan timer hitung mundur saat presentasi berlangsung.'
    ],
    correctIndex: 0,
    explanation: 'Slide Master adalah template induk yang mengontrol desain global (background, font, logo header/footer) pada semua slide turunan di presentasi.',
    topic: 'Desain Efisien Slide Master'
  },
  {
    id: 'q_tik_28',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Sebuah perusahaan mengirimkan buletin bulanan ke 5.000 pelanggan melalui email. Mengapa pengirim tidak disarankan menuliskan 5.000 alamat email tersebut di kolom "To" atau "Cc" secara terbuka?',
    options: [
      'Melanggar privasi pelanggan karena semua penerima dapat melihat alamat email orang lain dan berisiko memicu spam massal.',
      'Menyebabkan server email meledak secara fisik.',
      'Membuat komputer pengirim otomatis ter-format.',
      'Email tidak akan sampai sama sekali karena kolom To hanya muat 1 orang.'
    ],
    correctIndex: 0,
    explanation: 'Menaruh ribuan email di kolom To/Cc mengekspos data pribadi semua pelanggan ke publik (kebocoran privasi) dan meningkatkan risiko panen email oleh spammer.',
    topic: 'Etika & Keamanan Komunikasi Email'
  },
  {
    id: 'q_tik_29',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Layanan penyimpanan berkas awan yang dikembangkan oleh perusahaan Google dan terhubung langsung dengan akun Gmail disebut...',
    options: [
      'Google Drive',
      'iCloud',
      'Dropbox',
      'MegaUpload'
    ],
    correctIndex: 0,
    explanation: 'Google Drive adalah layanan penyimpanan awan bawaan ekosistem Google Workspace.',
    topic: 'Layanan Penyimpanan Cloud'
  },
  {
    id: 'q_tik_30',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Drop Cap" pada aplikasi pengolah kata digunakan untuk...',
    options: [
      'Membuat huruf pertama pada awal paragraf berukuran besar yang menggantung ke beberapa baris di bawahnya.',
      'Menghapus semua huruf kapital dalam satu klik.',
      'Mengubah font menjadi huruf miring tebal.',
      'Menyisipkan rumus matematika ke dalam naskah.'
    ],
    correctIndex: 0,
    explanation: 'Drop Cap adalah gaya tipografi percetakan di mana huruf pertama paragraf diperbesar mencakup tinggi dua baris naskah atau lebih.',
    topic: 'Tipografi Pengolah Kata (Drop Cap)'
  },
  {
    id: 'q_tik_31',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Ketika Anda mengunduh berkas kompresi berekstensi .ZIP yang memuat 50 berkas foto di dalamnya, langkah yang harus dilakukan sebelum berkas tersebut dapat disunting dengan leluasa oleh sebagian besar program adalah...',
    options: [
      'Mengekstrak (Extract All / Unzip) berkas ke folder lokal tujuan.',
      'Mengubah nama ekstensi file secara manual menjadi .DOCX.',
      'Mencetak berkas ZIP ke printer.',
      'Mengunggahnya kembali ke browser tanpa membuka.'
    ],
    correctIndex: 0,
    explanation: 'Berkas ZIP harus diekstrak (decompressed) terlebih dahulu agar file di dalamnya kembali ke bentuk struktur direktori normal dan dapat diakses aplikasi pengolah gambar.',
    topic: 'Manajemen Berkas Arsip Kompresi'
  },
  {
    id: 'q_tik_32',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Satuan standar untuk menyatakan resolusi kerapatan piksel pada sebuah gambar digital atau cetakan adalah...',
    options: [
      'DPI (Dots Per Inch) / PPI (Pixels Per Inch)',
      'Watt',
      'Hertz (Hz)',
      'Volt'
    ],
    correctIndex: 0,
    explanation: 'DPI (Dots Per Inch) dan PPI (Pixels Per Inch) mengukur kepadatan titik/piksel pada media cetak atau layar digital untuk menentukan ketajaman gambar.',
    topic: 'Resolusi Gambar Digital'
  },
  {
    id: 'q_tik_33',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Pada penulisan daftar pustaka otomatis (Citations & Bibliography) di pengolah kata, gaya format sitasi ilmiah yang umum digunakan di bidang ilmu sosial adalah...',
    options: [
      'APA Style (American Psychological Association)',
      'Comic Sans Style',
      'HTML Tag Style',
      'ASCII Format'
    ],
    correctIndex: 0,
    explanation: 'APA Style adalah salah satu standar format sitasi dan daftar pustaka yang paling banyak diakui dan digunakan dalam penulisan karya ilmiah.',
    topic: 'Sitasi & Referensi Ilmiah Otomatis'
  },
  {
    id: 'q_tik_34',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Siswa kelas 9 membuat formulir pendaftaran OSIS daring menggunakan Google Forms. Bagaimana cara terbaik agar panitia dapat melihat grafik ringkasan pilihan jawaban secara langsung dan mengekspor rincian data peserta ke Excel?',
    options: [
      'Membuka tab "Responses/Jawaban" untuk melihat diagram pie chart dan mengklik ikon spreadsheet hijau untuk mengunduh berkas CSV/XLSX.',
      'Memfoto layar gawai panitia satu per satu.',
      'Meminta siswa mengirim ulang formulir lewat kertas pos.',
      'Menghapus formulir dan membuat ulang.'
    ],
    correctIndex: 0,
    explanation: 'Tab Responses pada Google Forms menyajikan visualisasi data ringkas secara instan dan menyediakan tautan langsung untuk mengekspor database ke Google Sheets / Excel.',
    topic: 'Analisis Data Formulir Daring'
  },
  {
    id: 'q_tik_35',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Protokol keamanan web yang ditandai dengan ikon gembok terkunci pada bilah alamat URL peramban menandakan bahwa situs web tersebut menggunakan...',
    options: [
      'HTTPS (Hypertext Transfer Protocol Secure)',
      'HTTP biasa tanpa enkripsi',
      'FTP (File Transfer Protocol)',
      'Telnet'
    ],
    correctIndex: 0,
    explanation: 'HTTPS mengamankan komunikasi data antara browser pengguna dan server web menggunakan enkripsi SSL/TLS.',
    topic: 'Protokol Web Aman (HTTPS)'
  },
  {
    id: 'q_tik_36',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Dalam pembuatan presentasi, prinsip desain visual "High Contrast" antara teks dan latar belakang bertujuan untuk...',
    options: [
      'Memastikan teks mudah dibaca dengan jelas oleh audiens bahkan dari jarak jauh.',
      'Membuat ukuran file slide menjadi lebih kecil.',
      'Mempercepat animasi transisi otomatis.',
      'Menghemat baterai remote presenter.'
    ],
    correctIndex: 0,
    explanation: 'Kontras yang tinggi (seperti teks putih di atas latar gelap, atau teks hitam di atas latar terang) meningkatkan keterbacaan (readability) naskah secara signifikan.',
    topic: 'Prinsip Desain Presentasi Efektif'
  },
  {
    id: 'q_tik_37',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Fitur "Spell Check and Grammar" pada pengolah kata berfungsi untuk...',
    options: [
      'Memeriksa dan memberikan saran perbaikan terhadap kesalahan ejaan kata dan tata bahasa penulisan.',
      'Menyisipkan gambar secara acak.',
      'Menghitung jumlah halaman yang dicetak.',
      'Mengubah font menjadi huruf tebal.'
    ],
    correctIndex: 0,
    explanation: 'Spell Check mendeteksi tipo/salah ketik dan kesalahan gramatikal berdasarkan kamus bahasa yang dipilih pengguna.',
    topic: 'Pemeriksa Ejaan & Tata Bahasa'
  },
  {
    id: 'q_tik_38',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Ketika membuat naskah koran atau buletin dinding yang membagi halaman menjadi 3 kolom teks sejajar, teks di kolom pertama mengalir otomatis ke kolom kedua. Fitur tata letak yang digunakan adalah...',
    options: [
      'Page Layout -> Columns (3 Kolom)',
      'Insert Table 3x1 tanpa border',
      'Insert 3 buah Text Box terpisah manual',
      'Mengatur spasi paragraf 3.0'
    ],
    correctIndex: 0,
    explanation: 'Fitur Columns pada Page Layout membagi aliran teks naskah secara dinamis ke dalam beberapa kolom koran tanpa perlu membuat kotak teks terpisah.',
    topic: 'Tata Letak Format Kolom Berita'
  },
  {
    id: 'q_tik_39',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "Format Painter" (ikon kuas) pada aplikasi perkantoran sangat efisien untuk...',
    options: [
      'Menyalin gaya format (jenis font, ukuran, warna, efek) dari satu teks dan menerapkannya langsung ke teks target lain.',
      'Menggambar lukisan bebas menggunakan kuas cat digital.',
      'Menghapus seluruh format dokumen kembali ke teks polos.',
      'Mengubah warna kertas menjadi transparan.'
    ],
    correctIndex: 0,
    explanation: 'Format Painter menyalin properti format teks/objek tanpa menyalin isi teksnya, menghemat waktu penyeragaman gaya dokumen.',
    topic: 'Efisiensi Format Painter'
  },
  {
    id: 'q_tik_40',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Singkatan dari URL yang merupakan alamat penunjuk unik untuk setiap halaman di internet adalah...',
    options: [
      'Uniform Resource Locator',
      'Universal Radio Link',
      'United Remote Language',
      'User Registered Login'
    ],
    correctIndex: 0,
    explanation: 'URL (Uniform Resource Locator) adalah alamat global terstandarisasi untuk menunjukkan lokasi dokumen di World Wide Web.',
    topic: 'Konsep Alamat URL'
  },
  {
    id: 'q_tik_41',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Seorang sekretaris diminta membuat 200 sertifikat pelatihan. Data nama peserta dan nomor sertifikat ada di Excel. Langkah paling efisien yang harus ia lakukan di Word adalah...',
    options: [
      'Mendesain 1 halaman sertifikat master di Word lalu menghubungkannya ke file Excel menggunakan Mailings (Mail Merge -> Letters/Labels).',
      'Mengetik ulang nama peserta 200 kali secara manual satu per satu di 200 halaman berbeda.',
      'Menulis nama peserta menggunakan pulpen tinta basah setelah dicetak kosong.',
      'Membuat 200 file dokumen terpisah.'
    ],
    correctIndex: 0,
    explanation: 'Mail Merge mengintegrasikan data nama di Excel ke dalam satu template sertifikat di Word, mencetak 200 sertifikat personal secara instan.',
    topic: 'Studi Kasus Mail Merge Sertifikat'
  },
  {
    id: 'q_tik_42',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Mode penyimpanan dokumen pada Google Docs secara default bersifat "Autosave", yang artinya...',
    options: [
      'Setiap perubahan ketikan langsung disimpan secara otomatis ke server cloud tanpa perlu menekan tombol simpan manual.',
      'Dokumen hanya disimpan saat pengguna menekan tombol Ctrl + S sebanyak 3 kali.',
      'Dokumen disimpan otomatis ke harddisk lokal dalam bentuk file ZIP.',
      'Dokumen otomatis terhapus setelah 24 jam.'
    ],
    correctIndex: 0,
    explanation: 'Aplikasi berbasis cloud menyimpan setiap karakter dan revisi secara otomatis dan real-time ke akun cloud pengguna.',
    topic: 'Penyimpanan Berbasis Cloud'
  },
  {
    id: 'q_tik_43',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Aplikasi perangkat lunak yang digunakan untuk mengompresi ukuran berkas menjadi arsip .RAR atau .ZIP di komputer Windows adalah...',
    options: [
      'WinRAR / 7-Zip',
      'VLC Media Player',
      'CorelDraw',
      'Audacity'
    ],
    correctIndex: 0,
    explanation: 'WinRAR dan 7-Zip adalah utility pengarsipan dan kompresi file terkemuka.',
    topic: 'Utilitas Kompresi Berkas'
  },
  {
    id: 'q_tik_44',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Saat mengunggah video presentasi tugas sekolah ke platform YouTube, opsi visibilitas "Unlisted" (Tidak Publik) berarti...',
    options: [
      'Video hanya dapat ditonton oleh orang yang memiliki tautan langsung video tersebut dan tidak akan muncul di hasil pencarian publik YouTube.',
      'Video dapat dicari dan ditonton oleh siapa saja di seluruh dunia.',
      'Video hanya dapat dibuka oleh pemilik akun saja saat login.',
      'Video akan otomatis terhapus dalam waktu 30 hari.'
    ],
    correctIndex: 0,
    explanation: 'Mode "Unlisted" menyembunyikan video dari algoritma penelusuran dan beranda YouTube, tetapi siapa pun yang memegang link URL tetap dapat memutarnya.',
    topic: 'Hak Privasi Media Daring (Unlisted)'
  },
  {
    id: 'q_tik_45',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Perbedaan mendasar antara gambar vektor (seperti SVG) dan gambar bitmap/raster (seperti JPEG/PNG) adalah...',
    options: [
      'Gambar vektor berbasis rumus matematika sehingga tidak pecah/buram saat diperbesar, sedangkan bitmap berbasis kisi piksel.',
      'Gambar vektor memiliki jutaan warna sedangkan bitmap hanya warna hitam putih.',
      'Gambar vektor hanya dapat dibuka di pemutar audio.',
      'Gambar vektor berukuran gigabyte lebih besar dari bitmap.'
    ],
    correctIndex: 0,
    explanation: 'Format Vektor menggunakan kalkulasi garis dan bentuk geometris (tidak pecah saat di-zoom), sedangkan Raster (Bitmap) tersusun dari matriks titik piksel tetap.',
    topic: 'Grafis Digital: Vektor vs Bitmap'
  },
  {
    id: 'q_tik_46',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Istilah untuk proses menyalin teks atau objek ke clipboard (memori sementara) tanpa menghapus objek aslinya adalah...',
    options: [
      'Copy (Ctrl + C)',
      'Cut (Ctrl + X)',
      'Delete (Del)',
      'Paste (Ctrl + V)'
    ],
    correctIndex: 0,
    explanation: 'Copy menduplikasi data ke clipboard sementara sumber asli tetap ada. Sebaliknya, Cut memindahkan data (menghapus dari posisi asal).',
    topic: 'Operasi Clipboard Dasar'
  },
  {
    id: 'q_tik_47',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Sebuah dokumen Word berisi 50 halaman. Budi ingin agar halaman 10 yang memuat tabel lebar berorientasi Landscape, sedangkan halaman 1-9 dan 11-50 tetap Portrait. Langkah yang tepat adalah...',
    options: [
      'Menyisipkan Section Break (Next Page) sebelum dan sesudah halaman 10, lalu mengubah orientation halaman 10 menjadi Landscape.',
      'Mengubah orientation dokumen menjadi Landscape di menu Page Setup.',
      'Memutar layar monitor laptop sebesar 90 derajat.',
      'Membuat dokumen baru khusus halaman 10.'
    ],
    correctIndex: 0,
    explanation: 'Menempatkan Section Break di awal dan akhir halaman 10 mengisolasi bagian tersebut sehingga orientasi Landscape hanya berlaku spesifik untuk Section itu.',
    topic: 'Orientasi Campuran dalam Satu Dokumen'
  },
  {
    id: 'q_tik_48',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'MotS',
    stem: 'Fitur "SmartArt" pada aplikasi perkantoran digunakan untuk...',
    options: [
      'Membuat diagram visual hierarki, alur proses, siklus, dan hubungan struktur data secara cepat dan estetik.',
      'Menggambar animasi kartun bergerak.',
      'Memutar rekaman video YouTube.',
      'Mengukur kecepatan mengetik kata per menit.'
    ],
    correctIndex: 0,
    explanation: 'SmartArt menyajikan template diagram grafis profesional untuk memvisualisasikan informasi seperti bagan organisasi, siklus proses, dan matriks relasi.',
    topic: 'Visualisasi Informasi SmartArt'
  },
  {
    id: 'q_tik_49',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'LotS',
    stem: 'Bilah menu di bagian atas jendela aplikasi Microsoft Office yang mengelompokkan berbagai ikon perintah ke dalam tab-tab (Home, Insert, Layout, dll.) dinamakan...',
    options: [
      'Ribbon',
      'Taskbar',
      'Status Bar',
      'Scrollbar'
    ],
    correctIndex: 0,
    explanation: 'Ribbon adalah antarmuka panel menu utama Microsoft Office yang menyatukan grup perintah dalam tab fungsional.',
    topic: 'Antarmuka Aplikasi (Ribbon)'
  },
  {
    id: 'q_tik_50',
    element: 'TIK',
    materi: 'Teknologi Informasi & Komunikasi',
    level: 'HoTS',
    stem: 'Manakah dari praktik penggunaan TIK berikut yang paling efisien dan ramah lingkungan (Paperless Office) dalam lingkup administrasi sekolah modern?',
    options: [
      'Mendistribusikan surat edaran orang tua via dokumen digital bertanda tangan elektronik melalui aplikasi pesan instan resmi.',
      'Mencetak naskah surat 500 lembar lalu membagikannya secara manual dengan sepeda motor.',
      'Memfotokopi surat bolak-balik sebanyak 1.000 eksemplar.',
      'Menulis surat pengumuman di papan tulis sekolah.'
    ],
    correctIndex: 0,
    explanation: 'Pemanfaatan dokumen digital bertanda tangan elektronik menghemat penggunaan kertas fisik, mempercepat transmisi informasi secara real-time, dan ramah lingkungan.',
    topic: 'Penerapan Paperless Office Ramah Lingkungan'
  }
];
