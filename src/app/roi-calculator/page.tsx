"use client";

import StepCard from "@/components/rpi/StepCard";
import toast from "react-hot-toast";
import Step1 from "@/components/rpi/steps/Step1";
import Step2 from "@/components/rpi/steps/Step2";
import Step3 from "@/components/rpi/steps/Step3";
import Step4 from "@/components/rpi/steps/Step4";
import Step5Result from "@/components/rpi/steps/Step5Result";

import { fadeUp, fadeIn } from "@/lib/animations/variants";
import { useRpiCalculator } from "@/hook/useRpiCalculator";
import { stepConfig } from "@/lib/rpiStepsConfig";
import MotionWrapper from "@/components/motion/MotionWrapper";

export default function RpiCalculatePage() {
  const { step, setStep, data, setData, result } = useRpiCalculator();

  const validations: any = {
    1: (data: any) => data.name && data.city && data.type,
    2: (data: any) => data.revenue && data.revenue >= 50000,
    3: () => true,
  };

  const next = () => {
    const isValid = validations[step] ? validations[step](data) : true;

    if (!isValid) {
      toast.error("Please fill all inputs before continuing");
      return;
    }

    setStep((s) => (s < 5 ? ((s + 1) as any) : s));
  };

  if (step === 5) {
    return <Step5Result data={data} result={result} />;
  }

  const config = stepConfig[step as 1 | 2 | 3 | 4];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#eef2ff] via-white to-[#e0e7ff] relative overflow-hidden">
      {/* TOP LEFT BLUE GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px]" />

      {/* MID RIGHT PURPLE GLOW */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[120px]" />

      {/* CENTER GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10">
        <MotionWrapper variants={fadeIn}>
          <StepCard config={config} step={step}>
            <MotionWrapper key={step} variants={fadeUp}>
              {step === 1 && (
                <Step1 data={data} setData={setData} next={next} />
              )}
              {step === 2 && (
                <Step2 data={data} setData={setData} next={next} />
              )}
              {step === 3 && (
                <Step3
                  data={data}
                  setData={setData}
                  result={result}
                  next={next}
                />
              )}
              {step === 4 && <Step4 next={next} />}
            </MotionWrapper>
          </StepCard>
        </MotionWrapper>
      </div>
    </div>
  );
}
