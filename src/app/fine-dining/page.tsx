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
import AnimatedCounter from "@/components/motion/AnimatedCounter";

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

const stats = [
  {
    prefix: "-",
    to: 45,
    suffix: "%",
    label: "Ingredient Waste",
    color: "text-[#6FFBBE]",
  },
  {
    prefix: "+",
    to: 12,
    suffix: "%",
    label: "Margin Improvement",
    color: "text-[#B6C4FF]",
  },
  {
    prefix: "",
    to: 100,
    suffix: "%",
    label: "Operational Visibility",
    color: "text-[#D0BCFF]",
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
      <section className="bg-white px-4 py-24 overflow-hidden relative">
        {/* Ambient Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-0 w-[600px] h-[600px] bg-linear-to-br from-indigo-100/30 via-purple-100/20 to-blue-100/20 blur-3xl rounded-full pointer-events-none"
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
          {/* LEFT CONTENT */}
          <MotionWrapper variants={fadeLeft}>
            <div>
              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[36px] md:text-[46px] font-medium text-[#111827] leading-[1.15] mb-12 tracking-tight"
              >
                AI-driven precision <br className="hidden md:block" />
                commands for your <br className="hidden md:block" />
                kitchen
              </motion.h2>

              {/* Cards */}
              <MotionStagger className="space-y-5">
                {/* Item 1 */}
                <MotionWrapper variants={fadeUp}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-white"
                  >
                    {/* Animated Left Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 top-0 w-1.5 bg-[#3B6AF6]"
                    />

                    {/* Glow */}
                    <motion.div
                      animate={{
                        opacity: [0.2, 0.35, 0.2],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#3B6AF6]/10 blur-3xl rounded-full"
                    />

                    <div className="relative z-10">
                      <motion.p
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="text-[10px] font-bold text-[#3B6AF6] uppercase tracking-widest mb-1"
                      >
                        Chef Action
                      </motion.p>

                      <p className="text-[16px] font-bold text-[#111827]">
                        Reduce truffle prep by 8%
                      </p>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[14px] font-bold text-[#059669] relative z-10"
                    >
                      Save ₹4,200 tonight
                    </motion.p>
                  </motion.div>
                </MotionWrapper>

                {/* Item 2 */}
                <MotionWrapper variants={fadeUp} delay={0.1}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-white"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 top-0 w-1.5 bg-[#8B5CF6]"
                    />

                    <motion.div
                      animate={{
                        opacity: [0.2, 0.35, 0.2],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#8B5CF6]/10 blur-3xl rounded-full"
                    />

                    <div className="relative z-10">
                      <motion.p
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                        className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest mb-1"
                      >
                        AI Suggestion
                      </motion.p>

                      <p className="text-[16px] font-bold text-[#111827]">
                        Adjust service timing
                      </p>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[13px] font-medium text-[#6B7280] relative z-10"
                    >
                      Improve turnover
                    </motion.p>
                  </motion.div>
                </MotionWrapper>

                {/* Item 3 */}
                <MotionWrapper variants={fadeUp} delay={0.2}>
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-[#F0F3FF] rounded-full px-8 py-5 flex items-center justify-between overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.02)] border border-white"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.5 }}
                      className="absolute left-0 top-0 w-1.5 bg-[#059669]"
                    />

                    <motion.div
                      animate={{
                        opacity: [0.2, 0.35, 0.2],
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#059669]/10 blur-3xl rounded-full"
                    />

                    <div className="relative z-10">
                      <motion.p
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.8,
                        }}
                        className="text-[10px] font-bold text-[#059669] uppercase tracking-widest mb-1"
                      >
                        Tonight
                      </motion.p>

                      <p className="text-[16px] font-bold text-[#111827]">
                        Reallocate staff for peak
                      </p>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[13px] font-medium text-[#6B7280] relative z-10"
                    >
                      Reduce idle time
                    </motion.p>
                  </motion.div>
                </MotionWrapper>
              </MotionStagger>
            </div>
          </MotionWrapper>

          {/* RIGHT CONTENT (IMAGE CARD) */}
          <MotionWrapper variants={fadeRight}>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -6,
              }}
              transition={{ duration: 0.35 }}
              className="relative"
            >
              {/* Floating Glow */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-8 bg-linear-to-tr from-indigo-200/30 via-blue-100/20 to-purple-200/20 blur-3xl rounded-full"
              />

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-4/4.5 lg:aspect-[4/4.2] rounded-[48px] overflow-hidden "
              >
                <Image
                  src="/images/kitchen.png"
                  alt="Kitchen precision"
                  fill
                  className="object-cover object-center"
                />

                {/* Overlay Ring */}
                {/* <div className="absolute inset-0 rounded-[48px] ring-1 ring-inset ring-white/20 pointer-events-none" /> */}
              </motion.div>

              {/* Floating Status Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5  bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Live Optimization
                </p>

                <p className="text-[15px] font-bold text-[#111827]">
                  AI active across kitchens
                </p>
              </motion.div>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      <CTASection {...PRECISION_CTA} />

      {/* Stats Strip */}
      <section className="w-full bg-[#2C313A] py-16 px-4 overflow-hidden relative">
        {/* Background Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[700px] h-[300px] bg-linear-to-r from-emerald-400/10 via-indigo-400/10 to-purple-400/10 blur-3xl rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {stats.map((item, index) => (
              <MotionWrapper key={index} variants={fadeUp} delay={index * 0.1}>
                <motion.div className="relative rounded-[2rem] py-10 px-6 overflow-hidden">
                  {/* Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.45, 0.2],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index,
                    }}
                    className="absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full"
                  />

                  {/* Animated Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                  >
                    <AnimatedCounter
                      to={item.to}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      duration={2}
                      className={`text-[32px] md:text-[44px] tracking-tight font-extrabold leading-none mb-3 relative z-10 ${item.color}`}
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-white text-[10px] md:text-[12px] font-bold tracking-widest uppercase relative z-10"
                  >
                    {item.label}
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="w-full bg-[#0A0D14] py-24 px-4 overflow-hidden relative">
        {/* Background Ambient Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-linear-to-r from-[#3B6AF6]/10 via-[#8B5CF6]/10 to-cyan-400/10 blur-3xl rounded-full pointer-events-none"
        />

        <div className="max-w-6xl mx-auto flex flex-col relative z-10">
          {/* Header Row */}
          <MotionStagger className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            {/* LEFT CONTENT */}
            <MotionWrapper variants={fadeLeft}>
              <div className="max-w-2xl">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[40px] md:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight"
                >
                  A command view of <br className="hidden md:block" /> your
                  entire kitchen
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-6 text-[17px] text-[#8693A4] leading-relaxed max-w-lg"
                >
                  Real-time oversight over margins, prep vs demand, and granular
                  service insights.
                </motion.p>
              </div>
            </MotionWrapper>

            {/* RIGHT ICON */}
            <MotionWrapper variants={fadeRight}>
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 6,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 0.3,
                  },
                }}
                className="relative flex items-center justify-center p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(59,106,246,0.12)]"
              >
                {/* Glow */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.45, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#3B6AF6]/20 blur-2xl rounded-3xl"
                />

                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#3B6AF6] relative z-10"
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
              </motion.div>
            </MotionWrapper>
          </MotionStagger>

          {/* Image Container */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{
                scale: 1.015,
                y: -6,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="relative w-full aspect-4/2 md:aspect-[2.3/1] z-10"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-6 bg-linear-to-r from-[#3B6AF6]/20 via-[#8B5CF6]/15 to-cyan-400/15 blur-3xl rounded-[3rem]"
              />

              {/* Floating Dashboard */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] bg-[#111827]"
              >
                <Image
                  src="/images/entire-kitchen.png"
                  alt="Orkeneo Dashboard Preview"
                  fill
                  className="object-contain"
                  priority
                />

                {/* Glass Overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-white/10 pointer-events-none" />
              </motion.div>

              {/* Floating Live Badge */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 left-6 bg-[#111827] border border-white/10 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8693A4]">
                      Live Intelligence
                    </p>

                    <p className="text-white text-[14px] font-bold">
                      AI tracking all kitchen activity
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      <ReusableCarousel
        data={testimonials}
        bgColor="#F5F6FA"
        textSize="text-xl md:text-4xl"
      />

      {/* How it Works Section */}
      <section className="w-full bg-white py-24 px-6 border-t border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <MotionStagger className="grid md:grid-cols-3 gap-12 px-2">
            {/* Step 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center text-center"
              >
                {/* Animated Number Circle */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 8,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 0.3,
                    },
                  }}
                  className="relative w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6"
                >
                  {/* Pulse Glow */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-[#2563EB]/20"
                  />

                  <span className="relative z-10">1</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-[#111827] mb-3"
                >
                  Connect system
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]"
                >
                  Seamlessly integrate with your existing POS and inventory.
                </motion.p>
              </motion.div>
            </MotionWrapper>

            {/* Step 2 */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.08,
                    rotate: -8,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    },
                    rotate: {
                      duration: 0.3,
                    },
                  }}
                  className="relative w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 rounded-full bg-[#2563EB]/20"
                  />

                  <span className="relative z-10">2</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-[#111827] mb-3"
                >
                  AI Analyzes
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]"
                >
                  Our engine scans millions of data points to find leakages.
                </motion.p>
              </motion.div>
            </MotionWrapper>

            {/* Step 3 */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 8,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    },
                    rotate: {
                      duration: 0.3,
                    },
                  }}
                  className="relative w-14 h-14 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#2563EB] font-bold text-xl mb-6"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute inset-0 rounded-full bg-[#2563EB]/20"
                  />

                  <span className="relative z-10">3</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-[#111827] mb-3"
                >
                  Get daily commands
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-[#6B7280] text-[15px] leading-relaxed max-w-[280px]"
                >
                  Actionable, precision instructions delivered before service.
                </motion.p>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
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
