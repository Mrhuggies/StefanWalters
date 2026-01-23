/**
 * WordPress API Integration
 * 
 * Uses the WordPress REST API to fetch blog posts
 */

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://stefanwalters.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'author'?: Array<{
      name: string;
      description: string;
      avatar_urls: { [key: string]: string };
    }>;
  };
}

/**
 * Fetch all blog posts from WordPress
 */
export async function getAllPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=100`, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.statusText);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error('Failed to fetch post:', res.statusText);
      return null;
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_fields=slug&per_page=100`);

    if (!res.ok) {
      console.error('Failed to fetch post slugs:', res.statusText);
      return [];
    }

    const posts = await res.json();
    return posts.map((post: { slug: string }) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

/**
 * Helper to format WordPress date strings
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Helper to strip HTML tags from excerpt
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Generate BlogPosting Schema for individual posts
 */
export function generateBlogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedDate: string;
  modifiedDate?: string;
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://stefanwalters.com/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: {
      '@type': 'Person',
      name: 'Stefan Walters',
      url: 'https://stefanwalters.com'
    },
    publisher: {
      '@type': 'Person',
      name: 'Stefan Walters',
      url: 'https://stefanwalters.com'
    },
    image: post.imageUrl || 'https://stefanwalters.com/og-image.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://stefanwalters.com/blog/${post.slug}`
    }
  };
}
