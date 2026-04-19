"use client";

import { motion } from "framer-motion";
import { springSmooth } from "@/lib/animations/transitions";
import { stackCard } from "@/lib/animations/variants";

export default function MotionCard({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={stackCard}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={springSmooth}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
