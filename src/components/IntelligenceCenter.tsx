"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AnimatedCounter from "./motion/AnimatedCounter";

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
            <div className="bg-white rounded-[24px] shadow-xl shadow-blue-900/5 border border-gray-100 p-6 flex flex-col gap-6 w-full max-w-[700px] mx-auto text-left">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <Icon icon="mdi:chart-bar" width={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">
                      Orkeneo Intelligence Center
                    </h3>
                    <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mt-0.5">
                      Live Network Feed &bull; 12 Nodes Active
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                    Live
                  </span>
                  <span className="px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full shadow-md shadow-blue-500/20 cursor-pointer">
                    History
                  </span>
                </div>
              </div>

              {/* 3 Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#0f8052] rounded-[16px] p-5 text-white shadow-sm shadow-[#0f8052]/20">
                  <p className="text-[10px] font-bold tracking-wider uppercase mb-2">
                    Waste Reduction
                  </p>
                  <h4 className="text-3xl font-extrabold mb-2">
                    <AnimatedCounter to={55.2} suffix="%" decimals={1} duration={2} />
                  </h4>
                  <p className="text-[10px] font-medium opacity-90 flex items-center gap-1">
                    <Icon icon="mdi:arrow-up" /> 12.4% vs last period
                  </p>
                </div>
                <div className="bg-[#f4f6fc] rounded-[16px] p-5 shadow-sm">
                  <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-2">
                    Revenue Uplift
                  </p>
                  <h4 className="text-3xl font-extrabold text-[#3b66f5] mb-2">
                    <AnimatedCounter prefix="+" to={18.4} suffix="%" decimals={1} duration={2} />
                  </h4>
                  <p className="text-[10px] font-medium text-gray-500">
                    Stock availability impact
                  </p>
                </div>
                <div className="bg-[#f4f6fc] rounded-[16px] p-5 shadow-sm">
                  <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-2">
                    Forecast Accuracy
                  </p>
                  <h4 className="text-3xl font-extrabold text-[#7c3aed] mb-2">
                    <AnimatedCounter to={98.4} suffix="%" decimals={1} duration={2} />
                  </h4>
                  <p className="text-[10px] font-medium text-gray-500">
                    Global performance
                  </p>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-white rounded-[16px] border border-gray-100 p-5 shadow-sm">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mb-1">
                      Revenue Forecast Vs Actual
                    </p>
                    <h4 className="text-2xl font-extrabold text-gray-900">
                      ₹8,42,000
                    </h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#3b66f5]"></span>
                      <span className="text-xs font-bold text-gray-700">
                        Predicted
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                      <span className="text-xs font-bold text-gray-700">
                        Actual
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-24 relative flex items-end">
                  {/* Animated SVG Line Chart */}
                  <svg
                    viewBox="0 0 100 30"
                    preserveAspectRatio="none"
                    className="w-full h-full absolute inset-0 overflow-visible"
                  >
                    <defs>
                      <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4873ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#4873ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <motion.polygon
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      points="0,22 15,16 30,24 45,10 60,18 75,4 90,14 100,0 100,30 0,30"
                      fill="url(#line-gradient)"
                    />
                    {/* Animated Line */}
                    <motion.polyline
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      points="0,22 15,16 30,24 45,10 60,18 75,4 90,14 100,0"
                      fill="none"
                      stroke="#4873ff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex justify-between mt-6 text-[10px] font-bold text-gray-400">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-[#f6f8fb] rounded-[16px] p-4 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icon
                      icon="mdi:creation"
                      className="text-[#3b66f5]"
                      width={20}
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Proprietary AI Engine Active
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      Processing 500+ data points for next prediction
                    </p>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-[#4873ff] hover:bg-blue-600 transition-colors text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-md shadow-blue-500/20 cursor-pointer">
                  Live Status
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
