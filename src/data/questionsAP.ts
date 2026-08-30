import { Question } from '../types';

export const QUESTIONS_AP: Question[] = [
  {
    id: 'q_ap_1',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Perhatikan potongan kode program Python berikut:\n```python\nx = 15\ny = 4\nprint(x % y)\n```\nNilai keluaran (output) yang dicetak ke layar adalah...',
    options: [
      '3',
      '3.75',
      '0',
      '60'
    ],
    correctIndex: 0,
    explanation: 'Operator % (Modulo) menghasilkan sisa hasil bagi pembagian bulat. 15 dibagi 4 menghasilkan 3 dengan sisa 3 (karena 4 * 3 = 12, dan 15 - 12 = 3).',
    topic: 'Operator Modulo & Aritmatika Pemrograman'
  },
  {
    id: 'q_ap_2',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan algoritma perulangan berikut:\n```python\ntotal = 0\nfor i in range(1, 5):\n    total = total + (i * 2)\nprint(total)\n```\nBerapakah nilai variabel total di akhir program?',
    options: [
      '20',
      '10',
      '30',
      '12'
    ],
    correctIndex: 0,
    explanation: 'range(1, 5) menghasilkan nilai i = 1, 2, 3, 4. Iterasi 1: total = 0 + (1*2) = 2. Iterasi 2: total = 2 + (2*2) = 6. Iterasi 3: total = 6 + (3*2) = 12. Iterasi 4: total = 12 + (4*2) = 20.',
    topic: 'Penelusuran Perulangan For Loop (Tracing)'
  },
  {
    id: 'q_ap_3',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Tipe data pemrograman yang khusus digunakan untuk menyimpan nilai kebenaran logika (hanya bernilai True atau False) adalah...',
    options: [
      'Boolean',
      'Integer',
      'Float',
      'String'
    ],
    correctIndex: 0,
    explanation: 'Tipe data Boolean (bool) merepresentasikan dua nilai logika biner: True (benar) atau False (salah).',
    topic: 'Tipe Data Dasar (Boolean)'
  },
  {
    id: 'q_ap_4',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Perhatikan kondisi percabangan berikut:\n```python\nnilai = 82\nif nilai >= 90:\n    predikat = "A"\nelif nilai >= 80:\n    predikat = "B"\nelse:\n    predikat = "C"\n```\nNilai akhir variabel predikat adalah...',
    options: [
      '"B"',
      '"A"',
      '"C"',
      'None'
    ],
    correctIndex: 0,
    explanation: 'Kondisi pertama (nilai >= 90) bernilai False. Kondisi kedua elif (nilai >= 80) bernilai True karena 82 >= 80, sehingga predikat diisi "B".',
    topic: 'Struktur Kontrol Percabangan If-Elif-Else'
  },
  {
    id: 'q_ap_5',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan fungsi rekursif sederhana berikut:\n```python\ndef hitung(n):\n    if n == 1:\n        return 1\n    else:\n        return n + hitung(n - 1)\nprint(hitung(4))\n```\nBerapakah hasil keluaran program di atas?',
    options: [
      '10',
      '24',
      '4',
      '16'
    ],
    correctIndex: 0,
    explanation: 'hitung(4) = 4 + hitung(3) = 4 + 3 + hitung(2) = 4 + 3 + 2 + hitung(1) = 4 + 3 + 2 + 1 = 10.',
    topic: 'Fungsi Rekursif Sederhana'
  },
  {
    id: 'q_ap_6',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Tipe data yang digunakan untuk menyimpan bilangan bulat (tanpa desimal/koma), seperti -5, 0, 10, 100 adalah...',
    options: [
      'Integer (int)',
      'Float',
      'Char',
      'Boolean'
    ],
    correctIndex: 0,
    explanation: 'Integer (int) adalah tipe data numerik bilangan bulat.',
    topic: 'Tipe Data Integer'
  },
  {
    id: 'q_ap_7',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Perhatikan perulangan while berikut:\n```python\ncounter = 1\nwhile counter < 8:\n    counter = counter * 2\nprint(counter)\n```\nBerapakah nilai akhir counter yang tercetak?',
    options: [
      '8',
      '4',
      '16',
      '7'
    ],
    correctIndex: 0,
    explanation: 'Awal: counter=1. Iterasi 1: counter=2 (<8). Iterasi 2: counter=4 (<8). Iterasi 3: counter=8 (kini counter < 8 bernilai False, loop berhenti). Nilai akhir tercetak adalah 8.',
    topic: 'Perulangan While Loop'
  },
  {
    id: 'q_ap_8',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Diberikan list array buah: `buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"]`. Dalam standar indeks array berbasis nol (zero-based index), ekspresi `buah[2]` akan menghasilkan...',
    options: [
      '"Mangga"',
      '"Jeruk"',
      '"Apel"',
      '"Pisang"'
    ],
    correctIndex: 0,
    explanation: 'Indeks array dimulai dari 0: buah[0] = "Apel", buah[1] = "Jeruk", buah[2] = "Mangga", buah[3] = "Pisang", buah[4] = "Anggur".',
    topic: 'Pengindeksan Array / List 0-Based'
  },
  {
    id: 'q_ap_9',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Blok perintah visual pada Scratch yang digunakan untuk mengulang serangkaian aksi sebanyak jumlah angka tertentu adalah blok...',
    options: [
      'Repeat (X) Times',
      'Wait 1 secs',
      'Say Hello',
      'Change X by 10'
    ],
    correctIndex: 0,
    explanation: 'Blok Repeat (N) pada Scratch menjalankan instruksi di dalamnya sebanyak n kali putaran.',
    topic: 'Pemrograman Visual Scratch (Perulangan)'
  },
  {
    id: 'q_ap_10',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Fungsi dari sebuah "Variabel" dalam bahasa pemrograman adalah...',
    options: [
      'Sebagai wadah bernama di dalam memori komputer untuk menyimpan nilai data yang dapat berubah selama eksekusi program.',
      'Menampilkan teks secara langsung ke layar tanpa memori.',
      'Mematikan daya listrik komputer saat selesai.',
      'Menghubungkan printer ke kabel LAN.'
    ],
    correctIndex: 0,
    explanation: 'Variabel adalah lokasi penyimpanan memori berlabel yang dialokasikan untuk menampung data dinamis.',
    topic: 'Konsep Variabel Pemrograman'
  },
  {
    id: 'q_ap_11',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan potongan kode berikut:\n```python\na = 10\nb = 20\na = a + b\nb = a - b\na = a - b\n```\nBerapakah nilai akhir dari variabel `a` dan `b`?',
    options: [
      'a = 20, b = 10 (nilai berhasil ditukar)',
      'a = 10, b = 20 (nilai tetap)',
      'a = 30, b = 30',
      'a = 0, b = 0'
    ],
    correctIndex: 0,
    explanation: 'Langkah 1: a = 10 + 20 = 30. Langkah 2: b = 30 - 20 = 10. Langkah 3: a = 30 - 10 = 20. Ini adalah algoritma penukaran nilai dua variabel tanpa variabel penampung sementara (swap without temp).',
    topic: 'Algoritma Penukaran Nilai (Swap Variable)'
  },
  {
    id: 'q_ap_12',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Tipe data untuk menyimpan angka pecahan atau bilangan berkoma (seperti 3.14 atau 0.005) dalam pemrograman disebut...',
    options: [
      'Float / Double',
      'Integer',
      'String',
      'Boolean'
    ],
    correctIndex: 0,
    explanation: 'Float (Floating Point) dan Double menyimpan bilangan desimal pecahan.',
    topic: 'Tipe Data Float'
  },
  {
    id: 'q_ap_13',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Tanda atau karakter yang digunakan untuk menuliskan baris "Komentar" (catatan yang diabaikan oleh penerjemah/kompiler saat program dijalankan) pada bahasa Python adalah...',
    options: [
      '# (Tanda Pagar)',
      '// (Garis Miring Ganda)',
      '/* Komentar */',
      '-- (Tanda Kurang Ganda)'
    ],
    correctIndex: 0,
    explanation: 'Karakter # menandai awal baris komentar pada kode sumber Python.',
    topic: 'Sintaks Komentar Kode Program'
  },
  {
    id: 'q_ap_14',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Kondisi kesalahan pada program komputer di mana suatu perulangan berjalan terus-menerus tanpa pernah berhenti karena kondisi keluar tidak pernah terpenuhi dinamakan...',
    options: [
      'Infinite Loop (Perulangan Tak Hingga)',
      'Syntax Error',
      'Type Mismatch',
      'Out of Memory'
    ],
    correctIndex: 0,
    explanation: 'Infinite Loop terjadi jika kondisi terminasi perulangan selalu bernilai True sehingga instruksi berulang selamanya sampai program hang/dihentikan paksa.',
    topic: 'Konsep Infinite Loop & Penanganannya'
  },
  {
    id: 'q_ap_15',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Perintah keluaran standar untuk mencetak teks atau nilai variabel ke jendela konsol layar pada bahasa Python adalah...',
    options: [
      'print()',
      'input()',
      'echo()',
      'write()'
    ],
    correctIndex: 0,
    explanation: 'Fungsi bawaan print() di Python menampilkan output ke stdout/layar terminal.',
    topic: 'Fungsi Keluaran (print)'
  },
  {
    id: 'q_ap_16',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Fungsi `input()` pada Python digunakan untuk...',
    options: [
      'Menerima masukan data teks yang diketikkan pengguna melalui keyboard saat program berjalan.',
      'Menghapus isi harddisk.',
      'Mengukur ukuran file program.',
      'Memutar video musik.'
    ],
    correctIndex: 0,
    explanation: 'input() membaca satu baris teks yang dimasukkan pengguna dari terminal dan mengembalikannya sebagai string.',
    topic: 'Fungsi Masukan (input)'
  },
  {
    id: 'q_ap_17',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan kode Python berikut:\n```python\nangka = "50"\nhasil = angka * 2\nprint(hasil)\n```\nApakah keluaran dari program tersebut?',
    options: [
      '"5050" (pengulangan string dua kali)',
      '100 (penjumlahan numerik)',
      '50',
      'Error tipe data'
    ],
    correctIndex: 0,
    explanation: 'Variabel `angka` bertipe String (ditandai tanda petik "50"). Operasi perkalian string dengan integer di Python melakukan replikasi/pengulangan teks sehingga menghasilkan "5050".',
    topic: 'Perilaku Operator String vs Numerik'
  },
  {
    id: 'q_ap_18',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Simbol operator perbandingan dalam bahasa pemrograman untuk memeriksa "Apakah nilai A sama persis dengan nilai B?" adalah...',
    options: [
      '== (Dua tanda sama dengan)',
      '= (Satu tanda sama dengan)',
      '!=',
      '<>'
    ],
    correctIndex: 0,
    explanation: 'Simbol == adalah operator kesetaraan (equality comparison), sedangkan = adalah operator penugasan nilai (assignment).',
    topic: 'Operator Perbandingan Kesetaraan (==)'
  },
  {
    id: 'q_ap_19',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Operator logika perbandingan untuk memeriksa "Tidak Sama Dengan" dalam sebagian besar bahasa pemrograman modern (seperti C, Java, Python) adalah...',
    options: [
      '!=',
      '==',
      '<=',
      '=>'
    ],
    correctIndex: 0,
    explanation: 'Simbol != (tanda seru diikuti sama dengan) menyatakan ketidaksamaan (not equal).',
    topic: 'Operator Perbandingan Ketidaksamaan (!=)'
  },
  {
    id: 'q_ap_20',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan kode fungsi berikut:\n```python\ndef luas_persegi(sisi):\n    return sisi * sisi\n\nhasil = luas_persegi(6)\nprint(hasil + 10)\n```\nBerapakah angka yang ditampilkan di layar?',
    options: [
      '46',
      '36',
      '16',
      '26'
    ],
    correctIndex: 0,
    explanation: 'Pemanggilan fungsi luas_persegi(6) mengembalikan nilai 6 * 6 = 36. Selanjutnya print(36 + 10) mencetak nilai 46.',
    topic: 'Fungsi dengan Parameter dan Nilai Balik (Return)'
  },
  {
    id: 'q_ap_21',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Karakter atau teks berurutan yang diapit oleh tanda petik (misalnya "Selamat Pagi") memiliki tipe data...',
    options: [
      'String (str)',
      'Boolean',
      'Float',
      'Integer'
    ],
    correctIndex: 0,
    explanation: 'String adalah tipe data untaian karakter alfanumerik yang didefinisikan di dalam tanda petik tunggal atau ganda.',
    topic: 'Tipe Data String'
  },
  {
    id: 'q_ap_22',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Kata kunci (keyword) yang digunakan untuk mendefinisikan sebuah fungsi baru pada bahasa pemrograman Python adalah...',
    options: [
      'def',
      'function',
      'procedure',
      'create'
    ],
    correctIndex: 0,
    explanation: 'Keyword `def` (singkatan dari define) digunakan untuk mendeklarasikan fungsi kustom di Python.',
    topic: 'Deklarasi Fungsi Python (def)'
  },
  {
    id: 'q_ap_23',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan struktur data dictionary/objek Python berikut:\n```python\nsiswa = {"nama": "Budi", "kelas": "9A", "nilai": 95}\nprint(siswa["kelas"])\n```\nKeluaran dari program tersebut adalah...',
    options: [
      '"9A"',
      '"Budi"',
      '95',
      'Error key'
    ],
    correctIndex: 0,
    explanation: 'Struktur dictionary memetakan Key ke Value. Pengaksesan `siswa["kelas"]` mengambil nilai dari kunci "kelas", yaitu "9A".',
    topic: 'Struktur Data Dictionary / Pasangan Key-Value'
  },
  {
    id: 'q_ap_24',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Proses mencari dan memperbaiki kesalahan atau galat (bug) yang terdapat di dalam baris kode program disebut...',
    options: [
      'Debugging',
      'Compiling',
      'Rendering',
      'Formatting'
    ],
    correctIndex: 0,
    explanation: 'Debugging adalah aktivitas mendeteksi, mengisolasi, dan membetulkan galat pada perangkat lunak.',
    topic: 'Konsep Debugging'
  },
  {
    id: 'q_ap_25',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Perintah `break` di dalam sebuah struktur perulangan (loop) berfungsi untuk...',
    options: [
      'Menghentikan jalannya perulangan seketika dan langsung melompat keluar dari blok loop.',
      'Mengulang loop dari awal secara otomatis.',
      'Menghapus variabel di memori.',
      'Mematikan komputer.'
    ],
    correctIndex: 0,
    explanation: 'Statement `break` mengakhiri eksekusi perulangan secara paksa saat suatu kondisi khusus terpenuhi.',
    topic: 'Pernyataan Kendali Break'
  },
  {
    id: 'q_ap_26',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan kode berikut:\n```python\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=" ")\n```\nAngka-angka yang tercetak ke layar adalah...',
    options: [
      '1 2 4 5',
      '1 2 3 4 5',
      '1 2',
      '3 4 5'
    ],
    correctIndex: 0,
    explanation: 'Perintah `continue` melompati sisa instruksi pada iterasi saat itu dan langsung lanjut ke iterasi berikutnya. Saat i=3, perintah print dilewati sehingga angka 3 tidak tercetak.',
    topic: 'Pernyataan Kendali Continue'
  },
  {
    id: 'q_ap_27',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Perangkat lunak terpadu yang menyediakan editor kode, compiler/interpreter, dan debugger dalam satu antarmuka pengembangan program dinamakan...',
    options: [
      'IDE (Integrated Development Environment)',
      'GPU',
      'VGA',
      'RAM'
    ],
    correctIndex: 0,
    explanation: 'IDE (seperti VS Code, PyCharm, Thonny) menyediakan lingkungan pengembangan terintegrasi lengkap bagi programmer.',
    topic: 'Integrated Development Environment (IDE)'
  },
  {
    id: 'q_ap_28',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Metode penulisan indentasi (spasi menjorok ke dalam) pada kode Python sangat penting karena...',
    options: [
      'Digunakan oleh Python untuk menentukan cakupan blok kode instruksi (seperti di dalam if atau loop) menggantikan kurung kurawal {}.',
      'Hanya sebagai hiasan agar warna font berubah.',
      'Membuat file program menjadi lebih ringan.',
      'Wajib diisi tepat 10 spasi.'
    ],
    correctIndex: 0,
    explanation: 'Python menggunakan indentasi whitespace secara ketat untuk mendefinisikan hierarki dan ruang lingkup (scope) blok kode.',
    topic: 'Aturan Indentasi Python'
  },
  {
    id: 'q_ap_29',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan kode manipulasi list berikut:\n```python\nangka = [10, 20, 30]\nangka.append(40)\nangka.pop(0)\nprint(angka)\n```\nBagaimanakah isi akhir dari list angka?',
    options: [
      '[20, 30, 40]',
      '[10, 20, 30, 40]',
      '[10, 20, 30]',
      '[40, 20, 30]'
    ],
    correctIndex: 0,
    explanation: 'append(40) menambahkan angka 40 di ujung kanan: [10, 20, 30, 40]. pop(0) menghapus elemen pada indeks 0 (angka 10), sehingga isi list menjadi [20, 30, 40].',
    topic: 'Operasi List (Append & Pop)'
  },
  {
    id: 'q_ap_30',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Jenis kesalahan program yang terjadi akibat pelanggaran aturan tata bahasa penulisan kode (misalnya lupa tanda kurung tutup atau salah eja kata kunci) disebut...',
    options: [
      'Syntax Error (Galat Sintaks)',
      'Logical Error',
      'Runtime Error',
      'Hardware Error'
    ],
    correctIndex: 0,
    explanation: 'Syntax Error terjadi saat kode melanggar tata bahasa pemrograman baku sehingga parser gagal membaca instruksi.',
    topic: 'Klasifikasi Galat (Syntax Error)'
  },
  {
    id: 'q_ap_31',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Jenis kesalahan program di mana kode berhasil berjalan tanpa error namun memberikan hasil perhitungan yang salah atau tidak sesuai yang diharapkan disebut...',
    options: [
      'Logical Error (Galat Logika / Semantik)',
      'Syntax Error',
      'Compilation Error',
      'Fatal Error'
    ],
    correctIndex: 0,
    explanation: 'Logical error terjadi karena cacat logika algoritma pemrogram (misal salah rumus luas lingkaran), meski program tidak crash.',
    topic: 'Galat Logika (Logical Error)'
  },
  {
    id: 'q_ap_32',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan kode pemotongan string (string slicing) Python berikut:\n```python\nkata = "PEMROGRAMAN"\nprint(kata[3:7])\n```\nPotongan kata yang dihasilkan adalah...',
    options: [
      '"ROGR"',
      '"MROG"',
      '"PROG"',
      '"ROGRA"'
    ],
    correctIndex: 0,
    explanation: 'Slicing kata[3:7] mengambil karakter dari indeks ke-3 inklusif hingga indeks ke-7 eksklusif (indeks 3, 4, 5, 6). Indeks 0=P, 1=E, 2=M, 3=R, 4=O, 5=G, 6=R. Hasilnya adalah "ROGR".',
    topic: 'String Slicing Python'
  },
  {
    id: 'q_ap_33',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Pada Scratch, sprite (karakter animasi) yang dapat bergerak di panggung diatur posisinya menggunakan sistem koordinat kartesius dengan sumbu...',
    options: [
      'Sumbu X (horizontal) dan Sumbu Y (vertikal)',
      'Sumbu A dan Sumbu B',
      'Sumbu Derajat dan Sumbu Menit',
      'Sumbu Pixel dan Sumbu Volt'
    ],
    correctIndex: 0,
    explanation: 'Panggung Scratch menggunakan koordinat 2D: X (-240 sampai +240) mendatar dan Y (-180 sampai +180) tegak.',
    topic: 'Koordinat Visual Scratch (X, Y)'
  },
  {
    id: 'q_ap_34',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Fungsi bawaan `len()` pada Python (misalnya `len([5, 10, 15, 20])`) digunakan untuk...',
    options: [
      'Menghitung jumlah elemen data yang ada di dalam list atau untaian karakter.',
      'Menjumlahkan seluruh angka.',
      'Mencari nilai angka terbesar.',
      'Menghapus isi list.'
    ],
    correctIndex: 0,
    explanation: 'Fungsi len() mengembalikan panjang ukuran elemen koleksi (array/string/list).',
    topic: 'Fungsi Panjang Koleksi len()'
  },
  {
    id: 'q_ap_35',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan program boolean berikut:\n```python\np = True\nq = False\nr = not (p or q) and (not q)\nprint(r)\n```\nNilai akhir dari variabel `r` adalah...',
    options: [
      'False',
      'True',
      'None',
      'Error'
    ],
    correctIndex: 0,
    explanation: '(p or q) = (True or False) = True. not(True) = False. (not q) = True. Evaluasi: False and True = False.',
    topic: 'Evaluasi Logika Boolean Pemrograman'
  },
  {
    id: 'q_ap_36',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Perintah operator perkalian pada sebagian besar bahasa pemrograman disimbolkan dengan tanda...',
    options: [
      '* (Tanda Bintang / Asterisk)',
      'x (Huruf x kecil)',
      ': (Titik Dua)',
      '^ (Caret)'
    ],
    correctIndex: 0,
    explanation: 'Simbol asterisk (*) adalah operator standar perkalian aritmatika komputer.',
    topic: 'Operator Aritmatika Perkalian (*)'
  },
  {
    id: 'q_ap_37',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Fungsi konversi tipe data `int("25")` pada Python digunakan untuk...',
    options: [
      'Mengubah tipe data teks string "25" menjadi nilai bilangan bulat integer 25 agar dapat dioperasikan secara matematika.',
      'Menghapus angka 25.',
      'Mencetak teks 25 ke printer.',
      'Menggandakan angka menjadi 2525.'
    ],
    correctIndex: 0,
    explanation: 'Casting tipe data dengan int() mengonversi representasi string ke bentuk numerik integer murni.',
    topic: 'Konversi Tipe Data (Type Casting)'
  },
  {
    id: 'q_ap_38',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan perulangan bersarang (nested loop) berikut:\n```python\nk = 0\nfor i in range(3):\n    for j in range(2):\n        k += 1\nprint(k)\n```\nBerapakah nilai variabel `k` yang dicetak di akhir program?',
    options: [
      '6',
      '5',
      '3',
      '2'
    ],
    correctIndex: 0,
    explanation: 'Outer loop berputar 3 kali, dan setiap putaran outer loop memicu inner loop berputar 2 kali. Total pertambahan k = 3 * 2 = 6 kali.',
    topic: 'Perulangan Bersarang (Nested Loops)'
  },
  {
    id: 'q_ap_39',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Bahasa pemrograman tingkat tinggi yang sangat populer untuk pemula, sains data, dan kecerdasan buatan dengan sintaks ringkas dan mudah dibaca adalah...',
    options: [
      'Python',
      'Assembly',
      'Machine Code',
      'Microcode'
    ],
    correctIndex: 0,
    explanation: 'Python adalah bahasa tingkat tinggi serbaguna yang terkenal dengan keterbacaan kode (clean syntax) dan dukungan library luas.',
    topic: 'Pengantar Bahasa Pemrograman Python'
  },
  {
    id: 'q_ap_40',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Fungsi modul `random.randint(1, 10)` pada Python digunakan untuk...',
    options: [
      'Menghasilkan satu nilai bilangan bulat acak di antara rentang 1 sampai 10 secara inklusif.',
      'Mengurutkan angka 1 sampai 10.',
      'Menjumlahkan angka 1 sampai 10.',
      'Menghapus angka ganjil.'
    ],
    correctIndex: 0,
    explanation: 'randint(a, b) mengembalikan integer acak N dengan aturan a <= N <= b.',
    topic: 'Modul Acak (Random Library)'
  },
  {
    id: 'q_ap_41',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Diberikan fungsi matematika berikut:\n```python\ndef f(x):\n    return (2 * x) + 3\n\nprint(f(f(2)))\n```\nBerapakah nilai hasil komputasi dari pemanggilan fungsi bersarang di atas?',
    options: [
      '17',
      '7',
      '14',
      '20'
    ],
    correctIndex: 0,
    explanation: 'Evaluasi bagian dalam: f(2) = (2 * 2) + 3 = 4 + 3 = 7. Evaluasi bagian luar: f(7) = (2 * 7) + 3 = 14 + 3 = 17.',
    topic: 'Pemanggilan Fungsi Bersarang (Function Composition)'
  },
  {
    id: 'q_ap_42',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Simbol pembagian bilangan bulat yang membuang angka desimal di belakang koma (Floor Division) pada Python adalah...',
    options: [
      '// (Garis miring ganda)',
      '/ (Garis miring tunggal)',
      '% (Persen)',
      '\\ (Backslash)'
    ],
    correctIndex: 0,
    explanation: 'Operator // membagi dua bilangan dan membulatkannya ke bawah ke bilangan bulat terdekat (Floor Division).',
    topic: 'Operator Pembagian Bulat (//)'
  },
  {
    id: 'q_ap_43',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Blok perintah "Broadcast Message" pada Scratch berguna untuk...',
    options: [
      'Mengirimkan sinyal pesan khusus antar sprite agar sprite lain dapat merespons aksi secara bersamaan atau berurutan.',
      'Mematikan suara latar permainan.',
      'Menghapus panggung kostum.',
      'Menutup jendela browser.'
    ],
    correctIndex: 0,
    explanation: 'Broadcast mengirim sinyal event secara global di Scratch, memicu blok "When I receive [message]" pada sprite lain.',
    topic: 'Komunikasi Antar Objek (Broadcast Scratch)'
  },
  {
    id: 'q_ap_44',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Sebuah program menghitung diskon belanja: Jika total belanja >= 100.000, diskon = 10%. Jika total belanja < 100.000, tidak ada diskon. Budi berbelanja barang seharga 150.000. Berapakah total uang yang wajib dibayar Budi setelah dipotong diskon?',
    options: [
      '135.000',
      '150.000',
      '15.000',
      '140.000'
    ],
    correctIndex: 0,
    explanation: 'Diskon = 10% * 150.000 = 15.000. Total bayar = 150.000 - 15.000 = 135.000.',
    topic: 'Logika Algoritma Bisnis Sederhana'
  },
  {
    id: 'q_ap_45',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Nilai masukan (input) yang dikirimkan ke dalam sebuah fungsi saat fungsi tersebut dipanggil dinamakan...',
    options: [
      'Argumen / Parameter',
      'Komentar',
      'Operator',
      'Compiler'
    ],
    correctIndex: 0,
    explanation: 'Parameter adalah variabel penampung masukan di definisi fungsi, dan argumen adalah nilai nyata yang dikirimkan saat pemanggilan.',
    topic: 'Konsep Argumen dan Parameter'
  },
  {
    id: 'q_ap_46',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Operator pemangkatan matematika pada Python dituliskan menggunakan simbol...',
    options: [
      '** (Bintang ganda)',
      '^ (Caret)',
      'pow',
      '^^'
    ],
    correctIndex: 0,
    explanation: 'Simbol ** menghitung nilai eksponensial perpangkatan (misal 2 ** 3 = 8).',
    topic: 'Operator Pemangkatan (**)'
  },
  {
    id: 'q_ap_47',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Perhatikan algoritma pencarian nilai maksimum berikut:\n```python\ndata = [12, 45, 78, 23, 89, 34]\nmaks = data[0]\nfor x in data:\n    if x > maks:\n        maks = x\nprint(maks)\n```\nAlgoritma di atas bekerja dengan prinsip...',
    options: [
      'Menginisialisasi nilai maksimum sementara dengan elemen pertama lalu memperbaruinya setiap kali ditemukan angka yang lebih besar.',
      'Mengurutkan array lalu mengambil elemen paling tengah.',
      'Menjumlahkan seluruh angka dan membaginya dengan 6.',
      'Memilih angka acak dari daftar data.'
    ],
    correctIndex: 0,
    explanation: 'Ini adalah pola algoritma standar pencarian nilai ekstrem (Linear Scan Maximum Finding) dengan kompleksitas waktu O(N).',
    topic: 'Algoritma Pencarian Nilai Maksimum'
  },
  {
    id: 'q_ap_48',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'LotS',
    stem: 'Kumpulan instruksi program yang dikemas dalam satu blok nama khusus agar dapat dipanggil dan digunakan berulang kali tanpa menulis ulang kodenya disebut...',
    options: [
      'Fungsi / Prosedur (Subroutine)',
      'Looping',
      'Variabel',
      'Komentar'
    ],
    correctIndex: 0,
    explanation: 'Fungsi (Function) mempromosikan modularitas dan penggunaan kembali kode (code reusability).',
    topic: 'Definisi Fungsi & Modularitas'
  },
  {
    id: 'q_ap_49',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'MotS',
    stem: 'Perbedaan antara fungsi `print()` dan kata kunci `return` di dalam sebuah fungsi pemrograman adalah...',
    options: [
      'print() hanya menampilkan teks ke layar monitor, sedangkan return mengembalikan nilai data untuk diolah lebih lanjut oleh bagian program lain.',
      'print() mematikan program, return memulai program.',
      'return hanya untuk angka ganjil, print untuk teks.',
      'Tidak ada perbedaan sama sekali.'
    ],
    correctIndex: 0,
    explanation: 'print() adalah operasi I/O keluaran visual, sementara return menyerahkan hasil komputasi kembali ke pemanggil fungsi.',
    topic: 'Perbedaan print() vs return'
  },
  {
    id: 'q_ap_50',
    element: 'AP',
    materi: 'Algoritma & Pemrograman',
    level: 'HoTS',
    stem: 'Manakah dari praktik pemrograman berikut yang paling mencerminkan prinsip "Clean Code" dan memudahkan kolaborasi antar programmer dalam tim?',
    options: [
      'Memberikan nama variabel yang deskriptif dan bermakna (misal: `total_harga_belanja`), membagi program ke fungsi-fungsi kecil mandiri, dan menyisipkan komentar penjelasan pada logika yang rumit.',
      'Menulis seluruh 1.000 baris kode dalam satu baris panjang tanpa spasi.',
      'Menggunakan nama variabel 1 huruf acak seperti a, b, c, z1, x2 tanpa penjelasan.',
      'Menghapus semua indentasi program.'
    ],
    correctIndex: 0,
    explanation: 'Penamaan deskriptif, modularitas fungsi, dan dokumentasi yang bersih mempermudah pemeliharaan (maintainability) dan keterbacaan kode (clean code).',
    topic: 'Prinsip Kualitas Kode Bersih (Clean Code)'
  }
];
