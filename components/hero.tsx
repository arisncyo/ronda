import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#1888CD] text-white pt-32 pb-16 md:pb-24 lg:pb-32 z-10">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-5">
              Jasa Instalasi, Pemasangan &{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-100 to-white bg-clip-text text-transparent">
                Maintenance CCTV
              </span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-6 max-w-xl">
              Amankan aset berharga Anda dengan sistem CCTV kualitas terbaik.
              Layanan profesional, gratis konsultasi, dan bergaransi untuk
              rumah, toko, kantor, ruko, gudang, hingga pabrik.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/628000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 font-sans text-[17px] font-bold px-7 py-4 rounded-xl transition-all duration-300 no-underline bg-white text-[#042327] hover:bg-[#f0f4f8] hover:scale-[1.03] hover:shadow-lg hover:shadow-sky-500/10 active:scale-95"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </a>
              <Link
                href="/paket"
                className="group flex items-center gap-2 font-sans text-[17px] font-bold px-7 py-4 rounded-xl transition-all duration-300 no-underline bg-[#042327] text-white hover:bg-[#063238] border border-white/10 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/20 active:scale-95"
              >
                Lihat Paket
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center relative">
            <div className="absolute w-85 h-85 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute w-50 h-50 rounded-full border border-white/20" />
            <div className="relative z-10 p-4">
              <div
                className="mask-[radial-gradient(ellipse_70%_50%_at_50%_50%,black_30%,transparent_70%)]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 70%)",
                }}
              >
                <Image
                  src="/hero.png"
                  alt="Teknisi sedang memasang CCTV"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover floating-anim transition-all duration-700 group-hover:scale-105"
                  style={{ maxHeight: 400 }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .floating-anim {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .scan-line-anim {
          animation: scan 5s linear infinite;
        }
        @keyframes scan {
          0% { top: -2%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 102%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
