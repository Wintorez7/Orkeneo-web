"use client";

import Image from "next/image";
import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp, scaleIn } from "@/lib/animations/variants";
import { motion } from "framer-motion";
import { useState } from "react";

function getConsistencyLabel(value: number) {
  if (value < 33) return "Low";
  if (value < 66) return "Medium";
  return "High";
}

function getInsight(data: any, result: any) {
  if (data.staffPct > 40) {
    return `Your staffing is over-allocated at ${data.staffPct}%. Adjusting shifts could recover ~₹${Math.round((result.staff * 0.1) / 1000) * 1000}/month.`;
  }
  if (data.foodPct > 35) {
    return `Your food cost at ${data.foodPct}% is above industry average. Better prep planning could save ~₹${Math.round((result.food * 0.15) / 1000) * 1000}/month.`;
  }
  return `Your operations look efficient. Fine-tuning demand planning could recover ~₹${Math.round((result.demand * 0.5) / 1000) * 1000}/month.`;
}

export default function Step3({ data, setData, result, next }: any) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<string>("");
  const [selectedTool, setSelectedTool] = useState<string>("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };
  return (
    <MotionStagger className="space-y-8">
      {/* TOP GRID */}
      <MotionWrapper variants={fadeUp}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* FOOD */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500 font-medium">FOOD COST %</span>
                <motion.span
                  key={data.foodPct}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md text-xs font-semibold"
                >
                  {data.foodPct}%
                </motion.span>
              </div>

              <input
                type="range"
                min={10}
                max={60}
                step={1}
                value={data.foodPct}
                onChange={(e) =>
                  setData((d: any) => ({ ...d, foodPct: +e.target.value }))
                }
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #4f46e5 ${
                    ((data.foodPct - 10) / (60 - 10)) * 100
                  }%, #e5e7eb ${
                    ((data.foodPct - 10) / (60 - 10)) * 100
                  }%)`,
                }}
              />

              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>LOW WASTE</span>
                <span>HIGH WASTE</span>
              </div>
            </div>

            {/* STAFF */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500 font-medium">STAFF COST %</span>
                <motion.span
                  key={data.staffPct}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md text-xs font-semibold"
                >
                  {data.staffPct}%
                </motion.span>
              </div>

              <input
                type="range"
                min={10}
                max={60}
                step={1}
                value={data.staffPct}
                onChange={(e) =>
                  setData((d: any) => ({ ...d, staffPct: +e.target.value }))
                }
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #4f46e5 ${
                    ((data.staffPct - 10) / (60 - 10)) * 100
                  }%, #e5e7eb ${
                    ((data.staffPct - 10) / (60 - 10)) * 100
                  }%)`,
                }}
              />

              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>EFFICIENT</span>
                <span>OVERSTAFFED</span>
              </div>
            </div>

            {/* ORDER CONSISTENCY */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500 font-medium">
                  ORDER CONSISTENCY
                </span>
                <motion.span
                  key={data.consistency}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  className="bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-md text-xs font-semibold"
                >
                  {getConsistencyLabel(data.consistency)}
                </motion.span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={data.consistency}
                onChange={(e) =>
                  setData((d: any) => ({ ...d, consistency: +e.target.value }))
                }
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #4f46e5 ${
                    data.consistency
                  }%, #e5e7eb ${data.consistency}%)`,
                }}
              />

              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>STABLE</span>
                <span>VOLATILE</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (AI DIAGNOSIS) */}
          <div className="bg-[#F0F3FF] rounded-2xl p-5">
            <p className="text-sm font-semibold mb-4 flex items-center gap-2">
              💡 AI DIAGNOSIS
            </p>

            <div className="space-y-3 text-sm">
              {/* FOOD */}
              <div className="flex justify-between">
                <span className="text-[#434655]">Food cost inefficiency</span>
                <motion.span
                  key={result.food}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#BA1A1A] font-bold"
                >
                  ₹{Math.round(result.food).toLocaleString()}/mo
                </motion.span>
              </div>

              {/* STAFF */}
              <div className="flex justify-between">
                <span className="text-[#434655]">Staff misalignment</span>
                <motion.span
                  key={result.staff}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#BA1A1A] font-bold"
                >
                  ₹{Math.round(result.staff).toLocaleString()}/mo
                </motion.span>
              </div>

              {/* DEMAND */}
              <div className="flex justify-between">
                <span className="text-[#434655]">Demand mismatch</span>
                <motion.span
                  key={result.demand}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#BA1A1A] font-bold"
                >
                  ₹{Math.round(result.demand).toLocaleString()}/mo
                </motion.span>
              </div>
            </div>

            {/* TOTAL */}
            <div className="mt-5 pt-3 border-t">
              <p className="text-xs text-gray-600 font-bold">
                TOTAL ESTIMATED LEAKAGE
              </p>

              <motion.p
                key={result.total}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold text-gray-900"
              >
                ₹{Math.round(result.total).toLocaleString()}
                <span className="text-sm text-gray-600">/month</span>
              </motion.p>
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* REFINE SECTION */}
      <MotionWrapper variants={fadeUp}>
        <div className="w-full">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Refine your analysis (optional)
          </p>

          <p className="text-xs text-gray-400 mb-4">
            Help Orkeneo personalize your profit recovery plan
          </p>

          <div className="w-full flex justify-between">
            {/* LEFT TAGS */}
            <div className="flex flex-wrap gap-2">
              {["Food waste", "Staffing", "Demand planning"].map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => toggleTag(item)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-all ${
                    selectedTags.includes(item)
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-200 text-gray-600 hover:bg-indigo-50"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* RIGHT TAGS */}
            <div className="flex flex-wrap gap-5">
              {["Zoho", "GoFrugal", "Other"].map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedTool(item)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition-all ${
                    selectedTool === item
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-200 text-gray-600 hover:bg-indigo-50"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* INSIGHT BOX */}
      <MotionWrapper variants={scaleIn} delay={0.1}>
        <div className="bg-green-50 border border-green-100 rounded-4xl space-y-1.5 p-7 text-sm text-[#005236]">
          {" "}
          <div className="w-full flex items-center gap-2">
            {" "}
            <Image
              src="/images/staff-insights.png"
              alt=""
              width={20}
              height={20}
            />{" "}
            <p className="font-semibold">Insight:</p>{" "}
          </div>{" "}
          <p className="text-sm text-[#005236]">{getInsight(data, result)}</p>
        </div>
      </MotionWrapper>

      {/* BUTTON */}
      <MotionWrapper variants={fadeUp} delay={0.2}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={next}
          className="w-full h-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          See My Full Profit Recovery Plan →
        </motion.button>
      </MotionWrapper>

      <MotionWrapper variants={fadeUp} delay={0.3}>
        <p className="text-[11px] text-gray-400 text-center">
          No signup required • Instant results
        </p>
      </MotionWrapper>
    </MotionStagger>
  );
}
