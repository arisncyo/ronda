const why_us = [
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Kualitas Terbaik",
    desc: "Menggunakan kamera CCTV berkualitas tinggi dengan resolusi tajam dan fitur lengkap",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
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
    title: "Pemasangan Profesional",
    desc: "Ditangani oleh teknisi berpengalaman di bidangnya",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="4"
          width="22"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="1"
          y1="10"
          x2="23"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect x="6" y="14" width="4" height="2" rx="0.5" fill="currentColor" />
        <rect x="14" y="14" width="4" height="2" rx="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Harga Terjangkau",
    desc: "Harga kompetitif tanpa mengorbankan kualitas dengan berbagai pilihan paket",
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Layanan After Sales",
    desc: "Tim support siap membantu kapan saja jika ada kendala atau pertanyaan",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3 text-secondary">
            Kenapa Harus Memilih Kami?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-body">
            Kami berkomitmen memberikan layanan terbaik untuk keamanan properti
            Anda
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {why_us.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl p-8 text-center border border-border shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(24,136,205,0.12)] hover:border-primary"
            >
              <div className="w-16 h-16 mx-auto mb-[18px] rounded-2xl bg-primary flex items-center justify-center text-white text-[26px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
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
