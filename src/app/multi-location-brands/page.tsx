"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ReusableCarousel from "@/components/ReusableCarousel";
import CTASection from "@/components/CTASection";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import {
  fadeUp,
  scaleIn,
  fadeRight,
  fadeLeft,
} from "@/lib/animations/variants";

const performanceStats = [
  {
    prefix: "",
    to: 100,
    suffix: "%",
    title: "VISIBILITY",
    desc: "Real-time oversight into every kitchen, counter, and cash register.",
    glow: "bg-[#4F6EF7]/20",
    text: "from-[#4F6EF7] to-[#718CFB]",
  },
  {
    prefix: "+",
    to: 30,
    suffix: "%",
    title: "OPERATIONAL EFFICIENCY",
    desc: "Achieved through AI-optimized labor and prep schedules.",
    glow: "bg-[#8B5CF6]/20",
    text: "from-[#8B5CF6] to-[#A072F5]",
  },
  {
    prefix: "+",
    to: 15,
    suffix: "%",
    title: "MARGIN IMPROVEMENT",
    desc: "Recaptured from eliminated waste and inventory leakage.",
    glow: "bg-[#10B981]/20",
    text: "from-[#057A55] to-[#10B981]",
  },
];

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

const networkSteps = [
  {
    number: 1,
    icon: "ph:share-network-bold",
    title: "Connect all outlets",
    description:
      "One-click integration with your existing POS and ERP systems across all locations.",
    iconColor: "text-blue-600",
  },
  {
    number: 2,
    icon: "mdi:chart-box-outline",
    title: "AI analyzes locations",
    description:
      "Orkeneo maps every transaction and prep action to find the network's efficiency ceiling.",
    iconColor: "text-blue-600",
  },
  {
    number: 3,
    icon: "lucide:sparkles",
    title: "Unified decisions",
    description:
      "Get smart alerts and ready-to-execute tasks that optimize the entire brand instantly.",
    iconColor: "text-blue-600",
  },
];

export default function MultiLocationBrandsPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="min-h-screen bg-linear-to-br from-[#f8f9ff] via-[#f3f5ff] to-[#eef1ff]">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <MotionStagger className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* LEFT CONTENT */}
            <MotionWrapper variants={fadeLeft} className="flex-1 text-left">
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100 mb-7"
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"
                />
                For Multi-Location Brands
              </motion.span>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-extrabold leading-[1.06] tracking-tight text-gray-950 mb-6"
              >
                You're losing <br /> control across <br /> your outlets — <br />
                because you <br />{" "}
                <span className="relative">
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-indigo-600"
                  >
                    lack real <br /> visibility
                  </motion.span>
                </span>
              </motion.h1>

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-gray-500 text-[16px] leading-relaxed max-w-lg mb-8"
              >
                Orkeneo gives you a unified view of all your locations — helping
                you detect issues, standardize operations, and recover lost
                margins.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 rounded-full bg-[#4F6EF7] text-white text-sm font-semibold shadow-lg shadow-indigo-200"
                >
                  Get My Multi-Outlet Audit
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm hover:shadow-md hover:border-indigo-200"
                >
                  See How It Works
                </motion.button>
              </motion.div>

              {/* Trust nudge */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-sm text-gray-400 font-medium"
              >
                Built for multi-location restaurant brands
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="text-sm mt-10 font-medium"
              >
                Work With POSist ,Zoho
              </motion.p>
            </MotionWrapper>

            {/* RIGHT IMAGE */}
            <MotionWrapper
              variants={fadeRight}
              className="relative w-full lg:w-[500px] shrink-0"
            >
              {/* Glow blob */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-10 bg-linear-to-tr from-indigo-300/30 via-blue-200/20 to-purple-200/20 blur-3xl rounded-full"
              />

              {/* Image card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(79,70,229,0.22),0_8px_32px_rgba(0,0,0,0.12)] border border-white/60"
              >
                <Image
                  src="/images/network-help.png"
                  alt="Multi-location network intelligence"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />

                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
              </motion.div>

              {/* Floating stat card — top left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 min-w-[160px]"
              >
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
              </motion.div>

              {/* Floating stat card — bottom right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 min-w-[170px]"
              >
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
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      {/* ── HIDDEN COST OF OPERATING WITHOUT VISIBILITY ───────────────────── */}
      <section className="py-24 bg-[#F0F3FF] overflow-hidden">
        <div className="max-w-280 mx-auto px-6">
          {/* HEADER */}
          <MotionWrapper variants={fadeUp}>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2.5rem] md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
              >
                The hidden cost of operating without visibility
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-slate-500 text-[17px] font-medium max-w-2xl mx-auto"
              >
                Average brand loses ₹12L - ₹45L annually per outlet to
                operational friction.
              </motion.p>
            </div>
          </MotionWrapper>

          {/* CARDS */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  className="w-[52px] h-[52px] rounded-2xl bg-red-50 flex items-center justify-center mb-6"
                >
                  <Image
                    src="/images/eye.png"
                    alt="Blind spots"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Blind spots
                </h3>

                <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                  Issues go unnoticed and silently drain margins through
                  inventory waste and staffing errors.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-baseline gap-2 pt-5 w-full"
                >
                  <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                    - ₹85,000
                  </span>

                  <span className="text-slate-500 text-xs font-medium">
                    Avg. monthly drain
                  </span>
                </motion.div>
              </motion.div>
            </MotionWrapper>

            {/* Card 2 */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  className="w-[52px] h-[52px] rounded-2xl bg-blue-50 flex items-center justify-center mb-6"
                >
                  <Image
                    src="/images/calculate.png"
                    alt="Inconsistent operations"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Inconsistent operations
                </h3>

                <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                  Different prep and performance benchmarks per outlet create
                  unpredictable customer experiences.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex items-baseline gap-2 pt-5 w-full"
                >
                  <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                    - 22% Efficiency
                  </span>

                  <span className="text-slate-500 text-xs font-medium">
                    vs. top performers
                  </span>
                </motion.div>
              </motion.div>
            </MotionWrapper>

            {/* Card 3 */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col items-start text-left hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  className="w-[52px] h-[52px] rounded-2xl bg-purple-50 flex items-center justify-center mb-6"
                >
                  <Image
                    src="/images/pending.png"
                    alt="Delayed decisions"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </motion.div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Delayed decisions
                </h3>

                <p className="text-slate-500 text-[15px] leading-relaxed flex-1 mb-8">
                  Lost revenue opportunities from slow data sync between
                  physical locations and headquarters.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-baseline gap-2 pt-5 w-full"
                >
                  <span className="text-[#BA1A1A] font-extrabold text-lg tracking-tight">
                    - 15% Margin
                  </span>

                  <span className="text-slate-500 text-xs font-medium">
                    due to slow pivots
                  </span>
                </motion.div>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      {/* ── AI INTELLIGENCE ACROSS NETWORK ──────────────────────────────── */}
      <section className="py-24 mt-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <MotionStagger className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT: UI CARD */}
            <MotionWrapper
              variants={fadeLeft}
              className="flex-1 w-full flex justify-center"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-[#F0F3FF] rounded-[3rem] p-8 md:p-10 w-full max-w-[500px]"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6"
                >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-bold text-slate-900 text-[17px]"
                    >
                      Outlet Comparisons
                    </motion.h3>

                    <div className="flex items-center gap-2">
                      <span className="text-[#7E3AF2] text-[13px] font-semibold">
                        Live Intelligence
                      </span>

                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.8,
                          ease: "easeInOut",
                        }}
                        className="relative flex h-2.5 w-2.5"
                      >
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#7E3AF2] opacity-75 animate-ping"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7E3AF2]"></span>
                      </motion.span>
                    </div>
                  </div>

                  {/* Outlets */}
                  <MotionStagger className="flex flex-col gap-3 mb-6">
                    {/* Outlet A */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="flex justify-between items-center bg-[#FDF2F2] rounded-xl px-5 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                          }}
                          className="w-2 h-2 rounded-full bg-[#C00F0C]"
                        />

                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet A
                        </span>
                      </div>

                      <span className="text-[#C00F0C] text-[13px] font-bold">
                        Underperforming
                      </span>
                    </motion.div>

                    {/* Outlet B */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="flex justify-between items-center bg-[#F3FAF7] rounded-xl px-5 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: 0.4,
                          }}
                          className="w-2 h-2 rounded-full bg-[#057A55]"
                        />

                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet B
                        </span>
                      </div>

                      <span className="text-[#057A55] text-[13px] font-bold">
                        Optimized
                      </span>
                    </motion.div>

                    {/* Outlet C */}
                    <motion.div
                      whileHover={{ x: 6 }}
                      className="flex justify-between items-center bg-[#F4F8FD] rounded-xl px-5 py-3.5"
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2,
                            delay: 0.8,
                          }}
                          className="w-2 h-2 rounded-full bg-[#1C64F2]"
                        />

                        <span className="text-[14px] font-bold text-slate-800">
                          Outlet C
                        </span>
                      </div>

                      <span className="text-[#1C64F2] text-[13px] font-bold">
                        Steady
                      </span>
                    </motion.div>
                  </MotionStagger>

                  {/* Network Trend Detected */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#F9F5FF] border-l-[5px] border-[#7E3AF2] rounded-r-xl p-4 pl-5"
                  >
                    <h4 className="text-[#7E3AF2] text-[11px] font-bold tracking-widest uppercase mb-1.5">
                      NETWORK TREND DETECTED
                    </h4>

                    <p className="text-slate-800 text-[13px] font-medium leading-[1.6]">
                      Supply costs rising at 6/8 locations. Suggested bulk
                      procurement shift available.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </MotionWrapper>

            {/* RIGHT: TEXT CONTENT */}
            <MotionWrapper
              variants={fadeRight}
              className="flex-1 w-full text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2.5rem] md:text-[3.25rem] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6"
              >
                AI intelligence across
                <br />
                your entire network
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-slate-500 text-[17px] leading-[1.7] mb-10"
              >
                Orkeneo doesn&apos;t just show data; it understands it. Our
                network-wide AI tracks trends that human managers miss, flagging{" "}
                <span className="italic text-slate-500">
                  cross-location issues before they become permanent losses.
                </span>
              </motion.p>

              <MotionStagger className="flex flex-col gap-6">
                {[
                  "Automatic performance normalization",
                  "Predictive maintenance for equipment across all sites",
                  "Centralized decision-making based on real-time data",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded-full bg-[#EBF5FF] text-[#3F83F8]"
                    >
                      <Image
                        src="/images/sign-icon.png"
                        width={25}
                        height={25}
                        alt="sign"
                      />
                    </motion.div>

                    <span className="text-slate-700 font-medium text-[16px]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </MotionStagger>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      {/* ── PRIORITY OPERATIONS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <MotionStagger className="flex flex-col md:flex-row justify-between items-end mb-12">
            {/* LEFT */}
            <MotionWrapper variants={fadeLeft}>
              <div>
                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#6C2BD9] text-[13px] font-bold tracking-[0.15em] uppercase mb-3"
                >
                  PRIORITY OPERATIONS
                </motion.h4>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[2.25rem] md:text-[2.75rem] font-extrabold text-[#111827] tracking-tight"
                >
                  Your AI plan across all outlets — today
                </motion.h2>
              </div>
            </MotionWrapper>

            {/* RIGHT */}
            <MotionWrapper variants={fadeRight}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="text-right mt-6 md:mt-0 flex flex-col items-end"
              >
                <p className="text-slate-600 text-[15px] font-semibold mb-1">
                  Potential Recovery Today
                </p>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <AnimatedCounter
                    to={95}
                    prefix="₹"
                    suffix=",000"
                    decimals={0}
                    duration={2}
                    className="text-[2.5rem] md:text-[3rem] font-extrabold text-[#057A55] tracking-tight leading-none"
                  />
                </motion.div>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>

          {/* Cards */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#F0F3FF] rounded-[1rem] p-8 pb-10 border border-[#F1F5F9] border-l-8 border-l-[#3B82F6] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-auto"
              >
                <div className="flex justify-between items-start mb-6 w-full">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="p-2.5"
                  >
                    <Image
                      src="/images/package-variant-closed.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full"
                  >
                    +₹45,000
                  </motion.div>
                </div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Reduce prep at 3 outlets
                </h3>

                <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                  AI detected over-preparation at Mumbai, Pune, and Thane
                  locations based on tomorrow&apos;s weather forecast.
                </p>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-[#3B82F6] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
                >
                  <span>Implement Strategy</span>
                  <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
                </motion.a>
              </motion.div>
            </MotionWrapper>

            {/* Card 2 */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#F0F3FF] rounded-[1rem] p-8 pb-10 border border-[#F1F5F9] border-l-8 border-l-[#8B5CF6] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6 w-full">
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    className="p-2.5"
                  >
                    <Image
                      src="/images/account-group.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full"
                  >
                    +₹30,000
                  </motion.div>
                </div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Adjust staffing
                </h3>

                <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                  Labor reallocation for the evening shift across the NCR
                  network to match predicted traffic spikes.
                </p>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-[#8B5CF6] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
                >
                  <span>Notify Managers</span>
                  <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
                </motion.a>
              </motion.div>
            </MotionWrapper>

            {/* Card 3 */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#F0F3FF] rounded-[1rem] p-8 pb-10 border border-[#F1F5F9] border-l-8 border-l-[#10B981] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6 w-full">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="p-2.5"
                  >
                    <Image
                      src="/images/silverware-fork-knife.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-[#E3F6EE] text-[#057A55] text-[13px] font-bold px-3.5 py-1.5 rounded-full"
                  >
                    +₹20,000
                  </motion.div>
                </div>

                <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                  Menu shift
                </h3>

                <p className="text-slate-500 text-[15px] leading-[1.6] mb-10 flex-1">
                  Promote High-Margin Combo B in Bangalore outlets where average
                  ticket size has dipped below benchmark.
                </p>

                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-[#10B981] font-bold text-[15px] tracking-wide w-fit hover:opacity-80 transition-opacity"
                >
                  <span>Sync POS Updates</span>
                  <Icon icon="mdi:arrow-right" className="ml-1.5" width={18} />
                </motion.a>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      {/* ── STANDARDIZE PERFORMANCE ──────────────────────────────────────── */}
      <section className="py-24 bg-[#F2F4F8] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* LEFT: TEXT CONTENT */}
            <MotionWrapper
              variants={fadeLeft}
              className="flex-1 w-full text-left"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2.75rem] md:text-[3.5rem] font-extrabold text-[#111827] leading-[1.05] tracking-tight mb-14"
              >
                Standardize
                <br />
                performance across
                <br />
                every outlet
              </motion.h2>

              <MotionStagger className="flex flex-col gap-10">
                {/* Point 1 */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-6"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]"
                  >
                    1
                  </motion.div>

                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same prep logic everywhere
                    </h4>

                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Centralized recipes and kitchen prep timing updated
                      instantly.
                    </p>
                  </div>
                </motion.div>

                {/* Point 2 */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-6"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.08, rotate: -6 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]"
                  >
                    2
                  </motion.div>

                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same efficiency benchmarks
                    </h4>

                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Every manager held to the same AI-defined gold standards.
                    </p>
                  </div>
                </motion.div>

                {/* Point 3 */}
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-6"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.08, rotate: 6 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-center text-[#4F6EF7] font-bold text-[17px]"
                  >
                    3
                  </motion.div>

                  <div className="pt-2">
                    <h4 className="text-[19px] font-bold text-slate-900 mb-1 tracking-tight">
                      Same decision framework
                    </h4>

                    <p className="text-slate-500 text-[16px] leading-relaxed font-medium">
                      Consistent outcomes regardless of regional leadership
                      variance.
                    </p>
                  </div>
                </motion.div>
              </MotionStagger>
            </MotionWrapper>

            {/* RIGHT: UI WIDGETS */}
            <MotionWrapper
              variants={fadeRight}
              className="flex-1 w-full flex flex-col gap-6 max-w-[500px] lg:max-w-none"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Small Card 1 */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] p-7 h-full -mt-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex-1 w-full relative sm:top-6"
                >
                  <h5 className="text-[14px] font-extrabold text-slate-700 mb-4 tracking-tight">
                    Outlet Performance Variance
                  </h5>

                  <div className="h-[7px] w-full bg-[#EFF3FE] mb-3 overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#4F6EF7]"
                    />
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#4F6EF7] text-[12px] font-bold"
                  >
                    Reduced from 45% to 8%
                  </motion.p>
                </motion.div>

                {/* Small Card 2 */}
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] aspect-square flex flex-col items-center justify-center flex-1 w-full max-w-[240px]"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear",
                    }}
                  >
                    <Icon
                      icon="mdi:sync"
                      className="text-[#057A55] mb-2"
                      width={38}
                    />
                  </motion.div>

                  <p className="text-[11px] font-extrabold text-slate-800 tracking-widest uppercase mb-1 text-center">
                    NETWORK SYNC
                  </p>

                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[32px] font-extrabold text-slate-900 tracking-tight"
                  >
                    1.2s
                  </motion.p>
                </motion.div>
              </div>

              {/* Large Purple Card */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{ duration: 0.3 }}
                className="bg-linear-to-r from-[#5A68DF] to-[#7944DF] rounded-[3rem] p-10 shadow-xl text-white relative overflow-hidden"
              >
                {/* Animated Glow */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-3xl rounded-full"
                />

                <p className="text-[16px] font-bold mb-3 tracking-wide relative z-10">
                  Unified Brand Health Score
                </p>

                <div className="flex items-baseline gap-1 relative z-10">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[4rem] font-extrabold leading-none tracking-tight block"
                    >
                      94
                    </motion.span>
                  </motion.div>

                  <span className="text-white/80 text-[22px] font-medium">
                    /100
                  </span>
                </div>
              </motion.div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ── TOTAL CONTROL ──────────────────────────────────────────────── */}
      <section className="bg-[#2f3541] pt-24 pb-20 overflow-hidden relative">
        {/* Background Glow */}
        {/* <motion.div
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-linear-to-br from-indigo-200/30 via-blue-100/20 to-purple-200/20 blur-3xl rounded-full pointer-events-none"
        /> */}

        <div className="max-w-300 mx-auto px-6 relative z-10">
          {/* Header */}
          <MotionWrapper variants={fadeUp}>
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[2rem] md:text-[2.5rem] font-extrabold text-white tracking-tight leading-tight"
              >
                One platform. Total control across your entire brand.
              </motion.h2>
            </div>
          </MotionWrapper>

          {/* Stats */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {performanceStats.map((item, index) => (
              <MotionWrapper key={index} variants={fadeUp} delay={index * 0.1}>
                <motion.div
                  transition={{ duration: 0.3 }}
                  className="relative backdrop-blur-sm rounded-[2rem] px-8 py-12 overflow-hidden"
                >
                  {/* Animated Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <AnimatedCounter
                      to={item.to}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      duration={2}
                      className={`text-[4rem] md:text-[4.5rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-br ${item.text} mb-5`}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[13px] mt-2 font-bold tracking-[0.15em] text-white mb-4"
                  >
                    {item.title}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-slate-500 text-[14px] leading-relaxed max-w-[280px] mx-auto"
                  >
                    {item.desc}
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* ── THREE STEPS TO NETWORK DOMINANCE ───────────────────────────── */}
      <section className="w-full bg-[#F0F3FF] py-24 px-6 border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-[32px] md:text-[44px] font-black text-[#111827] mb-4 tracking-tight">
                Three steps to network dominance
              </h2>
            </MotionWrapper>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-2">
            {networkSteps.map((step, index) => (
              <MotionWrapper key={step.number} variants={fadeUp}>
                <div className="flex flex-col items-center text-center group">
                  {/* Icon */}
                  <div className="relative mb-6">
                    {/* Number Badge (pop) */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute -top-1 -right-1 z-10 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md border-2 border-slate-50"
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    >
                      <Icon
                        icon={step.icon}
                        width={36}
                        className={step.iconColor}
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </MotionStagger>
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
