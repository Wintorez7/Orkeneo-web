import { StatsSection } from "@/components/reusable/stats-section";
import { TextSection } from "@/components/reusable/text-section";
import Brands from "@/components/ui/brands";
import ContactUs from "@/components/ui/contact-us";
import ContactSection from "@/components/ui/ContactSection";
import { aboutStats } from "@/lib/constaints";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.about;

export default function AboutUs() {
  return (
    <div className="mx-auto py-8">
      <div className="mx-auto mt-8">
        <TextSection
          subtitle="About us"
          title="About Orkeneo"
          description="Learn more about our company and the team behind it."
        />
      </div>

      <StatsSection
        title="We're only just getting started on our journey"
        subtitle="We've helped hundreds of Restaurant businesses"
        image={"/images/workspace-image.png"}
        stats={aboutStats}
      />
      <Brands />
      <ContactSection />
      <ContactUs />
    </div>
  );
}
