"use client";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import ComparisonSection from "@/components/ComparisonSection";
import { fadeUp, fadeIn, fadeRight, scaleIn } from "@/lib/animations/variants";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { motion } from "framer-motion";
import MotionStagger from "@/components/motion/MotionStagger";

import {
  STAFFING_CARDS,
  STAFFING_STEPS,
  STAFFING_STATS,
  STAFFING_COMPARISON,
  STAFFING_HERO,
} from "@/lib/staffing.data";

interface CostCardProps {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  cost: string;
  costLabel: string;
  costColor: string;
}

const CostCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  cost,
  costLabel,
  costColor,
}: CostCardProps) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition border border-gray-100">
    <div
      className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-4`}
    >
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>

    <div className="flex items-baseline gap-2">
      <span className={`text-2xl md:text-3xl font-bold ${costColor}`}>
        {cost}
      </span>
      <span className={`text-sm font-medium ${costColor} opacity-80`}>
        {costLabel}
      </span>
    </div>
  </div>
);

export default function StaffingHero() {
  const logos = ["Zoho POS", "GoFrugal", "Vyapar"];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-[#F5F6FA] mt-20 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <MotionStagger className="space-y-2">
            {/* Badge */}
            <MotionWrapper variants={fadeUp}>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-full mb-6">
                ↘ {STAFFING_HERO.tag}
              </div>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                You're losing <br />
                <span className="text-[#2F5BFF]">
                  {STAFFING_HERO.highlight}
                </span>
                <br />
                on inefficient staffing
              </h1>
            </MotionWrapper>

            {/* Subtitle */}
            <MotionWrapper variants={fadeUp}>
              <p className="mt-6 text-gray-600 text-lg max-w-xl">
                {STAFFING_HERO.subtitle}
              </p>
            </MotionWrapper>

            {/* Buttons */}
            <MotionWrapper variants={fadeUp}>
              <div className="mt-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-[#2F5BFF] text-white px-6 py-3 rounded-full font-bold"
                >
                  {STAFFING_HERO.primaryText}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-gray-100 px-6 py-3 rounded-full font-bold"
                >
                  {STAFFING_HERO.secondaryText}
                </motion.button>
              </div>
            </MotionWrapper>

            {/* Users */}
            <MotionWrapper variants={fadeUp}>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {STAFFING_HERO.users.map((u, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-8 h-8 flex items-center justify-center bg-gray-300 text-xs font-bold rounded-full border-2 border-white"
                    >
                      {u}
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  {STAFFING_HERO.usersText}
                </p>
              </div>
            </MotionWrapper>
          </MotionStagger>

          {/* RIGHT IMAGE */}
          <MotionWrapper variants={fadeRight}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.5, // for fade + scale
                y: {
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src={STAFFING_HERO.image}
                alt="graph"
                width={700}
                height={500}
              />
            </motion.div>
          </MotionWrapper>
        </div>
      </section>

      {/* CARDS */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              The hidden cost of manual planning
            </h2>
          </MotionWrapper>

          {/* Cards */}
          <MotionStagger className="grid md:grid-cols-3 gap-6">
            {STAFFING_CARDS.map((card, i) => (
              <MotionWrapper key={i} variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <CostCard {...card} />
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* STEPS */}
      <section className="w-full py-20 px-6 bg-[#F5F6FA] text-center">
        {/* Heading */}
        <MotionWrapper variants={fadeUp}>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            How Orkeneo schedules your staff
          </h2>
        </MotionWrapper>

        {/* WRAPPER (IMPORTANT) */}
        <div className="relative max-w-6xl mx-auto">
          {/* LINE (RESPONSIVE + BEHIND) */}
          <MotionWrapper variants={fadeUp} delay={0.2}>
            <div
              className="
              hidden md:block 
              absolute 
              top-7 
              left-[16.66%] 
              right-[16.66%] 
              h-px 
              bg-gray-300 
              z-0
            "
            />
          </MotionWrapper>

          {/* Steps */}
          <MotionStagger className="grid md:grid-cols-3 gap-10 relative z-10">
            {STAFFING_STEPS.map((step) => (
              <MotionWrapper key={step.id} variants={fadeUp}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group text-center"
                >
                  {/* Circle Wrapper */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      className="
                  w-14 h-14 
                  rounded-full 
                  bg-white 
                  shadow-md 
                  flex items-center justify-center 
                  relative z-10
                "
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-6 font-semibold"
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-gray-600 text-sm mt-2"
                  >
                    {step.desc}
                  </motion.p>
                </motion.div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* COMPARISON */}
      <ComparisonSection {...STAFFING_COMPARISON} />

      {/* STATS */}
      <section className="w-full bg-[#2f3640] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10">
          {STAFFING_STATS.map((stat, i) => (
            <div key={i}>
              <h2 className="text-4xl font-bold text-[#6ef3c5]">
                {stat.value}
              </h2>
              <p className="text-white/70 text-sm mt-2 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Stop losing ₹18,000 every month on staffing"
        subtitle="Start using AI to decide how to schedule your team — every day."
        primaryText="Get My AI Staffing Plan"
        secondaryText="Start Saving Today"
      />
    </>
  );
}
