import { AvailableCities } from "@/components/common/available-cities-section/AvailableCitiesSection";
import { AboutUsSection } from "@/components/homepage/about-us/AboutUsSection";
import { BrandsSection } from "@/components/homepage/brands-section/BrandsSection";
import { CategoriesSection } from "@/components/homepage/categories/CategoriesSection";
import { FAQSection } from "@/components/homepage/faqs/FAQSection";
import { HeroSection } from "@/components/homepage/hero/HeroSection";
import { KeyFeaturesSection } from "@/components/homepage/key-features/KeyFeaturesSection";
import { MobileAppSection } from "@/components/homepage/mobile-app-section/MobileAppSection";
import { OurPromiseSection } from "@/components/homepage/our-promise-section/OurPromiseSection";
import { OurServicesSection } from "@/components/homepage/our-services/OurServicesSection";
import { PartnerWithUsSection } from "@/components/homepage/partner-with-us-section/PartnerWithUsSection";
import { Footer } from "@/components/layouts/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <OurPromiseSection />
      <OurServicesSection />
      <KeyFeaturesSection />
      <PartnerWithUsSection />

      <BrandsSection />
      <AboutUsSection />

      <MobileAppSection />

      <FAQSection />

      <AvailableCities />
      <Footer />
    </>
  );
}
