"use client";

import CTASection from "@/components/CTASection";
import StackLogos from "@/components/StackLogos";
import { Ban, Clock, TrendingDown } from "lucide-react";
import { Flame, UtensilsCrossed, Leaf } from "lucide-react";
import { fadeUp, fadeIn, scaleIn } from "@/lib/animations/variants";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { motion } from "framer-motion";
import MotionStagger from "@/components/motion/MotionStagger";

export default function FoodPrepForecastingPage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6 overflow-hidden">
        {/* GLOWS (subtle animation) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute -top-30 -right-30 w-100 h-100 bg-purple-400 opacity-20 blur-[120px] rounded-full"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-30 -left-30 w-100 h-100 bg-indigo-400 opacity-20 blur-[120px] rounded-full"
        />

        {/* CONTENT */}
        <div className="relative max-w-4xl mt-20 text-center z-10">
          <MotionStagger>
            {/* BADGE */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-[#FEE2E2] text-[#B91C1C] text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              >
                <span className="text-xs">▲</span>
                ₹20,000/month = ₹666 wasted every day
              </motion.div>
            </MotionWrapper>

            {/* HEADING */}
            <MotionWrapper variants={fadeUp}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#171C24] leading-tight">
                You're losing{" "}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-linear-to-r from-[#194FD7] to-[#3B82F6] bg-clip-text text-transparent"
                >
                  <br /> ₹20,000/month
                </motion.span>{" "}
                on ingredients
              </h1>
            </MotionWrapper>

            {/* SUBTEXT */}
            <MotionWrapper variants={fadeUp}>
              <p className="mt-6 text-lg text-[#434655] max-w-2xl mx-auto">
                From over-prepping and poor demand planning. Orkeneo tells you
                exactly what to prep — today.
              </p>
            </MotionWrapper>

            {/* BUTTONS */}
            <MotionWrapper variants={fadeUp}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#194FD7] to-[#3B82F6] shadow-lg hover:opacity-90 transition"
                >
                  Get My Prep Plan for Today
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full font-semibold border border-gray-300 text-[#171C24] bg-white hover:bg-gray-50 transition"
                >
                  See My Savings Report
                </motion.button>
              </div>
            </MotionWrapper>

            {/* SOCIAL PROOF */}
            <MotionWrapper variants={scaleIn}>
              <div className="mt-8 flex items-center justify-center gap-3 text-sm text-[#6B7280]">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((img, i) => (
                    <motion.img
                      key={img}
                      src={`https://i.pravatar.cc/40?img=${img}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      alt=""
                    />
                  ))}
                </div>

                <span>Used by 240+ restaurant owners</span>
              </div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      <StackLogos />

      <section className="bg-[#F9FAFB] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <MotionStagger>
            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171C24]">
                The hidden cost of manual planning
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp}>
              <p className="mt-4 text-lg text-[#6B7280]">
                You’re either over-prepping or running out — both cost you
                money.
              </p>
            </MotionWrapper>

            {/* Cards */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <MotionWrapper variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 text-left shadow-sm transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#FEE2E2] flex items-center justify-center mb-6"
                  >
                    <TrendingDown className="w-5 h-5 text-[#B91C1C]" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#171C24]">
                    Over-prepping
                  </h3>

                  <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
                    Daily excess that ends up in the bin because of guesswork.
                  </p>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-2xl font-extrabold text-[#B91C1C]"
                  >
                    ₹8,000 loss daily
                  </motion.p>
                </motion.div>
              </MotionWrapper>

              {/* Card 2 */}
              <MotionWrapper variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 text-left shadow-sm transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#E0E7FF] flex items-center justify-center mb-6"
                  >
                    <Ban className="w-5 h-5 text-[#1D4ED8]" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#171C24]">
                    Stock-outs
                  </h3>

                  <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
                    Running out of best-sellers during peak hours. Customer
                    churn.
                  </p>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-2xl font-extrabold text-[#1D4ED8]"
                  >
                    ₹6,000 missed revenue
                  </motion.p>
                </motion.div>
              </MotionWrapper>

              {/* Card 3 */}
              <MotionWrapper variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 text-left shadow-sm transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-[#E5E7EB] flex items-center justify-center mb-6"
                  >
                    <Clock className="w-5 h-5 text-[#374151]" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#171C24]">
                    Manual planning
                  </h3>

                  <p className="mt-3 text-[#6B7280] text-sm leading-relaxed">
                    Endless spreadsheets and mental fatigue for your managers.
                  </p>

                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-2xl font-extrabold text-[#171C24]"
                  >
                    2–3 hrs wasted daily
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            </div>
          </MotionStagger>
        </div>
      </section>

      <section className="bg-[#F0F3FF] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/*  HEADER */}
          <MotionWrapper variants={fadeUp}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm font-semibold text-[#6D28D9] mb-3"
                >
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    className="w-2 h-2 bg-[#6D28D9] rounded-full"
                  />
                  LIVE AI INTELLIGENCE
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#171C24]">
                  Today's Prep Plan (Friday)
                </h2>

                <p className="mt-2 text-[#6B7280]">
                  Based on your past sales & demand trends
                </p>
              </div>

              {/* Savings Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#047857] text-white px-6 py-3 rounded-full font-semibold shadow-md whitespace-nowrap"
              >
                ↗ +₹4,500 saved today
              </motion.div>
            </div>
          </MotionWrapper>

          {/*  LIST */}
          <MotionStagger className="mt-10 space-y-5">
            {/* ITEM 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-white rounded-2xl px-6 py-5 flex items-center justify-between border border-[#E5E7EB] transition-all"
              >
                <div className="absolute left-0 top-1 h-[90%] w-2 bg-[#2563EB] rounded-l-4xl"></div>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center"
                  >
                    <UtensilsCrossed className="w-5 h-5 text-[#2563EB]" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-[#171C24]">
                      Paneer Tikka
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      High demand expected (19:00 - 21:00)
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-[#2563EB]"
                  >
                    8kg
                  </motion.p>
                  <p className="text-sm text-[#059669] font-medium">
                    Optimal Prep
                  </p>
                </div>
              </motion.div>
            </MotionWrapper>

            {/* ITEM 2 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-white rounded-2xl px-6 py-5 flex items-center justify-between border border-[#E5E7EB] transition-all"
              >
                <div className="absolute left-0 top-1 h-[90%] w-2 bg-[#7C3AED] rounded-l-4xl"></div>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center"
                  >
                    <Flame className="w-5 h-5 text-[#7C3AED]" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-[#171C24]">
                      Chicken Biryani
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      Bulk order alert: 3 Office parties nearby
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-[#7C3AED]"
                  >
                    12kg
                  </motion.p>
                  <p className="text-sm text-[#059669] font-medium">
                    Optimal Prep
                  </p>
                </div>
              </motion.div>
            </MotionWrapper>

            {/* ITEM 3 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-white rounded-2xl px-6 py-5 flex items-center justify-between border border-[#E5E7EB] transition-all"
              >
                <div className="absolute left-0 top-1 h-[90%] w-2 bg-[#059669] rounded-l-4xl"></div>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center"
                  >
                    <Leaf className="w-5 h-5 text-[#059669]" />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-[#171C24]">
                      Chopped Onions
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      Base ingredient for 70% of menu items
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-[#059669]"
                  >
                    5kg
                  </motion.p>
                  <p className="text-sm text-[#059669] font-medium">
                    Optimal Prep
                  </p>
                </div>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <MotionStagger>
            {/* TITLE */}
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#171C24]">
                How Orkeneo decides what you prep
              </h2>
            </MotionWrapper>

            {/* TIMELINE */}
            <div className="relative mt-16">
              {/* CONNECTING LINE (animated) */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[66%] h-0.5 bg-[#E5E7EB] origin-left"
              />

              {/* STEPS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {[
                  {
                    num: 1,
                    title: "Predict demand",
                    desc: "Predict tomorrow’s demand using your sales data, local events, and weather trends.",
                    bg: "bg-[#DBEAFE]",
                    color: "text-[#1D4ED8]",
                  },
                  {
                    num: 2,
                    title: "Recommend prep",
                    desc: "We recommend exact prep quantities per item (kg/ltr) to eliminate any kitchen guesswork.",
                    bg: "bg-[#EDE9FE]",
                    color: "text-[#7C3AED]",
                  },
                  {
                    num: 3,
                    title: "Adjust daily",
                    desc: "Orkeneo adjusts daily based on real-time trends and POS data for maximum accuracy.",
                    bg: "bg-[#D1FAE5]",
                    color: "text-[#059669]",
                  },
                ].map((step, i) => (
                  <MotionWrapper key={step.num} variants={fadeUp}>
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Circle */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className={`relative z-10 w-16 h-16 rounded-full ${step.bg} flex items-center justify-center text-xl font-bold ${step.color}`}
                      >
                        {step.num}
                      </motion.div>

                      {/* Title */}
                      <h3 className="mt-6 text-lg font-bold text-[#171C24]">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-sm text-[#6B7280] max-w-xs">
                        {step.desc}
                      </p>
                    </motion.div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          </MotionStagger>
        </div>
      </section>

      <section className="bg-[#2f3640] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Stat 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="transition-all"
              >
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent"
                >
                  50%
                </motion.h3>

                <p className="mt-3 text-[#9CA3AF] text-sm">less food waste</p>
              </motion.div>
            </MotionWrapper>

            {/* Stat 2 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="transition-all"
              >
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#D1D5DB] to-[#E5E7EB] bg-clip-text text-transparent"
                >
                  ₹30,000
                </motion.h3>

                <p className="mt-3 text-[#9CA3AF] text-sm">saved per month</p>
              </motion.div>
            </MotionWrapper>

            {/* Stat 3 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="transition-all"
              >
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#C4B5FD] to-[#DDD6FE] bg-clip-text text-transparent"
                >
                  100%
                </motion.h3>

                <p className="mt-3 text-[#9CA3AF] text-sm">
                  data-driven decisions
                </p>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      <CTASection
        title="Stop losing ₹20,000 every month"
        subtitle="Start using AI to decide what to prep — every day."
        primaryText="Get My AI Prep Plan"
        secondaryText="Start Saving Today"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </>
  );
}
