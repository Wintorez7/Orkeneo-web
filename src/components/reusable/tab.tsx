"use client";
import Image from "next/image";
import { useState } from "react";
import ShadowCircle from "../reusable/shadow-circle";
import { TabDataType } from "@/lib/tabdata";

export const Tab: React.FC<{ tabData: TabDataType[] }> = ({ tabData }) => {
  const [activeTab, setActiveTab] = useState<string>(
    () => tabData[0]?.key || "PrepWise" || "Accuracy"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const activeData = tabData.find((tab) => tab.key === activeTab);

  return (
    <div className="w-full py-12 bg-white">
      {/* Mobile Dropdown */}
      <div className="md:hidden w-[90%] mx-auto mb-8">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-white px-4 py-3 rounded-lg shadow-sm flex items-center justify-between border border-[#4d77ff]"
        >
          <span className="font-medium">{activeData?.label}</span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-[90%] mt-2 bg-white rounded-lg shadow-lg">
            {tabData.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setIsDropdownOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                  activeTab === tab.key
                    ? "bg-[#F9FAFB] text-[#4d77ff]"
                    : "text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Tabs */}
      <div
        className={`${
          activeData?.bgColor ? "w-[60%]" : "w-[73%]"
        } hidden md:flex py-1 rounded-md mx-auto justify-between space-x-4 mb-8 bg-[#F9FAFB]`}
      >
        {tabData.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 w-1/4 cursor-pointer text-sm font-medium ${
              activeTab === tab.key
                ? "bg-white rounded-sm text-base shadow-sm text-black"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeData && (
        <div className="bg-[#F9FAFB] grid md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-0">
          {/* Left Box */}
          <div className="ml-0 lg:ml-20 md:ml-10 bg-white rounded-xl p-6 md:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <ShadowCircle>
                <Image
                  src={activeData.icon}
                  alt={activeData.title}
                  width={20}
                  height={20}
                />
              </ShadowCircle>
              <h2 className="text-xl font-semibold">{activeData.title}</h2>
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              {activeData.description}
            </p>

            <div className="space-y-4">
              {activeData.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Image
                    src="/icons/Check_Circle.svg"
                    alt="CheckCircle"
                    width={24}
                    height={24}
                    className="flex-shrink-0 mt-1"
                  />
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      {point.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:flex md:gap-4 pt-4">
              {activeData.stats?.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#edf1ff] p-3 md:p-4 rounded-lg shadow text-start"
                >
                  <p className="text-xl md:text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`w-full relative order-first md:order-last rounded-2xl md:rounded-s-2xl ${
              activeData.bgColor ? "py-20" : ""
            }`}
            style={{ backgroundColor: activeData.bgColor }}
          >
            <Image
              src={activeData.image}
              alt="Mockup"
              width={activeData.stats ? 720 : 559}
              height={activeData.stats ? 797 : 368}
              className={`rounded-xl ${
                activeData.bgColor ? `w-10/12 md:w-[60%] mx-auto` : "w-full"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
