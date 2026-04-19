"use client";
import { transition } from "@/lib/constaints";
import { motion } from "motion/react";
import React, { useRef, useLayoutEffect, useState } from "react";

interface MenuBoxProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export const MenuBox: React.FC<MenuBoxProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  useLayoutEffect(() => {
    if (active === item && triggerRef.current && dropdownRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      if (triggerRect.left + dropdownRect.width > viewportWidth - 16) {
        setAlignRight(true);
      } else {
        setAlignRight(false);
      }
    }
  }, [active, item]);

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
      ref={triggerRef}
    >
      <span className="relative inline-block group">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-gray-900"
        >
          {item}
        </motion.p>
        <motion.span
          layoutId="underline"
          className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ display: "block" }}
        />
      </span>
      {active !== null && (
        <motion.div
          initial={
            alignRight
              ? { opacity: 0, scale: 0.85, x: 10 }
              : { opacity: 0, scale: 0.85, y: 10 }
          }
          animate={
            alignRight
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          transition={transition}
        >
          {active === item && (
            <div
              ref={dropdownRef}
              className={`absolute top-[calc(100%+0.5rem)] pt-4 z-99 ${
                alignRight ? "-right-40" : "-left-40"
              }`}
            >
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="rounded-md shadow-md bg-white"
              >
                <motion.div layout className="w-max h-full">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
