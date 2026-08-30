import { Question } from '../types';

export const QUESTIONS_DSI: Question[] = [
  {
    id: 'q_dsi_1',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Undang-Undang di Indonesia yang secara khusus mengatur tentang transaksi elektronik, tanda tangan digital, serta pencegahan dan penindakan tindak pidana kejahatan siber adalah...',
    options: [
      'UU ITE (Undang-Undang Informasi dan Transaksi Elektronik)',
      'UU Ketenagakerjaan',
      'UU Perpajakan',
      'UU Lalu Lintas Angkutan Jalan'
    ],
    correctIndex: 0,
    explanation: 'UU ITE (UU No. 11 Tahun 2008 jo. UU No. 19 Tahun 2016 jo. UU No. 1 Tahun 2024) adalah payung hukum utama tindak pidana siber dan transaksi digital di Indonesia.',
    topic: 'Regulasi Hukum Siber (UU ITE)'
  },
  {
    id: 'q_dsi_2',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Seseorang menerima pesan SMS yang berisi tautan (link) dengan narasi: "Selamat! Anda memenangkan undian 50 juta rupiah, klik tautan berikut untuk klaim hadiah!". Saat diklik, situs tersebut meminta korban memasukkan nomor kartu ATM dan PIN rahasia. Bentuk kejahatan siber ini dinamakan...',
    options: [
      'Phishing (Smishing)',
      'Denial of Service (DoS)',
      'Deface Web',
      'Cyber Stalking'
    ],
    correctIndex: 0,
    explanation: 'Phishing (atau Smishing jika lewat SMS) adalah teknik rekayasa sosial manipulatif untuk memancing korban memberikan informasi kredensial sensitif seperti PIN atau OTP.',
    topic: 'Kejahatan Siber Rekayasa Sosial (Phishing)'
  },
  {
    id: 'q_dsi_3',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Jejak data yang kita tinggalkan secara sengaja maupun tidak sengaja saat menggunakan internet (seperti riwayat pencarian, unggahan foto, komentar, dan lokasi GPS) disebut...',
    options: [
      'Jejak Digital (Digital Footprint)',
      'Cache RAM',
      'Koneksi Wi-Fi',
      'Bookmark Web'
    ],
    correctIndex: 0,
    explanation: 'Jejak Digital (Digital Footprint) adalah rekaman riwayat aktivitas daring seseorang yang dapat dilacak dan sulit dihapus sepenuhnya dari internet.',
    topic: 'Konsep Jejak Digital (Digital Footprint)'
  },
  {
    id: 'q_dsi_4',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Lisensi hak cipta fleksibel yang memungkinkan pencipta karya membagikan karyanya kepada publik secara legal dengan syarat tertentu (seperti kewajiban atribusi nama pencipta) adalah...',
    options: [
      'Creative Commons (CC)',
      'Proprietary Closed Source',
      'All Rights Reserved Total',
      'Copyright Ban'
    ],
    correctIndex: 0,
    explanation: 'Lisensi Creative Commons (CC) memberikan izin standarisasi bagi publik untuk memanfaatkan, membagikan, atau memodifikasi karya kreatif sesuai spektrum lisensi yang dipilih.',
    topic: 'Lisensi Karya Terbuka (Creative Commons)'
  },
  {
    id: 'q_dsi_5',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Dalam Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022), manakah dari kelompok informasi berikut yang dikategorikan sebagai "Data Pribadi yang Bersifat Spesifik" dan memerlukan perlindungan hukum ekstra ketat?',
    options: [
      'Data kesehatan riwayat medis, data biometrik sidik jari, data genetika, dan catatan kejahatan.',
      'Nama panggilan sehari-hari dan warna baju favorit.',
      'Merk sepatu yang dipakai ke sekolah.',
      'Judul buku komik yang dibaca di perpustakaan.'
    ],
    correctIndex: 0,
    explanation: 'UU PDP mengklasifikasikan data kesehatan, biometrik, genetika, anak, data keuangan pribadi, dan catatan kejahatan sebagai data pribadi spesifik bernilai tinggi.',
    topic: 'Hukum Perlindungan Data Pribadi (UU PDP)'
  },
  {
    id: 'q_dsi_6',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Jenis perangkat perusak (malware) yang mengenkripsi (mengunci) seluruh berkas penting korban dan menuntut pembayaran uang tebusan dalam bentuk mata uang kripto agar kunci dekripsi diberikan dinamakan...',
    options: [
      'Ransomware',
      'Adware',
      'Spyware',
      'Keylogger'
    ],
    correctIndex: 0,
    explanation: 'Ransomware menyandera file korban dengan enkripsi kuat dan meminta tebusan (ransom) untuk pemulihan.',
    topic: 'Ancaman Malware (Ransomware)'
  },
  {
    id: 'q_dsi_7',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Metode otentikasi keamanan akun yang mewajibkan pengguna memasukkan dua bukti identitas berbeda (misalnya password akun diikuti kode OTP SMS di HP) disebut...',
    options: [
      'Two-Factor Authentication (2FA / MFA)',
      'Single Sign-On (SSO)',
      'Auto-Fill Password',
      'Guest Login'
    ],
    correctIndex: 0,
    explanation: '2FA (Otentikasi Dua Faktor) memperkuat perlindungan dengan memadukan faktor pengetahuan (password) dan faktor kepemilikan (kode ponsel / autentikator).',
    topic: 'Otentikasi Dua Faktor (2FA)'
  },
  {
    id: 'q_dsi_8',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Perilaku intimidasi, pelecehan, pencemaran nama baik, atau ancaman yang dilakukan secara berulang-ulang terhadap seseorang melalui media sosial atau aplikasi perpesanan dikenal sebagai...',
    options: [
      'Cyberbullying (Perundungan Siber)',
      'Cyber Security',
      'Data Mining',
      'Digital Literacy'
    ],
    correctIndex: 0,
    explanation: 'Cyberbullying mencakup pelecehan psikologis dan sosial di ranah digital yang memiliki konsekuensi hukum pidana serta dampak trauma emosional bagi korban.',
    topic: 'Etika Digital & Anti-Cyberbullying'
  },
  {
    id: 'q_dsi_9',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Istilah untuk berita bohong, informasi palsu, atau kabar manipulatif yang sengaja disebarkan di media sosial untuk memicu kepanikan dan perpecahan masyarakat adalah...',
    options: [
      'Hoaks (Hoax / Disinformasi)',
      'Fakta',
      'E-book',
      'Podcast'
    ],
    correctIndex: 0,
    explanation: 'Hoaks adalah konten tidak benar yang sengaja diproduksi dan disebarluaskan untuk mengelabui atau merugikan pihak lain.',
    topic: 'Disinformasi & Literasi Berita (Hoaks)'
  },
  {
    id: 'q_dsi_10',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Etika dan sopan santun dalam berkomunikasi dan berinteraksi di dunia maya internet sering disebut dengan istilah...',
    options: [
      'Netiket (Network Etiquette)',
      'Protokol TCP',
      'Bandwidth Net',
      'Cyber Crime'
    ],
    correctIndex: 0,
    explanation: 'Netiket (Netiquette) adalah kaidah etika moral, kesantunan bertutur, dan respek yang wajib dipatuhi warganet di ruang digital.',
    topic: 'Etika Komunikasi Daring (Netiket)'
  },
  {
    id: 'q_dsi_11',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Seorang siswa mengunduh gambar lukisan karya orang lain dari internet lalu menghapus tanda tangan asli pelukisnya dan mengunggahnya kembali ke media sosial dengan klaim sebagai karya pribadinya demi mendapatkan pujian. Tindakan ini merupakan pelanggaran etika akademik berupa...',
    options: [
      'Plagiarisme dan Pelanggaran Hak Cipta (Hak Moral)',
      'Open Source Development',
      'Digital Marketing',
      'Data Cleansing'
    ],
    correctIndex: 0,
    explanation: 'Mengklaim karya orang lain sebagai buatan sendiri tanpa sitasi atau atribusi merupakan plagiarisme terang-terangan dan melanggar hak moral pencipta.',
    topic: 'Plagiarisme & Integritas Intelektual'
  },
  {
    id: 'q_dsi_12',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Kombinasi kata sandi (password) yang tergolong KUAT dan aman dari serangan peretasan adalah...',
    options: [
      'Minimal 12 karakter yang memadukan huruf besar, huruf kecil, angka, dan simbol unik acak (contoh: K#7vP!9m$L2q)',
      '12345678',
      'password123',
      'nama panggilan sendiri tanggal lahir'
    ],
    correctIndex: 0,
    explanation: 'Kata sandi kuat memiliki entropi tinggi dengan kombinasi ragam karakter kompleks dan panjang mencukupi untuk menangkal serangan brute force.',
    topic: 'Keamanan Kata Sandi (Password Security)'
  },
  {
    id: 'q_dsi_13',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Perangkat lunak berbahaya yang merekam setiap ketukan tombol keyboard korban secara rahasia untuk mencuri username, password, dan nomor kartu kredit disebut...',
    options: [
      'Keylogger',
      'Firewall',
      'Adblocker',
      'Defragmenter'
    ],
    correctIndex: 0,
    explanation: 'Keylogger mencatat penekanan tombol tuts keyboard pengguna dan mengirim log tersebut ke server peretas.',
    topic: 'Ancaman Spyware (Keylogger)'
  },
  {
    id: 'q_dsi_14',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Dampak positif perkembangan ekonomi digital dan platform e-commerce bagi Usaha Mikro, Kecil, dan Menengah (UMKM) di daerah pedesaan adalah...',
    options: [
      'Memperluas jangkauan pasar hingga ke tingkat nasional dan global tanpa harus membuka cabang toko fisik yang mahal.',
      'Memaksa pedagang tradisional menutup usahanya selamanya.',
      'Membuat ongkos kirim menjadi lebih mahal daripada barang.',
      'Menghilangkan keharusan membayar pajak usaha.'
    ],
    correctIndex: 0,
    explanation: 'E-commerce mendemokratisasi akses pasar, memungkinkan pelaku UMKM daerah menjangkau jutaan konsumen lintas pulau secara efisien.',
    topic: 'Dampak Ekonomi Digital & E-Commerce'
  },
  {
    id: 'q_dsi_15',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Kesenjangan kemampuan dan akses terhadap teknologi informasi antara masyarakat perkotaan dengan masyarakat di daerah terpencil dikenal dengan istilah...',
    options: [
      'Kesenjangan Digital (Digital Divide)',
      'Digital Footprint',
      'Cyber Warfare',
      'Cloud Computing'
    ],
    correctIndex: 0,
    explanation: 'Digital Divide menggambarkan kesenjangan akses internet, perangkat keras gawai, dan literasi digital antar kelompok sosial ekonomi.',
    topic: 'Kesenjangan Digital (Digital Divide)'
  },
  {
    id: 'q_dsi_16',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Dampak negatif penggunaan gawai pintar (gadget) yang berlebihan dan tanpa kontrol waktu bagi kesehatan remaja adalah...',
    options: [
      'Gangguan pola tidur (insomnia akibat paparan blue light), mata lelah, dan penurunan interaksi sosial langsung di dunia nyata.',
      'Meningkatnya kecerdasan logika secara instan.',
      'Membuat tinggi badan bertambah cepat.',
      'Meningkatkan daya tahan tubuh dari virus flu.'
    ],
    correctIndex: 0,
    explanation: 'Kecanduan layar berlebihan memicu gangguan tidur sirkadian, postur tubuh buruk (text neck), dan kecemasan sosial.',
    topic: 'Dampak Kesehatan Penggunaan Gawai Berlebih'
  },
  {
    id: 'q_dsi_17',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Teknologi "Deepfake" berbasis kecerdasan buatan (AI) yang mampu memanipulasi wajah dan suara tokoh publik dalam video secara sangat realistis berpotensi menimbulkan bahaya besar berupa...',
    options: [
      'Penyebaran fitnah politik, disinformasi massal, penipuan identitas, dan penurunan kepercayaan publik terhadap bukti rekaman video digital.',
      'Membuat baterai kamera video menjadi lebih hemat energi.',
      'Menurunkan resolusi video di YouTube menjadi hitam putih.',
      'Meningkatkan kecepatan unduh internet di sekolah.'
    ],
    correctIndex: 0,
    explanation: 'Deepfake dapat dieksploitasi untuk fabrikasi bukti palsu, pembunuhan karakter, penipuan rekayasa sosial tingkat lanjut, dan kekacauan informasi publik.',
    topic: 'Tantangan Etis Kecerdasan Buatan (Deepfake)'
  },
  {
    id: 'q_dsi_18',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Perangkat lunak yang didistribusikan gratis untuk dicoba dalam masa percobaan terbatas (misal 30 hari) sebelum pengguna diwajibkan membeli lisensi penuh dinamakan...',
    options: [
      'Shareware / Trialware',
      'Freeware',
      'Open Source Software',
      'Public Domain'
    ],
    correctIndex: 0,
    explanation: 'Shareware menyediakan periode uji coba gratis dengan fitur terbatas atau batasan waktu pakai tertentu sebelum mewajibkan pembelian lisensi.',
    topic: 'Model Lisensi Perangkat Lunak'
  },
  {
    id: 'q_dsi_19',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Perangkat lunak yang dapat digunakan dan didistribusikan secara cuma-cuma tanpa batas waktu, namun kode sumber aslinya (source code) tetap dirahasiakan dan tidak boleh dimodifikasi disebut...',
    options: [
      'Freeware',
      'Open Source',
      'Shareware',
      'Commercial Software'
    ],
    correctIndex: 0,
    explanation: 'Freeware bebas biaya pakai bagi pengguna akhir, tetapi berstatus closed-source (hak milik eksklusif pengembang).',
    topic: 'Lisensi Freeware vs Open Source'
  },
  {
    id: 'q_dsi_20',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Tindakan menyebarkan informasi pribadi sensitif seseorang (seperti alamat rumah, nomor KTP, nomor HP, data keluarga) ke forum media sosial tanpa izin dengan niat jahat agar korban diteror oleh warganet dinamakan aksi...',
    options: [
      'Doxing (Doxxing)',
      'Phishing',
      'Defacing',
      'Spamming'
    ],
    correctIndex: 0,
    explanation: 'Doxxing adalah publikasi ilegal data privat seseorang ke ruang publik maya untuk tujuan intimidasi, persekusi, atau pelecehan.',
    topic: 'Kejahatan Privasi Digital (Doxxing)'
  },
  {
    id: 'q_dsi_21',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Pakar keamanan siber yang secara etis dan legal menguji celah keamanan suatu sistem komputer atas izin pemilik sistem untuk membantu memperkuat pertahanan disebut...',
    options: [
      'White Hat Hacker (Ethical Hacker)',
      'Black Hat Hacker',
      'Cracker Ilegal',
      'Carder'
    ],
    correctIndex: 0,
    explanation: 'White Hat (Peretas Etis) bekerja secara sah dan profesional untuk menemukan serta menambal kerentanan sistem demi keamanan publik.',
    topic: 'Klasifikasi Peretas (White Hat vs Black Hat)'
  },
  {
    id: 'q_dsi_22',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Langkah pertama yang paling bijak dilakukan saat menemukan informasi yang memicu kemarahan atau tampak mencurigakan di media sosial adalah...',
    options: [
      'Melakukan verifikasi fakta (Check and Recheck) ke situs berita resmi terverifikasi dan lembaga kredibel sebelum membagikannya.',
      'Langsung menyebarkan ke semua grup WhatsApp keluarga.',
      'Menuliskan komentar kasar menggunakan huruf kapital semua.',
      'Menghapus aplikasi browser dari HP.'
    ],
    correctIndex: 0,
    explanation: 'Saring sebelum sharing (verifikasi sumber independen/Fact Checking) adalah pilar utama literasi digital penangkal hoaks.',
    topic: 'Literasi Digital & Verifikasi Informasi'
  },
  {
    id: 'q_dsi_23',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Dampak otomasi industri, kecerdasan buatan (AI), dan robotika terhadap lapangan pekerjaan di masa depan adalah...',
    options: [
      'Mengurangi permintaan tenaga kerja untuk pekerjaan rutin-manual yang repetitif, sekaligus menciptakan profesi-profesi baru yang membutuhkan keterampilan analitis, pemrograman, dan kreativitas tinggi.',
      'Menghilangkan seluruh pekerjaan manusia tanpa terkecuali sehingga manusia tidak perlu bekerja sama sekali.',
      'Hanya berdampak pada profesi nelayan dan petani tradisional saja.',
      'Membuat seluruh kantor kembali menggunakan mesin tik manual.'
    ],
    correctIndex: 0,
    explanation: 'Revolusi industri menggeser profil ketenagakerjaan dari tugas manual berulang ke pekerjaan berbasis keahlian teknologi, analitika data, dan kecerdasan kognitif tinggi.',
    topic: 'Transformasi Dunia Kerja & Otomasi AI'
  },
  {
    id: 'q_dsi_24',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Tindakan menyalin, membajak, dan memperbanyak program perangkat lunak berbayar tanpa izin atau lisensi resmi dari pemilik hak cipta merupakan pelanggaran hukum...',
    options: [
      'Hak Atas Kekayaan Intelektual (HAKI)',
      'Hukum Agraria',
      'Peraturan Lalu Lintas',
      'Undang-Undang Tata Ruang Kota'
    ],
    correctIndex: 0,
    explanation: 'Pembajakan perangkat lunak melanggar rezim Hak Kekayaan Intelektual (HAKI) dan UU Hak Cipta.',
    topic: 'Hak Atas Kekayaan Intelektual (HAKI)'
  },
  {
    id: 'q_dsi_25',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Tanda air (Watermark) digital atau metadata hak cipta yang disematkan pada sebuah karya foto bertujuan untuk...',
    options: [
      'Menyatakan identitas kepemilikan hak cipta pencipta dan mencegah pencurian/penggunaan karya tanpa izin.',
      'Menurunkan kualitas gambar menjadi buram.',
      'Membuat file foto tidak bisa dibuka di smartphone.',
      'Mengurangi jumlah warna pada gambar.'
    ],
    correctIndex: 0,
    explanation: 'Watermark mengidentifikasi hak cipta dan kepemilikan karya visual secara eksplisit.',
    topic: 'Perlindungan Hak Cipta Digital'
  },
  {
    id: 'q_dsi_26',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Mengapa Anda dilarang keras mengunggah foto kartu identitas (KTP/Kartu Pelajar) atau tiket pesawat yang memuat barcode/QR code ke akun media sosial publik?',
    options: [
      'Karena memuat Nomor Induk Kependudukan (NIK) dan data pribadi spesifik yang dapat disalahgunakan pelaku kejahatan untuk pinjaman online ilegal atau pemalsuan identitas.',
      'Karena dapat menghabiskan memori server media sosial.',
      'Karena kualitas foto KTP selalu berukuran terlalu besar.',
      'Karena kamera ponsel akan mengalami gangguan sensor.'
    ],
    correctIndex: 0,
    explanation: 'NIK, tanggal lahir, dan barcode boarding pass memuat data pribadi rentan (Personally Identifiable Information) yang sering dieksploitasi untuk pencurian identitas.',
    topic: 'Kerahasiaan Dokumen Identitas Pribadi'
  },
  {
    id: 'q_dsi_27',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Aplikasi berbahaya yang menyamar sebagai program berguna (misalnya game gratis atau pembersih RAM) namun diam-diam merusak sistem atau membuka pintu belakang (backdoor) dinamakan...',
    options: [
      'Trojan Horse',
      'Patch Update',
      'Device Driver',
      'Firmware'
    ],
    correctIndex: 0,
    explanation: 'Trojan Horse menyamarkan diri sebagai program legal untuk menyusupkan payload perusak ke sistem korban.',
    topic: 'Ancaman Malware (Trojan Horse)'
  },
  {
    id: 'q_dsi_28',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Kondisi psikologis berupa ketakutan berlebihan akan ketinggalan berita, tren, atau aktivitas seru yang sedang terjadi di media sosial dinamakan...',
    options: [
      'FOMO (Fear of Missing Out)',
      'Cyber Stalking',
      'Digital Literacy',
      'Defragmentation'
    ],
    correctIndex: 0,
    explanation: 'FOMO (Fear of Missing Out) adalah kecemasan sosial kompulsif yang mendorong keterikatan berlebihan pada gawai dan medsos.',
    topic: 'Fenomena Sosial Digital (FOMO)'
  },
  {
    id: 'q_dsi_29',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Saat melakukan transaksi belanja daring (online shopping), manakah indikator keamanan yang menunjukkan bahwa platform e-commerce tersebut dapat dipercaya?',
    options: [
      'Menggunakan protokol HTTPS resmi, memiliki sistem pembayaran escrow (rekening bersama aman), dan memiliki ulasan produk yang terverifikasi dari banyak pembeli nyata.',
      'Hanya menerima pembayaran via transfer ke rekening bank pribadi tanpa tanda bukti.',
      'Menawarkan harga barang mewah 90% lebih murah dari harga pasar wajar.',
      'Tidak mencantumkan alamat kantor dan nomor kontak layanan pelanggan.'
    ],
    correctIndex: 0,
    explanation: 'Sistem Escrow rekening bersama resmi, enkripsi HTTPS, dan reputasi review pembeli melindungi dana konsumen hingga pesanan tiba dengan benar.',
    topic: 'Keamanan Transaksi E-Commerce'
  },
  {
    id: 'q_dsi_30',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Hak moral seorang pencipta karya mencakup hak untuk...',
    options: [
      'Tetap dicantumkan namanya pada salinan karyanya dan mempertahankan integritas karyanya dari pengubahan yang merusak reputasi.',
      'Melarang siapapun melihat karyanya selamanya.',
      'Menghancurkan komputer orang lain yang membeli karyanya.',
      'Mematikan jaringan listrik umum.'
    ],
    correctIndex: 0,
    explanation: 'Hak moral melekat abadi pada pencipta untuk diakui sebagai pengarang/kreator atas karya ciptaannya.',
    topic: 'Hak Moral Pencipta Karya'
  },
  {
    id: 'q_dsi_31',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Istilah "Cyber Espionage" dalam kejahatan dunia maya merujuk pada...',
    options: [
      'Spionase atau tindakan memata-matai secara siber untuk mencuri rahasia negara, dokumen intelijen, atau data riset perusahaan rahasia.',
      'Menonton video tutorial game di YouTube.',
      'Mengirim email ucapan ulang tahun ke teman.',
      'Memperbaiki kabel charger HP yang rusak.'
    ],
    correctIndex: 0,
    explanation: 'Cyber Espionage adalah aktivitas mata-mata digital terencana terhadap data strategis rahasia pemerintah atau korporasi.',
    topic: 'Spionase Siber (Cyber Espionage)'
  },
  {
    id: 'q_dsi_32',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Situs web resmi pemerintah Republik Indonesia umumnya menggunakan domain tingkat atas (Top-Level Domain) yang terstandarisasi khusus, yaitu...',
    options: [
      '.go.id',
      '.com',
      '.xyz',
      '.net'
    ],
    correctIndex: 0,
    explanation: 'Domain .go.id adalah domain resmi pemerintah (government) Indonesia yang memerlukan verifikasi legalitas ketat dari Kominfo.',
    topic: 'Standar Domain Resmi Lembaga (.go.id)'
  },
  {
    id: 'q_dsi_33',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Kejahatan pencurian data informasi kartu kredit korban melalui alat pembaca magnetik tersembunyi di mesin ATM atau mesin EDC toko dinamakan...',
    options: [
      'Skimming (Card Skimming)',
      'Defacing',
      'Spamming',
      'Brute Force'
    ],
    correctIndex: 0,
    explanation: 'Card Skimming memasang perangkat pemindai liar di mulut slot kartu ATM untuk menyalin data pita magnetik kartu nasabah.',
    topic: 'Kejahatan Finansial Siber (Skimming)'
  },
  {
    id: 'q_dsi_34',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Pemberitahuan "Cookie Consent" yang muncul saat membuka situs web modern bertujuan untuk...',
    options: [
      'Meminta persetujuan pengguna terkait penyimpanan rekam jejak preferensi penjelajahan dan analitik di browser sesuai aturan privasi global (GDPR/UU PDP).',
      'Mengunduh virus gratis ke dalam laptop.',
      'Mengirimkan paket kue fisik ke alamat rumah.',
      'Mematikan layar monitor secara berkala.'
    ],
    correctIndex: 0,
    explanation: 'Cookie Consent memastikan transparansi pengumpulan data preferensi penjelajahan pengguna untuk kepatuhan hukum privasi.',
    topic: 'Privasi Web & Kebijakan Cookie'
  },
  {
    id: 'q_dsi_35',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Manakah dari situasi berikut yang merupakan penerapan etika "Fair Use" (Penggunaan Wajar) terhadap materi berhak cipta dalam tugas sekolah?',
    options: [
      'Menyitir 1 paragraf kutipan dari jurnal ilmiah dengan mencantumkan nama penulis dan tahun terbit dalam naskah makalah analisis.',
      'Menjual ulang buku elektronik bajakan seharga 10.000 rupiah.',
      'Mengunggah film bioskop utuh ke channel YouTube pribadi.',
      'Mengklaim lagu musisi terkenal sebagai karya ciptaan sendiri.'
    ],
    correctIndex: 0,
    explanation: 'Doktrin Fair Use memperbolehkan penggunaan sebagian kecil karya untuk kepentingan pendidikan, kritik, dan penelitian dengan mencantumkan sumber sitasi resmi.',
    topic: 'Doktrin Penggunaan Wajar (Fair Use)'
  },
  {
    id: 'q_dsi_36',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Komunitas pengembang perangkat lunak Open Source di seluruh dunia sering berkolaborasi dan berbagi kode sumber program secara terbuka melalui platform repositori daring terkemuka, yaitu...',
    options: [
      'GitHub / GitLab',
      'Instagram',
      'TikTok',
      'Netflix'
    ],
    correctIndex: 0,
    explanation: 'GitHub dan GitLab adalah platform kontrol versi Git berbasis web terpopuler untuk kolaborasi repositori kode open-source.',
    topic: 'Repositori Kode Terbuka (GitHub)'
  },
  {
    id: 'q_dsi_37',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Tindakan meretas situs web tertentu dan mengganti tampilan halaman beranda (homepage) dengan gambar atau pesan bernuansa protes politik disebut...',
    options: [
      'Web Defacement (Deface)',
      'Phishing',
      'Cryptojacking',
      'Keylogging'
    ],
    correctIndex: 0,
    explanation: 'Web Defacement adalah vandalisme siber yang mengubah antarmuka visual situs korban.',
    topic: 'Vandalisme Siber (Web Defacement)'
  },
  {
    id: 'q_dsi_38',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Dalam era keterbukaan informasi digital, bahaya dari fenomena "Echo Chamber" (Ruang Gema) dan "Filter Bubble" di media sosial adalah...',
    options: [
      'Algoritma hanya menyajikan konten yang sejalan dengan pandangan pengguna sehingga mempersempit wawasan dan memicu polarisasi radikal di masyarakat.',
      'Membuat suara musik di headset terdengar bergema.',
      'Menyebabkan baterai gawai cepat panas.',
      'Menghapus akun media sosial secara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Filter Bubble mengisolasi pengguna dalam bias informasi homogen berdasarkan riwayat klik, memicu intoleransi dan polarisasi opini.',
    topic: 'Dampak Sosial Algoritma (Echo Chamber)'
  },
  {
    id: 'q_dsi_39',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Istilah untuk kode unik sementara 4-6 digit yang dikirimkan melalui SMS/WhatsApp untuk verifikasi login dan TIDAK BOLEH dibagikan kepada siapapun termasuk petugas adalah...',
    options: [
      'OTP (One-Time Password)',
      'IP Address',
      'MAC Address',
      'DNS Key'
    ],
    correctIndex: 0,
    explanation: 'Kode OTP (One-Time Password) adalah kunci otentikasi dinamis sekali pakai yang bersifat sangat rahasia.',
    topic: 'Keamanan Kode OTP'
  },
  {
    id: 'q_dsi_40',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Perbedaan mendasar antara perangkat lunak Proprietary (komersial tertutup) dan Open Source adalah...',
    options: [
      'Open Source membuka kode sumbernya untuk dipelajari dan dimodifikasi publik, sedangkan Proprietary membatasi akses kode sumber hanya bagi pemilik lisensi resmi.',
      'Open Source hanya untuk komputer desktop sedangkan Proprietary untuk HP.',
      'Open Source tidak memiliki fitur cetak.',
      'Proprietary selalu gratis selamanya.'
    ],
    correctIndex: 0,
    explanation: 'Open Source memberikan kebebasan transparansi kode sumber (Source Code), sedangkan Proprietary merahasiakan kode program demi hak monopoli komersial.',
    topic: 'Open Source vs Proprietary Software'
  },
  {
    id: 'q_dsi_41',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Sebagai warga digital yang cerdas dan bertanggung jawab (Good Digital Citizen), sikap yang tepat saat rekan kita menjadi korban perundungan siber (cyberbullying) di grup obrolan adalah...',
    options: [
      'Mendukung korban secara moral, tidak ikut memperparah perundungan, mengumpulkan bukti tangkapan layar (screenshot), dan melaporkannya kepada guru atau pihak berwenang.',
      'Ikut menertawakan korban bersama-sama agar dianggap kompak.',
      'Menyebarkan foto korban ke media sosial publik yang lebih luas.',
      'Mematikan internet seumur hidup.'
    ],
    correctIndex: 0,
    explanation: 'Kewargaan digital positif menuntut empati, intervensi etis (bystander intervention), dokumentasi bukti, dan pelaporan tindak kekerasan siber.',
    topic: 'Kewargaan Digital (Digital Citizenship)'
  },
  {
    id: 'q_dsi_42',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Layanan publik pemerintah berbasis teknologi informasi dan komunikasi untuk melayani perizinan, kependudukan, dan pembayaran pajak secara terpadu disebut...',
    options: [
      'E-Government (Pemerintahan Berbasis Elektronik / SPBE)',
      'E-Commerce',
      'E-Sport',
      'Online Gaming'
    ],
    correctIndex: 0,
    explanation: 'E-Government (SPBE) mengoptimalkan pelayanan publik pemerintah kepada warga secara transparan, efektif, dan berbasis daring.',
    topic: 'Layanan Publik Digital (E-Government)'
  },
  {
    id: 'q_dsi_43',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Ciri-ciri email phishing berbahaya yang patut diwaspadai di antaranya adalah...',
    options: [
      'Menggunakan alamat pengirim palsu/mencurigakan, tata bahasa mendesak bernada ancaman, dan meminta login melalui tautan link tidak resmi.',
      'Dikirim oleh guru resmi dari domain sekolah @sch.id.',
      'Tidak memuat lampiran sama sekali.',
      'Hanya berisi teks ucapan selamat pagi.'
    ],
    correctIndex: 0,
    explanation: 'Urgensi palsu, kejanggalan domain pengirim, dan tautan login palsu adalah indikator klasik penipuan phishing.',
    topic: 'Indikator Deteksi Phishing'
  },
  {
    id: 'q_dsi_44',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Kecerdasan Buatan Generatif (Generative AI) seperti chatbot teks atau generator gambar dilatih menggunakan miliaran data publik di internet. Isu etika hukum paling krusial yang saat ini menjadi perdebatan hangat adalah...',
    options: [
      'Potensi pelanggaran hak cipta para seniman/penulis asli yang karyanya digunakan sebagai data latih tanpa izin atau royalti kompensasi.',
      'Menyebabkan layar monitor komputer menjadi cepat buram.',
      'Membuat keyboard komputer kehilangan huruf vokal.',
      'Menaikkan harga pulsa telepon kabel.'
    ],
    correctIndex: 0,
    explanation: 'Isu hak cipta data latih AI, atribusi karya seni manusia, dan kompensasi royalti kreator adalah pilar diskursus etika AI global masa kini.',
    topic: 'Etika & Hak Cipta pada Generative AI'
  },
  {
    id: 'q_dsi_45',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Tindakan membajak akun media sosial orang lain dengan menebak kata sandi atau memanfaatkan celah keamanan dinamakan aksi...',
    options: [
      'Account Takeover / Pembajakan Akun',
      'Account Verification',
      'Backup Data',
      'Formatting'
    ],
    correctIndex: 0,
    explanation: 'Account Takeover adalah pengambilalihan akun secara ilegal oleh pihak yang tidak berhak.',
    topic: 'Ancaman Pembajakan Akun'
  },
  {
    id: 'q_dsi_46',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Pemanfaatan tanda tangan elektronik tersertifikasi (Digital Signature) pada dokumen hukum diakui sah secara hukum karena...',
    options: [
      'Menggunakan teknologi kriptografi asimetris yang menjamin keaslian identitas penandatangan dan keutuhan isi naskah yang tidak dapat dimanipulasi.',
      'Karena digambar menggunakan pulpen tinta emas.',
      'Hanya boleh ditandatangani di atas kertas foto.',
      'Dapat berubah warna jika terkena air.'
    ],
    correctIndex: 0,
    explanation: 'Tanda tangan digital tersertifikasi berbasis Public Key Infrastructure (PKI) memberikan jaminan non-repudiation (nir-sangkal) dan integritas dokumen menurut UU ITE.',
    topic: 'Keabsahan Tanda Tangan Digital'
  },
  {
    id: 'q_dsi_47',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Seorang konten kreator menggunakan lagu berhak cipta milik orang lain sebagai latar belakang video monetisasi YouTube tanpa izin pemilik lagu. Dampak legal yang paling mungkin terjadi pada akun kreator tersebut adalah...',
    options: [
      'Menerima klaim hak cipta (Copyright Strike), pemotongan monetisasi, atau penghapusan video oleh platform.',
      'Mendapatkan hadiah uang tunai dari YouTube.',
      'Kamera HP otomatis rusak.',
      'Video langsung ditonton 100 juta kali secara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Sistem Content ID YouTube secara otomatis mendeteksi kecocokan audio berhak cipta dan mengalihkan royalti ke pemilik asli atau memblokir video.',
    topic: 'Mekanisme Penegakan Hak Cipta YouTube'
  },
  {
    id: 'q_dsi_48',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'LotS',
    stem: 'Situs web resmi sekolah di Indonesia menggunakan domain tingkat kedua (Second-Level Domain) berakhiran...',
    options: [
      '.sch.id',
      '.ac.id',
      '.mil.id',
      '.co.id'
    ],
    correctIndex: 0,
    explanation: 'Domain .sch.id dialokasikan khusus untuk institusi pendidikan dasar dan menengah (School) di Indonesia.',
    topic: 'Domain Sekolah Indonesia (.sch.id)'
  },
  {
    id: 'q_dsi_49',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'MotS',
    stem: 'Perbedaan utama antara "Data Mining" dan "Pencurian Data" adalah...',
    options: [
      'Data Mining adalah proses legal penggalian pola informasi berharga dari sekumpulan data besar, sedangkan Pencurian Data adalah tindakan ilegal mengambil data tanpa hak.',
      'Data Mining selalu dilakukan dengan menambang batu bara.',
      'Pencurian Data selalu dilakukan oleh robot pabrik.',
      'Data Mining merusak kabel serat optik.'
    ],
    correctIndex: 0,
    explanation: 'Data Mining adalah disiplin ilmu sains data untuk analisis pola, sedangkan pencurian data (Data Theft/Exfiltration) adalah tindak kejahatan pidana siber.',
    topic: 'Konsep Data Mining vs Pelanggaran Data'
  },
  {
    id: 'q_dsi_50',
    element: 'DSI',
    materi: 'Dampak Sosial Informatika',
    level: 'HoTS',
    stem: 'Manakah dari langkah-langkah berikut yang paling efektif untuk menjaga keamanan dan privasi data pribadi di ruang siber?',
    options: [
      'Mengaktifkan autentikasi 2 faktor (2FA), menggunakan kata sandi unik dan kuat untuk setiap akun, rutin memperbarui sistem operasi/aplikasi, serta waspada terhadap tautan mencurigakan.',
      'Menuliskan password akun di secarik kertas lalu menempelkannya di monitor kelas.',
      'Menggunakan password yang sama untuk semua akun media sosial.',
      'Mematikan fitur update keamanan otomatis Windows.'
    ],
    correctIndex: 0,
    explanation: 'Kombinasi 2FA, password manager dengan variasi kredensial, patching software berkala, dan kesadaran ancaman siber (cyber awareness) membentuk benteng pertahanan digital komprehensif.',
    topic: 'Strategi Komprehensif Keamanan Siber Pribadi'
  }
];
