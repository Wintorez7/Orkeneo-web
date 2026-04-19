"use client";

import { motion } from "framer-motion";

export interface KitchenCardProps {
  priority: "HIGH" | "MEDIUM" | "LOW";
  time: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function KitchenCard({
  priority,
  time,
  title,
  description,
  buttonText,
}: KitchenCardProps) {
  const priorityStyles = {
    HIGH: "bg-red-100 text-red-600",
    MEDIUM: "bg-blue-100 text-blue-600",
    LOW: "bg-gray-100 text-gray-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all"
    >
      {/* Header */}
      <div className="flex justify-between text-xs text-gray-400 mb-3">
        <span
          className={`px-2 py-0.5 rounded-full font-semibold ${priorityStyles[priority]}`}
        >
          {priority} PRIORITY
        </span>
        <span>{time}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">{description}</p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 w-full cursor-pointer bg-gray-100 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
