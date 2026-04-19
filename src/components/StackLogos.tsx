"use client";

import { fadeUp, fadeIn, scaleIn } from "@/lib/animations/variants";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { motion } from "framer-motion";
import MotionStagger from "@/components/motion/MotionStagger";

export default function StackLogos() {
  const logos = ["Zoho POS", "GoFrugal", "Vyapar", "Petpooja"];

  return (
    <section className="w-full py-16 relative overflow-hidden bg-linear-to-br bg-[#E6EBFF]">
      {/* Glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full pointer-events-none"
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
              <MotionWrapper key={logo} variants={fadeUp}>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="text-gray-500 text-lg md:text-xl font-semibold hover:text-gray-700 transition duration-200 cursor-default"
                >
                  {logo}
                </motion.span>
              </MotionWrapper>
            ))}
          </div>
        </MotionStagger>
      </div>
    </section>
  );
}
