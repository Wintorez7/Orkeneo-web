"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AiKitchenSection() {
  return (
    <section className="py-24 bg-linear-to-br from-[#eef1ff] via-[#e4e8ff] to-[#dce2ff]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-center md:text-5xl md:text-left font-bold text-gray-900 leading-tight"
          >
            Your AI Kitchen Manager <br />
            <span className="text-indigo-600">Never Sleeps.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full sm:flex sm:justify-center md:justify-start sm:items-center"
          >
            {/* Description */}
            <p className="mt-6 text-gray-600 max-w-lg sm:text-center md:text-left">
              Traditional dashboards tell you what happened. Orkeneo tells you
              what to do{" "}
              <span className="font-semibold text-gray-800">now.</span> It's the
              voice in the kitchen that optimizes every move.
            </p>
          </motion.div>

          {/* Insight Cards */}
          <div className="mt-10 flex flex-col gap-4">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:border-purple-200"
            >
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Icon
                  icon="mdi:star-four-points"
                  className="text-purple-600"
                  width={16}
                />
              </div>
              <p className="text-sm font-medium text-gray-800">
                "Prep +3kg paneer before 5PM → Save ₹2,400"
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:border-red-200"
            >
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <Icon icon="mdi:alert" className="text-red-600" width={16} />
              </div>
              <p className="text-sm font-medium text-gray-800">
                "Add 2 staff → avoid ₹18,000 loss"
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow duration-300 hover:border-emerald-200"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <Icon
                  icon="mdi:rocket-launch"
                  className="text-emerald-600"
                  width={16}
                />
              </div>
              <p className="text-sm font-medium text-gray-800">
                "Activate combo → +₹3,500 profit"
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src="/avatar/Kitchen-Environment.png"
              alt="Kitchen Environment"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Floating Insight Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.5,
              delay: 0.8,
            }}
            className="absolute bottom-6 right-0 sm:right-6 z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-4xl shadow-xl px-5 py-4 w-[280px] sm:w-70 border border-indigo-50"
            >
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                AI Intelligence Pulse
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                "Rain forecasted at 7 PM. Delivery orders expected to spike by
                40%. Switch staff to packing station."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
