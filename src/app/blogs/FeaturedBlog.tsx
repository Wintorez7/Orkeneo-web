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

interface FeaturedBlogProps {
  blog: BlogViewModel | undefined;
}

export default function FeaturedBlog({ blog }: FeaturedBlogProps) {
  if (!blog) return null;

  // Ensure image exists
  const imageUrl = blog.image || "/images/placeholder-blog.png";
  const authorImg = blog.authorImage || "/avatar/default.png";

  return (
    <section className="px-4 py-10 bg-[#F8F9FC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-sm">
          {/* LEFT IMAGE */}
          <div className="relative min-h-75 md:min-h-100 flex items-center justify-center">
            <span className="absolute top-4 left-4 bg-white z-10 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
              FEATURED
            </span>

            <Image
              src={imageUrl}
              alt={blog.title || "Featured blog"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs font-semibold text-gray-500 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              {blog.category || "Uncategorized"}
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              {blog.title}
            </h2>

            <p className="mt-4 text-gray-500 text-sm md:text-base">
              {blog.description}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Image
                src={authorImg}
                alt={blog.author || "Author"}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {blog.author || "Unknown"}
                </p>
                <p className="text-xs text-gray-500">
                  {blog.readTime || "5 min read"}
                </p>
              </div>
            </div>

            <Link href={`/blogs/${blog.slug}`}>
              <button className="mt-6 w-fit cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition">
                Read Article →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
