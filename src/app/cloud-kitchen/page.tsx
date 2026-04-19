"use client";

import CTASection from "@/components/CTASection";
import MotionCard from "@/components/motion/MotionCard";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import { motion } from "framer-motion";
import StackLogos from "@/components/StackLogos";
import { fadeRight, fadeUp, scaleIn } from "@/lib/animations/variants";
import { Scissors, Users, TrendingDown } from "lucide-react";

import {
  Trash2,
  Package,
  Zap,
  ClipboardCheck,
  UserPlus,
  Megaphone,
} from "lucide-react";
import {
  Check,
  ArrowRight,
  TrendingUp,
  ArrowDownRight,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

function cloudkitchen() {
  const killers = [
    {
      icon: Trash2,
      title: "Over-prepping",
      description:
        "Daily waste at the end of shifts accounts for nearly 12% of total ingredient costs.",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
    },
    {
      icon: Package,
      title: "Stock-outs",
      description:
        "Missing ingredients during peak hours lead to canceled orders and lost lifetime customers.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Peak Chaos",
      description:
        "Mismatched staffing during surges causes high wait times and poor platform ratings.",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
  ];

  const planItems = [
    {
      icon: ClipboardCheck,
      title: "Prep +8kg Paneer",
      description: "Demand surge expected for North Indian Main course",
      value: "+₹2,400",
      iconColor: "text-teal-700",
      iconBg: "bg-teal-100",
    },
    {
      icon: UserPlus,
      title: "Add 1 Delivery Prep Staff",
      description: "Expected 45 orders/hr between 7:30 - 8:30 PM",
      value: "+₹3,100",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      icon: Megaphone,
      title: "Promote 'Family Combo'",
      description: "High inventory on soda; boost average order value",
      value: "+₹1,000",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
  ];

  const stats = [
    {
      value: "50%",
      title: "Waste Reduction",
      desc: "Average savings on kitchen bi-products and spoilage.",
      color: "text-emerald-400",
    },
    {
      value: "+18%",
      title: "Revenue Uplift",
      desc: "Through predictive stocking and peak management.",
      color: "text-blue-300",
    },
    {
      value: "-20%",
      title: "Labor Cost",
      desc: "Dynamic staffing models optimized for actual demand.",
      color: "text-purple-300",
    },
  ];

  return (
    <>
      <section className="w-full mt-24 bg-[#F4F6FB] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                LIVE OPTIMIZATION ACTIVE
              </div>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-gray-900">
                You're losing <br />
                <span className="text-blue-600">₹30,000/month</span> in
                <br />
                your cloud kitchen
              </h1>
            </MotionWrapper>

            {/* Subtext */}
            <MotionWrapper variants={fadeUp} delay={0.3}>
              <p className="mt-6 text-gray-500 text-lg max-w-xl leading-relaxed">
                Over-prepping, stock-outs, and peak chaos are eating your
                margins — Orkeneo fixes it automatically.
              </p>
            </MotionWrapper>

            {/* Buttons */}
            <MotionWrapper
              variants={fadeUp}
              delay={0.4}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-[1.03] active:scale-[0.97]">
                Stop Losing ₹30K/month
              </button>

              <button className="bg-white border text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-[1.03] active:scale-[0.97]">
                See My AI Plan
              </button>
            </MotionWrapper>
          </div>

          {/* RIGHT SIDE CARDS */}
          <MotionStagger className="relative flex flex-col gap-6">
            {/* CARD 1 */}
            <MotionCard
              index={0}
              className="bg-white rounded-2xl rotate-2 p-5 
              shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
              flex items-center justify-between transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Scissors className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Prep +12kg chicken before 7PM
                  </p>
                  <p className="text-sm text-gray-500">
                    Demand spike predicted: 92% confidence
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                Actionable
              </span>
            </MotionCard>

            {/* CARD 2 */}
            <MotionCard
              index={1}
              className="bg-white rounded-2xl mt-5 -rotate-1 p-5 
              shadow-[0_14px_40px_rgba(0,0,0,0.12)] 
              flex items-center justify-between ml-6 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Users className="text-purple-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Add 2 staff → avoid ₹15K loss
                  </p>
                  <p className="text-sm text-gray-500">
                    Preventing order cancellations at 8PM
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                Live AI
              </span>
            </MotionCard>

            {/* CARD 3 */}
            <MotionCard
              index={2}
              className="bg-white rounded-2xl rotate-3 mt-5 p-5 
              shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
              flex items-center justify-between transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <TrendingDown className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Reduce prep after 3PM → save ₹8K
                  </p>
                  <p className="text-sm text-gray-500">
                    Estimated 15% reduction in food waste
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Priority
              </span>
            </MotionCard>
          </MotionStagger>
        </div>
      </section>

      <StackLogos />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                The Silent Margin Killers
              </h2>
            </MotionWrapper>

            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Why 65% of cloud kitchens struggle to break even.
              </p>
            </MotionWrapper>
          </div>

          {/* Cards Grid */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {killers.map((killer, index) => (
              <MotionCard key={index} index={index}>
                <div
                  className="bg-[#F0F3FF] rounded-2xl p-8 h-full 
          border border-transparent hover:border-slate-200
          transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 ${killer.iconBg} rounded-xl flex items-center justify-center mb-6 
              transition-transform duration-300 group-hover:scale-110`}
                  >
                    <killer.icon className={`w-7 h-7 ${killer.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-semibold text-slate-900 mb-3 
            group-hover:text-indigo-600 transition-colors duration-300"
                  >
                    {killer.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {killer.description}
                  </p>
                </div>
              </MotionCard>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="bg-[#F0F3FF] py-20 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Badge */}
            <MotionWrapper variants={fadeUp}>
              <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                For Cloud Kitchens
              </span>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Turn your kitchen data into daily profit decisions
              </h2>
            </MotionWrapper>

            {/* Description */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <p className="text-lg text-slate-600 max-w-md">
                Orkeneo analyzes your orders, demand trends, and prep patterns
                to tell you exactly what to prepare — every single day.
              </p>
            </MotionWrapper>

            {/* List */}
            <MotionStagger className="space-y-4">
              {[
                "Predict demand with up to 94% accuracy",
                "Reduce daily food waste and stock-outs",
                "Increase margins without increasing effort",
              ].map((item, index) => (
                <MotionWrapper key={index} variants={fadeUp}>
                  <li className="flex items-start gap-3 list-none">
                    <div className="mt-1 p-1 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                </MotionWrapper>
              ))}
            </MotionStagger>

            {/* Button */}
            <MotionWrapper variants={fadeUp} delay={0.3}>
              <button className="inline-flex items-center gap-2 bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-700/20 hover:bg-blue-800 hover:scale-[1.03] active:scale-[0.97]">
                See Today's Prep Plan
                <ChevronRight className="w-5 h-5" />
              </button>
            </MotionWrapper>
          </div>

          {/* Right Side */}
          <MotionWrapper variants={fadeRight} delay={0.2}>
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Image with subtle float */}
              <motion.div
                animate={floatAnimation}
                transition={floatTransition}
                className="relative z-10 w-full max-w-3xl lg:max-w-4xl"
              >
                <Image
                  src="/avatar/Background+Border.png"
                  width={1100}
                  height={1100}
                  alt="Dashboard Preview"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Background blobs */}
              <div className="absolute top-0 right-0 w-125 h-125 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
              <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-4 flex flex-col items-center justify-center min-h-screen">
        {/* Header Section */}
        <div className="text-center mb-6">
          <MotionWrapper variants={fadeUp}>
            <h4 className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-3">
              The Daily Blueprint
            </h4>
          </MotionWrapper>
          <MotionWrapper variants={fadeUp} delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Your AI Plan for 7:00 PM Tonight
            </h2>
          </MotionWrapper>
          <MotionWrapper variants={fadeUp} delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-purple-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-sm">
              <span>✨ HIGH CONFIDENCE (98%)</span>
            </div>
          </MotionWrapper>
        </div>

        {/* Main Card */}
        <MotionWrapper
          variants={fadeUp}
          delay={0.3}
          className="w-full max-w-3xl relative"
        >
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-10 w-full relative overflow-hidden">
            {/* List Items */}
            <MotionStagger className="space-y-6">
              {planItems.map((item, index) => (
                <MotionWrapper variants={fadeUp} key={index}>
                  <div className="flex items-start md:items-center justify-between gap-4 pb-6 space-y-5 border-b border-slate-100 last:border-0 last:pb-0 transition-colors hover:bg-slate-50 group -mx-4 px-4 rounded-xl">
                    {/* Left Side: Icon & Text */}
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`p-3 rounded-full ${item.iconBg} shrink-0 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Value */}
                    <div className="shrink-0 text-right">
                      <span className="text-[#006947] font-extrabold text-lg">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </MotionStagger>

            {/* Footer Section */}
            <MotionWrapper variants={fadeUp} delay={0.5}>
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Total Shift Impact
                  </p>
                  <p className="text-lg font-bold text-[#006947]">
                    Expected impact: <span className="text-2xl">+₹6,500</span>{" "}
                    revenue
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg whitespace-nowrap cursor-pointer"
                >
                  Apply All
                </motion.button>
              </div>
            </MotionWrapper>
          </div>
        </MotionWrapper>
      </section>

      <section className="w-full bg-[#2F3541] py-20 px-6">
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
              <p className="mt-4 text-white text-lg font-semibold">
                {item.title}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-2 text-gray-400 text-sm max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Stop losing money every day"
        subtitle="Use Orkeneo to protect their margins and automate growth."
        primaryText="Get My AI Plan"
        secondaryText="Calculate My Savings"
        bgColor="bg-gradient-to-r from-blue-600 to-blue-500"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </>
  );
}

export default cloudkitchen;
