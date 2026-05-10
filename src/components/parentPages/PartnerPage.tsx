"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  BadgeCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
// import { useRouter } from 'next/navigation';
import FeatureCard from "@/components/reusable/FeatureCard";
import { Banknote, RefreshCcw, Zap, LineChart } from "lucide-react";
import MotionStagger from "../motion/MotionStagger";
import MotionWrapper from "../motion/MotionWrapper";
import { fadeRight, fadeUp } from "@/lib/animations/variants";
import { motion } from "framer-motion";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import PartnerCard, {
  PartnerCardProps,
} from "@/components/reusable/PartnerCard";
import AudienceCard from "../reusable/AudienceCard";
import { Trash2, TrendingUp, EyeOff, Settings } from "lucide-react";
import ValueCard, { ValueCardProps } from "../reusable/ValueCard";
import BenefitItem from "../reusable/BenefitItem";
import CTASection from "../CTASection";

const features = [
  {
    title: "High-margin revenue",
    description:
      "Unlock aggressive profit shares on high-value AI infrastructure subscriptions.",
    icon: <Banknote className="w-5 h-5 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Recurring income",
    description:
      "Build wealth with monthly renewals that compound as your network grows.",
    icon: <RefreshCcw className="w-5 h-5 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "Fast onboarding",
    description:
      "Go from application to active partner in under 48 hours with dedicated support.",
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-100",
  },
  {
    title: "Real measurable results",
    description:
      "Clients see ROI within weeks, ensuring high retention and satisfied referrals.",
    icon: <LineChart className="w-5 h-5 text-gray-600" />,
    iconBg: "bg-gray-200",
  },
];

const plans: PartnerCardProps[] = [
  {
    title: "Referral Partners",
    subtitle: "QUICK START",
    description:
      "Refer restaurants and earn a one-time commission. No sales or management required.",
    features: ["Earn 15% on referral value", "Zero sales overhead"],
    buttonText: "Select Referral",
  },
  {
    title: "Growth Partners",
    subtitle: "FULL OWNERSHIP",
    description:
      "Sell Orkeneo, earn recurring revenue, and own the long-term relationship with your clients.",
    features: [
      "Earn 25% recurring monthly",
      "Dedicated Partner Manager",
      "Co-branded marketing kits",
    ],
    buttonText: "Get Started",
    variant: "highlight",
    badge: "RECOMMENDED",
  },
  {
    title: "POS & Integration",
    subtitle: "ECOSYSTEM",
    description:
      "Collaborate on native integrations to provide seamless AI insights directly within your platform.",
    features: ["API documentation access", "Joint GTM strategies"],
    buttonText: "Learn More",
  },
];

const items = [
  {
    title: "Restaurant Consultants",
    description: "Augment your strategy with real-time AI data.",
    color: "bg-blue-500",
  },
  {
    title: "POS Resellers",
    description: "Add a high-margin upsell to your hardware sales.",
    color: "bg-purple-500",
  },
  {
    title: "Digital Agencies",
    description: "Move beyond marketing into core operations.",
    color: "bg-green-500",
  },
  {
    title: "Multi-outlet Operators",
    description: "Scale intelligence across your entire portfolio.",
    color: "bg-gray-400",
  },
];

const ValueItems: ValueCardProps[] = [
  {
    icon: <Trash2 className="w-5 h-5" />,
    title: "Reduce waste",
    description:
      "Cut food and beverage waste using predictive inventory models.",
    highlightText: "30–50%",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Increase margins",
    description:
      "Direct bottom-line impact through intelligence-driven decisions.",
    highlightText: "₹20K–₹50K",
    highlightSub: "recovered monthly",
    variant: "highlight",
  },
  {
    icon: <EyeOff className="w-5 h-5" />,
    title: "Eliminate guesswork",
    description: 'Replace "gut feelings" with cold, hard data insights.',
    highlightText: "100% Data-Driven",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Improve ops",
    description: "Streamline staff shifts and prep schedules automatically.",
    highlightText: "2x Efficiency",
  },
];

export default function PartnerPage() {
  //   const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <section className="relative mt-20 overflow-hidden bg-linear-to-br from-[#f5f6fb] via-[#f0f2f8] to-[#e9ecf5] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Badge */}
            <MotionWrapper variants={fadeUp}>
              <div className="inline-block px-4 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
                PARTNER OPPORTUNITY 2024
              </div>
            </MotionWrapper>

            {/* Heading */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Grow with <br /> Orkeneo — Turn restaurant networks into{" "}
                <span className="text-blue-500">recurring revenue</span>
              </h1>
            </MotionWrapper>

            {/* Subtext */}
            <MotionWrapper variants={fadeUp} delay={0.2}>
              <p className="text-lg text-gray-600 max-w-xl">
                Earn monthly income by helping restaurants recover lost profits
                using AI.
              </p>
            </MotionWrapper>

            {/* CTA */}
            <MotionWrapper variants={fadeUp} delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 shadow-md hover:opacity-90 transition"
                >
                  Start Earning with Orkeneo
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                  See How It Works
                </motion.button>
              </div>
            </MotionWrapper>

            {/* Footer */}
            <MotionWrapper variants={fadeUp} delay={0.4}>
              <div>
                <p className="text-sm text-blue-500 font-medium pt-2">
                  💸 Partners earning ₹25K–₹1L/month with Orkeneo
                </p>
                <p className="text-xs text-gray-400">
                  Used across multi-outlet kitchens & growing partner network
                </p>
              </div>
            </MotionWrapper>
          </div>

          {/* RIGHT */}
          <MotionWrapper variants={fadeRight}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-127.5 lg:max-w-137.5 mx-auto">
                <motion.div
                  animate={floatAnimation}
                  transition={floatTransition}
                  className="relative"
                >
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-8 -right-2 sm:-right-8 z-20"
                  >
                    <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-[1.25rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50">
                      <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ECFDF5]"
                      >
                        <BadgeCheck className="w-5 h-5 text-white fill-[#059669]" />
                      </motion.div>

                      <p className="text-[15px] font-bold text-[#171C24]">
                        +₹30,000 recovered
                      </p>
                    </div>
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-gray-100"
                  >
                    {/* Header */}
                    <div className="mb-8 mt-2">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase mb-5"
                      >
                        Orkeneo Intelligence
                      </motion.p>

                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 }}
                        className="text-[14px] font-extrabold text-[#3B82F6] tracking-wider uppercase mb-1.5"
                      >
                        Live Profit Recovery
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="text-[15px] text-gray-500 font-medium"
                      >
                        Real-time insights across active kitchens
                      </motion.p>
                    </div>

                    {/* Block 1 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45 }}
                      whileHover={{ x: 4 }}
                      className="flex gap-5 mb-6"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 6,
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.25 }}
                        className="w-15 h-15 shrink-0 rounded-[1.25rem] bg-[#FAFAFA] flex items-center justify-center border border-gray-100"
                      >
                        <AlertTriangle
                          className="w-6 h-6 text-white fill-[#D36060]"
                          strokeWidth={1}
                        />
                      </motion.div>

                      <div className="flex-1 border border-gray-100 rounded-[1.25rem] p-5 shadow-sm bg-white">
                        <div className="flex justify-between items-center mb-3.5">
                          <span className="font-bold text-[#4B5563] text-[15px]">
                            Operational Leakage
                          </span>

                          <motion.span
                            animate={{
                              opacity: [1, 0.75, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            className="font-extrabold text-[#D36060] text-xl"
                          >
                            -₹14,200
                          </motion.span>
                        </div>

                        <div className="h-2 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            transition={{ duration: 1 }}
                            className="h-full bg-[#D36060] rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 }}
                      whileHover={{ x: 4 }}
                      className="flex gap-5 mb-6"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.25 }}
                        className="w-15 h-15 shrink-0 rounded-[1.25rem] bg-[#F8FAFF] flex items-center justify-center border border-blue-50"
                      >
                        <Sparkles
                          className="w-6 h-6 text-white fill-[#81A8F8]"
                          strokeWidth={1}
                        />
                      </motion.div>

                      <div className="flex-1 border border-blue-100/60 rounded-[1.25rem] p-5 bg-[#F8FAFF]">
                        <div className="mb-3.5">
                          <span className="text-[11px] font-extrabold text-[#3B82F6] tracking-wider uppercase">
                            AI Optimization Active
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="h-2 flex-1 bg-[#E0E7FF] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "68%" }}
                              transition={{ duration: 1 }}
                              className="h-full bg-[#81A8F8] rounded-full"
                            />
                          </div>

                          <motion.span
                            animate={{
                              opacity: [1, 0.75, 1],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                            }}
                            className="text-[13px] font-bold text-[#3B82F6]"
                          >
                            68% Fixed
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Block 3 */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 }}
                      whileHover={{ x: 4 }}
                      className="flex gap-5"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.05,
                        }}
                        transition={{ duration: 0.25 }}
                        className="w-15 h-15 shrink-0 rounded-[1.25rem] bg-[#ECFDF5] flex items-center justify-center border border-emerald-50"
                      >
                        <CheckCircle2
                          className="w-6 h-6 text-white fill-[#34D399]"
                          strokeWidth={1}
                        />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="flex-1 bg-[#111827] rounded-[1.25rem] p-6 shadow-xl relative overflow-hidden flex flex-col justify-center"
                      >
                        {/* Glow */}
                        <motion.div
                          animate={{
                            opacity: [0.15, 0.3, 0.15],
                            scale: [1, 1.08, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 bg-emerald-400/10 blur-2xl"
                        />

                        <span className="relative z-10 text-[10px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-1">
                          Profit Recovered
                        </span>

                        <motion.span
                          animate={{
                            y: [0, -2, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative z-10 text-[34px] leading-none font-extrabold text-white block mt-1"
                        >
                          +₹32,400
                        </motion.span>

                        <span className="absolute bottom-5 right-6 text-[10px] font-bold text-gray-500 tracking-widest uppercase">
                          Weekly
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.35, 0.2],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-linear-to-tr from-blue-200 to-purple-200 rounded-full"
              />
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#F0F3FF] py-16 px-4">
        <MotionStagger className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <FeatureCard
              key={i}
              index={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconBg={item.iconBg}
            />
          ))}
        </MotionStagger>
      </section>

      <section className="bg-[#EEF1F7] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <MotionWrapper variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Choose how you want to grow with Orkeneo
            </h2>
          </MotionWrapper>

          {/* Subtext */}
          <MotionWrapper variants={fadeUp} delay={0.1}>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Flexible partnership models designed for consultants, agencies,
              and ecosystem players.
            </p>
          </MotionWrapper>

          {/* Cards */}
          <MotionStagger className="mt-14 grid gap-10 md:grid-cols-3 items-stretch">
            {plans.map((plan, i) => (
              <PartnerCard key={i} index={i} {...plan} />
            ))}
          </MotionStagger>

          {/* Bottom Bar */}
          <MotionWrapper variants={fadeUp} delay={0.3}>
            <div className="mt-14 bg-[#E4E8F4] rounded-full py-4 px-6 flex flex-col md:flex-row justify-center gap-8 text-sm font-medium text-gray-700">
              <span className="mt-0.5">
                <strong>POTENTIAL EARNINGS:</strong>
              </span>
              <span className="text-[#194FD7] text-md font-bold text-[17px]">
                5 clients <span className="text-black">→ ₹25,000/month</span>
              </span>
              <span className="w-0.5 bg-gray-300 h-6"></span>
              <span className="text-[#194FD7] text-md font-bold text-[17px]">
                20 clients <span className="text-black">→ ₹1,00,000/month</span>
              </span>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <MotionWrapper variants={fadeRight}>
            <div className="relative">
              {/* Image */}
              <motion.div animate={floatAnimation} transition={floatTransition}>
                <Image
                  src="/images/Professional-restaurant.png"
                  alt="Restaurant AI Dashboard"
                  width={600}
                  height={500}
                  className="rounded-3xl w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating Insight */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg w-55"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <p className="text-xs font-semibold text-purple-600 mb-1">
                    ● AI INSIGHT
                  </p>
                  <p className="text-sm text-gray-800 font-medium leading-snug">
                    Reduce prep waste by 12% in Kitchen A
                  </p>
                  <p className="text-sm text-green-600 font-semibold mt-2">
                    +₹18,000 saved
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </MotionWrapper>

          {/* RIGHT CONTENT */}
          <div>
            {/* Heading */}
            <MotionWrapper variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Who should partner with Orkeneo
              </h2>
            </MotionWrapper>

            {/* Description */}
            <MotionWrapper variants={fadeUp} delay={0.1}>
              <p className="mt-4 text-gray-600 max-w-lg">
                If you already work with restaurants — you can turn your network
                into recurring revenue while providing massive value to your
                clients.
              </p>
            </MotionWrapper>

            {/* Cards */}
            <MotionStagger className="mt-8 grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <AudienceCard key={i} index={i} {...item} />
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1F7] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            The value you bring to clients
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-gray-600 max-w-2xl"
          >
            Orkeneo solves the most painful problems in restaurant management.
          </motion.p>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {ValueItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                className="group"
              >
                <ValueCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF1F7] py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 leading-tight"
            >
              Build a recurring revenue stream
            </motion.h2>

            {/* Items */}
            <div className="mt-8 space-y-6">
              {[
                {
                  icon: <BarChart3 className="w-5 h-5" />,
                  title: "Monthly Recurring Revenue (MRR)",
                  description:
                    "Predictable income that grows every single month as you add clients.",
                  bg: "bg-blue-100",
                  color: "text-blue-600",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5" />,
                  title: "High Client Retention",
                  description:
                    "Once integrated, AI intelligence becomes a 'can't-live-without' utility.",
                  bg: "bg-purple-100",
                  color: "text-purple-600",
                },
                {
                  icon: <Zap className="w-5 h-5" />,
                  title: "Immediate Client ROI",
                  description:
                    "Most clients pay for their entire year of Orkeneo in the first 2 months of savings.",
                  bg: "bg-green-100",
                  color: "text-green-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                  }}
                >
                  <BenefitItem {...item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-130 lg:max-w-150">
              <div className="bg-[#F0F3FF] shadow-xs border rounded-[2.5rem] p-8 sm:p-10 w-full">
                <h3 className="text-2xl font-bold text-[#171C24] mb-10">
                  Earning Projection
                </h3>

                <div className="space-y-8">
                  {/* Level 1 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] font-bold text-[#4B5563] tracking-wider uppercase">
                        LEVEL 1: 2 CLIENTS
                      </span>
                      <span className="text-xl font-bold text-[#171C24]">
                        ₹10,000/mo
                      </span>
                    </div>
                    <div className="h-4 w-full bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "15%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-[#194FD7] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Level 2 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] font-bold text-[#4B5563] tracking-wider uppercase">
                        LEVEL 2: 10 CLIENTS
                      </span>
                      <span className="text-xl font-bold text-[#171C24]">
                        ₹50,000/mo
                      </span>
                    </div>
                    <div className="h-4 w-full bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                          ease: "easeOut",
                        }}
                        className="h-full bg-[#194FD7] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Level 3 */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[13px] font-bold text-[#4B5563] tracking-wider uppercase">
                        LEVEL 3: 20 CLIENTS
                      </span>
                      <span className="text-xl font-bold text-[#171C24]">
                        ₹1,00,000/mo
                      </span>
                    </div>
                    <div className="h-4 w-full bg-white rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                        className="h-full bg-[#194FD7] rounded-full"
                      />
                    </div>
                  </div>
                </div>

                <p className="text-[14px] text-center text-[#6B7280] mt-12 font-medium">
                  Projections based on Growth Partner 25% recurring share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#171C24]"
          >
            Three steps to success
          </motion.h2>

          {/* TIMELINE */}
          <div className="relative mt-16">
            {/* CONNECTING LINE (animated) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block absolute top-10 left-1/2 -translate-x-1/2 w-[66%] h-0.5 bg-[#E5E7EB]"
            />

            {/* STEPS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {/* STEP 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="relative mt-2 z-10 w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center text-xl font-bold text-[#1D4ED8]"
                >
                  1
                </motion.div>

                <h3 className="mt-6 text-lg font-bold text-[#171C24]">Apply</h3>

                <p className="mt-2 text-sm text-[#6B7280] max-w-xs">
                  Fill out the simple form and our team will review your profile
                  within 24 hours.
                </p>
              </motion.div>

              {/* STEP 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.35 }}
                  className="relative mt-1 z-10 w-16 h-16 rounded-full bg-[#EDE9FE] flex items-center justify-center text-xl font-bold text-[#7C3AED]"
                >
                  2
                </motion.div>

                <h3 className="mt-6 text-lg font-bold text-[#171C24]">
                  Get Onboarded
                </h3>

                <p className="mt-2 text-sm text-[#6B7280] max-w-xs">
                  Access your dashboard, marketing collateral, and attend a
                  30-min strategy call.
                </p>
              </motion.div>

              {/* STEP 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="relative  mt-1 z-10 w-16 h-16 rounded-full bg-[#D1FAE5] flex items-center justify-center text-xl font-bold text-[#059669]"
                >
                  3
                </motion.div>

                <h3 className="mt-6 text-lg font-bold text-[#171C24]">
                  Start Earning
                </h3>

                <p className="mt-2 text-sm text-[#6B7280] max-w-xs">
                  Integrate your first client and see your recurring commission
                  reflected instantly.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start earning recurring revenue with Orkeneo"
        subtitle="Join the exclusive network of partners transforming the restaurant industry."
        primaryText="Become a Partner"
        helperText="No credit card required. Free 14-day performance audit."
      />
    </div>
  );
}
