"use client";

import CTASection from "@/components/CTASection";
import { Package, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { PRECISION_CTA } from "@/lib/staffing.data";
import ReusableCarousel from "@/components/ReusableCarousel";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionCard from "@/components/motion/MotionCard";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations/variants";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Orkeneo has fundamentally changed how our back-of-house operates. We've improved margins without compromising quality — it’s like having an elite financial consultant in the kitchen.",
    name: "Rahul Sharma",
    role: "QSR Owner, Bangalore",
    avatar: "/avatar/qsr-owner.png",
  },
  {
    text: "We reduced our daily waste by 40% in just 2 weeks. Now my team knows exactly what to prep every morning",
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

export default function LossHeroSection() {
  return (
    <>
      {/* hero section */}
      <section className="bg-[#F8F9FC] mt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <MotionWrapper variants={fadeLeft}>
            <div>
              {/* Badge */}
              <MotionWrapper variants={fadeUp}>
                <span className="inline-flex items-center gap-2 bg-purple-100 text-[#6B38D4] text-xs font-semibold px-3 py-1 rounded-full">
                  ⚡ THE PREDICTIVE ARCHITECT
                </span>
              </MotionWrapper>

              {/* Heading */}
              <MotionWrapper variants={fadeUp} delay={0.1}>
                <h1 className="mt-6 text-[42px] md:text-[56px] font-extrabold text-gray-900 leading-tight">
                  You're losing <br />
                  <span className="text-blue-600">₹50,000/month</span> <br />
                  in hidden costs.
                </h1>
              </MotionWrapper>

              {/* Description */}
              <MotionWrapper variants={fadeUp} delay={0.2}>
                <p className="mt-6 text-gray-500 text-[15px] md:text-base max-w-xl leading-relaxed">
                  Orkeneo brings precision to your kitchen — optimizing prep,
                  demand, and execution at a chef-level. Built for fine dining
                  kitchens that operate at the highest standards.
                </p>
              </MotionWrapper>

              {/* Buttons */}
              <MotionWrapper variants={fadeUp} delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
                  >
                    Get My Precision Audit
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium border border-gray-200 hover:bg-gray-200 transition"
                  >
                    See How It Works
                  </motion.button>
                </div>
              </MotionWrapper>
            </div>
          </MotionWrapper>

          {/* RIGHT CARD */}
          <MotionWrapper variants={fadeRight}>
            <div className="flex justify-center lg:justify-end">
              <MotionCard index={0}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="w-full max-w-lg bg-white rounded-4xl p-6 shadow-md transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      Intelligence Pulse
                    </p>

                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full"
                    >
                      <Image
                        src="/images/dining-svg.png"
                        alt="logo"
                        width={40}
                        height={40}
                      />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className=" text-lg font-semibold text-gray-900">
                    Weekly Leakage Detected
                  </h3>

                  {/* Amount */}
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
                        Hidden Inefficiency
                      </p>

                      {/* subtle number pop */}
                      <motion.p
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-extrabold text-gray-900"
                      >
                        ₹18,240
                      </motion.p>
                    </div>

                    <span className="text-xs font-semibold text-white bg-[#00855B] px-3 py-1 rounded-full">
                      +12.4%
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-200 my-5"></div>

                  {/* Recommendation */}
                  <div className="bg-gray-100 rounded-xl px-4 py-2 flex items-start gap-2">
                    <span className="relative flex h-2.5 w-2.5 shrink-0 mt-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                    </span>

                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-xs text-gray-600"
                    >
                      AI Recommendation: Reduce Wagyu prep by 15% for tonight's
                      service.
                    </motion.p>
                  </div>
                </motion.div>
              </MotionCard>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Inefficiencies Section */}
      <section className="bg-[#F0F3FF] px-4 pt-24 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-[28px] md:text-[36px] font-extrabold text-[#111827] text-center mb-12">
              In fine dining, small inefficiencies{" "}
              <br className="hidden md:block" />
              become expensive mistakes
            </h2>
          </MotionWrapper>

          {/* Cards */}
          <MotionStagger className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <MotionCard index={0}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)] border border-gray-100 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#EDF2FB] flex items-center justify-center text-[#3B6AF6] mb-8"
                >
                  <Package size={20} />
                </motion.div>

                <h3 className="text-[17px] font-medium text-gray-700">
                  Ingredient wastage
                </h3>

                {/* subtle highlight animation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 text-[26px] font-medium text-[#CB3F3A]"
                >
                  ₹12–15K/month
                </motion.p>

                <p className="mt-3 text-[14px] text-gray-500 leading-relaxed">
                  Lost in premium ingredients due to over-ordering and
                  inaccurate prep forecasting.
                </p>
              </motion.div>
            </MotionCard>

            {/* Card 2 */}
            <MotionCard index={1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)] border border-gray-100 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#F3EDFD] flex items-center justify-center text-[#8B5CF6] mb-8"
                >
                  <TrendingUp size={20} />
                </motion.div>

                <h3 className="text-[17px] font-medium text-gray-700">
                  Demand variability
                </h3>

                <p className="mt-4 text-[14px] text-gray-500 leading-relaxed">
                  Over or under preparation impacts service quality...
                </p>
              </motion.div>
            </MotionCard>

            {/* Card 3 */}
            <MotionCard index={2}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_rgb(0,0,0,0.02)] border border-gray-100 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-full bg-[#EBF7EB] flex items-center justify-center text-[#10B981] mb-8"
                >
                  <Users size={20} />
                </motion.div>

                <h3 className="text-[17px] font-medium text-gray-700">
                  Staff misallocation
                </h3>

                <p className="mt-4 text-[14px] text-gray-500 leading-relaxed">
                  High-cost labor used inefficiently during slow periods instead
                  of peak demand spikes.
                </p>
              </motion.div>
            </MotionCard>
          </MotionStagger>
        </div>
      </section>

      {/* Precision Commands Section */}
      <section className="bg-white px-4 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[36px] md:text-[46px] font-medium text-[#111827] leading-[1.15] mb-12 tracking-tight">
              AI-driven precision <br className="hidden md:block" />
              commands for your <br className="hidden md:block" />
              kitchen
            </h2>

            <div className="space-y-5">
              {/* Item 1 */}
              <div className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3B6AF6]"></div>
                <div>
                  <p className="text-[10px] font-bold text-[#3B6AF6] uppercase tracking-widest mb-1">
                    Chef Action
                  </p>
                  <p className="text-[16px] font-bold text-[#111827]">
                    Reduce truffle prep by 8%
                  </p>
                </div>
                <p className="text-[14px] font-bold text-[#059669]">
                  Save ₹4,200 tonight
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8B5CF6]"></div>
                <div>
                  <p className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest mb-1">
                    AI Suggestion
                  </p>
                  <p className="text-[16px] font-bold text-[#111827]">
                    Adjust service timing
                  </p>
                </div>
                <p className="text-[13px] font-medium text-[#6B7280]">
                  Improve turnover
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-0.5">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#059669]"></div>
                <div>
                  <p className="text-[10px] font-bold text-[#059669] uppercase tracking-widest mb-1">
                    Tonight
                  </p>
                  <p className="text-[16px] font-bold text-[#111827]">
                    Reallocate staff for peak
                  </p>
                </div>
                <p className="text-[13px] font-medium text-[#6B7280]">
                  Reduce idle time
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT (IMAGE CARD) */}
          <div className="relative">
            <div className="relative w-full aspect-4/4.5 lg:aspect-[4/4.2] rounded-[48px] overflow-hidden ">
              <Image
                src="/images/kitchen.png"
                alt="Kitchen precision"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection {...PRECISION_CTA} />

      {/* Stats Strip */}
      <section className="w-full bg-[#2C313A] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] md:text-[44px] tracking-tight font-extrabold text-[#6FFBBE] leading-none mb-3">
              -45%
            </h2>
            <p className="text-white text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
              Ingredient Waste
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] md:text-[44px] tracking-tight font-extrabold text-[#B6C4FF] leading-none mb-3">
              +12%
            </h2>
            <p className="text-white text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
              Margin Improvement
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[32px] md:text-[44px] tracking-tight font-extrabold text-[#D0BCFF] leading-none mb-3">
              100%
            </h2>
            <p className="text-white text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
              Operational Visibility
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="w-full bg-[#0A0D14] py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col relative">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[40px] md:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight">
                A command view of <br className="hidden md:block" /> your entire
                kitchen
              </h2>
              <p className="mt-6 text-[17px] text-[#8693A4] leading-relaxed max-w-lg">
                Real-time oversight over margins, prep vs demand, and granular
                service insights.
              </p>
            </div>

            {/* Icon Group */}
            <div className="flex items-center justify-center p-2 mb-4 md:mb-0">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[#3B6AF6]"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 17.5H21M17.5 14V21"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full aspect-4/2 md:aspect-[2.3/1] z-10 transition-transform hover:scale-[1.01] duration-700 ease-out">
            <Image
              src="/images/entire-kitchen.png"
              alt="Orkeneo Dashboard Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <ReusableCarousel
        data={testimonials}
        bgColor="#F5F6FA"
        textSize="text-xl md:text-4xl"
      />

      {/* How it Works Section */}
      <section className="w-full bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">
              Connect system
            </h3>
            <p className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]">
              Seamlessly integrate with your existing POS and inventory.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">
              AI Analyzes
            </h3>
            <p className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]">
              Our engine scans millions of data points to find leakages.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-3">
              Get daily commands
            </h3>
            <p className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]">
              Actionable, precision instructions delivered before service.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        variant="dark"
        title="Stop losing ₹50,000/month — bring precision to your kitchen"
        primaryText="Get My Precision Audit"
        bgImage="/images/precision-audit.png"
      />
    </>
  );
}
