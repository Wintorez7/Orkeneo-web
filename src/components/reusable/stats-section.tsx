"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/reusable/button";
import { useRouter } from "next/navigation";
import { BookDemoModal } from "@/components/ui/book-demo-modal";
import { motion } from "framer-motion";

interface StatItemProps {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title: string;
  subtitle: string;
  image: string;
  stats: {
    value: string;
    label: string;
  }[];
  isSet?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col items-center md:items-start bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
  >
    <h3 className="text-[#2F5BFF] text-4xl md:text-5xl font-black mb-2 tracking-tight">
      {value}
    </h3>
    <p className="text-[#4B5563] font-medium text-sm md:text-base">{label}</p>
  </motion.div>
);

export const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  subtitle,
  image,
  stats,
  isSet,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div
      className={`${
        isSet ? "bg-transparent my-0" : "bg-transparent my-16 md:my-24"
      } w-full mx-auto px-8 py-12 md:py-20`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full h-[400px] md:h-[500px] relative rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image
              src={image}
              alt="Modern workspace"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-10">
            <div className={`${isSet ? "text-start" : "text-center lg:text-left"}`}>
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold tracking-widest uppercase text-[#2F5BFF] bg-blue-50/80 border border-blue-100 rounded-full">
                {subtitle}
              </span>
              <h2 className="text-[#111827] text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {title}
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label }) => (
                <StatItem key={label} value={value} label={label} />
              ))}
            </div>

            {/* Buttons */}
            {isSet && (
              <div className="flex justify-start gap-4 pt-4">
                <Button variant="outline" size="md" className="text-gray-700 hover:bg-gray-50 border-gray-200" onClick={() => router.push("/about-us")}>
                  Learn more
                </Button>
                <Button
                  variant="default"
                  size="md"
                  className="bg-[#2F5BFF] hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 transition-all"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Early Access
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
