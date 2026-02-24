/**
 * WordPress API Integration
 * 
 * Uses the WordPress REST API to fetch blog posts
 * Includes security sanitization for all HTML content
 */

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://cms.stefanwalters.com/wp-json/wp/v2';

// Allowed HTML tags for sanitization
const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'b', 'i', 'u', 's',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'a', 'blockquote', 'pre', 'code'
];

/**
 * Simple HTML sanitizer that works in all environments
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Remove script tags and their contents
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers
  clean = clean.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  
  // Remove javascript: URLs
  clean = clean.replace(/href\s*=\s*["']javascript:[^"']*["']/gi, 'href="#"');
  
  return clean;
}

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
  const url = `${WORDPRESS_API_URL}/posts?_embed&per_page=100`;
  console.log('Fetching posts from:', url);
  
  try {
    const res = await fetch(url, {
      cache: 'no-store', // Always fetch fresh data
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log('Response status:', res.status, res.statusText);

    if (!res.ok) {
      console.error('Failed to fetch posts:', res.status, res.statusText);
      return [];
    }

    const posts = await res.json();
    console.log('Fetched posts count:', posts.length);
    return posts;
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
      cache: 'no-store',
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
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_fields=slug&per_page=100`, {
      cache: 'no-store',
    });

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
  if (!html) return '';
  // Strip all HTML tags
  const stripped = html.replace(/<[^>]*>/g, '');
  return stripped.replace(/&nbsp;/g, ' ').replace(/&#8217;/g, "'").replace(/&#8230;/g, '...').trim();
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
