"use client";

import MotionStagger from "@/components/motion/MotionStagger";
import MotionWrapper from "@/components/motion/MotionWrapper";
import { fadeUp, scaleIn } from "@/lib/animations/variants";

export default function Step1({ data, setData, next }: any) {
  return (
    <MotionStagger className="w-full">
      {/* RESTAURANT NAME */}
      <MotionWrapper variants={fadeUp}>
        <div className="mb-6">
          <label className="block text-[11px] font-semibold text-gray-700 tracking-widest mb-2 uppercase">
            Restaurant Name
          </label>
          <input
            placeholder="e.g. The Golden Bistro"
            className="w-full h-12 px-4 rounded-xl bg-[#f3f4f6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm placeholder:text-gray-400"
            onChange={(e) =>
              setData((d: any) => ({ ...d, name: e.target.value }))
            }
          />
        </div>
      </MotionWrapper>

      {/* GRID */}
      <MotionWrapper variants={fadeUp} delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* CITY */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 tracking-widest mb-2 uppercase">
              City
            </label>
            <input
              placeholder="e.g. Mumbai"
              className="w-full h-12 px-4 rounded-xl bg-[#f3f4f6] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm placeholder:text-gray-400"
              onChange={(e) =>
                setData((d: any) => ({ ...d, city: e.target.value }))
              }
            />
          </div>

          {/* TYPE */}
          <div>
            <label className="block text-[11px] font-semibold text-gray-700 tracking-widest mb-2 uppercase">
              Restaurant Type
            </label>

            <div className="relative">
              <select
                value={data.type || ""}
                onChange={(e) =>
                  setData((d: any) => ({ ...d, type: e.target.value }))
                }
                className="w-full h-12 px-4 pr-10 rounded-xl bg-white border border-gray-200 shadow-sm
            text-sm text-gray-700 appearance-none
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            hover:border-gray-300 transition-all duration-200"
              >
                <option value="" disabled className="text-gray-400">
                  Select restaurant type
                </option>
                <option value="QSR">QSR (Quick Service)</option>
                <option value="Fine Dine">Fine Dine</option>
                <option value="Cloud Kitchen">Cloud Kitchen</option>
                <option value="Cafe">Cafe</option>
              </select>

              {/* ICON */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </MotionWrapper>

      {/* AI BOX */}
      <MotionWrapper variants={scaleIn} delay={0.2}>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-3 mb-6">
          {/* ICON */}
          <div className="mt-0.5">
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
          </div>

          {/* TEXT */}
          <p className="text-[13px] text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">
              AI Intelligence:
            </span>{" "}
            Our AI analyzes demand patterns, prep behavior, staffing efficiency,
            and menu performance to estimate your profit leakage
          </p>
        </div>
      </MotionWrapper>

      {/* BUTTON */}
      <MotionWrapper variants={fadeUp} delay={0.3}>
        <button
          onClick={next}
          className="w-full h-12 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          Continue
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </MotionWrapper>

      {/* FOOTER TEXT */}
      <MotionWrapper variants={fadeUp} delay={0.4}>
        <p className="text-[11px] text-gray-400 mt-4 text-center">
          No signup required • Instant results
        </p>
      </MotionWrapper>
    </MotionStagger>
  );
}
