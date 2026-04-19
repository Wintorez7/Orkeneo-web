"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ReusableCarousel from "@/components/ReusableCarousel";
import CTASection from "@/components/CTASection";

const testimonials = [
  {
    text: "We increased our top-selling items by 20% in just 3 weeks. Now we know exactly what to promote every day.",
    name: "Rahul Sharma",
    role: "QSR Owner, Bangalore",
    avatar: "/avatar/qsr-owner.png",
  },
  {
    text: "Reduced our daily waste by 40% in just 2 weeks. Now my team knows exactly what to prep every morning.",
    name: "Rajesh Kumar",
    role: "Cloud Kitchen Owner, Mumbai",
    initials: "RK",
  },
  {
    text: "The clarity we get on daily demand has fundamentally changed how our kitchen operates.",
    name: "Raghav Sharma",
    role: "QSR Owner, Bangalore",
    avatar: "/avatar/qsr-owner.png",
  },
];

export default function MultiLocationBrandsPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="min-h-screen bg-linear-to-br from-[#f8f9ff] via-[#f3f5ff] to-[#eef1ff]">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* LEFT CONTENT */}
            <div className="flex-1 text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse inline-block" />
                For Multi-Location Brands
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight text-gray-950 mb-6">
                You're losing <br /> control across <br /> your outlets — <br />
                because you <br />{" "}
                <span className="relative">
                  <span className="text-indigo-600">
                    lack real <br /> visibility
                  </span>
                </span>{" "}
              </h1>

              {/* Sub-copy */}
              <p className="text-gray-500 text-[16px] leading-relaxed max-w-lg mb-8">
                Orkeneo gives you a unified view of all your locations — helping
                you detect issues, standardize operations, and recover lost
                margins.{" "}
              </p>

              {/* CTA row */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-7 py-3.5 rounded-full bg-[#4F6EF7] text-white text-sm font-semibold shadow-lg shadow-indigo-200 hover:scale-[1.03] active:scale-[0.98] transition-all duration-150">
                  Get My Multi-Outlet Audit
                </button>
                <button className="px-7 py-3.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-150">
                  See How It Works
                </button>
              </div>

              {/* Trust nudge */}
              <p className="mt-6 text-sm text-gray-400 font-medium">
                Built for multi-location restaurant brands
              </p>

              <p className=" text-sm mt-10  font-medium">
                Work With Petpooja, POSist ,Zoho
              </p>
            </div>

            {/* RIGHT: network-help image */}
            <div className="relative w-full lg:w-[500px] shrink-0">
              {/* Glow blob */}
              <div className="absolute -inset-10 bg-linear-to-tr from-indigo-300/30 via-blue-200/20 to-purple-200/20 blur-3xl rounded-full" />

              {/* Image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(79,70,229,0.22),0_8px_32px_rgba(0,0,0,0.12)] border border-white/60">
                <Image
                  src="/images/network-help.png"
                  alt="Multi-location network intelligence"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
              </div>

              {/* Floating stat card — top left */}
              <div className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 min-w-[160px]">
                <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Icon
                    icon="mdi:store-check"
                    className="text-emerald-600"
                    width={18}
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Network Health
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    12 / 14 Optimal
                  </p>
                </div>
              </div>

              {/* Floating stat card — bottom right */}
              <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 min-w-[170px]">
                <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <Icon
                    icon="mdi:cash-plus"
                    className="text-indigo-600"
                    width={18}
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Recovered Today
                  </p>
                  <p className="text-sm font-bold text-emerald-600">
                    +₹80K across outlets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── HIDDEN COST OF OPERATING WITHOUT VISIBILITY ───────────────────── */}
      <section className="py-24 bg-[#F0F3FF]">
        <div className="max-w-280 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2.5rem] md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              The hidden cost of operating without visibility
            </h2>
            <p className="text-slate-500 text-[17px] font-medium max-w-2xl mx-auto">
              Average brand loses ₹12L - ₹45L annually per outlet to operational
              friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-[52px] h-[52px] rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                <Image
                  src="/images/eye.png"
                  alt="Blind spots"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Blind spots
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                Issues go unnoticed and silently drain margins through inventory
                waste and staffing errors.
              </p>
              <div className="flex items-baseline gap-2 pt-5 w-full">
                <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                  - ₹85,000
                </span>
                <span className="text-slate-500 text-xs font-medium">
                  Avg. monthly drain
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-[52px] h-[52px] rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                <Image
                  src="/images/calculate.png"
                  alt="Inconsistent operations"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Inconsistent operations
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                Different prep and performance benchmarks per outlet create
                unpredictable customer experiences.
              </p>
              <div className="flex items-baseline gap-2 pt-5 w-full">
                <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                  - 22% Efficiency
                </span>
                <span className="text-slate-500 text-xs font-medium">
                  vs. top performers
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="w-[52px] h-[52px] rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                <Image
                  src="/images/pending.png"
                  alt="Delayed decisions"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Delayed decisions
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                Lost revenue opportunities from slow data sync between physical
                locations and headquarters.
              </p>
              <div className="flex items-baseline gap-2 pt-5 w-full">
                <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                  - 15% Margin
                </span>
                <span className="text-slate-500 text-xs font-medium">
                  due to slow pivots
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── AI INTELLIGENCE ACROSS NETWORK ──────────────────────────────── */}
      <section className="py-24 mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT: UI CARD */}
            <div className="flex-1 w-full flex justify-center">
              <div className="bg-[#F0F3FF] rounded-[3rem] p-8 md:p-10 w-full max-w-[500px]">
                <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6">
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-900 text-[17px]">
                      Outlet Comparisons
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#7E3AF2] text-[13px] font-semibold">
                        Live Intelligence
                      </span>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7E3AF2] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7E3AF2]"></span>
                      </span>
                    </div>
                  </div>

                  {/* Outlets */}
                  <div className="flex flex-col gap-3 mb-6">
                    {/* Outlet A */}
                    <div className="flex justify-between items-center bg-[#FDF2F2] rounded-xl px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#C00F0C]"></div>
                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet A
                        </span>
                      </div>
                      <span className="text-[#C00F0C] text-[13px] font-bold">
                        Underperforming
                      </span>
                    </div>
                    {/* Outlet B */}
                    <div className="flex justify-between items-center bg-[#F3FAF7] rounded-xl px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#057A55]"></div>
                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet B
                        </span>
                      </div>
                      <span className="text-[#057A55] text-[13px] font-bold">
                        Optimized
                      </span>
                    </div>
                    {/* Outlet C */}
                    <div className="flex justify-between items-center bg-[#F4F8FD] rounded-xl px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#1C64F2]"></div>
                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet C
                        </span>
                      </div>
                      <span className="text-[#1C64F2] text-[13px] font-bold">
                        Steady
                      </span>
                    </div>
                  </div>

                  {/* Network Trend Detected */}
                  <div className="bg-[#F9F5FF] border-l-[5px] border-[#7E3AF2] rounded-r-xl p-4 pl-5">
                    <h4 className="text-[#7E3AF2] text-[11px] font-bold tracking-widest uppercase mb-1.5">
                      NETWORK TREND DETECTED
                    </h4>
                    <p className="text-slate-800 text-[13px] font-medium leading-[1.6]">
                      Supply costs rising at 6/8 locations. Suggested bulk
                      procurement shift available.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: TEXT CONTENT */}
            <div className="flex-1 w-full text-left">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6">
                AI intelligence across
                <br />
                your entire network
              </h2>
              <p className="text-slate-500 text-[17px] leading-[1.7] mb-10">
                Orkeneo doesn't just show data; it understands it. Our
                network-wide AI tracks trends that human managers miss, flagging{" "}
                <span className="italic text-slate-500">
                  cross-location issues before they become permanent losses.
                </span>
              </p>

              <div className="flex flex-col gap-6">
                {[
                  "Automatic performance normalization",
                  "Predictive maintenance for equipment across all sites",
                  "Centralized decision-making based on real-time data",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded-full bg-[#EBF5FF] text-[#3F83F8]">
                      <Image
                        src="/images/sign-icon.png"
                        width={25}
                        height={25}
                        alt="sign"
                      />
                    </div>
                    <span className="text-slate-700 font-medium text-[16px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── PRIORITY OPERATIONS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h4 className="text-[#6C2BD9] text-[13px] font-bold tracking-[0.15em] uppercase mb-3">
                PRIORITY OPERATIONS
              </h4>
              <h2 className="text-[2.25rem] md:text-[2.75rem] font-extrabold text-[#111827] tracking-tight">
                Your AI plan across all outlets — today
              </h2>
            </div>
            <div className="text-right mt-6 md:mt-0 flex flex-col items-end">
              <p className="text-slate-600 text-[15px] font-semibold mb-1">
                Potential Recovery Today
              </p>
              <p className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#057A55] tracking-tight leading-none">
                ₹95,000
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="relative bg-[#F0F3FF] rounded-[3rem] p-8 pb-10 border border-[#F1F5F9] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-auto">
              <div className="absolute left-0.5 top-8 bottom-8 w-2 bg-[#3B82F6] rounded-l-4xl"></div>

              <div className="flex justify-between items-start mb-6 w-full">
                <div className=" p-2.5 ">
                  <Image
                    src="/images/package-variant-closed.png"
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
                <div className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full">
                  +₹45,000
                </div>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Reduce prep at 3 outlets
              </h3>
              <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                AI detected over-preparation at Mumbai, Pune, and Thane
                locations based on tomorrow's weather forecast.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#3B82F6] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
              >
                <span>Implement Strategy</span>
                <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
              </a>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#F0F3FF] rounded-[2rem] p-8 pb-10 border border-[#F1F5F9] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full">
              <div className="absolute left-0.5 top-8 bottom-8 w-2 bg-[#8B5CF6] rounded-l-4xl"></div>
              <div className="flex justify-between items-start mb-6 w-full">
                <div className=" p-2.5 ">
                  <div className=" p-2.5 ">
                    <Image
                      src="/images/account-group.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <div className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full">
                  +₹30,000
                </div>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Adjust staffing
              </h3>
              <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                Labor reallocation for the evening shift across the NCR network
                to match predicted traffic spikes.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#8B5CF6] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
              >
                <span>Notify Managers</span>
                <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
              </a>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#F0F3FF] rounded-[2rem] p-8 pb-10 border border-[#F1F5F9] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full">
              <div className="absolute left-0.5 top-8 bottom-8 w-2 bg-[#10B981] rounded-l-4xl"></div>
              <div className="flex justify-between items-start mb-6 w-full">
                <div className=" p-2.5 ">
                  <div className=" p-2.5 ">
                    <Image
                      src="/images/silverware-fork-knife.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
                <div className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full">
                  +₹20,000
                </div>
              </div>
              <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                Menu shift
              </h3>
              <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                Promote High-Margin Combo B in Bangalore outlets where average
                ticket size has dipped below benchmark.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#10B981] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
              >
                <span>Sync POS Updates</span>
                <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ── STANDARDIZE PERFORMANCE ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F2F4F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT: TEXT CONTENT */}
            <div className="flex-1 w-full text-left">
              <h2 className="text-[2.75rem] md:text-[3.5rem] font-extrabold text-[#111827] leading-[1.05] tracking-tight mb-14">
                Standardize
                <br />
                performance across
                <br />
                every outlet
              </h2>

              <div className="flex flex-col gap-10">
                {/* Point 1 */}
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]">
                    1
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same prep logic everywhere
                    </h4>
                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Centralized recipes and kitchen prep timing updated
                      instantly.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]">
                    2
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same efficiency benchmarks
                    </h4>
                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Every manager held to the same AI-defined gold standards.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]">
                    3
                  </div>
                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same decision framework
                    </h4>
                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Consistent outcomes regardless of regional leadership
                      variance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: UI WIDGETS */}
            <div className="flex-1 w-full flex flex-col gap-6 max-w-[500px] lg:max-w-none">
              <div className="flex flex-col sm:flex-row gap-6 ">
                {/* Small Card 1 (Variance) */}
                <div className="bg-white rounded-[2rem] p-7 h-full -mt-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex-1 w-full relative sm:top-6">
                  <h5 className="text-[14px] font-extrabold text-slate-700 mb-4 tracking-tight">
                    Outlet Performance Variance
                  </h5>
                  <div className="h-[7px] w-full bg-[#EFF3FE] mb-3">
                    <div
                      className="h-full bg-[#4F6EF7]"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p className="text-[#4F6EF7] text-[12px] font-bold">
                    Reduced from 45% to 8%
                  </p>
                </div>

                {/* Small Card 2 (Network Sync) */}
                <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] aspect-square flex flex-col items-center justify-center flex-1 w-full max-w-[240px]">
                  <Icon
                    icon="mdi:sync"
                    className="text-[#057A55] mb-2"
                    width={38}
                  />
                  <p className="text-[11px] font-extrabold text-slate-800 tracking-widest uppercase mb-1 text-center">
                    NETWORK SYNC
                  </p>
                  <p className="text-[32px] font-extrabold text-slate-900 tracking-tight">
                    1.2s
                  </p>
                </div>
              </div>

              {/* Large Purple Card */}
              <div className="bg-linear-to-r from-[#5A68DF] to-[#7944DF] rounded-[3rem] p-10 shadow-xl text-white">
                <p className="text-[16px] font-bold mb-3 tracking-wide">
                  Unified Brand Health Score
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[4rem] font-extrabold leading-none tracking-tight">
                    94
                  </span>
                  <span className="text-white/80 text-[22px] font-medium">
                    /100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── TOTAL CONTROL ──────────────────────────────────────────────── */}
      <section className="bg-[#F8F9FF] pt-24 pb-20">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#111827] tracking-tight">
              One platform. Total control across your entire brand.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[4rem] md:text-[4.5rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-[#4F6EF7] to-[#718CFB] mb-5">
                100%
              </h3>
              <p className="text-[13px] font-bold tracking-[0.15em] text-slate-700 mb-4">
                VISIBILITY
              </p>
              <p className="text-slate-500 text-[14px] leading-relaxed max-w-[280px]">
                Real-time oversight into every kitchen, counter, and cash
                register.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[4rem] md:text-[4.5rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-[#8B5CF6] to-[#A072F5] mb-5">
                +30%
              </h3>
              <p className="text-[13px] font-bold tracking-[0.15em] text-slate-700 mb-4">
                OPERATIONAL EFFICIENCY
              </p>
              <p className="text-slate-500 text-[14px] leading-relaxed max-w-[280px]">
                Achieved through AI-optimized labor and prep schedules.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <h3 className="text-[4rem] md:text-[4.5rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-[#057A55] to-[#10B981] mb-5">
                +15%
              </h3>
              <p className="text-[13px] font-bold tracking-[0.15em] text-slate-700 mb-4">
                MARGIN IMPROVEMENT
              </p>
              <p className="text-slate-500 text-[14px] leading-relaxed max-w-[280px]">
                Recaptured from eliminated waste and inventory leakage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE STEPS ────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-300 mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold text-[#111827] tracking-tight">
              Three steps to network dominance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-8">
                <Icon
                  icon="ph:share-network-bold"
                  className="text-[#4F6EF7]"
                  width={32}
                />
              </div>
              <h4 className="text-[1.25rem] font-bold text-slate-900 mb-4 tracking-tight">
                1. Connect all outlets
              </h4>
              <p className="text-slate-500 text-[15px] leading-[1.6] max-w-[320px]">
                One-click integration with your existing POS and ERP systems
                across all locations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#F4EBFF] flex items-center justify-center mb-8">
                <Icon
                  icon="mdi:chart-box-outline"
                  className="text-[#8B5CF6]"
                  width={32}
                />
              </div>
              <h4 className="text-[1.25rem] font-bold text-slate-900 mb-4 tracking-tight">
                2. AI analyzes locations
              </h4>
              <p className="text-slate-500 text-[15px] leading-[1.6] max-w-[320px]">
                Orkeneo maps every transaction and prep action to find the
                network's efficiency ceiling.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-[#E8F5EF] flex items-center justify-center mb-8">
                <Icon
                  icon="lucide:sparkles"
                  className="text-[#057A55]"
                  width={32}
                />
              </div>
              <h4 className="text-[1.25rem] font-bold text-slate-900 mb-4 tracking-tight">
                3. Unified decisions
              </h4>
              <p className="text-slate-500 text-[15px] leading-[1.6] max-w-[320px]">
                Get smart alerts and ready-to-execute tasks that optimize the
                entire brand instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReusableCarousel
        data={testimonials}
        bgColor="#F5F6FA"
        textSize="text-xl md:text-4xl"
      />
      <CTASection
        title="Take control of every outlet — from one intelligent system"
        subtitle="Stop guessing why your margins vary. Get the visibility you need to run world-class multi-location brand."
        primaryText="Get My Multi-Outlet Audit"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </main>
  );
}
