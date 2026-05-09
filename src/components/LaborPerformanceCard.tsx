import Image from "next/image";

export default function LaborPerformanceCard() {
  return (
    <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 w-full max-w-[500px] mx-auto relative overflow-hidden font-sans">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-[10px] md:text-xs font-bold tracking-widest text-slate-500 uppercase mb-1">
            Labor Cost Efficiency
          </p>
          <h3 className="text-xl md:text-[26px] font-bold text-slate-900 tracking-tight leading-tight">
            Performance Pulse
          </h3>
        </div>
        <div className="text-right">
          <p className="text-xl md:text-[26px] font-bold text-[#059669] tracking-tight leading-tight">
            +18.4%
          </p>
          <p className="text-[11px] md:text-xs text-slate-500 mt-1 font-medium">
            Avg. Weekly Savings
          </p>
        </div>
      </div>

      {/* Graph */}
      <div className="relative w-full mb-4 flex justify-center px-4">
        <Image
          src="/images/labor-graph.png"
          alt="Labor Performance Graph"
          width={800}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* X-Axis Labels */}
      <div className="flex justify-between items-center px-2 text-[10px] md:text-[11px] font-bold tracking-widest">
        <span className="text-slate-600">MON</span>
        <span className="text-slate-600">TUE</span>
        <span className="text-slate-600">WED</span>
        <span className="text-slate-600">THU</span>
        <span className="text-slate-900">FRI</span>
        <span className="text-slate-900">SAT</span>
      </div>
    </div>
  );
}
