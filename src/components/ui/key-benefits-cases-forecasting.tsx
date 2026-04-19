import React from "react";
import ShadowCircle from "../reusable/shadow-circle";
import Image from "next/image";

const benefits = [
  {
    icon: "/icons/fi-rr-following.svg",
    title: "Right-Sized Staffing",
    description:
      "Get accurate predictions for your daily and weekly staffing needs, ensuring the right number of employees on hand.",
  },
  {
    icon: "/icons/fi-rr-user-delete.svg",
    title: "Cut Labor Costs",
    description:
      "Avoid unnecessary labor expenses by precisely matching staffing levels with customer traffic.",
  },
  {
    icon: "/icons/fi-rr-hand-holding-heart.svg",
    title: "Improve Customer Experience",
    description:
      "Ensure full staffing during peak hours to provide prompt service without being overwhelmed.",
  },
  {
    icon: "/icons/fi-rr-chat-arrow-grow.svg",
    title: "Data-Driven Scheduling",
    description:
      "Use your own sales data to adjust schedules dynamically with seasonal and daily variability.",
  },
];

export const KeyBenefitsCaseForecasting: React.FC = () => {
  return (
    <>
      <section className="px-4 md:px-8 pt-0 md:py-8 font-inter text-gray-800">
        {/* Key Benefits */}
        <div className="text-center px-4 mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
            Key Benefits
          </h2>

          <p className="my-4 max-w-xl mx-auto text-gray-600">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>

        <div className="grid gap-10 max-[460]:grid-cols-1 max-[640]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto ">
          {benefits.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2"
            >
              <ShadowCircle>
                <Image src={icon} alt={title} width={20} height={20} />
              </ShadowCircle>
              <h3 className="font-semibold my-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Case Studies */}
    </>
  );
};
