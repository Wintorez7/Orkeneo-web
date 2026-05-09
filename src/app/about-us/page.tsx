import { StatsSection } from "@/components/reusable/stats-section";
import { TextSection } from "@/components/reusable/text-section";
import Brands from "@/components/ui/brands";
import ContactUs from "@/components/ui/contact-us";
import ContactSection from "@/components/ui/ContactSection";
import { aboutStats } from "@/lib/constaints";
import { metaData } from "@/lib/metadata";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp } from "@/lib/animations/variants";

export const metadata = metaData.about;

export default function AboutUs() {
  return (
    <div className="mx-auto pt-24 pb-16 bg-linear-to-b from-[#F0F3FF] via-white to-white font-sans overflow-hidden">
      <MotionStagger className="max-w-7xl mx-auto space-y-12">
        <MotionWrapper variants={fadeUp}>
          <div className="mx-auto mt-8">
            <TextSection
              subtitle="About us"
              title="About Orkeneo"
              description="Learn more about our company and the team behind it."
            />
          </div>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <StatsSection
            title="We're only just getting started on our journey"
            subtitle="We've helped hundreds of Restaurant businesses"
            image={"/images/workspace-image.png"}
            stats={aboutStats}
          />
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <Brands />
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <ContactSection />
        </MotionWrapper>

        <MotionWrapper variants={fadeUp}>
          <ContactUs />
        </MotionWrapper>
      </MotionStagger>
    </div>
  );
}
