import { BLOGS } from "@/lib/blog.data";
import BlogContent from "./BlogContent";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    return <div>Invalid URL</div>;
  }

  const article = BLOGS.find((b) => b.slug === slug);

  if (!article) {
    return <div>Article Not Found</div>;
  }

  return <BlogContent article={article} />;
}
