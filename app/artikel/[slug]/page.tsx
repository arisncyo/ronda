import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticleBySlug, type Article } from "@/data/articles";

const siteUrl = "https://ronda-cctv.vercel.app";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Ronda CCTV`,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      images: [{ url: article.imageUrl, width: 600, height: 400, alt: article.title }],
    },
  };
}

function ArticleJsonLd({ article }: { article: Article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: article.imageUrl,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Ronda CCTV" },
    publisher: { "@type": "Organization", name: "Ronda CCTV" },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

function BreadcrumbJsonLd({ article }: { article: Article }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${siteUrl}/artikel` },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd article={article} />
      <BreadcrumbJsonLd article={article} />

      <main className="min-h-screen bg-[#f8fafc] pt-[70px] pb-16">
        <section className="bg-white border-b border-[#eef2f6]">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-[#50595A]">
              <Link href="/" className="hover:text-[#1888CD] transition-colors no-underline text-[#50595A]">
                Beranda
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/artikel" className="hover:text-[#1888CD] transition-colors no-underline text-[#50595A]">
                Artikel
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-[#1888CD] font-semibold truncate max-w-[250px]">{article.title}</span>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 mt-8">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#50595A] hover:text-[#1888CD] transition-colors no-underline mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Kembali ke Artikel
          </Link>

          <article className="bg-white rounded-3xl overflow-hidden border border-[#eef2f6] shadow-sm">
            <div className="relative h-64 sm:h-80 w-full bg-slate-100">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-[#1888CD] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mt-3 leading-tight">
                  {article.title}
                </h1>
                <div className="flex items-center gap-3 text-xs text-white/70 font-semibold mt-2.5">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} Baca</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <div className="prose max-w-none text-[#50595A] text-base leading-relaxed space-y-5">
                {article.content.map((paragraph, index) => (
                  <p key={`${article.id}-p-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-[#eef2f6] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f8fafc] rounded-2xl p-6">
                <div>
                  <h4 className="text-sm font-bold text-[#042327]">
                    Butuh solusi untuk CCTV Anda?
                  </h4>
                  <p className="text-xs text-[#50595A] mt-0.5">
                    Hubungi kami untuk survey lokasi dan konsultasi gratis.
                  </p>
                </div>
                <a
                  href={`https://wa.me/628000000000?text=Halo%20Ronda%20CCTV,%20saya%20membaca%20artikel%20"${encodeURIComponent(article.title)}"%20dan%20ingin%20tanya%20mengenai%20layanan%20CCTV.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1888CD] hover:bg-[#042327] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 no-underline whitespace-nowrap"
                >
                  Tanya Lebih Lanjut via WA
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="max-w-4xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-black text-[#042327] mb-5">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articles
              .filter((a) => a.id !== article.id)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/artikel/${related.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#eef2f6] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline"
                >
                  <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={related.imageUrl}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#1888CD] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-1.5">
                      <span>{related.date}</span>
                      <span>•</span>
                      <span>{related.readTime} Baca</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#042327] leading-snug group-hover:text-[#1888CD] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
