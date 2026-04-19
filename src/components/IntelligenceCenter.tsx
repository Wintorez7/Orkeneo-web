"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function IntelligenceCenter() {
  return (
    <section className="w-full py-20 bg-linear-to-b from-[#f6f7ff] to-[#eef1ff]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            The Intelligence <br /> Center.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 max-w-md"
          >
            Your entire kitchen in one dashboard. See exactly where you're
            losing money — and how to fix it.
          </motion.p>

          {/* FEATURES LIST */}
          <div className="mt-8 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Icon
                icon="mdi:chart-line"
                className="text-blue-600"
                width={20}
              />
              <span className="text-gray-800 font-medium whitespace-nowrap">
                Revenue trends
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <Icon
                icon="mdi:recycle"
                className="text-emerald-600"
                width={20}
              />
              <span className="text-gray-800 font-medium whitespace-nowrap">
                Waste reduction insights
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <Icon
                icon="mdi:account-group"
                className="text-purple-600"
                width={20}
              />
              <span className="text-gray-800 font-medium whitespace-nowrap">
                Staff performance
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <Icon
                icon="mdi:star-four-points"
                className="text-indigo-600"
                width={20}
              />
              <span className="text-gray-800 font-medium whitespace-nowrap">
                Daily AI recommendations
              </span>
            </motion.div>
          </div>

          {/* CTA BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 px-6 py-3 rounded-full text-white font-semibold 
            bg-linear-to-r from-blue-600 to-indigo-600 
            shadow-[0_8px_24px_rgba(79,70,229,0.3)]
            cursor-pointer hover:shadow-[0_12px_28px_rgba(79,70,229,0.4)]
            hover:scale-[1.02] transition-all"
          >
            Explore Dashboard
          </motion.button>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
            delay: 0.3,
          }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-200/60 to-blue-200/50 blur-3xl rounded-4xl -z-10" />

          {/* Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="relative rounded-[28px] p-3  z-10"
          >
            <Image
              src="/avatar/Intelligence-center.png"
              alt="Intelligence Center"
              width={800}
              height={500}
              className="rounded-[20px] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
