import HeroSection from "@/components/hero.section";
import DashboardShowcase from "@/components/dashboard-showcase";
import Features from "@/components/ui/features";
import Faq from "@/components/ui/faq";
// import Brands from "@/components/ui/brands";
import PowerUnlock from "@/components/ui/power-unlock";
import ContactUs from "@/components/ui/contact-us";
import SupportCTA from "@/components/ui/support-cta";
import DashboardHero from "@/components/ui/dashboard-hero";
// import RoiCalculator from "@/components/ui/roi-calculator";
import IntegrationsSection from "@/components/ui/integration-section";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import WhoWeServe from "@/components/ui/who-we-server";

import { testimonialData } from "@/lib/constaints";
import { OurTools } from "@/components/ui/Our-Tools";
import StackLogos from "@/components/StackLogos";
import FeaturesSection from "@/components/FeaturesSection";
import AiKitchenSection from "@/components/AiKitchenSection";
import AiManagerSection from "@/components/AiManagerSection";
import KitchenPlanSection from "@/components/KitchenPlanSection";
import IntelligenceCenter from "@/components/IntelligenceCenter";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br overflow-x-hidden from-[#f8f9ff] via-[#f3f5ff] to-[#eef1ff]">
      <HeroSection />
      {/* <DashboardShowcase /> */}
      {/* <Brands /> */}
      <StackLogos />
      {/* <Features /> */}
      <FeaturesSection />
      <AiKitchenSection />
      <AiManagerSection />
      <KitchenPlanSection />
      <IntelligenceCenter />
      <StatsStrip />
      <CTASection
        title="See how much you're losing — and how to fix it"
        subtitle="Join 200+ restaurants using Orkeneo to increase profits daily"
        primaryText="Get My AI Plan"
        secondaryText="See My Savings"
        avatars={[
          "/avatar/user-1.png",
          "/avatar/user-2.png",
          "/avatar/user-3.png",
        ]}
      />
      {/* <TestimonialCarousel testimonial={testimonialData} />
      <PowerUnlock />
      <IntegrationsSection />
      <WhoWeServe />
      <OurTools /> */}
      {/* <RoiCalculator /> */}
      {/* <Faq />
      <SupportCTA />
      <DashboardHero />
      <ContactUs /> */}
    </main>
  );
}
