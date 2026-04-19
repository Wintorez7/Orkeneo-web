"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhoWeServeDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("enterprise");

  // Define the segments for each category
  // const segments = {
  //   enterprise: [
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Quick service restaurants",
  //       description: "Simplified decisions for quick service",
  //     },
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Fast Casual",
  //       description: "Deliver consistent customer experiences",
  //     },
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Full service",
  //       description: "Manage complex operations with ease",
  //     },
  //   ],
  //   franchise: [
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Pizza chains",
  //       description:
  //         "Predict dough, cheese and toppings usage to minimize waste, maximize profits",
  //     },
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Healthy cafes",
  //       description:
  //         "Scale with AI-backed forecasting for greens, fruits, nuts and proteins",
  //     },
  //   ],
  //   independent: [
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Bakeries",
  //       description:
  //         "Stay ahead of the demand with accurate forecasting for your baking and selling",
  //     },
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Barbecue outlets",
  //       description:
  //         "Optimize inventory - get data backed meat prep and smoking times",
  //     },
  //     {
  //       icon: "/icons/enterprise.svg",
  //       title: "Regional cuisines",
  //       description:
  //         "Track and optimize local food forecast key ingredients to weather and footfall",
  //     },
  //   ],
  // };

  return (
    <div className="absolute top-full left-0 mt-6.5 w-screen max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* First Column - Categories */}
        <div className="bg-white rounded-lg p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500">Who we serve</h3>
          </div>

          <div className="space-y-4">
            <div
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer ${selectedCategory === "enterprise" ? "bg-blue-50" : "hover:bg-gray-50"}`}
              onClick={() => setSelectedCategory("enterprise")}
            >
              <div className="shrink-0 bg-blue-100 rounded-full p-2">
                <Image
                  src="/icons/enterprise.svg"
                  alt="Enterprise"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="font-medium">Enterprise</h4>
                <p className="text-sm text-gray-500">
                  Streamline operations across your entire brand
                </p>
              </div>
            </div>

            <div
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer ${selectedCategory === "franchise" ? "bg-blue-50" : "hover:bg-gray-50"}`}
              onClick={() => setSelectedCategory("franchise")}
            >
              <div className="shrink-0 bg-blue-100 rounded-full p-2">
                <Image
                  src="/icons/franchise.svg"
                  alt="Franchise"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="font-medium">Franchise</h4>
                <p className="text-sm text-gray-500">
                  Increase profitability and simplify operations
                </p>
              </div>
            </div>

            <div
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer ${selectedCategory === "independent" ? "bg-blue-50" : "hover:bg-gray-50"}`}
              onClick={() => setSelectedCategory("independent")}
            >
              <div className="shrink-0 bg-blue-100 rounded-full p-2">
                <Image
                  src="/icons/independent.svg"
                  alt="Independent"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h4 className="font-medium">Independent</h4>
                <p className="text-sm text-gray-500">
                  Access customized profit boosting insights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column - Segments based on selected category */}
        <div className="bg-white rounded-lg p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500">Segments</h3>
          </div>

          {/* <div className="space-y-4">
            {segments[selectedCategory as keyof typeof segments].map(
              (segment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 bg-blue-100 rounded-full p-2">
                    <Image
                      src={segment.icon || "/placeholder.svg"}
                      alt={segment.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{segment.title}</h4>
                    <p className="text-sm text-gray-500">
                      {segment.description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div> */}
        </div>

        {/* Third Column - ROI Calculator (same for all) */}
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h3 className="font-medium mb-2">
              Now calculate your ROI instantly
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Check out our new tool which enables you to check your ROI with us
              instantly for you to decide better.
            </p>
          </div>
          <Link
            href="/roi-calculator"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
          >
            Try now <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
