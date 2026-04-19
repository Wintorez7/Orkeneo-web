"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart3, Clock, Package } from "lucide-react";
import Link from "next/link";

const filters = ["All", "Cloud Kitchen", "QSR", "Cafe", "Multi-location"];

function CaseStudies() {
  const [active, setActive] = useState("All");

  const cards = [
    {
      tag: "QSR",
      title: "Spice Route Express",
      desc: "Implemented AI demand forecasting to predict peak hours, enabling precise prep work and eliminating morning rush inventory stockouts.",
      stats: [
        { value: "+35%", label: "REVENUE" },
        { value: "-45%", label: "WASTE" },
      ],
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
    },
    {
      tag: "CAFE",
      title: "The Artisan Cafe",
      desc: "Leveraged smart scheduling to align staff shifts with real-time footfall patterns, significantly decreasing idle time during off-peak hours.",
      stats: [
        { value: "+28%", label: "PROFIT" },
        { value: "-30%", label: "LABOR COST" },
      ],
      icon: <Clock className="w-5 h-5 text-purple-600" />,
    },
    {
      tag: "CLOUD KITCHEN",
      title: "Ghost Kitchen Hub",
      desc: "Multi-brand inventory optimization allowed them to share ingredients across 5 brands, drastically cutting ingredient spoilage.",
      stats: [
        { value: "55%", label: "REDUCTION" },
        { value: "+15%", label: "AOV" },
      ],
      icon: <Package className="w-5 h-5 text-green-600" />,
    },
  ];

  return (
    <>
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* HERO TEXT */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 leading-tight">
              Real Restaurants.{" "}
              <span className="text-[#3B6AF6]">Real Results.</span>
            </h1>

            <p className="mt-4 text-gray-500 text-[15px] md:text-[16px]">
              See how restaurants increased profits and reduced waste using
              Orkeneo's predictive intelligence.
            </p>
          </div>

          {/* FILTERS */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === item
                    ? "bg-[#3B6AF6] text-white shadow"
                    : "bg-[#F0F3FF] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* FEATURED CARD */}
          <div className="mt-12 grid md:grid-cols-2 rounded-[28px] overflow-hidden bg-white shadow-sm">
            {/* LEFT IMAGE */}
            <div className="relative h-65 md:h-105">
              <Image
                src="/images/case-studies.png" // replace
                alt="case study"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              {/* Tag */}
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                Featured Success Story
              </p>

              {/* Title */}
              <h2 className="mt-3 text-[24px] md:text-[28px] font-semibold text-gray-900">
                The Gourmet Group
              </h2>

              {/* Description */}
              <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
                A multi-chain fine dining establishment optimized their entire
                supply chain using Orkeneo's demand forecasting, resulting in
                unprecedented growth.
              </p>

              {/* Stats */}
              <p className="mt-6 text-[28px] md:text-[32px] font-bold text-green-600">
                +42%{" "}
                <span className="text-sm font-medium text-gray-600">
                  PROFIT INCREASE
                </span>
              </p>

              {/* Button */}
              <Link href="/case-studies/story">
                <button className="mt-6 w-fit cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition">
                  Read Article →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* TOP STATS BAR */}
          <div className="bg-linear-to-r from-[#1D4ED8] to-[#3B6AF6] rounded-[40px] px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center text-white text-center gap-6">
            <div>
              <p className="text-[28px] md:text-[32px] font-bold">₹50,000</p>
              <p className="text-sm text-white/80">Avg. Monthly Savings</p>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20"></div>

            <div>
              <p className="text-[28px] md:text-[32px] font-bold">55%</p>
              <p className="text-sm text-white/80">Waste Reduction</p>
            </div>

            <div className="hidden md:block w-px h-10 bg-white/20"></div>

            <div>
              <p className="text-[28px] md:text-[32px] font-bold">20%</p>
              <p className="text-sm text-white/80">Labor Cost Reduction</p>
            </div>
          </div>

          {/* CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] rounded-[28px] p-6  hover:shadow-md transition"
              >
                {/* TOP */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-semibold bg-[#F0F3FF] text-gray-600 px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                  {card.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>

                {/* DIVIDER */}
                <div className="mt-6 border-t border-gray-200"></div>

                {/* STATS */}
                <div className="mt-4 flex justify-between">
                  {card.stats.map((stat, idx) => (
                    <div key={idx}>
                      <p className="text-green-600 font-semibold text-lg">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-gray-400 uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 p-6">
        {/* Main Card Container */}
        <div className="relative w-full max-w-6xl bg-[#F5F7FB] rounded-[32px] overflow-hidden py-16  px-6 ">
          {/* 
           BACKGROUND GLOWS 
           These create the specific violet effects in the top-right and bottom-left 
        */}

          {/* Top Right Violet Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-[#9366D4] opacity-15 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4" />

          {/* Bottom Left Blue/Violet Glow */}
          <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#194FD7] opacity-10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#171C24] tracking-tight">
              See what Orkeneo can do for you
            </h2>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              {/* Primary Button: Calculate My Savings */}
              <button className="bg-linear-to-r from-[#194FD7] to-[#6B38D4] hover:opacity-90 text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-purple-900/10 min-w-50">
                Calculate My Savings
              </button>

              {/* Secondary Button: Book a Demo */}
              <button className="bg-white hover:bg-gray-50 text-[#194FD7] font-semibold py-3.5 px-8 rounded-full border-2 border-[#194FD7] transition-all shadow-sm min-w-40">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseStudies;
