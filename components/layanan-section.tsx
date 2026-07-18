const layanan = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill="currentColor"
        />
        <path
          d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Instalasi CCTV",
    desc: "Pemasangan kamera indoor/outdoor dengan jalur kabel rapi, terstruktur, dan finishing profesional.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <rect x="6" y="7" width="4" height="6" rx="1" fill="currentColor" />
        <rect x="14" y="7" width="4" height="6" rx="1" fill="currentColor" />
        <path
          d="M12 17v4M8 21h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Upgrade Sistem",
    desc: "Tambah channel, upgrade resolusi kamera, perbarui DVR/NVR, dan integrasi perangkat baru.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Maintenance",
    desc: "Cek berkala, bersihkan lensa, perbaiki kerusakan, rapikan instalasi lama, dan optimasi kualitas gambar.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 8v4l2 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Konsultasi Keamanan",
    desc: "Survey lokasi, rekomendasi jumlah titik kamera, tipe perangkat, dan tata letak optimal untuk properti Anda.",
  },
];

export default function LayananSection() {
  return (
      <section
        id="layanan"
        className="py-20 px-4 bg-surface"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3 text-secondary">
            Layanan Kami
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-body">
            Solusi lengkap untuk kebutuhan keamanan properti Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {layanan.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 text-center border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(24,136,205,0.1)]"
            >
              <div className="w-[60px] h-[60px] mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-primary transition-all duration-300 bg-primary/10 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
<h3
            className="text-xl font-bold mb-2.5 text-secondary"
          >
                {item.title}
              </h3>
<p
            className="text-[15px] leading-relaxed m-0 text-body"
          >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
