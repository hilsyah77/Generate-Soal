import { Question } from '../types';

export const QUESTIONS_BK: Question[] = [
  {
    id: 'q_bk_1',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Diberikan sekumpulan data angka tidak terurut: [14, 7, 22, 3, 11]. Jika kita menerapkan algoritma Bubble Sort untuk mengurutkannya secara ascending (dari terkecil ke terbesar), bagaimanakah susunan elemen setelah iterasi/pass pertama selesai?',
    options: [
      '[7, 14, 3, 11, 22]',
      '[3, 7, 11, 14, 22]',
      '[7, 3, 11, 14, 22]',
      '[14, 7, 3, 11, 22]'
    ],
    correctIndex: 0,
    explanation: 'Pada pass pertama Bubble Sort ascending: (14 vs 7 -> tukar -> [7,14,22,3,11]), (14 vs 22 -> tetap), (22 vs 3 -> tukar -> [7,14,3,22,11]), (22 vs 11 -> tukar -> [7,14,3,11,22]). Nilai terbesar (22) telah mengapung ke posisi paling akhir.',
    topic: 'Algoritma Pengurutan (Bubble Sort)'
  },
  {
    id: 'q_bk_2',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah struktur silsilah keluarga dimodelkan menggunakan Tree (Pohon). Kakek Budi berada di posisi paling atas (Root). Kakek Budi memiliki dua anak yaitu Pak Andi dan Ibu Bella. Ibu Bella memiliki seorang anak bernama Cici. Manakah analisis relasi node berikut yang paling TEPAT?',
    options: [
      'Cici adalah Leaf (daun), Ibu Bella adalah Parent dari Cici sekaligus Child dari Kakek Budi.',
      'Pak Andi adalah Root kedua dan Cici merupakan Sibling langsung dari Pak Andi.',
      'Cici adalah Ancestor dari Ibu Bella dan Kakek Budi adalah Leaf utama.',
      'Ibu Bella dan Cici berkedudukan pada derajat/level kedalaman (depth) yang sama.'
    ],
    correctIndex: 0,
    explanation: 'Kakek Budi adalah Root. Ibu Bella adalah Child dari Kakek Budi sekaligus Parent dari Cici. Karena Cici tidak memiliki anak cabang lagi, simpul Cici disebut Leaf Node (daun).',
    topic: 'Struktur Data Tree'
  },
  {
    id: 'q_bk_3',
    element: 'BK',
    materi: 'Berpikir Komputasional',
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
    topic: 'Algoritma Pencarian Biner'
  },
  {
    id: 'q_bk_4',
    element: 'BK',
    materi: 'Berpikir Komputasional',
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
    materi: 'Berpikir Komputasional',
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
    topic: 'Logika Proposisi & Hukum De Morgan'
  },
  {
    id: 'q_bk_6',
    element: 'BK',
    materi: 'Berpikir Komputasional',
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
    materi: 'Berpikir Komputasional',
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
  {
    id: 'q_bk_8',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Sebuah tumpukan piring di meja makan beroperasi menggunakan struktur data Stack (Tumpukan) dengan prinsip LIFO (Last In First Out). Operasi untuk menambahkan piring baru di posisi teratas disebut...',
    options: [
      'Push',
      'Pop',
      'Enqueue',
      'Dequeue'
    ],
    correctIndex: 0,
    explanation: 'Pada struktur data Stack, operasi memasukkan/menambahkan data di puncak tumpukan disebut Push, sedangkan operasi mengambil data dari puncak disebut Pop.',
    topic: 'Struktur Data Stack (LIFO)'
  },
  {
    id: 'q_bk_9',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Jika pada sebuah Stack yang awalnya kosong dilakukan urutan operasi berikut: Push(5), Push(8), Pop(), Push(12), Push(3), Pop(), elemen apakah yang kini berada di posisi paling atas (top of stack)?',
    options: [
      '12',
      '3',
      '8',
      '5'
    ],
    correctIndex: 0,
    explanation: 'Jejak Stack: Push(5) -> [5]; Push(8) -> [5,8]; Pop() -> 8 keluar [5]; Push(12) -> [5,12]; Push(3) -> [5,12,3]; Pop() -> 3 keluar [5,12]. Elemen teratas adalah 12.',
    topic: 'Simulasi Operasi Stack'
  },
  {
    id: 'q_bk_10',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Pilar berpikir komputasional yang berfokus pada pemecahan masalah besar dan kompleks menjadi bagian-bagian yang lebih kecil dan mudah dikelola disebut...',
    options: [
      'Dekomposisi (Decomposition)',
      'Pengenalan Pola (Pattern Recognition)',
      'Abstraksi (Abstraction)',
      'Perancangan Algoritma (Algorithm Design)'
    ],
    correctIndex: 0,
    explanation: 'Dekomposisi adalah teknik memecah masalah yang rumit menjadi sub-masalah yang lebih sederhana agar dapat diselesaikan secara sistematis satu per satu.',
    topic: 'Empat Pilar Berpikir Komputasional'
  },
  {
    id: 'q_bk_11',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Seorang dokter melihat kesamaan gejala demam, bintik merah, dan nyeri sendi pada beberapa pasien untuk menentukan diagnosis penyakit DBD. Pilar berpikir komputasional yang diterapkan dokter adalah...',
    options: [
      'Pengenalan Pola (Pattern Recognition)',
      'Dekomposisi',
      'Abstraksi',
      'Enkripsi Data'
    ],
    correctIndex: 0,
    explanation: 'Pengenalan pola melibatkan kemampuan mengamati keteraturan atau kesamaan ciri dari berbagai data untuk memprediksi atau menarik kesimpulan.',
    topic: 'Pengenalan Pola'
  },
  {
    id: 'q_bk_12',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Peta rute kereta rel listrik (KRL) commuter line sengaja menghilangkan detail kontur tanah, belokan tajam jalan raya, dan pepohonan, serta hanya menyisakan nama stasiun dan garis jalur rel. Hal ini merupakan contoh penerapan pilar...',
    options: [
      'Abstraksi (Abstraction)',
      'Dekomposisi',
      'Debugging',
      'Sortasi'
    ],
    correctIndex: 0,
    explanation: 'Abstraksi menyaring detail yang tidak penting dan memusatkan perhatian hanya pada informasi relevan utama yang dibutuhkan pengguna.',
    topic: 'Abstraksi'
  },
  {
    id: 'q_bk_13',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Diberikan daftar nama terurut: [Ani, Budi, Citra, Dedi, Eko, Fani, Galih, Hani]. Jika dilakukan Binary Search untuk mencari nama "Galih", berapakah jumlah perbandingan elemen yang dilakukan hingga nama tersebut ditemukan?',
    options: [
      '3 kali',
      '1 kali',
      '7 kali',
      '5 kali'
    ],
    correctIndex: 0,
    explanation: 'Rentang 8 elemen (indeks 0..7). Langkah 1: Elemen tengah indeks (0+7)/2 = 3 ("Dedi"). "Galih" > "Dedi", cari di kanan (4..7). Langkah 2: Tengah indeks (4+7)/2 = 5 ("Fani"). "Galih" > "Fani", cari di kanan (6..7). Langkah 3: Tengah indeks (6+7)/2 = 6 ("Galih"). Ditemukan dalam 3 kali perbandingan.',
    topic: 'Tracing Binary Search'
  },
  {
    id: 'q_bk_14',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Dalam algoritma Selection Sort ascending, langkah utama pada setiap iterasi adalah...',
    options: [
      'Mencari elemen dengan nilai terkecil di bagian yang belum terurut lalu menukarnya ke posisi awal bagian tersebut.',
      'Menukar dua elemen bersebelahan jika posisinya salah secara terus-menerus.',
      'Memecah daftar menjadi dua bagian sama besar lalu menggabungkannya kembali.',
      'Menghapus elemen terbesar lalu menyisipkannya di tumpukan baru.'
    ],
    correctIndex: 0,
    explanation: 'Selection Sort bekerja dengan mencari nilai minimum dari sub-array tak terurut, lalu menukarnya dengan elemen pertama pada sub-array tersebut.',
    topic: 'Algoritma Selection Sort'
  },
  {
    id: 'q_bk_15',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah Graf tak berarah memiliki 5 simpul (A, B, C, D, E). Jika setiap simpul terhubung secara langsung dengan seluruh simpul lainnya (Graf Lengkap / Complete Graph K5), berapakah total jumlah garis penghubung (Edge)?',
    options: [
      '10',
      '20',
      '15',
      '5'
    ],
    correctIndex: 0,
    explanation: 'Jumlah edge pada graf lengkap Kn dirumuskan dengan n*(n-1)/2. Untuk K5 = 5*(4)/2 = 10 garis sisi (edges).',
    topic: 'Graf Lengkap (Complete Graph)'
  },
  {
    id: 'q_bk_16',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Tabel kebenaran untuk gerbang logika AND menghasilkan nilai output TRUE (1) hanya jika...',
    options: [
      'Semua input bernilai TRUE (1)',
      'Salah satu input bernilai TRUE (1)',
      'Kedua input bernilai FALSE (0)',
      'Input bernilai berbeda satu sama lain'
    ],
    correctIndex: 0,
    explanation: 'Operasi logika konjungsi AND mensyaratkan seluruh proposisi input bernilai Benar agar menghasilkan nilai akhir Benar.',
    topic: 'Logika Proposisi AND'
  },
  {
    id: 'q_bk_17',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Jika P bernilai TRUE dan Q bernilai FALSE, berapakah nilai kebenaran dari ekspresi logika: (P OR Q) AND (NOT Q)?',
    options: [
      'TRUE',
      'FALSE',
      'Undetermined',
      'Error'
    ],
    correctIndex: 0,
    explanation: 'P = T, Q = F. (P OR Q) = (T OR F) = T. NOT Q = NOT F = T. Maka (T) AND (T) = TRUE.',
    topic: 'Evaluasi Ekspresi Logika'
  },
  {
    id: 'q_bk_18',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah printer di ruang tata usaha menerima 3 dokumen secara berurutan: Dokumen 1 (10 halaman), Dokumen 2 (5 halaman), Dokumen 3 (2 halaman). Jika sistem antrean menggunakan algoritma Spooling FIFO, dokumen manakah yang selesai dicetak paling awal?',
    options: [
      'Dokumen 1',
      'Dokumen 3',
      'Dokumen 2',
      'Ketiganya selesai bersamaan'
    ],
    correctIndex: 0,
    explanation: 'Sistem FIFO (First In First Out) memproses tugas sesuai urutan kedatangan. Dokumen 1 masuk pertama kali, sehingga dicetak paling awal sebelum Dokumen 2 dan 3.',
    topic: 'Antrean Antar Perangkat (Spooling)'
  },
  {
    id: 'q_bk_19',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Simpul paling awal atau simpul induk utama pada struktur data Tree yang tidak memiliki simpul orang tua (parent) dinamakan...',
    options: [
      'Root (Akar)',
      'Leaf (Daun)',
      'Branch (Cabang)',
      'Subtree'
    ],
    correctIndex: 0,
    explanation: 'Root merupakan simpul puncak pada hierarki Tree yang menjadi leluhur (ancestor) bagi seluruh simpul lainnya.',
    topic: 'Terminologi Tree'
  },
  {
    id: 'q_bk_20',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Manakah dari situasi berikut yang paling tepat dimodelkan menggunakan struktur data Stack (LIFO)?',
    options: [
      'Fitur Undo / Redo pada aplikasi pengolah kata teks.',
      'Antrean loket pembayaran karcis bioskop.',
      'Jalur pipa distribusi air minum PAM ke rumah warga.',
      'Daftar putar lagu acak pada pemutar musik.'
    ],
    correctIndex: 0,
    explanation: 'Fitur Undo menyimpan riwayat aksi terakhir di posisi paling atas tumpukan, sehingga perintah yang dibatalkan adalah aksi yang paling baru dilakukan (LIFO).',
    topic: 'Aplikasi Nyata Stack'
  },
  {
    id: 'q_bk_21',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Dalam algoritma pencarian rute terpendek antar persimpangan jalan (misalnya Dijkstra), representasi graf berbobot (weighted graph) menggunakan bobot pada garis sisi (edge) untuk mewakili...',
    options: [
      'Jarak fisik atau waktu tempuh perjalanan antar titik persimpangan.',
      'Jumlah rambu lalu lintas yang terpasang di setiap gedung.',
      'Nama kelurahan tempat jalan tersebut berada.',
      'Ketinggian tiang lampu penerangan jalan.'
    ],
    correctIndex: 0,
    explanation: 'Bobot (weight) pada edge merepresentasikan nilai kuantitatif seperti jarak tempuh (km), biaya, atau durasi waktu (menit) yang ingin diminimalkan oleh algoritma.',
    topic: 'Graf Berbobot & Navigasi'
  },
  {
    id: 'q_bk_22',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Pernyataan kondisional: "Jika lampu merah menyala MAKA kendaraan harus berhenti". Negasi (ingkaran) yang logis dari pernyataan tersebut adalah...',
    options: [
      'Lampu merah menyala TETAPI kendaraan TIDAK berhenti.',
      'Lampu merah tidak menyala maka kendaraan berhenti.',
      'Lampu hijau menyala maka kendaraan jalan.',
      'Lampu merah menyala dan kendaraan wajib berhenti.'
    ],
    correctIndex: 0,
    explanation: 'Negasi dari implikasi (P -> Q) secara logika proposisi adalah (P AND NOT Q), yaitu premis P terjadi tetapi konsekuensi Q tidak dipenuhi.',
    topic: 'Negasi Implikasi Logika'
  },
  {
    id: 'q_bk_23',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Algoritma pengurutan yang bekerja dengan membagi daftar data menjadi dua bagian, mengurutkan masing-masing bagian secara rekursif, lalu menggabungkannya (merge) disebut...',
    options: [
      'Merge Sort',
      'Bubble Sort',
      'Linear Sort',
      'Heap Sort'
    ],
    correctIndex: 0,
    explanation: 'Merge Sort menerapkan paradigma Divide and Conquer untuk membagi data hingga unit terkecil lalu menggabungkan sub-array terurut.',
    topic: 'Algoritma Merge Sort'
  },
  {
    id: 'q_bk_24',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Dalam penelusuran struktur data Tree, istilah Depth (Kedalaman) dari sebuah simpul menyatakan...',
    options: [
      'Banyaknya langkah/garis cabang dari simpul Root menuju simpul tersebut.',
      'Jumlah anak (children) terbanyak yang dimiliki simpul tersebut.',
      'Ukuran memori RAM yang ditempati simpul dalam komputer.',
      'Nilai angka integer terbesar yang tersimpan pada simpul.'
    ],
    correctIndex: 0,
    explanation: 'Kedalaman (depth) suatu simpul adalah panjang lintasan (jumlah sisi) yang menghubungkan simpul akar (root) ke simpul tersebut.',
    topic: 'Properti Struktur Data Tree'
  },
  {
    id: 'q_bk_25',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Rani ingin merencanakan jadwal belajar 5 mata pelajaran dalam 1 minggu tanpa ada jadwal yang bertabrakan. Langkah berpikir komputasional yang paling awal harus dilakukan Rani adalah...',
    options: [
      'Mendekomposisi alokasi waktu luang yang tersedia setiap hari dan daftar materi yang harus dipelajari.',
      'Langsung membeli buku catatan baru di toko buku.',
      'Mengunduh aplikasi alarm tanpa memeriksa mata pelajaran.',
      'Mengacak nama pelajaran menggunakan koin.'
    ],
    correctIndex: 0,
    explanation: 'Langkah awal yang tepat adalah dekomposisi masalah kompleks menjadi elemen-elemen penyusun: ketersediaan waktu dan beban bab yang harus diselesaikan.',
    topic: 'Penerapan Berpikir Komputasional'
  },
  {
    id: 'q_bk_26',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Operasi menghapus atau mengeluarkan elemen data dari sebuah antrean (Queue) disebut...',
    options: [
      'Dequeue',
      'Enqueue',
      'Push',
      'Insert'
    ],
    correctIndex: 0,
    explanation: 'Pada Queue, penambahan data di ujung belakang disebut Enqueue, sedangkan penghapusan data di ujung depan disebut Dequeue.',
    topic: 'Operasi Queue'
  },
  {
    id: 'q_bk_27',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Sebuah graf di mana setiap sisi (edge) memiliki arah panah penunjuk satu arah disebut...',
    options: [
      'Directed Graph (Graf Berarah / Digraph)',
      'Undirected Graph (Graf Tak Berarah)',
      'Binary Tree',
      'Bipartite Graph'
    ],
    correctIndex: 0,
    explanation: 'Directed Graph (Digraph) memiliki garis sisi berpanah yang menunjukkan hubungan satu arah dari simpul asal ke simpul tujuan.',
    topic: 'Graf Berarah'
  },
  {
    id: 'q_bk_28',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Perhatikan ekspresi logika Boolean: (A AND B) OR (A AND (NOT B)). Menurut hukum distributif aljabar Boolean, bentuk sederhana dari ekspresi tersebut adalah...',
    options: [
      'A',
      'B',
      'A AND B',
      'TRUE'
    ],
    correctIndex: 0,
    explanation: '(A AND B) OR (A AND (NOT B)) = A AND (B OR NOT B). Karena (B OR NOT B) selalu bernilai TRUE (1), maka A AND 1 = A.',
    topic: 'Aljabar Boolean & Penyederhanaan'
  },
  {
    id: 'q_bk_29',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Jika kita mencari kata "Komputer" di dalam sebuah kamus cetak tebal bahasa Indonesia yang sudah tersusun rapi secara alfabetis, strategi pencarian yang paling efisien adalah...',
    options: [
      'Membuka kamus di halaman tengah (huruf K) lalu mempersempit pencarian ke kiri atau kanan (Binary Search).',
      'Membaca kata satu per satu mulai dari halaman pertama kata berawalan A (Linear Search).',
      'Membaca kamus mulai dari halaman paling belakang berawalan Z secara mundur.',
      'Memilih halaman secara acak hingga kata tersebut tidak sengaja terlihat.'
    ],
    correctIndex: 0,
    explanation: 'Membuka bagian tengah dan mengeliminasi separuh halaman secara berulang pada buku kamus terurut merupakan representasi intuitif Binary Search.',
    topic: 'Efisiensi Algoritma Pencarian'
  },
  {
    id: 'q_bk_30',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Dalam algoritma pengurutan, istilah "Ascending" berarti...',
    options: [
      'Mengurutkan data dari nilai terkecil ke nilai terbesar.',
      'Mengurutkan data dari nilai terbesar ke nilai terkecil.',
      'Mengacak urutan data secara acak.',
      'Menghapus data yang bernilai ganjil.'
    ],
    correctIndex: 0,
    explanation: 'Ascending bermakna urutan menaik (kecil ke besar), sedangkan Descending bermakna urutan menurun (besar ke kecil).',
    topic: 'Konsep Urutan Data'
  },
  {
    id: 'q_bk_31',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Struktur data pohon biner (Binary Tree) memiliki karakteristik khusus yaitu setiap simpul orang tua (parent) maksimal hanya boleh memiliki...',
    options: [
      '2 simpul anak (Left Child dan Right Child)',
      '3 simpul anak',
      '1 simpul anak',
      'Jumlah anak tak terbatas'
    ],
    correctIndex: 0,
    explanation: 'Binary Tree (Pohon Biner) membatasi derajat percabangan setiap simpul dengan maksimal 2 buah anak (kiri dan kanan).',
    topic: 'Binary Tree'
  },
  {
    id: 'q_bk_32',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Diberikan deret bilangan: 2, 4, 8, 16, 32, ... Jika kita menganalisis pola pembentukan deret tersebut menggunakan berpikir komputasional, formula aturan rekursif suku ke-n (Un) adalah...',
    options: [
      'Un = 2^n',
      'Un = 2 * n',
      'Un = n^2',
      'Un = 2 + (n - 1) * 4'
    ],
    correctIndex: 0,
    explanation: 'Suku 1 = 2^1 = 2; suku 2 = 2^2 = 4; suku 3 = 2^3 = 8; suku 4 = 2^4 = 16. Pola eksponensial basis 2 dirumuskan dengan Un = 2^n.',
    topic: 'Pengenalan Pola Bilangan'
  },
  {
    id: 'q_bk_33',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Pada struktur data Stack, kondisi "Stack Overflow" terjadi apabila sistem mencoba...',
    options: [
      'Melakukan operasi Push pada saat memori Stack sudah penuh terisi.',
      'Melakukan operasi Pop pada saat Stack dalam keadaan kosong.',
      'Mengubah nilai elemen puncak tanpa menghapusnya.',
      'Membaca nilai elemen terbawah secara langsung.'
    ],
    correctIndex: 0,
    explanation: 'Stack Overflow adalah galat kelebihan muatan ketika instruksi Push dijalankan pada memori alokasi tumpukan yang telah mencapai batas kapasitas maksimum.',
    topic: 'Galat Struktur Data'
  },
  {
    id: 'q_bk_34',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Kondisi saat sebuah antrean atau tumpukan kosong dicoba untuk diambil elemennya dinamakan...',
    options: [
      'Underflow',
      'Overflow',
      'Deadlock',
      'Infinite Loop'
    ],
    correctIndex: 0,
    explanation: 'Underflow terjadi ketika program mencoba menghapus data (Pop/Dequeue) dari struktur data yang sedang kosong melompong.',
    topic: 'Konsep Underflow'
  },
  {
    id: 'q_bk_35',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah sistem navigasi robot penyedot debu otomatis menggunakan representasi matriks 2D untuk memetakan ruangan. Angka 0 menyatakan lantai bersih, 1 menyatakan rintangan dinding, dan 2 menyatakan sampah. Penggunaan representasi matriks ini mencerminkan pilar...',
    options: [
      'Abstraksi dan Pemodelan Komputasi',
      'Dekomposisi Fisik Sensor',
      'Linear Searching',
      'Penyusunan User Interface'
    ],
    correctIndex: 0,
    explanation: 'Mengubah wujud fisik ruangan nyata menjadi angka kode pada matriks 2D adalah bentuk abstraksi dan pemodelan matematis agar dapat diproses oleh algoritma robot.',
    topic: 'Abstraksi & Pemodelan'
  },
  {
    id: 'q_bk_36',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Algoritma Quick Sort memilih sebuah elemen acak/tetap sebagai pembanding untuk memisahkan data menjadi elemen yang lebih kecil dan lebih besar. Elemen pembanding tersebut dinamakan...',
    options: [
      'Pivot',
      'Root',
      'Leaf',
      'Counter'
    ],
    correctIndex: 0,
    explanation: 'Pivot adalah elemen acuan pada algoritma Quick Sort yang digunakan untuk mempartisi array menjadi dua bagian.',
    topic: 'Algoritma Quick Sort'
  },
  {
    id: 'q_bk_37',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Simpul pada pohon (Tree) yang sama-sama berasal dari satu simpul induk (parent) yang sama disebut sebagai...',
    options: [
      'Sibling (Saudara)',
      'Ancestor (Leluhur)',
      'Descendant (Keturunan)',
      'Root (Akar)'
    ],
    correctIndex: 0,
    explanation: 'Dua atau lebih simpul yang memiliki parent yang identik disebut Sibling (saudara kandung).',
    topic: 'Relasi Node Tree'
  },
  {
    id: 'q_bk_38',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Jika ada 1000 data angka terurut, berapakah jumlah maksimal perbandingan yang dibutuhkan oleh algoritma Binary Search pada kasus terburuk (worst case)?',
    options: [
      '10 kali (karena 2^10 = 1024 > 1000)',
      '500 kali',
      '1000 kali',
      '100 kali'
    ],
    correctIndex: 0,
    explanation: 'Kompleksitas Binary Search adalah O(log2 N). Untuk N = 1000, log2(1000) ~ 9,96 sehingga maksimal dibutuhkan 10 kali pembagian/perbandingan.',
    topic: 'Kompleksitas Waktu Algoritma'
  },
  {
    id: 'q_bk_39',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Manakah gerbang logika yang menghasilkan output TRUE hanya ketika kedua nilai inputnya BERBEDA satu sama lain?',
    options: [
      'XOR (Exclusive OR)',
      'AND',
      'OR',
      'XNOR'
    ],
    correctIndex: 0,
    explanation: 'Gerbang XOR (Exclusive OR) menghasilkan output 1 jika satu input bernilai 1 dan input lain bernilai 0 (berbeda nilai).',
    topic: 'Gerbang Logika XOR'
  },
  {
    id: 'q_bk_40',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Instruksi langkah demi langkah yang terdefinisi dengan jelas dan logis untuk menyelesaikan suatu masalah tertentu disebut...',
    options: [
      'Algoritma',
      'Hardware',
      'Database',
      'Topologi'
    ],
    correctIndex: 0,
    explanation: 'Algoritma adalah urutan terstruktur logis dan berhingga dari langkah-langkah komputasi untuk mencapai tujuan atau solusi.',
    topic: 'Definisi Algoritma'
  },
  {
    id: 'q_bk_41',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Tiga buah pekerjaan A (butuh 2 menit), B (butuh 8 menit), dan C (butuh 4 menit) masuk bersamaan ke CPU. Jika sistem penjadwalan menggunakan algoritma Shortest Job First (SJF), bagaimanakah urutan eksekusinya untuk meminimalkan waktu tunggu rata-rata?',
    options: [
      'A -> C -> B',
      'B -> C -> A',
      'A -> B -> C',
      'C -> A -> B'
    ],
    correctIndex: 0,
    explanation: 'Shortest Job First mendahulukan pekerjaan dengan durasi tersingkat: A (2m), disusul C (4m), dan terakhir B (8m).',
    topic: 'Optimasi Penjadwalan SJF'
  },
  {
    id: 'q_bk_42',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Berapakah hasil desimal dari konversi bilangan biner 1101 (basis 2)?',
    options: [
      '13',
      '11',
      '15',
      '9'
    ],
    correctIndex: 0,
    explanation: '(1 * 2^3) + (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 8 + 4 + 0 + 1 = 13.',
    topic: 'Konversi Bilangan Biner'
  },
  {
    id: 'q_bk_43',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Sebuah struktur data linier yang menyusun elemen secara berurutan dengan alokasi indeks tetap yang berdekatan di memori disebut...',
    options: [
      'Array (Larik)',
      'Graf Tak Berarah',
      'Tree Hierarkis',
      'Peta Jaringan'
    ],
    correctIndex: 0,
    explanation: 'Array adalah struktur data dasar yang menyimpan sekumpulan elemen bertipe sama pada blok memori yang bersebelahan dan dapat diakses dengan indeks.',
    topic: 'Struktur Data Array'
  },
  {
    id: 'q_bk_44',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah teka-teki logika: "Katak melompat naik 3 meter pada siang hari dan merosot turun 2 meter pada malam hari dari sumur sedalam 10 meter." Pada hari ke berapakah katak tersebut berhasil keluar mencapai bibir sumur?',
    options: [
      'Hari ke-8',
      'Hari ke-10',
      'Hari ke-7',
      'Hari ke-9'
    ],
    correctIndex: 0,
    explanation: 'Setiap siklus 24 jam (siang+malam), katak naik bersih 1 meter. Di akhir hari ke-7 (pagi hari ke-8), posisi katak berada di ketinggian 7 meter. Pada siang hari ke-8, ia melompat 3 meter dan mencapai 10 meter (langsung keluar dari sumur sebelum malam merosot). Jadi katak keluar pada hari ke-8.',
    topic: 'Penalaran Komputasional & Simulasi'
  },
  {
    id: 'q_bk_45',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Pada flowchart standar, simbol belah ketupat (diamond) digunakan untuk melambangkan...',
    options: [
      'Keputusan / Percabangan Kondisional (Decision)',
      'Proses Perhitungan Aritmatika',
      'Input / Output Data',
      'Titik Awal / Akhir Program (Terminal)'
    ],
    correctIndex: 0,
    explanation: 'Simbol belah ketupat dalam diagram alir melambangkan Decision, yaitu titik pengambilan keputusan logis yang memiliki dua cabang keluaran (Yes/No atau True/False).',
    topic: 'Simbol Diagram Alir (Flowchart)'
  },
  {
    id: 'q_bk_46',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Representasi algoritma menggunakan bahasa manusia terstruktur yang menyerupai kode program namun tidak terikat sintaks kaku bahasa tertentu disebut...',
    options: [
      'Pseudocode',
      'Machine Code',
      'Binary Code',
      'Assembly'
    ],
    correctIndex: 0,
    explanation: 'Pseudocode adalah notasi deskriptif mirip kode pemrograman yang ditujukan agar mudah dibaca dan dipahami manusia sebelum dikonversi ke kode riil.',
    topic: 'Notasi Pseudocode'
  },
  {
    id: 'q_bk_47',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Sebuah graf merepresentasikan rute kurir antar 4 kota. Manakah kondisi yang membuktikan bahwa kurir dapat melalui setiap jalan tepat satu kali dan kembali ke kota asal (Siklus Euler / Eulerian Circuit)?',
    options: [
      'Setiap simpul pada graf memiliki derajat (degree) genap dan graf saling terhubung.',
      'Graf memiliki tepat dua simpul berderajat ganjil.',
      'Semua simpul memiliki tepat satu sisi keluar.',
      'Graf berbentuk pohon tanpa siklus tertutup.'
    ],
    correctIndex: 0,
    explanation: 'Teorema Euler menyatakan bahwa sebuah graf terhubung memiliki Sirkuit Euler jika dan hanya jika setiap simpulnya memiliki derajat genap.',
    topic: 'Teori Graf & Sirkuit Euler'
  },
  {
    id: 'q_bk_48',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'MotS',
    stem: 'Algoritma greedy memecahkan masalah optimasi dengan cara...',
    options: [
      'Mengambil pilihan terbaik secara lokal pada setiap langkah dengan harapan mencapai solusi optimal global.',
      'Mencoba seluruh kemungkinan kombinasi solusi satu per satu.',
      'Membagi data secara rekursif menjadi dua bagian.',
      'Mengacak urutan parameter solusi.'
    ],
    correctIndex: 0,
    explanation: 'Pendekatan Greedy membuat keputusan heuristik terbaik pada momen tersebut (locally optimal choice) di setiap tahapan pemecahan masalah.',
    topic: 'Strategi Algoritma Greedy'
  },
  {
    id: 'q_bk_49',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'LotS',
    stem: 'Simpul pada struktur data Tree yang tidak memiliki simpul anak sama sekali disebut simpul...',
    options: [
      'Leaf (Daun / Simpul Terminal)',
      'Root (Akar)',
      'Internal Node',
      'Parent'
    ],
    correctIndex: 0,
    explanation: 'Leaf node (daun) adalah simpul ujung pada struktur data Tree dengan derajat keluar nol (tidak mempunyai cabang anak).',
    topic: 'Struktur Data Tree Leaf'
  },
  {
    id: 'q_bk_50',
    element: 'BK',
    materi: 'Berpikir Komputasional',
    level: 'HoTS',
    stem: 'Manakah dari skenario komputasi berikut yang paling TEPAT diselesaikan dengan kombinasi pilar Dekomposisi dan Pengenalan Pola?',
    options: [
      'Membangun sistem pengenalan wajah biometrik dengan memecah citra wajah menjadi area mata/hidung/mulut lalu mencocokkan pola fitur pikselnya.',
      'Menekan tombol power untuk menyalakan monitor komputer.',
      'Menghapus satu berkas gambar dari folder unduhan.',
      'Mencetak naskah ujian dengan printer inkjet.'
    ],
    correctIndex: 0,
    explanation: 'Sistem pengenalan wajah memecah objek wajah menjadi bagian komponen (dekomposisi) lalu menganalisis kemiripan matematis bentuk/tekstur terhadap basis data (pengenalan pola).',
    topic: 'Integrasi Empat Pilar BK'
  }
];
