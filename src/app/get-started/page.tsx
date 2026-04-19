// app/booking/page.jsx
import CalendlyEmbed from "@/components/reusable/calendly-embed";
import { TextSection } from "@/components/reusable/text-section";
import Brands from "@/components/ui/brands";
import DashboardHero from "@/components/ui/dashboard-hero";
// import OptimizeRestaurantCTA from "@/components/ui/optimise-restaurant-cta";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.getStarted;

export default function GetStartedPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto mb-24">
          <TextSection
            subtitle="Let’s talk"
            title="Find how Orkeneo can boost your business"
            description="We discuss your restaurant business for quick 30 minutes to provide clear road-map ahead"
          />
        </div>
        
        <div className="rounded-xl -mt-16">
          <CalendlyEmbed 
            url="https://calendly.com/gulamgaus156/30min" 
            height="700px" 
          />
        </div>
      </div>

      <Brands />
      <DashboardHero />
      {/* <OptimizeRestaurantCTA /> */}
    </div>
  );
}