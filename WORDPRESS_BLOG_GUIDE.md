# WordPress Blog Integration - Testing & Troubleshooting

## How It Works

The blog now **automatically fetches posts** from your WordPress site using the REST API.

### What's Configured:
- ✅ WordPress API URL: `https://stefanwalters.com/wp-json/wp/v2`
- ✅ Blog listing page: `/app/blog/page.tsx` (fetches all posts)
- ✅ Individual post page: `/app/blog/[slug]/page.tsx` (fetches single post)
- ✅ Environment variable: `/.env.local`

## Testing WordPress Connection

### 1. Test the API directly in your browser:

Visit this URL:
```
https://stefanwalters.com/wp-json/wp/v2/posts
```

**What you should see:**
- JSON data with an array of posts
- Each post has: `id`, `title`, `content`, `excerpt`, `slug`, `date`, etc.

**If you see an error:**
- WordPress REST API might be disabled
- The site might be blocking API requests
- There might be no published posts

### 2. Test in the Next.js site:

```bash
# Start dev server
npm run dev

# Visit the blog page
http://localhost:3000/blog
```

**What should happen:**
- If there are published posts, they'll display in a grid
- If there are NO posts, you'll see: "No posts yet. Check back soon!"

### 3. Check for errors:

Open browser console (F12) and look for:
- Network errors (failed API requests)
- CORS errors (WordPress blocking the request)
- 404 errors (WordPress API not found)

## Common Issues & Fixes

### Issue 1: "No posts yet" message shows even though posts exist

**Possible causes:**
1. WordPress REST API is disabled
2. Posts are in draft mode (not published)
3. CORS is blocking the request
4. Wrong API URL

**Fix:**
```bash
# Test API directly
curl https://stefanwalters.com/wp-json/wp/v2/posts

# Should return JSON with posts
# If it returns an error, WordPress API needs to be enabled
```

### Issue 2: CORS Error

**Error in console:**
```
Access to fetch at 'https://stefanwalters.com/...' has been blocked by CORS policy
```

**Fix - Add to WordPress `.htaccess` or functions.php:**
```php
// In WordPress functions.php
add_action('rest_api_init', function() {
    header('Access-Control-Allow-Origin: *');
});
```

### Issue 3: API Returns 404

**This means WordPress REST API is not available.**

**Fix:**
1. Check WordPress permalinks (Settings → Permalinks)
2. Click "Save Changes" (this regenerates .htaccess)
3. Test API URL again

### Issue 4: Images Not Loading

**Cause:** WordPress images use full URLs, might be served over HTTP instead of HTTPS

**Fix - In `next.config.js`:**
```javascript
images: {
  domains: ['stefanwalters.com'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'stefanwalters.com',
    },
    {
      protocol: 'http', // Add this if images are HTTP
      hostname: 'stefanwalters.com',
    },
  ],
},
```

## How to Publish Posts

1. Log into WordPress admin: `https://stefanwalters.com/wp-admin`
2. Go to Posts → Add New
3. Write your post
4. Add featured image
5. Click **Publish** (not Draft!)
6. Visit your Next.js site `/blog` - post should appear within 60 seconds

## Data Flow

```
WordPress Admin
    ↓
Publish Post
    ↓
WordPress REST API
    ↓
Next.js fetches (every 60 seconds)
    ↓
Blog displays on site
```

## Revalidation

Posts are cached and revalidated every **60 seconds**.

This means:
- New posts appear within 1 minute
- Old posts are cached for performance
- You don't hammer WordPress with requests

To change revalidation time, edit:
```typescript
// In /lib/wordpress.ts
next: { revalidate: 60 } // Change to 30 for 30 seconds, etc.
```

## Production Deployment

When you deploy to Vercel/production:

1. **Add environment variable:**
   - `WORDPRESS_API_URL=https://stefanwalters.com/wp-json/wp/v2`

2. **Set up webhook (optional but recommended):**
   - Install WP Webhooks plugin in WordPress
   - Get Vercel deploy hook URL
   - Configure WordPress to trigger rebuild on publish
   - Result: New posts appear instantly instead of waiting 60 seconds

## Debugging Commands

```bash
# Test WordPress API
curl https://stefanwalters.com/wp-json/wp/v2/posts | jq

# Test specific post by slug
curl https://stefanwalters.com/wp-json/wp/v2/posts?slug=your-post-slug | jq

# Check if API is enabled
curl https://stefanwalters.com/wp-json/

# Should return: {"name":"Stefan Walters","description":"..."}
```

## What's Already Included

✅ Automatic fetching from WordPress
✅ Error handling (returns empty array if API fails)
✅ Featured images support
✅ Author information
✅ Publication dates
✅ Excerpts
✅ Full content rendering
✅ SEO metadata for each post
✅ Schema markup for each post
✅ Responsive grid layout
✅ Image optimization

## Still Need Help?

Check:
1. WordPress admin → Settings → Permalinks (save to regenerate)
2. WordPress admin → Settings → Reading (make sure API isn't disabled)
3. Browser console for errors
4. Network tab to see API requests

---

**TL;DR:** The blog automatically pulls from WordPress. Just publish posts in WordPress admin and they'll appear on the site within 60 seconds. If not working, test the API URL in your browser first.
