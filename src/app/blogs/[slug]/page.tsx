import { notFound } from "next/navigation";
import BlogContent from "./BlogContent";
import { getBlogBySlug, getPublishedBlogs } from "@/lib/blogApi";

interface RelatedBlog {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
}

interface TransformedArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  authorRole: string;
  readTime: string;
  date: string;
  content: any[];
  toc: string[];
  tags: string[];
  related: RelatedBlog[];
}

// Helper: Transform API blog to BlogContent expected shape
function transformBlog(apiBlog: any): TransformedArticle {
  const paragraphs = apiBlog.content
    .split(/\n+/)
    .filter((p: string) => p.trim().length > 0);

  const content: any[] = [];
  const toc: string[] = ["Introduction"];

  paragraphs.forEach((para: string) => {
    const trimmed = para.trim();

    if (
      trimmed.length < 80 &&
      !trimmed.endsWith(".") &&
      !trimmed.startsWith("•") &&
      !trimmed.startsWith("-")
    ) {
      content.push({ type: "heading", text: trimmed });
      toc.push(trimmed);
    } else if (trimmed.startsWith("•") || trimmed.startsWith("-")) {
      const lastBlock = content[content.length - 1];
      if (lastBlock?.type === "list") {
        lastBlock.items.push(trimmed.replace(/^[•-]\s*/, ""));
      } else {
        content.push({
          type: "list",
          items: [trimmed.replace(/^[•-]\s*/, "")],
        });
      }
    } else {
      content.push({ type: "paragraph", text: trimmed });
    }
  });

  content.push({
    type: "quote",
    text: "Predictive intelligence isn't just about data; it's about the survival of modern dining margins.",
  });

  content.push({
    type: "insight",
    text: "Restaurants lose 5–8% revenue due to poor demand planning.",
  });

  const knownAuthors: Record<
    string,
    { name: string; role: string; image: string }
  > = {
    "108bab80-6f59-495c-b6d1-613a43bdff69": {
      name: "Orkeneo Team",
      role: "AI Lead Architect",
      image: "/avatar/default.png",
    },
  };

  const author = knownAuthors[apiBlog.author_id] || {
    name: "Orkeneo Team",
    role: "Content Team",
    image: "/avatar/default.png",
  };

  const wordCount = apiBlog.content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: apiBlog.id,
    slug: apiBlog.slug,
    title: apiBlog.title,
    category: apiBlog.category,
    description: apiBlog.excerpt || apiBlog.content.slice(0, 120) + "...",
    image: apiBlog.featured_image || "/images/placeholder-blog.png",
    author: author.name,
    authorImage: author.image,
    authorRole: author.role,
    readTime: `${minutes} min read`,
    date: new Date(apiBlog.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    content,
    toc,
    tags: apiBlog.tags,
    related: [], // typed as RelatedBlog[] now
  };
}

// Helper: Transform related blogs
function transformRelatedBlogs(
  blogs: any[],
  currentSlug: string,
): RelatedBlog[] {
  return blogs
    .filter((b: any) => b.slug !== currentSlug)
    .slice(0, 3)
    .map((b: any) => ({
      id: b.id,
      slug: b.slug,
      title: b.title,
      category: b.category,
      image: b.featured_image || "/images/placeholder-blog.png",
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  // Fetch blog + all blogs for related section (parallel)
  const [apiBlog, allBlogsResponse] = await Promise.all([
    getBlogBySlug(slug),
    getPublishedBlogs(),
  ]);

  if (!apiBlog) {
    notFound();
  }

  const article = transformBlog(apiBlog);

  // Add related blogs from API
  if (allBlogsResponse && allBlogsResponse.length > 0) {
    article.related = transformRelatedBlogs(allBlogsResponse, slug);
  }

  return <BlogContent article={article} />;
}
