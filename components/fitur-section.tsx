const fitur_list = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="5" y="2" width="14" height="20" rx="3"
          stroke="currentColor" strokeWidth="1.5"
        />
        <line
          x1="12" y1="18" x2="12" y2="19"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <path
          d="M8 7h8M8 10h6"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>
    ),
    title: "Pantau Lewat Smartphone",
    desc: "Akses live view dan rekaman langsung dari HP Android maupun iPhone dengan aplikasi yang mudah digunakan.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12.55a11 11 0 0114.08 0"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <path
          d="M1.42 9a16 16 0 0121.16 0"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <path
          d="M8.53 16.11a6 6 0 016.95 0"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Koneksi Stabil",
    desc: "Streaming video lancar dengan kualitas gambar jernih HD hingga 4K. Setiap detail terlihat jelas tanpa buffering.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M22 21v-2a4 4 0 00-3-3.87"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
        <path
          d="M16 3.13a4 4 0 010 7.75"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>
    ),
    title: "Multi-User",
    desc: "Bagikan akses ke keluarga atau tim dengan pengaturan hak akses yang aman dan fleksibel.",
  },
];

export default function FiturSection() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3 text-secondary">
            Fitur Favorit
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-body">
            Pantau rumah, kantor, toko, atau gudang secara real-time dari
            smartphone, tablet, atau komputer. Akses aman dan mudah kapan saja.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/akses-cctv-online.png"
                alt="Akses CCTV Online"
                width={600}
                height={400}
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
<h3
            className="text-3xl font-bold mb-3 text-secondary"
          >
                Pantau dari Mana Saja, Kapan Saja
              </h3>
<p
            className="text-lg leading-relaxed text-body"
          >
                Setelah instalasi, tim kami melakukan setup aplikasi dan
                konfigurasi perangkat hingga siap pakai. Anda tinggal menikmati
                pantauan langsung kapan pun dibutuhkan.
              </p>
            </div>
            <div className="space-y-3">
              {fitur_list.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-xl p-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary/10 text-primary"
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className="font-bold text-sm text-secondary"
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm mt-0.5 text-body">
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
