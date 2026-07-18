import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel & Edukasi CCTV | Ronda CCTV",
  description:
    "Baca artikel dan panduan seputar CCTV, tips keamanan, perawatan kamera, dan teknologi terbaru untuk melindungi properti Anda.",
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
