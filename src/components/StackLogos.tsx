"use client";

import React from "react";
import { motion } from "framer-motion";
import MotionWrapper from "@/components/motion/MotionWrapper";
import MotionStagger from "@/components/motion/MotionStagger";
import { fadeUp } from "@/lib/animations/variants";

// CSS for the marquee animation — add this to your globals.css
// @keyframes marquee {
//   0% { transform: translateX(0%); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   display: flex;
//   animation: marquee 20s linear infinite;
//   width: max-content;
// }

const brandDetails: Record<string, string> = {
  "Zoho POS": "Sync orders, billing & inventory in real-time",
  GoFrugal: "Automate store operations and demand tracking",
  Vyapar: "Manage accounting and stock seamlessly",
};

const logos = ["Zoho POS", "GoFrugal", "Vyapar"];

// Repeat 4x so translateX(-50%) always lands on an exact duplicate → seamless loop
const repeatedLogos = [...logos, ...logos, ...logos, ...logos,...logos,...logos];

export default function StackLogos() {
  return (
    <section className="w-full py-16 relative overflow-hidden bg-linear-to-b from-white to-blue-50">
      {/* Gradient fade edges — on the section (full-width), NOT inside the constrained container */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Heading — centered in a constrained container */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <MotionStagger>
          <MotionWrapper variants={fadeUp}>
            <p className="text-[11px] tracking-[0.25em] uppercase text-indigo-500 font-semibold">
              Works with your existing stack
            </p>
          </MotionWrapper>
        </MotionStagger>
      </div>

      {/* 
        Marquee wrapper — full section width (NOT inside max-w-6xl).
        This is the key fix: keeping it outside the constrained container
        ensures it spans full width and appears centered on screen.
      */}
      <div className="overflow-hidden w-full">
        <div className="animate-marquee flex gap-20 items-center w-max">
          {repeatedLogos.map((logo, index) => (
            <BrandItem key={index} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Brand Item with Hover Card
const BrandItem = ({ logo }: { logo: string }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Brand Name */}
      <motion.span
        whileHover={{ scale: 1.1, y: -3 }}
        className="text-gray-500 text-lg md:text-xl font-semibold cursor-pointer hover:text-blue-600 transition whitespace-nowrap"
      >
        {logo}
      </motion.span>

      {/* Hover Card */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-10 w-60 p-4 rounded-xl
          bg-white/80 backdrop-blur-lg
          border border-white/20
          shadow-xl z-50"
        >
          <h4 className="font-semibold text-gray-900">{logo}</h4>
          <p className="text-sm text-gray-500 mt-1">{brandDetails[logo]}</p>
          <span className="text-xs text-green-600 mt-2 block font-medium">
            Connected with Orkeneo
          </span>
        </motion.div>
      )}
    </div>
  );
};