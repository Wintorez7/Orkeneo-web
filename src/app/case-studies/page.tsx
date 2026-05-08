"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart3, Clock, Package } from "lucide-react";
import Link from "next/link";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import { AnimatePresence, motion } from "framer-motion";
import { fadeRight, fadeUp, scaleIn } from "@/lib/animations/variants";
import AnimatedCounter from "@/components/motion/AnimatedCounter";

const filters = ["All", "Cloud Kitchen", "QSR", "Cafe", "Multi-location"];

function CaseStudies() {
  const [active, setActive] = useState("All");

  const cards = [
    {
      tag: "QSR",
      title: "Spice Route Express",
      desc: "Implemented AI demand forecasting to predict peak hours, enabling precise prep work and eliminating morning rush inventory stockouts.",
      stats: [
        { value: "+35%", label: "REVENUE" },
        { value: "-45%", label: "WASTE" },
      ],
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    },
    {
      tag: "Cafe",
      title: "The Artisan Cafe",
      desc: "Leveraged smart scheduling to align staff shifts with real-time footfall patterns, significantly decreasing idle time during off-peak hours.",
      stats: [
        { value: "+28%", label: "PROFIT" },
        { value: "-30%", label: "LABOR COST" },
      ],
      icon: <Clock className="w-5 h-5 text-purple-600" />,
    },
    {
      tag: "Cloud Kitchen",
      title: "Ghost Kitchen Hub",
      desc: "Multi-brand inventory optimization allowed them to share ingredients across 5 brands, drastically cutting ingredient spoilage.",
      stats: [
        { value: "55%", label: "REDUCTION" },
        { value: "+15%", label: "AOV" },
      ],
      icon: <Package className="w-5 h-5 text-green-600" />,
    },
    {
      tag: "Multi-location",
      title: "Chai Break Chain",
      desc: "Unified inventory across 12 outlets using Orkeneo's multi-location sync, reducing stock discrepancies and emergency orders.",
      stats: [
        { value: "+22%", label: "EFFICIENCY" },
        { value: "-40%", label: "STOCK-OUTS" },
      ],
      icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
    },
  ];

  const filteredCards = cards.filter((card) => {
    if (active === "All") return true;
    return card.tag.trim().toLowerCase() === active.trim().toLowerCase();
  });

  return (
    <>
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* HERO TEXT */}
          <MotionWrapper
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 leading-tight">
              Real Restaurants.{" "}
              <span className="text-[#3B6AF6]">Real Results.</span>
            </h1>

            <p className="mt-4 text-gray-500 text-[15px] md:text-[16px]">
              See how restaurants increased profits and reduced waste using
              Orkeneo's predictive intelligence.
            </p>
          </MotionWrapper>

          {/* FILTERS */}
          <MotionStagger className="mt-8 flex flex-wrap justify-center gap-3">
            {filters.map((item) => (
              <motion.button
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                key={item}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === item
                    ? "bg-[#3B6AF6] text-white shadow"
                    : "bg-[#F0F3FF] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </MotionStagger>

          {/* FEATURED CARD */}
          <MotionWrapper variants={scaleIn} className="mt-12">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 rounded-[28px] overflow-hidden bg-white shadow-sm hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
            >
              {/* LEFT IMAGE */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="relative h-65 md:h-105 overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/images/case-studies.png"
                    alt="case study"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* RIGHT CONTENT */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                {/* Tag */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xs font-semibold text-purple-600 uppercase tracking-wide"
                >
                  Featured Success Story
                </motion.p>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mt-3 text-[24px] md:text-[28px] font-semibold text-gray-900"
                >
                  The Gourmet Group
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed"
                >
                  A multi-chain fine dining establishment optimized their entire
                  supply chain using Orkeneo&apos;s demand forecasting,
                  resulting in unprecedented growth.
                </motion.p>

                {/* Stats */}
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mt-6 text-[28px] md:text-[32px] font-bold text-green-600"
                >
                  +42%{" "}
                  <span className="text-sm font-medium text-gray-600">
                    PROFIT INCREASE
                  </span>
                </motion.p>

                {/* Button */}
                <Link href="/case-studies/story">
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-6 w-fit cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Read Article →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* TOP STATS BAR */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-r from-[#1D4ED8] to-[#3B6AF6] rounded-[40px] px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center text-white text-center gap-6 shadow-lg"
            >
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AnimatedCounter
                  className="text-[28px] md:text-[32px] font-bold"
                  to={50}
                  prefix="₹"
                  suffix=",000"
                />
                <p className="text-sm text-white/80">Avg. Monthly Savings</p>
              </motion.div>

              <div className="hidden md:block w-px h-10 bg-white/20"></div>

              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <AnimatedCounter
                  to={55}
                  className="text-[28px] md:text-[32px] font-bold"
                  suffix="%"
                ></AnimatedCounter>
                <p className="text-sm text-white/80">Waste Reduction</p>
              </motion.div>

              <div className="hidden md:block w-px h-10 bg-white/20"></div>

              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <AnimatedCounter
                  to={20}
                  className="text-[28px] md:text-[32px] font-bold"
                  suffix="%"
                ></AnimatedCounter>
                <p className="text-sm text-white/80">Labor Cost Reduction</p>
              </motion.div>
            </motion.div>
          </MotionWrapper>

          {/* CARDS GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {filteredCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FFFFFF] rounded-[28px] p-6 hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 group"
                >
                  {/* TOP */}
                  <div className="flex justify-between items-center">
                    {/* Tag */}
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] font-semibold bg-[#F0F3FF] text-gray-600 px-3 py-1 rounded-full"
                    >
                      {card.tag}
                    </motion.span>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.icon}
                    </motion.div>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* DIVIDER */}
                  <div className="mt-6 border-t border-gray-200" />

                  {/* STATS */}
                  <div className="mt-4 flex justify-between">
                    {card.stats.map((stat, idx) => (
                      <div key={idx}>
                        <p className="text-green-600 font-semibold text-lg">
                          {stat.value}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 p-6">
        {/* Main Card Container */}
        <MotionWrapper variants={scaleIn}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl bg-[#F5F7FB] rounded-[32px] overflow-hidden py-16 px-6 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            {/* Top Right Violet Glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#9366D4] opacity-15 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4"
            />

            {/* Bottom Left Blue/Violet Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#194FD7] opacity-10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4"
            />

            {/* Content Wrapper */}
            <MotionStagger className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
              {/* Headline */}
              <MotionWrapper variants={fadeUp}>
                <motion.h2
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-extrabold text-[#171C24] tracking-tight"
                >
                  See what Orkeneo can do for you
                </motion.h2>
              </MotionWrapper>

              {/* Buttons Container */}
              <MotionWrapper variants={fadeUp} delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                  {/* Primary Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-linear-to-r from-[#194FD7] to-[#6B38D4] hover:opacity-90 text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-purple-900/10 min-w-50"
                  >
                    Calculate My Savings
                  </motion.button>

                  {/* Secondary Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="bg-white hover:bg-gray-50 text-[#194FD7] font-semibold py-3.5 px-8 rounded-full border-2 border-[#194FD7] transition-all shadow-sm min-w-40"
                  >
                    Book a Demo
                  </motion.button>
                </div>
              </MotionWrapper>
            </MotionStagger>
          </motion.div>
        </MotionWrapper>
      </div>
    </>
  );
}

export default CaseStudies;
