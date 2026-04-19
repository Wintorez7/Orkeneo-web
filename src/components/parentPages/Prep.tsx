"use client";
import { Button } from "@/components/reusable/button";
import ShadowCircle from "@/components/reusable/shadow-circle";
import { StatsSection } from "@/components/reusable/stats-section";
import { StorySection } from "@/components/reusable/story-section";
import { TextSection } from "@/components/reusable/text-section";
import Brands from "@/components/ui/brands";
import { PromoSection } from "@/components/ui/promo-section";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { features, prepwiseStats, testimonialData } from "@/lib/constaints";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookDemoModal } from "@/components/ui/book-demo-modal";

export default function Prep() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mx-auto py-8">
      <div className="mx-auto my-8">
        <TextSection
          subtitle="Features"
          title="PrepWise - Ingredient level forecast daily"
    description="PrepWise gives you precise, daily ingredient-level forecasts so your kitchen always knows exactly what to prep—and nothing more. Eliminate waste, cut costs, and ensure your team is ready for every shift with smart, data-backed planning."
          subtitleBgColor={"#eff6ff"}
        />
      </div>

      <div className="flex justify-center gap-4 py-3">
        <Button variant="outline" size="md" className="text-gray-700" onClick={() => router.push("/about-us")}>
          Learn more
        </Button>
        <Button
          variant="default"
          size="md"
          onClick={() => setIsModalOpen(true)}
        >
          Get Early Access
        </Button>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative max-w-3xl mx-auto py-8">
            <Image
              src="/images/daily-prep-sheet.png"
              alt="Mockup"
              width={768}
              height={512}
              className="w-full rounded-xl border-4 border-gray-900 shadow-xl"
            />
            <Image
              src="/images/iPhone-mockup.png"
              alt="iPhone-mockup"
              width={244}
              height={497}
              className="absolute left-4 sm:left-10 md:left-[-108px] bottom-[-40px] sm:bottom-[-60px] md:bottom-[-32px] w-32 sm:w-40 md:w-60 rounded-xl border-4"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-6 lg:px-8 my-20">
          {features.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-start sm:items-center text-start sm:text-center gap-3"
            >
              <ShadowCircle>
                <Image src={icon} alt={title} width={20} height={20} />
              </ShadowCircle>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <TestimonialCarousel testimonial={testimonialData} />
      <StatsSection
        title="Elevating Profits & Efficiency"
        subtitle="PrepWise has helped hundreds of Restaurants in"
        image={"/images/prepwise-elevating-profits.png"}
        stats={prepwiseStats}
        isSet={true}
      />
      <Brands isbgSet={true} />
      <StorySection title="PrepWise Success Stories" />
      <PromoSection />
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
