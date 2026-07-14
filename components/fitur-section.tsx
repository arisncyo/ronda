const fitur_list = [
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="18"
          x2="12"
          y2="19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Pantau Lewat Smartphone",
    desc: "Akses live view dan rekaman CCTV langsung dari HP Android maupun iPhone kapan saja dan di mana saja dengan aplikasi yang mudah digunakan.",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12.55a11 11 0 0114.08 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.42 9a16 16 0 0121.16 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8.53 16.11a6 6 0 016.95 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Koneksi Stabil",
    desc: "Nikmati streaming video yang lancar dengan kualitas gambar jernih beresolusi HD hingga 4K (sesuai spesifikasi kamera), sehingga setiap detail dapat terlihat dengan jelas.",
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M22 21v-2a4 4 0 00-3-3.87"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Multi-User",
    desc: "Bagikan akses CCTV kepada anggota keluarga, pemilik usaha, atau tim keamanan dengan pengaturan hak akses yang aman dan fleksibel.",
  },
];

export default function FiturSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#042327" }}>
            Fitur Favorit
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#50595A" }}>
            Nikmati kemudahan memantau CCTV secara real-time kapan saja dan di
            mana saja melalui smartphone, tablet, atau komputer. Dengan akses
            yang aman dan mudah, Anda dapat mengawasi rumah, kantor, toko,
            gudang, maupun pabrik secara praktis untuk meningkatkan keamanan dan
            ketenangan setiap saat.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/akses-cctv-online.png"
              alt="Akses CCTV Online"
              className="w-full max-w-lg h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h3
              className="text-3xl font-bold mb-4"
              style={{ color: "#042327" }}
            >
              Akses CCTV Online 24/Jam – Pantau dari Mana Saja
            </h3>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#50595A" }}
            >
              Pantau Rumah hingga Pabrik Secara Real-Time Awasi rumah, kantor,
              toko, atau gudang langsung dari smartphone (Android/iOS), tablet,
              atau laptop. Terima beres! Jasa pasang CCTV kami sudah termasuk
              setup aplikasi dan konfigurasi perangkat sampai siap pakai.
            </p>
            <div className="space-y-4">
              {fitur_list.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(24,136,205,0.1)",
                      color: "#1888CD",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      className="font-semibold text-sm"
                      style={{ color: "#042327" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#50595A" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
