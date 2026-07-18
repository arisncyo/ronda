import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ronda-cctv.vercel.app";

export const metadata: Metadata = {
  title: "Artikel & Edukasi CCTV | Ronda CCTV",
  description:
    "Baca artikel dan panduan seputar CCTV, tips keamanan, perawatan kamera, dan teknologi terbaru untuk melindungi properti Anda.",
  alternates: {
    canonical: `${siteUrl}/artikel`,
  },
  openGraph: {
    title: "Artikel & Edukasi CCTV | Ronda CCTV",
    description:
      "Baca artikel dan panduan seputar CCTV, tips keamanan, perawatan kamera, dan teknologi terbaru.",
    images: [{ url: "/hero.png", width: 800, height: 600, alt: "Artikel CCTV Ronda" }],
  },
};

export default function ArtikelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
