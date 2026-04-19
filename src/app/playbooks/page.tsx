"use client";

import { useState } from "react";
import PlaybooksSection from "./PlaybooksSection/page";
import CTASection from "@/components/CTASection";

function PlayBooks() {
  const filters = [
    "All Playbooks",
    "Food Cost Optimization",
    "Labor Management",
    "Menu Optimization",
    "Growth Strategies",
  ];

  const [active, setActive] = useState("All Playbooks");

  return (
    <>
      <section className="mt-20 px-4 py-16 bg-[#F8F9FC]">
        <div className="max-w-6xl mx-auto">
          {/* TOP GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#6B38D4] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 bg-[#6B38D4] rounded-full"></span>
                PREDICTIVE INSIGHTS
              </div>

              <h1 className="mt-4 text-[34px] md:text-[46px] font-bold text-[#171C24] leading-tight">
                Restaurant Playbooks <br />
                to <span className="text-[#194FD7]">Increase Profit</span>
              </h1>

              <p className="mt-4 text-gray-500 text-[15px] md:text-base max-w-xl leading-relaxed">
                Step-by-step strategies to reduce waste, optimize staff, and
                grow revenue powered by Orkeneo's predictive engine.
              </p>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center  md:justify-end">
              <div className="w-full max-w-[320px] bg-[#F0F3FF] px-6 py-6 rounded-[28px] shadow">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  TOTAL MANAGED VOLUME
                </p>

                <h2 className="mt-2 text-[30px] font-bold text-[#171C24]">
                  $1.2B+
                </h2>

                <p className="mt-2 text-[#006947] text-sm font-semibold flex items-center gap-2">
                  ↗ Average 14% Margin Lift
                </p>
              </div>
            </div>
          </div>

          {/* FILTER BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${
                  active === item
                    ? "bg-[#171C24] text-white shadow-sm"
                    : "bg-[#EEF2F7] text-gray-600 hover:bg-gray-200"
                }
              `}
              >
                {item}
              </button>
            ))}
          </div>

          {/* DEBUG (optional remove later) */}
          <p className="mt-6 text-sm text-gray-400">
            Selected: <span className="text-[#194FD7]">{active}</span>
          </p>
        </div>
      </section>

      <PlaybooksSection />

      <CTASection
        title="Want AI to do this automatically?"
        subtitle="Orkeneo turns these strategies into real-time automated decisions for your kitchen, bar, and floor staff."
        primaryText="Try ROI Calculator"
        secondaryText="Book a Demo"
      />
    </>
  );
}

export default PlayBooks;
