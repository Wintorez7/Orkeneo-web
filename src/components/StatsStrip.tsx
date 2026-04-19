"use client";

import { motion } from "framer-motion";

import { fadeUp, fadeRight } from "@/lib/animations/variants";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import MotionWrapper from "./motion/MotionWrapper";
import MotionStagger from "./motion/MotionStagger";

export default function StatsStrip() {
  const stats = [
    {
      value: "+40%",
      label: "Average profit uplift",
      color: "text-emerald-600",
      underline: "bg-emerald-300",
    },
    {
      value: "55%",
      label: "Reduction in food waste",
      color: "text-blue-500",
      underline: "bg-blue-200",
    },
    {
      value: "-20%",
      label: "Labor cost efficiency",
      color: "text-purple-500",
      underline: "bg-purple-200",
    },
  ];

  return (
    <section className="w-full py-20 bg-linear-to-b bg-[#f5f6ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* STATS */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-center">
          {stats.map((stat, i) => (
            <MotionWrapper key={i} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -6 }}
                className="flex flex-col items-center group"
              >
                {/* VALUE */}
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`text-5xl md:text-6xl font-bold ${stat.color}`}
                >
                  {stat.value}
                </motion.h3>

                {/* LABEL */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-3 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold group-hover:text-gray-500 transition"
                >
                  {stat.label}
                </motion.p>

                {/* UNDERLINE (animated grow) */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "3rem", opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className={`mt-3 h-0.75 rounded-full ${stat.underline}`}
                />
              </motion.div>
            </MotionWrapper>
          ))}
        </MotionStagger>

        {/* FOOTNOTE */}
        <MotionWrapper variants={fadeUp} delay={0.2}>
          <p className="mt-16 text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold">
            Based on customer results across 240+ optimized outlets
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
