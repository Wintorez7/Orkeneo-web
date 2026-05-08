import { calculateDetailedLoss } from "@/lib/rpiFormula";
import { useState, useCallback } from "react";

export function useRpiCalculator() {
  const [stepHistory, setStepHistory] = useState<number[]>([1]);
  const [data, setData] = useState({
    name: "",
    city: "",
    type: "",
    revenue: 1500000,
    foodPct: 32,
    staffPct: 28,
    consistency: 50,
  });

  const step = stepHistory[stepHistory.length - 1];

  const result = calculateDetailedLoss({
    revenue: data.revenue,
    foodPct: data.foodPct,
    staffPct: data.staffPct,
    consistency: data.consistency,
  });

  const goToStep = useCallback((newStep: number) => {
    setStepHistory(prev => [...prev, newStep]);
  }, []);

  const goBack = useCallback(() => {
    setStepHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  }, []);

  return {
    step,
    setStep: goToStep,
    goBack,
    data,
    setData,
    result,
  };
}