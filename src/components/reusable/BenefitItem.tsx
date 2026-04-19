"use client";

import { motion } from "framer-motion";
import React from "react";

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg: string;
  color: string;
}

export default function BenefitItem({
  icon,
  title,
  description,
  bg,
  color,
}: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`w-10 h-10 flex items-center justify-center rounded-full ${bg} ${color}`}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
