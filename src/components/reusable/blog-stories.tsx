'use client';
import React, { useEffect, useState } from "react";
import { Article, BlogApiResponse, BlogApiData } from "@/lib/type";
import axios from "axios";
import { BlogCard } from "./blog-card";
import { formatDate } from "@/lib/utils";

interface BlogStoriesProp {
  text: string;
  islayout?: boolean;
}

export const BlogStories: React.FC<BlogStoriesProp> = ({ text, islayout }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<BlogApiResponse>(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        
        if (response.data && response.data.success) {
          const transformedArticles = response.data.data.map((article: BlogApiData) => ({
            id: parseInt(article.id.split('-')[0], 16),
            title: article.title,
            slug: `${article.title.toLowerCase().replace(/\s+/g, '-')}-${article.id}`,
            description: article.excerpt.substring(0, 150) + '...',
            published_at: article.created_at,
            cover_image: article.featured_image,
            tags: article.tags,
            tag_list: article.tags,
            body_html: article.content,
            user: {
              name: "Orkeneo Team",
              username: "orkeneo",
              twitter_username: "orkeneo",
              profile_image: "/logos/favicon_io/android-chrome-512x512.png"
            },
            organization: {
              username: "orkeneo"
            }
          }));
          console.log("transformedArticles", transformedArticles)
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

  if (isLoading) {
    return (
      <div className="max-w-screen-xl mx-auto py-10">
        <h2 className={`${islayout ? "text-start text-2xl" : "text-xl"} font-semibold mb-4 text-gray-900`}>
          {text}
        </h2>
        <div className="flex justify-center items-center h-48">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2
        className={`${
          islayout ? "text-start text-2xl" : "text-xl"
        } font-semibold mb-4 text-gray-900`}
      >
        {text}
      </h2>

      <div
        className={`grid gap-6 ${
          islayout
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 text-start"
        }`}
      >
        {/* Main Blog Cards */}
        {(islayout ? articles?.slice(0, 3) : articles?.slice(0, 1))?.map(
          (article) => (
            <BlogCard
              key={article.id}
              title={article.title}
              description={article.description}
              coverImage={article.cover_image}
              author={article.user.twitter_username || article.user?.username}
              date={formatDate(article.published_at)}
              tags={article.tag_list}
              slug={article.slug}
            />
          )
        )}

        {/* Horizontal right Blog Cards (Only for non-islayout) */}
        {!islayout && (
          <div className="space-y-6">
            {articles?.slice(1, 3).map((article) => (
              <BlogCard
                key={article.id}
                title={article.title}
                description={article.description}
                coverImage={article.cover_image}
                author={article.user.twitter_username || article.user?.username}
                date={formatDate(article.published_at)}
                tags={article.tag_list}
                slug={article.slug}
                isHorizontal
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
