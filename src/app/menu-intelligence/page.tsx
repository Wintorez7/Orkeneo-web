"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { fadeUp, fadeIn, scaleIn, fadeRight } from "@/lib/animations/variants";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { motion } from "framer-motion";
import MotionStagger from "@/components/motion/MotionStagger";
import CTASection from "@/components/CTASection";
import ComparisonSection from "@/components/ComparisonSection";
import ReusableCarousel from "@/components/ReusableCarousel";

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

const comparisonData = {
  withoutTitle: "Without Orkeneo",
  withTitle: "With Orkeneo",

  withoutFeatures: [
    {
      title: "Low-performing dishes",
      description: "₹10,000 loss every month",
    },
    {
      title: "Overstocking",
      description: "₹8,000 in wasted ingredients",
    },
    {
      title: "No demand visibility",
      description: 'Operating on "gut feel" only',
    },
  ],

  withFeatures: [
    {
      title: "Promote high-demand items",
      description: "Maximized daily sales volume",
    },
    {
      title: "Reduce dead inventory",
      description: "Lean kitchen operation, zero waste",
    },
    {
      title: "+₹25,000/month recovered",
      description: "Guaranteed revenue uplift from AI insights",
    },
  ],

  rightImage: "/avatar/spaceship.png",
};

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

const withoutFeatures: FeatureItem[] = [
  {
    title: "Low-performing dishes",
    description: "₹10,000 loss every month",
    icon: "/avatar/low-perfroming.png",
  },
  {
    title: "Overstocking",
    description: "₹8,000 in wasted ingredients",
    icon: "/avatar/overstock-ingredients.png",
  },
  {
    title: "No demand visibility",
    description: 'Operating on "gut feel" only',
    icon: "/avatar/miss-trend.png",
  },
];

const stats = [
  {
    value: "+15%",
    label: "Increase in revenue",
  },
  {
    value: "+20%",
    label: "Menu performance",
  },
  {
    value: "Instant",
    label: "Decision making",
  },
];

const logos = ["Zoho POS", "GoFrugal", "Vyapar", "Petpooja"];

const steps = [
  {
    id: 1,
    title: "Analyze",
    desc: "We securely connect to your POS and analyze past sales and customer behavior patterns.",
  },
  {
    id: 2,
    title: "Predict",
    desc: "Our AI engines predict demand for every single menu item based on day, time, and external factors.",
  },
  {
    id: 3,
    title: "Recommend",
    desc: "Get precise daily recommendations on what to promote, remove, or optimize for maximum profit.",
  },
];

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  );

  return (
    <>
      <section className="w-full bg-[#F5F6FA] py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <MotionStagger className="mt-20">
            {/* Tag */}
            <MotionWrapper variants={fadeUp}>
              <motion.div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full mb-6">
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-600 rounded-full"
                />
                PREDICTIVE INTELLIGENCE ACTIVE
              </motion.div>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                You're losing <br />
                <span className="text-[#2F5BFF]">₹25,000</span>
                <span className="text-gray-900">/month</span> <br />
                from poor menu <br />
                decisions
              </h1>
            </MotionWrapper>

            {/* Subtext */}
            <MotionWrapper variants={fadeUp}>
              <p className="mt-6 text-gray-600 text-lg max-w-xl">
                From low-performing dishes and missed demand trends. Orkeneo
                tells you what will sell — today.
              </p>
            </MotionWrapper>

            {/* Alert Box */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mt-6 bg-red-50 border-l-4 border-red-500 text-red-600 px-5 py-3 rounded-xl max-w-md text-sm font-medium"
              >
                ₹25,000/month = ₹800+ lost every day
              </motion.div>
            </MotionWrapper>

            {/* Buttons */}
            <MotionWrapper variants={fadeUp}>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#2F5BFF] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
                >
                  Get My Menu Insights
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                  See What Will Sell Today
                </motion.button>
              </div>
            </MotionWrapper>

            {/* Users */}
            <MotionWrapper variants={fadeUp}>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JD", "AK", "RS"].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-8 h-8 flex items-center justify-center bg-gray-300 text-xs font-semibold rounded-full border-2 border-white"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </MotionStagger>

          {/* RIGHT IMAGE */}
          <MotionWrapper variants={fadeRight}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* subtle float animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Image
                    src="/avatar/Background+Border+Shadow.png"
                    alt="Predictive Forecast"
                    width={400}
                    height={700}
                    className="w-full h-[60vh]"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="w-full py-16 relative overflow-hidden bg-linear-to-br bg-[#F0F3FF]">
        {/* Glow effect (subtle breathing animation) */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full pointer-events-none bg-indigo-200 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <MotionStagger>
            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <p className="text-[11px] tracking-[0.25em] uppercase text-indigo-500 font-semibold mb-10">
                Works with your existing stack
              </p>
            </MotionWrapper>

            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {logos.map((logo, index) => (
                <MotionWrapper key={index} variants={scaleIn}>
                  <motion.span
                    whileHover={{ y: -4, scale: 1.08 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`text-lg md:text-xl font-semibold transition duration-200 ${
                      logo === "Petpooja" ? "text-[#EA580C]" : "text-gray-500"
                    }`}
                  >
                    {logo}
                  </motion.span>
                </MotionWrapper>
              ))}
            </div>
          </MotionStagger>
        </div>
      </section>

      <section className="min-h-[80vh] bg-[#F8F9FC] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <MotionStagger>
            <div className="mb-14 mt-5 w-full flex justify-center items-center flex-col text-center">
              <MotionWrapper variants={fadeUp}>
                <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  The hidden cost of poor menu planning
                </h1>
              </MotionWrapper>

              <MotionWrapper variants={fadeUp}>
                <p className="text-lg sm:text-xl text-[#434655] mt-6 max-w-2xl">
                  Every day your menu isn't optimized, you're leaving money on
                  the table through three critical leakage points.
                </p>
              </MotionWrapper>
            </div>
          </MotionStagger>

          {/* Cards Grid */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {withoutFeatures.map((item, index) => (
              <MotionWrapper key={index} variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 
            shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] 
            transition-all duration-300 group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 flex items-center justify-center mb-6"
                  >
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={62}
                        height={62}
                        className="object-contain"
                      />
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Cost (highlight animation) */}
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-red-600 font-bold text-lg"
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        {/* Main Container */}
        <div className="bg-[#f0f3ff] rounded-[40px] shadow-sm p-10 lg:p-14 w-full max-w-7xl relative overflow-hidden">
          {/* Header Section */}
          <MotionWrapper variants={fadeUp}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
                  Today's Menu
                  <br className="hidden md:inline" /> Insights
                </h2>

                <p className="text-lg text-gray-500 font-medium">
                  Based on your sales data & demand patterns
                </p>
              </div>

              {/* Profit Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#059669] text-white px-8 py-5 rounded-[28px] shadow-lg flex flex-col items-center text-center relative min-w-70"
              >
                <motion.span
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-emerald-100 font-semibold text-sm tracking-wider mb-1"
                >
                  PROFIT BOOST
                </motion.span>

                <span className="text-2xl font-extrabold text-white leading-tight">
                  +₹5,000 additional revenue
                  <br />
                  possible today
                </span>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* Cards Grid */}
          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-gray-100"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  className="absolute top-0 left-0 w-2 h-full bg-[#16a34a]"
                />

                <div className="mb-6">
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    🔥 PROMOTE
                  </motion.span>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Paneer Butter Masala
                  </h3>

                  <p className="text-gray-500 font-medium mb-6 text-sm">
                    +18% demand spike predicted
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 font-bold text-center py-3 px-4 rounded-xl text-sm"
                  >
                    Expected Lift: ₹1,200
                  </motion.div>
                </div>
              </motion.div>
            </MotionWrapper>

            {/* Card 2 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-gray-100"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  className="absolute top-0 left-0 w-2 h-full bg-[#dc2626]"
                />

                <div className="mb-6">
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-red-50 text-red-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    ⚠️ REDUCE
                  </motion.span>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Veg Pulao
                  </h3>

                  <p className="text-gray-500 font-medium mb-6 text-sm">
                    Low demand predicted for tonight
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-red-50 text-red-700 font-bold text-center py-3 px-4 rounded-xl text-sm"
                  >
                    Save: 4kg Inventory
                  </motion.div>
                </div>
              </motion.div>
            </MotionWrapper>

            {/* Card 3 */}
            <MotionWrapper variants={fadeUp}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-4xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-gray-100"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  className="absolute top-0 left-0 w-2 h-full bg-[#8b5cf6]"
                />

                <div className="mb-6">
                  <motion.span
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="bg-purple-50 text-purple-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    💡 OPPORTUNITY
                  </motion.span>

                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Chicken Biryani Combo
                  </h3>

                  <p className="text-gray-500 font-medium mb-6 text-sm">
                    Flash deal recommended
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-purple-50 text-purple-700 font-bold text-center py-3 px-4 rounded-xl text-sm"
                  >
                    +₹3,500 potential
                  </motion.div>
                </div>
              </motion.div>
            </MotionWrapper>
          </MotionStagger>
        </div>
      </section>

      <section className="w-full bg-[#F5F6FA] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              How it works
            </h2>
          </MotionWrapper>

          {/* Blue underline */}
          <MotionWrapper variants={scaleIn} delay={0.1}>
            <div className="w-16 h-1 bg-[#2F5BFF] mx-auto mt-4 rounded-full" />
          </MotionWrapper>

          {/* Steps */}
          <div className="relative mt-16">
            {/* Horizontal line */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <div className="hidden md:block absolute top-10 left-40 w-[70%] h-px bg-gray-300" />
            </MotionWrapper>

            {/* Cards */}
            <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((step, i) => (
                <MotionWrapper key={step.id} variants={fadeUp}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    {/* Circle */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 flex items-center justify-center rounded-full bg-[#2F5BFF] text-white text-xl font-bold shadow-md z-10"
                    >
                      {step.id}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mt-6 text-lg font-semibold text-gray-900"
                    >
                      {step.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs"
                    >
                      {step.desc}
                    </motion.p>
                  </motion.div>
                </MotionWrapper>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>

      <ComparisonSection {...comparisonData} />

      <section className="w-full bg-[#2F3640] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, index) => (
              <MotionWrapper key={index} variants={fadeUp}>
                <motion.div whileHover={{ y: -6 }} className="group">
                  {/* Value */}
                  <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-3xl md:text-5xl font-bold text-[#6EF3C5]"
                  >
                    {stat.value}
                  </motion.h2>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 text-xs md:text-sm tracking-widest uppercase text-gray-400 font-semibold group-hover:text-gray-300 transition"
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
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
        title="Stop losing ₹25,000 every month"
        subtitle="Start using AI to optimize your menu — every day. Join 240+ smarter restaurant owners."
        primaryText="Get My Menu Insights"
        secondaryText="Start Saving Today"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </>
  );
}
