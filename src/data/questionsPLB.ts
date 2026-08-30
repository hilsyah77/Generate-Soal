import { Question } from '../types';

export const QUESTIONS_PLB: Question[] = [
  {
    id: 'q_plb_1',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Papan mikrokontroler sumber terbuka (open-source) populer berukuran saku yang sering digunakan dalam proyek Praktik Lintas Bidang (PLB) untuk mengontrol sensor, lampu LED, dan aktuator adalah...',
    options: [
      'Arduino Uno / ESP32',
      'Harddisk Eksternal',
      'Power Bank',
      'Switch LAN 24 Port'
    ],
    correctIndex: 0,
    explanation: 'Arduino Uno dan ESP32 adalah platform mikrokontroler prototyping fisik terpopuler untuk proyek robotika dan Internet of Things (IoT) di sekolah.',
    topic: 'Platform Mikrokontroler (Arduino & ESP32)'
  },
  {
    id: 'q_plb_2',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah kelompok siswa SMP merancang "Sistem Penyiraman Tanaman Pintar Otomatis". Komponen sensor yang bertugas mendeteksi tingkat kekeringan atau kebasahan tanah pot tanaman adalah...',
    options: [
      'Soil Moisture Sensor (Sensor Kelembapan Tanah)',
      'Ultrasonic Sensor',
      'LDR Light Sensor',
      'PIR Motion Sensor'
    ],
    correctIndex: 0,
    explanation: 'Sensor kelembapan tanah (Soil Moisture Sensor) mengukur konduktivitas listrik antar elektroda untuk mengetahui kadar air di dalam media tanah.',
    topic: 'Sensor Kelembapan Tanah pada Sistem Otomasi'
  },
  {
    id: 'q_plb_3',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Papan sirkuit berlubang tanpa solder yang digunakan untuk merangkai dan menguji kabel serta komponen elektronika sementara pada tahap prototyping dinamakan...',
    options: [
      'Breadboard (Project Board)',
      'Motherboard Komputer',
      'Keyboard Mekanikal',
      'Mousepad'
    ],
    correctIndex: 0,
    explanation: 'Breadboard memudahkan perakitan prototipe sirkuit elektronika cepat tanpa perlu menyolder kaki komponen secara permanen.',
    topic: 'Papan Uji Elektronika (Breadboard)'
  },
  {
    id: 'q_plb_4',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Komponen elektronika yang berfungsi sebagai sakelar otomatis yang digerakkan oleh sinyal mikrokontroler untuk mengalirkan daya listrik tegangan tinggi (seperti menyalakan pompa air 220V) dinamakan...',
    options: [
      'Modul Relay',
      'Resistor 220 Ohm',
      'Kapasitor Keramik',
      'Lampu LED Biru'
    ],
    correctIndex: 0,
    explanation: 'Relay bertindak sebagai sakelar elektromekanik/solid-state yang memisahkan rangkaian kendali tegangan rendah (5V Arduino) dengan beban listrik berdaya besar.',
    topic: 'Aktuator Sakelar Listrik (Relay Module)'
  },
  {
    id: 'q_plb_5',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Dalam proyek robot pendeteksi halangan (Obstacle Avoidance Robot), sensor ultrasonik HC-SR04 bekerja menghitung jarak rintangan di depannya dengan prinsip...',
    options: [
      'Memancarkan pulsa gelombang suara frekuensi tinggi lalu mengukur selisih waktu pantulan gema kembali (Echo Time) dibagi kecepatan suara.',
      'Memotret gambar rintangan dengan kamera lensa ganda.',
      'Membaca gelombang radio FM lokal.',
      'Mengukur suhu panas yang dipancarkan oleh objek.'
    ],
    correctIndex: 0,
    explanation: 'Sensor ultrasonik mengirim pulsa getaran bunyi ultrasonik (Trigger) dan mengukur waktu pantulan pantul (Echo) untuk menghitung jarak: Jarak = (Waktu x Kecepatan Suara) / 2.',
    topic: 'Prinsip Kerja Sensor Ultrasonik HC-SR04'
  },
  {
    id: 'q_plb_6',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Komponen sensor cahaya yang nilai resistansi (hambatan) listriknya akan berubah drastis sesuai intensitas cahaya yang mengenainya adalah...',
    options: [
      'LDR (Light Dependent Resistor)',
      'Potensiometer',
      'Buzzer Aktif',
      'Motor Servo'
    ],
    correctIndex: 0,
    explanation: 'LDR adalah fotoresistor yang nilai hambatannya mengecil saat terkena cahaya terang dan membesar saat kondisi gelap gulita.',
    topic: 'Sensor Cahaya (LDR)'
  },
  {
    id: 'q_plb_7',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Motor penggerak yang dapat berputar secara presisi pada sudut kemiringan tertentu (misalnya berputar tepat 0° sampai 180° untuk membuka tutup tong sampah pintar) disebut...',
    options: [
      'Motor Servo',
      'Motor DC Kipas Angin',
      'Generator Listrik',
      'Trafo Step Down'
    ],
    correctIndex: 0,
    explanation: 'Motor Servo dilengkapi rangkaian kendali feedback internal yang memungkinkan pemosisian sudut poros gerak secara presisi berdasarkan sinyal PWM.',
    topic: 'Aktuator Gerak Presisi (Motor Servo)'
  },
  {
    id: 'q_plb_8',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Dalam metodologi perancangan produk Design Thinking yang biasa diterapkan pada proyek Praktik Lintas Bidang, urutan 5 tahapan yang benar dan sistematis adalah...',
    options: [
      'Empathize (Empati) -> Define (Definisi Masalah) -> Ideate (Ide Solusi) -> Prototype (Purwarupa) -> Test (Uji Coba)',
      'Test -> Prototype -> Ideate -> Empathize -> Define',
      'Ideate -> Test -> Empathize -> Prototype -> Define',
      'Prototype -> Define -> Test -> Empathize -> Ideate'
    ],
    correctIndex: 0,
    explanation: 'Design Thinking diawali memahami kebutuhan pengguna (Empathize), merumuskan masalah spesifik (Define), mencetuskan ragam ide (Ideate), membuat model fisik/digital (Prototype), dan validasi pengguna (Test).',
    topic: 'Metodologi Design Thinking Proyek PLB'
  },
  {
    id: 'q_plb_9',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Komponen elektronika dasar yang berfungsi membatasi dan menghambat arus listrik agar lampu LED tidak rusak/terbakar akibat arus berlebih adalah...',
    options: [
      'Resistor',
      'Transistor',
      'Kapasitor',
      'Dioda Zenner'
    ],
    correctIndex: 0,
    explanation: 'Resistor pembatas arus (current-limiting resistor) dipasang seri dengan LED untuk melindungi LED dari arus listrik berlebih.',
    topic: 'Komponen Elektronika Dasar (Resistor)'
  },
  {
    id: 'q_plb_10',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Sensor PIR (Passive Infrared Sensor) pada proyek sistem alarm keamanan rumah cerdas berfungsi untuk...',
    options: [
      'Mendeteksi keberadaan pergerakan manusia atau hewan berdasarkan pancaran radiasi gelombang panas inframerah tubuh.',
      'Mengukur kadar kelembapan udara ruangan.',
      'Merekam suara obrolan orang.',
      'Menghitung jumlah daya listrik token PLN.'
    ],
    correctIndex: 0,
    explanation: 'Sensor PIR mendeteksi perubahan radiasi energi termal inframerah yang dipancarkan oleh objek hangat yang bergerak di zona pemantauannya.',
    topic: 'Sensor Gerak Inframerah Pasif (PIR)'
  },
  {
    id: 'q_plb_11',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah tim siswa merancang "Tempat Sampah Otomatis Higienis". Ketika tangan didekatkan pada jarak < 15 cm di atas tutup sampah, motor servo akan membuka penutupnya selama 5 detik lalu menutup kembali. Alur logika algoritma kendali yang benar adalah...',
    options: [
      'Baca jarak sensor ultrasonik; Jika jarak < 15 cm, maka putar servo 90°, beri jeda waktu (delay 5 detik), lalu putar kembali servo ke posisi 0°.',
      'Putar servo terus-menerus tanpa henti tanpa memeriksa sensor ultrasonik.',
      'Matikan daya listrik saat tangan mendekat.',
      'Jika jarak > 50 cm, bunyikan alarm sirine darurat.'
    ],
    correctIndex: 0,
    explanation: 'Algoritma membaca masukan sensor ultrasonik, mengevaluasi kondisi batas (< 15 cm), memicu aktuator servo buka, menunggu delay 5000 ms, lalu mengembalikan servo ke posisi tutup.',
    topic: 'Perancangan Logika Otomasi Prototipe'
  },
  {
    id: 'q_plb_12',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Komponen elektronika penghasil bunyi getaran nada (suara tit-tit atau alarm) pada rangkaian mikrokontroler adalah...',
    options: [
      'Buzzer (Piezo Buzzer)',
      'Sensor Suhu DHT11',
      'Kabel Jumper',
      'LED RGB'
    ],
    correctIndex: 0,
    explanation: 'Piezo Buzzer adalah transduser audio elektronik yang menghasilkan gelombang suara peringatan/nada.',
    topic: 'Aktuator Suara (Buzzer)'
  },
  {
    id: 'q_plb_13',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Jenis kabel berpenghubung jarum pin yang digunakan untuk menghubungkan kaki-kaki komponen elektronika di breadboard ke pin Arduino dinamakan...',
    options: [
      'Kabel Jumper (Male-to-Male / Male-to-Female)',
      'Kabel Fiber Optik Bawah Laut',
      'Kabel Antena Televisi Coaxial',
      'Kabel Listrik Rumah 3 Phase'
    ],
    correctIndex: 0,
    explanation: 'Kabel Jumper DuPont dengan variasi colokan jarum (male) dan lubang (female) memudahkan konektivitas pin sirkuit.',
    topic: 'Kabel Konektor Jumper Prototyping'
  },
  {
    id: 'q_plb_14',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sensor DHT11/DHT22 yang dipasang pada stasiun pemantau cuaca mini di sekolah memiliki fungsi ganda yaitu mengukur...',
    options: [
      'Suhu lingkungan sekitar (Celcius) dan kelembapan relatif udara sekitar (persen RH).',
      'Tingkat kejernihan air sungai dan berat ikan.',
      'Kecepatan laju sepeda motor.',
      'Jumlah polusi debu dan radiasi matahari.'
    ],
    correctIndex: 0,
    explanation: 'DHT11/DHT22 adalah modul sensor terpadu digital yang mengukur temperatur udara dan tingkat kelembapan lingkungan secara simultan.',
    topic: 'Sensor Suhu dan Kelembapan Udara (DHT11)'
  },
  {
    id: 'q_plb_15',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Situs web/platform simulator sirkuit mikrokontroler dan perakitan elektronika online interaktif gratis buatan Autodesk yang populer digunakan di sekolah adalah...',
    options: [
      'Tinkercad Circuits',
      'Photoshop Online',
      'Google Maps',
      'Wikipedia'
    ],
    correctIndex: 0,
    explanation: 'Tinkercad Circuits menyediakan simulator visual papan Arduino, sensor, dan blok pemrograman sirkuit virtual secara real-time.',
    topic: 'Simulasi Sirkuit Virtual (Tinkercad)'
  },
  {
    id: 'q_plb_16',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Pin Analog pada papan Arduino (A0, A1, dst.) berfungsi khusus untuk...',
    options: [
      'Membaca sinyal tegangan yang berubah-ubah secara kontinu (0 hingga 5 Volt) dan mengubahnya menjadi nilai digital rentang 0 sampai 1023.',
      'Menyalakan lampu hanya dalam kondisi mati atau hidup saja.',
      'Mengisi daya baterai laptop.',
      'Menghubungkan kabel internet LAN.'
    ],
    correctIndex: 0,
    explanation: 'Pin Analog memanfaatkan konverter ADC (Analog to Digital Converter) 10-bit internal untuk membaca nilai tegangan sensor yang bervariasi kontinu.',
    topic: 'Pin Masukan Analog (ADC Arduino)'
  },
  {
    id: 'q_plb_17',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Dalam pembuatan aplikasi mobile kontrol lampu IoT menggunakan MIT App Inventor, komponen yang bertugas menjalin komunikasi pertukaran data secara nirkabel antara HP Android dan mikrokontroler adalah...',
    options: [
      'Komponen BluetoothClient atau Web (HTTP Request)',
      'Komponen Canvas Drawing',
      'Komponen Sound Recorder',
      'Komponen Accelerometer'
    ],
    correctIndex: 0,
    explanation: 'Komponen BluetoothClient atau Web API di MIT App Inventor mengirimkan paket data serial/HTTP ke modul ESP32/HC-05.',
    topic: 'Pengembangan Aplikasi Mobile IoT (App Inventor)'
  },
  {
    id: 'q_plb_18',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Dua blok fungsi utama yang wajib ada dalam penulisan program (sketch) Arduino berbasis teks adalah...',
    options: [
      'void setup() dan void loop()',
      'void start() dan void end()',
      'void input() dan void output()',
      'void run() dan void stop()'
    ],
    correctIndex: 0,
    explanation: 'Fungsi setup() dieksekusi tepat satu kali saat dinyalakan untuk inisialisasi pin, dan loop() dijalankan berulang-ulang tanpa henti.',
    topic: 'Struktur Dasar Program Arduino (Setup & Loop)'
  },
  {
    id: 'q_plb_19',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Lampu LED memiliki dua buah kaki kutub elektroda. Kaki yang lebih panjang merupakan kutub positif yang dinamakan...',
    options: [
      'Anoda (Kutub Positif)',
      'Katoda (Kutub Negatif)',
      'Ground',
      'Kolektor'
    ],
    correctIndex: 0,
    explanation: 'Anoda adalah kutub positif (kaki lebih panjang), sedangkan Katoda adalah kutub negatif (kaki lebih pendek dan sisi pipih).',
    topic: 'Polaritas Komponen LED'
  },
  {
    id: 'q_plb_20',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Saat mengunggah (upload) kode program dari Arduino IDE ke papan mikrokontroler, muncul pesan galat "avrdude: ser_open(): can\'t open device COM3: Access is denied / Port not found". Langkah perbaikan yang paling tepat adalah...',
    options: [
      'Memeriksa kabel USB dan memastikan pemilihan nomor port COM serta tipe Board yang benar pada menu Tools di Arduino IDE.',
      'Membakar papan Arduino dengan solder.',
      'Menghapus seluruh file Windows di laptop.',
      'Mengganti lampu LED dengan resistor baru.'
    ],
    correctIndex: 0,
    explanation: 'Pesan galat port komunikasi menandakan Arduino IDE belum terhubung ke port serial COM yang aktif dari driver USB-Serial mikrokontroler.',
    topic: 'Troubleshooting Unggah Program Arduino'
  },
  {
    id: 'q_plb_21',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Pin catu daya tegangan nol (0 Volt / kutub negatif rangkaian) pada papan Arduino diberi label tulisan...',
    options: [
      'GND (Ground)',
      '5V',
      '3.3V',
      'VIN'
    ],
    correctIndex: 0,
    explanation: 'GND (Ground) adalah titik referensi tegangan netral / 0 Volt penutup siklus arus listrik.',
    topic: 'Pin Referensi Daya Ground (GND)'
  },
  {
    id: 'q_plb_22',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Fungsi dari modul layar LCD 16x2 atau OLED 0.96 inci yang dihubungkan ke mikrokontroler adalah...',
    options: [
      'Menampilkan teks angka pembacaan sensor cuaca atau status sistem secara langsung di perangkat alat fisik.',
      'Mengalirkan daya listrik 220 Volt.',
      'Memutar roda robot.',
      'Menghasilkan bunyi sirene.'
    ],
    correctIndex: 0,
    explanation: 'Layar LCD 16x2 / OLED bertindak sebagai antarmuka visual keluaran data (Human-Machine Interface) portabel bagi pengguna alat.',
    topic: 'Modul Tampilan Antarmuka Visual (LCD/OLED)'
  },
  {
    id: 'q_plb_23',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah proyek tim "Smart Lampu Jalanan Otomatis" menggunakan sensor LDR. Ketika malam tiba dan lingkungan gelap, nilai resistansi LDR meningkat dan pembacaan sensor menjadi rendah. Logika program yang tepat untuk menyalakan lampu adalah...',
    options: [
      'Jika nilai_cahaya < ambang_batas_gelap, maka atur pin_lampu ke HIGH (menyala); jika tidak, atur pin_lampu ke LOW (mati).',
      'Jika nilai_cahaya > 1000, maka matikan daya Arduino seketika.',
      'Nyalakan lampu hanya pada pukul 12 siang saat matahari terik.',
      'Nyalakan buzzer alarm setiap kali ada cahaya terang.'
    ],
    correctIndex: 0,
    explanation: 'Sensor LDR mendeteksi penurunan intensitas cahaya malam. Ketika nilai bacaan turun di bawah ambang batas (threshold), kontroler mengirim perintah digital HIGH untuk menyalakan relay/LED lampu.',
    topic: 'Logika Sistem Penerangan Otomatis LDR'
  },
  {
    id: 'q_plb_24',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Perintah pada kode program Arduino yang digunakan untuk menyetel fungsi sebuah pin apakah bertindak sebagai masukan sinyal atau keluaran tegangan adalah...',
    options: [
      'pinMode(pin, OUTPUT/INPUT)',
      'digitalWrite()',
      'analogRead()',
      'delay()'
    ],
    correctIndex: 0,
    explanation: 'pinMode() menetapkan arah operasional jalur pin mikrokontroler sebagai INPUT (menerima sinyal) atau OUTPUT (mengirim sinyal).',
    topic: 'Konfigurasi Jalur I/O (pinMode)'
  },
  {
    id: 'q_plb_25',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Fungsi `delay(1000)` pada baris program Arduino menyebabkan eksekusi program berhenti sementara (jeda) selama...',
    options: [
      '1 detik (1000 milidetik)',
      '10 detik',
      '1 menit',
      '100 detik'
    ],
    correctIndex: 0,
    explanation: 'Parameter fungsi delay() dihitung dalam satuan milidetik (millisecond), di mana 1000 ms setara dengan 1 detik waktu nyata.',
    topic: 'Fungsi Jeda Waktu (delay)'
  },
  {
    id: 'q_plb_26',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Konsep "Internet of Things" (IoT) dalam proyek Praktik Lintas Bidang memungkinkan benda-benda fisik di sekitar kita untuk...',
    options: [
      'Mengumpulkan data melalui sensor dan mengirimkannya ke server internet/cloud atau smartphone pengguna secara real-time untuk pemantauan dan pengendalian jarak jauh.',
      'Mengubah wujud benda menjadi udara transparan.',
      'Menghilangkan kebutuhan kabel listrik di seluruh dunia secara instan.',
      'Berbicara bahasa manusia tanpa listrik.'
    ],
    correctIndex: 0,
    explanation: 'IoT menghubungkan entitas fisik berkemampuan komputasi ke jaringan internet untuk telemetri data sensor dan remote control.',
    topic: 'Fondasi Konseptual Internet of Things (IoT)'
  },
  {
    id: 'q_plb_27',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Fitur "Serial Monitor" pada software Arduino IDE digunakan oleh programmer pemula untuk...',
    options: [
      'Melihat teks kiriman data sensor atau pesan debug dari papan Arduino ke layar laptop secara real-time.',
      'Memutar rekaman video YouTube.',
      'Mencetak tulisan ke kertas printer warna.',
      'Menggambar denah rumah.'
    ],
    correctIndex: 0,
    explanation: 'Serial Monitor menerima dan menampilkan aliran data komunikasi serial dua arah (UART) antara board dan komputer.',
    topic: 'Jendela Debugging (Serial Monitor)'
  },
  {
    id: 'q_plb_28',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Protokol komunikasi serial 2 kawat (SDA dan SCL) yang sangat efisien digunakan untuk menghubungkan modul sensor dan layar LCD ke Arduino tanpa menghabiskan banyak kabel pin adalah...',
    options: [
      'I2C (Inter-Integrated Circuit)',
      'VGA Analog',
      'Parallel LPT',
      'RCA Video'
    ],
    correctIndex: 0,
    explanation: 'Protokol I2C hanya memerlukan 2 pin data (SDA untuk Data dan SCL untuk Clock) untuk mengontrol banyak modul periferal sekaligus menggunakan alamat bus unik.',
    topic: 'Protokol Komunikasi Bus I2C'
  },
  {
    id: 'q_plb_29',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Dalam pengerjaan proyek kelompok PLB Informatika, pembagian peran kerja tim yang baik mencakup peran-peran berikut, KECUALI...',
    options: [
      'Satu orang anggota tim mengerjakan semua tugas (desain, coding, perakitan sirkuit, dan presentasi) sendirian sementara anggota lain bermain game di sudut kelas.',
      'Project Manager (Koordinator yang mengatur jadwal dan target)',
      'Hardware/Circuit Engineer (Perakit rangkaian elektronika dan sensor)',
      'Software Developer (Pemrogram logika kode algoritma)'
    ],
    correctIndex: 0,
    explanation: 'Kolaborasi efektif menuntut pembagian peran yang adil, komunikasi terbuka, dan akuntabilitas bersama antar seluruh anggota tim proyek.',
    topic: 'Manajemen Kolaborasi Tim Proyek'
  },
  {
    id: 'q_plb_30',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Papan mikrokontroler ESP32 memiliki keunggulan utama dibanding Arduino Uno klasik karena sudah dilengkapi modul internal bawaan berupa...',
    options: [
      'Konektivitas nirkabel Wi-Fi dan Bluetooth terintegrasi',
      'Layar televisi layar lebar',
      'Printer thermal kasir',
      'Kamera optik mikroskopis'
    ],
    correctIndex: 0,
    explanation: 'Chip SoC ESP32 memiliki kemampuan Wi-Fi 802.11 b/g/n dan Bluetooth 4.2 bawaan pada keping silikonnya, sangat bertenaga untuk proyek IoT.',
    topic: 'Mikrokontroler IoT Nirkabel (ESP32)'
  },
  {
    id: 'q_plb_31',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Modul sensor gas MQ-2 pada proyek sistem peringatan dini keselamatan kebakaran rumah berguna untuk...',
    options: [
      'Mendeteksi kebocoran gas elpiji (LPG), propana, metana, dan asap pekat di udara.',
      'Mengukur ketinggian air laut.',
      'Menghitung jumlah kendaraan lewat.',
      'Mematikan lampu kamar tidur.'
    ],
    correctIndex: 0,
    explanation: 'Sensor MQ-2 mendeteksi senyawa gas yang mudah terbakar (flammable gas) dan konsentrasi asap di udara.',
    topic: 'Sensor Gas & Asap (MQ-2)'
  },
  {
    id: 'q_plb_32',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah lampu indikator terhubung ke Pin Digital 13 Arduino. Kode program yang benar untuk membuat lampu tersebut berkedip-kedip (berkedip setiap 1 detik) adalah...',
    options: [
      'digitalWrite(13, HIGH); delay(1000); digitalWrite(13, LOW); delay(1000);',
      'digitalWrite(13, HIGH); delay(1000); digitalWrite(13, HIGH);',
      'digitalRead(13); delay(1000);',
      'pinMode(13, INPUT); delay(1000);'
    ],
    correctIndex: 0,
    explanation: 'Siklus Blink baku: Nyalakan LED (HIGH), tunggu 1 detik (1000ms), Matikan LED (LOW), tunggu 1 detik (1000ms). Siklus ini diulang terus di dalam fungsi loop().',
    topic: 'Algoritma Kedip Lampu (Blink LED)'
  },
  {
    id: 'q_plb_33',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Kecepatan standar komunikasi data serial baud rate yang paling umum digunakan pada inisialisasi `Serial.begin(...)` di Arduino adalah...',
    options: [
      '9600 bps',
      '10 bps',
      '1.000.000 bps',
      '12 bps'
    ],
    correctIndex: 0,
    explanation: '9600 baud rate adalah kecepatan standar frekuensi pertukaran karakter bit per detik antara mikrokontroler dan komputer.',
    topic: 'Inisialisasi Serial Baud Rate'
  },
  {
    id: 'q_plb_34',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Sensor hujan (Raindrop Sensor) pada sistem penjemur pakaian otomatis bekerja dengan cara mendeteksi...',
    options: [
      'Tetesan butiran air yang mengenai papan strip konduktor tembaga sehingga mengubah hambatan listrik.',
      'Suhu panas matahari yang menyengat.',
      'Kecepatan angin badai.',
      'Bayangan awan hitam di langit.'
    ],
    correctIndex: 0,
    explanation: 'Jalur konduktor sejajar pada sensor hujan mengalami jembatan arus ketika terkena tetesan air hujan yang bersifat konduktif.',
    topic: 'Sensor Tetesan Hujan (Rain Sensor)'
  },
  {
    id: 'q_plb_35',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Perbedaan mendasar antara "Sensor" dan "Aktuator" dalam sebuah ekosistem sistem tertanam (Embedded System) adalah...',
    options: [
      'Sensor bertindak sebagai indra masukan (input) yang mengumpulkan data kondisi lingkungan fisik, sedangkan Aktuator bertindak sebagai otot keluaran (output) yang melakukan aksi fisik nyata.',
      'Sensor selalu mengeluarkan suara sirene, sedangkan aktuator selalu berwarna hijau.',
      'Sensor hanya bekerja tanpa listrik, sedangkan aktuator membutuhkan bensin.',
      'Tidak ada perbedaan, keduanya sama persis.'
    ],
    correctIndex: 0,
    explanation: 'Sensor mengonversi fenomena fisika/kimia menjadi sinyal listrik (Input), sedangkan Aktuator mengubah sinyal perintah listrik menjadi aksi gerak/mekanik (Output).',
    topic: 'Sensor (Input) vs Aktuator (Output)'
  },
  {
    id: 'q_plb_36',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Simbol garis panjang bertingkat yang semakin mengecil ke bawah pada diagram skematik rangkaian elektronika melambangkan sambungan ke...',
    options: [
      'GND (Ground / Arde)',
      'Sumber Baterai Positif',
      'Lampu Bohlam',
      'Sakelar Tombol'
    ],
    correctIndex: 0,
    explanation: 'Simbol garis horisontal bertingkat mengecil adalah lambang internasional untuk titik Ground/Massa.',
    topic: 'Simbol Skematik Elektronika (Ground)'
  },
  {
    id: 'q_plb_37',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Sakelar tombol tekan sesaat (Push Button) yang digunakan untuk input interaktif pada rangkaian mikrokontroler memerlukan komponen "Resistor Pull-Down / Pull-Up" yang bertujuan untuk...',
    options: [
      'Memastikan status logika pin digital tetap stabil (pasti HIGH atau pasti LOW) dan mencegah kondisi mengambang (floating pin) yang menyebabkan pembacaan acak.',
      'Mengurangi suhu prosesor komputer.',
      'Membuat tombol bersuara keras.',
      'Menghapus kode program secara otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Resistor Pull-Up/Pull-Down mengunci tegangan referensi pin digital saat tombol tidak ditekan, mencegah status mengambang (floating state).',
    topic: 'Resistor Pull-Up / Pull-Down Tombol'
  },
  {
    id: 'q_plb_38',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah tim siswa merancang robot pengikut garis (Line Follower Robot). Komponen sensor yang paling tepat dipasang di bagian bawah moncong robot untuk membedakan garis hitam pekat di atas lantai putih adalah...',
    options: [
      'Sensor Garis Inframerah (Infrared Line Tracking Sensor / TCRT5000)',
      'Sensor Suhu DHT11',
      'Sensor Sentuh Kapasitif',
      'Modul GPS Satelit'
    ],
    correctIndex: 0,
    explanation: 'Sensor TCRT5000 memancarkan sinar inframerah. Warna putih memantulkan sinar IR kembali ke fototransistor, sedangkan warna hitam menyerap sinar IR.',
    topic: 'Sensor Pelacak Garis Inframerah'
  },
  {
    id: 'q_plb_39',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Tegangan operasional standar suplai daya logika yang dikeluarkan oleh pin daya utama papan Arduino Uno adalah...',
    options: [
      '5 Volt DC',
      '220 Volt AC',
      '110 Volt AC',
      '50 Volt DC'
    ],
    correctIndex: 0,
    explanation: 'Arduino Uno beroperasi pada level logika daya teregulasi 5 Volt DC (Direct Current).',
    topic: 'Tegangan Kerja Mikrokontroler (5V DC)'
  },
  {
    id: 'q_plb_40',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Platform IoT Cloud gratis yang sering digunakan siswa untuk menampilkan dasbor visual grafik pemantauan data sensor di web dan smartphone adalah...',
    options: [
      'Blynk / Thingspeak / Arduino Cloud',
      'Microsoft Paint',
      'Notepad Windows',
      'VLC Media Player'
    ],
    correctIndex: 0,
    explanation: 'Blynk dan ThingSpeak adalah platform platform-as-a-service IoT terkemuka untuk visualisasi widget dan telemetri data nirkabel.',
    topic: 'Platform Dasbor IoT Cloud (Blynk / ThingSpeak)'
  },
  {
    id: 'q_plb_41',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Saat merakit sistem sensor pencuci tangan otomatis (Automatic Hand Sanitizer), komponen manakah yang paling tepat disusun secara berurutan membentuk alur input-proses-output?',
    options: [
      'Sensor Jarak Ultrasonik (Input) -> Arduino Nano (Proses) -> Pompa Air Mini / Motor Servo (Output)',
      'Lampu LED (Input) -> Resistor (Proses) -> Breadboard (Output)',
      'Baterai (Input) -> Kabel Jumper (Proses) -> Colokan USB (Output)',
      'Motor Pompa (Input) -> Sensor Ultrasonik (Proses) -> Tombol (Output)'
    ],
    correctIndex: 0,
    explanation: 'Arsitektur sistem otomatis: Sensor (Input) mendeteksi kehadiran tangan -> Kontroler memproses logika jarak threshold -> Pompa/Servo (Output) mengalirkan cairan pembersih.',
    topic: 'Arsitektur Sistem Input-Proses-Output'
  },
  {
    id: 'q_plb_42',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Alat ukur elektronik multifungsi yang digunakan untuk mengukur nilai tegangan listrik (Volt), hambatan (Ohm), dan kontinuitas kabel adalah...',
    options: [
      'Multimeter (Avometer)',
      'Termometer Ruangan',
      'Speedometer',
      'Barometer'
    ],
    correctIndex: 0,
    explanation: 'Multimeter / AVO-meter (Ampere-Volt-Ohm) adalah perkakas pengujian listrik paling krusial dalam perakitan elektronika.',
    topic: 'Alat Ukur Elektronika (Multimeter)'
  },
  {
    id: 'q_plb_43',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Teknik modulasi PWM (Pulse Width Modulation) pada pin Arduino bertanda tilde (~) digunakan untuk...',
    options: [
      'Mengatur tingkat kecerahan lampu LED atau mengatur kecepatan putaran motor DC dengan memvariasikan lebar pulsa sinyal digital.',
      'Memutus aliran listrik secara permanen.',
      'Mengukur suhu di dalam tanah.',
      'Mengubah font teks naskah.'
    ],
    correctIndex: 0,
    explanation: 'PWM meniru sinyal output analog semu dengan mengubah rasio duty cycle pulsa digital on/off berkecepatan tinggi.',
    topic: 'Teknik Modulasi Lebar Pulsa (PWM)'
  },
  {
    id: 'q_plb_44',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Mengapa tahap "Pengujian dan Validasi Pengguna" (User Testing) sangat krusial dilakukan sebelum laporan akhir proyek PLB diselesaikan?',
    options: [
      'Untuk mengidentifikasi kekurangan atau kegagalan fungsi alat saat digunakan di kondisi nyata oleh pengguna sasaran serta memperoleh umpan balik untuk perbaikan.',
      'Hanya untuk menghabiskan sisa anggaran belanja bahan.',
      'Agar prototipe terlihat kotor dan tampak sering dipakai.',
      'Menghindari keharusan membuat poster presentasi.'
    ],
    correctIndex: 0,
    explanation: 'User testing memvalidasi efektivitas solusi, membuktikan keandalan sistem dalam skenario dunia nyata, dan mengumpulkan data evaluatif untuk penyempurnaan desain.',
    topic: 'Evaluasi & Pengujian Solusi Desain'
  },
  {
    id: 'q_plb_45',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Perangkat modul kamera saku nirkabel berukuran mini yang berbasis ESP32 dan dapat digunakan untuk transmisi streaming video nirkabel adalah...',
    options: [
      'ESP32-CAM',
      'Arduino Mega',
      'Raspberry Pi Pico',
      'Relay 1 Channel'
    ],
    correctIndex: 0,
    explanation: 'ESP32-CAM adalah modul mikrokontroler murah terintegrasi modul kamera OV2640 dan slot MicroSD untuk proyek IoT visual.',
    topic: 'Modul Mikrokontroler Kamera (ESP32-CAM)'
  },
  {
    id: 'q_plb_46',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Fungsi dari baterai isi ulang 18650 Li-ion pada proyek robotika berjalan mandiri (mobile robot) adalah...',
    options: [
      'Sebagai sumber energi catu daya portabel mandiri agar robot dapat bergerak bebas tanpa terikat kabel colokan dinding PLN.',
      'Menyimpan file foto galeri.',
      'Memadamkan api motor servo.',
      'Mendinginkan suhu ban robot.'
    ],
    correctIndex: 0,
    explanation: 'Baterai lithium-ion 18650 memasok arus tinggi tegangan portabel (3.7V - 7.4V) untuk mobilitas robot tanpa kabel stasioner.',
    topic: 'Sumber Daya Portabel Robotika'
  },
  {
    id: 'q_plb_47',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Sebuah proyek tim mengembangkan "Aplikasi Edukasi Kuis Kebudayaan Nusantara" menggunakan platform pemrograman visual MIT App Inventor. Struktur rancangan aplikasi yang baik terdiri dari...',
    options: [
      'Antarmuka Pengguna (Designer UI yang menarik dan ramah pengguna) serta Logika Blok Program (Blocks Code yang menangani skor, navigasi pertanyaan, dan basis data soal).',
      'Hanya gambar statis tanpa ada tombol yang dapat diklik.',
      'Rangkaian kabel listrik tegangan 220V yang dihubungkan ke smartphone.',
      'Solder timah yang ditempelkan pada layar sentuh.'
    ],
    correctIndex: 0,
    explanation: 'MIT App Inventor memisahkan perancangan UI (Designer View) dan rekayasa interaksi berbasis logika blok event-driven (Blocks Editor).',
    topic: 'Struktur Desain dan Logika Aplikasi Mobile'
  },
  {
    id: 'q_plb_48',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'LotS',
    stem: 'Format media presentasi ringkas berupa selembar karya visual grafis berukuran besar (misal A1/A2) yang memuat judul, latar belakang masalah, foto alat prototipe, cara kerja, dan kesimpulan proyek disebut...',
    options: [
      'Poster Ilmiah / Poster Proyek',
      'Buku Panduan 500 Halaman',
      'Surat Kuitansi Belanja',
      'Kliping Koran Kuno'
    ],
    correctIndex: 0,
    explanation: 'Poster Ilmiah menyajikan intisari riset/rekayasa teknologi secara visual, padat, dan komunikatif untuk pameran sains.',
    topic: 'Dokumentasi & Poster Ilmiah Proyek PLB'
  },
  {
    id: 'q_plb_49',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'MotS',
    stem: 'Tahap "Refleksi dan Evaluasi Diri" pada akhir kegiatan Praktik Lintas Bidang bertujuan untuk...',
    options: [
      'Mengevaluasi capaian kinerja tim, mengidentifikasi tantangan dan kendala yang dihadapi selama perakitan, serta memetik pelajaran bermakna untuk proyek di masa depan.',
      'Saling menyalahkan dan membuang alat prototipe.',
      'Menghapus semua file presentasi agar tidak bisa dibuka lagi.',
      'Menghentikan proses belajar selamanya.'
    ],
    correctIndex: 0,
    explanation: 'Refleksi pasca proyek mengasah kemampuan metakognisi, mengevaluasi proses pemecahan masalah teknis, dan memperkuat soft skill kerja sama.',
    topic: 'Refleksi & Evaluasi Proyek Rekayasa'
  },
  {
    id: 'q_plb_50',
    element: 'PLB',
    materi: 'Praktik Lintas Bidang',
    level: 'HoTS',
    stem: 'Manakah dari skenario integrasi lintas disiplin berikut yang paling menggambarkan esensi sejati dari pembelajaran "Praktik Lintas Bidang (PLB)" Informatika di sekolah?',
    options: [
      'Memadukan keahlian coding mikrokontroler informatika dengan ilmu biologi/pertanian (kadar air tanah) dan rekayasa mekanik untuk membangun alat penyiram hidroponik otomatis ramah lingkungan.',
      'Mengetik ulang teks puisi karya sastra menggunakan aplikasi Word tanpa menggunakan komputer lain.',
      'Menghafal nama-nama komponen komputer tanpa pernah merakit atau memprogramnya sama sekali.',
      'Menonton video dokumenter luar angkasa selama 5 jam tanpa praktik.'
    ],
    correctIndex: 0,
    explanation: 'Praktik Lintas Bidang mengintegrasikan pemikiran komputasional dan teknologi informatika dengan domain sains lain (pertanian, ekologi, sosial) untuk memecahkan problem nyata masyarakat.',
    topic: 'Integrasi Interdisipliner Praktik Lintas Bidang'
  }
];
