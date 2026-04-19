"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Article, BlogApiResponse, BlogApiData } from "@/lib/type";
import { Search } from "lucide-react";
import FeaturedBlog from "@/app/blogs/FeaturedBlog";
import BlogGridWithSidebar from "@/app/blogs/BlogGridWithSidebar";
import { BLOGS } from "@/lib/blog.data";

const categories = [
  "All",
  "Food Cost Optimization",
  "Labor Management",
  "Menu Engineering",
  "Restaurant Growth",
  "AI & Technology",
];

const BlogListClient = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<BlogApiResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        );
        if (response.data && response.data.success) {
          const transformedArticles = response.data.data.map(
            (article: BlogApiData) => ({
              id: parseInt(article.id.split("-")[0], 16),
              title: article.title,
              slug: `${article.title.toLowerCase().replace(/\s+/g, "-")}-${article.id}`,
              description: article.excerpt,
              published_at: article.created_at,
              cover_image: article.featured_image,
              tags: article.tags,
              tag_list: article.tags,
              body_html: article.content,
              user: {
                name: "Orkeneo Team",
                username: "orkeneo",
                twitter_username: "orkeneo",
                profile_image: "/logos/favicon_io/android-chrome-512x512.png",
              },
              organization: {
                username: "orkeneo",
              },
            }),
          );
          setArticles(transformedArticles);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = articles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(articles.length / postsPerPage);
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBlogs = BLOGS.filter((blog: any) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      blog.title.toLowerCase().includes(searchText) ||
      blog.description.toLowerCase().includes(searchText) ||
      blog.category.toLowerCase().includes(searchText);

    const matchesCategory =
      active === "All" || blog.category.toLowerCase() === active.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="px-4 font-inter">
        <section className="bg-[#F8F9FC] mt-20 py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Insights to Grow Your <br /> Restaurant Smarter
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Learn how to reduce waste, optimize staffing, and increase profits
              using AI-driven strategies.
            </p>

            {/* Search Bar */}
            <div className="mt-8 flex items-center justify-center">
              <div className="flex items-center w-full max-w-xl bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 outline-none text-sm bg-transparent"
                />
                <kbd className="hidden sm:inline-block text-xs text-gray-400 border px-2 py-0.5 rounded">
                  ⌘K
                </kbd>
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  active === item
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-[#F0F3FF] text-gray-600 border border-gray-200 hover:bg-white"
                }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <FeaturedBlog blog={filteredBlogs[0]} />

        <BlogGridWithSidebar blogs={filteredBlogs} />

        <section className="bg-[#F0F3FF] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
              Want to see how this applies to your restaurant?
            </h2>

            {/* Subtext */}
            {/* <p className="mt-4 text-gray-500 text-[16px] md:text-lg max-w-xl mx-auto leading-relaxed">
              Join 1,200+ restaurant groups using Orkeneo to turn data into a
              competitive advantage.
            </p> */}

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Button */}
              <button className="px-8 py-3 rounded-full bg-[#3B6AF6] text-white font-medium text-sm shadow-md hover:bg-[#2f57d6] transition-all">
                Calculate My Savings
              </button>

              {/* Secondary Button */}
              <button className="px-8 py-3 rounded-full bg-[#F3F4F6] text-gray-800 font-medium text-sm border border-gray-200 hover:bg-gray-100 transition-all">
                Get AI Report
              </button>
            </div>
            <p className="mt-4 text-gray-500 text-[16px] md:text-lg max-w-xl mx-auto leading-relaxed">
              Free 14-day analysis. No credit card required.
            </p>
          </div>
        </section>

        <section className="bg-[#F8F9FC] px-4 py-16">
          <div className="max-w-6xl mx-auto bg-[#F3F4F6] rounded-[32px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* LEFT CONTENT */}
            <div className="max-w-xl">
              <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
                Get weekly restaurant insights
              </h3>

              <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                Stay ahead of the curve with our curated newsletter for
                restaurant owners and operators.
              </p>
            </div>

            {/* RIGHT INPUT + BUTTON */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full sm:w-65 md:w-75 px-5 py-3 rounded-full bg-[#E5E7EB] text-sm outline-none placeholder:text-gray-500"
              />

              {/* Button */}
              <button className="px-6 py-3 rounded-full bg-[#111827] text-white text-sm font-medium hover:bg-black transition-all">
                Subscribe
              </button>
            </div>

            {/* Bottom small text */}
            {/* <p className="text-xs text-gray-400 md:absolute md:bottom-6 md:right-12">
              No spam. Only high-value strategy. Unsubscribe at any time.
            </p> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogListClient;
