"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import FeaturedBlog from "@/app/blogs/FeaturedBlog";
import BlogGridWithSidebar from "@/app/blogs/BlogGridWithSidebar";
import { getPublishedBlogs, Blog } from "@/lib/blogApi";

// Categories will be built dynamically from API data + these defaults
const DEFAULT_CATEGORIES = [
  "All",
  "Food Cost Optimization",
  "Labor Management",
  "Menu Engineering",
  "Restaurant Growth",
  "AI & Technology",
];

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

const BlogListClient = () => {
  const [blogs, setBlogs] = useState<BlogViewModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await getPublishedBlogs();

        if (response.success && response.data?.blogs) {
          const transformed: BlogViewModel[] = response.data.blogs.map(
            (blog: Blog) => ({
              id: blog.id,
              slug: blog.slug,
              title: blog.title,
              category: blog.category,
              description: blog.excerpt || blog.content.slice(0, 120) + "...",
              image: blog.featured_image || "/images/placeholder-blog.png",
              author: getAuthorName(blog.author_id),
              authorImage: getAuthorAvatar(blog.author_id),
              readTime: estimateReadTime(blog.content),
              content: blog.content,
              tags: blog.tags,
              created_at: blog.created_at,
            }),
          );
          setBlogs(transformed);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const getAuthorName = (authorId: string): string => {
    const knownAuthors: Record<string, string> = {
      "108bab80-6f59-495c-b6d1-613a43bdff69": "Orkeneo Team",
    };
    return knownAuthors[authorId] || "Orkeneo Team";
  };

  const getAuthorAvatar = (authorId: string): string => {
    const knownAvatars: Record<string, string> = {
      "108bab80-6f59-495c-b6d1-613a43bdff69": "/avatar/default.png",
    };
    return knownAvatars[authorId] || "/avatar/default.png";
  };

  const estimateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const wordCount = content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  };

  const filteredBlogs = blogs.filter((blog) => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Insights to Grow Your <br /> Restaurant Smarter
            </h1>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              Learn how to reduce waste, optimize staffing, and increase profits
              using AI-driven strategies.
            </p>

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

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {DEFAULT_CATEGORIES.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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

        {/* Featured + Grid with empty state */}
        {filteredBlogs.length > 0 ? (
          <>
            <FeaturedBlog blog={filteredBlogs[0]} />
            <BlogGridWithSidebar blogs={filteredBlogs} />
          </>
        ) : (
          <div className="py-20 px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No blogs found
              </h3>
              <p className="text-gray-500 mb-6">
                {active !== "All"
                  ? `No blogs available in "${active}" category yet.`
                  : search
                    ? `No blogs match "${search}".`
                    : "No blog posts available yet. Check back soon!"}
              </p>
              {active !== "All" && (
                <button
                  onClick={() => setActive("All")}
                  className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  View All Blogs
                </button>
              )}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-[#F0F3FF] py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
              Want to see how this applies to your restaurant?
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 rounded-full bg-[#3B6AF6] text-white font-medium text-sm shadow-md hover:bg-[#2f57d6] transition-all">
                Calculate My Savings
              </button>
              <button className="px-8 py-3 rounded-full bg-[#F3F4F6] text-gray-800 font-medium text-sm border border-gray-200 hover:bg-gray-100 transition-all">
                Get AI Report
              </button>
            </div>
            <p className="mt-4 text-gray-500 text-[16px] md:text-lg max-w-xl mx-auto leading-relaxed">
              Free 13-day analysis. No credit card required.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-[#F8F9FC] px-4 py-16">
          <div className="max-w-6xl mx-auto bg-[#F3F4F6] rounded-[32px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-[22px] md:text-[26px] font-semibold text-gray-900">
                Get weekly restaurant insights
              </h3>
              <p className="mt-2 text-gray-500 text-sm md:text-base leading-relaxed">
                Stay ahead of the curve with our curated newsletter for
                restaurant owners and operators.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full sm:w-65 md:w-75 px-5 py-3 rounded-full bg-[#E5E7EB] text-sm outline-none placeholder:text-gray-500"
              />
              <button className="px-6 py-3 rounded-full bg-[#111827] text-white text-sm font-medium hover:bg-black transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogListClient;
