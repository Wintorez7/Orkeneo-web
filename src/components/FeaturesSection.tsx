"use client";

import { Icon } from "@iconify/react";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionCard from "@/components/motion/MotionCard";
import { fadeUp } from "@/lib/animations/variants";

const features = [
  {
    icon: "solar:graph-up-line-duotone",
    title: "Know what will sell today",
    desc: "Forecast exact order volumes by hour using local weather, events, and historical trends.",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    icon: "solar:chef-hat-line-duotone",
    title: "Know exactly what to prepare",
    desc: "Get dynamic prep lists that adjust in real-time. Never over-prep perishables again.",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    icon: "solar:clock-circle-line-duotone",
    title: "Schedule staff perfectly",
    desc: "Know exactly how many hands you need on deck to maintain speed without bloating payroll.",
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    icon: "solar:chart-line-duotone",
    title: "Track daily profit impact",
    desc: "Monitor your savings live. Watch your food waste drop and margins climb every day.",
    bg: "bg-indigo-100",
    color: "text-indigo-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <MotionWrapper variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Orkeneo Transforms Your Kitchen
          </h2>
        </MotionWrapper>

        {/* Subtext */}
        <MotionWrapper variants={fadeUp} delay={0.1}>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Stop guessing. Start predicting. Our intelligence system automates
            the complexity so you can focus on the food.
          </p>
        </MotionWrapper>

        {/* Cards */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((item, i) => (
            <MotionCard key={i}>
              <div className="bg-white rounded-2xl p-6 text-left shadow-sm border border-gray-100/50 hover:border-gray-100 transition-all duration-300 group cursor-pointer">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} 
                  group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    icon={item.icon}
                    className={item.color}
                    width={24}
                    height={24}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mt-5 text-lg font-semibold text-gray-900 leading-snug min-h-[48px] 
                group-hover:text-indigo-600 transition-colors duration-300"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="mt-2 text-sm text-gray-500 leading-relaxed 
                group-hover:text-gray-600 transition-colors duration-300"
                >
                  {item.desc}
                </p>
              </div>
            </MotionCard>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
