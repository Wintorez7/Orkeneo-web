"use client";

export default function StatsStrip() {
  const stats = [
    {
      value: "+40%",
      label: "Average profit uplift",
      color: "text-emerald-600",
      underline: "bg-emerald-300",
    },
    {
      value: "55%",
      label: "Reduction in food waste",
      color: "text-blue-500",
      underline: "bg-blue-200",
    },
    {
      value: "-20%",
      label: "Labor cost efficiency",
      color: "text-purple-500",
      underline: "bg-purple-200",
    },
  ];

  return (
    <section className="w-full py-20 bg-linear-to-b bg-[#f5f6ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              
              {/* VALUE */}
              <h3 className={`text-5xl md:text-6xl font-bold ${stat.color}`}>
                {stat.value}
              </h3>

              {/* LABEL */}
              <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold">
                {stat.label}
              </p>

              {/* UNDERLINE */}
              <div
                className={`mt-3 h-0.75 w-12 rounded-full ${stat.underline}`}
              />
            </div>
          ))}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-16 text-[10px] tracking-[0.25em] uppercase text-gray-400 font-semibold">
          Based on customer results across 240+ optimized outlets
        </p>

      </div>
    </section>
  );
}