import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ronda-cctv.vercel.app";

export const metadata: Metadata = {
  title: "Katalog Produk CCTV | Ronda CCTV",
  description:
    "Lihat katalog produk CCTV lengkap dari berbagai merek ternama. Kamera, DVR, NVR, aksesoris, dan paket pemasangan CCTV di Surabaya, Sidoarjo, Gresik.",
  alternates: {
    canonical: `${siteUrl}/katalog`,
  },
  openGraph: {
    title: "Katalog Produk CCTV | Ronda CCTV",
    description:
      "Lihat katalog produk CCTV lengkap dari berbagai merek ternama. Kamera, DVR, NVR, aksesoris, dan paket pemasangan CCTV.",
    images: [{ url: "/hero.png", width: 800, height: 600, alt: "Katalog Produk CCTV Ronda" }],
  },
};

export default function KatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
