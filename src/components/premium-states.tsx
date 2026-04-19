"use client";

import { fadeUp, fadeIn, scaleIn } from "@/lib/animations/variants";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { motion } from "framer-motion";
import MotionStagger from "@/components/motion/MotionStagger";

export default function PremiumStates() {
  return (
    <section className="bg-[#2f3640] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Stat 1 */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="transition-all"
            >
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent"
              >
                50%
              </motion.h3>

              <p className="mt-3 text-[#9CA3AF] text-sm">less food waste</p>
            </motion.div>
          </MotionWrapper>

          {/* Stat 2 */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="transition-all"
            >
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#D1D5DB] to-[#E5E7EB] bg-clip-text text-transparent"
              >
                ₹30,000
              </motion.h3>

              <p className="mt-3 text-[#9CA3AF] text-sm">saved per month</p>
            </motion.div>
          </MotionWrapper>

          {/* Stat 3 */}
          <MotionWrapper variants={fadeUp}>
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              className="transition-all"
            >
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#C4B5FD] to-[#DDD6FE] bg-clip-text text-transparent"
              >
                100%
              </motion.h3>

              <p className="mt-3 text-[#9CA3AF] text-sm">
                data-driven decisions
              </p>
            </motion.div>
          </MotionWrapper>
        </MotionStagger>
      </div>
    </section>
  );
}
