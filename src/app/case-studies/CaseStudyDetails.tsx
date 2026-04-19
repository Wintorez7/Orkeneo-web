"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function CaseStudyDetails() {
  return (
    <section className="bg-[#F8F9FC] px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT SIDEBAR */}
        <div className="bg-white shadow rounded-[28px] p-6 space-y-6">

          {/* IMPACT */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              Performance Impact
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[#006947] text-2xl font-extrabold">+42%</p>
                <p className="text-sm text-gray-500">Profit Increase</p>
              </div>

              <div>
                <p className="text-[#006947] text-2xl font-extrabold">55%</p>
                <p className="text-sm text-gray-500">Waste Reduction</p>
              </div>

              <div>
                <p className="text-[#006947] text-2xl font-extrabold">-20%</p>
                <p className="text-sm text-gray-500">Labor Cost</p>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200"></div>

          {/* QUOTE */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              "Orkeneo transformed our operations from reactive chaos to proactive precision. We no longer guess; we know."
            </p>

            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/avatar/Marcus-Sterling.png"
                alt="author"
                width={36}
                height={36}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Marco Rossi
                </p>
                <p className="text-xs text-gray-500">
                  Operations Director
                </p>
              </div>
            </div>
          </div>

          {/* ICONS */}
          <div className="flex justify-between pt-4">
            <span className="text-xs text-gray-500">PREP FORECAST</span>
            <span className="text-xs text-gray-500">MENU INTEL</span>
            <span className="text-xs text-gray-500">LABOR SCHEDULE</span>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-12">

          {/* CHALLENGE */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
              The Challenge
            </p>

            <h2 className="mt-2 text-[26px] md:text-[30px] font-bold text-gray-900">
              The Chaos of Manual Planning
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Before partnering with Orkeneo, The Gourmet Group relied on traditional spreadsheets and intuition to manage their high-volume operations across New York City. This approach led to significant operational friction: over-prepping ingredients that eventually went to waste, staff burnout during unpredictable peak hours, and constant revenue loss due to inefficient scheduling.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              The leadership team felt they were always one step behind, reacting to problems after they occurred rather than anticipating them. "It was like trying to fly a plane while building it," says Rossi.
            </p>
          </div>

          {/* SOLUTION CARD */}
          <div className="relative bg-[#EEF2FF] rounded-[32px] p-8 overflow-hidden">

            {/* Background Icon */}
            <div className="absolute right-6 top-6 opacity-10 text-6xl">
              ✨
            </div>

            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              The Solution
            </p>

            <h2 className="mt-2 text-[24px] md:text-[28px] font-bold text-gray-900">
              The AI Transformation
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Implementing Orkeneo changed the DNA of their decision-making. By integrating historical POS data, local weather patterns, and neighborhood events, our Predictive Architect engine began generating ultra-precise demand forecasts for each location.
            </p>

            {/* BULLETS */}
            <ul className="mt-6 space-y-4">
              {[
                "Demand Forecasting: Predicting guest volume within a 98% accuracy margin.",
                "Prep Optimization: Dynamic daily prep lists that adjust in real-time.",
                "Labor Scheduling: AI-driven roster management that matches staff to demand perfectly.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}