"use client";

import { motion } from "framer-motion";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  iconBg = "bg-gray-100",
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 group"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${iconBg}`}
      >
        {icon}
      </motion.div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
