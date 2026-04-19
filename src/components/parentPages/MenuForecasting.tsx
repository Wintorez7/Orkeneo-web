"use client";
import React, { useState } from "react";
import { TextSection } from "@/components/reusable/text-section";
import { Button } from "@/components/reusable/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TestimonialInfo } from "@/components/ui/testominial-info";
import { BenefitsForecastsSection } from "@/components/ui/benefits-forecasts-section";
import { menuForecastingTestimonialData } from "@/lib/constaints";
import ContactUs from "@/components/ui/contact-us";
import { benefitsManuForecastsTabData } from "@/lib/tabdata";
import { BookDemoModal } from "@/components/ui/book-demo-modal";

const MenuForecastingComponent = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = [
    { value: "59%", label: "Waste Reduction using Menu Forecasting" },
    { value: "3%", label: "Monthly Savings due to Waste Reduction" },
  ]

  return (
    <div className="mx-auto py-8">
      <div className="mx-auto my-8">
        <TextSection
          subtitle="Manu Forecasting"
          title="See What Sells Before It Happens — With Orkeneo’s Menu Forecasting"
          description="Make smarter prep and inventory decisions with AI-powered forecasting. Reduce food waste, maximize profitability, and serve what your customers actually want—before they even order."
          subtitleBgColor={"#eff6ff"}
        />
      </div>

      <div className="flex justify-center gap-4 py-3">
        <Button 
          variant="outline" 
          size="md" 
          className="text-gray-700"
          onClick={() => router.push("/about-us")}
        >
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

      <div className="relative max-w-3xl mx-auto py-8">
        <Image
          src="/images/macbook-pro-16.png"
          alt="macbook-mockup"
          width={1440}
          height={1080}
          className="w-full h-auto rounded-xl"
        />
        {/* Labor Forecast Overlay */}
        <div className="absolute top-[10%] max-[460px]:top-[12.5%] sm:top-[8%] left-[8.8%] w-[83%]">
          <Image
            src="/images/menu-forecasting-sheet.png"
            alt="menu-forecast"
            width={1000}
            height={700}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>

      <TestimonialInfo 
        title="Why do you need Manu Forecasting?" 
        subTitle="Managing your restaurant’s menu inventory is a daily challenge. Prepare too much, and you waste food. Prepare too little, and you lose sales."
        description="With Orkeneo’s AI-powered menu forecasting, you can accurately predict which dishes will sell and when—based on historical trends, weather, events, and more. Say goodbye to guesswork and hello to data-driven prep planning that minimizes waste, boosts margins, and keeps your kitchen efficient."
        testimonial={menuForecastingTestimonialData}
        stats={stats}
      />
      <div className="flex justify-center">
        <div className="container">
            <BenefitsForecastsSection
              title="Benefits of Orkeneo Menu Forecasts" 
              subTitle="We believe in giving kitchens of every size the tools to work smarter—not harder. With Orkeneo, forecasting is no longer a guessing game—it’s a strategy."
              benefits={benefitsManuForecastsTabData}
            />
        </div>
      </div>
      <ContactUs />
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MenuForecastingComponent;