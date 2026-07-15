import type { Metadata } from "next";
import { articles } from "@/data/articles";

const siteUrl = "https://ronda-cctv.vercel.app";

export const metadata: Metadata = {
  title: "Artikel & Edukasi Keamanan",
  description:
    "Dapatkan tips keamanan, panduan instalasi, dan tren teknologi CCTV terbaru untuk melindungi aset berharga Anda. Dibawakan oleh Ronda CCTV.",
  openGraph: {
    title: "Artikel & Edukasi Keamanan | Ronda CCTV",
    description:
      "Dapatkan tips keamanan, panduan instalasi, dan tren teknologi CCTV terbaru.",
    type: "website",
    url: `${siteUrl}/artikel`,
    images: [{ url: "/hero.png", width: 800, height: 600, alt: "Artikel & Edukasi Keamanan - Ronda CCTV" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/artikel`,
  },
};

const articleListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Artikel & Edukasi Keamanan CCTV",
  description: "Tips keamanan, panduan instalasi, dan tren teknologi CCTV terbaru",
  url: `${siteUrl}/artikel`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/artikel/${article.slug}`,
    })),
  },
};

export default function ArtikelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListJsonLd) }}
      />
      {children}
    </>
  );
}
