import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug, type Product } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ronda-cctv.vercel.app";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} ${product.brand}`,
    description: `${product.description} Harga ${product.hasPrice ? product.price : "hubungi kami"}. Produk CCTV ${product.category} dari ${product.brand} — tersedia di Ronda CCTV.`,
    openGraph: {
      title: `${product.name} ${product.brand} | Ronda CCTV`,
      description: product.description,
      type: "website",
      images: [{ url: product.imageUrl, width: 600, height: 400, alt: `${product.name} - ${product.brand}` }],
    },
  };
}

function ProductJsonLd({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} ${product.brand}`,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    category: product.category,
    image: product.imageUrl,
    ...(product.hasPrice && {
      offers: {
        "@type": "Offer",
        price: product.price?.replace(/[^0-9]/g, ""),
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Katalog Produk", item: `${siteUrl}/katalog` },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BrandIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 text-[#1888CD]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.85 5.35a.5.5 0 00-.7-.7L7.5 8.3 5.85 6.65a.5.5 0 10-.7.7l2 2a.5.5 0 00.7 0l4-4z" fill="currentColor" />
    </svg>
  );
}

function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categorySlug = product.category === "Kamera CCTV" ? "kamera-cctv" : product.category.toLowerCase();

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd product={product} />

      <main className="min-h-screen bg-[#f8fafc] pt-[70px] pb-16">
        <section className="bg-white border-b border-[#eef2f6]">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-[#50595A]">
              <Link href="/" className="hover:text-[#1888CD] transition-colors no-underline text-[#50595A]">
                Beranda
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/katalog" className="hover:text-[#1888CD] transition-colors no-underline text-[#50595A]">
                Katalog
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#1888CD] font-semibold truncate max-w-[200px]">{product.name}</span>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-8">
          <Link
            href="/katalog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#50595A] hover:text-[#1888CD] transition-colors no-underline mb-6"
          >
            <ArrowLeftIcon />
            Kembali ke Katalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
              <img
                src={product.imageUrl}
                alt={`${product.name} ${product.brand}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1888CD] mb-3">
                <BrandIcon />
                {product.brand}
                <span className="ml-1 bg-[#f1f5f9] text-[#50595A] text-xs px-2.5 py-1 rounded-lg">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#042327] mb-4 leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-[#50595A] leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="bg-[#f8fafc] rounded-2xl p-6 mb-8">
                <h2 className="text-lg font-bold text-[#042327] mb-4">
                  Spesifikasi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-2">
                      <CheckIcon />
                      <span className="text-sm text-[#50595A]">
                        <span className="font-semibold text-[#042327]">{spec.label}:</span> {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div>
                  {product.hasPrice ? (
                    <>
                      <p className="text-sm text-[#50595A] font-medium mb-0.5">Harga</p>
                      <span className="text-3xl font-extrabold text-[#042327]">{product.price}</span>
                    </>
                  ) : (
                    <span className="text-base font-bold text-[#50595A]">
                      Hubungi kami untuk informasi harga
                    </span>
                  )}
                </div>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Halo%20Ronda%20CCTV,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}%20dan%20ingin%20tanya%20lebih%20lanjut.%0A%0AProduk:%20${encodeURIComponent(product.name)}%0AMerek:%20${encodeURIComponent(product.brand)}%0AKategori:%20${encodeURIComponent(product.category)}%0AHarga:%20${encodeURIComponent(product.hasPrice ? product.price || "" : "Hubungi untuk harga")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-6 py-3.5 rounded-2xl transition-all duration-300 no-underline shadow-lg shadow-[#25D366]/25 ml-auto"
                >
                  <WAIcon className="w-5 h-5" />
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-black text-[#042327] mb-5">
            Deskripsi Produk
          </h2>
          <div className="bg-white rounded-2xl p-8 border border-[#eef2f6] space-y-4">
            {product.longDescription.map((paragraph, i) => (
              <p key={i} className="text-base text-[#50595A] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-black text-[#042327] mb-5">
            Produk Lainnya di Kategori {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/katalog/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#eef2f6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline"
                >
                  <div className="relative h-36 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={related.imageUrl}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-[#1888CD]">{related.brand}</span>
                    <h3 className="text-sm font-bold text-[#042327] mt-0.5 leading-snug group-hover:text-[#1888CD] transition-colors">
                      {related.name}
                    </h3>
                    <div className="mt-2 pt-2 border-t border-[#eef2f6]">
                      {related.hasPrice ? (
                        <span className="text-sm font-extrabold text-[#1888CD]">{related.price}</span>
                      ) : (
                        <span className="text-xs font-semibold text-[#50595A]">Hubungi untuk harga</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 mt-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1888CD] to-[#042327] text-white p-8 md:p-12 overflow-hidden shadow-lg">
            <div className="relative z-10 text-center max-w-xl mx-auto">
              <span className="text-4xl mb-3 block">💬</span>
              <h3 className="text-2xl sm:text-3xl font-black mb-3">
                Belum Yakin dengan Pilihan Anda?
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">
                Tim ahli kami siap membantu Anda memilih produk yang tepat sesuai
                kebutuhan, luas area, dan budget. Gratis!
              </p>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}?text=Halo%20Ronda%20CCTV,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}%20dan%20ingin%20konsultasi.%20Mohon%20bantuannya.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-8 py-3.5 rounded-2xl transition-all duration-300 no-underline shadow-lg shadow-[#25D366]/30"
              >
                <WAIcon className="w-5 h-5" />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
