import { Question } from '../types';

export const QUESTIONS_SK: Question[] = [
  {
    id: 'q_sk_1',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Komponen CPU (Central Processing Unit) yang bertanggung jawab langsung untuk melakukan operasi perhitungan matematika (seperti penjumlahan dan perkalian) serta perbandingan logika logika adalah...',
    options: [
      'ALU (Arithmetic Logic Unit)',
      'Control Unit (CU)',
      'Register Memory',
      'Power Supply Unit (PSU)'
    ],
    correctIndex: 0,
    explanation: 'ALU (Arithmetic Logic Unit) adalah sirkuit digital terintegrasi di dalam prosesor yang mengeksekusi instruksi aritmatika biner dan operasi logika proposisi.',
    topic: 'Struktur Prosesor (ALU)'
  },
  {
    id: 'q_sk_2',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Sistem bilangan berbasis 16 yang menggunakan simbol digit 0 sampai 9 serta huruf A sampai F dalam representasi komputer dinamakan sistem bilangan...',
    options: [
      'Heksadesimal (Hexadecimal)',
      'Biner (Binary)',
      'Oktal (Octal)',
      'Desimal (Decimal)'
    ],
    correctIndex: 0,
    explanation: 'Sistem Heksadesimal menggunakan basis 16 (0-9 dan A-F di mana A=10, B=11, C=12, D=13, E=14, F=15).',
    topic: 'Sistem Bilangan Heksadesimal'
  },
  {
    id: 'q_sk_3',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah nilai desimal (basis 10) dari bilangan heksadesimal 2F (basis 16)?',
    options: [
      '47',
      '32',
      '45',
      '29'
    ],
    correctIndex: 0,
    explanation: 'Konversi 2F(16): Nilai 2 bernilai 2 * 16^1 = 32. Nilai F bernilai 15 * 16^0 = 15. Total = 32 + 15 = 47.',
    topic: 'Konversi Heksadesimal ke Desimal'
  },
  {
    id: 'q_sk_4',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Memori komputer yang bersifat "Volatile" (data di dalamnya akan hilang ketika aliran listrik terputus/komputer dimatikan) adalah...',
    options: [
      'RAM (Random Access Memory)',
      'ROM (Read Only Memory)',
      'SSD (Solid State Drive)',
      'Hard Disk Drive (HDD)'
    ],
    correctIndex: 0,
    explanation: 'RAM adalah memori kerja utama yang bersifat volatile (mudah menguap); isinya hilang seketika saat suplai daya listrik dimatikan.',
    topic: 'Karakteristik RAM & Volatile Memory'
  },
  {
    id: 'q_sk_5',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Perangkat keras penyimpan data internal permanen generasi baru yang menggunakan chip flash memory tanpa komponen mekanik piringan berputar dinamakan...',
    options: [
      'SSD (Solid State Drive)',
      'HDD (Hard Disk Drive)',
      'CD-ROM',
      'Floppy Disk'
    ],
    correctIndex: 0,
    explanation: 'SSD (Solid State Drive) menggunakan semikonduktor flash memory tanpa bagian bergerak mekanis, menjadikannya jauh lebih cepat, senyap, dan tahan guncangan.',
    topic: 'Penyimpanan Modern (SSD)'
  },
  {
    id: 'q_sk_6',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Siklus instruksi pemrosesan data oleh CPU pada arsitektur Von Neumann berlangsung secara berulang dengan urutan tahapan yang benar adalah...',
    options: [
      'Fetch (Ambil) -> Decode (Terjemahkan) -> Execute (Eksekusi) -> Store (Simpan)',
      'Execute -> Fetch -> Decode -> Store',
      'Store -> Decode -> Fetch -> Execute',
      'Decode -> Store -> Execute -> Fetch'
    ],
    correctIndex: 0,
    explanation: 'Siklus kerja CPU (Machine Cycle) dimulai dari Fetch instruksi dari memori, Decode arti instruksi oleh Control Unit, Execute oleh ALU, dan Store hasil ke register/RAM.',
    topic: 'Siklus Mesin CPU (Fetch-Decode-Execute)'
  },
  {
    id: 'q_sk_7',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Program firmware tingkat rendah yang tersimpan permanen di chip ROM pada motherboard dan bertugas pertama kali melakukan pengecekan perangkat keras (POST) saat komputer dihidupkan adalah...',
    options: [
      'BIOS / UEFI',
      'Sistem Operasi Windows',
      'Aplikasi Web Browser',
      'Driver Kartu Grafis'
    ],
    correctIndex: 0,
    explanation: 'BIOS (Basic Input/Output System) / UEFI adalah firmware dasar pada ROM motherboard yang melakukan Power-On Self Test (POST) dan memuat sistem operasi.',
    topic: 'Firmware BIOS & UEFI'
  },
  {
    id: 'q_sk_8',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Sistem bilangan biner hanya mengenal dua simbol digit, yaitu...',
    options: [
      '0 dan 1',
      '1 dan 2',
      '0 sampai 7',
      '0 sampai 9'
    ],
    correctIndex: 0,
    explanation: 'Sistem biner (basis 2) merepresentasikan status saklar logika elektronik yaitu 0 (Off/Low Voltage) dan 1 (On/High Voltage).',
    topic: 'Dasar Bilangan Biner'
  },
  {
    id: 'q_sk_9',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah hasil penjumlahan biner antara 1011 (basis 2) dengan 0101 (basis 2)?',
    options: [
      '10000 (basis 2)',
      '11110 (basis 2)',
      '10101 (basis 2)',
      '01100 (basis 2)'
    ],
    correctIndex: 0,
    explanation: '1011 (11 desimal) + 0101 (5 desimal) = 16 desimal. Nilai 16 dalam biner adalah 10000 (1*16 + 0*8 + 0*4 + 0*2 + 0*1).',
    topic: 'Aritmatika Biner (Penjumlahan)'
  },
  {
    id: 'q_sk_10',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Komponen penghubung fisik berbentuk jalur sirkuit pada motherboard yang mengalirkan data, alamat memori, dan sinyal kendali antar komponen internal komputer disebut...',
    options: [
      'Bus Sistem (Data Bus, Address Bus, Control Bus)',
      'Heatsink Fan',
      'Power Cable',
      'CMOS Battery'
    ],
    correctIndex: 0,
    explanation: 'Bus sistem adalah jalur transmisi paralel elektronik yang menghubungkan CPU, memori utama, dan antarmuka I/O.',
    topic: 'Struktur Bus Sistem Komputer'
  },
  {
    id: 'q_sk_11',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Perangkat keras komputer yang bertugas khusus mengolah data grafis dan menampilkannya ke layar monitor visual disebut...',
    options: [
      'GPU / VGA Card (Graphics Processing Unit)',
      'Sound Card',
      'Network Interface Card (NIC)',
      'Thermal Paste'
    ],
    correctIndex: 0,
    explanation: 'GPU (Graphics Processing Unit) atau kartu grafis memproses rendering citra, video, dan model 3D untuk diteruskan ke display monitor.',
    topic: 'Perangkat Keras Grafis (GPU)'
  },
  {
    id: 'q_sk_12',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Memori berkecepatan paling tinggi yang terletak langsung di dalam inti prosesor (CPU) dan digunakan untuk menampung data instruksi yang sedang aktif dieksekusi secara instan adalah...',
    options: [
      'Register CPU',
      'Harddisk Eksternal',
      'Flashdisk USB',
      'Optical Drive DVD'
    ],
    correctIndex: 0,
    explanation: 'Register adalah unit memori terkecil dengan kecepatan transfer tertinggi di dalam hierarki memori komputer yang berada langsung di core CPU.',
    topic: 'Hierarki Memori (Register CPU)'
  },
  {
    id: 'q_sk_13',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Ketika kapasitas RAM fisik komputer hampir habis karena membuka terlalu banyak aplikasi berat, sistem operasi akan meminjam sebagian ruang harddisk sebagai memori bantuan sementara. Konsep ini dikenal dengan istilah...',
    options: [
      'Virtual Memory (Memori Virtual / Paging File)',
      'Overclocking Hardware',
      'Direct Memory Access (DMA)',
      'Defragmentation Disk'
    ],
    correctIndex: 0,
    explanation: 'Virtual Memory menggunakan sebagian ruang penyimpanan sekunder (swap space/pagefile) untuk menampung data RAM yang sedang tidak aktif saat RAM penuh.',
    topic: 'Konsep Virtual Memory'
  },
  {
    id: 'q_sk_14',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Sistem bilangan oktal menggunakan basis...',
    options: [
      '8 (digit 0 sampai 7)',
      '10 (digit 0 sampai 9)',
      '2 (digit 0 dan 1)',
      '16 (digit 0 sampai F)'
    ],
    correctIndex: 0,
    explanation: 'Sistem Oktal adalah sistem bilangan posisi berbasis 8 yang menggunakan angka 0, 1, 2, 3, 4, 5, 6, dan 7.',
    topic: 'Sistem Bilangan Oktal'
  },
  {
    id: 'q_sk_15',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Berapakah hasil konversi bilangan biner 101010 (basis 2) ke dalam bilangan desimal (basis 10)?',
    options: [
      '42',
      '38',
      '45',
      '50'
    ],
    correctIndex: 0,
    explanation: '101010 = (1*32) + (0*16) + (1*8) + (0*4) + (1*2) + (0*1) = 32 + 8 + 2 = 42.',
    topic: 'Konversi Biner ke Desimal'
  },
  {
    id: 'q_sk_16',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Manakah kombinasi komponen perangkat keras input yang memanfaatkan teknologi optik dan laser dalam pengoperasiannya?',
    options: [
      'Barcode Scanner dan Optical Mouse',
      'Keyboard Mekanikal dan Speaker Pasif',
      'Microphone Dinamik dan Printer Dot Matrix',
      'Touchpad Kapasitif dan Plotter'
    ],
    correctIndex: 0,
    explanation: 'Barcode Scanner membaca kode garis menggunakan pantulan sinar laser/LED optik, dan Optical Mouse melacak pergerakan alas meja menggunakan sensor kamera optik mikro.',
    topic: 'Perangkat Keras Input Optik'
  },
  {
    id: 'q_sk_17',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Komponen penyedia dan pengatur tegangan daya listrik searah (DC) bagi seluruh komponen perangkat keras di dalam casing komputer desktop adalah...',
    options: [
      'PSU (Power Supply Unit)',
      'Sound Card',
      'RAM Module',
      'Heatsink'
    ],
    correctIndex: 0,
    explanation: 'Power Supply Unit (PSU) mengonversi arus listrik bolak-balik (AC) dari jala PLN menjadi arus searah (DC) tegangan rendah yang aman bagi sirkuit komputer.',
    topic: 'Catu Daya Komputer (PSU)'
  },
  {
    id: 'q_sk_18',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Perbedaan utama antara perangkat lunak Sistem Operasi (Operating System) dan Perangkat Lunak Aplikasi (Application Software) adalah...',
    options: [
      'Sistem Operasi mengelola sumber daya perangkat keras dan menyediakan landasan sistem, sedangkan Aplikasi membantu pengguna menyelesaikan tugas spesifik.',
      'Sistem Operasi hanya untuk mengetik naskah, sedangkan Aplikasi untuk menyalakan listrik komputer.',
      'Sistem Operasi tersimpan di mouse, sedangkan Aplikasi tersimpan di keyboard.',
      'Sistem Operasi dibuat gratis, sedangkan Aplikasi selalu berbayar.'
    ],
    correctIndex: 0,
    explanation: 'OS (seperti Linux, Windows) mengontrol manajemen memori, CPU, proses, dan perangkat keras, sedangkan aplikasi (seperti browser, editor grafis) berfokus pada pekerjaan pengguna.',
    topic: 'Perangkat Lunak Sistem vs Aplikasi'
  },
  {
    id: 'q_sk_19',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Sebuah file musik memiliki ukuran 8 Megabyte (MB). Jika kecepatan transfer kabel USB adalah 16 Megabit per detik (Mbps), berapa lama waktu teoretis yang dibutuhkan untuk menyalin berkas tersebut? (Ingat: 1 Byte = 8 Bit)',
    options: [
      '4 detik',
      '0,5 detik',
      '2 detik',
      '8 detik'
    ],
    correctIndex: 0,
    explanation: 'Ukuran file: 8 MB = 8 * 8 = 64 Megabit (Mb). Kecepatan: 16 Mbps. Waktu = 64 Mb / 16 Mbps = 4 detik.',
    topic: 'Perhitungan Satuan Data (Byte vs Bit)'
  },
  {
    id: 'q_sk_20',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Urutan hierarki satuan kapasitas penyimpanan data komputer dari yang terkecil hingga terbesar yang benar adalah...',
    options: [
      'Byte -> Kilobyte (KB) -> Megabyte (MB) -> Gigabyte (GB) -> Terabyte (TB)',
      'Byte -> Gigabyte -> Megabyte -> Kilobyte -> Terabyte',
      'Terabyte -> Gigabyte -> Megabyte -> Kilobyte -> Byte',
      'Bit -> Terabyte -> Megabyte -> Gigabyte -> Byte'
    ],
    correctIndex: 0,
    explanation: 'Kapasitas data berkembang kelipatan 1024 (2^10): Byte -> KB -> MB -> GB -> TB -> PB.',
    topic: 'Hierarki Satuan Data'
  },
  {
    id: 'q_sk_21',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Teknologi "Cache Memory" (L1, L2, L3) disisipkan di antara CPU dan RAM utama dengan tujuan untuk...',
    options: [
      'Mempercepat akses data instruksi yang sering digunakan CPU dengan memangkas waktu tunggu akses ke RAM.',
      'Menambah kapasitas total harddisk secara permanen.',
      'Mendinginkan suhu prosesor agar tidak panas.',
      'Membersihkan berkas sampah pada flashdisk.'
    ],
    correctIndex: 0,
    explanation: 'Cache memory (SRAM cepat) menyimpan duplikat data yang paling sering diakses prosesor guna mengurangi latency pembacaan dari DRAM.',
    topic: 'Peranan Cache Memory'
  },
  {
    id: 'q_sk_22',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah hasil konversi bilangan desimal 75 ke dalam sistem bilangan biner 8-bit?',
    options: [
      '01001011',
      '01100101',
      '00101101',
      '01010111'
    ],
    correctIndex: 0,
    explanation: '75 = 64 + 8 + 2 + 1 = (0*128) + (1*64) + (0*32) + (0*16) + (1*8) + (0*4) + (1*2) + (1*1) = 01001011.',
    topic: 'Konversi Desimal ke Biner 8-Bit'
  },
  {
    id: 'q_sk_23',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Papan sirkuit utama tempat bertancapnya prosesor, memori RAM, kartu ekspansi, dan kabel penyimpanan komputer dinamakan...',
    options: [
      'Motherboard (Mainboard)',
      'Harddisk Drive',
      'Keyboard Interface',
      'Sound Card'
    ],
    correctIndex: 0,
    explanation: 'Motherboard adalah papan sirkuit cetak utama (PCB) yang menjadi fondasi tempat bertemunya seluruh komponen komputer.',
    topic: 'Motherboard Komputer'
  },
  {
    id: 'q_sk_24',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Proses "Booting" pada komputer mengacu pada peristiwa...',
    options: [
      'Proses awal memuat sistem operasi dari media penyimpanan sekunder ke memori RAM saat komputer dinyalakan.',
      'Proses mencetak naskah dokumen ke printer.',
      'Proses membersihkan debu fisik pada kipas casing.',
      'Proses menginstal game online baru.'
    ],
    correctIndex: 0,
    explanation: 'Booting (bootstrap) adalah inisialisasi awal sistem di mana BIOS/UEFI memuat kernel sistem operasi dari drive ke memori utama.',
    topic: 'Proses Booting Komputer'
  },
  {
    id: 'q_sk_25',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Mengapa perangkat komputer yang menggunakan Solid State Drive (SSD) sebagai drive sistem dapat melakukan booting dan membuka aplikasi jauh lebih cepat dibandingkan Hard Disk Drive (HDD)?',
    options: [
      'SSD tidak memiliki piringan berputar mekanik dan head jarum pembaca fisik sehingga waktu latensi pencarian data (seek time) mendekati nol.',
      'SSD menggunakan tenaga pendingin es kering khusus.',
      'SSD otomatis menghapus sistem operasi setiap kali komputer mati.',
      'SSD hanya dapat membaca teks tanpa gambar.'
    ],
    correctIndex: 0,
    explanation: 'HDD memerlukan waktu perputaran piringan (RPM) dan gerak mekanis jarum head untuk mencari sektor file, sedangkan SSD mengakses memori flash elektrik secara langsung dengan seek time instan.',
    topic: 'Analisis Kinerja Arsitektur SSD vs HDD'
  },
  {
    id: 'q_sk_26',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Port antarmuka standar universal kecepatan tinggi yang kini paling umum digunakan untuk menyambungkan flashdisk, mouse, keyboard, dan smartphone ke komputer adalah...',
    options: [
      'USB (Universal Serial Bus)',
      'VGA Port',
      'Serial COM Port',
      'PS/2 Port'
    ],
    correctIndex: 0,
    explanation: 'USB (Universal Serial Bus, termasuk Type-A dan Type-C) adalah standar koneksi periferal paling serbaguna dan mendunia.',
    topic: 'Antarmuka Port USB'
  },
  {
    id: 'q_sk_27',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Sinyal perangkat keras yang dikirim oleh periferal (seperti keyboard ketika tombol ditekan) kepada CPU untuk meminta perhatian dan penanganan pemrosesan mendesak disebut...',
    options: [
      'Interrupt (Sinyal Interupsi)',
      'Deadlock',
      'Paging',
      'Bandwidth'
    ],
    correctIndex: 0,
    explanation: 'Hardware Interrupt adalah sinyal elektronik yang menghentikan sementara alur eksekusi CPU saat ini untuk menjalankan Interrupt Service Routine (ISR) perangkat.',
    topic: 'Mekanisme Interrupt Komputer'
  },
  {
    id: 'q_sk_28',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah hasil heksadesimal dari bilangan biner: 1101 1010 (basis 2)?',
    options: [
      'DA (basis 16)',
      'CB (basis 16)',
      'F2 (basis 16)',
      'E8 (basis 16)'
    ],
    correctIndex: 0,
    explanation: 'Bagi menjadi 2 nibble (4 bit): 1101 = 8+4+0+1 = 13 (simbol D). 1010 = 8+0+2+0 = 10 (simbol A). Maka nilai heksadesimalnya adalah DA.',
    topic: 'Konversi Biner ke Heksadesimal'
  },
  {
    id: 'q_sk_29',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Baterai kecil berbentuk koin (CR2032) yang terpasang pada motherboard komputer berfungsi untuk...',
    options: [
      'Menjaga daya memori CMOS agar pengaturan jam/kalender sistem dan konfigurasi BIOS tidak tereset saat komputer mati.',
      'Menyuplai listrik utama ke monitor saat mati lampu.',
      'Mengisi ulang baterai smartphone.',
      'Memutar kipas pendingin prosesor.'
    ],
    correctIndex: 0,
    explanation: 'Baterai CMOS mempertahankan daya sirkuit Real-Time Clock (RTC) dan memori konfigurasi BIOS ketika komputer terlepas dari stopkontak listrik.',
    topic: 'Baterai CMOS Motherboard'
  },
  {
    id: 'q_sk_30',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Perangkat lunak khusus yang bertindak sebagai penerjemah komunikasi antara sistem operasi dengan perangkat keras tertentu (misalnya printer merk tertentu) disebut...',
    options: [
      'Device Driver (Driver Perangkat)',
      'Antivirus Utility',
      'Compiler',
      'Web Browser'
    ],
    correctIndex: 0,
    explanation: 'Driver adalah program yang memberi tahu sistem operasi cara berkomunikasi dan mengontrol perangkat keras spesifik secara tepat.',
    topic: 'Peranan Device Driver'
  },
  {
    id: 'q_sk_31',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Manakah dari pernyataan berikut yang menjelaskan perbedaan mendasar antara CPU 32-bit dan CPU 64-bit?',
    options: [
      'CPU 64-bit dapat mengalamatkan kapasitas RAM fisik lebih dari 4 GB dan memproses data integer ganda dalam satu siklus clock.',
      'CPU 32-bit lebih cepat 2 kali lipat dari CPU 64-bit.',
      'CPU 64-bit hanya dapat digunakan untuk mengetik teks polos.',
      'CPU 32-bit tidak membutuhkan daya listrik.'
    ],
    correctIndex: 0,
    explanation: 'Arsitektur 32-bit dibatasi oleh alamat 2^32 bit (~4 GB RAM), sedangkan 64-bit (2^64) mampu mengalamatkan memori hingga jutaan Terabyte secara efisien.',
    topic: 'Arsitektur Prosesor 32-bit vs 64-bit'
  },
  {
    id: 'q_sk_32',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Komponen pendingin prosesor yang terdiri dari blok logam berbilah penghantar panas (heatsink) dan kipas peniup udara disebut...',
    options: [
      'CPU Cooler / Heatsink Fan (HSF)',
      'CD-ROM Drive',
      'Power Cable',
      'Sound Card'
    ],
    correctIndex: 0,
    explanation: 'Heatsink Fan (HSF) menyerap panas dari die prosesor melalui plat tembaga/aluminium dan membuangnya dengan tiupan kipas angin.',
    topic: 'Sistem Pendingin Komputer'
  },
  {
    id: 'q_sk_33',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Fungsi dari Control Unit (CU) di dalam prosesor CPU adalah...',
    options: [
      'Mengatur dan mengoordinasikan seluruh alur lalu lintas data dan instruksi antar komponen di dalam sistem komputer.',
      'Melakukan perkalian bilangan pecahan desimal.',
      'Menyimpan file foto dan video selamanya.',
      'Mengeluarkan suara peringatan saat sistem panas.'
    ],
    correctIndex: 0,
    explanation: 'Control Unit bertindak sebagai "otak pengatur lalu lintas" yang mengontrol sinyal kendali ke register, ALU, dan bus sistem.',
    topic: 'Fungsi Control Unit (CU)'
  },
  {
    id: 'q_sk_34',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Jika sebuah monitor memiliki resolusi layar Full HD (1920 x 1080 piksel) dengan kedalaman warna True Color 24-bit per piksel (3 byte per piksel), berapakah ukuran memori frame buffer minimum di VRAM untuk menampung satu gambar layar penuh?',
    options: [
      'Sekitar 6,22 Megabyte (MB)',
      'Sekitar 100 Kilobyte (KB)',
      'Sekitar 2 Gigabyte (GB)',
      'Sekitar 500 Byte'
    ],
    correctIndex: 0,
    explanation: 'Jumlah piksel = 1920 * 1080 = 2.073.600 piksel. Memori = 2.073.600 * 3 Byte = 6.220.800 Byte ~ 6,22 MB.',
    topic: 'Kalkulasi Memori Video (VRAM)'
  },
  {
    id: 'q_sk_35',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Kode standar internasional pengkodean karakter alfanumerik pada komputer yang menggunakan representasi angka 7-bit atau 8-bit adalah...',
    options: [
      'ASCII (American Standard Code for Information Interchange)',
      'RGB Color Code',
      'IP Address',
      'ISBN Number'
    ],
    correctIndex: 0,
    explanation: 'ASCII memetakan karakter huruf, angka, dan simbol kendali ke dalam bilangan biner/desimal (misal huruf A = 65 desimal).',
    topic: 'Standar Karakter ASCII'
  },
  {
    id: 'q_sk_36',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Perbedaan mendasar antara port HDMI dan port VGA pada kartu grafis adalah...',
    options: [
      'HDMI mentransmisikan sinyal video digital berkualitas tinggi sekaligus sinyal audio suara, sedangkan VGA hanya sinyal video analog tanpa audio.',
      'VGA mentransmisikan sinyal 4K sedangkan HDMI hanya teks hitam putih.',
      'HDMI hanya untuk kabel printer, sedangkan VGA untuk smartphone.',
      'VGA tidak memerlukan kabel fisik.'
    ],
    correctIndex: 0,
    explanation: 'HDMI adalah antarmuka digital gabungan audio dan video jernih, sementara VGA adalah standar analog lawas yang hanya membawa sinyal gambar.',
    topic: 'Antarmuka Tampilan: HDMI vs VGA'
  },
  {
    id: 'q_sk_37',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Seorang teknisi komputer menemukan gejala: saat komputer dinyalakan, lampu indikator power menyala dan kipas berputar, namun tidak ada tampilan sama sekali di monitor dan terdengar bunyi bip panjang berulang-ulang dari speaker motherboard. Kemungkinan besar masalah terjadi pada...',
    options: [
      'Modul memori RAM yang kotor, kendor, atau rusak',
      'Kertas printer macet di dalam baki',
      'Mouse komputer kehabisan baterai',
      'Flashdisk lupa dicabut dari port USB'
    ],
    correctIndex: 0,
    explanation: 'Kode Beep panjang berulang pada saat POST mengindikasikan kegagalan deteksi modul memori RAM utama.',
    topic: 'Troubleshooting POST & Beep Code'
  },
  {
    id: 'q_sk_38',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Perangkat keras keluaran (output device) yang menghasilkan salinan dokumen fisik di atas media kertas adalah...',
    options: [
      'Printer',
      'Scanner',
      'Webcam',
      'Microphone'
    ],
    correctIndex: 0,
    explanation: 'Printer mencetak dokumen digital menjadi lembaran fisik (hardcopy).',
    topic: 'Perangkat Keras Output (Printer)'
  },
  {
    id: 'q_sk_39',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Kapasitas sebuah keping RAM dinyatakan sebesar 16 GB. Huruf "GB" merupakan singkatan dari...',
    options: [
      'Gigabyte',
      'Gigabit',
      'General Byte',
      'Graphic Board'
    ],
    correctIndex: 0,
    explanation: 'GB adalah singkatan dari Gigabyte (1 GB = 1.024 MB = 1.073.741.824 Byte).',
    topic: 'Singkatan Satuan Memori'
  },
  {
    id: 'q_sk_40',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah hasil operasi gerbang logika: (1 XOR 0) AND (NOT (1 AND 1))?',
    options: [
      '0 (FALSE)',
      '1 (TRUE)',
      '2',
      'Error'
    ],
    correctIndex: 0,
    explanation: '(1 XOR 0) = 1. (1 AND 1) = 1, sehingga NOT(1) = 0. Evaluasi akhir: 1 AND 0 = 0.',
    topic: 'Kombinasi Gerbang Logika Digital'
  },
  {
    id: 'q_sk_41',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Jenis sistem operasi bersumber terbuka (Open Source) yang kernel intinya diciptakan oleh Linus Torvalds dan memiliki banyak varian distro seperti Ubuntu, Debian, dan Fedora adalah...',
    options: [
      'Linux',
      'Microsoft Windows',
      'Apple macOS',
      'MS-DOS'
    ],
    correctIndex: 0,
    explanation: 'Linux adalah sistem operasi open source paling populer yang bebas dikembangkan dan didistribusikan.',
    topic: 'Sistem Operasi Open Source Linux'
  },
  {
    id: 'q_sk_42',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Teknologi Multicore pada prosesor modern (seperti Quad-Core atau Octa-Core) berarti...',
    options: [
      'Menyatukan beberapa unit inti pemrosesan independen di dalam satu keping silikon prosesor fisik yang sama.',
      'Memasang 8 monitor sekaligus pada satu laptop.',
      'Menggandakan kecepatan listrik rumah tangga.',
      'Membuat komputer tahan air.'
    ],
    correctIndex: 0,
    explanation: 'Multicore menggabungkan dua atau lebih core CPU independen untuk menjalankan beberapa tugas program secara paralel (multitasking).',
    topic: 'Arsitektur Prosesor Multicore'
  },
  {
    id: 'q_sk_43',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Berapakah nilai desimal dari bilangan oktal 57 (basis 8)?',
    options: [
      '47',
      '57',
      '40',
      '52'
    ],
    correctIndex: 0,
    explanation: '57 (oktal) = (5 * 8^1) + (7 * 8^0) = 40 + 7 = 47 desimal.',
    topic: 'Konversi Oktal ke Desimal'
  },
  {
    id: 'q_sk_44',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Komponen perangkat keras yang bertindak sebagai "memori non-volatile" tempat menyimpan instruksi BIOS pabrikan adalah...',
    options: [
      'ROM (Read Only Memory)',
      'RAM',
      'Register ALU',
      'L1 Cache'
    ],
    correctIndex: 0,
    explanation: 'ROM (Read Only Memory) menyimpan data secara permanen yang tidak hilang saat listrik padam (non-volatile).',
    topic: 'Karakteristik ROM'
  },
  {
    id: 'q_sk_45',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Kecepatan clock frekuensi kerja prosesor (CPU) umumnya diukur dalam satuan...',
    options: [
      'Gigahertz (GHz)',
      'Megabyte (MB)',
      'Ampere (A)',
      'Pixel (Px)'
    ],
    correctIndex: 0,
    explanation: 'Clock speed prosesor diukur dalam Hertz (GHz = milyaran siklus clock per detik).',
    topic: 'Satuan Kecepatan CPU (GHz)'
  },
  {
    id: 'q_sk_46',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Mengapa komputer memerlukan pasta termal (Thermal Paste) yang dioleskan di antara permukaan prosesor dan dasar heatsink logam pendingin?',
    options: [
      'Mengisi celah-celah mikroskopis udara agar perpindahan konduksi panas dari prosesor ke heatsink berlangsung maksimal.',
      'Merekatkan prosesor agar tidak bisa dicopot selamanya.',
      'Melindungi prosesor dari serangan virus internet.',
      'Memberi wangi harum saat komputer bekerja keras.'
    ],
    correctIndex: 0,
    explanation: 'Thermal paste mengeliminasi kantung udara mikroskopis yang bersifat isolator panas, memastikan konduksi termal optimal ke pendingin.',
    topic: 'Termodinamika & Thermal Management Komputer'
  },
  {
    id: 'q_sk_47',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Perangkat keras masukan yang mengubah dokumen kertas atau foto menjadi gambar digital di komputer dinamakan...',
    options: [
      'Scanner (Pemindai)',
      'Plotter',
      'Monitor',
      'Speaker'
    ],
    correctIndex: 0,
    explanation: 'Scanner menangkap citra dokumen fisik menggunakan sensor optik CCD/CIS menjadi data piksel digital.',
    topic: 'Perangkat Keras Scanner'
  },
  {
    id: 'q_sk_48',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'MotS',
    stem: 'Fitur "Safe Mode" pada sistem operasi Windows digunakan ketika...',
    options: [
      'Menjalankan Windows hanya dengan driver dan layanan dasar minimum untuk mempermudah isolasi dan perbaikan masalah sistem/virus.',
      'Mengunci folder dokumen dengan sidik jari.',
      'Bermain game dengan grafis maksimal.',
      'Menghemat kuota internet seluler.'
    ],
    correctIndex: 0,
    explanation: 'Safe Mode adalah mode diagnostik troubleshooting yang mematikan driver pihak ketiga agar sistem dapat dipulihkan dari crash.',
    topic: 'Fitur Pemulihan Safe Mode'
  },
  {
    id: 'q_sk_49',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'LotS',
    stem: 'Satu Byte data komputer terdiri dari sekumpulan...',
    options: [
      '8 bit',
      '4 bit',
      '16 bit',
      '2 bit'
    ],
    correctIndex: 0,
    explanation: 'Standar arsitektur komputasi menetapkan bahwa 1 Byte setara dengan 8 Bit data biner.',
    topic: 'Konversi Satuan 1 Byte = 8 Bit'
  },
  {
    id: 'q_sk_50',
    element: 'SK',
    materi: 'Sistem Komputer',
    level: 'HoTS',
    stem: 'Pada skenario perakitan komputer untuk laboratorium desain grafis dan simulasi 3D, komponen perangkat keras manakah yang paling prioritas dialokasikan spesifikasi tinggi agar rendering berjalan lancar?',
    options: [
      'Kartu Grafis Mandiri (Dedicated GPU), Kapasitas RAM Besar (Minimal 16-32 GB), dan Prosesor Multi-Core Kecepatan Tinggi.',
      'Optical DVD Drive eksternal dan Floppy disk drive.',
      'Casing komputer dengan stiker terbanyak.',
      'Kabel LAN terpanjang di pasaran.'
    ],
    correctIndex: 0,
    explanation: 'Render grafis dan pemodelan 3D sangat membebani unit kalkulasi paralel GPU VRAM, kapasitas RAM frame buffer, dan throughput core CPU.',
    topic: 'Optimasi Spesifikasi Perangkat Keras'
  }
];
