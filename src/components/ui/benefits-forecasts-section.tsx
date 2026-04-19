import React from "react";
import { Tab } from "../reusable/tab";

interface Benefit {
  key: string;
  label: string;
  icon: string;
  title: string;
  description: string;
  points: { description: string }[];
  bgColor: string;
  image: string;
}

interface BenefitsForecastsSectionProps {
  title: string;
  subTitle: string;
  benefits: Benefit[];
}

export const BenefitsForecastsSection = ({
  title,
  subTitle,
  benefits,
}: BenefitsForecastsSectionProps) => {
  return (
    <section className="py-12 md:py-20">
      {/* Heading */}
      <div className="text-center px-4 text-gray-700">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
          {title}
        </h2>

        <p className="max-w-2xl mx-auto mb-4">
          {subTitle}
        </p>
      </div>

      {/* Tabs */}
      <Tab tabData={benefits} />
    </section>
  );
};
