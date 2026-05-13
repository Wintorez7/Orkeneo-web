"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogViewModel {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  readTime: string;
  content: string;
  tags: string[];
  created_at: string;
}

interface BlogGridWithSidebarProps {
  blogs: BlogViewModel[];
}

export default function BlogGridWithSidebar({
  blogs,
}: BlogGridWithSidebarProps) {
  // Pick top 3 most recent as "trending"
  const trending = blogs.slice(0, 3);

  return (
    <section className="bg-[#F8F9FC] px-4 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* LEFT: BLOG GRID */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-6">Latest Strategies</h2>

          <div className="grid sm:grid-cols-2 gap-6 items-stretch">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="h-full"
              >
                <div className="bg-white border p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 w-full shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col grow">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                      {blog.category}
                    </span>

                    <h3 className="mt-3 font-semibold text-lg text-gray-900 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 grow">
                      {blog.description}
                    </p>

                    <p className="text-xs text-gray-400 mt-4">
                      {blog.readTime} • {blog.author}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT: SIDEBAR */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Trending <span className="text-red-500 text-sm">🔥 HOT</span>
          </h2>

          <div className="space-y-4">
            {trending.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
                className="flex gap-3 items-center group"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </p>
                  <p className="text-xs text-gray-400">{blog.readTime}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Profit Insight Card — stays static */}
          <div className="mt-8 relative rounded-[28px] border border-[#006947] bg-[#EAF4F0] p-5 overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-10">
              <Image
                src="/images/trend-icon1.svg"
                alt="trend icon"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>

            <div className="flex items-center gap-2 text-[#0F6B4F] font-semibold text-xs tracking-[0.15em] uppercase">
              <span className="text-lg">
                <Image
                  src="/images/profit.png"
                  width={14}
                  alt="profit icon"
                  height={14}
                  className="object-contain"
                />
              </span>
              Profit Insight
            </div>

            <h3 className="mt-3 text-[20px] font-semibold text-gray-900 leading-snug">
              Average users save $2,400/mo
            </h3>

            <p className="mt-3 text-gray-600 text-[14px] leading-relaxed">
              By implementing our AI labor forecasting module.
            </p>

            <button className="mt-4 text-[#0F6B4F] font-semibold text-[16px] flex items-center gap-1 hover:gap-2 transition-all">
              Learn How →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
