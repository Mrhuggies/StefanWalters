import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllPosts, formatDate } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: 'Blog | Insights on Therapy, Mental Health & Relationships',
  description: 'Expert insights on therapy, mental health, trauma, relationships, and personal growth from experienced psychotherapist Stefan Walters.',
  openGraph: {
    title: 'Blog | Stefan Walters',
    description: 'Thoughts on therapy, relationships, mental health, and living a meaningful life.',
  },
};

export default async function BlogPage() {
  // Fetch posts from WordPress
  const posts = await getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Insights & Reflections
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mt-4 mb-6">
              The Blog
            </h1>
            <p className="text-lg text-gray-600">
              Thoughts on therapy, relationships, mental health, and living a meaningful life.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Featured Image */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/KewGardens-15.webp'}
                        alt={post.title.rendered}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Post Meta */}
                    <time className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </time>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
                      {post.title.rendered}
                    </h2>

                    {/* Excerpt */}
                    <div 
                      className="text-gray-600 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    {/* Read More Link */}
                    <span className="inline-block mt-4 text-accent font-medium group-hover:underline">
                      Read More →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8">
            Get new articles and insights delivered to your inbox.
          </p>
          <a 
            href="https://substack.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </>
  );
}
