export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Tips & Panduan" | "Teknologi" | "Maintenance";
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
}

const rawArticles: Omit<Article, "slug">[] = [
  {
    id: "1",
    title: "5 Cara Memilih CCTV yang Tepat untuk Rumah Anda",
    category: "Tips & Panduan",
    date: "12 Juli 2026",
    readTime: "5 Menit",
    summary:
      "Panduan lengkap memilih tipe kamera CCTV (indoor vs outdoor, resolusi, night vision) yang sesuai dengan kebutuhan keamanan rumah tinggal Anda.",
    content: [
      "Mengamankan rumah adalah prioritas setiap keluarga. Di era digital saat ini, CCTV menjadi solusi utama untuk memantau keadaan rumah kapan saja dan dari mana saja. Namun dengan banyaknya pilihan di pasaran, bagaimana cara memilih kamera yang tepat?",
      "Pertama, tentukan area pemasangan. Kamera indoor dirancang untuk di dalam ruangan dan biasanya memiliki bentuk dome yang estetis. Sedangkan kamera outdoor membutuhkan perlindungan ekstra berupa rating IP66 atau IP67 agar tahan terhadap air hujan, debu, dan cuaca ekstrem.",
      "Kedua, perhatikan resolusi kamera. Kami menyarankan resolusi minimal 2 Megapixel (1080p Full HD) agar detail wajah atau objek penting dapat terlihat dengan jelas. Resolusi yang lebih tinggi seperti 4MP atau 4K memberikan detail ekstra saat diperbesar digital.",
      "Ketiga, pastikan kamera memiliki fitur Night Vision yang andal. Teknologi masa kini seperti Smart Infrared atau ColorVu/Full Color memungkinkan kamera menangkap gambar berwarna bahkan dalam kondisi gelap gulita.",
      "Keempat, pertimbangkan media penyimpanan. NVR/DVR dengan Hard Disk khusus CCTV direkomendasikan untuk perekaman 24 jam terus-menerus. Alternatif lain adalah IP Camera berbasis MicroSD atau penyimpanan cloud untuk instalasi mandiri yang ringkas.",
      "Terakhir, jangan ragu untuk berkonsultasi dengan penyedia jasa instalasi profesional seperti Ronda CCTV. Penentuan sudut pandang (angle) dan titik pemasangan yang tepat sangat menentukan keefektifan sistem keamanan Anda.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "IP Camera vs CCTV Analog: Mana yang Lebih Baik?",
    category: "Teknologi",
    date: "8 Juli 2026",
    readTime: "6 Menit",
    summary: "Ketahui perbedaan mendasar antara sistem IP Camera modern dan CCTV Analog konvensional beserta kelebihan dan kekurangannya masing-masing.",
    content: [
      "Perdebatan antara IP Camera dan CCTV Analog seringkali membingungkan konsumen yang baru ingin memasang sistem keamanan. Keduanya memiliki fungsi dasar yang sama, namun bekerja dengan teknologi yang sangat berbeda.",
      "CCTV Analog mengirimkan sinyal video mentah melalui kabel coaxial ke perekam digital (DVR). Di DVR inilah sinyal dikompresi dan disimpan. Sistem analog terkenal sangat stabil, minim latensi, dan harganya relatif lebih ramah kantong. Sangat cocok untuk pemantauan standar.",
      "Di sisi lain, IP Camera (Internet Protocol Camera) bekerja dengan memproses video langsung di dalam kamera itu sendiri, lalu mengirimkannya sebagai sinyal digital melalui kabel jaringan (UTP/LAN) atau Wi-Fi ke perekam video jaringan (NVR).",
      "Kelebihan utama IP Camera adalah kualitas resolusi yang jauh lebih tinggi dan fleksibilitas kabel. Dengan teknologi PoE (Power over Ethernet), satu kabel LAN dapat menghantarkan daya listrik sekaligus data video, membuat instalasi lebih rapi.",
      "Selain itu, IP Camera modern dilengkapi fitur pintar (Artificial Intelligence) seperti deteksi gerakan cerdas, deteksi wajah, penghitungan objek, dan pemberitahuan langsung ke smartphone jika ada pergerakan mencurigakan.",
      "Kesimpulannya: Jika Anda mengutamakan budget efisien untuk pengawasan standar, CCTV Analog masih sangat mumpuni. Namun jika Anda membutuhkan integrasi pintar, resolusi sangat tajam, dan kemudahan ekspansi sistem di masa depan, IP Camera adalah pilihan terbaik.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Panduan Perawatan CCTV agar Berumur Panjang",
    category: "Maintenance",
    date: "5 Juli 2026",
    readTime: "4 Menit",
    summary: "Jangan tunggu sampai rusak! Simak tips maintenance berkala yang bisa Anda lakukan sendiri agar sistem kamera keamanan Anda berfungsi optimal 24 jam.",
    content: [
      "Seringkali pemilik rumah atau tempat usaha melupakan perawatan CCTV setelah selesai dipasang. Padahal sebagai perangkat yang bekerja non-stop 24 jam sehari, CCTV memerlukan maintenance berkala agar tidak rusak di saat-saat kritis.",
      "Berikut adalah beberapa langkah perawatan sederhana namun sangat penting yang bisa Anda lakukan secara berkala:",
      "1. Membersihkan Lensa Kamera: Debu, sarang laba-laba, atau bekas cipratan air hujan dapat membuat gambar menjadi buram atau kabur, terutama saat infrared aktif di malam hari. Lap kaca lensa secara hati-hati menggunakan kain microfiber lembut.",
      "2. Memeriksa Konektor dan Kabel: Pastikan konektor BNC atau RJ45 terpasang dengan kencang dan tidak berkarat. Periksa juga jalur kabel utama agar terhindar dari gigitan tikus atau gesekan dinding yang dapat memutus sinyal.",
      "3. Mengecek Kapasitas Hard Disk: Selalu pastikan perekam (NVR/DVR) Anda mendeteksi hard disk dan sedang melakukan perekaman (status 'Overwrite' aktif). Sering terjadi kasus di mana pemilik baru sadar hard disk rusak ketika ingin melihat rekaman kejadian penting.",
      "4. Membersihkan Debu pada DVR/NVR: Perekam biasanya diletakkan di dalam lemari atau sudut ruangan yang berdebu. Bersihkan lubang ventilasi dan kipas pendingin DVR/NVR agar mesin tidak mengalami overheat yang dapat merusak motherboard.",
      "Lakukan pengecekan ini minimal setiap 3 bulan sekali. Dengan perawatan yang rutin, sistem CCTV Anda akan selalu siap menjaga properti Anda kapan pun dibutuhkan.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Pentingnya Memasang CCTV Online di Tempat Usaha",
    category: "Tips & Panduan",
    date: "1 Juli 2026",
    readTime: "5 Menit",
    summary: "Kehadiran CCTV online bukan sekadar mencegah pencurian, tapi juga meningkatkan produktivitas staf dan memberikan bukti hukum yang kuat.",
    content: [
      "Untuk pemilik toko, gudang, kantor, atau pabrik, memasang CCTV bukan lagi sebuah pilihan melainkan kebutuhan operasional dasar. Terlebih lagi sistem CCTV saat ini sudah terhubung secara online ke smartphone Anda.",
      "Mengapa CCTV online sangat krusial bagi keberlangsungan bisnis Anda?",
      "Pertama, Pencegahan Tindak Kriminal: Keberadaan kamera pengawas yang terlihat jelas terbukti menurunkan niat pelaku kejahatan seperti pencurian barang dagangan atau pembobolan kasir.",
      "Kedua, Pemantauan Operasional Real-Time: Sebagai pemilik usaha, Anda tidak bisa berada di toko atau pabrik setiap saat. Dengan aplikasi CCTV online di smartphone, Anda bisa memantau kinerja staf, antrean pelanggan, serta aktivitas logistik di gudang dari mana saja.",
      "Ketiga, Meningkatkan Produktivitas Karyawan: Karyawan cenderung bekerja dengan lebih disiplin dan profesional ketika mereka menyadari area kerja mereka terpantau dengan baik.",
      "Keempat, Bukti Hukum yang Sah: Jika terjadi perselisihan transaksi, klaim barang rusak dari pelanggan, atau kehilangan inventaris, rekaman CCTV dapat menjadi bukti visual objektif yang sangat kuat untuk menyelesaikan masalah secara adil.",
      "Layanan instalasi Ronda CCTV sudah mencakup setup aplikasi online di HP Anda secara gratis, sehingga Anda langsung siap memantau bisnis Anda sejak hari pertama pemasangan.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
  },
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const articles: Article[] = rawArticles.map((a) => ({
  ...a,
  slug: slugify(a.title),
}));

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug) || null;
}
