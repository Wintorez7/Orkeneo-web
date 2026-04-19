"use client";

import { motion } from "framer-motion";

import { easeOut } from "@/lib/animations/transitions";

export default function MotionWrapper({
  children,
  variants,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  variants: any;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
