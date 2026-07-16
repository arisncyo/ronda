const pakets = [
  {
    label: "Hemat",
    name: "Paket 4 Channel",
    cocok: "Cocok untuk rumah & toko kecil",
    priceOld: "Rp 2.800.000",
    priceMain: "Rp 2.399.000",
    features: [
      "2 Kamera CCTV indoor/outdoor",
      "DVR 4 channel + HDD 500GB",
      "Kabel power & video 20m",
      "Power Supply",
      "Akses HP Online",
      "Jasa Instalasi"
    ],
    href: "#paket",
    featured: false,
  },
  {
    label: "Terlaris",
    name: "Paket 4 Channel",
    cocok: "Untuk rumah, toko & gudang kecil",
    priceOld: "Rp 5.500.000",
    priceMain: "Rp 4.799.000",
    features: [
      "4 Kamera CCTV indoor/outdoor",
      "DVR 4 channel + HDD 1TB",
      "Kabel power & video 30m",
      "Power Supply",
      "Akses HP Online",
      "Jasa Instalasi"
    ],
    href: "#paket",
    featured: true,
  },
  {
    label: "Bisnis",
    name: "Paket 8 Channel",
    cocok: "Untuk Kantor, Gudang dan area luas",
    priceOld: "Rp 12.499.000",
    priceMain: "Rp 12.499.000",
    features: [
      "8 Kamera CCTV + perencanaan jalur",
      "NVR 8 channel + HDD 2TB",
      "Kabel power & video 150m",
      "Power Supply",
      "Akses HP Online",
      "Jasa Instalasi"
    ],
    href: "#paket",
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
      style={{ color: "#1888CD" }}
      aria-hidden="true"
    >
      <path
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.85 5.35a.5.5 0 00-.7-.7L7.5 8.3 5.85 6.65a.5.5 0 10-.7.7l2 2a.5.5 0 00.7 0l4-4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function PaketSection() {
  return (
    <section id="paket" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ color: "#042327" }}>
            Paket Terlaris
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#50595A" }}>
            Harga sudah termasuk biaya pemasangan & bergaransi
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakets.map((paket) => (
            <div
              key={`${paket.name}-${paket.label}`}
              className={`relative bg-white rounded-2xl p-9 text-center border transition-all duration-300 ${paket.featured
                ? "border-[#1888CD] shadow-[0_8px_32px_rgba(24,136,205,0.15)] hover:shadow-[0_16px_40px_rgba(24,136,205,0.12)]"
                : "border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(24,136,205,0.12)]"
                } hover:-translate-y-2`}
            >
              {paket.featured && (
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-[#1888CD] text-white text-[13px] font-bold px-5 py-1 rounded-full tracking-[0.5px]">
                  Terlaris
                </div>
              )}

              <p
                className="text-[14px] font-semibold uppercase tracking-[1px] mb-2"
                style={{ color: "#1888CD" }}
              >
                {paket.label}
              </p>
              <h3
                className="text-2xl font-extrabold mb-1.5"
                style={{ color: "#042327" }}
              >
                {paket.name}
              </h3>
              <p className="text-sm mb-5" style={{ color: "#50595A" }}>
                {paket.cocok}
              </p>

              <div className="mb-6 pb-5 border-b border-[#eef2f6]">
                <span className="text-base text-[#999] line-through block mb-0.5">
                  {paket.priceOld}
                </span>
                <span
                  className="text-[32px] font-extrabold"
                  style={{ color: "#042327" }}
                >
                  {paket.priceMain}
                </span>
              </div>

              <ul className="list-none p-0 m-0 mb-7 text-left">
                {paket.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 py-1.5 text-sm"
                    style={{ color: "#50595A" }}
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/628000000000?text=Halo%20Ronda%20CCTV,%20saya%20tertarik%20dengan%20${encodeURIComponent(paket.name)}.%20Mohon%20info%20lebih%20lanjut.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-[family-name:var(--font-afacad)] text-base font-bold text-white py-3 rounded-xl no-underline transition-all duration-300 text-center bg-[#1888CD] hover:bg-[#042327]"
              >
                Pilih Paket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
