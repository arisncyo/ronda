const brands = [
  { src: "/hikvision.png", alt: "Hikvision" },
  { src: "/dahua.png", alt: "Dahua" },
  { src: "/hilook.png", alt: "HiLook" },
  { src: "/uniview.png", alt: "Uniview" },
  { src: "/tiandy.png", alt: "Tiandy" },
  { src: "/hiview.png", alt: "Hiview" },
];

export default function BrandStrip() {
  return (
    <div style={{ background: "#f0f5f9", padding: "30px 0" }}>
      <div className="max-w-6xl mx-auto px-4">
        <p
          className="text-center text-sm font-semibold mb-6 uppercase tracking-widest"
          style={{ color: "#8a9aa8" }}
        >
          Dipercaya & Bermitra Dengan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map((brand) => (
            <img
              key={brand.src}
              src={brand.src}
              alt={brand.alt}
              className="h-9 w-auto opacity-50 transition-all duration-300 grayscale contrast-[0.8] hover:opacity-100 hover:scale-105 hover:grayscale-0 hover:contrast-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
