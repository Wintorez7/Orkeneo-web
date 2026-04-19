"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

interface CTAProps {
  title: string;
  subtitle?: string;
  primaryText: string;
  secondaryText?: string;
  description?: string;
  avatars?: string[];

  // NEW
  variant?: "blue" | "dark";
  bgImage?: string;

  bgColor?: string;
  helperText?: string;
}

export default function CTASection({
  title,
  subtitle,
  primaryText,
  secondaryText,
  description,
  avatars = [],

  variant = "blue",
  bgImage = "/images/cta-bg.png",

  bgColor = "bg-blue-600",
  helperText,
}: CTAProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Raw mouse coordinates mapped to percentage (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // For the flashlight/glare effect
  const mouseXPixel = useMotionValue(0);
  const mouseYPixel = useMotionValue(0);
  const glareOpacity = useSpring(0, { stiffness: 300, damping: 40 });

  // Spring physics for smooth decelartion when mouse stops or leaves
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  // Map the percentage into rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Dynamic radiant background tracking exact cursor position
  const glareBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseXPixel}px ${mouseYPixel}px, rgba(255,255,255,0.35), transparent 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse position relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize values between -0.5 and 0.5 where 0 is dead center
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);

    // Update pixel tracking for glare
    mouseXPixel.set(mouseX);
    mouseYPixel.set(mouseY);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    // Snap back to 0 perfectly flat
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <section className="w-full py-20 bg-[#f5f6ff]">
      <div
        className="max-w-6xl mx-auto px-6"
        style={{ perspective: 1200 }} // Gives the rotation a 3D depth field!
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`
            relative rounded-4xl mx-auto overflow-hidden
            px-10 md:px-20 py-16 
            text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            ${variant === "blue" ? bgColor : ""}
          `}
        >
          {/*  DARK BACKGROUND IMAGE */}
          {variant === "dark" && (
            <>
              <Image
                src={bgImage}
                alt="CTA Background"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 
              bg-[#0A0D14]/80 md:bg-[#0A0D14]/85 
              backdrop-blur-[2px]"
              />
              <div
                className="absolute inset-0 
              bg-linear-to-r 
              from-[#0A0D14]/95 via-[#0A0D14]/70 to-[#0A0D14]/95"
              />
            </>
          )}

          {/* DYNAMIC GLARE OVERLAY */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
            style={{
              background: glareBackground,
              opacity: glareOpacity,
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10">
            {/* HEADING */}
            <h2
              className={`text-3xl md:text-5xl ${variant === "dark" ? "font-extrabold tracking-tight" : "font-bold"} text-white leading-tight max-w-4xl mx-auto`}
            >
              {title}
            </h2>

            {/* SUBTEXT */}
            {subtitle && (
              <p className="mt-6 text-white/80 text-lg">{subtitle}</p>
            )}

            {/* DESCRIPTION */}
            {description && (
              <p className="mt-6 text-base text-white/80">{description}</p>
            )}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* PRIMARY */}
              <button
                className={`px-8 py-3.5 rounded-full font-semibold shadow-md hover:scale-[1.03] transition ${
                  variant === "dark"
                    ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                    : "bg-white text-blue-600 hover:bg-gray-50"
                }`}
              >
                {primaryText}
              </button>

              {/* SECONDARY */}
              {secondaryText && (
                <button className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
                  {secondaryText}
                </button>
              )}
            </div>

            {/* AVATARS */}
            {avatars.length > 0 && (
              <div className="mt-6 flex justify-center -space-x-3">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative"
                  >
                    <Image
                      src={src}
                      alt={`User ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* HELPER TEXT */}
            {helperText && (
              <p className="mt-6 text-sm text-white/70">{helperText}</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
