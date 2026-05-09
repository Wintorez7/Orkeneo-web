import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, CheckCircle2, Rocket } from "lucide-react";

export default function CloudKitchenForecastCard() {
  return (
    <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 w-full max-w-2xl mx-auto relative overflow-hidden font-sans">
      {/* Top Header Section */}
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-[11px] md:text-xs font-extrabold tracking-widest text-slate-400 uppercase mt-2">
          Today's Revenue Forecast
        </h4>
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[11px] md:text-xs font-bold border border-emerald-100">
          <TrendingUp className="w-3.5 h-3.5" />
          +18% vs last week
        </div>
      </div>

      {/* Value */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          ₹4,28,400
        </h2>
        <div className="flex items-center gap-1.5 text-slate-400 mt-2 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          AI Confidence: 94.2%
        </div>
      </div>

      {/* Graph */}
      <div className="relative w-full mb-8">
        <Image
          src="/images/cloud-kitchen-graph.png"
          alt="Revenue Forecast Graph"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Card 1 */}
        <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100">
          <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
            Waste Factor
          </p>
          <p className="text-2xl font-bold text-slate-900 mb-3">2.4%</p>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "24%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-emerald-600 h-full rounded-full"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F4F7FF] rounded-2xl p-4 border border-blue-50">
          <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
            Staff Utilization
          </p>
          <p className="text-2xl font-bold text-slate-900 mb-3">88%</p>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "88%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="bg-blue-600 h-full rounded-full"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-2">
              Cogs Optimization
            </p>
            <p className="text-2xl font-bold text-slate-900">₹24.8K</p>
          </div>
          <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-emerald-700 tracking-wide">
            <CheckCircle2 className="w-3.5 h-3.5" />
            REDUCED SPEND
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div className="w-full sm:w-[90%] md:w-[80%] mx-auto bg-emerald-50 text-emerald-700 rounded-2xl py-3.5 px-4 flex items-center justify-center gap-2 font-bold text-sm md:text-base text-center hover:bg-emerald-100 cursor-pointer shadow-sm transition-colors">
        <span className="shrink-0">🚀</span>
        <span>₹6,500+ additional profit/day possible</span>
      </motion.div>
    </div>
  );
}
