"use client";

import { ChevronDown } from "lucide-react";

export const Menu = ({
  setActive,
  children,
  active,
  label,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  active: string | null;
  label: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="w-fit relative flex justify-around lg:px-2 xl:px-8 py-4 items-center"
    >
      {children}{" "}
      <ChevronDown
        className={`h-5 ml-1 mt-1 ${
          active === label && "rotate-180 transition-all duration-500"
        }`}
      />
    </nav>
  );
};
