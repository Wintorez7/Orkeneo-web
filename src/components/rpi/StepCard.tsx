import { fadeUp, scaleIn } from "@/lib/animations/variants";
import MotionWrapper from "../motion/MotionWrapper";
import MotionStagger from "../motion/MotionStagger";

export default function StepCard({ children, config, step }: any) {
  return (
    <MotionWrapper variants={fadeUp}>
      <div className="max-w-4xl mt-20 mx-auto px-4 py-16 text-center">
        {/* STEP */}
        <MotionStagger>
          <MotionWrapper variants={fadeUp}>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4">
              <span className="w-2 h-2 bg-indigo-500 rounded-full" />
              {config.step}
            </div>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {config.title}
            </h1>
          </MotionWrapper>

          <MotionWrapper variants={fadeUp}>
            <p className="text-gray-500 mt-4 text-lg">{config.subtitle}</p>
          </MotionWrapper>
        </MotionStagger>

        {config.badge && (
          <MotionWrapper variants={fadeUp} delay={0.1}>
            <div className="mt-4 inline-block text-sm bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full">
              {config.badge}
            </div>
          </MotionWrapper>
        )}

        {/* PROGRESS */}
        <div className="flex justify-center gap-3 mt-6 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <MotionWrapper key={s} variants={fadeUp} delay={s * 0.05}>
              <div
                className={`h-1.5 w-16 rounded-full transition-all duration-500 ${
                  step >= s
                    ? "bg-indigo-600 scale-x-100"
                    : "bg-gray-200 scale-x-75"
                }`}
              />
            </MotionWrapper>
          ))}
        </div>

        {/* TIME TEXT */}
        {config.showTime && (
          <p className="text-xs text-gray-700 mb-6">TAKES ~30 SECONDS</p>
        )}

        {/* CARD */}
        <MotionWrapper variants={scaleIn} delay={0.2}>
          <div className="bg-white backdrop-blur-xl border border-gray-100 rounded-4xl p-8 text-left shadow-xl">
            {children}
          </div>
        </MotionWrapper>
      </div>
    </MotionWrapper>
  );
}
