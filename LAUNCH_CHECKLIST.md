# Launch Checklist - Stefan Walters Website

## Phase 1: Initial Setup (15-30 min)

### Local Development
- [ ] Navigate to project folder
- [ ] Run `npm install`
- [ ] Test with `npm run dev`
- [ ] Verify all pages load at `http://localhost:3000`
- [ ] Check console for errors

### Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add WordPress API URL to `.env.local`
- [ ] Test WordPress API endpoint in browser
- [ ] Verify API returns JSON data

## Phase 2: Content & Media (1-2 hours)

### Images
- [ ] Replace `/public/images/KewGardens-15.webp` with Stefan's headshot
- [ ] Add professional photos for:
  - [ ] Homepage hero
  - [ ] About section
  - [ ] Services page
  - [ ] Brainspotting page
- [ ] Optimize all images (WebP format, < 200KB)
- [ ] Add proper alt text to all images

### Text Content
- [ ] Review homepage copy
- [ ] Review services descriptions
- [ ] Review brainspotting page
- [ ] Update contact page with:
  - [ ] Actual phone number
  - [ ] Real office address
  - [ ] Correct availability hours
  - [ ] Any booking system URL

### Links & Social Media
- [ ] Update Facebook URL in Navbar
- [ ] Update Instagram URL in Navbar
- [ ] Update Substack URL in Navbar and Blog page
- [ ] Update Footer social links
- [ ] Add any other social platforms

## Phase 3: WordPress Integration (30-45 min)

### WordPress Backend
- [ ] Log into WordPress admin
- [ ] Verify REST API is enabled
- [ ] Test: `https://your-site.com/wp-json/wp/v2/posts`
- [ ] Write 2-3 test blog posts with:
  - [ ] Featured images
  - [ ] Categories
  - [ ] Proper formatting

### Next.js Connection
- [ ] Update `WORDPRESS_API_URL` in `.env.local`
- [ ] Replace placeholder data in `/app/blog/page.tsx`
- [ ] Replace placeholder data in `/app/blog/[slug]/page.tsx`
- [ ] Test blog listing page loads posts
- [ ] Test individual blog post page works
- [ ] Verify images load correctly
- [ ] Check date formatting

## Phase 4: Forms & Functionality (45-60 min)

### Contact Form
- [ ] Choose form service (Formspree, SendGrid, etc.)
- [ ] Get form endpoint/API key
- [ ] Update contact page with form handler
- [ ] Add form validation
- [ ] Test form submission
- [ ] Set up email notifications
- [ ] Add thank you message/redirect

### Mobile Menu
- [ ] Implement hamburger menu component
- [ ] Add mobile menu animations
- [ ] Test on mobile devices
- [ ] Ensure menu closes after clicking link

## Phase 5: SEO & Analytics (30-45 min)

### Meta Tags
- [ ] Add meta descriptions to all pages:
  - [ ] Homepage
  - [ ] Services
  - [ ] Brainspotting
  - [ ] Contact
  - [ ] Blog
- [ ] Add Open Graph images
- [ ] Configure Twitter Card metadata
- [ ] Add favicon
- [ ] Add Apple touch icon

### Analytics
- [ ] Set up Google Analytics 4
- [ ] Add GA tracking code
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Verify ownership

### Schema Markup
- [ ] Add LocalBusiness schema
- [ ] Add Person schema for Stefan
- [ ] Add Service schema
- [ ] Add BlogPosting schema for articles

## Phase 6: Testing (1-2 hours)

### Functional Testing
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test navigation menu
- [ ] Test contact form
- [ ] Test blog loading
- [ ] Test individual blog posts
- [ ] Test 404 page behavior

### Cross-Browser Testing
- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (mobile/iOS)
- [ ] Edge

### Mobile Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Check touch targets (min 44x44px)
- [ ] Test scrolling behavior
- [ ] Verify text is readable

### Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check page load times
- [ ] Verify images are optimized
- [ ] Check for console errors
- [ ] Test on slow 3G connection

### Accessibility Testing
- [ ] Test with screen reader
- [ ] Check keyboard navigation
- [ ] Verify color contrast
- [ ] Check alt text on images
- [ ] Test with high contrast mode

## Phase 7: Deployment (30-60 min)

### Pre-Deployment
- [ ] Run `npm run build` locally
- [ ] Fix any build errors
- [ ] Test production build locally
- [ ] Create `.gitignore` (exclude `.env.local`, `node_modules`)

### Git Repository
- [ ] Initialize Git: `git init`
- [ ] Add files: `git add .`
- [ ] Commit: `git commit -m "Initial commit"`
- [ ] Create GitHub repository
- [ ] Push to GitHub

### Vercel Deployment
- [ ] Sign up/login to Vercel
- [ ] Import GitHub repository
- [ ] Add environment variables:
  - [ ] `WORDPRESS_API_URL`
  - [ ] Any form API keys
  - [ ] Analytics tracking IDs
- [ ] Deploy
- [ ] Test deployed site

### Domain Configuration
- [ ] Purchase domain (if needed)
- [ ] Configure DNS records
- [ ] Add custom domain in Vercel
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify SSL certificate is active

## Phase 8: WordPress Webhooks (Optional, 15-30 min)

### Automatic Rebuilds
- [ ] Install WP Webhooks plugin in WordPress
- [ ] Get Vercel deploy hook URL
- [ ] Configure webhook in WordPress
- [ ] Test: Publish new post
- [ ] Verify: Site rebuilds automatically

## Phase 9: Final Checks (30-45 min)

### Content
- [ ] Proofread all pages
- [ ] Check for typos
- [ ] Verify all contact information
- [ ] Confirm pricing is correct
- [ ] Check all CTAs work

### SEO
- [ ] Submit sitemap to Google
- [ ] Submit sitemap to Bing
- [ ] Check Google Search Console
- [ ] Verify robots.txt
- [ ] Check meta tags in browser

### Social Media
- [ ] Share on Facebook
- [ ] Share on Instagram
- [ ] Share on LinkedIn
- [ ] Send to email list (if applicable)

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring
- [ ] Enable Google Analytics

## Phase 10: Post-Launch (Ongoing)

### Week 1
- [ ] Monitor analytics daily
- [ ] Check for broken links
- [ ] Monitor form submissions
- [ ] Check page load times
- [ ] Fix any issues reported

### Month 1
- [ ] Review analytics
- [ ] Optimize based on user behavior
- [ ] Add more blog content
- [ ] Update meta descriptions if needed
- [ ] A/B test CTAs

### Ongoing
- [ ] Publish blog posts regularly (weekly/bi-weekly)
- [ ] Update images seasonally
- [ ] Refresh testimonials
- [ ] Update services/pricing as needed
- [ ] Monitor SEO rankings

## Emergency Contacts

**Technical Issues:**
- Next.js Docs: https://nextjs.org/docs
- WordPress REST API: https://developer.wordpress.org/rest-api/
- Vercel Support: https://vercel.com/support

**Form Issues:**
- [Form service documentation]

**WordPress Issues:**
- [Hosting provider support]

## Notes

**Estimated Total Time:** 6-10 hours
**Difficulty:** Intermediate
**Required Skills:** Basic WordPress, basic command line, testing

**Tips:**
- Work through checklist in order
- Test each phase before moving on
- Take breaks between phases
- Document any issues/solutions
- Don't skip testing!

---

**Started:** ___/___/______
**Completed:** ___/___/______
**Launched by:** ________________
