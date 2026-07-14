export default function TentangSection() {
  return (
    <section id="tentang" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#042327" }}
            >
              Tentang Kami
            </h2>
            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "#50595A" }}
            >
              Kami adalah penyedia jasa instalasi, pemasangan, dan maintenance
              CCTV yang melayani Surabaya, Sidoarjo, Gresik, dan sekitarnya.
              Didukung teknisi berpengalaman, kami siap memberikan solusi
              keamanan untuk rumah, kantor, toko, gudang, hingga pabrik dengan
              pemasangan yang rapi, berkualitas, dan bergaransi.
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "#50595A" }}
            >
              Setiap pemasangan ditangani oleh teknisi berpengalaman dengan
              garansi resmi. Kami menggunakan perangkat berkualitas terbaik agar
              sistem keamanan Anda berfungsi optimal.
            </p>
            <div className="flex gap-8">
              <div>
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#1888CD" }}
                >
                  100+
                </span>
                <p className="text-sm mt-1" style={{ color: "#50595A" }}>
                  Proyek Selesai
                </p>
              </div>
              <div>
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#1888CD" }}
                >
                  2+
                </span>
                <p className="text-sm mt-1" style={{ color: "#50595A" }}>
                  Tahun Pengalaman
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/hero.png"
                alt="Tim teknisi CCTV"
                className="w-full h-auto object-cover"
                style={{ maxHeight: 380 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
