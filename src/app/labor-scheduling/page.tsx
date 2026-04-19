"use client";

import Image from "next/image";
import CTASection from "@/components/CTASection";
import ComparisonSection from "@/components/ComparisonSection";

import {
  STAFFING_CARDS,
  STAFFING_STEPS,
  STAFFING_STATS,
  STAFFING_COMPARISON,
  STAFFING_HERO,
} from "@/lib/staffing.data";

interface CostCardProps {
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  cost: string;
  costLabel: string;
  costColor: string;
}

const CostCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  cost,
  costLabel,
  costColor,
}: CostCardProps) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition border border-gray-100">
    <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center mb-4`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>

    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>

    <div className="flex items-baseline gap-2">
      <span className={`text-2xl md:text-3xl font-bold ${costColor}`}>
        {cost}
      </span>
      <span className={`text-sm font-medium ${costColor} opacity-80`}>
        {costLabel}
      </span>
    </div>
  </div>
);

export default function StaffingHero() {
  const logos = ["Zoho POS", "GoFrugal", "Vyapar", "Petpooja"];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-[#F5F6FA] mt-20 py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-full mb-6">
              ↘ {STAFFING_HERO.tag}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              You're losing <br />
              <span className="text-[#2F5BFF]">{STAFFING_HERO.highlight}</span>
              <br />
              on inefficient staffing
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl">
              {STAFFING_HERO.subtitle}
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#2F5BFF] text-white px-6 py-3 rounded-full font-bold">
                {STAFFING_HERO.primaryText}
              </button>
              <button className="bg-gray-100 px-6 py-3 rounded-full font-bold">
                {STAFFING_HERO.secondaryText}
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {STAFFING_HERO.users.map((u, i) => (
                  <div key={i} className="w-8 h-8 flex items-center justify-center bg-gray-300 text-xs font-bold rounded-full border-2 border-white">
                    {u}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {STAFFING_HERO.usersText}
              </p>
            </div>
          </div>

          <Image
            src={STAFFING_HERO.image}
            alt="graph"
            width={700}
            height={500}
          />
        </div>
      </section>

      {/* CARDS */}
      <section className="w-full py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            The hidden cost of manual planning
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {STAFFING_CARDS.map((card, i) => (
              <CostCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="w-full py-20 px-6 bg-[#F5F6FA] text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16">
          How Orkeneo schedules your staff
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {STAFFING_STEPS.map((step) => (
            <div key={step.id}>
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center mx-auto">
                {step.id}
              </div>
              <h3 className="mt-6 font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <ComparisonSection {...STAFFING_COMPARISON} />

      {/* STATS */}
      <section className="w-full bg-[#2F5BFF] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-10">
          {STAFFING_STATS.map((stat, i) => (
            <div key={i}>
              <h2 className="text-4xl font-bold text-white">{stat.value}</h2>
              <p className="text-white/70 text-sm mt-2 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Stop losing ₹18,000 every month on staffing"
        subtitle="Start using AI to decide how to schedule your team — every day."
        primaryText="Get My AI Staffing Plan"
        secondaryText="Start Saving Today"
      />
    </>
  );
}