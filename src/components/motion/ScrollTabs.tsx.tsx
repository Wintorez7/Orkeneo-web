"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabData = [
  {
    id: "cloud-kitchen",
    label: "Cloud Kitchen",
    icon: "mdi:cloud-outline",
    title: "You're losing ₹30,000/month in your cloud kitchen",
    desc: "Over-prepping, stock-outs, and poor choices are eating your margins — Orkeneo fixes it automatically.",
    bgGradient: "from-blue-50 to-blue-100",
    iconColor: "text-blue-300",
    href: "/cloud-kitchen",
  },
  {
    id: "cafe",
    label: "Cafe",
    icon: "mdi:coffee-outline",
    title: "You're losing ₹15,000/month in your café",
    desc: "Orkeneo helps you reduce waste, predict demand, and increase margins — through small decisions you haven't noticed yet.",
    bgGradient: "from-indigo-50 to-purple-50",
    iconColor: "text-indigo-300",
    href: "/cafes",
  },
  {
    id: "fine-dining",
    label: "Fine Dining",
    icon: "mdi:silverware-fork-knife",
    title: "You're losing ₹50,000/month in hidden costs.",
    desc: "Orkeneo brings precision to your kitchen — cutting waste, optimizing demand, and executing prep so you can focus on culinary excellence.",
    bgGradient: "from-gray-900 to-gray-800",
    iconColor: "text-gray-600",
    href: "/fine-dining",
  },
  {
    id: "multi-location-brands",
    label: "Multi-Location Brands",
    icon: "mdi:store-outline",
    title:
      "You're losing control across your outlets — because you lack real visibility",
    desc: "Orkeneo gives you a unified view of all your locations, helping you reduce waste, standardize operations, and uncover lost insights.",
    bgGradient: "from-blue-600 to-indigo-700",
    iconColor: "text-blue-300",
    href: "/multi-location-brands",
  },
];

const CloudKitchenGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full max-w-[440px] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 mx-auto my-auto flex flex-col"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Expected Monthly Revenue
          </p>
          <div className="flex items-center gap-2">
            <h4 className="text-4xl font-bold text-gray-900">₹4,28,400</h4>
          </div>
        </div>
        <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-emerald-100">
          <Icon icon="mdi:trending-up" className="w-4 h-4" />
          <span>+15%</span>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="h-36 w-full flex items-end justify-between gap-3 mb-8">
        {[
          { label: "Mon", val: 30 },
          { label: "Tue", val: 45 },
          { label: "Wed", val: 55 },
          { label: "Thu", val: 40 },
          { label: "Fri", val: 75 },
          { label: "Sat", val: 100 },
          { label: "Sun", val: 90 },
        ].map((day, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <div className="w-full relative flex flex-col justify-end h-28">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${day.val}%` }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="w-full bg-blue-500 rounded-t-lg group-hover:bg-blue-600 transition-colors shadow-sm"
              />
            </div>
            <span className="text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
              {day.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats Below */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
           <div>
             <p className="text-[10px] font-bold text-gray-400 uppercase">Food</p>
             <p className="text-base font-bold text-gray-900 mt-1">34%</p>
           </div>
           <div className="h-1.5 w-full bg-red-400 rounded-full mt-3 opacity-80" />
        </div>
        <div className="flex-1 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
           <div>
             <p className="text-[10px] font-bold text-gray-400 uppercase">Labor</p>
             <p className="text-base font-bold text-gray-900 mt-1">18%</p>
           </div>
           <div className="h-1.5 w-full bg-blue-600 rounded-full mt-3 opacity-80" />
        </div>
        <div className="flex-1 bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
           <div>
             <p className="text-[10px] font-bold text-gray-400 uppercase">Profit</p>
             <p className="text-base font-bold text-gray-900 mt-1">₹32,104</p>
           </div>
           <div className="h-1.5 w-full bg-emerald-400 rounded-full mt-3 opacity-80" />
        </div>
      </div>

      {/* Green Bottom Badge */}
      <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-3 flex items-center justify-center gap-2">
         <Icon icon="mdi:check-circle" className="text-emerald-500 w-4 h-4" />
         <p className="text-xs font-bold text-emerald-700">₹18,000 additional profit this month</p>
      </div>

    </motion.div>
  );
};

const CafeGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full max-w-[440px] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 mx-auto my-auto flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5">
            Demand vs Prep Gap
          </p>
          <div className="flex items-center gap-2">
            <h4 className="text-4xl font-bold text-gray-900">-₹15,000</h4>
          </div>
        </div>
        <div className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-red-100">
          <Icon icon="mdi:alert-circle-outline" className="w-4 h-4" />
          <span>High Waste</span>
        </div>
      </div>

      {/* SVG Line Chart */}
      <div className="relative w-full h-32 mb-6 mt-2">
        <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <line x1="0" y1="30" x2="400" y2="30" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="60" x2="400" y2="60" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="90" x2="400" y2="90" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4 4" />
          
          {/* Actual Demand Line (Blue) */}
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M 0 100 C 50 100, 80 50, 150 60 C 220 70, 250 30, 300 40 C 350 50, 380 90, 400 80"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="4"
            strokeLinecap="round"
          />
          
          {/* Prepared Food Line (Red/Waste) */}
          <motion.path 
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            d="M 0 80 C 50 80, 80 30, 150 40 C 220 50, 250 10, 300 20 C 350 30, 380 60, 400 50"
            fill="none"
            stroke="#f87171"
            strokeWidth="3"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Labels */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-bold text-gray-400">
          <span>8 AM</span>
          <span>12 PM</span>
          <span>4 PM</span>
          <span>8 PM</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-6 mt-4 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-0.5 border-t-2 border-dashed border-red-400" />
          <span className="text-[11px] font-bold text-gray-500">Over-prepped</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-1 bg-indigo-600 rounded-full" />
          <span className="text-[11px] font-bold text-gray-500">Actual Demand</span>
        </div>
      </div>

      {/* Actionable Insights */}
      <div className="flex gap-3">
        <div className="flex-1 bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 flex flex-col justify-between">
           <div className="flex items-center justify-between mb-3">
             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
               <Icon icon="mdi:croissant" className="w-4 h-4" />
             </div>
             <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">-22%</span>
           </div>
           <div>
             <p className="text-[10px] font-bold text-gray-500 uppercase">Pastry Waste</p>
             <p className="text-sm font-bold text-gray-900 mt-0.5">42 items/day</p>
           </div>
        </div>
        <div className="flex-1 bg-indigo-50/50 rounded-2xl p-4 border border-indigo-100 flex flex-col justify-between">
           <div className="flex items-center justify-between mb-3">
             <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
               <Icon icon="mdi:cup-outline" className="w-4 h-4" />
             </div>
             <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">-15%</span>
           </div>
           <div>
             <p className="text-[10px] font-bold text-gray-500 uppercase">Milk Spoilage</p>
             <p className="text-sm font-bold text-gray-900 mt-0.5">15L /week</p>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const FineDiningGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full max-w-[440px] bg-[#0f172a] rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-800 p-8 mx-auto my-auto flex flex-col"
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Hidden Cost Analysis
          </p>
          <div className="flex items-center gap-2">
            <h4 className="text-4xl font-bold text-white">₹50,000</h4>
          </div>
        </div>
        <div className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-red-500/20">
          <Icon icon="mdi:alert-circle" className="w-4 h-4" />
          <span>Leakage detected</span>
        </div>
      </div>

      {/* Horizontal Bar Chart for Costs */}
      <div className="flex flex-col gap-5 mb-8">
        {[
          { label: "Premium Proteins Waste", val: 65, cost: "₹32,500", color: "bg-indigo-500" },
          { label: "Prep Over-staffing", val: 25, cost: "₹12,500", color: "bg-purple-500" },
          { label: "Inventory Spoilage", val: 10, cost: "₹5,000", color: "bg-pink-500" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-2 group">
            <div className="flex justify-between text-xs font-bold text-gray-300">
              <span className="group-hover:text-white transition-colors">{item.label}</span>
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.cost}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: `${item.val}%` }}
                 transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                 className={`h-full ${item.color} rounded-full`}
               />
            </div>
          </div>
        ))}
      </div>

      {/* Circular Gauge / Precision Score */}
      <div className="flex gap-5 items-center bg-gray-800/40 rounded-2xl p-5 border border-gray-700/50">
         <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90 drop-shadow-md">
               {/* Background Circle */}
               <path
                 className="text-gray-700"
                 d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="3"
               />
               {/* Progress Circle */}
               <motion.path
                 initial={{ strokeDasharray: "0, 100" }}
                 whileInView={{ strokeDasharray: "72, 100" }}
                 transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                 className="text-emerald-400"
                 d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="3"
                 strokeLinecap="round"
               />
            </svg>
            <span className="absolute text-sm font-bold text-white">72%</span>
         </div>
         <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1 tracking-wide">Prep Precision Score</p>
            <p className="text-[11px] font-medium text-gray-400 leading-relaxed">Target score is <strong className="text-gray-200">95%</strong>. Orkeneo algorithms can optimize your prep sheets to close this gap.</p>
         </div>
      </div>
    </motion.div>
  );
};

const MultiLocationGraphic = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative z-20 w-full max-w-[440px] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-8 mx-auto my-auto flex flex-col overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="relative z-10 flex justify-between items-start mb-8">
        <div>
          <p className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1.5">
            HQ Command Center
          </p>
          <div className="flex items-center gap-2">
            <h4 className="text-3xl font-bold text-gray-900">12 Outlets</h4>
          </div>
        </div>
        <div className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm border border-blue-100">
          <Icon icon="mdi:map-marker-multiple-outline" className="w-4 h-4" />
          <span>Live Sync</span>
        </div>
      </div>

      {/* Outlet List */}
      <div className="relative z-10 flex flex-col gap-3 mb-6">
        {/* Outlet 1 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
               <Icon icon="mdi:storefront-outline" className="w-5 h-5" />
             </div>
             <div>
               <p className="text-sm font-bold text-gray-900">Downtown Cafe</p>
               <p className="text-[10px] font-bold text-gray-400 mt-0.5">Optimal • 94% Efficiency</p>
             </div>
           </div>
           <div className="text-right">
             <p className="text-xs font-bold text-emerald-500">+₹42K</p>
             <p className="text-[10px] font-bold text-gray-400 mt-0.5">Margin</p>
           </div>
        </div>

        {/* Outlet 2 - Alert */}
        <div className="bg-white border-2 border-red-100 rounded-2xl p-4 flex items-center justify-between shadow-sm relative overflow-hidden">
           <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center relative">
               <span className="absolute -top-1 -right-1 flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
               </span>
               <Icon icon="mdi:alert-outline" className="w-5 h-5" />
             </div>
             <div>
               <p className="text-sm font-bold text-gray-900">Airport T2</p>
               <p className="text-[10px] font-bold text-red-400 mt-0.5">Stock-out Risk • 68% Eff.</p>
             </div>
           </div>
           <div className="text-right">
             <p className="text-xs font-bold text-red-500">-₹18K</p>
             <p className="text-[10px] font-bold text-gray-400 mt-0.5">Leakage</p>
           </div>
        </div>

        {/* Outlet 3 */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center">
               <Icon icon="mdi:store-outline" className="w-5 h-5" />
             </div>
             <div>
               <p className="text-sm font-bold text-gray-900">City Mall Kiosk</p>
               <p className="text-[10px] font-bold text-gray-400 mt-0.5">Review • 81% Efficiency</p>
             </div>
           </div>
           <div className="text-right">
             <p className="text-xs font-bold text-amber-500">+₹12K</p>
             <p className="text-[10px] font-bold text-gray-400 mt-0.5">Margin</p>
           </div>
        </div>
      </div>

      {/* Aggregate Network Insight */}
      <div className="relative z-10 bg-blue-50/50 rounded-2xl p-4 border border-blue-100 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
          <Icon icon="mdi:chart-timeline-variant-shimmer" className="text-blue-600 w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-blue-800">Network Opportunity</p>
          <p className="text-[10px] font-medium text-gray-500 mt-1">Standardizing operations across your 12 outlets could recover <strong className="text-gray-900">₹2.4L/month</strong>.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ScrollTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useGSAP(
    () => {
      const tabs = tabsRef.current;
      const panels = panelsRef.current;
      const indicator = indicatorRef.current;

      if (!tabs[0] || !indicator) return;

      // ── Initial indicator position ──────────────────────────────────────
      gsap.set(indicator, {
        width: tabs[0].offsetWidth,
        x: tabs[0].offsetLeft,
      });

      // ── Master timeline ──────────────────────────────────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=180 top",
          end: "+=3000",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel, index) => {
        if (!panel || !tabs[index]) return;
        if (index === 0) return;

        const prevPanel = panels[index - 1];
        const currentTab = tabs[index];
        const prevTab = tabs[index - 1];

        // 1. Strict TypeScript Check: Ensure prevPanel is not null
        if (!prevPanel) return;

        const panelHeight = containerRef.current?.offsetHeight || 500;

        // Target the internal layout containers directly
        const prevGraphic = prevPanel.querySelector(
          ".md\\:w-1\\/2:first-child",
        );
        const prevText = prevPanel.querySelector(".md\\:w-1\\/2:last-child");
        const currentGraphic = panel.querySelector(".md\\:w-1\\/2:first-child");
        const currentText = panel.querySelector(".md\\:w-1\\/2:last-child");

        // 2. Extra TypeScript Safety: Ensure the targeted inner query elements exist before running timelines
        if (!prevGraphic || !prevText || !currentGraphic || !currentText)
          return;

        tl
          // ── STEP 1: EXIT PREVIOUS PANEL INNER SECTIONS ───────────────────
          .to(
            [prevGraphic, prevText],
            {
              yPercent: -30,
              opacity: 0,
              duration: 0.4,
              ease: "power2.in",
            },
            `step-${index}`,
          )
          // Instantly hide the outer parent panel right after elements exit
          .to(
            prevPanel,
            { autoAlpha: 0, zIndex: 0, duration: 0.01 },
            `step-${index}+=0.4`,
          )

          // ── STEP 2: ENTER CURRENT PANEL INNER SECTIONS ───────────────────
          // Prepare the outer panel layout container on top securely
          .to(
            panel,
            { autoAlpha: 1, zIndex: 10, duration: 0.01 },
            `step-${index}+=0.1`,
          )
          // Animate the content elements vertically up into place cleanly
          .fromTo(
            [currentGraphic, currentText],
            {
              opacity: 0,
              yPercent: 50,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.05,
            },
            `step-${index}+=0.1`,
          )

          // ── STEP 3: TAB NAVIGATION TIMINGS ───────────────────────────────
          .to(prevTab, { color: "#9ca3af", duration: 0.3 }, `step-${index}`)
          .to(currentTab, { color: "#111827", duration: 0.3 }, `step-${index}`)
          .to(
            indicator,
            {
              width: () => currentTab?.offsetWidth ?? 0,
              x: () => currentTab?.offsetLeft ?? 0,
              duration: 0.4,
              ease: "power2.inOut",
            },
            `step-${index}`,
          );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen py-20 bg-white flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl w-full px-6 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold  text-gray-900 mb-4">
            Everything your team relies on,{" "}
            <span className="text-blue-600">working together</span>
          </h2>
          <p className="text-gray-500 text-lg">
            The hub for the workflows behind your team, keeping key tasks
            connected in one place.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          ref={navRef}
          className="relative w-full max-w-4xl border-b border-gray-200 mb-10 flex justify-between sm:justify-center sm:gap-12"
        >
          {tabData.map((tab, idx) => (
            <button
              key={tab.id}
              ref={(el) => {
                tabsRef.current[idx] = el;
              }}
              // Base setup: Make only the first one dark initially, the rest gray
              className={`pb-4 px-2 text-sm md:text-lg font-semibold flex items-center gap-2 ${
                idx === 0 ? "text-gray-900" : "text-[#9ca3af]"
              }`}
            >
              <Icon icon={tab.icon} width={24} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
          <div
            ref={indicatorRef}
            // Removed transition classes from here so it doesn't fight GSAP
            className="absolute -bottom-px -left-12 h-0.75 bg-blue-600 rounded-t-md"
          />
        </div>

        {/* Stacking Panels */}
        <div className="relative w-full max-w-5xl h-[500px] grid [grid-template-areas:'stack'] overflow-hidden">
          {tabData.map((tab, idx) => (
            <div
              key={tab.id}
              ref={(el) => {
                panelsRef.current[idx] = el;
              }}
              className="[grid-area:stack] w-full flex flex-col md:flex-row items-center gap-12"
              style={{
                opacity: idx === 0 ? 1 : 0,
                visibility: idx === 0 ? "visible" : "hidden",
                position: "absolute",
                zIndex: idx === 0 ? 1 : 0,
              }}
            >
              {/* Graphic side */}
              <div className={`w-full md:w-1/2 h-[400px] flex items-center justify-center relative ${(tab.id === 'cloud-kitchen' || tab.id === 'cafe' || tab.id === 'fine-dining' || tab.id === 'multi-location-brands') ? '' : 'rounded-[32px] border border-gray-100 shadow-inner overflow-hidden p-4 md:p-8'}`}>
                {(tab.id !== "cloud-kitchen" && tab.id !== "cafe" && tab.id !== "fine-dining" && tab.id !== "multi-location-brands") && (
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${tab.bgGradient} opacity-80`}
                  />
                )}
                
                {tab.id === "cloud-kitchen" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <CloudKitchenGraphic />
                  </div>
                ) : tab.id === "cafe" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <CafeGraphic />
                  </div>
                ) : tab.id === "fine-dining" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <FineDiningGraphic />
                  </div>
                ) : tab.id === "multi-location-brands" ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <MultiLocationGraphic />
                  </div>
                ) : (
                  <Icon
                    icon={tab.icon}
                    className={`${tab.iconColor} w-32 h-32 relative z-10`}
                  />
                )}
              </div>

              {/* Text side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <Icon icon={tab.icon} className="text-blue-600" width={24} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {tab.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {tab.desc}
                </p>
                <Link
                  href={tab.href}
                  className="w-fit mt-8 px-6 py-3 bg-white border border-gray-200 shadow-sm hover:border-blue-600 hover:text-blue-600 text-gray-900 font-semibold rounded-full transition-all flex items-center gap-2 mx-auto md:mx-0 group"
                >
                  Explore {tab.label}
                  <Icon
                    icon="mdi:arrow-right"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
