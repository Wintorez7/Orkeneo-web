"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    text: "Analyzing demand patterns...",
    icon: CheckCircle2,
    color: "text-emerald-500",
  },
  {
    id: 2,
    text: "Evaluating food waste trends...",
    icon: CheckCircle2,
    color: "text-emerald-500",
  },
  {
    id: 3,
    text: "Checking staffing efficiency...",
    icon: CheckCircle2,
    color: "text-emerald-500",
  },
  {
    id: 4,
    text: "Generating profit recovery plan...",
    icon: Zap,
    color: "text-amber-500",
  },
];

export default function Step4({ next }: { next: () => void }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // Reveal one step every second
    const intervalId = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Redirect to the next step once all steps are loaded
    if (currentStepIndex === steps.length) {
      const redirectTimer = setTimeout(() => {
        next();
      }, 600); // Brief delay after completion
      return () => clearTimeout(redirectTimer);
    }
  }, [currentStepIndex, next]);

  const progressPercentage = Math.min(
    (currentStepIndex / steps.length) * 100,
    100,
  );

  return (
    <div className="w-full flex flex-col gap-8 pb-4">
      {/* Progress Bar */}
      <div className="w-full bg-blue-100 rounded-full h-2.5 overflow-hidden relative">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full relative"
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Subtle shine effect on progress bar */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 w-full bg-linear-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Loading Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const isCompleted = currentStepIndex > index;
          const isCurrent = currentStepIndex === index;
          const isPending = currentStepIndex < index;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isCompleted || isCurrent ? 1 : 0.4,
                x: isCompleted || isCurrent ? 0 : -5,
              }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 ${
                isCompleted
                  ? "bg-white border-gray-100 shadow-sm"
                  : isCurrent
                    ? "bg-blue-50/50 border-blue-200"
                    : "bg-transparent border-transparent"
              }`}
            >
              {/* Icon / Loader Indicator */}
              <div className="shrink-0 flex items-center justify-center w-6 h-6">
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <Icon
                      className={`w-6 h-6 ${step.color}`}
                      strokeWidth={2.5}
                    />
                  </motion.div>
                ) : isCurrent ? (
                  <div className="w-5 h-5 rounded-full border-[2.5px] border-blue-600 border-t-transparent animate-spin" />
                ) : (
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                )}
              </div>

              {/* Step Text */}
              <span
                className={`font-medium tracking-tight ${
                  isCompleted
                    ? "text-gray-800"
                    : isCurrent
                      ? "text-blue-900"
                      : "text-gray-400"
                }`}
              >
                {step.text}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
