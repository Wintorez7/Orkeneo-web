"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Testimonial } from "@/lib/type";
// import Image from "next/image";

interface Stat {
  value: string;
  label: string;
  border?: boolean;
}

export const TestimonialInfo = ({
  title,
  subTitle,
  description,
  testimonial,
  stats,
}: {
  title: string;
  subTitle: string;
  description: string;
  testimonial: Testimonial[];
  stats: Stat[];
}) => {
  const [index, setIndex] = useState(0);
  const statsLength = stats.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonial.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [testimonial.length]);
  return (
    <>
      <section className="max-w-5xl mx-auto px-0 md:px-4 py-14 md:py-24 text-center text-gray-600 font-inter">
        <div className="px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-gray-800">
            {title}
          </h2>

          <p className="max-w-2xl mx-auto mb-4">
            {subTitle}
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative space-y-8 bg-[#FAFAFA] text-gray-800 rounded-none md:rounded-lg px-10 py-16 max-w-5xl mx-auto my-12">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial[index].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:mx-auto lg:w-4/5"
            >
              <p className="italic text-3xl font-extralight mb-4">
                {testimonial[index].content}
              </p>

              {/* Optional image display */}
              {/* {testimonial[index].image && (
                <div className="flex justify-center mb-2">
                  <Image
                    src={testimonial[index].image!}
                    alt={testimonial[index].name || "Team member"}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
              )} */}

              {(testimonial[index]?.name && testimonial[index]?.role) ? (
                <>
                  <p className="font-medium">
                    {testimonial[index].name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {testimonial[index].role}
                  </p>
                </>
              ): (
                <p className="font-medium">
                  {testimonial[index].designation}
                </p>
              )}
            </motion.blockquote>
          </AnimatePresence>

          {/* Slider dots */}
          <div className="flex justify-center gap-3">
            {testimonial.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setIndex(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === idx ? "bg-blue-600" : "bg-gray-400 opacity-50"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
                title={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 ${(statsLength === 3) ? "sm:grid-cols-3" : "sm:grid-cols-2"} gap-6 text-center`}>
          {stats.length > 0 && stats.map((stat, i) => (
            <div
              key={i}
              className={
                (i !== 0)
                  ? "py-6 sm:py-0 max-sm:border-y max-sm:border-x-0  border-l sm:w-auto w-2/5 sm:mx-0 mx-auto border-gray-200"
                  : ""
              }
            >
              <p className="text-[#4d77ff] text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
