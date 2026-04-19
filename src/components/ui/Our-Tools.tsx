import { TextSection } from "../reusable/text-section";
import { Tab } from "@/components/reusable/tab";
import { ourToolsTabData } from "@/lib/tabdata";

export const OurTools = () => {
  return (
    <section>
      <div className="mt-24">
        <TextSection
          subtitle="Our Tools"
          title="Intelligent & predictive forecasting"
          description="Accurately predict prep needs, labor requirements, and ingredient usage — powered by real-time data, weather trends, and customer behavior insights."
        />
      </div>

      {/* Tabs */}
      <Tab tabData={ourToolsTabData} />
    </section>
  );
};
