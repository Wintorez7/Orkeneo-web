"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import { fadeUp } from "@/lib/animations/variants";

const playbooks = [
  {
    tag: "OPERATIONS",
    title: "Reduce Food Waste by 30%",
    desc: "Implement real-time waste tracking and dynamic portion control based on historical order volume patterns.",
    time: "8 min read",
    image: "/images/food.png",
  },
  {
    tag: "LABOR",
    title: "Optimizing Peak Hour Staffing",
    desc: "Use predictive labor modeling to align staff schedules with customer inflow trends, saving 12% on monthly wages.",
    time: "12 min read",
    image: "/images/labor.png",
  },
  {
    tag: "PROFIT",
    title: "Menu Engineering for Profit",
    desc: "A data-driven approach to menu placement and pricing psychology to maximize contribution margins.",
    time: "10 min read",
    image: "/images/menu.png",
  },
];

export default function PlaybooksSection() {
  return (
    <section className="bg-[#F8F9FC] px-4 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= FEATURED ================= */}
        <MotionWrapper variants={fadeUp}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 rounded-[32px] overflow-hidden bg-white shadow-sm"
          >
            {/* LEFT */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              {/* Badge */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs font-semibold text-green-600 uppercase tracking-wide"
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
                  className="w-2 h-2 rounded-full bg-green-500"
                />
                Featured Strategy
              </motion.p>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-[26px] md:text-[32px] font-bold text-[#171C24] leading-snug"
              >
                The 2024 Guide to <br /> Predictive Inventory Management
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md"
              >
                Learn how top-performing restaurants are using historical data
                and local weather patterns to cut inventory costs by up to 22%
                while eliminating stockouts.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mt-6"
              >
                <Link href="/playbooks/read-playbook">
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="px-5 py-2.5 rounded-full bg-[#194FD7] text-white text-sm font-medium shadow-md hover:bg-[#163bb3] transition"
                  >
                    Read Playbook →
                  </motion.button>
                </Link>

                <span className="text-sm text-gray-400">15 min read</span>
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-65 md:h-full"
            >
              <Image
                src="/images/playbook.png"
                alt="featured"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </MotionWrapper>

        {/* ================= CARDS ================= */}
        <MotionStagger className="grid md:grid-cols-3 gap-6">
          {playbooks.map((item, i) => (
            <MotionWrapper key={i} variants={fadeUp} delay={i * 0.1}>
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition"
              >
                {/* IMAGE */}
                <div className="relative h-45 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* TAG */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                  >
                    {item.tag}
                  </motion.span>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[16px] font-semibold text-gray-900 leading-snug"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-2 text-sm text-gray-500 leading-relaxed"
                  >
                    {item.desc}
                  </motion.p>

                  {/* FOOTER */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 flex justify-between items-center text-sm"
                  >
                    <span className="text-gray-400">{item.time}</span>

                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-[#194FD7] font-medium hover:underline"
                    >
                      View Playbook ›
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </MotionWrapper>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
