import Image from "next/image";
import ShadowCircle from "../reusable/shadow-circle";
import { TextSection } from "../reusable/text-section";

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  highlight?: string;
}

interface FeaturesProps {
  subtitle?: string;
  title?: string;
  description?: string;
  features?: FeatureItem[];
  columns?: number; // e.g. 3 or 4
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: "salad",
    title: "Prep Sync",
    desc: "Ingredient-level precision for smarter prep planning — minimize waste and maximize kitchen efficiency with AI-driven insights.",
  },
  {
    icon: "user",
    title: "Staff Flow",
    desc: "Optimize your workforce with intelligent scheduling and shift management that adapts to real-time needs.",
  },
  {
    icon: "book",
    title: "Menu Pulse",
    desc: "Know your stars and slumps. Track dish popularity and performance to fine-tune your menu and drive profitability.",
  },
  {
    icon: "toast",
    title: "Toast Link",
    desc: "Seamless POS Integration. Automatically sync data with platforms like Toast, Petpooja, and more — serve faster, manage smarter.",
  },
  {
    icon: "half-thermometer",
    title: "Weather Wise",
    desc: "Forecast-driven demand planning. Adjust prep and staff based on weather trends and local events to stay proactive.",
  },
  {
    icon: "microphone",
    title: "Voice Serve",
    desc: "AI-powered ordering and reservations. Let our Voice AI take calls, manage bookings, and reduce front-of-house pressure.",
  },
];

export default function Features({
  subtitle = "Features",
  title = "Analytics that feels like it's from the future",
  description = "Real-time, AI-powered insights that help you cut waste, boost profits, and stay ahead of customer demand — all in one smart dashboard.",
  features = defaultFeatures,
  columns = 3,
}: FeaturesProps) {
  return (
    <section className="bg-white flex justify-center text-center">
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="w-full mb-8 lg:mb-16">
          <TextSection
            subtitle={subtitle}
            title={title}
            description={description}
          />
        </div>
        <div className={`space-y-8 md:grid md:grid-cols-${columns} md:gap-12 md:space-y-0`}>
          {features.map((feature) => (
            <div key={feature.title}>
              <div className="flex justify-center mb-4">
                <ShadowCircle>
                  <Image
                    src={`/icons/${feature.icon}.svg`}
                    alt={feature.title}
                    width={24}
                    height={24}
                  />
                </ShadowCircle>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
              {feature.highlight && (
                <div className="mt-2 font-bold text-[#4d77ff] text-sm">{feature.highlight}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
