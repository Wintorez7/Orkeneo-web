"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function AiManagerSection() {
  return (
    <section className="py-24 bg-[#f7f8ff]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - FLOATING CARDS */}
        <div className="relative w-full h-105 md:flex md:justify-center md:items-center">
          {/* CARD 1 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-[85%] sm:w-[75%] md:w-[420px] z-0 hover:z-40">
            <motion.div
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100 border-l-[6px] border-l-blue-500 cursor-pointer w-full relative"
            >

              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full font-semibold">
                  HIGH PRIORITY
                </span>
                <span>Just now</span>
              </div>

              <h4 className="font-semibold text-gray-900">
                Prep +3kg paneer before 5PM
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Spike in dinner demand predicted due to nearby cricket match.
              </p>
            </motion.div>
          </div>

          {/* CARD 2 (CENTER MAIN) */}
          <div className="absolute mt-2 top-40 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 w-[90%] sm:w-[80%] md:w-[460px] z-10 hover:z-40">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
                delay: 0.3,
              }}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-[0_14px_40px_rgba(0,0,0,0.12)] p-6 border border-gray-100 border-l-[6px] border-l-emerald-500 cursor-pointer w-full relative"
            >

              {/* AI BADGE */}
              <div className="absolute -rotate-2 -right-2 md:-right-10 top-1/2 md:top-1/2  md:-translate-y-1/2 translate-y-0 bottom-full -mb-4 md:bottom-auto md:mb-0 bg-linear-to-r from-purple-500 to-indigo-500 text-white text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg flex items-center gap-2 max-w-[200px] md:max-w-none hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-shadow duration-300">
                <span className="w-2 h-2 shrink-0 bg-white rounded-full animate-pulse" />
                <span className="truncate md:overflow-visible">
                  AI Pulse: Listening to data...
                </span>
              </div>

              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded-full font-semibold">
                  REVENUE OPPORTUNITY
                </span>
                <span>14 mins ago</span>
              </div>

              <h4 className="font-semibold text-gray-900">
                Activate Biryani combo
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Inventory levels optimal. High cross-sell probability detected.
              </p>
            </motion.div>
          </div>

          {/* CARD 3 */}
          <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 w-[85%] sm:w-[75%] md:w-[420px] z-0 hover:z-40">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                type: "spring",
                bounce: 0.4,
                delay: 0.5,
              }}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 border border-gray-100 border-l-[6px] border-l-red-500 cursor-pointer w-full relative"
            >

              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded-full font-semibold">
                  RISK ALERT
                </span>
                <span>1 hour ago</span>
              </div>

              <h4 className="font-semibold text-gray-900">
                Add 2 staff to avoid ₹18K loss
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Projected wait times exceed 25 mins. Cancellation risk high.
              </p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Like having a 3-star Michelin manager in every outlet.
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-lg">
            Orkeneo doesn't just show you charts; it gives you{" "}
            <span className="text-indigo-600 font-semibold">
              Direct Instructions.
            </span>{" "}
            It tells your team what to do, when to do it, and why.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon icon="mdi:check" className="text-blue-600" width={14} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Automated Decision Engine
                </p>
                <p className="text-sm text-gray-500">
                  Removes the stress of manual floor management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon icon="mdi:check" className="text-blue-600" width={14} />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Real-time Adjustments
                </p>
                <p className="text-sm text-gray-500">
                  Adapts to sudden rain, traffic jams, or viral social trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
