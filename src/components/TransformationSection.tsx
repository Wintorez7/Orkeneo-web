"use client";

interface TransformationProps {
  title: string;
  beforeLabel: string;
  beforeTitle: string;
  beforePoints: string[];

  afterLabel: string;
  afterTitle: string;
  afterPoints: string[];
}

export default function TransformationSection({
  title,
  beforeLabel,
  beforeTitle,
  beforePoints,
  afterLabel,
  afterTitle,
  afterPoints,
}: TransformationProps) {
  return (
    <section className="w-full py-20 px-6 bg-[#F5F6FA]">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-2xl md:text-4xl font-extrabold text-black text-center mb-10">
          {title}
        </h2>

        {/* SPLIT CARD */}
        <div className="grid md:grid-cols-2 shadow-xl overflow-hidden rounded-2xl">

          {/* BEFORE */}
          <div className="bg-[#EDEFF5] p-6 md:p-8">
            <p className="text-xs tracking-widest text-gray-400 mb-4 uppercase">
              {beforeLabel}
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6">
              {beforeTitle}
            </h3>

            <ul className="space-y-4">
              {beforePoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="text-red-500 text-lg">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* AFTER */}
          <div className="bg-linear-to-br from-blue-600 to-blue-700 p-6 md:p-8 text-white">
            <p className="text-xs tracking-widest text-blue-200 mb-4 uppercase">
              {afterLabel}
            </p>

            <h3 className="text-lg md:text-xl font-bold mb-6">
              {afterTitle}
            </h3>

            <ul className="space-y-4">
              {afterPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90">
                  <span className="text-green-400 text-lg">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}