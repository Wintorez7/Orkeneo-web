"use client";

import Image from "next/image";

export default function IntelligenceSection() {
  return (
    <section className="bg-[#F8F9FC] px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ================= INTELLIGENCE DASHBOARD ================= */}
        <div className="bg-white rounded-[28px] shadow-xl border border-slate-100 p-6 md:p-8">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Predictive Command Center
              </h3>
              <p className="text-sm text-slate-500">
                The Gourmet Group - Manhattan Flagship
              </p>
            </div>

            {/* LIVE BADGE */}
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              LIVE INTELLIGENCE
            </div>
          </div>

          {/* TOP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* PEAK DEMAND */}
            <div className="bg-[#F5F7FF] rounded-xl p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Peak Demand
              </p>
              <h4 className="text-2xl font-bold text-slate-900 mt-1">
                7:00 PM
              </h4>
              <p className="text-xs text-green-600 font-medium mt-1">
                +15% vs Last Week
              </p>
            </div>

            {/* ACTIVE ALERT */}
            <div className="bg-[#F5F7FF] rounded-md p-4 border-l-4 border-purple-500">
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Active Alert
              </p>
              <h4 className="text-sm font-bold text-purple-700 mt-1">
                Add staff for 7PM peak
              </h4>
              <p className="text-xs text-gray-500 mt-1">
                Predicted walk-ins increasing
              </p>
            </div>

            {/* PREP PROGRESS */}
            <div className="bg-[#F5F7FF] rounded-xl p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase">
                Prep Progress
              </p>
              <h4 className="text-2xl font-bold text-slate-900 mt-1">88%</h4>

              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[88%]" />
              </div>
            </div>
          </div>

          {/* GRAPH IMAGE */}
          <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden bg-[#F5F7FF]">
            <Image
              src="/images/live-intelligence-graph.png"
              alt="Demand Graph"
              fill
              className="object-contain"
            />
          </div>

          {/* X AXIS LABELS */}
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
            <span>4PM</span>
            <span className="text-blue-600 font-semibold">7PM (Peak)</span>
            <span>11PM</span>
          </div>
        </div>

        {/* ================= HARD DATA ================= */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
            Hard Data
          </p>

          <h2 className="mt-2 text-[28px] md:text-[34px] font-bold text-gray-900">
            Comparative Performance
          </h2>

          {/* GRID */}
          <div className="mt-8 grid md:grid-cols-2 gap-10">
            {/* LEFT: FOOD WASTE */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Food Waste (%)
              </p>

              {/* BEFORE */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Before (Manual)</span>
                  <span>14.5%</span>
                </div>

                <div className="mt-2 h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[70%]"></div>
                </div>
              </div>

              {/* AFTER */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>After (Orkeneo AI)</span>
                  <span className="text-green-600 font-medium">6.2%</span>
                </div>

                <div className="mt-2 h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 w-[40%]"></div>
                </div>
              </div>
            </div>

            {/* RIGHT: LABOR EFFICIENCY */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase">
                Labor Efficiency
              </p>

              {/* BEFORE */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Before (Static Rosters)</span>
                  <span>Low</span>
                </div>

                <div className="mt-2 h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gray-400 w-[35%]"></div>
                </div>
              </div>

              {/* AFTER */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>After (Demand-Responsive)</span>
                  <span className="text-blue-600 font-medium">Exceptional</span>
                </div>

                <div className="mt-2 h-5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
