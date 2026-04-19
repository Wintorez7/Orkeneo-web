"use client";

import Image from "next/image";
import Link from "next/link";

const trending = [
  {
    title: "Dynamic Pricing: Is Your Restaurant Ready?",
    views: "3.2k Views • 4 min read",
    img: "/images/trend1.png",
  },
  {
    title: "Sustainable Sourcing in the Age of AI",
    views: "2.8k Views • 6 min read",
    img: "/images/trend2.png",
  },
  {
    title: "Third-Party App Profit Protection",
    views: "2.1k Views • 5 min read",
    img: "/images/trend3.png",
  },
];

export default function BlogGridWithSidebar({ blogs }: any) {
  return (
    <section className="bg-[#F8F9FC] px-4 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT: BLOG GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-6">Latest Strategies</h2>

          <div className="grid sm:grid-cols-2 gap-6 ">
            {blogs.map((blog: any, i: number) => {
              return (
                <Link key={i} href={`/blogs/${blog.slug}`}>
                  <div className="bg-white border p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                    {/* Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>

                      <h3 className="mt-3 font-semibold text-lg text-gray-900">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2">
                        {blog.description}
                      </p>

                      <p className="text-xs text-gray-400 mt-4">
                        {blog.readTime} • {blog.author}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <div>
          {/* Trending */}
          <h2 className="text-xl font-semibold mb-4">
            Trending <span className="text-red-500 text-sm">🔥 HOT</span>
          </h2>

          <div className="space-y-4">
            {trending.map((item, i) => (
              <div key={i} className="flex gap-3 items-center">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">{item.views}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Profit Insight Card */}
          <div className="mt-8 relative rounded-[28px] border border-[#006947] bg-[#EAF4F0] p-5 overflow-hidden">
            {/* Background subtle icon (bottom-right) */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <Image
                src="/images/trend-icon1.svg"
                alt="trend icon"
                width={140}
                height={140}
                className="object-contain "
              />
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 text-[#0F6B4F] font-semibold text-xs tracking-[0.15em] uppercase">
              <span className="text-lg">
                <Image
                  src="/images/profit.png"
                  width={14}
                  alt="profit icon"
                  height={14}
                  className="object-contain "
                />
              </span>
              Profit Insight
            </div>

            {/* Title */}
            <h3 className="mt-3 text-[20px] md:text-[20px] font-semibold text-gray-900 leading-snug">
              Average users save $2,400/mo
            </h3>

            {/* Description */}
            <p className="mt-3 text-gray-600 text-[14px] leading-relaxed">
              By implementing our AI labor forecasting module.
            </p>

            {/* CTA */}
            <button className="mt-4 text-[#0F6B4F] font-semibold text-[16px] flex items-center gap-1 hover:gap-2 transition-all">
              Learn How →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
