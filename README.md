# Stefan Walters - Headless WordPress Website

A modern, performant Next.js website with headless WordPress CMS integration.

## Project Structure

```
stefan-walters-website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with email & social icons
│   │   └── Footer.tsx      # Site footer
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post template
│   ├── brainspotting/
│   │   └── page.tsx        # Dedicated Brainspotting page (SEO)
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── services/
│   │   └── page.tsx        # Services overview
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Placeholder images (WebP format)
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ installed ([Download here](https://nodejs.org/))
- npm or yarn package manager

### 1. Install Dependencies

**IMPORTANT:** You must run this first to install all required packages including `lucide-react` for icons.

```bash
cd /Users/thomashughes/Desktop/Stefan-Walters/stefan-walters-website
npm install
```

This will install:
- Next.js 15.2.0
- React 19
- Lucide React (icons)
- Tailwind CSS
- TypeScript
- All other dependencies

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## WordPress Integration

### WordPress Setup


The WordPress site acts as a headless CMS - you only use it for content management, not the frontend.

#### Recommended WordPress Setup:

1. **Keep it minimal:**
   - Delete all themes except one default theme
   - Remove unnecessary plugins
   - Keep only essential plugins:
     - **Security:** Wordfence or Solid Security
     - **Webhooks:** WP Webhooks (for triggering rebuilds)
     - **SEO:** Yoast SEO (optional, for metadata)
     - **Backup:** UpdraftPlus

2. **Security hardening:**
   - Block public access to WordPress frontend
   - Only allow access to `/wp-admin` and `/wp-json` endpoints
   - Use strong passwords and 2FA

3. **Enable REST API:**
   The WordPress REST API is enabled by default. Test it at:
   ```
   https://your-wordpress-site.com/wp-json/wp/v2/posts
   ```

### Connecting to Next.js

Update the placeholder API calls in these files:

#### 1. Blog Listing Page (`app/blog/page.tsx`)

Replace the `getPosts()` function:

```typescript
async function getPosts() {
  const res = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed', {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return res.json();
}
```

#### 2. Single Post Page (`app/blog/[slug]/page.tsx`)

Replace the `getPost()` function:

```typescript
async function getPost(slug: string) {
  const res = await fetch(
    `https://your-wordpress-site.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  
  const posts = await res.json();
  if (!posts.length) return null;
  return posts[0];
}
```

And update `generateStaticParams()`:

```typescript
export async function generateStaticParams() {
  const posts = await fetch(
    'https://your-wordpress-site.com/wp-json/wp/v2/posts?_fields=slug'
  ).then(res => res.json());
  
  return posts.map((post: any) => ({ slug: post.slug }));
}
```

### Environment Variables

Create a `.env.local` file:

```bash
WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

Then update fetch calls to use:

```typescript
const apiUrl = process.env.WORDPRESS_API_URL;
const res = await fetch(`${apiUrl}/posts?_embed`);
```

## Features

### Current Pages

- **Homepage** (`/`) - Hero, about, services overview, CTA
- **Services** (`/services`) - All services on one page
- **Brainspotting** (`/brainspotting`) - Dedicated standalone page (good for SEO)
- **Blog** (`/blog`) - Blog listing with newest posts first
- **Blog Post** (`/blog/[slug]`) - Individual post template
- **Contact** (`/contact`) - Contact/booking page

### Navigation

- Email in navbar: `stefan@walters.com`
- Social icons: Facebook, Instagram, Substack
- Responsive mobile menu (needs implementation)

### Styling

- **Design System:**
  - Primary color: Dark navy/slate
  - Accent color: Warm copper/bronze
  - Background: Soft off-white
  - Typography: Modern serif + clean sans-serif
  
- **Components:**
  - Feature cards
  - Gradient text effects
  - Button styles (primary, text, outline)
  - Prose styles for blog content

## Development Workflow

### Making Changes

1. Edit pages in `/app` directory
2. Components go in `/app/components`
3. Images go in `/public/images`
4. Styles are in `/app/globals.css`

### Blog Content

- Stefan writes in WordPress (wp-admin)
- Content automatically pulls into Next.js via REST API
- Deploys can be triggered on publish using webhooks

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Recommended: Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

Vercel automatically:
- Builds on every push
- Provides preview URLs
- Handles ISR (Incremental Static Regeneration)

### Webhook for Rebuilds

Set up a webhook in WordPress to trigger Vercel rebuilds when posts are published:

1. Get Vercel deploy hook URL
2. Install WP Webhooks plugin
3. Configure webhook to fire on `publish_post`

## TO-DO

- [ ] Replace placeholder images with professional photos
- [ ] Connect WordPress REST API endpoints
- [ ] Set up environment variables
- [ ] Add mobile menu functionality
- [ ] Implement contact form handler
- [ ] Add loading states for blog pages
- [ ] Set up 404 page
- [ ] Configure SEO metadata
- [ ] Set up Google Analytics
- [ ] Add schema markup for SEO

## WordPress REST API Endpoints

Common endpoints you'll use:

```
GET /wp-json/wp/v2/posts              # All posts
GET /wp-json/wp/v2/posts?slug={slug}  # Single post by slug
GET /wp-json/wp/v2/posts?_embed       # Include featured images & author
GET /wp-json/wp/v2/categories         # Post categories
GET /wp-json/wp/v2/tags               # Post tags
```

## Support

For questions about:
- **Next.js:** [Next.js Documentation](https://nextjs.org/docs)
- **WordPress REST API:** [WP REST API Handbook](https://developer.wordpress.org/rest-api/)
- **Deployment:** [Vercel Docs](https://vercel.com/docs)

---

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.
