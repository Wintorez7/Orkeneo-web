"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";

export default function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
}) {
  return (
    <div>
      {label && (
        <div className="flex justify-between mb-2">
          <p className="text-sm font-medium">{label}</p>
          <span className="text-sm text-blue-600 font-semibold">{value}%</span>
        </div>
      )}

      <SliderPrimitive.Root
        value={[value]}
        onValueChange={(val) => onChange(val[0])}
        min={min}
        max={max}
        step={step}
        className="relative flex items-center w-full h-5"
      >
        <SliderPrimitive.Track className="bg-gray-200 relative grow rounded-full h-2">
          <SliderPrimitive.Range className="absolute bg-blue-600 rounded-full h-full" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow" />
      </SliderPrimitive.Root>
    </div>
  );
}
