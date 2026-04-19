import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import React from "react";

export default function ProfitRecoverySection() {
  return (
    <section className="py-16 md:py-24 px-4 w-full flex justify-center mt-12 bg-gray-50/50 rounded-[3rem]">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        {/* Top Split Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Chart Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-gray-100">
            <h3 className="text-[1.35rem] font-medium text-gray-800 text-left">
              Profit Growth Trajectory
            </h3>
            <p className="text-gray-400 text-sm mt-1 mb-10 text-left">
              Projected recovery curve with Orkeneo AI
            </p>

            <div className="relative h-[280px] w-full max-w-sm mx-auto flex items-end justify-center gap-3">
              {/* Left Bar (Before) */}
              <div className="w-1/2 h-full bg-[#FAEEEE] rounded-t-[2.5rem] border-t-4 border-[#E04B4B] flex flex-col justify-center items-center relative transition-all duration-500">
                <div className="absolute -top-12 left-0 right-0 text-center">
                  <span className="text-[10px] font-bold text-[#D04A4A] block tracking-wide">
                    BEFORE ORKENEO
                  </span>
                  <span className="text-[10px] font-bold text-[#D04A4A] block tracking-wide">
                    (₹72.5K LOSS)
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-[#D04A4A] text-xl font-bold">
                    ₹72.5K Loss
                  </div>
                  <div className="text-[#D04A4A]/70 text-xs font-medium mt-1">
                    Without Orkeneo
                  </div>
                </div>
              </div>

              {/* Right Bar (After) */}
              <div className="w-1/2 h-[45%] bg-[#D2E7DB] rounded-t-[1.5rem] md:rounded-t-[2rem] border-t-4 border-[#22805A] flex flex-col justify-center items-center relative transition-all duration-500">
                {/* Overlapping Status Pill */}
                <div className="absolute -top-9 ml-8 md:-left-8 z-10 whitespace-nowrap bg-[#0C6D48] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-lg">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +₹62.5K PROFIT
                </div>

                <div className="text-center mt-2">
                  <div className="text-[#1A734D] text-lg font-bold">
                    ₹10K Loss
                  </div>
                  <div className="text-[#21855F] text-xs font-medium mt-1">
                    Predictive Ops
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Text */}
          <div className="text-left px-2 md:px-0">
            <h2 className="text-3xl font-medium text-gray-800 mb-10">
              What changes in your kitchen:
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-[1.65rem] h-[1.65rem] text-[#279B64] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">
                    Prep quantities become demand-driven (not guesswork)
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Our prep-architect predicts item-level demand 24h in
                    advance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-[1.65rem] h-[1.65rem] text-[#279B64] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">
                    Staff schedules adjust to real peak hours
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Auto-schedule staff based on projected footfall peaks and
                    valleys.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-[1.65rem] h-[1.65rem] text-[#279B64] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">
                    High-margin items are prioritized automatically
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Smart inventory clearance through dynamic menu highlights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-[1.65rem] h-[1.65rem] text-[#279B64] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-gray-900 font-bold text-base mb-1">
                    Daily decisions are system-driven — not manual
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Managers receive a 10-point action plan every morning at
                    8:00 AM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col items-center mt-6">
          <button className="bg-[#2E62F1] hover:bg-[#204AC4] text-white text-[1.1rem] font-bold py-4.5 px-8 rounded-2xl w-full max-w-[600px] transition-colors flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(46,98,241,0.25)]">
            Start Recovering ₹72,500/month{" "}
            <ArrowRight className="w-5 h-5 ml-1" />
          </button>

          <div className="text-[#DA3535] text-[13px] font-bold mt-5 mb-5 tracking-wide">
            Limited pilot spots available this month
          </div>

          <button className="bg-transparent hover:bg-gray-50 text-gray-700 font-bold text-[1.05rem] py-4.5 px-8 rounded-2xl border-2 border-gray-200 w-full max-w-[600px] transition-colors">
            See Demo First
          </button>
        </div>
      </div>
    </section>
  );
}
