import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikel & Edukasi Keamanan | Ronda CCTV",
  description:
    "Dapatkan tips keamanan, panduan instalasi, dan tren teknologi CCTV terbaru untuk melindungi aset berharga Anda.",
  openGraph: {
    title: "Artikel & Edukasi Keamanan | Ronda CCTV",
    description:
      "Dapatkan tips keamanan, panduan instalasi, dan tren teknologi CCTV terbaru untuk melindungi aset berharga Anda.",
    type: "website",
  },
};

export default function ArtikelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
