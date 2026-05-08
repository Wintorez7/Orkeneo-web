"use client";

import { useState } from "react";
import PlaybooksSection from "./PlaybooksSection/page";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import {
  fadeUp,
  scaleIn,
  fadeRight,
  fadeLeft,
} from "@/lib/animations/variants";

function PlayBooks() {
  const filters = [
    "All Playbooks",
    "Food Cost Optimization",
    "Labor Management",
    "Menu Optimization",
    "Growth Strategies",
  ];

  const [active, setActive] = useState("All Playbooks");

  return (
    <>
      <section className="mt-20 px-4 py-16 bg-[#F8F9FC] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* TOP GRID */}
          <MotionStagger className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <MotionWrapper variants={fadeLeft}>
              <div>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#6B38D4] px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                >
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
                    className="w-2 h-2 bg-[#6B38D4] rounded-full"
                  />
                  PREDICTIVE INSIGHTS
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 text-[34px] md:text-[46px] font-bold text-[#171C24] leading-tight"
                >
                  Restaurant Playbooks <br />
                  to{" "}
                  <motion.span
                    animate={{
                      opacity: [1, 0.85, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#194FD7]"
                  >
                    Increase Profit
                  </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 text-gray-500 text-[15px] md:text-base max-w-xl leading-relaxed"
                >
                  Step-by-step strategies to reduce waste, optimize staff, and
                  grow revenue powered by Orkeneo&apos;s predictive engine.
                </motion.p>
              </div>
            </MotionWrapper>

            {/* RIGHT CARD */}
            <MotionWrapper variants={fadeRight}>
              <div className="flex justify-center md:justify-end">
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-[320px] bg-[#F0F3FF] px-6 py-6 rounded-[28px]"
                >
                  {/* Glow */}
                  <motion.div
                    animate={{
                      opacity: [0.15, 0.35, 0.15],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-6 -right-6 w-24 h-24 bg-[#194FD7]/10 blur-2xl rounded-full"
                  />

                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide relative z-10">
                    TOTAL MANAGED VOLUME
                  </p>

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="mt-2 text-[30px] font-bold text-[#171C24] relative z-10"
                  >
                    $1.2B+
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mt-2 text-[#006947] text-sm font-semibold flex items-center gap-2 relative z-10"
                  >
                    <motion.span
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      ↗
                    </motion.span>
                    Average 14% Margin Lift
                  </motion.p>
                </motion.div>
              </div>
            </MotionWrapper>
          </MotionStagger>

          {/* FILTER BUTTONS */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {filters.map((item, i) => (
                <motion.button
                  key={item}
                  whileHover={{
                    y: -2,
                    scale: 1.03,
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActive(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
            ${
              active === item
                ? "bg-[#171C24] text-white shadow-sm"
                : "bg-[#EEF2F7] text-gray-600 hover:bg-gray-200"
            }
          `}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          </MotionWrapper>

          {/* DEBUG */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm text-gray-400"
          >
            Selected: <span className="text-[#194FD7]">{active}</span>
          </motion.p>
        </div>
      </section>

      <PlaybooksSection />

      <CTASection
        title="Want AI to do this automatically?"
        subtitle="Orkeneo turns these strategies into real-time automated decisions for your kitchen, bar, and floor staff."
        primaryText="Try ROI Calculator"
        secondaryText="Book a Demo"
      />
    </>
  );
}

export default PlayBooks;
