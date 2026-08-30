import { Question } from '../types';

export const QUESTIONS_JKI: Question[] = [
  {
    id: 'q_jki_1',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Topologi jaringan fisik di mana setiap komputer klien terhubung secara langsung ke satu perangkat konsentrator pusat (seperti Switch atau Hub) dinamakan...',
    options: [
      'Topologi Star (Bintang)',
      'Topologi Bus',
      'Topologi Ring (Cincin)',
      'Topologi Mesh (Jala)'
    ],
    correctIndex: 0,
    explanation: 'Pada Topologi Star, seluruh node komputer terhubung ke titik pusat (Switch/Hub). Jika salah satu kabel klien putus, jaringan komputer lain tetap berfungsi normal.',
    topic: 'Topologi Jaringan Star'
  },
  {
    id: 'q_jki_2',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Sebuah laboratorium komputer sekolah memiliki 30 unit PC yang saling terhubung dalam satu ruangan laboratorium tanpa perantara internet luar. Jaringan komputer lokal berskala ruangan tersebut diklasifikasikan sebagai...',
    options: [
      'LAN (Local Area Network)',
      'WAN (Wide Area Network)',
      'MAN (Metropolitan Area Network)',
      'PAN (Personal Area Network)'
    ],
    correctIndex: 0,
    explanation: 'LAN mencakup area geografis terbatas seperti satu ruangan lab, gedung sekolah, atau kantor.',
    topic: 'Klasifikasi Geografis Jaringan (LAN)'
  },
  {
    id: 'q_jki_3',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Layanan server di jaringan internet yang bertugas menerjemahkan nama domain yang mudah dibaca manusia (seperti www.kemdikbud.go.id) menjadi alamat IP numerik komputer (misal 118.98.228.66) adalah...',
    options: [
      'DNS (Domain Name System)',
      'DHCP (Dynamic Host Configuration Protocol)',
      'FTP (File Transfer Protocol)',
      'SMTP (Simple Mail Transfer Protocol)'
    ],
    correctIndex: 0,
    explanation: 'DNS berfungsi seperti "buku telepon internet" yang memetakan nama domain ramah manusia ke alamat IP perangkat server.',
    topic: 'Layanan Domain Name System (DNS)'
  },
  {
    id: 'q_jki_4',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Panjang alamat IP versi 4 (IPv4) standar terdiri dari sekumpulan bit sebanyak...',
    options: [
      '32 bit (terbagi dalam 4 oktet desimal)',
      '64 bit',
      '128 bit',
      '16 bit'
    ],
    correctIndex: 0,
    explanation: 'IPv4 menggunakan pengalamatan 32-bit biner yang dibagi menjadi 4 oktet (masing-masing 8 bit) dipisahkan oleh tanda titik (dot-decimal format).',
    topic: 'Struktur Alamat IPv4'
  },
  {
    id: 'q_jki_5',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Manakah dari susunan alamat IPv4 berikut ini yang termasuk dalam kelompok Alamat IP Privat (Private IP) yang biasa dialokasikan untuk jaringan lokal sekolah/rumah?',
    options: [
      '192.168.1.10',
      '8.8.8.8',
      '118.98.228.66',
      '202.158.40.1'
    ],
    correctIndex: 0,
    explanation: 'Blok 192.168.0.0/16 adalah rentang standar IP Privat (RFC 1918) yang tidak dirutekan langsung di internet publik dan digunakan di lingkungan LAN lokal.',
    topic: 'Alamat IP Privat vs Publik'
  },
  {
    id: 'q_jki_6',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Konektor standar berkepala plastik transparan berkaki 8 pin tembaga yang dipasangkan pada ujung kabel UTP/STP jaringan LAN adalah...',
    options: [
      'RJ-45',
      'RJ-11',
      'USB-C',
      'HDMI'
    ],
    correctIndex: 0,
    explanation: 'Konektor RJ-45 (Registered Jack 45) adalah konektor standar 8-pin untuk kabel jaringan twisted pair (Ethernet).',
    topic: 'Konektor Jaringan (RJ-45)'
  },
  {
    id: 'q_jki_7',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perangkat jaringan yang berfungsi mendistribusikan dan merutekan paket data antar jaringan yang memiliki segmen/subnet berbeda (misal menghubungkan jaringan LAN sekolah ke jaringan Internet ISP) adalah...',
    options: [
      'Router',
      'Hub Pasif',
      'Repeater',
      'Patch Panel'
    ],
    correctIndex: 0,
    explanation: 'Router bekerja pada Layer 3 (Network Layer) untuk menentukan rute terbaik (routing) paket data antar jaringan yang berlainan.',
    topic: 'Fungsi Perangkat Router'
  },
  {
    id: 'q_jki_8',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Dalam model referensi OSI (Open Systems Interconnection) 7 Layer, pengiriman data yang menjamin keandalan transfer melalui mekanisme segmentasi data, flow control, dan konfirmasi pengiriman (handshake ACK) terjadi pada lapisan...',
    options: [
      'Transport Layer (Lapisan 4)',
      'Physical Layer (Lapisan 1)',
      'Network Layer (Lapisan 3)',
      'Application Layer (Lapisan 7)'
    ],
    correctIndex: 0,
    explanation: 'Transport Layer (Layer 4, seperti protokol TCP) bertanggung jawab atas transfer data ujung-ke-ujung (end-to-end), kontrol aliran, dan keandalan transmisi.',
    topic: 'Model OSI 7 Layer (Transport Layer)'
  },
  {
    id: 'q_jki_9',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Media transmisi kabel jaringan berkecepatan paling tinggi yang menghantarkan data dalam bentuk pulsa cahaya melalui serat kaca tipis dinamakan...',
    options: [
      'Kabel Fiber Optik (Serat Optik)',
      'Kabel UTP Kategori 5',
      'Kabel Coaxial Antena',
      'Kabel Tembaga Telepon'
    ],
    correctIndex: 0,
    explanation: 'Fiber Optic Cable mentransmisikan berkas cahaya berkecepatan tinggi, kebal terhadap gangguan elektromagnetik (EMI), dan mendukung bandwidth raksasa.',
    topic: 'Media Transmisi Fiber Optik'
  },
  {
    id: 'q_jki_10',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Protokol jaringan yang bertugas memberikan konfigurasi alamat IP, Subnet Mask, dan Gateway kepada komputer klien secara otomatis saat tersambung ke jaringan adalah...',
    options: [
      'DHCP (Dynamic Host Configuration Protocol)',
      'DNS',
      'SNMP',
      'HTTP'
    ],
    correctIndex: 0,
    explanation: 'Server DHCP meminjamkan (lease) konfigurasi IP secara otomatis kepada klien baru sehingga pengelola tidak perlu menyetel IP manual satu per satu.',
    topic: 'Protokol Alokasi IP Otomatis (DHCP)'
  },
  {
    id: 'q_jki_11',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Perbedaan mendasar antara protokol transfer data TCP (Transmission Control Protocol) dan UDP (User Datagram Protocol) adalah...',
    options: [
      'TCP berorientasi koneksi dan menjamin paket data sampai utuh berurutan (Connection-Oriented), sedangkan UDP mengutamakan kecepatan tanpa konfirmasi (Connectionless).',
      'TCP hanya untuk teks, sedangkan UDP khusus untuk mencetak kertas.',
      'TCP tidak menggunakan sinyal listrik sedangkan UDP menggunakan satelit.',
      'TCP bekerja di Layer Fisik sedangkan UDP di Layer Aplikasi.'
    ],
    correctIndex: 0,
    explanation: 'TCP memastikan keutuhan data melalui three-way handshake dan retransmisi paket hilang, sedangkan UDP mengirim cepat tanpa jaminan tiba (cocok untuk streaming video/game).',
    topic: 'Perbandingan Protokol TCP vs UDP'
  },
  {
    id: 'q_jki_12',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Alamat fisik unik permanen berukuran 48-bit yang ditanamkan oleh pabrik pada setiap kartu jaringan (Network Interface Card / NIC) disebut...',
    options: [
      'MAC Address (Media Access Control)',
      'IP Address',
      'Port Number',
      'Subnet Mask'
    ],
    correctIndex: 0,
    explanation: 'MAC Address adalah identitas fisik unik pada kartu jaringan yang beroperasi pada Data Link Layer.',
    topic: 'Alamat Fisik (MAC Address)'
  },
  {
    id: 'q_jki_13',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perangkat jaringan nirkabel (Wireless Access Point / WAP) berfungsi untuk...',
    options: [
      'Memancarkan dan menerima gelombang radio frekuensi Wi-Fi sehingga gawai nirkabel dapat terhubung ke jaringan kabel lokal.',
      'Menyimpan file dokumen naskah secara offline.',
      'Mendinginkan suhu komputer klien.',
      'Mematikan virus komputer di flashdisk.'
    ],
    correctIndex: 0,
    explanation: 'Access Point menjadi jembatan transmisi radio nirkabel (Wi-Fi) yang menghubungkan perangkat laptop/HP ke jaringan kabel utama.',
    topic: 'Wireless Access Point (WAP)'
  },
  {
    id: 'q_jki_14',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Mengapa IPv6 (berukuran 128 bit dengan notasi heksadesimal) dikembangkan untuk melengkapi dan menggantikan IPv4 (32 bit)?',
    options: [
      'Ruang alamat IPv4 yang hanya mampu menampung sekitar 4,3 miliar perangkat sudah habis akibat ledakan miliaran gawai dan perangkat IoT.',
      'IPv4 hanya dapat digunakan di komputer desktop tabung.',
      'Kabel internet IPv4 tidak dapat dialiri arus listrik.',
      'IPv6 membuat layar monitor menjadi lebih jernih.'
    ],
    correctIndex: 0,
    explanation: 'Alamat IPv4 (2^32 ~ 4,29 miliar) telah habis dialokasikan secara global. IPv6 (2^128) menyediakan triliunan alamat unik untuk setiap perangkat di bumi.',
    topic: 'Krisis Ruang Alamat & Migrasi IPv6'
  },
  {
    id: 'q_jki_15',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Perangkat lunak atau perangkat keras keamanan yang memantau dan menyaring lalu lintas data masuk dan keluar berdasarkan aturan keamanan yang ditetapkan disebut...',
    options: [
      'Firewall',
      'Browser',
      'Switch',
      'Modem'
    ],
    correctIndex: 0,
    explanation: 'Firewall bertindak sebagai dinding pertahanan pembatas yang memblokir akses ilegal dan paket berbahaya dari jaringan luar.',
    topic: 'Keamanan Jaringan (Firewall)'
  },
  {
    id: 'q_jki_16',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Kelebihan utama kabel jaringan jenis STP (Shielded Twisted Pair) dibandingkan kabel UTP (Unshielded Twisted Pair) standar adalah...',
    options: [
      'Memiliki lapisan pelindung foil logam tambahan untuk meredam interferensi gelombang elektromagnetik dari lingkungan industri.',
      'Harganya jauh lebih murah dan lentur seperti benang.',
      'Tidak memerlukan konektor RJ-45 sama sekali.',
      'Dapat mengalirkan air pendingin prosesor.'
    ],
    correctIndex: 0,
    explanation: 'Lapisan pelindung metalik (shield) pada kabel STP melindunginya dari radiasi noise elektromagnetik di area pabrik atau kabel listrik tegangan tinggi.',
    topic: 'Kabel UTP vs STP'
  },
  {
    id: 'q_jki_17',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Ketika Anda mengetik "ping 192.168.1.1" di Command Prompt dan muncul pesan "Reply from 192.168.1.1: bytes=32 time=2ms TTL=64", hal ini mengindikasikan bahwa...',
    options: [
      'Komputer Anda berhasil terhubung dan berkomunikasi dua arah dengan router target secara lancar dan cepat.',
      'Komputer Anda sedang terserang virus ransomware berbahaya.',
      'Koneksi internet Anda terputus total.',
      'Alamat IP 192.168.1.1 tidak dapat ditemukan.'
    ],
    correctIndex: 0,
    explanation: 'Perintah PING memanfaatkan protokol ICMP Echo Request/Reply. Pesan "Reply" dengan latency rendah (2ms) membuktikan jalur komunikasi jaringan aktif dan normal.',
    topic: 'Diagnostik Jaringan (Perintah Ping)'
  },
  {
    id: 'q_jki_18',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Perangkat jaringan yang bertugas mengubah sinyal analog dari penyedia layanan kabel/telepon menjadi sinyal digital yang dimengerti komputer adalah...',
    options: [
      'Modem (Modulator Demodulator)',
      'Heatsink',
      'RAM Module',
      'Printer Laser'
    ],
    correctIndex: 0,
    explanation: 'Modem (Modulator Demodulator) mengubah (memodulasi/mendemodulasi) sinyal gelombang pembawa analog menjadi data digital biner.',
    topic: 'Perangkat Modem'
  },
  {
    id: 'q_jki_19',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perbedaan utama antara perangkat Switch dan Hub pada jaringan LAN lokal adalah...',
    options: [
      'Switch cerdas mengirim data hanya ke port perangkat tujuan berdasarkan tabel MAC address, sedangkan Hub menyiarkan (broadcast) data ke semua port tanpa seleksi.',
      'Hub bekerja lebih cepat 100 kali lipat dibanding Switch.',
      'Switch hanya untuk nirkabel sedangkan Hub untuk kabel optik.',
      'Hub memiliki sistem pendingin otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Switch memfilter lalu lintas unicast berdasarkan MAC Address (mencegah tabrakan paket collision), sedangkan Hub pasif menyebarkan data ke semua komputer tanpa pemilahan.',
    topic: 'Switch vs Hub'
  },
  {
    id: 'q_jki_20',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Sebuah jaringan komputer dengan Subnet Mask 255.255.255.0 memiliki IP Komputer A = 192.168.10.5 dan IP Komputer B = 192.168.20.8. Mengapa kedua komputer tersebut tidak dapat saling terhubung secara langsung tanpa bantuan router?',
    options: [
      'Karena keduanya berada pada Network ID (Subnet ID) yang berbeda, yaitu 192.168.10.0 dan 192.168.20.0.',
      'Karena kabel LAN yang digunakan berwarna merah.',
      'Karena nomor host kedua komputer berakhiran angka ganjil dan genap.',
      'Karena Subnet Mask hanya berlaku untuk jaringan nirkabel.'
    ],
    correctIndex: 0,
    explanation: 'Dengan mask /24 (255.255.255.0), tiga oktet pertama adalah Network ID. 192.168.10.x dan 192.168.20.x adalah dua subnet berbeda sehingga wajib melalui Router (Gateway).',
    topic: 'Subnetting & Network ID'
  },
  {
    id: 'q_jki_21',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Teknologi jaringan nirkabel jarak dekat berdaya rendah (jangkauan sekitar 10 meter) yang biasa digunakan untuk menyambungkan headset nirkabel, mouse, dan keyboard ke HP/laptop adalah...',
    options: [
      'Bluetooth',
      'Satelit GPS',
      'Kabel Coaxial',
      'Fiber Optik'
    ],
    correctIndex: 0,
    explanation: 'Bluetooth adalah standar komunikasi nirkabel WPAN (Wireless Personal Area Network) frekuensi 2.4 GHz untuk koneksi periferal jarak dekat.',
    topic: 'Teknologi Bluetooth'
  },
  {
    id: 'q_jki_22',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Standar enkripsi keamanan jaringan Wi-Fi modern yang paling aman dan direkomendasikan saat ini untuk melindungi router dari peretasan adalah...',
    options: [
      'WPA3 / WPA2-Personal (AES)',
      'WEP (Wired Equivalent Privacy) Open',
      'No Security (Open Network)',
      'Telnet Plaintext'
    ],
    correctIndex: 0,
    explanation: 'WPA3 dan WPA2 dengan enkripsi AES memberikan perlindungan kriptografi tangguh terhadap serangan brute force password dan eavesdropping.',
    topic: 'Protokol Keamanan Wi-Fi (WPA2/WPA3)'
  },
  {
    id: 'q_jki_23',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Teknologi VPN (Virtual Private Network) menciptakan saluran terenkripsi (encrypted tunnel) melalui internet publik. Manfaat utama penggunaan VPN saat mengakses Wi-Fi publik di kedai kopi adalah...',
    options: [
      'Melindungi lalu lintas data pribadi dari penyadapan (sniffing/man-in-the-middle) oleh pengguna lain di jaringan publik yang sama.',
      'Menggandakan kecepatan bandwidth Wi-Fi menjadi 1 Gbps secara gratis.',
      'Membuat baterai laptop menjadi tahan 24 jam.',
      'Menghilangkan keharusan memasukkan password akun.'
    ],
    correctIndex: 0,
    explanation: 'VPN mengenkripsi seluruh payload data antara klien dan server VPN, sehingga peretas di jaringan Wi-Fi terbuka tidak dapat membaca kata sandi atau data sensitif.',
    topic: 'Virtual Private Network (VPN)'
  },
  {
    id: 'q_jki_24',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Topologi jaringan di mana seluruh komputer saling terhubung satu sama lain secara penuh titik-ke-titik (point-to-point) sehingga memiliki toleransi kesalahan tertinggi adalah...',
    options: [
      'Topologi Mesh (Jala Penuh)',
      'Topologi Bus',
      'Topologi Linier',
      'Topologi Tree'
    ],
    correctIndex: 0,
    explanation: 'Topologi Full Mesh menghubungkan setiap simpul ke semua simpul lain, menawarkan redundansi tertinggi (jika satu kabel putus, ada banyak jalur cadangan).',
    topic: 'Topologi Mesh'
  },
  {
    id: 'q_jki_25',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Kecepatan transfer data dalam jaringan komputer diukur dalam satuan bit per second (bps). Jika koneksi memiliki bandwidth 100 Mbps, arti dari angka tersebut adalah...',
    options: [
      'Dapat mentransfer 100 Megabit data per detik.',
      'Dapat menyimpan 100 file dokumen per menit.',
      'Dapat menghubungkan 100 unit komputer tanpa kabel.',
      'Menggunakan daya listrik 100 Watt per jam.'
    ],
    correctIndex: 0,
    explanation: 'Mbps adalah Mega bit per second, yaitu ukuran kapasitas throughput transmisi data jaringan per satuan waktu detik.',
    topic: 'Satuan Bandwidth (Mbps)'
  },
  {
    id: 'q_jki_26',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Urutan standar pewarnaan kabel UTP standar T568B dari pin 1 sampai pin 8 yang benar untuk membuat kabel jaringan Straight-Through adalah...',
    options: [
      'Putih Oranye, Oranye, Putih Hijau, Biru, Putih Biru, Hijau, Putih Cokelat, Cokelat',
      'Putih Hijau, Hijau, Putih Oranye, Biru, Putih Biru, Oranye, Putih Cokelat, Cokelat',
      'Putih Cokelat, Cokelat, Putih Biru, Biru, Putih Oranye, Oranye, Putih Hijau, Hijau',
      'Oranye, Putih Oranye, Hijau, Putih Hijau, Biru, Putih Biru, Cokelat, Putih Cokelat'
    ],
    correctIndex: 0,
    explanation: 'Standar EIA/TIA 568B: 1. Putih-Oranye, 2. Oranye, 3. Putih-Hijau, 4. Biru, 5. Putih-Biru, 6. Hijau, 7. Putih-Cokelat, 8. Cokelat.',
    topic: 'Standar Crimping Kabel UTP T568B'
  },
  {
    id: 'q_jki_27',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Protokol standar pengiriman surat elektronik (email) dari klien ke server surat di internet adalah...',
    options: [
      'SMTP (Simple Mail Transfer Protocol)',
      'FTP',
      'HTTP',
      'ICMP'
    ],
    correctIndex: 0,
    explanation: 'SMTP digunakan untuk proses pengiriman email ke server tujuan. Untuk penerimaan email digunakan POP3 atau IMAP.',
    topic: 'Protokol Email (SMTP)'
  },
  {
    id: 'q_jki_28',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Protokol transfer berkas terstandar yang digunakan untuk mengunggah dan mengunduh file berukuran besar antara klien dan server web dinamakan...',
    options: [
      'FTP (File Transfer Protocol)',
      'DHCP',
      'DNS',
      'ARP'
    ],
    correctIndex: 0,
    explanation: 'FTP (File Transfer Protocol) adalah protokol klien-server khusus untuk manajemen berkas jarak jauh.',
    topic: 'Protokol Berkas (FTP)'
  },
  {
    id: 'q_jki_29',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Dalam skenario serangan siber DDoS (Distributed Denial of Service), peretas berupaya melumpuhkan situs web target dengan cara...',
    options: [
      'Membanjiri server target dengan jutaan permintaan trafik palsu secara serentak dari ribuan perangkat botnet hingga server kelebihan beban dan tumbang.',
      'Mencuri monitor server secara diam-diam di malam hari.',
      'Menyunting teks HTML pada naskah cetak ujian.',
      'Mematikan gardu listrik kota dengan sengaja.'
    ],
    correctIndex: 0,
    explanation: 'DDoS menyerang ketersediaan (availability) layanan dengan membanjiri kapasitas bandwidth dan pemrosesan server target melalui jaringan botnet terdistribusi.',
    topic: 'Ancaman Jaringan (Serangan DDoS)'
  },
  {
    id: 'q_jki_30',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Jaringan komputer global antarbangsa yang menghubungkan jutaan jaringan komputer di seluruh dunia menggunakan standar TCP/IP disebut...',
    options: [
      'Internet',
      'Intranet',
      'Extranet',
      'Ad-hoc'
    ],
    correctIndex: 0,
    explanation: 'Internet (Interconnected Network) adalah jaringan raksasa global yang menyatukan infrastruktur komputer di seluruh dunia.',
    topic: 'Definisi Jaringan Internet'
  },
  {
    id: 'q_jki_31',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perbedaan utama antara frekuensi Wi-Fi 2.4 GHz dan 5 GHz pada router dual-band adalah...',
    options: [
      '2.4 GHz memiliki jangkauan sinyal lebih luas dan mampu menembus dinding lebih baik, sedangkan 5 GHz menawarkan kecepatan transfer data lebih tinggi dengan interferensi lebih rendah pada jarak dekat.',
      '2.4 GHz khusus untuk HP sedangkan 5 GHz khusus untuk Smart TV.',
      '5 GHz tidak memerlukan antena dan listrik.',
      '2.4 GHz hanya dapat mengirim teks tanpa gambar.'
    ],
    correctIndex: 0,
    explanation: 'Gelombang 2.4 GHz berjangkauan lebih jauh menembus halangan padat, sementara 5 GHz memiliki lebar kanal lebih besar untuk kecepatan tinggi pada jarak dekat.',
    topic: 'Spektrum Frekuensi Wi-Fi (2.4 GHz vs 5 GHz)'
  },
  {
    id: 'q_jki_32',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Kabel jaringan UTP tipe Crossover (silang) secara tradisional dirancang khusus untuk menghubungkan...',
    options: [
      'Dua perangkat sejenis secara langsung (seperti PC ke PC, atau Switch ke Switch tanpa auto-MDIX).',
      'PC ke port LAN Switch/Hub.',
      'Printer ke stopkontak dinding PLN.',
      'Kamera CCTV ke monitor TV tabung.'
    ],
    correctIndex: 0,
    explanation: 'Kabel Crossover menyilangkan pin transmisi (Tx) di satu ujung ke pin penerimaan (Rx) di ujung lain untuk menghubungkan perangkat bertipe sama.',
    topic: 'Kabel Crossover vs Straight-Through'
  },
  {
    id: 'q_jki_33',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Nomor port default standar yang digunakan untuk protokol web aman HTTPS adalah...',
    options: [
      'Port 443',
      'Port 80',
      'Port 21',
      'Port 25'
    ],
    correctIndex: 0,
    explanation: 'Port 443 adalah port standar untuk HTTPS, sedangkan Port 80 adalah port default untuk HTTP tidak terenkripsi.',
    topic: 'Nomor Port Layanan Jaringan'
  },
  {
    id: 'q_jki_34',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Penyedia jasa layanan sambungan internet komersial yang menyalurkan akses internet ke rumah dan sekolah (seperti Indihome, Biznet, Telkomsel) dinamakan...',
    options: [
      'ISP (Internet Service Provider)',
      'URL',
      'DNS',
      'LAN Card'
    ],
    correctIndex: 0,
    explanation: 'ISP adalah perusahaan telekomunikasi yang menyediakan infrastruktur akses internet bagi pelanggan.',
    topic: 'Internet Service Provider (ISP)'
  },
  {
    id: 'q_jki_35',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Fitur "Tethering / Personal Hotspot" pada smartphone mengubah perangkat ponsel menjadi...',
    options: [
      'Router nirkabel portabel yang membagikan koneksi internet data seluler ponsel ke gawai lain melalui sinyal Wi-Fi atau Bluetooth.',
      'Antena pemancar siaran radio FM komersial.',
      'Penyimpan file video raksasa offline.',
      'Penguat sinyal satelit navigasi bumi.'
    ],
    correctIndex: 0,
    explanation: 'Fitur Hotspot Seluler memfungsikan modem smartphone dan kartu Wi-Fi menjadi virtual router/access point untuk berbagi paket data seluler.',
    topic: 'Konsep Mobile Tethering'
  },
  {
    id: 'q_jki_36',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Topologi jaringan bus menggunakan komponen penutup di kedua ujung kabel utama untuk menyerap pantulan sinyal yang disebut...',
    options: [
      'Terminator',
      'Repeater',
      'Bridge',
      'Multiplexer'
    ],
    correctIndex: 0,
    explanation: 'Terminator resistor di kedua ujung bus coaxial menyerap pantulan gelombang agar sinyal tidak memantul balik dan merusak paket data lain.',
    topic: 'Komponen Topologi Bus'
  },
  {
    id: 'q_jki_37',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perangkat jaringan yang berfungsi memperkuat dan meregenerasi sinyal transmisi yang melemah akibat jarak tempuh kabel yang sangat jauh disebut...',
    options: [
      'Repeater / Range Extender',
      'Patch Cord',
      'Crimping Tool',
      'RJ-11 Jack'
    ],
    correctIndex: 0,
    explanation: 'Repeater memperkuat sinyal digital yang mengalami redaman (attenuation) sehingga dapat diteruskan melintasi bentang jarak lebih jauh.',
    topic: 'Perangkat Repeater'
  },
  {
    id: 'q_jki_38',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Mengapa penggunaan jaringan Wi-Fi publik gratis tanpa sandi (Open Wi-Fi) di tempat umum memiliki risiko keamanan tinggi?',
    options: [
      'Komunikasi data tidak dienkripsi di udara sehingga paket data yang Anda kirim dapat disadap (sniffing) oleh orang lain di jaringan yang sama.',
      'Dapat menyebabkan layar smartphone retak secara fisik.',
      'Otomatis menghapus seluruh foto di galeri HP.',
      'Menyebabkan kuota pulsa seluler terpotong dua kali.'
    ],
    correctIndex: 0,
    explanation: 'Jaringan terbuka (Open Wi-Fi) memancarkan paket tanpa enkripsi WPA2/WPA3 di level link, memudahkan penyerang melakukan packet sniffing.',
    topic: 'Risiko Keamanan Wi-Fi Publik'
  },
  {
    id: 'q_jki_39',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Nama jaringan nirkabel yang dipancarkan oleh router Wi-Fi dan muncul di menu pencarian gawai pengguna disebut...',
    options: [
      'SSID (Service Set Identifier)',
      'MAC ID',
      'Gateway',
      'Subnet'
    ],
    correctIndex: 0,
    explanation: 'SSID adalah nama pengenal publik untuk jaringan nirkabel lokal (WLAN).',
    topic: 'Pengenal Jaringan Wi-Fi (SSID)'
  },
  {
    id: 'q_jki_40',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Tangk crimping (Crimping Tool) pada instalasi jaringan komputer digunakan untuk...',
    options: [
      'Mengunci dan menjepit konektor RJ-45 pada ujung kabel UTP sehingga tembaga konektor menancap kuat pada kawat inti kabel.',
      'Mengukur kecepatan koneksi internet.',
      'Memutus sinyal radio Wi-Fi.',
      'Memformat flashdisk otomatis.'
    ],
    correctIndex: 0,
    explanation: 'Crimping tool menekan pin logam konektor RJ-45 agar menembus isolasi kabel UTP dan mengunci jaket kabel dengan kokoh.',
    topic: 'Alat Instalasi Jaringan (Crimping Tool)'
  },
  {
    id: 'q_jki_41',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Dalam arsitektur jaringan Client-Server, peran komputer Server adalah...',
    options: [
      'Menyediakan sumber daya terpusat, memproses permintaan layanan (basis data, web, file), dan melayani banyak komputer klien secara serentak.',
      'Hanya digunakan untuk mengetik dokumen tanpa terhubung ke kabel.',
      'Mematikan komputer klien setiap 10 menit.',
      'Menerima instruksi pasif dari mouse klien.'
    ],
    correctIndex: 0,
    explanation: 'Server adalah komputer berkinerja tinggi yang melayani permintaan resource terpusat bagi klien dalam arsitektur Client-Server.',
    topic: 'Arsitektur Client-Server'
  },
  {
    id: 'q_jki_42',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Alat ukur elektronik berbentuk dua unit pemancar-penerima lampu LED yang digunakan untuk menguji kebenaran sambungan 8 kawat kabel UTP adalah...',
    options: [
      'LAN Tester (Cable Tester)',
      'Voltmeter Analog',
      'Barcode Reader',
      'Thermometer'
    ],
    correctIndex: 0,
    explanation: 'LAN Tester memverifikasi kontinuitas dan urutan sambungan 8 pin kawat tembaga kabel Ethernet secara berurutan.',
    topic: 'Pengujian Kabel (LAN Tester)'
  },
  {
    id: 'q_jki_43',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Konsep "Gateway" dalam jaringan komputer lokal merujuk pada...',
    options: [
      'Pintu gerbang alamat IP router yang menjadi perantara bagi komputer lokal untuk keluar menuju jaringan lain atau internet.',
      'Pintu fisik ruang server yang digembok kunci.',
      'Kabel USB penghubung printer.',
      'Situs web mesin pencari Google.'
    ],
    correctIndex: 0,
    explanation: 'Default Gateway adalah alamat router lokal yang menangani seluruh paket dengan tujuan di luar subnet lokal.',
    topic: 'Default Gateway Jaringan'
  },
  {
    id: 'q_jki_44',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Manakah dari pernyataan berikut yang menjelaskan perbedaan mendasar antara jaringan MAN (Metropolitan Area Network) dan WAN (Wide Area Network)?',
    options: [
      'MAN menghubungkan jaringan komputer dalam satu wilayah perkotaan/kabupaten, sedangkan WAN menghubungkan jaringan antarkota, antarpulau, hingga antarnegara.',
      'MAN hanya menggunakan kabel optik bawah laut sedangkan WAN menggunakan Bluetooth.',
      'MAN tidak memerlukan komputer sedangkan WAN memerlukan kabel telepon.',
      'WAN berkecepatan lebih lambat dari disket.'
    ],
    correctIndex: 0,
    explanation: 'MAN mencakup skala metropolitan/kota, sedangkan WAN menghubungkan jaringan berskala geografis luas lintas negara/benua.',
    topic: 'Cakupan Jaringan MAN vs WAN'
  },
  {
    id: 'q_jki_45',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Protokol dasar pengiriman halaman web teks dan grafis dari web server ke browser internet tanpa enkripsi adalah...',
    options: [
      'HTTP (Hypertext Transfer Protocol)',
      'POP3',
      'Telnet',
      'SNMP'
    ],
    correctIndex: 0,
    explanation: 'HTTP adalah protokol standar fondasi komunikasi data di World Wide Web (port 80).',
    topic: 'Protokol HTTP'
  },
  {
    id: 'q_jki_46',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Jaringan Peer-to-Peer (P2P) memiliki karakteristik utama yaitu...',
    options: [
      'Setiap komputer di jaringan memiliki kedudukan setara yang dapat bertindak sebagai penyedia sumber daya (server) sekaligus pengguna (client).',
      'Wajib memiliki satu komputer induk mainframe raksasa.',
      'Hanya boleh terdiri dari tepat 2 komputer saja.',
      'Tidak dapat mentransfer file gambar.'
    ],
    correctIndex: 0,
    explanation: 'Pada jaringan Peer-to-Peer, tidak ada server terpusat hierarkis; seluruh node saling berbagi resource secara langsung dan setara.',
    topic: 'Jaringan Peer-to-Peer'
  },
  {
    id: 'q_jki_47',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Sebuah paket data yang dikirim melalui jaringan internet dipecah menjadi unit-unit kecil yang masing-masing dilengkapi informasi alamat IP asal, IP tujuan, nomor urut paket, dan data muatan. Unit kecil tersebut dinamakan...',
    options: [
      'Paket Data (Packet / Datagram)',
      'Token Ring',
      'Megabyte File',
      'Barcode Frame'
    ],
    correctIndex: 0,
    explanation: 'Internet bekerja berdasarkan prinsip Packet Switching di mana informasi dipecah menjadi paket-paket independen yang dirutekan secara dinamis.',
    topic: 'Konsep Packet Switching & Datagram'
  },
  {
    id: 'q_jki_48',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'LotS',
    stem: 'Perintah utilitas jaringan di Command Prompt yang digunakan untuk melacak rute lompatan router (hop) yang dilalui paket data dari komputer Anda menuju server tujuan adalah...',
    options: [
      'traceroute / tracert',
      'ipconfig',
      'mkdir',
      'format c:'
    ],
    correctIndex: 0,
    explanation: 'Tracert (Traceroute) mencatat setiap gateway router yang dilewati paket data beserta latency waktu tempuh per hop.',
    topic: 'Diagnostik Jalur Rute (Tracert)'
  },
  {
    id: 'q_jki_49',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'MotS',
    stem: 'Perintah Command Prompt yang digunakan untuk melihat konfigurasi alamat IP, Subnet Mask, dan Default Gateway pada komputer Windows adalah...',
    options: [
      'ipconfig (atau ipconfig /all)',
      'ping -t',
      'netstat',
      'cls'
    ],
    correctIndex: 0,
    explanation: 'ipconfig menampilkan ringkasan alamat IP, status koneksi adapter jaringan aktif, dan detail gateway di Windows.',
    topic: 'Perintah IPConfig Windows'
  },
  {
    id: 'q_jki_50',
    element: 'JKI',
    materi: 'Jaringan Komputer & Internet',
    level: 'HoTS',
    stem: 'Mengapa teknologi transmisi Fiber Optik sangat ideal digunakan sebagai kabel backbone bawah laut antarpulau dan antardaerah dibandingkan kabel tembaga?',
    options: [
      'Memiliki bandwidth raksasa, redaman sinyal sangat kecil untuk jarak ribuan kilometer, dan sepenuhnya kebal terhadap interferensi elektromagnetik serta petir.',
      'Karena terbuat dari karet plastik daur ulang yang murah.',
      'Dapat dilipat membentuk simpul mati tanpa memutus transmisi.',
      'Dapat digunakan sebagai kabel listrik generator.'
    ],
    correctIndex: 0,
    explanation: 'Kabel Fiber Optik mentransmisikan foton cahaya melalui silika ultra-murni dengan kecepatan sangat tinggi dan tanpa degradasi noise medan magnet.',
    topic: 'Keunggulan Serat Optik Tulang Punggung (Backbone)'
  }
];
