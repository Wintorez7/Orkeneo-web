"use client";

import { BarChart3, Users, UtensilsCrossed, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOGS } from "@/lib/blog.data";

interface Props {
  article: any;
}

export default function BlogContent({ article }: Props) {
  const relatedBlogs = article.related?.length
    ? article.related
    : BLOGS.filter((b) => b.id !== article.id).slice(0, 3);

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="bg-[#F8F9FC] mt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
              {article.category}
            </span>

            <span className="text-gray-500">⏱ {article.readTime}</span>
          </div>

          <h1 className="mt-6 text-[32px] md:text-[48px] font-extrabold text-gray-900 leading-tight">
            {article.title}
          </h1>

          <div className="border-t border-gray-200 mt-8"></div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 gap-6">
            <div className="flex items-center gap-3">
              <Image
                src={article.authorImage || "/avatar/Marcus-Sterling.png"}
                alt="author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500">AI Lead Architect</p>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <p className="text-xs">Published</p>
              <p className="text-gray-900 font-medium">
                {article.date || "Oct 24, 2024"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERO ================= */}
      <section className="bg-[#F8F9FC] px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-65 md:h-105 rounded-3xl overflow-hidden">
            <Image
              src={article.image}
              alt="article cover"
              fill
              className="object-cover"
            />
          </div>

          {/* ================= CONTENT & SIDEBAR ================= */}
          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            <div className="lg:col-span-2 space-y-6">
              {article.content
                ?.filter((b: any) => b.type !== "insight")
                .map((block: any, i: number) => {
                  switch (block.type) {
                    case "heading":
                      return (
                        <h2
                          key={i}
                          className="text-[22px] md:text-[26px] font-extrabold text-[#111827] mt-8 mb-4 border-none"
                        >
                          {block.text}
                        </h2>
                      );

                    case "paragraph":
                      return (
                        <p
                          key={i}
                          className="text-[#4B5563] leading-relaxed text-[16px]"
                        >
                          {block.text}
                        </p>
                      );

                    case "list":
                      return (
                        <ul key={i} className="space-y-4 my-6">
                          {block.items.map((item: string, idx: number) => {
                            const [boldText, ...rest] = item.split(": ");
                            return (
                              <li
                                key={idx}
                                className="flex items-start gap-4 text-[#4B5563] text-[16px]"
                              >
                                <div className="mt-1 w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center shrink-0">
                                  <span className="text-blue-600 text-[10px] sm:text-xs">
                                    ✔
                                  </span>
                                </div>
                                <p>
                                  {rest.length > 0 ? (
                                    <>
                                      <strong className="text-gray-900">
                                        {boldText}:
                                      </strong>{" "}
                                      {rest.join(": ")}
                                    </>
                                  ) : (
                                    item
                                  )}
                                </p>
                              </li>
                            );
                          })}
                        </ul>
                      );

                    case "quote":
                      return (
                        <div
                          key={i}
                          className="bg-[#EEF2FF] px-6 py-4 border-l-4 border-blue-600 my-6"
                        >
                          <p className="text-gray-800 text-[15px] md:text-base font-medium">
                            "{block.text}"
                          </p>
                        </div>
                      );

                    default:
                      return null;
                  }
                })}
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="hidden lg:block relative pl-6">
              <div className=" absolute top-1">
                <h3 className="text-[12px] font-bold text-[#3A4AE2] uppercase tracking-widest mb-1">
                  Table of Contents
                </h3>
                <p className="text-[11px] text-[#6B7280] mb-6">
                  Reading time: {article.readTime}
                </p>

                <div className="space-y-5 border-l-2 border-[#E5E7EB] pl-5 relative mb-12">
                  {article.toc?.map((item: string, i: number) => {
                    const isActive = i === 0;
                    return (
                      <div key={i} className="relative">
                        {isActive && (
                          <div className="absolute -left-[22px] top-0 bottom-0 w-[2px] bg-[#3A4AE2]"></div>
                        )}
                        <p
                          className={`text-[12px] font-bold uppercase tracking-wider ${
                            isActive ? "text-[#3A4AE2]" : "text-[#9CA3AF]"
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* AI ACTIVE INSIGHT CAROUSEL / BOX */}
                {article.content?.find((b: any) => b.type === "insight") && (
                  <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded-md bg-[#8A4BEF] text-white flex items-center justify-center shrink-0">
                        <Brain size={14} strokeWidth={2.5} />
                      </div>
                      <p className="text-[11px] font-bold text-[#8A4BEF] uppercase tracking-widest">
                        AI Active Insight
                      </p>
                    </div>
                    <p className="text-[14px] text-[#111827] font-medium leading-[1.6]">
                      {
                        article.content.find((b: any) => b.type === "insight")
                          .text
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA 1 ================= */}
      <section className="bg-[#FAFBFD] px-4 py-20">
        <div className="max-w-5xl mx-auto pt-4">
          <div className="bg-[#EBEAF5] rounded-[48px] px-6 md:px-10 py-[72px] text-center shadow-xs">
            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 tracking-tight">
              Curious how much you're losing?
            </h2>

            <div className="mt-8 flex justify-center">
              <button
                className="px-8 py-3.5 rounded-full text-white font-medium text-[15px]
                bg-[#3A4AE2] shadow-md hover:bg-[#3440cc] transition-all hover:-translate-y-0.5"
              >
                Calculate My Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCURACY ================= */}
      <section className="bg-[#FAFBFD] px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#111827] tracking-tight mb-8">
            Accuracy that Drives Action
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
              <p className="text-[#4B5563] text-[11px] font-bold tracking-wider uppercase">
                Historical Variance
              </p>

              <div className="mt-8 w-full h-2.5 bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-[#D92D20] rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>

              <div className="mt-6 flex justify-between items-center text-[15px]">
                <span className="text-[#4B5563] font-medium">
                  Manual Planning
                </span>
                <span className="text-[#D92D20] font-bold">25% Error Rate</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 bg-white rounded-3xl p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)]">
              <p className="text-[#4B5563] text-[11px] font-bold tracking-wider uppercase">
                AI Accuracy Pulse
              </p>

              <div className="mt-8 w-full h-2.5 bg-[#EDF2F7] rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-[#059669] rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>

              <div className="mt-6 flex justify-between items-center text-[15px]">
                <span className="text-[#4B5563] font-medium">
                  Orkeneo Engine
                </span>
                <span className="text-[#059669] font-bold">94% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT HELPS ================= */}
      <section className="bg-[#FAFBFD] px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#111827] tracking-tight mb-10">
            How Orkeneo Helps
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#EDF0FF] flex items-center justify-center text-[#3A4AE2] mb-6">
                <UtensilsCrossed size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Prep Forecasting
              </h3>
              <p className="mt-3 text-[15px] text-[#6B7280] leading-relaxed">
                Daily production guides based on hyper-local demand signals.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#F4E8FF] flex items-center justify-center text-[#9333EA] mb-6">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Menu Insights</h3>
              <p className="mt-3 text-[15px] text-[#6B7280] leading-relaxed">
                Real-time analysis of item profitability and waste potential.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-[0_4px_24px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[#E6F6ED] flex items-center justify-center text-[#059669] mb-6">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Labor Optimization
              </h3>
              <p className="mt-3 text-[15px] text-[#6B7280] leading-relaxed">
                Intelligent scheduling that aligns staff with peak demand hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#FAFBFD] px-4 py-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111827] rounded-[48px] px-6 py-20 text-center relative overflow-hidden bg-linear-to-br from-[#0F1523] via-[#1A2234] to-[#0F1523] shadow-2xl">
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl mx-auto">
              Ready to see your <br className="hidden md:block" /> restaurant's
              AI plan?
            </h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-semibold text-[15px] bg-[#1D4ED8] hover:bg-[#1E40AF] transition-all">
                Get Savings Report
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-semibold text-[15px] bg-[#2D3342] hover:bg-[#394254] border border-[#3A455C] transition-all">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTINUE READING ================= */}
      <section className="bg-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-10">
            <h2 className="text-[26px] font-extrabold text-[#111827] tracking-tight shrink-0">
              Continue Reading
            </h2>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((item: any, i: number) => {
              const slug = item.slug;
              return (
                <Link key={i} href={`/blogs/${slug}`}>
                  <div className="cursor-pointer group">
                    <div className="relative h-[220px] rounded-3xl overflow-hidden mb-5 border border-gray-100 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-[10px] font-bold text-[#8A4BEF] uppercase tracking-wider mb-2.5">
                      {item.category}
                    </p>
                    <h3 className="text-[18px] font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
