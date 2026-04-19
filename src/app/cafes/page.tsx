"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  TimerOff,
  Trash2,
  TrendingDown,
  TriangleAlert,
  Coffee,
  CheckCircle,
  CheckCheck,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import ReusableCarousel from "@/components/ReusableCarousel";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations/variants";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionCard from "@/components/motion/MotionCard";

const testimonials = [
  {
    text: "Increased daily profit by ₹12,000 within 2 weeks. We finally stopped guessing what our morning rush would look like and started preparing for it with surgical precision.",
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

export default function CafesPage() {
  return (
    <>
      <section className="min-h-[calc(100vh-80px)] bg-[#F8FAFF] pt-24 mt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side Content */}
          <MotionWrapper variants={fadeLeft}>
            <div className="flex-1 flex flex-col items-start w-full lg:max-w-xl">
              {/* Badge */}
              <MotionWrapper variants={fadeUp}>
                <div className="bg-[#F0E6FF] text-[#54219F] font-bold tracking-[0.15em] text-[10px] px-3 py-1.5 rounded-full mb-8 inline-block uppercase">
                  Predictive Architect
                </div>
              </MotionWrapper>

              {/* Headline */}
              <MotionWrapper variants={fadeUp} delay={0.1}>
                <h1 className=" text-[42px] md:text-[56px] font-extrabold text-gray-900 leading-tight">
                  You&apos;re losing
                  <br />
                  <span className="text-[#2563EB]  font-black">
                    ₹15,000/month
                  </span>
                  <br />
                  in your café
                </h1>
              </MotionWrapper>

              {/* Subtitle */}
              <MotionWrapper variants={fadeUp} delay={0.2}>
                <p className="text-[#4B5563] mt-2 text-lg leading-[1.6] mb-10 max-w-md font-medium">
                  Orkeneo helps you reduce waste, predict demand, and increase
                  margins — through small decisions you haven&apos;t noticed
                  yet.
                </p>
              </MotionWrapper>

              {/* CTA Button */}
              <MotionWrapper variants={fadeUp} delay={0.3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[2rem] px-8 py-7 text-lg font-bold shadow-lg shadow-[#2563EB]/25 mb-14 transition-all">
                    Get My Daily Profit Plan
                  </Button>
                </motion.div>
              </MotionWrapper>

              {/* Integrations */}
              <MotionWrapper variants={fadeUp} delay={0.4}>
                <div className="flex items-center gap-6 text-sm font-bold border-t border-gray-200 pt-6 w-full max-w-sm">
                  <span className="tracking-widest uppercase text-[11px] text-[#6B7280]">
                    Works With
                  </span>
                  <div className="flex gap-4 text-[#4B5563]">
                    <span>Petpooja</span>
                    <span>Vyapar</span>
                    <span>Excel</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </MotionWrapper>

          {/* Right Side Image */}
          <MotionWrapper
            variants={fadeRight}
            className="flex-1 w-full relative lg:scale-110 lg:origin-left z-10 px-4 lg:px-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#E0E7FF] opacity-30 blur-[100px] rounded-full scale-150"></div>

              <motion.div
                className="w-full  scale-[0.9] lg:scale-[0.95]"
                animate={floatAnimation}
                transition={floatTransition}
              >
                <Image
                  src="/images/Demand-Index-Visualization.png"
                  width={900}
                  height={700}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10"
                  alt=""
                />
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* section 2 */}
      <div className="bg-[#F0F3FF] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-[32px] md:text-[44px] font-extrabold text-[#111827] mb-4">
                The daily chaos that quietly eats your profits
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="text-[#6B7280] text-lg font-medium max-w-2xl mx-auto">
                Running a café is a game of margins. Most losses happen in the
                blind spots of daily operations.
              </p>
            </MotionWrapper>
          </div>

          {/* Cards */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <MotionCard index={0}>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#FFF0F0] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Trash2 className="text-[#DC2626] w-6 h-6 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  Over-prep
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-8 h-16">
                  Preparation based on intuition rather than data leads to
                  systematic waste.
                </p>
                <div>
                  <div className="text-[#DC2626] font-extrabold text-[22px] mb-1">
                    ₹1,500/day waste
                  </div>
                  <div className="text-[#EF4444] text-[11px] uppercase font-bold tracking-wider opacity-80">
                    From guesswork
                  </div>
                </div>
              </div>
            </MotionCard>

            {/* Card 2 */}
            <MotionCard index={1}>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#F3E8FF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <TimerOff className="text-[#7E22CE] w-6 h-6 opacity-80" />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  Slow hours
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-8 h-16">
                  Afternoon dips without dynamic staffing turn labor into a
                  fixed liability.
                </p>
                <div>
                  <div className="text-[#7E22CE] font-extrabold text-[22px] mb-1">
                    Idle staff cost
                  </div>
                  <div className="text-[#A855F7] text-[11px] uppercase font-bold tracking-wider opacity-80">
                    During afternoon dips
                  </div>
                </div>
              </div>
            </MotionCard>

            {/* Card 3 */}
            <MotionCard index={2}>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="bg-[#EFF6FF] w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <TrendingDown
                    className="text-[#2563EB] w-5 h-5 opacity-80"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3">
                  Peak hours
                </h3>
                <p className="text-[#6B7280] leading-relaxed mb-8 h-16">
                  Under-preparation means customers wait too long or leave
                  empty-handed.
                </p>
                <div>
                  <div className="text-[#2563EB] font-extrabold text-[22px] mb-1">
                    Missed sales
                  </div>
                  <div className="text-[#3B82F6] text-[11px] uppercase font-bold tracking-wider opacity-80">
                    Due to under-preparation
                  </div>
                </div>
              </div>
            </MotionCard>
          </MotionStagger>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* LEFT SIDE */}
          <MotionWrapper
            variants={fadeLeft}
            className="flex-1 w-full max-w-xl bg-[#F0F3FF] rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#7E22CE] rounded-full animate-pulse"></div>
                <h3 className="text-[17px] font-extrabold text-[#111827]">
                  Live Intelligence Feed
                </h3>
              </div>
              <div className="text-[12px] font-bold text-[#9CA3AF]">
                MAR 14, 2024
              </div>
            </div>

            {/* FEED ITEMS */}
            <MotionStagger className="flex flex-col gap-4">
              {/* Item 1 */}
              <MotionCard index={0}>
                <div className="bg-white rounded-2xl p-5 flex items-center shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                  <div className="bg-[#FFF0F0] w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <TriangleAlert
                      className="text-[#DC2626] w-5 h-5 opacity-80"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-[#111827] text-[15px]">
                      Reduce sandwich prep
                    </div>
                    <div className="text-[#6B7280] text-[13px] mt-0.5">
                      Demand dropping for non-veg items
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-[#059669] font-black text-[17px]">
                      +₹1,200
                    </div>
                    <div className="text-[#DC2626] text-[10px] font-black uppercase tracking-wider mt-0.5">
                      Critical
                    </div>
                  </div>
                </div>
              </MotionCard>

              {/* Item 2 */}
              <MotionCard index={1}>
                <div className="bg-white rounded-2xl p-5 flex items-center shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                  <div className="bg-[#EEF2FF] w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Coffee
                      className="text-[#4F46E5] w-5 h-5 opacity-80"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-[#111827] text-[15px]">
                      Increase coffee batch at 6PM
                    </div>
                    <div className="text-[#6B7280] text-[13px] mt-0.5">
                      Upcoming footfall spike detected
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-[#059669] font-black text-[17px]">
                      +₹900
                    </div>
                    <div className="text-[#2563EB] text-[10px] font-black uppercase tracking-wider mt-0.5">
                      Opportunity
                    </div>
                  </div>
                </div>
              </MotionCard>

              {/* Item 3 */}
              <MotionCard index={2}>
                <div className="bg-white rounded-2xl p-5 flex items-center shadow-sm hover:shadow-md transition-all border border-gray-100 hover:-translate-y-1">
                  <div className="bg-[#ECFDF5] w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <CheckCircle
                      className="text-[#059669] w-5 h-5 opacity-80"
                      strokeWidth={2.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-extrabold text-[#111827] text-[15px]">
                      Staff shift optimized
                    </div>
                    <div className="text-[#6B7280] text-[13px] mt-0.5">
                      Roster adjusted for 2PM dip
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-[#059669] font-black text-[17px]">
                      ₹700
                    </div>
                    <div className="text-[#059669] text-[10px] font-black uppercase tracking-wider mt-0.5">
                      Optimized
                    </div>
                  </div>
                </div>
              </MotionCard>
            </MotionStagger>
          </MotionWrapper>

          {/* RIGHT SIDE */}
          <MotionWrapper
            variants={fadeRight}
            className="flex-1 flex flex-col items-start w-full lg:max-w-xl"
          >
            <MotionWrapper variants={fadeUp}>
              <div className="bg-[#6FE5B1] text-[#065F46] font-bold tracking-[0.08em] text-[11px] px-3.5 py-1.5 rounded-full mb-6 uppercase">
                Real-time impact
              </div>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <h2 className="text-[36px] md:text-[50px] font-black text-[#111827] leading-[1.05] tracking-tight mb-6">
                What your AI is fixing —<br />
                right now
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.2}>
              <p className="text-[#4B5563] text-lg leading-[1.6] mb-10 font-medium max-w-[480px]">
                Orkeneo doesn&apos;t just show you "reports." It provides
                active, actionable commands to your kitchen and management team
                to protect your margins every single hour.
              </p>
            </MotionWrapper>

            {/* LIST */}
            <MotionStagger className="flex flex-col gap-5">
              {[
                "Precise SKU-level preparation alerts",
                "Dynamic staffing schedules based on demand",
                "Automated inventory waste reduction",
              ].map((text, i) => (
                <MotionWrapper key={i} variants={fadeUp}>
                  <div className="flex items-start gap-4 group">
                    <CheckCheck className="text-[#10B981] w-[22px] h-[22px] shrink-0 mt-0.5 opacity-90 group-hover:scale-110 transition-transform" />
                    <span className="text-[#374151] font-bold text-[16px]">
                      {text}
                    </span>
                  </div>
                </MotionWrapper>
              ))}
            </MotionStagger>
          </MotionWrapper>
        </div>
      </div>

      {/* section 4 */}
      <div className="bg-[#3056D3] relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background lines */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M-200 400 C 300 -100, 900 700, 1600 300"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M-200 450 C 400 -50, 1000 750, 1600 350"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M-200 500 C 500 0, 1100 800, 1600 400"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <div className="text-center mb-16">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-[32px] md:text-[50px] font-black text-white leading-[1.1] tracking-tight mb-4">
                <span className="text-white">
                  ₹15,000 extra profit possible this month
                </span>
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="text-[#A5B4FC] text-[17px] font-medium tracking-wide">
                Based on your daily operations and demand patterns.
              </p>
            </MotionWrapper>
          </div>

          {/* CARDS */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {/* Card 1 */}
            <MotionCard index={0}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-[2px] rounded-3xl py-10 px-6 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-white font-extrabold text-[40px] md:text-[44px] leading-tight mb-2"
                >
                  ₹666
                </motion.div>
                <div className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">
                  SAVED DAILY ON WASTE
                </div>
              </motion.div>
            </MotionCard>

            {/* Card 2 */}
            <MotionCard index={1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-[2px] rounded-3xl py-10 px-6 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-white font-extrabold text-[40px] md:text-[44px] leading-tight mb-2"
                >
                  ₹1,200
                </motion.div>
                <div className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">
                  EXTRA REVENUE/DAY
                </div>
              </motion.div>
            </MotionCard>

            {/* Card 3 */}
            <MotionCard index={2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-[2px] rounded-3xl py-10 px-6 flex flex-col items-center justify-center text-center border border-white/5 shadow-sm"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-[#4ADE80] font-extrabold text-[40px] md:text-[44px] leading-tight mb-2"
                >
                  ₹15,000
                </motion.div>
                <div className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">
                  TOTAL MONTHLY RECOVERY
                </div>
              </motion.div>
            </MotionCard>
          </MotionStagger>
        </div>
      </div>

      {/* section 5 */}
      <div className="bg-[#F8FAFF] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-[32px] md:text-[44px] font-black text-[#111827] mb-4 tracking-tight">
                The Architect&apos;s Method
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="text-[#6B7280] text-lg font-medium">
                Seamless integration. Immediate insights.
              </p>
            </MotionWrapper>
          </div>

          {/* Steps */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative px-4">
            {/* Step 1 */}
            <MotionCard index={0}>
              <div className="flex flex-col items-center text-center relative z-10 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-[72px] h-[72px] bg-[#EEF5FF] rounded-[20px] flex items-center justify-center mb-8 mx-auto shadow-sm transition-all duration-300"
                >
                  <span className="text-[#2563EB] font-black text-[24px]">
                    1
                  </span>
                </motion.div>

                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Connect your POS
                </h3>

                <p className="text-[#6B7280] leading-relaxed max-w-[280px]">
                  Instant one-click sync with Petpooja, Vyapar, or upload your
                  Excel sheets.
                </p>
              </div>
            </MotionCard>

            {/* Step 2 */}
            <MotionCard index={1}>
              <div className="flex flex-col items-center text-center relative z-10 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-[72px] h-[72px] bg-[#EEF5FF] rounded-[20px] flex items-center justify-center mb-8 mx-auto shadow-sm transition-all duration-300"
                >
                  <span className="text-[#2563EB] font-black text-[24px]">
                    2
                  </span>
                </motion.div>

                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  AI analyzes daily data
                </h3>

                <p className="text-[#6B7280] leading-relaxed max-w-[280px]">
                  Our models process 100+ variables including weather, events,
                  and historical trends.
                </p>
              </div>
            </MotionCard>

            {/* Step 3 */}
            <MotionCard index={2}>
              <div className="flex flex-col items-center text-center relative z-10 group">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="w-[72px] h-[72px] bg-[#EEF5FF] rounded-[20px] flex items-center justify-center mb-8 mx-auto shadow-sm transition-all duration-300"
                >
                  <span className="text-[#2563EB] font-black text-[24px]">
                    3
                  </span>
                </motion.div>

                <h3 className="text-[22px] font-bold text-[#111827] mb-3">
                  Get real-time suggestions
                </h3>

                <p className="text-[#6B7280] leading-relaxed max-w-[280px]">
                  Receive specific prep and staffing instructions via WhatsApp
                  or App Dashboard.
                </p>
              </div>
            </MotionCard>
          </MotionStagger>
        </div>
      </div>

      <ReusableCarousel
        data={testimonials}
        bgColor="#F5F6FA"
        textSize="text-xl md:text-4xl"
      />

      <CTASection
        title="Stop losing ₹15,000/month — start optimizing your café daily"
        subtitle="Based on your daily operations and demand patterns."
        primaryText="Get My Daily Profit Plan"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </>
  );
}
