import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { AboutUsSection } from "@/components/homepage/about-us/AboutUsSection";
import { CategoriesSection } from "@/components/homepage/categories/CategoriesSection";
import { FAQSection } from "@/components/homepage/faqs/FAQSection";
import { HeroSection } from "@/components/homepage/hero/HeroSection";
import { KeyFeaturesSection } from "@/components/homepage/key-features/KeyFeaturesSection";
import { MobileAppSection } from "@/components/homepage/mobile-app-section/MobileAppSection";
import { OurPromiseSection } from "@/components/homepage/our-promise-section/OurPromiseSection";
import { OurServicesSection } from "@/components/homepage/our-services/OurServicesSection";
import { PartnerWithUsSection } from "@/components/homepage/partner-with-us-section/PartnerWithUsSection";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <CategoriesSection />
      <OurPromiseSection />
      <OurServicesSection />
      <KeyFeaturesSection />
      <PartnerWithUsSection />

      <hr className="border-foreground/20" />
      <AboutUsSection />

      <MobileAppSection />

      <FAQSection />

      <AvailableCities />
      <Footer />
    </>
  );
}
