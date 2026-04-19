"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./reusable/button";
import { BookDemoModal } from "./ui/book-demo-modal";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeUp, fadeRight } from "@/lib/animations/variants";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import MotionWrapper from "./motion/MotionWrapper";

// ── helpers ──────────────────────────────────────────────────────────────
function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

// ── Calculator logic ──────────────────────────────────────────────────────
// Estimated monthly loss  = revenue × foodCostPct × 0.08  +  staffCount × 3500
// Recovered profit        = estimatedLoss × 1.21   (21% uplift via Orkeneo)
function calcLoss(revenue: number, foodCostPct: number, staffCount: number) {
  const foodWaste = revenue * (foodCostPct / 100) * 0.08;
  const laborIneff = staffCount * 3500;
  return Math.round(foodWaste + laborIneff);
}

function calcRecovered(loss: number) {
  return Math.round(loss * 1.21);
}

// ── Component ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculator state
  const [revenue, setRevenue] = useState(1500000);
  const [ordersPerDay, setOrdersPerDay] = useState(120);
  const [foodCostPct, setFoodCostPct] = useState(32);
  const [staffCount, setStaffCount] = useState(12);

  const estimatedLoss = calcLoss(revenue, foodCostPct, staffCount);
  const recoveredProfit = calcRecovered(estimatedLoss);
  const dailyLoss = Math.round(estimatedLoss / 30);

  // Animated counter for the hero number
  const [displayLoss, setDisplayLoss] = useState(estimatedLoss);
  useEffect(() => {
    const timeout = setTimeout(() => setDisplayLoss(estimatedLoss), 120);
    return () => clearTimeout(timeout);
  }, [estimatedLoss]);

  return (
    <>
      <section className="pt-10 mt-20 pb-4 md:pt-16 md:pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* ── LEFT ─────────────────────────────────────────── */}
            <div className="flex-1 text-left">
              {/* Badge */}
              <MotionWrapper variants={fadeUp} delay={0.1}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block animate-pulse" />
                  AI-Powered Profit Optimization
                </span>
              </MotionWrapper>

              {/* Headline */}
              <MotionWrapper variants={fadeUp} delay={0.2}>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-950 mb-4">
                  You&apos;re losing{" "}
                  <span className="text-blue-600 block">
                    ₹{formatINR(displayLoss)}/
                  </span>
                  <span className="block text-blue-600">month</span>
                  <span className="block">in your</span>
                  <span className="block">restaurant</span>
                </h1>
              </MotionWrapper>

              {/* Daily loss callout */}
              <MotionWrapper variants={fadeUp} delay={0.4}>
                ₹{formatINR(displayLoss)}/month = ₹{formatINR(dailyLoss)} lost
                <p className="text-blue-600 font-semibold text-base mb-5">
                  every day
                </p>
              </MotionWrapper>

              {/* Sub-copy */}
              <MotionWrapper variants={fadeUp} delay={0.4}>
                <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm mb-8">
                  From over-prepping, poor staffing, and missed demand...
                </p>
              </MotionWrapper>

              {/* CTA row */}
              <MotionWrapper
                variants={fadeUp}
                delay={0.5}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  variant="default"
                  size="md"
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 text-white 
                shadow-lg shadow-blue-200 transition-all duration-300
                hover:bg-blue-700 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Get My AI Plan →
                </Button>

                {/* Avatar stack */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "/avatar/user-1.png",
                      "/avatar/user-2.png",
                      "/avatar/user-3.png",
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative"
                      >
                        <Image
                          src={src}
                          alt={`Owner ${i + 1}`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <span className="text-sm text-gray-500 font-medium">
                    +240 Owners Optimized
                  </span>
                </div>
              </MotionWrapper>
            </div>

            {/* ── RIGHT: Savings Calculator ────────────────────── */}
            <MotionWrapper variants={fadeRight} delay={0.3}>
              <div className="w-full lg:w-135 shrink-0 z-10">
                <motion.div
                  animate={floatAnimation}
                  transition={floatTransition}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 relative
                  shadow-[0_20px_60px_rgba(99,102,241,0.15),0_8px_30px_rgba(139,92,246,0.12)]
                  hover:shadow-[0_30px_80px_rgba(99,102,241,0.25)]
                  transition-all duration-500"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-blue-600 text-lg">⊞</span>
                    <h2 className="text-base font-bold text-gray-900">
                      Interactive Savings Calculator
                    </h2>
                  </div>

                  {/* Input grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Monthly Revenue */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Monthly Revenue
                      </label>
                      <input
                        suppressHydrationWarning
                        type="number"
                        value={revenue}
                        onChange={(e) =>
                          setRevenue(Number(e.target.value) || 0)
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                      />
                    </div>

                    {/* Orders/Day */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Orders/Day
                      </label>
                      <input
                        suppressHydrationWarning
                        type="number"
                        value={ordersPerDay}
                        onChange={(e) =>
                          setOrdersPerDay(Number(e.target.value) || 0)
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                      />
                    </div>

                    {/* Food Cost % */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Food Cost %
                      </label>
                      <input
                        suppressHydrationWarning
                        type="number"
                        value={foodCostPct}
                        onChange={(e) =>
                          setFoodCostPct(Number(e.target.value) || 0)
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                      />
                    </div>

                    {/* Staff Count */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Staff Count
                      </label>
                      <input
                        suppressHydrationWarning
                        type="number"
                        value={staffCount}
                        onChange={(e) =>
                          setStaffCount(Number(e.target.value) || 0)
                        }
                        className="w-full bg-gray-50 border border-gray-100 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 mb-4" />

                  {/* Estimated monthly loss */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="text-sm text-gray-500">
                      Estimated monthly loss
                    </span>
                    <span className="text-sm font-semibold text-red-500">
                      ₹{formatINR(estimatedLoss)}/mo
                    </span>
                  </div>

                  {/* Recovered profit */}
                  <div className="flex items-center justify-between bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-5">
                    <span className="text-sm font-semibold text-green-800">
                      Recovered profit
                    </span>
                    <span className="text-base font-extrabold text-green-700">
                      ₹{formatINR(recoveredProfit)}/mo
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 rounded-full bg-blue-600 text-white text-sm font-semibold 
        transition-all duration-300 shadow-md shadow-blue-200
        hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.97]"
                  >
                    Get My AI Plan →
                  </button>

                  {/* Fine print */}
                  <p className="text-center text-[11px] text-gray-400">
                    Instant AI analysis based on 5,000+ data points.
                  </p>
                </motion.div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
