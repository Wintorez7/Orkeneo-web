"use client";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 2,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const count = useMotionValue(from);

  // Split into two transforms to keep types clean
  const roundedInt = useTransform(count, (v) => Math.round(v)); // MotionValue<number>
  const roundedFloat = useTransform(count, (v) => v.toFixed(decimals)); // MotionValue<string>

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [to, from, duration]);

  return (
    <span className={className}>
      {prefix}
      {decimals > 0 ? (
        <motion.span>{roundedFloat}</motion.span>
      ) : (
        <motion.span>{roundedInt}</motion.span>
      )}
      {suffix}
    </span>
  );
}
