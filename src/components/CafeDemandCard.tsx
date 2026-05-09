import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function CafeDemandCard() {
  return (
    <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 w-full max-w-2xl mx-auto relative overflow-hidden font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
            Demand Volatility Index
          </h3>
          <p className="text-slate-400 text-xs md:text-sm mt-1">
            Real-time prediction across peak hours
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#6AF0B5] text-slate-900 px-3 py-1.5 rounded-full text-[11px] md:text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          AI Live
        </div>
      </div>

      {/* Graph */}
      <div className="relative w-full mb-6 flex justify-center">
        <Image
          src="/images/Cafe-graph.png"
          alt="Demand Volatility Graph"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-slate-100 mb-6"></div>

      {/* Bottom Metrics */}
      <div className="grid grid-cols-3 gap-4 text-left">
        <div>
          <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-1.5">
            Morning
          </p>
          <p className="text-base md:text-[22px] font-black text-slate-900 tracking-tight">
            94% Capacity
          </p>
        </div>
        <div>
          <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-1.5">
            Afternoon
          </p>
          <p className="text-base md:text-[22px] font-black text-blue-600 tracking-tight">
            32% Drop
          </p>
        </div>
        <div>
          <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-1.5">
            Profit Peak
          </p>
          <p className="text-base md:text-[22px] font-black text-[#059669] tracking-tight">
            6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}
