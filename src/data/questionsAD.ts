import { Question } from '../types';

export const QUESTIONS_AD: Question[] = [
  {
    id: 'q_ad_1',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Pada aplikasi lembar kerja (Spreadsheet), fungsi yang digunakan untuk mencari data pada kolom pertama sebuah tabel referensi secara vertikal dan mengambil nilai dari kolom tertentu yang sebaris adalah...',
    options: [
      'VLOOKUP',
      'HLOOKUP',
      'COUNTIF',
      'CONCATENATE'
    ],
    correctIndex: 0,
    explanation: 'VLOOKUP (Vertical Lookup) mencari nilai kunci di kolom paling kiri tabel dan mengembalikan nilai dari nomor indeks kolom yang ditentukan pada baris yang sama.',
    topic: 'Fungsi Pencarian Vertikal (VLOOKUP)'
  },
  {
    id: 'q_ad_2',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Di sel E2 terdapat formula spreadsheet: =IF(D2>=85; "A"; IF(D2>=70; "B"; "C")). Jika nilai sel D2 adalah 70, maka hasil teks keluaran yang ditampilkan pada sel E2 adalah...',
    options: [
      'B',
      'A',
      'C',
      'ERROR'
    ],
    correctIndex: 0,
    explanation: 'Evaluasi IF bersarang: D2 (70) >= 85 bernilai FALSE. Lanjut ke kondisi kedua: D2 (70) >= 70 bernilai TRUE, sehingga menghasilkan teks "B".',
    topic: 'Fungsi Logika IF Bertingkat (Nested IF)'
  },
  {
    id: 'q_ad_3',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi statistika dasar pada spreadsheet yang digunakan untuk menghitung nilai rata-rata aritmatika dari rentang sel angka (misalnya A1:A10) adalah...',
    options: [
      'AVERAGE',
      'SUM',
      'MAX',
      'COUNT'
    ],
    correctIndex: 0,
    explanation: 'AVERAGE menjumlahkan seluruh angka dalam rentang sel lalu membaginya dengan banyaknya sel terisi angka.',
    topic: 'Fungsi Statistika Dasar (AVERAGE)'
  },
  {
    id: 'q_ad_4',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fitur pada aplikasi spreadsheet yang digunakan untuk merangkum, mengelompokkan, menganalisis, dan mengeksplorasi ribuan baris data transaksi besar secara cepat dan dinamis adalah...',
    options: [
      'Pivot Table',
      'WordArt',
      'Track Changes',
      'AutoCorrect'
    ],
    correctIndex: 0,
    explanation: 'Pivot Table adalah alat analisis data interaktif terpenting untuk mengagregasi data mentah dalam format tabel silang multi-dimensi.',
    topic: 'Pivot Table Spreadsheet'
  },
  {
    id: 'q_ad_5',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Jika rumus di sel C1 adalah =$A$1+B1 (di mana $A$1 adalah referensi absolut), bagaimanakah perubahan rumus tersebut jika disalin (copy-paste) ke sel C2?',
    options: [
      '=$A$1+B2',
      '=$A$2+B2',
      '=$B$1+C2',
      '=$A$1+B1'
    ],
    correctIndex: 0,
    explanation: 'Tanda dollar ($) mengunci referensi sel. Kolom A dan Baris 1 terkunci permanen ($A$1), sedangkan B1 bersifat relatif sehingga bergeser satu baris ke bawah menjadi B2.',
    topic: 'Referensi Sel Absolut vs Relatif'
  },
  {
    id: 'q_ad_6',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Jenis visualisasi diagram yang paling tepat digunakan untuk menunjukkan perbandingan proporsi atau persentase bagian terhadap keseluruhan (total 100%) adalah...',
    options: [
      'Pie Chart (Diagram Lingkaran)',
      'Line Chart (Diagram Garis)',
      'Scatter Plot (Diagram Sebar)',
      'Radar Chart'
    ],
    correctIndex: 0,
    explanation: 'Diagram Lingkaran (Pie Chart) membagi sebuah lingkaran menjadi juring-juring yang mewakili proporsi persentase dari total data keseluruhan.',
    topic: 'Visualisasi Data (Pie Chart)'
  },
  {
    id: 'q_ad_7',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi spreadsheet yang digunakan untuk menghitung banyaknya sel yang memenuhi satu kriteria tertentu (misalnya menghitung jumlah siswa yang berjenis kelamin "Laki-laki") adalah...',
    options: [
      'COUNTIF',
      'SUMIF',
      'COUNTBLANK',
      'COUNTA'
    ],
    correctIndex: 0,
    explanation: 'COUNTIF menghitung frekuensi sel dalam rentang yang memenuhi kondisi kriteria yang dispesifikasikan.',
    topic: 'Fungsi Kondisional COUNTIF'
  },
  {
    id: 'q_ad_8',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Proses "Pembersihan Data" (Data Cleansing / Data Preprocessing) sebelum dilakukan analisis statistik mencakup tindakan...',
    options: [
      'Menghapus data duplikat, memperbaiki format penulisan yang tidak konsisten, dan menangani nilai data yang hilang (missing values).',
      'Mengubah semua font tabel menjadi warna merah muda.',
      'Menghapus seluruh file data agar harddisk menjadi kosong.',
      'Mengunci file dengan password rahasia.'
    ],
    correctIndex: 0,
    explanation: 'Data cleansing memastikan integritas dan kualitas data dengan mengeliminasi duplikasi, anomali, kesalahan pengetikan, dan penanganan missing data.',
    topic: 'Pembersihan Data (Data Cleansing)'
  },
  {
    id: 'q_ad_9',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Format berkas pertukaran data tabular teks polos yang memisahkan antarkolom menggunakan tanda koma atau titik koma adalah...',
    options: [
      'CSV (Comma-Separated Values)',
      'EXE (Executable File)',
      'MP3 (Audio File)',
      'PNG (Image File)'
    ],
    correctIndex: 0,
    explanation: 'CSV adalah format file standar universal teks terstruktur yang memisahkan nilai-nilai kolom dengan tanda koma (comma delimiter).',
    topic: 'Format Data CSV'
  },
  {
    id: 'q_ad_10',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi spreadsheet yang digunakan untuk menjumlahkan nilai angka pada rentang tertentu hanya jika memenuhi kriteria tertentu adalah...',
    options: [
      'SUMIF',
      'COUNTIF',
      'AVERAGEIF',
      'MAXIFS'
    ],
    correctIndex: 0,
    explanation: 'SUMIF menjumlahkan nilai sel numerik yang bersesuaian dengan kriteria pencocokan pada kolom target.',
    topic: 'Fungsi Kondisional SUMIF'
  },
  {
    id: 'q_ad_11',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Seorang analis ingin melihat tren perubahan suhu rata-rata kota setiap bulan selama 5 tahun terakhir. Jenis diagram visualisasi data yang paling efektif digunakan adalah...',
    options: [
      'Line Chart (Diagram Garis Tren)',
      'Pie Chart (Diagram Lingkaran)',
      'Doughnut Chart',
      'Treemap'
    ],
    correctIndex: 0,
    explanation: 'Diagram Garis (Line Chart) dirancang optimal untuk memvisualisasikan data runtun waktu (time-series) guna menunjukkan tren naik/turun secara berkelanjutan.',
    topic: 'Visualisasi Data Runtun Waktu (Line Chart)'
  },
  {
    id: 'q_ad_12',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi statistika untuk mencari nilai angka tertinggi (terbesar) dalam suatu sekumpulan data sel adalah...',
    options: [
      'MAX',
      'MIN',
      'SUM',
      'MEDIAN'
    ],
    correctIndex: 0,
    explanation: 'Fungsi MAX mengembalikan nilai numerik maksimum dalam rentang sel data.',
    topic: 'Fungsi Nilai Ekstrem (MAX)'
  },
  {
    id: 'q_ad_13',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi statistika untuk mencari nilai angka terendah (terkecil) dalam rentang data adalah...',
    options: [
      'MIN',
      'MAX',
      'SMALL',
      'LARGE'
    ],
    correctIndex: 0,
    explanation: 'Fungsi MIN mengembalikan nilai numerik minimum dalam rentang sel.',
    topic: 'Fungsi Nilai Ekstrem (MIN)'
  },
  {
    id: 'q_ad_14',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Di sebuah tabel nilai: Nilai Matematika ada di kolom B dan Nilai IPA ada di kolom C. Jika syarat kelulusan adalah "Nilai Matematika minimal 75 DAN Nilai IPA minimal 70", formula logika yang tepat di sel D2 adalah...',
    options: [
      '=IF(AND(B2>=75; C2>=70); "Lulus"; "Tidak Lulus")',
      '=IF(OR(B2>=75; C2>=70); "Lulus"; "Tidak Lulus")',
      '=IF(NOT(B2>=75); "Lulus"; "Tidak Lulus")',
      '=AND(IF(B2>=75); IF(C2>=70))'
    ],
    correctIndex: 0,
    explanation: 'Fungsi AND mewajibkan kedua premis logika terpenuhi bersamaan (B2>=75 dan C2>=70) agar fungsi IF menghasilkan nilai "Lulus".',
    topic: 'Fungsi Logika Majemuk IF-AND'
  },
  {
    id: 'q_ad_15',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Simbol awalan wajib yang harus diketikkan pertama kali di dalam sel spreadsheet sebelum menuliskan rumus atau fungsi formula adalah...',
    options: [
      '= (Sama Dengan)',
      '+ (Tambah)',
      '# (Pagar)',
      '@ (At)'
    ],
    correctIndex: 0,
    explanation: 'Semua rumus perhitungan di Excel atau Google Sheets wajib diawali tanda sama dengan (=).',
    topic: 'Sintaks Dasar Rumus Spreadsheet'
  },
  {
    id: 'q_ad_16',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fitur "Conditional Formatting" (Pemformatan Bersyarat) pada spreadsheet berguna untuk...',
    options: [
      'Mengubah warna sel atau warna teks secara otomatis sesuai aturan kriteria nilai tertentu (misal sel merah jika nilai di bawah KKM).',
      'Menghapus baris data yang kosong.',
      'Memutar posisi kolom menjadi baris.',
      'Menerjemahkan teks bahasa asing.'
    ],
    correctIndex: 0,
    explanation: 'Conditional Formatting menyorot sel dengan aturan warna visual dinamis berdasarkan nilai isinya untuk mempercepat identifikasi anomali data.',
    topic: 'Conditional Formatting'
  },
  {
    id: 'q_ad_17',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Kombinasi fungsi INDEX dan MATCH pada aplikasi lembar kerja sering digunakan oleh para analis data profesional sebagai alternatif superior dari VLOOKUP karena...',
    options: [
      'Dapat mencari data nilai ke arah kiri (kolom sebelum kunci pencarian) dan tidak terikat nomor urut kolom tetap.',
      'Menghitung perkalian matriks tanpa rumus.',
      'Dapat bekerja saat komputer dimatikan.',
      'Otomatis membuat gambar grafik 3D.'
    ],
    correctIndex: 0,
    explanation: 'VLOOKUP kaku ke arah kanan, sedangkan INDEX-MATCH fleksibel membaca kolom pencarian di posisi manapun (kiri/kanan) dan lebih tahan terhadap penyisipan kolom baru.',
    topic: 'Teknik Pencarian INDEX-MATCH'
  },
  {
    id: 'q_ad_18',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Nilai tengah dari sekumpulan data angka yang telah diurutkan dari terkecil ke terbesar dinamakan...',
    options: [
      'Median',
      'Modus (Mode)',
      'Mean (Rata-rata)',
      'Varian'
    ],
    correctIndex: 0,
    explanation: 'Median adalah ukuran pemusatan data yang membagi 50% data di bawah dan 50% data di atas setelah data diurutkan.',
    topic: 'Ukuran Pemusatan Data (Median)'
  },
  {
    id: 'q_ad_19',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Nilai data yang paling sering muncul (memiliki frekuensi kemunculan tertinggi) dalam sekumpulan data disebut...',
    options: [
      'Modus (Mode)',
      'Median',
      'Mean',
      'Standar Deviasi'
    ],
    correctIndex: 0,
    explanation: 'Modus (MODE) adalah nilai dengan frekuensi kemunculan terbanyak di dalam distribusi data.',
    topic: 'Ukuran Pemusatan Data (Modus)'
  },
  {
    id: 'q_ad_20',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Diberikan sekumpulan data nilai siswa: [60, 70, 70, 80, 90, 100]. Berapakah nilai Mean (rata-rata) dan Median dari data tersebut?',
    options: [
      'Mean = 78,33 dan Median = 75',
      'Mean = 70 dan Median = 80',
      'Mean = 80 dan Median = 70',
      'Mean = 75 dan Median = 78,33'
    ],
    correctIndex: 0,
    explanation: 'Total = 60+70+70+80+90+100 = 470 / 6 = 78,33. Data terurut: 6 data (genap), posisi tengah sel ke-3 (70) dan ke-4 (80), Median = (70+80)/2 = 75.',
    topic: 'Kalkulasi Statistik Deskriptif'
  },
  {
    id: 'q_ad_21',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi teks pada spreadsheet yang digunakan untuk menggabungkan teks dari beberapa sel menjadi satu kesatuan string teks adalah...',
    options: [
      'CONCATENATE (atau CONCAT)',
      'SPLIT',
      'UPPER',
      'LEN'
    ],
    correctIndex: 0,
    explanation: 'Fungsi CONCATENATE atau operator ampersand (&) menyatukan teks dari dua sel atau lebih.',
    topic: 'Manipulasi Teks (CONCATENATE)'
  },
  {
    id: 'q_ad_22',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi teks LEN pada spreadsheet (misalnya =LEN("Informatika")) menghasilkan nilai...',
    options: [
      '11 (jumlah karakter huruf)',
      'INFORMATIKA (huruf kapital)',
      'infor (potongan kata)',
      'TRUE'
    ],
    correctIndex: 0,
    explanation: 'Fungsi LEN (Length) menghitung total banyaknya karakter (huruf, angka, spasi) dalam sebuah teks. Kata "Informatika" terdiri dari 11 huruf.',
    topic: 'Fungsi Panjang Karakter (LEN)'
  },
  {
    id: 'q_ad_23',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Sebuah kolom tanggal lahir memuat format campuran: sebagian "2010-05-12" dan sebagian "12/05/2010". Mengapa standarisasi format tanggal sangat penting sebelum melakukan pengurutan kronologis (Sort Ascending)?',
    options: [
      'Karena format tanggal yang tidak konsisten akan dianggap sebagai teks biasa oleh spreadsheet sehingga pengurutan berdasarkan waktu menjadi kacau dan salah.',
      'Karena tanggal campuran dapat merusak layar komputer.',
      'Karena tanggal yang salah otomatis memotong nilai siswa.',
      'Karena spreadsheet hanya menerima tahun kabisat.'
    ],
    correctIndex: 0,
    explanation: 'Perbedaan format teks menyebabkan mesin spreadsheet gagal mengenali tipe serial tanggal (date value), merusak akurasi pemfilteran dan pengurutan kronologis.',
    topic: 'Validasi & Tipe Data Spreadsheet'
  },
  {
    id: 'q_ad_24',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi spreadsheet yang digunakan untuk menghitung jumlah seluruh sel yang terisi data (baik angka maupun teks) adalah...',
    options: [
      'COUNTA',
      'COUNT',
      'SUM',
      'COUNTBLANK'
    ],
    correctIndex: 0,
    explanation: 'COUNTA menghitung sel non-kosong (teks, angka, boolean), sedangkan COUNT hanya menghitung sel bertipe angka.',
    topic: 'Fungsi Pencacah Sel (COUNTA)'
  },
  {
    id: 'q_ad_25',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fitur "Data Validation" (Validasi Data) pada spreadsheet digunakan untuk...',
    options: [
      'Membatasi jenis atau rentang nilai data yang boleh diketikkan oleh pengguna ke dalam sel (misal membuat menu pilihan Dropdown List).',
      'Menghitung bunga bank secara otomatis.',
      'Menyimpan file ke folder rahasia.',
      'Menghapus sel secara acak.'
    ],
    correctIndex: 0,
    explanation: 'Data Validation mencegah input error dengan membatasi aturan masukan (misal angka 0-100 atau daftar dropdown pilihan).',
    topic: 'Validasi Masukan Data'
  },
  {
    id: 'q_ad_26',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Sebuah toko online memiliki 10.000 data penjualan. Pemilik toko ingin mengetahui produk terlaris di setiap kota beserta total pendapatan. Fitur visualisasi dan rekapitulasi tercepat tanpa menulis ratusan rumus manual adalah...',
    options: [
      'Membuat Pivot Table dengan baris "Kota", kolom "Kategori Produk", dan nilai "Sum of Total Penjualan".',
      'Menghitung satu per satu menggunakan kalkulator saku manual.',
      'Mencetak seluruh 10.000 baris ke kertas lalu menandai dengan spidol.',
      'Menghapus data kota yang penjualannya sedikit.'
    ],
    correctIndex: 0,
    explanation: 'Pivot Table menyusun matriks silang agregasi dua dimensi secara otomatis dan instan dari basis data penjualan berskala besar.',
    topic: 'Agregasi Data Multidimensi Pivot Table'
  },
  {
    id: 'q_ad_27',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi teks yang digunakan untuk mengubah semua huruf dalam sebuah teks menjadi huruf kapital (besar semua) adalah...',
    options: [
      'UPPER',
      'LOWER',
      'PROPER',
      'TRIM'
    ],
    correctIndex: 0,
    explanation: 'UPPER mengubah string teks ke huruf kapital penuh (uppercase).',
    topic: 'Fungsi Format Huruf (UPPER)'
  },
  {
    id: 'q_ad_28',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi teks TRIM pada spreadsheet berguna untuk...',
    options: [
      'Menghapus spasi ganda yang berlebih di awal, tengah, dan akhir teks naskah.',
      'Memotong gambar foto menjadi lingkaran.',
      'Menghapus huruf vokal.',
      'Mengurangi angka desimal.'
    ],
    correctIndex: 0,
    explanation: 'TRIM membersihkan karakter spasi tak terlihat di awal/akhir dan merapikan spasi ganda antar kata menjadi spasi tunggal rapi.',
    topic: 'Pembersihan Teks (TRIM)'
  },
  {
    id: 'q_ad_29',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Pesan galat (error message) "#DIV/0!" pada sel spreadsheet muncul ketika formula...',
    options: [
      'Mencoba membagi sebuah angka dengan nilai nol (0) atau sel kosong.',
      'Salah mengetikkan nama fungsi yang tidak terdaftar.',
      'Mencari data yang tidak ada di tabel referensi VLOOKUP.',
      'Mengisi kolom dengan teks yang terlalu panjang.'
    ],
    correctIndex: 0,
    explanation: '#DIV/0! (Division by Zero) terjadi ketika operasi pembagian aritmatika membagi suatu bilangan dengan penyebut nol.',
    topic: 'Troubleshooting Galat Rumus (#DIV/0!)'
  },
  {
    id: 'q_ad_30',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Pesan galat "#NAME?" pada sel formula spreadsheet mengindikasikan bahwa...',
    options: [
      'Terdapat kesalahan pengetikan pada nama rumus/fungsi atau nama rentang sel.',
      'Data hasil perhitungan bernilai negatif.',
      'Koneksi printer terputus.',
      'Sel telah dikunci dengan password.'
    ],
    correctIndex: 0,
    explanation: '#NAME? muncul jika nama formula salah ketik (misal mengetik =SUMM bukannya =SUM) sehingga tidak dikenali mesin kalkulasi.',
    topic: 'Galat Rumus (#NAME?)'
  },
  {
    id: 'q_ad_31',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi HLOOKUP (Horizontal Lookup) berbeda dengan VLOOKUP karena HLOOKUP mencari data acuan pada...',
    options: [
      'Baris pertama tabel secara horizontal dan mengambil nilai dari nomor baris yang ditentukan.',
      'Kolom pertama secara vertikal.',
      'Folder harddisk komputer.',
      'Grafik pie chart.'
    ],
    correctIndex: 0,
    explanation: 'HLOOKUP mencari kata kunci di baris paling atas tabel horizontal dan mengambil data dari baris ke-n di bawahnya.',
    topic: 'Fungsi HLOOKUP'
  },
  {
    id: 'q_ad_32',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Seorang peneliti mengamati korelasi antara "Waktu Belajar Harian (Jam)" dengan "Nilai Ujian Siswa". Diagram visualisasi data yang paling tepat untuk melihat hubungan sebaran titik korelasi antara dua variabel kontinu tersebut adalah...',
    options: [
      'Scatter Plot (Diagram Sebar Titik)',
      'Pie Chart',
      'Radar Chart',
      'Pyramid Chart'
    ],
    correctIndex: 0,
    explanation: 'Scatter Plot (Diagram Sebar) memetakan titik koordinat (X, Y) untuk menganalisis korelasi dan pola regresi antara dua variabel kuantitatif.',
    topic: 'Visualisasi Analisis Korelasi (Scatter Plot)'
  },
  {
    id: 'q_ad_33',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fitur "AutoFilter" (ikon corong) pada spreadsheet digunakan untuk...',
    options: [
      'Menyaring baris data berdasarkan kriteria tertentu dan menyembunyikan sementara baris yang tidak sesuai.',
      'Menghapus data permanen tanpa konfirmasi.',
      'Mewarnai latar belakang sel dengan gradasi pelangi.',
      'Mengunci formula agar tidak bisa dilihat.'
    ],
    correctIndex: 0,
    explanation: 'Filter menyaring dan menampilkan hanya baris-baris data yang memenuhi kriteria pilihan pengguna.',
    topic: 'Penyaringan Data (Filter)'
  },
  {
    id: 'q_ad_34',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi teks LEFT pada rumus =LEFT("INFORMATIKA"; 4) akan menghasilkan teks...',
    options: [
      'INFO',
      'MATIKA',
      'TIKA',
      'INFOR'
    ],
    correctIndex: 0,
    explanation: 'LEFT mengambil sejumlah n karakter dari sisi paling kiri teks. 4 karakter pertama dari "INFORMATIKA" adalah "INFO".',
    topic: 'Fungsi Pemotong String (LEFT)'
  },
  {
    id: 'q_ad_35',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Di sel A1 tertulis formula =ROUND(14.678; 2). Nilai numerik hasil pembulatan yang dihasilkan adalah...',
    options: [
      '14.68',
      '14.67',
      '14.7',
      '15.00'
    ],
    correctIndex: 0,
    explanation: 'ROUND dengan argumen 2 membulatkan angka ke 2 tempat desimal. Karena digit ke-3 adalah 8 (>=5), maka digit ke-2 (7) dibulatkan naik menjadi 8 (14.68).',
    topic: 'Fungsi Pembulatan Numerik (ROUND)'
  },
  {
    id: 'q_ad_36',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Simbol titik dua (:) pada penulisan rumus spreadsheet seperti A1:A10 menunjukkan...',
    options: [
      'Rentang sel (Range) mulai dari sel A1 sampai dengan sel A10 secara bersambung.',
      'Operasi pembagian angka.',
      'Perintah mencetak dokumen.',
      'Penguncian sel absolut.'
    ],
    correctIndex: 0,
    explanation: 'Tanda titik dua (:) adalah operator rentang (range operator) yang menghubungkan sel awal hingga sel akhir.',
    topic: 'Operator Rentang Sel (Range)'
  },
  {
    id: 'q_ad_37',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi spreadsheet PROPER pada rumus =PROPER("budi santoso") akan mengubah teks menjadi...',
    options: [
      'Budi Santoso',
      'BUDI SANTOSO',
      'budi santoso',
      'bUDI sANTOSO'
    ],
    correctIndex: 0,
    explanation: 'PROPER mengubah huruf pertama setiap kata menjadi huruf kapital (Title Case) dan huruf sisanya menjadi huruf kecil.',
    topic: 'Fungsi Teks (PROPER)'
  },
  {
    id: 'q_ad_38',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Pesan galat "#N/A" pada rumus VLOOKUP biasanya timbul karena...',
    options: [
      'Nilai kata kunci yang dicari (lookup_value) tidak ditemukan sama sekali di dalam kolom acuan tabel referensi.',
      'Format sel diatur menjadi tanggal.',
      'Nama file spreadsheet terlalu panjang.',
      'Komputer kehabisan memori RAM.'
    ],
    correctIndex: 0,
    explanation: '#N/A (Not Available) menandakan pencarian VLOOKUP/MATCH tidak menemukan kecocokan data pada tabel sumber.',
    topic: 'Galat Pencarian (#N/A)'
  },
  {
    id: 'q_ad_39',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fitur "Sort" pada lembar kerja spreadsheet berfungsi untuk...',
    options: [
      'Mengurutkan data berdasarkan kriteria alfabetis (A-Z / Z-A) atau nilai numerik (terkecil-terbesar).',
      'Menghapus baris yang ganjil.',
      'Mengubah font menjadi tebal.',
      'Menyimpan file ke format PDF.'
    ],
    correctIndex: 0,
    explanation: 'Fitur Sort mengatur urutan baris data secara menaik (ascending) atau menurun (descending).',
    topic: 'Pengurutan Data (Sort)'
  },
  {
    id: 'q_ad_40',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi teks RIGHT pada rumus =RIGHT("INDONESIA"; 3) akan menghasilkan teks...',
    options: [
      'SIA',
      'IND',
      'NESIA',
      'DON'
    ],
    correctIndex: 0,
    explanation: 'RIGHT mengambil n karakter dari posisi paling kanan string. 3 huruf terakhir dari "INDONESIA" adalah "SIA".',
    topic: 'Fungsi Ekstraksi Kanan (RIGHT)'
  },
  {
    id: 'q_ad_41',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Seorang bendahara ingin mencari total uang kas yang masuk khusus pada bulan "Agustus" DAN dari kategori "Iuran Wajib". Fungsi lanjutan yang paling tepat digunakan adalah...',
    options: [
      'SUMIFS (dengan multi-kriteria)',
      'SUM tunggal biasa',
      'COUNTBLANK',
      'VLOOKUP'
    ],
    correctIndex: 0,
    explanation: 'Fungsi SUMIFS menjumlahkan nilai pada rentang target berdasarkan dua kriteria atau lebih yang harus terpenuhi secara simultan.',
    topic: 'Fungsi Multikondisional (SUMIFS)'
  },
  {
    id: 'q_ad_42',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Kumpulan baris dan kolom yang saling berpotongan membentuk kotak-kotak kecil tempat memasukkan data pada spreadsheet dinamakan...',
    options: [
      'Sel (Cell)',
      'Layer',
      'Frame',
      'Slide'
    ],
    correctIndex: 0,
    explanation: 'Cell (Sel) adalah unit terkecil tempat penyimpanan teks atau angka pada perpotongan baris (Row) dan kolom (Column).',
    topic: 'Terminologi Sel Spreadsheet'
  },
  {
    id: 'q_ad_43',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Tanda pagar beruntun seperti "#####" yang muncul memenuhi sel spreadsheet menandakan bahwa...',
    options: [
      'Lebar kolom terlalu sempit untuk menampilkan seluruh digit angka atau format tanggal yang ada di sel tersebut.',
      'Komputer terkena virus berbahaya.',
      'Data angka telah dihapus oleh sistem.',
      'Rumus perhitungan menghasilkan nilai tak terhingga.'
    ],
    correctIndex: 0,
    explanation: 'Indikator ##### mengisyaratkan pengguna untuk melebarkan ukuran kolom agar angka panjang atau format tanggal dapat terlihat utuh.',
    topic: 'Tampilan Sel Terlalu Sempit (#####)'
  },
  {
    id: 'q_ad_44',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Sebuah data nilai ujian memiliki outlier (pencilan ekstrem): [80, 82, 85, 84, 88, 10]. Mengapa nilai Median lebih representatif dibanding Mean dalam menggambarkan performa umum kelas tersebut?',
    options: [
      'Karena nilai Mean sangat rentan tertarik turun oleh nilai ekstrem rendah (10), sedangkan Median kebal terhadap nilai ekstrem pencilan.',
      'Karena Median selalu bernilai 100.',
      'Karena nilai Mean hanya bisa dihitung untuk bilangan pecahan.',
      'Karena Median tidak memerlukan pengurutan data.'
    ],
    correctIndex: 0,
    explanation: 'Median adalah ukuran tendensi sentral yang robust (kebal terhadap skewness/outlier), menjadikannya lebih akurat jika ada nilai pencilan ekstrem.',
    topic: 'Ketahanan Median Terhadap Outlier'
  },
  {
    id: 'q_ad_45',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fitur "Freeze Panes" (Bekukan Panel) pada spreadsheet sangat berguna saat membaca tabel panjang untuk...',
    options: [
      'Mengunci baris judul atas atau kolom pertama agar tetap terlihat di layar saat lembar kerja digulir (scroll) ke bawah atau samping.',
      'Menyimpan file ke dalam lemari es pendingin.',
      'Menghentikan proses perhitungan rumus sementara.',
      'Menghapus sel yang tidak digunakan.'
    ],
    correctIndex: 0,
    explanation: 'Freeze Panes mengunci header baris/kolom di posisi tetap pada viewport layar saat pengguna menjelajahi baris-baris data di bawahnya.',
    topic: 'Fitur Navigasi (Freeze Panes)'
  },
  {
    id: 'q_ad_46',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Fungsi logika NOT pada spreadsheet (misalnya =NOT(A1>50)) akan menghasilkan TRUE apabila nilai A1 adalah...',
    options: [
      '30',
      '60',
      '75',
      '100'
    ],
    correctIndex: 0,
    explanation: 'Jika A1=30: (30 > 50) bernilai FALSE. NOT(FALSE) menghasilkan nilai TRUE.',
    topic: 'Fungsi Logika Negasi (NOT)'
  },
  {
    id: 'q_ad_47',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Di sel A1 tertulis teks "SMP NEGERI 1 JAKARTA". Formula =MID(A1; 5; 6) akan menghasilkan potongan kata...',
    options: [
      'NEGERI',
      'SMP NE',
      '1 JAKA',
      'JAKART'
    ],
    correctIndex: 0,
    explanation: 'MID(teks; start; num_chars) mengambil teks mulai karakter ke-5 sepanjang 6 huruf. Karakter ke-5 adalah "N", 6 hurufnya adalah "NEGERI".',
    topic: 'Fungsi Ekstraksi Tengah (MID)'
  },
  {
    id: 'q_ad_48',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'LotS',
    stem: 'Fungsi statistika COUNTBLANK pada spreadsheet berfungsi untuk...',
    options: [
      'Menghitung jumlah sel kosong (tidak terisi data) dalam suatu rentang data tertentu.',
      'Menghitung sel berisi angka nol.',
      'Menghapus seluruh sel yang kosong.',
      'Mengisi sel kosong dengan warna putih.'
    ],
    correctIndex: 0,
    explanation: 'COUNTBLANK mencacah banyaknya sel kosong yang belum diisi data di dalam rentang yang dipilih.',
    topic: 'Fungsi Pencacah Sel Kosong (COUNTBLANK)'
  },
  {
    id: 'q_ad_49',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'MotS',
    stem: 'Jenis diagram batang mendatar (Bar Chart) sangat cocok digunakan saat...',
    options: [
      'Membandingkan kategori-kategori yang memiliki nama label teks yang cukup panjang.',
      'Menunjukkan proporsi 100%.',
      'Menghitung nilai integral.',
      'Melihat kecepatan internet.'
    ],
    correctIndex: 0,
    explanation: 'Bar Chart horizontal memberikan ruang horizontal luas untuk label kategori panjang tanpa harus memiringkan teks.',
    topic: 'Pemilihan Tipe Diagram (Bar Chart)'
  },
  {
    id: 'q_ad_50',
    element: 'AD',
    materi: 'Analisis Data',
    level: 'HoTS',
    stem: 'Manakah alur tahapan analisis data yang paling runtut dan sistematis dalam pemecahan masalah berbasis data?',
    options: [
      'Pengumpulan Data -> Pembersihan & Validasi Data -> Pemrosesan/Agregasi Data -> Visualisasi & Interpretasi Kesimpulan',
      'Visualisasi -> Pengumpulan Data -> Penghapusan Data -> Pembersihan',
      'Interpretasi Kesimpulan -> Pengumpulan Data -> Pembersihan -> Menutup Program',
      'Pembersihan -> Pengumpulan Data -> Menghapus Grafik -> Selesai'
    ],
    correctIndex: 0,
    explanation: 'Siklus hidup analisis data baku diawali akuisisi/koleksi data mentah, pembersihan (cleansing), transformasi/agregasi statistik, dan visualisasi untuk pengambilan keputusan.',
    topic: 'Siklus Hidup Lengkap Analisis Data'
  }
];
