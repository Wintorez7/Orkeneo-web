import BlogListClient from "@/components/parentPages/BlogListClient";
import { metaData } from "@/lib/metadata";

export const metadata = metaData.blogs;

const BlogPage = () => {
  return <BlogListClient />;
};

export default BlogPage;
