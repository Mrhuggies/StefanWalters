# Website Structure & Navigation Flow

## Site Map

```
┌─────────────────────────────────────────────────────────────┐
│                    stefanwalters.com                         │
│                         (Home)                               │
│  • Hero with CTA                                            │
│  • About/Approach                                           │
│  • Quote Section                                            │
│  • Final CTA                                                │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┬──────────────┐
        │                     │                     │              │
┌───────▼───────┐   ┌────────▼────────┐   ┌───────▼──────┐  ┌───▼──────┐
│   Services    │   │  Brainspotting  │   │     Blog     │  │ Contact  │
│               │   │                 │   │              │  │          │
│ • Individual  │   │ • What is it    │   │ • Post Grid  │  │ • Form   │
│ • Couples     │   │ • How it works  │   │ • Filtering  │  │ • Info   │
│ • Performance │   │ • What helps    │   │ • Newsletter │  │ • Hours  │
│ • FAQ         │   │ • CTA           │   │              │  │          │
│ • Pricing     │   │                 │   │              │  │          │
└───────────────┘   └─────────────────┘   └──────┬───────┘  └──────────┘
                                                  │
                                          ┌───────▼────────┐
                                          │  Blog Post     │
                                          │                │
                                          │ • Hero Image   │
                                          │ • Content      │
                                          │ • Author Bio   │
                                          │ • CTA          │
                                          └────────────────┘
```

## Navigation Bar (All Pages)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  Stefan Walters    About   stefan@walters.com   Services   Brainspotting  │
│                    Blog    📘 📷 📰   [Book Consultation]                  │
└────────────────────────────────────────────────────────────────────────────┘
                                    ↑
                         Social Icons (FB, IG, Substack)
```

## Footer (All Pages)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  Quick Links          Contact              Follow                       │
│  • About              • Email              • Facebook                   │
│  • Services           • Phone              • Instagram                  │
│  • Brainspotting      • Location           • Substack                   │
│  • Blog                                                                  │
│  • Contact                                                               │
│                                                                          │
│  © 2024 Stefan Walters. All rights reserved.                           │
└─────────────────────────────────────────────────────────────────────────┘
```

## Page Hierarchy

### Homepage (/)
- **Purpose**: Convert visitors into consultations
- **Key Elements**:
  - Strong hero with value proposition
  - Trust indicators (certifications)
  - Service overview
  - Social proof
  - Multiple CTAs

### Services (/services)
- **Purpose**: Detailed service information
- **Sections**:
  1. Individual Therapy
  2. Couples Therapy
  3. Brainspotting
  4. Performance Coaching
  5. FAQ
  6. Pricing
  7. CTA

### Brainspotting (/brainspotting)
- **Purpose**: SEO + education about Brainspotting
- **Why Standalone**: 
  - Specific search term traffic
  - Detailed explanation space
  - Link building target
- **Sections**:
  - What is Brainspotting
  - How it works
  - What it helps with
  - Integration with other therapies
  - CTA to book

### Blog (/blog)
- **Purpose**: SEO + thought leadership
- **Features**:
  - Grid layout
  - Featured images
  - Excerpts
  - Date sorting (newest first)
  - Newsletter signup

### Blog Post (/blog/[slug])
- **Purpose**: Individual article display
- **Features**:
  - Full content
  - Author bio
  - Related articles
  - Share buttons (future)
  - Comments (future, maybe)

### Contact (/contact)
- **Purpose**: Capture leads
- **Features**:
  - Contact form
  - Location/hours
  - Alternative contact methods
  - What to expect

## User Journeys

### Journey 1: Discovery → Consultation
```
Google Search "brainspotting therapy London"
    ↓
/brainspotting page
    ↓
Reads about approach
    ↓
"Book Consultation" button
    ↓
/contact form
    ↓
Submits inquiry
```

### Journey 2: Blog Reader → Client
```
Google Search "attachment theory relationships"
    ↓
/blog/attachment-paradox
    ↓
Reads article
    ↓
"Work with Stefan" link in author bio
    ↓
/contact form
```

### Journey 3: Referral → Services
```
Referred by friend
    ↓
Homepage
    ↓
"Learn More" → /services
    ↓
Reads about couples therapy
    ↓
"Get in Touch" button
    ↓
/contact form
```

## Content Strategy

### SEO Focus Pages
1. **/brainspotting** - "Brainspotting therapy London"
2. **/services** - "Psychotherapist London", "Couples therapy"
3. **/blog** - Long-tail keywords, thought leadership

### Conversion Pages
1. **/** (Homepage) - First impression, quick convert
2. **/contact** - Lead capture
3. **/services** - Service details, pricing

### Authority Building
1. **/blog** - Expertise, SEO
2. **/brainspotting** - Specialization showcase

## WordPress Integration Points

```
WordPress Backend (wp-admin)
        ↓
    REST API (/wp-json/wp/v2)
        ↓
    Next.js Fetches
        ↓
┌─────────────────────┐
│   /blog/page.tsx    │ ← Fetches all posts
└─────────────────────┘
        ↓
┌─────────────────────┐
│ /blog/[slug]/page.tsx│ ← Fetches single post
└─────────────────────┘
```

### Data Flow
1. Stefan writes post in WordPress
2. Clicks "Publish"
3. Webhook triggers Vercel rebuild (optional)
4. Next.js fetches new content via REST API
5. Static pages regenerate (ISR)
6. New post appears on site

## Mobile Considerations

### Priority Elements (Mobile)
1. Hamburger menu
2. Tap-friendly buttons
3. Readable font sizes
4. Compressed images
5. Fast loading

### Future Enhancements
- [ ] Mobile menu implementation
- [ ] Touch gestures for image galleries
- [ ] Progressive Web App (PWA) features
- [ ] App store integration?

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 90
- **Mobile-Friendly**: Yes
- **Image Optimization**: WebP format
- **Code Splitting**: Automatic (Next.js)

## Accessibility

- Semantic HTML
- Alt text for images
- ARIA labels where needed
- Keyboard navigation
- Color contrast compliance
- Screen reader friendly

---

**Remember**: The goal is to make it incredibly easy for people to:
1. Understand what Stefan does
2. Trust Stefan's expertise
3. Book a consultation

Every page should have a clear path to `/contact`.
