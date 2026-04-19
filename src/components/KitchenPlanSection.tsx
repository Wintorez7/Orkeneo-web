"use client";

import { Icon } from "@iconify/react";
import KitchenCard from "./KitchenCard";

export default function KitchenPlanSection() {
  const cards = [
    {
      priority: "HIGH",
      time: "Just now",
      title: "Prep +8kg paneer before 6PM",
      description:
        'Localized event "Corporate Mixer" detected nearby. Order volume likely to peak at 7:30 PM.',
      buttonText: "Mark as Ready",
    },
    {
      priority: "HIGH",
      time: "12m ago",
      title: "Add 1 staff → avoid ₹4,500 loss",
      description:
        "In-store wait times rising. Estimated loss if churn continues: ₹4,500 per hour of peak service.",
      buttonText: "Acknowledge Alert",
    },
    {
      priority: "MEDIUM",
      time: "45m ago",
      title: "Promote combo → +₹3,200",
      description:
        'Over-stock of desserts detected. Recommend activating "Dessert Bundle" for delivery apps.',
      buttonText: "Activate Now",
    },
  ] as const;

  return (
    <section className="py-24 bg-linear-to-br from-[#f7f8ff] via-[#f2f4ff] to-[#eef1ff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Kitchen Plan for Today
            </h2>
            <p className="text-gray-600 mt-2">
              Real-time actionable recommendations for your kitchen
            </p>
          </div>

          {/* PROFIT CARD */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full 
            bg-[#0f7a5a] text-white w-fit"
          >
            {/* ICON */}
            <Icon icon="mdi:trending-up" className="text-white" width={22} />

            {/* TEXT */}
            <p className="text-lg sm:text-xl font-semibold">
              +₹2,700 saved today
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <KitchenCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
