"use client";

import { motion } from "framer-motion";

interface AudienceCardProps {
  title: string;
  description: string;
  color: string;
  index?: number;
}

export default function AudienceCard({
  title,
  description,
  color,
  index = 0,
}: AudienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
      }}
    >
      <div className="relative bg-[#E9EDF5] rounded-3xl px-6 py-5 overflow-hidden">
        {/* Left curved accent (animated but SAME CSS) */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          style={{ transformOrigin: "center" }}
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-[90%] w-[6px] rounded-l-4xl ${color}`}
        />

        {/* Content */}
        <div className="pl-3">
          <h4 className="text-base font-semibold text-gray-900">{title}</h4>

          <p className="text-sm text-gray-600 mt-1 leading-relaxed max-w-[260px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
