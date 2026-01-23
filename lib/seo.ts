// SEO Metadata and Schema Markup utilities

export const siteConfig = {
  name: 'Stefan Walters',
  title: 'Stefan Walters | Psychotherapist & Brainspotting Specialist',
  description: 'Systemic Psychotherapist with 20+ years experience specializing in Brainspotting, trauma therapy, couples counselling, and peak performance coaching. Based in Central London, Harrow, and Hertfordshire.',
  url: 'https://stefanwalters.com',
  ogImage: '/og-image.jpg',
  phone: '+447526456477',
  email: 'stefan@walters.com',
  locations: [
    'Central London',
    'Harrow',
    'Hertfordshire'
  ],
  social: {
    facebook: 'https://facebook.com/stefanwalters',
    instagram: 'https://instagram.com/stefanwalters',
    substack: 'https://stefanwalters.substack.com'
  }
};

// Generate Person Schema (for Stefan)
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Stefan Walters',
    jobTitle: 'Psychotherapist',
    description: 'Systemic Psychotherapist specializing in Brainspotting, trauma therapy, and couples counselling',
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.substack
    ]
  };
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.5074,
      longitude: -0.1278
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'London'
      },
      {
        '@type': 'City',
        name: 'Harrow'
      },
      {
        '@type': 'State',
        name: 'Hertfordshire'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.substack
    ]
  };
}

// Generate Service Schema
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Person',
      name: 'Stefan Walters'
    },
    description: description,
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: siteConfig.url,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'Customer Service'
      }
    }
  };
}

// Generate BlogPosting Schema
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
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || post.publishedDate,
    author: {
      '@type': 'Person',
      name: 'Stefan Walters',
      url: siteConfig.url
    },
    publisher: {
      '@type': 'Person',
      name: 'Stefan Walters',
      url: siteConfig.url
    },
    image: post.imageUrl || `${siteConfig.url}/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`
    }
  };
}

// Generate BreadcrumbList Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  };
}
