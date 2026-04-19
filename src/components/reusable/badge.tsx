import React from "react";
import clsx from "clsx";

export type BadgeVariant = "solid" | "outline" | "subtle";
export type BadgeColor = "blue" | "green" | "red" | "yellow" | "gray" | "purple" | "indigo" | "pink" | "orange";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  color?: BadgeColor;
  icon?: React.ReactNode;
  className?: string;
}

const colorMap: Record<BadgeColor, { solid: string; outline: string; subtle: string }> = {
  blue: {
    solid: "bg-[#4d77ff] text-white",
    outline: "border border-[#4d77ff] text-[#4d77ff] bg-white",
    subtle: "bg-blue-100 text-[#4d77ff]",
  },
  green: {
    solid: "bg-green-600 text-white",
    outline: "border border-green-600 text-green-600 bg-white",
    subtle: "bg-green-100 text-green-700",
  },
  red: {
    solid: "bg-red-600 text-white",
    outline: "border border-red-600 text-red-600 bg-white",
    subtle: "bg-red-100 text-red-700",
  },
  yellow: {
    solid: "bg-yellow-500 text-white",
    outline: "border border-yellow-500 text-yellow-700 bg-white",
    subtle: "bg-yellow-100 text-yellow-800",
  },
  gray: {
    solid: "bg-gray-600 text-white",
    outline: "border border-gray-600 text-gray-700 bg-white",
    subtle: "bg-gray-100 text-gray-700",
  },
  purple: {
    solid: "bg-purple-600 text-white",
    outline: "border border-purple-600 text-purple-700 bg-white",
    subtle: "bg-purple-100 text-purple-700",
  },
  indigo: {
    solid: "bg-indigo-600 text-white",
    outline: "border border-indigo-600 text-indigo-700 bg-white",
    subtle: "bg-indigo-100 text-indigo-700",
  },
  pink: {
    solid: "bg-pink-600 text-white",
    outline: "border border-pink-600 text-pink-700 bg-white",
    subtle: "bg-pink-100 text-pink-700",
  },
  orange: {
    solid: "bg-orange-500 text-white",
    outline: "border border-orange-500 text-orange-700 bg-white",
    subtle: "bg-orange-100 text-orange-700",
  },
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "solid",
  color = "blue",
  icon,
  className = "",
}) => {
  const colorClasses = colorMap[color][variant];
  return (
    <span
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors",
        colorClasses,
        className
      )}
    >
      {icon && <span className="mr-1.5 flex items-center">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge; 