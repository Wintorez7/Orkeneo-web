import { calculateDetailedLoss } from "@/lib/rpiFormula";
import { useState } from "react";

export function useRpiCalculator() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    name: "",
    city: "",
    type: "",
    revenue: 1500000,
    foodPct: 32,
    staffPct: 28,
    consistency: 50,
  });

  const result = calculateDetailedLoss({
    revenue: data.revenue,
    foodPct: data.foodPct,
    staffPct: data.staffPct,
    consistency: data.consistency
  });

  return {
    step,
    setStep,
    data,
    setData,
    result,
  };
}