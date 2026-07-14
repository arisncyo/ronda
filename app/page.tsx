import BrandStrip from "@/components/brand-strip";
import CtaSection from "@/components/cta-section";
import FiturSection from "@/components/fitur-section";
import Hero from "@/components/hero";
import LayananSection from "@/components/layanan-section";
import PaketSection from "@/components/paket-section";
import TentangSection from "@/components/tentang-section";
import WhyUsSection from "@/components/why-us-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <PaketSection />
      <LayananSection />
      <FiturSection />
      <TentangSection />
      <WhyUsSection />
      <CtaSection />
    </>
  );
}
