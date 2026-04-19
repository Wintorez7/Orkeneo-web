"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

const playbooks = [
  {
    tag: "STAFFING",
    title: "Optimizing Peak Hour Staffing",
    image: "/images/staffing.png",
    color: "text-[#194FD7]",
  },
  {
    tag: "PROFITABILITY",
    title: "Menu Engineering for Profit",
    image: "/images/menu-1.png",
    color: "text-[#6B38D4]",
  },
  {
    tag: "INSIGHTS",
    title: "Digital-First Dining Strategies",
    image: "/images/insights.png",
    color: "text-[#006947]",
  },
];

export default function PlaybookDetailHero() {
  return (
    <>
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* CATEGORY */}
          <div className="inline-block bg-[#EEF2FF] text-[#194FD7] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
            OPERATIONS
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-[30px] md:text-[42px] font-extrabold text-[#171C24] leading-tight">
            The 2024 Guide to <br />
            Predictive Inventory <br />
            Management
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto">
            How to cut costs by up to 22% while eliminating stockouts using
            AI-driven demand forecasting.
          </p>

          {/* DIVIDER */}
          <div className="mt-8 border-t border-gray-200"></div>

          {/* AUTHOR */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Image
              src="/avatar/Elena-Rossi.png"
              alt="author"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">
                Elena Rossi, Operations Lead
              </p>
              <p className="text-xs text-gray-500">
                January 14, 2024 • 12 min read
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-6 border-t border-gray-200"></div>

          {/* SECTION TITLE */}
          <h2 className="mt-10 text-[22px] md:text-[26px] font-semibold text-gray-900 text-left">
            The Paradigm Shift in Restaurant Operations
          </h2>

          {/* PARAGRAPH */}
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed text-left">
            Inventory is the lifeblood of any restaurant, but it's also where
            the most profit is lost. Traditional inventory management relies on
            gut feeling and historical averages that don't account for the
            volatility of modern dining habits. Predictive inventory changes the
            math by looking forward instead of backward.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* ================= INTRO ================= */}
          <div>
            <h2 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
              The Paradigm Shift in Restaurant Operations
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
              Inventory is the lifeblood of any restaurant, but it's also where
              the most profit is lost. Traditional inventory management relies
              on gut feeling and historical averages that don't account for the
              volatility of modern dining habits. Predictive inventory changes
              the math by looking forward instead of backward.
            </p>
          </div>

          {/* ================= PHASE ================= */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Phase 1: The Tactical Framework
            </h3>

            {/* CHECKLIST CARD */}
            <div className="mt-6 bg-[#EEF2FF] rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                Daily Inventory Checklist
              </div>

              <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                <li className="flex gap-3">
                  <span className="w-4 h-4 border border-blue-400 rounded-full mt-1"></span>
                  Review AI prep forecasts vs. current stock levels at 7:00 AM.
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 border border-blue-400 rounded-full mt-1"></span>
                  Verify high-value ingredient quantities before mid-day rush.
                </li>

                <li className="flex gap-3">
                  <span className="w-4 h-4 border border-blue-400 rounded-full mt-1"></span>
                  Log variance in wastage for evening service reconciliation.
                </li>
              </ul>
            </div>
          </div>

          {/* ================= AI VS MANUAL ================= */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              AI vs. Manual: The Accuracy Gap
            </h3>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              Manual forecasting often results in either "Safety Stock Bloat" or
              "Revenue-Killing Stockouts." Our data across 500+ locations shows
              a distinct pattern.
            </p>
            {/* COMPARISON CARD */}
            <div className="mt-6 bg-[#F1F3F7] rounded-[32px] p-5 md:p-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
              <div className="flex  items-end">
                {/* MANUAL */}
                <div className="flex-1 bg-[#D1D5DB] rounded-t-2xl h-30 md:h-32.5 flex items-end justify-center pb-3"></div>

                {/* AI */}
                <div className="flex-1 bg-linear-to-br from-[#194FD7] to-[#3B6AF6] rounded-t-2xl h-37.5 md:h-41.25 flex items-end justify-center pb-3 shadow-md"></div>
              </div>
              <div className="flex justify-around mt-2 w-full h-5">
                <span className="text-[11px] tracking-wide text-gray-500 font-medium">
                  MANUAL
                </span>
                <span className="text-[11px] tracking-wide text-blue-600 font-medium">
                  AI PREDICTIVE
                </span>
              </div>
            </div>
          </div>

          {/* ================= QUOTE ================= */}
          <div className="bg-[#EEF2FF]  p-6 border-l-4 border-[#6B38D4]">
            <p className="text-gray-700 text-sm leading-relaxed">
              "Reduce prep during non-peak hours (3 PM - 5 PM) to save up to 12%
              on perishables. Most kitchens over-prepare for a dinner rush that
              hasn't started yet."
            </p>
          </div>

          {/* ================= STEPS ================= */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              3 Steps to Optimization
            </h3>

            <div className="mt-6 space-y-6">
              {/* STEP 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-8 flex items-center justify-center rounded-full bg-[#194FD7] text-white text-sm font-semibold">
                  1
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Analyze historical demand data
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Connect your POS directly to your inventory management
                    system. Historical data must include external variables like
                    local weather, holidays, and nearby events.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-8 flex items-center justify-center rounded-full bg-[#194FD7] text-white text-sm font-semibold">
                  2
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Implement dynamic portion control
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Adjust portion sizes or menu availability based on real-time
                    stock levels. If protein supply is low for the week,
                    prioritize high-margin dishes that use smaller cuts.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-4">
                <div className="w-10.5 h-8 flex items-center justify-center rounded-full bg-[#194FD7] text-white text-sm font-semibold">
                  3
                </div>

                <div>
                  <p className="font-medium text-gray-900">
                    Reduce over-prep during non-peak hours
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Switch to "Just-in-Time" prep for items with high oxidation
                    rates. This single move can reduce beverage and salad waste
                    by double digits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="
          rounded-[40px] px-6 md:px-12 py-16 text-center text-white
          bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.4),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.4),transparent_40%),linear-gradient(135deg,#6B38D4,#8B5CF6)]
          shadow-[0_25px_60px_rgba(107,56,212,0.35)]
        "
          >
            {/* Heading */}
            <h2 className="text-[26px] md:text-[38px] font-semibold leading-tight">
              Want this automated?
            </h2>

            {/* Subtext */}
            <p className="mt-4 text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Orkeneo monitors your inventory levels and sales in <br />{" "}
              real-time to adjust prep lists dynamically.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
              <button className="px-8 py-3 rounded-full bg-white text-[#6B38D4] font-semibold text-sm md:text-base shadow-md hover:scale-[1.04] transition-transform">
                Calculate My Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F3FF] px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[26px] md:text-[34px] font-semibold text-[#171C24]">
              How Orkeneo Helps
            </h2>

            <p className="mt-3 text-gray-500 text-sm md:text-base">
              Our intelligence platform acts as a digital brain for your
              back-of-house operations.
            </p>
          </div>

          {/* ================= CARDS ================= */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-white rounded-[28px] p-7 shadow-sm">
              <Image
                src="/svg/prep-forecasting.svg"
                alt=""
                width={25}
                height={25}
              />

              <h3 className="mt-4 font-semibold text-gray-900">
                Prep Forecasting
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Know exactly how much to prepare each morning. Reduce food waste
                by up to 30% with precise daily projections.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-[28px] p-7 shadow-sm">
              <Image
                src="/svg/menu-insights.svg"
                alt=""
                width={25}
                height={25}
              />

              <h3 className="mt-4 font-semibold text-gray-900">
                Menu Insights
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Identify which items are profit-drivers and which are costing
                you inventory efficiency. Dynamic engineering at your
                fingertips.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-[28px] p-7 shadow-sm">
              <Image
                src="/svg/labour-optimization.svg"
                alt=""
                width={25}
                height={25}
              />

              <h3 className="mt-4 font-semibold text-gray-900">
                Labor Optimization
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Align your staffing with predicted demand. Never over-staff a
                slow Tuesday or under-prepare for a busy Saturday.
              </p>
            </div>
          </div>

          {/* ================= CTA CARD ================= */}
          <div className="mt-16 flex justify-center">
            <div className="bg-white rounded-[18px] px-6 md:px-12 py-8 shadow-md text-center max-w-2xl w-full">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                See your restaurant’s AI plan
              </h3>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                {/* Primary */}
                <button className="px-6 py-3 cursor-pointer rounded-full bg-[#194FD7] text-white text-sm font-medium shadow-md hover:bg-[#163bb3] transition">
                  Get AI Plan
                </button>

                {/* Secondary */}
                <button className="px-6 py-3 text-blue-600 rounded-full border bg-blue-50 hover:bg-blue-100 cursor-pointer border-blue-300 text-sm font-medium transition">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16  border">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-0.5 bg-[#194FD7]"></div>
            <h2 className="text-lg font-semibold text-gray-900">
              More Playbooks
            </h2>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-6">
            {playbooks.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                {/* IMAGE */}
                <div className="relative h-45 rounded-[20px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="mt-4">
                  {/* TAG */}
                  <p
                    className={`text-xs font-semibold tracking-wide ${item.color}`}
                  >
                    {item.tag}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-1 text-[16px] font-semibold text-gray-900 leading-snug group-hover:text-[#194FD7] transition">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
