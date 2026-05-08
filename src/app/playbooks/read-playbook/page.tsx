"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import { fadeUp } from "@/lib/animations/variants";

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
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          {/* CATEGORY */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#194FD7] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
            >
              {/* Animated Dot */}
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-[#194FD7]"
              />
              OPERATIONS
            </motion.div>
          </MotionWrapper>

          {/* TITLE */}
          <MotionWrapper variants={fadeUp}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-[30px] md:text-[42px] font-extrabold text-[#171C24] leading-tight"
            >
              The 2024 Guide to <br />
              Predictive Inventory <br />
              Management
            </motion.h1>
          </MotionWrapper>

          {/* SUBTITLE */}
          <MotionWrapper variants={fadeUp}>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto"
            >
              How to cut costs by up to 22% while eliminating stockouts using
              AI-driven demand forecasting.
            </motion.p>
          </MotionWrapper>

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 border-t border-gray-200 origin-center"
          />

          {/* AUTHOR */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src="/avatar/Elena-Rossi.png"
                  alt="author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>

              {/* Author Info */}
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">
                  Elena Rossi, Operations Lead
                </p>

                <p className="text-xs text-gray-500">
                  January 14, 2024 • 12 min read
                </p>
              </div>
            </motion.div>
          </MotionWrapper>

          {/* DIVIDER */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 border-t border-gray-200 origin-center"
          />

          {/* SECTION TITLE */}
          <MotionWrapper variants={fadeUp}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-10 text-[22px] md:text-[26px] font-semibold text-gray-900 text-left"
            >
              The Paradigm Shift in Restaurant Operations
            </motion.h2>
          </MotionWrapper>

          {/* PARAGRAPH */}
          <MotionWrapper variants={fadeUp}>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed text-left"
            >
              Inventory is the lifeblood of any restaurant, but it's also where
              the most profit is lost. Traditional inventory management relies
              on gut feeling and historical averages that don't account for the
              volatility of modern dining habits. Predictive inventory changes
              the math by looking forward instead of backward.
            </motion.p>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16 overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* ================= INTRO ================= */}
          <MotionWrapper variants={fadeUp}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[22px] md:text-[26px] font-semibold text-gray-900"
              >
                The Paradigm Shift in Restaurant Operations
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base"
              >
                Inventory is the lifeblood of any restaurant, but it&apos;s also
                where the most profit is lost. Traditional inventory management
                relies on gut feeling and historical averages that don&apos;t
                account for the volatility of modern dining habits. Predictive
                inventory changes the math by looking forward instead of
                backward.
              </motion.p>
            </div>
          </MotionWrapper>

          {/* ================= PHASE ================= */}
          <MotionWrapper variants={fadeUp}>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-gray-900"
              >
                Phase 1: The Tactical Framework
              </motion.h3>

              {/* CHECKLIST CARD */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="mt-6 bg-[#EEF2FF] rounded-[28px] p-6"
              >
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </motion.div>
                  Daily Inventory Checklist
                </div>

                <ul className="mt-4 space-y-3 text-gray-600 text-sm">
                  {[
                    "Review AI prep forecasts vs. current stock levels at 7:00 AM.",
                    "Verify high-value ingredient quantities before mid-day rush.",
                    "Log variance in wastage for evening service reconciliation.",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-3"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className="w-4 h-4 border border-blue-400 rounded-full mt-1"
                      />

                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* ================= AI VS MANUAL ================= */}
          <MotionWrapper variants={fadeUp}>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-gray-900"
              >
                AI vs. Manual: The Accuracy Gap
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-gray-600 text-sm leading-relaxed"
              >
                Manual forecasting often results in either &quot;Safety Stock
                Bloat&quot; or &quot;Revenue-Killing Stockouts.&quot; Our data
                across 500+ locations shows a distinct pattern.
              </motion.p>

              {/* COMPARISON CARD */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="mt-6 bg-[#F1F3F7] rounded-[32px] p-5 md:p-6 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-end">
                  {/* MANUAL */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "8rem" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 bg-[#D1D5DB] rounded-t-2xl md:h-32.5 flex items-end justify-center pb-3"
                  />

                  {/* AI */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "10rem" }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      height: {
                        duration: 1,
                      },
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="flex-1 bg-linear-to-br from-[#194FD7] to-[#3B6AF6] rounded-t-2xl md:h-41.25 flex items-end justify-center pb-3"
                  />
                </div>

                <div className="flex justify-around mt-2 w-full h-5">
                  <span className="text-[11px] tracking-wide text-gray-500 font-medium">
                    MANUAL
                  </span>

                  <span className="text-[11px] tracking-wide text-blue-600 font-medium">
                    AI PREDICTIVE
                  </span>
                </div>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* ================= QUOTE ================= */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
              className="bg-[#EEF2FF] p-6 border-l-4 border-[#6B38D4]"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                &quot;Reduce prep during non-peak hours (3 PM - 5 PM) to save up
                to 12% on perishables. Most kitchens over-prepare for a dinner
                rush that hasn&apos;t started yet.&quot;
              </p>
            </motion.div>
          </MotionWrapper>

          {/* ================= STEPS ================= */}
          <MotionWrapper variants={fadeUp}>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold text-gray-900"
              >
                3 Steps to Optimization
              </motion.h3>

              <div className="mt-6 space-y-6">
                {[
                  {
                    number: "1",
                    title: "Analyze historical demand data",
                    desc: "Connect your POS directly to your inventory management system. Historical data must include external variables like local weather, holidays, and nearby events.",
                  },
                  {
                    number: "2",
                    title: "Implement dynamic portion control",
                    desc: "Adjust portion sizes or menu availability based on real-time stock levels. If protein supply is low for the week, prioritize high-margin dishes that use smaller cuts.",
                  },
                  {
                    number: "3",
                    title: "Reduce over-prep during non-peak hours",
                    desc: 'Switch to "Just-in-Time" prep for items with high oxidation rates. This single move can reduce beverage and salad waste by double digits.',
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      whileHover={{
                        scale: 1.08,
                        rotate: 8,
                      }}
                      transition={{
                        y: {
                          duration: 4,
                          repeat: Infinity,
                        },
                      }}
                      className="w-12 h-8 flex items-center justify-center rounded-full bg-[#194FD7] text-white text-sm font-semibold"
                    >
                      {step.number}
                    </motion.div>

                    <div>
                      <p className="font-medium text-gray-900">{step.title}</p>

                      <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="
          relative overflow-hidden
          rounded-[40px] px-6 md:px-12 py-16 text-center text-white
          bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.4),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.4),transparent_40%),linear-gradient(135deg,#6B38D4,#8B5CF6)]
          shadow-[0_25px_60px_rgba(107,56,212,0.35)]
        "
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/10 blur-3xl"
              />

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 text-[26px] md:text-[38px] font-semibold leading-tight"
              >
                Want this automated?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="relative z-10 mt-4 text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
              >
                Orkeneo monitors your inventory levels and sales in <br />{" "}
                real-time to adjust prep lists dynamically.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 flex justify-center relative z-10"
              >
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-3 rounded-full bg-white text-[#6B38D4] font-semibold text-sm md:text-base shadow-md"
                >
                  Calculate My Savings
                </motion.button>
              </motion.div>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F0F3FF] px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <MotionWrapper variants={fadeUp}>
            <div className="text-center max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-[26px] md:text-[34px] font-semibold text-[#171C24]"
              >
                How Orkeneo Helps
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 }}
                className="mt-3 text-gray-500 text-sm md:text-base"
              >
                Our intelligence platform acts as a digital brain for your
                back-of-house operations.
              </motion.p>
            </div>
          </MotionWrapper>

          {/* ================= CARDS ================= */}
          <MotionStagger className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "/svg/prep-forecasting.svg",
                title: "Prep Forecasting",
                desc: "Know exactly how much to prepare each morning. Reduce food waste by up to 30% with precise daily projections.",
              },
              {
                icon: "/svg/menu-insights.svg",
                title: "Menu Insights",
                desc: "Identify which items are profit-drivers and which are costing you inventory efficiency. Dynamic engineering at your fingertips.",
              },
              {
                icon: "/svg/labour-optimization.svg",
                title: "Labor Optimization",
                desc: "Align your staffing with predicted demand. Never over-staff a slow Tuesday or under-prepare for a busy Saturday.",
              },
            ].map((card, i) => (
              <MotionWrapper key={i} variants={fadeUp} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-[28px] p-7 shadow-sm"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-fit"
                  >
                    <Image src={card.icon} alt="" width={25} height={25} />
                  </motion.div>

                  {/* TITLE */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="mt-4 font-semibold text-gray-900"
                  >
                    {card.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mt-2 text-sm text-gray-500 leading-relaxed"
                  >
                    {card.desc}
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>

          {/* ================= CTA CARD ================= */}
          <MotionWrapper variants={fadeUp}>
            <div className="mt-16 flex justify-center">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[18px] px-6 md:px-12 py-8 shadow-md text-center max-w-2xl w-full"
              >
                {/* TITLE */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg md:text-xl font-semibold text-gray-900"
                >
                  See your restaurant’s AI plan
                </motion.h3>

                {/* BUTTONS */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
                >
                  {/* Primary */}
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-3 cursor-pointer rounded-full bg-[#194FD7] text-white text-sm font-medium shadow-md hover:bg-[#163bb3]"
                  >
                    Get AI Plan
                  </motion.button>

                  {/* Secondary */}
                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-3 text-blue-600 rounded-full border bg-blue-50 hover:bg-blue-100 cursor-pointer border-blue-300 text-sm font-medium"
                  >
                    Book Demo
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16 border overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* ================= HEADER ================= */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              {/* Animated Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                transition={{ duration: 0.5 }}
                className="h-0.5 bg-[#194FD7]"
              />

              <h2 className="text-lg font-semibold text-gray-900">
                More Playbooks
              </h2>
            </motion.div>
          </MotionWrapper>

          {/* ================= GRID ================= */}
          <MotionStagger className="grid md:grid-cols-3 gap-6">
            {playbooks.map((item, i) => (
              <MotionWrapper key={i} variants={fadeUp} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group cursor-pointer"
                >
                  {/* IMAGE */}
                  <div className="relative h-45 rounded-[20px] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-4">
                    {/* TAG */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 }}
                      className={`text-xs font-semibold tracking-wide ${item.color}`}
                    >
                      {item.tag}
                    </motion.p>

                    {/* TITLE */}
                    <motion.h3
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 text-[16px] font-semibold text-gray-900 leading-snug group-hover:text-[#194FD7]"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
