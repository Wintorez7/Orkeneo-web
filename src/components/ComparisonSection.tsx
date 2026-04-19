"use client";

import Image from "next/image";
import { Ban, X, Sparkles, Check } from "lucide-react";
import MotionWrapper from "./motion/MotionWrapper";
import MotionStagger from "./motion/MotionStagger";
import { fadeUp, fadeRight } from "@/lib/animations/variants";
import { floatAnimation, floatTransition } from "@/lib/animations/transitions";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

interface FeatureItem {
  title: string;
  description: string;
}

interface ComparisonProps {
  withoutTitle: string;
  withTitle: string;
  withoutFeatures: FeatureItem[];
  withFeatures: FeatureItem[];
  rightImage?: string;
  recommended?: boolean;
}

export default function ComparisonSection({
  withoutTitle,
  withTitle,
  withoutFeatures,
  withFeatures,
  rightImage,
  recommended,
}: ComparisonProps) {
  // 🔥 3D MOTION SETUP (ONLY FOR BLUE CARD)
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXPixel = useMotionValue(0);
  const mouseYPixel = useMotionValue(0);

  const glareOpacity = useSpring(0, { stiffness: 300, damping: 40 });

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const glareBackground = useMotionTemplate`
    radial-gradient(600px circle at ${mouseXPixel}px ${mouseYPixel}px, rgba(255,255,255,0.25), transparent 50%)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);

    mouseXPixel.set(mouseX);
    mouseYPixel.set(mouseY);
    glareOpacity.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0);
  };

  return (
    <section className="w-full py-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        {/* WITHOUT */}
        <MotionWrapper
          variants={fadeRight}
          className="bg-gray-100 rounded-3xl p-6 md:p-8 shadow-sm h-full w-full"
        >
          <div className="flex items-center gap-3 mb-6">
            <Ban className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              {withoutTitle}
            </h2>
          </div>

          <MotionStagger className="space-y-5">
            {withoutFeatures.map((feature, index) => (
              <MotionWrapper key={index} variants={fadeUp}>
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1 shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 leading-tight">
                      {feature.title}
                    </h3>

                    {feature.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </MotionStagger>
        </MotionWrapper>

        {/* WITH (3D CARD) */}
        <div style={{ perspective: 1200 }}>
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#194FD7] rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden h-full w-full"
          >
            {/* GLARE */}
            <motion.div
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                background: glareBackground,
                opacity: glareOpacity,
              }}
            />

            {/* RECOMMENDED */}
            {recommended && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 right-4 z-10"
              >
                <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </motion.div>
            )}

            {/* FLOATING IMAGE */}
            {rightImage && (
              <motion.div
                animate={floatAnimation}
                transition={floatTransition}
                className="absolute bottom-9 right-7 z-0 pointer-events-none"
              >
                <Image
                  src={rightImage}
                  alt="rocket"
                  width={110}
                  height={110}
                  className="object-contain opacity-20 translate-x-1/3 translate-y-1/3"
                />
              </motion.div>
            )}

            {/* CONTENT */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-white" />
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {withTitle}
                </h2>
              </div>

              <MotionStagger className="space-y-5">
                {withFeatures.map((feature, index) => {
                  const isLast = index === withFeatures.length - 1;

                  return (
                    <MotionWrapper key={index} variants={fadeUp}>
                      <div className="flex gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                          <Check className="w-4 h-4 text-white" />
                        </div>

                        <div>
                          <h3
                            className={`font-semibold mb-1 ${
                              isLast ? "text-green-300" : "text-white"
                            }`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isLast ? "text-green-200" : "text-blue-100"
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </MotionWrapper>
                  );
                })}
              </MotionStagger>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
