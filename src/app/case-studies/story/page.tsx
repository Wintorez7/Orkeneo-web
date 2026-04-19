"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import CaseStudyDetails from "../CaseStudyDetails";
import IntelligenceSection from "../IntelligenceSection/page";
import CTASection from "@/components/CTASection";
import { CASE_STUDY_CTA } from "@/lib/staffing.data";

export default function CaseStudyHero() {
  return (
    <>
      <section className="bg-[#F8F9FC] mt-24 px-4 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Tag + Date */}
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                SUCCESS STORY
              </span>
              <span className="text-gray-400">March 2024</span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-[42px] md:text-[54px] font-extrabold text-[#171C24] leading-tight">
              The Gourmet <br /> Group
            </h1>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>New York, NY</span>
              <span className="mx-1">•</span>
              <span>Multi-location Chain</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-60 md:h-80 rounded-[28px] overflow-hidden ">
            <Image
              src="/images/story-image.png"
              alt="case study"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <CaseStudyDetails />

      <IntelligenceSection />

      <CTASection {...CASE_STUDY_CTA} />
    </>
  );
}
