import axios from "axios";

// HARDCODE for now — env var isn't loading
const API_URL = "http://localhost:8200/api/v1";

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  status: "draft" | "published";
  category: string;
  tags: string[];
  author_id: string;
  created_at: string;
  updated_at: string;
  views?: number;
}

export interface BlogListResponse {
  success: boolean;
  message: string;
  data: {
    blogs: Blog[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  timestamp: string;
  path: string;
}

export const getPublishedBlogs = async (): Promise<BlogListResponse> => {
  const url = `${API_URL}/blogs`;
  console.log("🚀 API CALL:", url);

  const response = await axios.get<BlogListResponse>(url);
  console.log("✅ RESPONSE:", response.data);

  return response.data;
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
  try {
    const response = await axios.get<{
      success: boolean;
      data: Blog;
      message: string;
    }>(`${API_URL}/blogs/${slug}`);

    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
//   try {
//     const response = await axios.get<{ success: boolean; data: Blog }>(
//       `${API_URL}/blogs/${slug}`,
//     );
//     return response.data.data;
//   } catch (error) {
//     console.error("❌ Error:", error);
//     return null;
//   }
// };
