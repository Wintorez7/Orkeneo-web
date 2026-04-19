"use client";

import Image from "next/image";
import Link from "next/link";

const playbooks = [
  {
    tag: "OPERATIONS",
    title: "Reduce Food Waste by 30%",
    desc: "Implement real-time waste tracking and dynamic portion control based on historical order volume patterns.",
    time: "8 min read",
    image: "/images/food.png",
  },
  {
    tag: "LABOR",
    title: "Optimizing Peak Hour Staffing",
    desc: "Use predictive labor modeling to align staff schedules with customer inflow trends, saving 12% on monthly wages.",
    time: "12 min read",
    image: "/images/labor.png",
  },
  {
    tag: "PROFIT",
    title: "Menu Engineering for Profit",
    desc: "A data-driven approach to menu placement and pricing psychology to maximize contribution margins.",
    time: "10 min read",
    image: "/images/menu.png",
  },
];

export default function PlaybooksSection() {
  return (
    <section className="bg-[#F8F9FC] px-4 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* ================= FEATURED ================= */}
        <div className="grid md:grid-cols-2 rounded-[32px] overflow-hidden bg-white shadow-sm">
          {/* LEFT */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">
              Featured Strategy
            </p>

            <h2 className="mt-3 text-[26px] md:text-[32px] font-bold text-[#171C24] leading-snug">
              The 2024 Guide to <br /> Predictive Inventory Management
            </h2>

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              Learn how top-performing restaurants are using historical data and
              local weather patterns to cut inventory costs by up to 22% while
              eliminating stockouts.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link href="/playbooks/read-playbook">
                <button className="px-5 py-2.5 rounded-full bg-[#194FD7] text-white text-sm font-medium shadow-md hover:bg-[#163bb3] transition">
                  Read Playbook →
                </button>
              </Link>

              <span className="text-sm text-gray-400">15 min read</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-65 md:h-full">
            <Image
              src="/images/playbook.png"
              alt="featured"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-3 mt= gap-6">
          {playbooks.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="relative h-45">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* TAG */}
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-4 flex justify-between items-center text-sm">
                  <span className="text-gray-400">{item.time}</span>

                  <button className="text-[#194FD7] font-medium hover:underline">
                    View Playbook ›
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
