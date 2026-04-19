"use client";
import React, { useState } from "react";
import { TextSection } from "@/components/reusable/text-section";
import { Button } from "@/components/reusable/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { TestimonialInfo } from "@/components/ui/testominial-info";
import { BenefitsForecastsSection } from "@/components/ui/benefits-forecasts-section";
import { KeyBenefitsCaseForecasting } from "@/components/ui/key-benefits-cases-forecasting";
import { PromoSection } from "@/components/ui/promo-section";
import { StorySection } from "@/components/reusable/story-section";
import { laborForecastTestimonialData } from "@/lib/constaints";
import HowItWork from "@/components/reusable/how-it-work";
import { benefitsLaborForecastsTabData } from "@/lib/tabdata";
import { BookDemoModal } from "@/components/ui/book-demo-modal";

const LaborForecasting = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = [
    { value: "11%", label: "Labour Cost" },
    { value: "3%", label: "Overall COGS Reduction", border: true },
    { value: "40hrs", label: "Labor Reduction /unit /mo" },
  ]

  return (
    <div className="mx-auto py-8">
      <div className="mx-auto my-8">
        <TextSection
          subtitle="Labour Forecasting"
          title="WorkForce - Optimize your labor to maximize profitability"
          description="Make informed staffing decisions that aligns perfectly with demand, ensuring you’re neither understaffed nor overstaffed."
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
            src="/images/labor-forecast-sheet.png"
            alt="labor-forecast"
            width={1000}
            height={700}
            className="h-auto w-full rounded-xl"
          />

          {/* macbook logo */}
          <div className="w-[12%] mx-auto mt-1.5 max-[460px]:mt-0.5 max-[390px]:mt-1">
            <Image
              src="/icons/mackbook-logo.svg"
              alt="labor-forecast"
              width={20}
              height={7}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <TestimonialInfo 
        title="Why do you need Labor Forecasting?" 
        subTitle="Staffing a restaurant is a constant balancing act. Too many employees? You’re overspending. Too few? Service suffers."
        description="With AI-powered labor forecasting, Orkeneo helps you predict demand with precision, so you can build smarter schedules. No more guesswork—just data-driven scheduling that keeps your restaurant running efficiently."
        testimonial={laborForecastTestimonialData}
        stats={stats}
      />
      <HowItWork />
      <div className="flex justify-center">
        <div className="container">
            <BenefitsForecastsSection
              title="Benefits of Orkeneo Labor Forecasts" 
              subTitle="We believe in building teams where unique perspectives and talents can thrive and everyone has what they need to excel in their role, career, and at home."
              benefits={benefitsLaborForecastsTabData}
            />
        </div>
      </div>
      <KeyBenefitsCaseForecasting />
      <StorySection title="Labor Forecasting Case Studies" islayout={true} />
      <PromoSection />
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default LaborForecasting;
