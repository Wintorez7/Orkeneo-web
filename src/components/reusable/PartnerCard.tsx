"use client";

import { motion } from "framer-motion";

export interface PartnerCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  variant?: "default" | "highlight";
  badge?: string;
  index?: number;
}

export default function PartnerCard({
  title,
  subtitle,
  description,
  features,
  buttonText,
  variant = "default",
  badge,
  index = 0,
}: PartnerCardProps) {
  const isHighlight = variant === "highlight";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: isHighlight ? 0.95 : 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: isHighlight ? 1.05 : 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300
      ${
        isHighlight
          ? "bg-linear-to-br from-blue-600 to-indigo-500 text-white shadow-xl scale-105"
          : "bg-[#F5F7FB] border border-gray-200 text-gray-900"
      }`}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            delay: 0.3 + index * 0.1,
            type: "spring",
            stiffness: 200,
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2"
        >
          <span className="text-xs font-semibold bg-[#00855B] text-white px-3 py-1 rounded-full">
            {badge}
          </span>
        </motion.div>
      )}

      <div>
        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Subtitle */}
        <p
          className={`text-xs font-semibold mt-1 tracking-wide ${
            isHighlight ? "text-[#6FFBBE]" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>

        {/* Description */}
        <p
          className={`mt-4 text-sm ${
            isHighlight ? "text-blue-100" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-green-500">✔</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`mt-6 w-full py-3 rounded-full font-semibold transition
        ${
          isHighlight
            ? "bg-white text-blue-600 hover:opacity-90"
            : "border border-blue-500 text-blue-600 hover:bg-blue-50"
        }`}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}
