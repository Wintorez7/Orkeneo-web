"use client";

import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp, scaleIn } from "@/lib/animations/variants";

export default function Step2({ data, setData, next }: any) {
  return (
    <MotionStagger>
      <div className="space-y-6">
        <MotionWrapper variants={fadeUp}>
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Monthly Revenue
            </p>

            <div className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold">
              ₹{data.revenue.toLocaleString()}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper variants={scaleIn} delay={0.1}>
          {/* SLIDER */}
          <input
            type="range"
            min={50000}
            max={5000000}
            step={50000}
            value={data.revenue}
            onChange={(e) =>
              setData((d: any) => ({ ...d, revenue: +e.target.value }))
            }
            className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
          />

          {/* LABELS */}
          <div className="flex justify-between text-[11px] text-gray-400 mt-2">
            <span>CONSERVATIVE</span>
            <span>TYPICAL</span>
            <span>AGGRESSIVE</span>
          </div>
        </MotionWrapper>

        {/* LOSS BOX */}
        <MotionWrapper variants={fadeUp} delay={0.2}>
          <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-500 mb-2">You're losing</p>

            <p className="text-2xl md:text-3xl font-bold text-indigo-600">
              ₹18,000–₹32,000/month
            </p>

            <p className="text-xs text-gray-400 mt-2">
              This comes from daily prep, staffing, and menu decisions — not
              obvious mistakes
            </p>
          </div>
        </MotionWrapper>

        {/* INSIGHTS */}
        <MotionWrapper variants={fadeUp} delay={0.3}>
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <p className="text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6d28d9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
              LIVE AI INSIGHTS
            </p>

            <ul className="text-sm text-gray-600 ml-2 space-y-2">
              <li>• Over-prepping during low demand hours</li>
              <li>• Idle staff during off-peak periods</li>
              <li>• Low-margin items being pushed unintentionally</li>
            </ul>

            {/* RECOVERY BAR */}
            <div className="mt-4 bg-white/70 border border-indigo-100 rounded-full px-4 py-2 text-center text-sm font-semibold text-indigo-600">
              +₹4,500–₹6,500/day recoverable
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp} delay={0.4}>
          {/* BUTTON */}
          <button
            onClick={next}
            className="w-full h-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            See My Profit Breakdown →
          </button>
        </MotionWrapper>

        <MotionWrapper variants={fadeUp} delay={0.5}>
          {/* FOOTER */}
          <p className="text-[11px] text-gray-400 text-center">
            No signup required • Instant results
          </p>
        </MotionWrapper>
      </div>
    </MotionStagger>
  );
}
