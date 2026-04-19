"use client";

import ComparisonSection from "@/components/ComparisonSection";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import { fadeUp, scaleIn, fadeRight } from "@/lib/animations/variants";
import {
  Zap,
  CheckCircle2,
  TrendingDown,
  UserPlus,
  AlertTriangle,
  GitCompareArrows,
  ListChecks,
  BrainCircuit,
  Rocket,
  CreditCard,
} from "lucide-react";
import { BarChart3, Package, Users } from "lucide-react";
import Image from "next/image";
import MotionCard from "@/components/motion/MotionCard";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";

const transformationComparison = {
  withoutTitle: "Before Orkeneo",
  withTitle: "After Orkeneo",
  recommended: false,

  withoutFeatures: [
    {
      title: "Guess-based decisions",
      description:
        "No real data — decisions rely on intuition and past habits.",
    },
    {
      title: "Outlet-to-outlet inconsistency",
      description:
        "Different locations operate differently, causing uneven performance.",
    },
    {
      title: "Hidden profit leakage",
      description:
        "Losses go unnoticed across staffing, inventory, and operations.",
    },
  ],

  withFeatures: [
    {
      title: "Predictive daily planning",
      description:
        "AI forecasts demand and guides every decision with precision.",
    },
    {
      title: "Standardized operations",
      description:
        "Consistent processes across all outlets for reliable performance.",
    },
    {
      title: "Daily profit recovery",
      description:
        "Identify and recover lost revenue every single day automatically.",
    },
  ],
};

const actions = [
  {
    id: 1,
    type: "critical",
    outlet: "OUTLET B - AIRPORT",
    badge: "CRITICAL",
    time: "2 mins ago",
    title: "Increase staff at Outlet B",
    description:
      "Wait times exceeding 15 minutes. Estimated revenue loss: ₹4,200/hr.",
    action: "Execute",
    icon: UserPlus,
    color: "red",
  },
  {
    id: 2,
    type: "opportunity",
    outlet: "OUTLET C - TECH PARK",
    badge: "OPPORTUNITY",
    time: "5 mins ago",
    title: "Reduce prep at Outlet C",
    description:
      "Low footfall predicted for next 4 hours. Save ₹2,500 in potential waste.",
    action: "Execute",
    icon: Package,
    color: "purple",
  },
  {
    id: 3,
    type: "global",
    outlet: "GLOBAL ACTION",
    badge: "OPTIMIZED",
    time: "Live",
    title: "Standardized Prep Protocols Active",
    description:
      "All outlets are now operating under predictive prep guidelines. Saving ₹45K daily.",
    action: "Auto-Applied",
    isAuto: true,
    icon: CheckCircle2,
    color: "green",
  },
];

const colorClasses = {
  red: {
    border: "border-l-red-500",
    bar: "bg-red-500",
    badge: "bg-red-100 text-red-700",
    iconBg: "bg-red-50 text-red-600",
    icon: "text-red-600",
  },
  purple: {
    border: "border-l-purple-500",
    bar: "bg-purple-500",
    badge: "bg-purple-100 text-purple-700",
    iconBg: "bg-purple-50 text-purple-600",
    icon: "text-purple-600",
  },
  green: {
    border: "border-l-green-600",
    bar: "bg-green-600",
    badge: "bg-green-100 text-green-800",
    iconBg: "bg-green-50 text-green-700",
    icon: "text-green-700",
  },
};

export default function MultiLocationSection() {
  const items = [
    {
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      bg: "bg-red-100",
      title: "Same dish → 32% margin difference",
      desc: "Lack of standardization means you're losing profit on your best sellers every single day across locations.",
    },
    {
      icon: <Package className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-100",
      title: "Over-prep → ₹18,500 weekly waste",
      desc: "Inaccurate demand forecasting leads to ingredient spoilage and pure financial leakage at individual outlets.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-100",
      title: "Staff inefficiency → +22% labor cost",
      desc: "Inefficient roster management across outlets increases your labor costs per transaction unnecessarily.",
    },
  ];

  const features = [
    {
      icon: AlertTriangle,
      title: "Detect anomalies instantly",
      description:
        "Instant alerts for unusual stock depletion or sudden service speed drops across any location.",
    },
    {
      icon: GitCompareArrows,
      title: "Compare performance",
      description:
        "Benchmark performance across locations to find and replicate success factors automatically.",
    },
    {
      icon: ListChecks,
      title: "Standardize decisions",
      description:
        "Push consistent operational updates and AI-optimized plans to all outlet managers with one click.",
    },
  ];

  const steps = [
    {
      number: 1,
      icon: CreditCard,
      title: "Connect your POS",
      description:
        "Secure, 5-minute integration with your existing POS (Petpooja, zoho, Gofrugal etc.)",
    },
    {
      number: 2,
      icon: BrainCircuit,
      title: "AI analyzes your outlets",
      description:
        "Our engine scans 24 months of history and live data to find hidden inefficiencies and profit leaks.",
    },
    {
      number: 3,
      icon: Rocket,
      title: "Get daily profit decisions",
      description:
        "Receive high-impact prep and roster actions on your dashboard every morning to recover margins.",
    },
  ];

  const stats = [
    {
      value: "+18%",
      title: "margin increase",
      desc: "Standardized profitability regardless of outlet manager experience levels.",
      color: "text-blue-600",
    },
    {
      value: "₹4.5L",
      title: "monthly savings",
      desc: "Direct profit recovery through reduced waste and optimized labor spend.",
      color: "text-emerald-600",
    },
    {
      value: "3x",
      title: "faster decisions",
      desc: "Move from monthly retrospectives to daily proactive optimizations with AI.",
      color: "text-purple-600",
    },
  ];

  const tags = [
    "No setup cost",
    "No POS change required",
    "See results in 7 days",
  ];

  return (
    <>
      <section className="bg-slate-50 mt-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <MotionWrapper variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5" />
                MULTI-LOCATION INTELLIGENCE
              </div>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                You're losing <span className="text-blue-600">₹2–5L/month</span>{" "}
                across your outlets
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.2}>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                Orkeneo identifies, fixes, and recovers lost profit daily using
                AI-driven decisions across all your locations
              </p>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-[1.02]">
                  Get My Profit Audit
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-800 font-semibold py-4 px-8 rounded-full border border-slate-200 transition-all duration-200 hover:border-slate-300">
                  View Demo
                </button>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE */}
          <MotionWrapper variants={fadeRight} delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white rounded-4xl shadow-2xl border border-slate-100 p-6 md:p-8 w-full max-w-lg relative"
              >
                {/* Banner */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="absolute top-2 -right-1/4 -translate-x-1/2 bg-[#6FFBBE] text-emerald-800 px-4 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap shadow-sm border border-emerald-200/50"
                >
                  AI recommendation: Reduce prep at Outlet A
                </motion.div>

                {/* Header */}
                <div className="flex items-center mt-3 justify-between mb-8 pt-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Cross-Outlet Efficiency
                  </h3>
                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#006947]"></span>
                  </div>
                </div>

                {/* Bars */}
                <MotionStagger className="space-y-6">
                  {/* Outlet A */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        OUTLET A (INEFFICIENT)
                      </span>
                      <span className="text-xs font-bold text-[#BA1A1A]">
                        Losing ₹42,000/week
                      </span>
                    </div>

                    <div className="w-full bg-red-100 rounded-full h-5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-[#BA1A1A] h-full rounded-full"
                      />

                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-[10px] font-bold text-white drop-shadow-sm">
                          WASTE: 18%
                        </span>
                      </div>

                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500">
                        <TrendingDown size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Outlet B */}
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        OUTLET B (EFFICIENT)
                      </span>
                      <span className="text-xs font-bold text-[#006947]">
                        Optimized Profit
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-5 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="bg-[#006947] h-full rounded-full"
                      />

                      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-[10px] font-bold text-white drop-shadow-sm">
                          WASTE: 2.1%
                        </span>
                      </div>

                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#006947]">
                        <CheckCircle2 size={14} />
                      </div>
                    </div>
                  </div>
                </MotionStagger>

                {/* Bottom stats */}
                <MotionWrapper variants={fadeUp} delay={0.6}>
                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
                    <div className="bg-[#F0F3FF] rounded-xl p-4">
                      <p className="text-xs text-slate-500 font-medium mb-1">
                        DETECTION
                      </p>
                      <p className="text-lg font-bold text-[#BA1A1A] leading-tight">
                        Variance Found
                      </p>
                    </div>
                    <div className="bg-[#F0F3FF] rounded-xl p-4">
                      <p className="text-xs text-slate-500 font-medium mb-1">
                        PROFIT RECOVERY
                      </p>
                      <p className="text-lg font-bold text-[#006947] leading-tight">
                        +₹55k Potential
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="w-full bg-[#F0F3FF] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* HEADING */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto">
              Your outlets are operating differently — and it's silently killing
              your margins
            </h2>
          </MotionWrapper>

          {/* CARDS */}
          <MotionStagger className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <MotionCard key={index} index={index}>
                <div
                  className="
              bg-white
              rounded-3xl
              flex flex-col items-center justify-center
              p-8
              text-left
              shadow-sm
              hover:shadow-md
              transition
            "
                >
                  {/* ICON */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-lg font-extrabold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-3 text-center text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </MotionCard>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <MotionWrapper variants={fadeUp}>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-[1.1]">
                  What your AI is fixing — right now
                </h2>
              </MotionWrapper>

              <MotionWrapper variants={fadeUp} delay={0.1}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Orkeneo monitors every transaction and ingredient across all
                  sites to push high-impact actions.{" "}
                  <span className="text-blue-600 font-semibold">
                    Impact: +₹6,200 today
                  </span>
                </p>
              </MotionWrapper>
            </div>

            <MotionWrapper variants={fadeUp} delay={0.2}>
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-bold border border-purple-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                  </span>
                  LIVE MONITORING
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Action Cards */}
          <MotionStagger className="space-y-4">
            {actions.map((item, index) => {
              const theme =
                colorClasses[item.color as keyof typeof colorClasses];
              const Icon = item.icon;

              return (
                <MotionWrapper key={item.id} variants={fadeRight}>
                  <div
                    className={`bg-[#F0F3FF] rounded-4xl p-5 md:p-6 shadow-sm border border-slate-100 
                    flex flex-col sm:flex-row sm:items-center justify-between gap-4 
                    relative overflow-hidden transition-all hover:shadow-md`}
                  >
                    {/* LEFT BORDER */}
                    <div
                      className={`absolute top-0 left-0 w-1.5 h-full ${theme.bar} rounded-l-4xl`}
                    />

                    {/* Content */}
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`p-3 rounded-xl ${theme.iconBg} shrink-0 mt-1`}
                      >
                        <Icon className={`w-5 h-5 ${theme.icon}`} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                            {item.outlet}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${theme.badge}`}
                          >
                            {item.badge}
                          </span>
                          <span className="text-xs text-slate-400">
                            • {item.time}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="shrink-0 self-end sm:self-center pl-14 sm:pl-0">
                      {item.isAuto ? (
                        <div className="flex items-center gap-2 text-[#166534] font-semibold text-sm">
                          <span className="text-[14px] tracking-[-2px]">
                            ✔✔
                          </span>
                          Auto-Applied
                        </div>
                      ) : (
                        <button className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-5 py-2.5 rounded-full border border-slate-200 transition-all hover:border-slate-300 shadow-sm hover:scale-[1.03] active:scale-[0.97]">
                          Execute
                        </button>
                      )}
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </MotionStagger>
        </div>
      </section>

      <section className="w-full py-20 px-6 bg-[#F5F6FA]">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-extrabold text-black text-center mb-10">
              The Orkeneo Transformation
            </h2>
          </MotionWrapper>

          {/* REUSABLE COMPONENT */}
          <ComparisonSection {...transformationComparison} />
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <MotionWrapper variants={fadeUp}>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                Your AI plan to recover lost profit — today
              </h1>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto md:mx-0">
                AI-generated based on live demand + outlet data. One dashboard
                for every margin move.
              </p>
            </MotionWrapper>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 🔵 MAIN CARD */}
            <MotionWrapper variants={scaleIn}>
              <div className="col-span-1 md:col-span-1 bg-blue-600 rounded-2xl p-6 relative overflow-hidden shadow-lg shadow-blue-900/50 flex flex-col justify-between min-h-55">
                {/* Glow pulse */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"
                />

                <div>
                  <h3 className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">
                    Profit Optimization Engine
                  </h3>

                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-5xl font-extrabold">₹55,000</span>
                  </div>

                  <p className="text-blue-100 text-sm mt-1 font-medium">
                    recoverable today
                  </p>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-full bg-blue-900/50 h-1.5 rounded-full overflow-hidden mr-4">
                      {/*  Animated bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-green-400 h-full rounded-full"
                      />
                    </div>

                    <span className="text-xs font-semibold text-blue-100 whitespace-nowrap">
                      Efficiency Target: 92%
                    </span>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* ⚡ OTHER CARDS */}
            <MotionStagger className="contents">
              {/* Card 2 */}
              <MotionWrapper variants={fadeUp}>
                <div className="col-span-1 bg-slate-800 rounded-2xl p-6 flex flex-col justify-between border border-slate-700/50 transition-all hover:shadow-lg hover:shadow-black/20">
                  <div>
                    <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      Outlet A
                    </h3>
                    <h4 className="text-xl font-bold mb-1">Reduce prep</h4>
                    <p className="text-green-400 font-extrabold text-lg">
                      save ₹12K
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-slate-400 text-xs font-medium">
                      Inventory Drain
                    </span>
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  </div>
                </div>
              </MotionWrapper>

              {/* Card 3 */}
              <MotionWrapper variants={fadeUp}>
                <div className="col-span-1 bg-slate-800 rounded-2xl p-6 flex flex-col justify-between border border-slate-700/50 transition-all hover:shadow-lg hover:shadow-black/20">
                  <div>
                    <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      Outlet B
                    </h3>
                    <h4 className="text-xl font-bold mb-1">Add staff</h4>
                    <p className="text-green-400 font-extrabold text-lg">
                      gain ₹18K
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                    <span className="text-slate-400 text-xs font-medium">
                      Turnover Speed
                    </span>
                    <UserPlus className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              </MotionWrapper>
            </MotionStagger>
          </div>
        </div>
      </section>

      <section className=" py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* LEFT IMAGE */}
          <MotionWrapper variants={fadeRight}>
            <div className="relative order-2 lg:order-1 flex justify-center items-center">
              <div className="relative w-full max-w-170 lg:max-w-none">
                {/*  floating effect */}
                <motion.div
                  animate={floatAnimation}
                  transition={floatTransition}
                >
                  <Image
                    src="/avatar/Container.png"
                    alt="Command Center Live View"
                    width={1400}
                    height={1400}
                    className="w-full h-auto rounded-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-4 lg:mb-6">
                  Control every outlet without being there
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                  Stop guessing and start leading. Orkeneo provides the
                  infrastructure to run a 50-unit chain as efficiently as a
                  single kitchen.
                </p>
              </div>
            </MotionWrapper>

            {/* Features */}
            <MotionStagger className="space-y-6 lg:space-y-8">
              {features.map((item, index) => (
                <MotionWrapper key={index} variants={fadeUp}>
                  <div className="flex items-start gap-4 lg:gap-5 group">
                    {/* Icon */}
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F3FF] py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                How to plug your profit leaks
              </h2>
            </MotionWrapper>

            {/* Tags */}
            <MotionStagger className="flex flex-wrap justify-center gap-3">
              {tags.map((tag, index) => (
                <MotionWrapper key={index} variants={scaleIn}>
                  <div className="flex items-center gap-2 bg-white border border-slate-100 px-4 py-2 rounded-full shadow-sm text-slate-700 text-sm font-medium transition-transform duration-300 hover:scale-105">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    {tag}
                  </div>
                </MotionWrapper>
              ))}
            </MotionStagger>
          </div>

          {/* Steps */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
            {steps.map((step, index) => (
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
                      className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300"
                    >
                      <step.icon size={36} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="w-full bg-[#2C313A] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* VALUE */}
              <h2
                className={`text-5xl md:text-6xl font-extrabold ${item.color}`}
              >
                {item.value}
              </h2>

              {/* TITLE */}
              <p className="mt-4 text-lg text-white font-semibold capitalize">
                {item.title}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-2 text-sm text-gray-500 max-w-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Stop losing ₹2–5L/month — start recovering profit daily"
        subtitle="Join the next generation of QSR giants using AI to protect every rupee of margin. Start your audit today."
        primaryText="Get My Profit Audit"
        bgColor="bg-gradient-to-r from-blue-600 to-blue-500"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </>
  );
}
