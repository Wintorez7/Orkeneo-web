"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/reusable/button";
import { useRouter } from "next/navigation";
import { BookDemoModal } from "@/components/ui/book-demo-modal";

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
  <div className="flex flex-col items-center md:items-start">
    <h3 className="text-[#4d77ff] text-4xl md:text-5xl font-bold mb-2">
      {value}
    </h3>
    <p className="text-[#535862] text-sm md:text-base">{label}</p>
  </div>
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
        isSet ? "bg-white my-0" : " bg-neutral-50 my-24"
      } w-full mx-auto px-8 py-16 md:py-24`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Image */}
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={image}
              alt="Modern workspace"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className={`${isSet ? "text-start" : "text-center"}`}>
              <p className="text-[#4d77ff] text-sm md:text-base mb-2">
                {subtitle}
              </p>
              <h2 className="text-[#181d27] text-3xl md:text-4xl font-bold">
                {title}
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map(({ value, label }) => (
                <StatItem key={label} value={value} label={label} />
              ))}
            </div>

            {/* Buttons */}
            {isSet && (
              <div className="flex justify-start gap-4 py-8">
                <Button variant="outline" size="md" className="text-gray-700" onClick={() => router.push("/about-us")}>
                  Learn more
                </Button>
                <Button
                  variant="default"
                  size="md"
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
