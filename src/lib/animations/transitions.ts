import { Transition } from "framer-motion";

export const easeOut: Transition = {
  duration: 0.5,
 ease: [0.25, 0.1, 0.25, 1],
};

export const springSmooth: Transition = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
};

export const floatAnimation = {
  y: [0, -8, 0],
};

export const floatTransition: Transition = {
  duration: 6,
  ease: "easeInOut",
  repeat: Infinity,
};