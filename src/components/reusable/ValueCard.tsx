import React from "react";

export interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlightText: string;
  highlightSub?: string;
  variant?: "default" | "highlight";
}

export default function ValueCard({
  icon,
  title,
  description,
  highlightText,
  highlightSub,
  variant = "default",
}: ValueCardProps) {
  const isHighlight = variant === "highlight";

  return (
    <div
      className="
      group
      rounded-2xl p-6 transition-all duration-300
      bg-[#E9EDF5]
      hover:bg-white 
      hover:shadow-lg 
      hover:scale-105
    "
    >
      {/* Icon */}
      <div
        className="
        w-10 h-10 flex items-center justify-center rounded-lg mb-4
        bg-white text-blue-600
        group-hover:bg-green-100 group-hover:text-green-600
      "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        {description}
      </p>

      {/* Highlight */}
      <div className="mt-4">
        <p className="text-lg font-bold text-blue-600 group-hover:text-green-600">
          {highlightText}
        </p>

        {highlightSub && (
          <p className="text-xs text-gray-500 mt-1">{highlightSub}</p>
        )}
      </div>
    </div>
  );
}
