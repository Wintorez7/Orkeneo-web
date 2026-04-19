import { BarChart3, Users, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticlePage() {
  const articles = [
    {
      title: "Decoding the DNA of Profit: Data Patterns in QSR",
      category: "OPERATIONS",
      image: "/images/read1.png",
      slug: "/blogs/article",
    },
    {
      title: "Managing Labor Without the Burnout: The Predictive Way",
      category: "STRATEGY",
      image: "/images/read2.png",
      slug: "/blogs/article",
    },
    {
      title: "2025 Outlook: Why Efficiency is the New Gastronomy",
      category: "TRENDS",
      image: "/images/read3.png",
      slug: "/blogs/article",
    },
  ];
  return (
    <>
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Top Meta */}
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium text-xs tracking-wide">
              AI & TECHNOLOGY
            </span>

            <span className="text-gray-500 flex items-center gap-1">
              ⏱ 8 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-[32px] md:text-[48px] font-extrabold text-gray-900 leading-tight">
            The Future of Restaurant <br /> Planning: How AI is <br />{" "}
            Eliminating the 'Guesswork' <br /> in Daily Operations
          </h1>

          {/* Divider */}
          <div className="border-t border-gray-200 mt-8"></div>

          {/* Author + Date */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-6">
            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src="/avatar/Marcus-Sterling.png"
                alt="author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Marcus Sterling
                </p>
                <p className="text-xs text-gray-500">AI Lead Architect</p>
              </div>
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500">
              <p className="text-xs">Published</p>
              <p className="text-gray-900 font-medium">Oct 24, 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* HERO IMAGE */}
          <div className="relative w-full h-65 md:h-105 rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/images/Futuristic-Restaurant-Architecture.png"
              alt="article cover"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT + SIDEBAR */}
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-8">
              {/* Paragraph */}
              <p className="text-gray-600 leading-relaxed text-[15px] md:text-[16px]">
                For decades, restaurant managers have relied on "gut feeling" to
                determine how many steaks to prep or how many servers to
                schedule for a Tuesday night. This manual approach, while
                grounded in experience, carries invisible costs that bleed
                margins dry before the doors even open.
              </p>

              {/* Heading */}
              <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900">
                The High Cost of 'Best Guesses'
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The volatility of modern dining— influenced by everything from
                local weather shifts to viral social media trends—makes static
                planning obsolete. When a manager "guesses" the day's
                requirements, they are essentially gambling with the
                restaurant's profitability.
              </p>

              {/* Sub Heading */}
              <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900">
                Why traditional POS systems aren't enough
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Most Point of Sale (POS) systems act as rearview mirrors. They
                tell you what happened yesterday, but they lack the predictive
                engines to tell you what will happen tomorrow. Without external
                data signals, a POS is just an expensive digital ledger.
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {[
                  "Inventory Waste: Over-prepping perishables leads to direct capital loss.",
                  "Labor Gaps: Understaffing ruins guest experience; overstaffing erodes hourly profit.",
                  "Missed Revenue: Running out of a high-margin special because of poor demand forecasting.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                  >
                    <span className="text-blue-600 mt-1">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">
              {/* TOC */}
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Table of contents
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Reading time: 8 min
                </p>

                <div className="mt-4 space-y-3 text-sm">
                  <p className="text-blue-600 font-medium border-l-2 border-blue-600 pl-3">
                    Introduction
                  </p>
                  <p className="text-gray-400 pl-3">Market Trends</p>
                  <p className="text-gray-400 pl-3">AI Analysis</p>
                  <p className="text-gray-400 pl-3">ROI Forecast</p>
                  <p className="text-gray-400 pl-3">Conclusion</p>
                </div>
              </div>

              {/* INSIGHT CARD */}
              <div className="bg-[#EEF2FF] rounded-2xl p-5">
                <div className="flex w-full">
                  <Image
                    src="/images/Ai-active-logo.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-xs mt-0.5 font-semibold text-purple-600 uppercase tracking-wide">
                    AI Active Insight
                  </p>
                </div>

                <p className="text-sm text-gray-700 mt-2">
                  Did you know AI forecasting reduces food waste by up to 22%
                  annually?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* QUOTE */}
          <div className="bg-[#EEF2FF] rounded-2xl px-6 py-4 border-l-4 border-blue-600">
            <p className="text-gray-800 text-[15px] md:text-base leading-relaxed">
              "Predictive intelligence isn't just about data; it's about the
              survival of modern dining margins."
            </p>
          </div>

          {/* INSIGHT */}
          <div className="bg-[#EEF2FF] rounded-2xl px-6 py-5 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl"></div>

            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide ml-3">
              Orkeneo Insight
            </p>

            <p className="text-gray-900 font-medium mt-2 ml-3">
              Restaurants lose 5–8% revenue due to poor demand planning.
            </p>
          </div>

          {/* CTA CARD */}
          <div className="bg-[#E5E7EB] rounded-[28px] px-6 py-10 text-center">
            <p className="text-gray-800 font-medium text-[16px] md:text-lg">
              Curious how much you're losing?
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:scale-[1.03] transition-transform">
              Calculate My Savings
            </button>
          </div>

          {/* SECTION TITLE */}
          <h2 className="text-[22px] md:text-[26px] font-extrabold text-gray-900">
            Accuracy that Drives Action
          </h2>

          {/* STATS CARDS */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT CARD */}
            <div className="bg-white rounded-4xl p-7 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                Historical Variance
              </p>

              {/* Progress */}
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#BA1A1A] w-[25%]"></div>
              </div>

              <div className="flex justify-between mt-3 text-sm">
                <span className="text-gray-800">Manual Planning</span>
                <span className="text-[#BA1A1A] font-bold">25% Error Rate</span>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <p className="text-xs font-semibold text-gray-800 uppercase tracking-wide">
                AI Accuracy Pulse
              </p>

              {/* Progress */}
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#006947] w-[94%]"></div>
              </div>

              <div className="flex justify-between mt-3 text-sm">
                <span className="text-gray-800">Orkeneo Engine</span>
                <span className="text-[#006947] font-bold">94% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F3FF] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* SECTION TITLE */}
          <h2 className="text-[24px] md:text-[28px] font-semibold text-gray-900 mb-8">
            How Orkeneo Helps
          </h2>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                <UtensilsCrossed className="w-5 h-5 text-blue-600" />
              </div>

              <h3 className="font-semibold text-gray-900">Prep Forecasting</h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Daily production guides based on hyper-local demand signals.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>

              <h3 className="font-semibold text-gray-900">Menu Insights</h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Real-time analysis of item profitability and waste potential.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white shadow-md rounded-2xl p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mb-4">
                <Users className="w-5 h-5 text-green-600" />
              </div>

              <h3 className="font-semibold text-gray-900">
                Labor Optimization
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Intelligent scheduling that aligns staff with peak demand hours.
              </p>
            </div>
          </div>

          {/* DARK CTA BANNER */}
          <div className="mt-14 rounded-[28px] px-6 md:px-10 py-12 text-center bg-linear-to-r from-[#0F172A] to-[#1E3A8A] text-white">
            <h3 className="text-[52] md:text-[52px] font-extrabold leading-snug">
              Ready to see your <br /> restaurant's AI plan?
            </h3>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary */}
              <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-sm font-medium shadow-md">
                Get Savings Report
              </button>

              {/* Secondary */}
              <button className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F9FC] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[20px] md:text-[22px] font-semibold text-gray-900 whitespace-nowrap">
              Continue Reading
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((item, i) => (
              <Link key={i} href={item.slug}>
                <div className="group cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-4">
                    <p className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-sm md:text-base font-medium text-gray-900 leading-snug group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
