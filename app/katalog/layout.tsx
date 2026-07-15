import type { Metadata } from "next";
import { products } from "@/data/products";

const siteUrl = "https://ronda-cctv.vercel.app";

export const metadata: Metadata = {
  title: "Katalog Produk CCTV",
  description:
    "Katalog lengkap produk CCTV dari berbagai merek terpercaya: kamera indoor outdoor, NVR DVR, hard disk, kabel, switch PoE, dan paket pemasangan. Garansi resmi, harga bersaing.",
  openGraph: {
    title: "Katalog Produk CCTV | Ronda CCTV",
    description:
      "Jelajahi katalog produk CCTV Ronda: kamera Hikvision, Dahua, HiLook, Uniview, perekam NVR DVR, aksesoris, dan paket pemasangan lengkap.",
    type: "website",
    url: `${siteUrl}/katalog`,
    images: [{ url: "/hero.png", width: 800, height: 600, alt: "Katalog Produk CCTV - Ronda CCTV" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/katalog`,
  },
};

const productListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Katalog Produk CCTV",
  description: "Katalog lengkap produk CCTV dari Ronda CCTV",
  url: `${siteUrl}/katalog`,
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/katalog/${product.slug}`,
    item: {
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
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Beranda", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Katalog Produk", item: `${siteUrl}/katalog` },
  ],
};

export default function KatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
