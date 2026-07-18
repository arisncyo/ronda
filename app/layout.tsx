import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ronda-cctv.vercel.app";

export const metadata: Metadata = {
  title: {
    default:
      "Ronda CCTV | Jasa Pemasangan CCTV Profesional Surabaya Sidoarjo Gresik",
    template: "%s | Ronda CCTV",
  },
  description:
      "Layanan pemasangan CCTV profesional untuk rumah, kantor, gudang, dan kawasan industri di Surabaya, Sidoarjo, Gresik. Gratis konsultasi, garansi resmi, dikerjakan teknisi berpengalaman.",
  keywords: [
    "jasa pemasangan CCTV",
    "pasang CCTV Surabaya",
    "CCTV Sidoarjo",
    "CCTV Gresik",
    "tukang CCTV",
    "instalasi kamera pengawas",
    "harga CCTV murah",
    "paket CCTV rumah",
    "CCTV kantor",
    "Ronda CCTV",
  ],
  authors: [{ name: "Ronda CCTV" }],
  creator: "Ronda CCTV",
  publisher: "Ronda CCTV",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Ronda CCTV",
    title:
      "Ronda CCTV | Jasa Pemasangan CCTV Profesional Surabaya Sidoarjo Gresik",
    description:
    "Layanan pemasangan CCTV profesional untuk rumah, kantor, gudang, dan kawasan industri di Surabaya, Sidoarjo, Gresik. Gratis konsultasi, garansi resmi, dikerjakan teknisi berpengalaman.",
    url: siteUrl,
    images: [
      {
        url: "/hero.png",
        width: 800,
        height: 600,
        alt: "Ronda CCTV - Jasa Pemasangan CCTV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronda CCTV | Jasa Pemasangan CCTV Profesional",
    description:
      "Jasa pemasangan CCTV profesional di Surabaya, Sidoarjo, Gresik & sekitarnya. Gratis konsultasi.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Ronda CCTV",
  description:
    "Layanan pemasangan CCTV profesional untuk rumah, kantor, gudang, dan kawasan industri di Surabaya, Sidoarjo, Gresik.",
  url: siteUrl,
  telephone: process.env.NEXT_PUBLIC_WHATSAPP?.replace(/^62/, "+62") || "+628000000000",
  email: "info@rondacctv.com",
  image: `${siteUrl}/hero.png`,
  logo: `${siteUrl}/favicon.svg`,
  areaServed: ["Surabaya", "Sidoarjo", "Gresik"],
  priceRange: "Rp2.399.000 - Rp12.499.000",
  openingHours: "Mo-Su 08:00-20:00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: [`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${afacad.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-lg antialiased text-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
