import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getPostBySlug, getAllPostSlugs, formatDate, generateBlogPostingSchema } from '@/lib/wordpress';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    notFound();
  }

  // Generate schema for this blog post
  const blogSchema = generateBlogPostingSchema({
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
    slug: post.slug,
    publishedDate: post.date,
    modifiedDate: post.modified,
    imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  });

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-accent hover:underline mb-8"
          >
            ← Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{post._embedded?.author?.[0]?.name || 'Stefan Walters'}</span>
            <span>•</span>
            <time>{formatDate(post.date)}</time>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
            {post.title.rendered}
          </h1>

          {/* Featured Image */}
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg prose-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-16 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-6 items-start">
            <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/KewGardens-15.webp"
                alt="Stefan Walters"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                About Stefan Walters
              </h3>
              <p className="text-gray-600 mb-4">
                Systemic Psychotherapist with 20+ years experience specializing in trauma, 
                relationships, and peak performance. Certified in Brainspotting and 
                Emotionally Focused Therapy.
              </p>
              <Link href="/contact" className="text-accent font-medium hover:underline">
                Work with Stefan →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related / CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            If this resonates with you, let&apos;s talk about how therapy can help.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160);

  return {
    title: `${post.title.rendered} | Stefan Walters`,
    description: description,
    openGraph: {
      title: post.title.rendered,
      description: description,
      images: post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
        ? [post._embedded['wp:featuredmedia'][0].source_url]
        : ['/og-image.jpg'],
    },
  };
}
