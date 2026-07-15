export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Kamera CCTV" | "Rekaman" | "Aksesoris" | "Paket";
  brand: string;
  description: string;
  longDescription: string[];
  specs: { label: string; value: string }[];
  imageUrl: string;
  hasPrice: boolean;
  price?: string;
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const rawProducts: Omit<Product, "slug">[] = [
  {
    id: "1",
    name: "Kamera Dome 2MP IR",
    category: "Kamera CCTV",
    brand: "Hikvision",
    description: "Kamera dome 2MP dengan night vision 30m. Cocok untuk indoor.",
    longDescription: [
      "Kamera dome Hikvision 2MP ini memberikan kualitas gambar Full HD 1080p yang jernih siang dan malam. Dengan teknologi infrared canggih, kamera mampu menangkap objek hingga jarak 30 meter dalam kondisi gelap total.",
      "Desain dome yang kompak dan elegan membuatnya cocok ditempatkan di dalam ruangan seperti rumah, kantor, toko, atau hotel. Bentuknya yang sulit diketahui arahnya memberikan efek deterrence yang lebih baik.",
      "Dilengkapi dengan lensa fixed 3.6mm, kamera ini mencakup sudut pandang ideal untuk koridor, ruang tamu, dan area indoor lainnya. Teknologi DWDR (Digital Wide Dynamic Range) memastikan gambar tetap jelas meskipun ada cahaya latar yang kuat.",
    ],
    specs: [
      { label: "Resolusi", value: "2MP (1920x1080) Full HD" },
      { label: "IR Distance", value: "30 meter" },
      { label: "Lensa", value: "3.6mm Fixed" },
      { label: "Weatherproof", value: "IP67" },
      { label: "Daya", value: "12V DC" },
      { label: "Teknologi", value: "DWDR, 3D DNR" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 850.000",
  },
  {
    id: "2",
    name: "Kamera Bullet 4MP",
    category: "Kamera CCTV",
    brand: "Dahua",
    description: "Kamera bullet 4MP Full Color night vision. Gambar berwarna meski gelap.",
    longDescription: [
      "Kamera bullet Dahua 4MP menghadirkan teknologi Full Color night vision yang revolusioner. Tidak seperti kamera biasa yang hanya menghasilkan hitam-putih di malam hari, kamera ini mampu menampilkan gambar berwarna terang meskipun tanpa cahaya.",
      "Dengan sensor cahaya ultra-sensitif dan lensa aperture besar, kamera ini menangkap detail terkecil bahkan dalam kondisi minim cahaya. Cocok untuk area outdoor seperti halaman, parkir, gudang, dan perimeter properti.",
      "Fitur Smart Motion Detection dapat membedakan antara manusia, kendaraan, dan hewan, sehingga notifikasi palsu berkurang drastis. Rating IP67 memastikan ketahanan terhadap hujan dan debu.",
    ],
    specs: [
      { label: "Resolusi", value: "4MP (2560x1440) 2K" },
      { label: "Night Vision", value: "Full Color" },
      { label: "Lensa", value: "2.8mm Fixed" },
      { label: "Weatherproof", value: "IP67" },
      { label: "Audio", value: "Built-in Mic" },
      { label: "Smart Detection", value: "Human & Vehicle" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 1.450.000",
  },
  {
    id: "11",
    name: "Kamera Mini WiFi 2MP",
    category: "Kamera CCTV",
    brand: "HiLook",
    description: "Kamera WiFi mini, pasang sendiri via smartphone. Cocok untuk rumah.",
    longDescription: [
      "Kamera mini WiFi HiLook 2MP adalah solusi keamanan praktis yang bisa Anda pasang sendiri tanpa bantuan teknisi. Cukup sambungkan ke listrik dan WiFi rumah, lalu atur melalui smartphone dalam hitungan menit.",
      "Meskipun ukurannya mungil, kamera ini memiliki resolusi Full HD 1080p dan fitur two-way audio sehingga Anda bisa mendengar dan berbicara dengan orang di dekat kamera melalui aplikasi.",
      "Dukungan MicroSD hingga 256GB memungkinkan penyimpanan lokal tanpa perlu DVR/NVR. Fitur motion alert akan mengirim notifikasi ke HP Anda saat ada pergerakan mencurigakan.",
    ],
    specs: [
      { label: "Resolusi", value: "2MP (1920x1080) Full HD" },
      { label: "Konektivitas", value: "WiFi 2.4GHz" },
      { label: "Penyimpanan", value: "MicroSD up to 256GB" },
      { label: "Audio", value: "Two-Way Audio" },
      { label: "Notifikasi", value: "Motion Alert" },
      { label: "Daya", value: "5V DC (USB)" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 499.000",
  },
  {
    id: "12",
    name: "Kamera Bullet 8MP 4K",
    category: "Kamera CCTV",
    brand: "Hikvision",
    description: "Kamera 4K dengan deteksi manusia & kendaraan. Kualitas tertinggi.",
    longDescription: [
      "Kamera bullet 8MP 4K Hikvision adalah pilihan tertinggi untuk pengawasan yang membutuhkan detail ultra-jelas. Dengan resolusi 4K (3840x2160), Anda bisa memperbesar gambar digital tanpa kehilangan kualitas — cukup untuk membaca plat nomor dari jarak jauh.",
      "Teknologi AcuSense cerdas dapat membedakan manusia dan kendaraan dari objek lain yang bergerak (seperti dedaunan atau hewan kecil), mengurangi alarm palsu hingga 90%. Sangat cocok untuk area komersial, pabrik, dan properti besar.",
      "Fitur ColorVu 2.0 memungkinkan gambar berwarna 24 jam dengan cahaya sekitar yang minimal. Smart H.265+ mengompresi video hingga 80% lebih hemat penyimpanan tanpa mengorbankan kualitas.",
    ],
    specs: [
      { label: "Resolusi", value: "8MP (3840x2160) 4K" },
      { label: "Teknologi", value: "AcuSense AI" },
      { label: "Night Vision", value: "ColorVu 2.0" },
      { label: "Kompresi", value: "Smart H.265+" },
      { label: "Weatherproof", value: "IP67" },
      { label: "Deteksi", value: "Human & Vehicle" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop",
    hasPrice: false,
  },
  {
    id: "4",
    name: "NVR 8 Channel",
    category: "Rekaman",
    brand: "Hikvision",
    description: "NVR 8 channel untuk kamera IP. H.265+ hemat penyimpanan hingga 50%.",
    longDescription: [
      "Network Video Recorder (NVR) 8 channel Hikvision adalah pusat kendali untuk sistem kamera IP Anda. Mendukung perekaman dari 8 kamera IP secara bersamaan dengan resolusi hingga 4K.",
      "Teknologi H.265+ mengurangi ukuran file video hingga 50% dibandingkan standar H.265, sehingga hard disk Anda bisa menyimpan rekaman lebih lama. Output HDMI 4K memungkinkan tampilan live view dengan kualitas tertinggi.",
      "Fitur remote access memungkinkan Anda memantau semua kamera dari smartphone kapan saja dan di mana saja. Mendukung multi-user untuk akses tim atau keluarga.",
    ],
    specs: [
      { label: "Channel", value: "8 Channel IP" },
      { label: "Kompresi", value: "H.265+/H.265" },
      { label: "Storage", value: "HDD up to 10TB" },
      { label: "Output", value: "HDMI 4K" },
      { label: "Akses", value: "Remote via App" },
      { label: "Audio", value: "1ch Input / 1ch Output" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 2.899.000",
  },
  {
    id: "5",
    name: "DVR 16 Channel",
    category: "Rekaman",
    brand: "Dahua",
    description: "DVR 16 channel untuk kamera analog. Fitur AI motion detection.",
    longDescription: [
      "Digital Video Recorder (DVR) 16 channel Dahua mendukung semua jenis kamera analog termasuk AHD, TVI, CVI, dan CVBS. Cocok untuk upgrade dari sistem analog lama atau instalasi baru dengan budget efisien.",
      "Dengan teknologi H.265 Pro+, kualitas rekaman lebih tajam dengan ukuran file lebih kecil. Fitur AI motion detection cerdas membedakan manusia dan kendaraan untuk notifikasi yang lebih akurat.",
      "Smart search memudahkan Anda mencari kejadian tertentu dalam rekaman tanpa harus memutar video satu per satu. Cukup pilih area dan jenis objek, sistem akan menampilkan momen yang relevan.",
    ],
    specs: [
      { label: "Channel", value: "16 Channel AHD" },
      { label: "Kompresi", value: "H.265 Pro+" },
      { label: "Storage", value: "HDD up to 16TB" },
      { label: "Deteksi", value: "AI Motion Detection" },
      { label: "Fitur", value: "Smart Search" },
      { label: "Akses", value: "Remote via App" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 3.750.000",
  },
  {
    id: "6",
    name: "Hard Disk CCTV 4TB",
    category: "Aksesoris",
    brand: "WD Purple",
    description: "Hard disk khusus CCTV 4TB, garansi 3 tahun, untuk rekaman 24/7.",
    longDescription: [
      "WD Purple 4TB adalah hard disk yang dirancang khusus untuk sistem CCTV dengan operasi 24 jam non-stop, 7 hari seminggu. Berbeda dengan hard disk biasa, WD Purple memiliki teknologi AllFrame yang mengurangi frame loss dan memastikan rekaman tetap mulus.",
      "Dengan kapasitas 4TB, hard disk ini dapat menyimpan rekaman dari 4-8 kamera selama 2-4 minggu tergantung resolusi dan kompresi. Ideal untuk sistem DVR/NVR rumahan hingga kantor kecil.",
      "Garansi resmi 3 tahun memberikan ketenangan pikiran. Teknisi kami akan membantu instalasi dan format hard disk agar siap pakai.",
    ],
    specs: [
      { label: "Kapasitas", value: "4TB" },
      { label: "Teknologi", value: "AllFrame" },
      { label: "Operasi", value: "24/7 Continuous" },
      { label: "Garansi", value: "3 Tahun" },
      { label: "Interface", value: "SATA 6Gb/s" },
      { label: "Cocok", value: "DVR/NVR CCTV" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 1.550.000",
  },
  {
    id: "8",
    name: "Switch PoE 8 Port",
    category: "Aksesoris",
    brand: "TP-Link",
    description: "Switch PoE 8 port, plug and play. Suplai listrik & data via 1 kabel LAN.",
    longDescription: [
      "Switch PoE 8 port TP-Link adalah solusi praktis untuk instalasi kamera IP. Dengan teknologi Power over Ethernet (PoE), satu kabel LAN mengirimkan data dan listrik sekaligus ke kamera — tidak perlu colokan listrik terpisah di setiap kamera.",
      "Total budget daya 120W cukup untuk menyuplai 8 kamera IP standar. Fitur plug and play membuat instalasi sangat mudah: colok kabel, kamera langsung menyala dan terdeteksi oleh NVR.",
      "Dengan casing metal yang kokoh, switch ini tahan untuk penggunaan 24/7 di lingkungan kantor, gudang, atau pabrik. Mendukung VLAN untuk isolasi jaringan jika diperlukan.",
    ],
    specs: [
      { label: "Port", value: "8 Port PoE+" },
      { label: "Power Budget", value: "120W" },
      { label: "Fitur", value: "VLAN Support" },
      { label: "Setup", value: "Plug and Play" },
      { label: "Casing", value: "Metal" },
      { label: "Standar", value: "IEEE 802.3af/at" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 650.000",
  },
  {
    id: "7",
    name: "Kabel Coaxial RG6 50m",
    category: "Aksesoris",
    brand: "Belden",
    description: "Kabel coaxial 50m dengan double shielding. Kualitas sinyal terjaga.",
    longDescription: [
      "Kabel coaxial RG6 berkualitas tinggi dengan double shielding (foil + braid) untuk melindungi sinyal video dari interferensi elektromagnetik. Sangat penting untuk menjaga kualitas gambar pada instalasi jarak jauh.",
      "Panjang 50 meter memungkinkan pemasangan kamera hingga jarak yang cukup jauh dari DVR/NVR. Connector BNC sudah terpasang di kedua ujung, siap pakai tanpa perlu crimping.",
      "Konduktor tembaga murni (CU Core) memastikan signal loss minimal. Cocok untuk semua jenis kamera analog dan DVR. Tersedia juga dalam berbagai ukuran panjang sesuai kebutuhan.",
    ],
    specs: [
      { label: "Panjang", value: "50 meter" },
      { label: "Shielding", value: "Double (Foil + Braid)" },
      { label: "Konektor", value: "BNC Male" },
      { label: "Konduktor", value: "CU Core (Tembaga)" },
      { label: "Penggunaan", value: "Indoor/Outdoor" },
      { label: "Impedansi", value: "75 Ohm" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 350.000",
  },
  {
    id: "9",
    name: "Paket 4 Kamera Hemat",
    category: "Paket",
    brand: "Ronda",
    description: "Paket lengkap 4 kamera + DVR + HDD 1TB + instalasi. Solusi rumah & ruko.",
    longDescription: [
      "Paket CCTV 4 Kamera Hemat adalah solusi ekonomis untuk mengamankan rumah atau ruko kecil. Kami sudah menyertakan semua yang Anda butuhkan: kamera, DVR, hard disk, kabel, dan biaya instalasi — tidak ada biaya tersembunyi.",
      "Paket ini mencakup 4 kamera indoor/outdoor 2MP, DVR 4 channel dengan HDD 1TB yang dapat menyimpan rekaman hingga 7-14 hari, kabel power dan video masing-masing 20 meter per kamera.",
      "Tim teknisi kami akan melakukan instalasi lengkap, termasuk penentuan sudut kamera terbaik, routing kabel yang rapi, dan setup akses remote di smartphone Anda. Garansi 1 tahun untuk semua komponen.",
    ],
    specs: [
      { label: "Kamera", value: "4 Kamera 2MP Indoor/Outdoor" },
      { label: "Perekam", value: "DVR 4 Channel" },
      { label: "Penyimpanan", value: "HDD 1TB" },
      { label: "Kabel", value: "20m per Kamera" },
      { label: "Akses", value: "Remote via Smartphone" },
      { label: "Garansi", value: "1 Tahun" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 2.599.000",
  },
  {
    id: "10",
    name: "Paket 8 Kamera IP",
    category: "Paket",
    brand: "Ronda",
    description: "8 IP Camera 2MP + NVR + HDD 2TB + PoE Switch. Kualitas tajam & fitur AI.",
    longDescription: [
      "Paket 8 Kamera IP adalah solusi keamanan profesional untuk kantor, toko, gudang, dan properti komersial. Menggunakan sistem IP Camera dengan NVR, hasil gambar lebih tajam dan fitur lebih canggih dibanding sistem analog.",
      "Paket lengkap dengan 8 IP Camera 2MP, NVR 8 channel, HDD 2TB, dan PoE Switch. Semua kamera terhubung dengan satu kabel LAN berkat teknologi PoE — instalasi lebih rapi dan cepat.",
      "Fitur AI Motion Detection pada NVR dapat mendeteksi manusia dan kendaraan, memberikan notifikasi pintar ke smartphone Anda. Garansi 2 tahun untuk semua perangkat termasuk biaya instalasi.",
    ],
    specs: [
      { label: "Kamera", value: "8 IP Camera 2MP" },
      { label: "Perekam", value: "NVR 8 Channel" },
      { label: "Penyimpanan", value: "HDD 2TB" },
      { label: "Jaringan", value: "PoE Switch Included" },
      { label: "AI", value: "Motion Detection" },
      { label: "Garansi", value: "2 Tahun" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    hasPrice: true,
    price: "Rp 6.499.000",
  },
  {
    id: "3",
    name: "IP Camera PTZ 5MP",
    category: "Kamera CCTV",
    brand: "Uniview",
    description: "Kamera PTZ 5MP, zoom optik 25x, kontrol putar 360°. Untuk area luas.",
    longDescription: [
      "Kamera PTZ 5MP Uniview memberikan fleksibilitas pengawasan total dengan kemampuan pan 360°, tilt 90°, dan zoom optik 25x. Anda bisa memutar, memiringkan, dan memperbesar dari smartphone kapan saja.",
      "Dengan resolusi 5MP (3K), detail gambar sangat tajam bahkan saat diperbesar. Fitur Smart Tracking otomatis mengikuti objek bergerak, cocok untuk area parkir, halaman luas, dan properti komersial.",
      "Dukungan PoE memudahkan instalasi — cukup satu kabel LAN untuk data dan listrik. Dilengkapi fitur preset position untuk kembali ke titik pantau tertentu secara otomatis.",
    ],
    specs: [
      { label: "Resolusi", value: "5MP (3K)" },
      { label: "Zoom", value: "25x Optical Zoom" },
      { label: "Pan / Tilt", value: "360° / 90°" },
      { label: "Tracking", value: "Smart Tracking" },
      { label: "Daya", value: "PoE (Power over Ethernet)" },
      { label: "Weatherproof", value: "IP66" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    hasPrice: false,
  },
];

export const products: Product[] = rawProducts.map((p) => ({
  ...p,
  slug: slugify(p.name),
}));

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) || null;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id) || null;
}
