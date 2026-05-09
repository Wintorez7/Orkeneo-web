import Image from "next/image";
import { motion } from "framer-motion";

export default function CommandCenterCard() {
  return (
    <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-2xl shadow-blue-900/5 border border-slate-100 w-full max-w-2xl mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
          Command Center Live View
        </h3>
        <div className="bg-[#F0F5FF] text-[#2563EB] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wide">
          CONNECTED: 42 SITES
        </div>
      </div>

      {/* Global Margin Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-slate-800 tracking-wide uppercase">
            Global Margin
          </span>
          <span className="text-sm font-bold text-[#059669]">+18%</span>
        </div>
        <div className="w-full bg-[#F0F5FF] h-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "75%" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#2563EB] h-full rounded-full"
          />
        </div>
      </div>

      {/* Graph */}
      <div className="relative w-full mt-4 flex justify-center">
        <Image
          src="/images/commend-center-graph.png"
          alt="Command Center Graph"
          width={800}
          height={300}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
