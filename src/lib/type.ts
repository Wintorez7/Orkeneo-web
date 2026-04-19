export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  published_at: string;
  cover_image: string;
  tags: string[];
  tag_list: string[];
  body_html: string;
  user: {
    name: string;
    username: string;
    twitter_username: string;
    profile_image: string;
  };
  organization: {
    username: string;
  };
}

// type BlogArticleProps = {
//   title: string;
//   slug: string;
//   url: string;
//   date: string;
//   description: string;
//   published_at: string;
//   cover_image: string;
//   tags: string[];
//   body_html: string;
//   user: {
//     name: string;
//     username: string;
//     twitter_username: string;
//     profile_image: string;
//   };
//   organization?: {
//     username: string;
//   };
// };

export interface BlogApiResponse {
  success: boolean;
  data: BlogApiData[];
}

export interface BlogApiData {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  created_at: string;
  featured_image: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    company?: string;
    created_at: string;
  };
}

export interface Testimonial {
  id: string;
  logo?: string;
  content: string;
  designation?: string;
  name?: string;
  role?: string;
  image?: string;
}