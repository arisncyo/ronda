"use client";

import Link from "next/link";
import { useState } from "react";

interface Article {
  id: string;
  title: string;
  slug: string;
  category: "Tips & Panduan" | "Teknologi" | "Maintenance";
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "5 Cara Memilih CCTV yang Tepat untuk Rumah Anda",
    slug: "cara-memilih-cctv-rumah",
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
    imageUrl:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "IP Camera vs CCTV Analog: Mana yang Lebih Baik?",
    slug: "ip-camera-vs-cctv-analog",
    category: "Teknologi",
    date: "8 Juli 2026",
    readTime: "6 Menit",
    summary:
      "Ketahui perbedaan mendasar antara sistem IP Camera modern dan CCTV Analog konvensional beserta kelebihan dan kekurangannya masing-masing.",
    content: [
      "Perdebatan antara IP Camera dan CCTV Analog seringkali membingungkan konsumen yang baru ingin memasang sistem keamanan. Keduanya memiliki fungsi dasar yang sama, namun bekerja dengan teknologi yang sangat berbeda.",
      "CCTV Analog mengirimkan sinyal video mentah melalui kabel coaxial ke perekam digital (DVR). Di DVR inilah sinyal dikompresi dan disimpan. Sistem analog terkenal sangat stabil, minim latensi, dan harganya relatif lebih ramah kantong. Sangat cocok untuk pemantauan standar.",
      "Di sisi lain, IP Camera (Internet Protocol Camera) bekerja dengan memproses video langsung di dalam kamera itu sendiri, lalu mengirimkannya sebagai sinyal digital melalui kabel jaringan (UTP/LAN) atau Wi-Fi ke perekam video jaringan (NVR).",
      "Kelebihan utama IP Camera adalah kualitas resolusi yang jauh lebih tinggi dan fleksibilitas kabel. Dengan teknologi PoE (Power over Ethernet), satu kabel LAN dapat menghantarkan daya listrik sekaligus data video, membuat instalasi lebih rapi.",
      "Selain itu, IP Camera modern dilengkapi fitur pintar (Artificial Intelligence) seperti deteksi gerakan cerdas, deteksi wajah, penghitungan objek, dan pemberitahuan langsung ke smartphone jika ada pergerakan mencurigakan.",
      "Kesimpulannya: Jika Anda mengutamakan budget efisien untuk pengawasan standar, CCTV Analog masih sangat mumpuni. Namun jika Anda membutuhkan integrasi pintar, resolusi sangat tajam, dan kemudahan ekspansi sistem di masa depan, IP Camera adalah pilihan terbaik.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Panduan Perawatan CCTV agar Berumur Panjang",
    slug: "panduan-perawatan-cctv",
    category: "Maintenance",
    date: "5 Juli 2026",
    readTime: "4 Menit",
    summary:
      "Jangan tunggu sampai rusak! Simak tips maintenance berkala yang bisa Anda lakukan sendiri agar sistem kamera keamanan Anda berfungsi optimal 24 jam.",
    content: [
      "Seringkali pemilik rumah atau tempat usaha melupakan perawatan CCTV setelah selesai dipasang. Padahal sebagai perangkat yang bekerja non-stop 24 jam sehari, CCTV memerlukan maintenance berkala agar tidak rusak di saat-saat kritis.",
      "Berikut adalah beberapa langkah perawatan sederhana namun sangat penting yang bisa Anda lakukan secara berkala:",
      "1. Membersihkan Lensa Kamera: Debu, sarang laba-laba, atau bekas cipratan air hujan dapat membuat gambar menjadi buram atau kabur, terutama saat infrared aktif di malam hari. Lap kaca lensa secara hati-hati menggunakan kain microfiber lembut.",
      "2. Memeriksa Konektor dan Kabel: Pastikan konektor BNC atau RJ45 terpasang dengan kencang dan tidak berkarat. Periksa juga jalur kabel utama agar terhindar dari gigitan tikus atau gesekan dinding yang dapat memutus sinyal.",
      "3. Mengecek Kapasitas Hard Disk: Selalu pastikan perekam (NVR/DVR) Anda mendeteksi hard disk dan sedang melakukan perekaman (status 'Overwrite' aktif). Sering terjadi kasus di mana pemilik baru sadar hard disk rusak ketika ingin melihat rekaman kejadian penting.",
      "4. Membersihkan Debu pada DVR/NVR: Perekam biasanya diletakkan di dalam lemari atau sudut ruangan yang berdebu. Bersihkan lubang ventilasi dan kipas pendingin DVR/NVR agar mesin tidak mengalami overheat yang dapat merusak motherboard.",
      "Lakukan pengecekan ini minimal setiap 3 bulan sekali. Dengan perawatan yang rutin, sistem CCTV Anda akan selalu siap menjaga properti Anda kapan pun dibutuhkan.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Pentingnya Memasang CCTV Online di Tempat Usaha",
    slug: "pentingnya-cctv-online-bisnis",
    category: "Tips & Panduan",
    date: "1 Juli 2026",
    readTime: "5 Menit",
    summary:
      "Kehadiran CCTV online bukan sekadar mencegah pencurian, tapi juga meningkatkan produktivitas staf dan memberikan bukti hukum yang kuat.",
    content: [
      "Untuk pemilik toko, gudang, kantor, atau pabrik, memasang CCTV bukan lagi sebuah pilihan melainkan kebutuhan operasional dasar. Terlebih lagi sistem CCTV saat ini sudah terhubung secara online ke smartphone Anda.",
      "Mengapa CCTV online sangat krusial bagi keberlangsungan bisnis Anda?",
      "Pertama, Pencegahan Tindak Kriminal: Keberadaan kamera pengawas yang terlihat jelas terbukti menurunkan niat pelaku kejahatan seperti pencurian barang dagangan atau pembobolan kasir.",
      "Kedua, Pemantauan Operasional Real-Time: Sebagai pemilik usaha, Anda tidak bisa berada di toko atau pabrik setiap saat. Dengan aplikasi CCTV online di smartphone, Anda bisa memantau kinerja staf, antrean pelanggan, serta aktivitas logistik di gudang dari mana saja.",
      "Ketiga, Meningkatkan Produktivitas Karyawan: Karyawan cenderung bekerja dengan lebih disiplin dan profesional ketika mereka menyadari area kerja mereka terpantau dengan baik.",
      "Keempat, Bukti Hukum yang Sah: Jika terjadi perselisihan transaksi, klaim barang rusak dari pelanggan, atau kehilangan inventaris, rekaman CCTV dapat menjadi bukti visual objektif yang sangat kuat untuk menyelesaikan masalah secara adil.",
      "Layanan instalasi Ronda CCTV sudah mencakup setup aplikasi online di HP Anda secara gratis, sehingga Anda langsung siap memantau bisnis Anda sejak hari pertama pemasangan.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = ["Semua", "Tips & Panduan", "Teknologi", "Maintenance"];

export default function ArtikelPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Semua" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-[70px] pb-16">
      <section className="relative bg-[#1888CD] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Artikel & Edukasi Keamanan
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-0">
            Dapatkan tips praktis, panduan perawatan, dan informasi teknologi
            CCTV terbaru untuk menjaga keamanan keluarga dan tempat usaha Anda.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-10">
        <div className="bg-white rounded-2xl p-6 border border-[#eef2f6] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === cat
                  ? "bg-[#1888CD] text-white shadow-md shadow-[#1888CD]/20"
                  : "bg-[#f1f5f9] text-[#50595A] hover:bg-[#e2e8f0]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-[#f1f5f9] text-[#042327] rounded-xl border border-transparent focus:border-[#1888CD] focus:bg-white outline-none transition-all duration-300 text-sm font-medium"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-8">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#eef2f6] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-[#042327]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} Baca</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#042327] mb-2.5 leading-snug line-clamp-2 group-hover:text-[#1888CD] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#50595A] leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#1888CD] hover:text-[#042327] transition-colors duration-300 cursor-pointer self-start"
                  >
                    Baca Selengkapnya
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#eef2f6] shadow-sm">
            <svg
              className="w-16 h-16 text-slate-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="text-xl font-bold text-[#042327] mb-1">
              Artikel Tidak Ditemukan
            </h3>
            <p className="text-sm text-[#50595A]">
              Tidak ada artikel yang cocok dengan kata kunci pencarian atau
              kategori Anda.
            </p>
          </div>
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#1888CD] to-[#042327] text-white p-8 md:p-12 overflow-hidden shadow-lg shadow-[#1888CD]/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Ingin Meningkatkan Keamanan Properti Anda?
            </h3>
            <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
              Tim ahli kami siap membantu Anda melakukan survey lokasi,
              merekomendasikan titik pemasangan kamera, dan memberikan estimasi
              biaya secara gratis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#042327] hover:bg-[#f0f4f8] font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-300 no-underline shadow-md"
              >
                Konsultasi WhatsApp Sekarang
              </a>
              <Link
                href="/#paket"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/20 hover:bg-white/10 font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-300 no-underline"
              >
                Lihat Paket CCTV
              </Link>
            </div>
          </div>
        </div>
      </section>

      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="relative h-60 sm:h-72 w-full bg-slate-100 flex-shrink-0">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2.5 border border-white/10 transition-colors duration-300 cursor-pointer shadow-lg outline-none"
                aria-label="Tutup Artikel"
              >
                <svg
                  className="w-5.5 h-5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="bg-[#1888CD] text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mt-3 leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-white/70 font-semibold mt-2.5">
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime} Baca</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-grow">
              <div className="prose max-w-none text-[#50595A] text-base leading-relaxed space-y-4">
                {activeArticle.content.map((paragraph, index) => (
                  <p key={`${activeArticle.id}-p-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-bold text-[#042327]">
                    Butuh solusi untuk CCTV Anda?
                  </h4>
                  <p className="text-xs text-[#50595A] mt-0.5">
                    Hubungi kami untuk survey lokasi dan konsultasi gratis.
                  </p>
                </div>
                <a
                  href={`https://wa.me/628000000000?text=Halo%20Ronda%20CCTV,%20saya%20membaca%20artikel%20"${encodeURIComponent(
                    activeArticle.title,
                  )}"%20dan%20ingin%20tanya%20mengenai%20layanan%20CCTV.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1888CD] hover:bg-[#042327] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 no-underline"
                >
                  Tanya Lebih Lanjut via WA
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
