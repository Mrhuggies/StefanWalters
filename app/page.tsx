import Link from 'next/link'; 
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stefan Walters | Psychotherapist & Brainspotting Specialist in London',
  description: 'Expert psychotherapy for trauma, relationships, and peak performance. Specializing in Brainspotting and EFT. 20+ years experience. Central London, Harrow & Hertfordshire.',
  openGraph: {
    title: 'Stefan Walters | Psychotherapist & Brainspotting Specialist',
    description: 'Expert psychotherapy for trauma, relationships, and peak performance. Specializing in Brainspotting and EFT.',
    images: ['/og-image.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Clarity. Connection. Change.
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Find your way back to{' '}
                <em className="not-italic gradient-text">yourself</em>.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Contemporary, evidence-based therapy and coaching — for individuals, couples, and groups. Based in London, working online worldwide.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Link href="/contact" className="btn btn-primary">
                  Start Your Journey
                </Link>
                <Link href="/work-with-me" className="btn btn-text">
                  Learn More →
                </Link>
              </div>
              
              <div className="text-sm text-gray-500 pt-2">
                <span>EFT Certified</span> • <span>Brainspotting</span> • <span>20+ Years Experience</span>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/stefan1.webp"
                  alt="Stefan Walters - Psychotherapist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-white rounded-2xl -z-10 translate-x-6 translate-y-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              A Modern Approach to Therapy
            </h2>
            <p className="text-lg text-gray-600">
              Specialising in relationships, nervous system health and performance. 
              Whether it's something specific that's been troubling you, or a quiet feeling that something isn't quite right, I'm here to help you get to the root of it — and find your way back to feeling like yourself.
              I work with a range of issues including attachment difficulties, relationship conflict, trauma recovery, performance blocks, anxiety, and more. Whatever you're facing, we'll work through it together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="feature-card">
              <h3 className="text-xl font-bold text-primary mb-3">Trauma & Attachment</h3>
              <p className="text-gray-600">
                Resolving deep-seated patterns using brain-body based therapies like Brainspotting 
                and attachment-focused approaches.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold text-primary mb-3">Couples & Relationships</h3>
              <p className="text-gray-600">
                Emotionally Focused Therapy (EFT) to rebuild trust, connection, and intimacy 
                in your relationships.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="text-xl font-bold text-primary mb-3">Performance Coaching</h3>
              <p className="text-gray-600">
                Helping leaders and creatives unlock their full potential without burning out 
                or sacrificing wellbeing.
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How I Work
            </h2>
            <p className="text-lg text-gray-600">
              Fully qualified. Fully registered. I'm a fully qualified integrative psychotherapist, a certified Brainspotting therapist, and a fully trained Emotionally Focused Couples Therapist. I'm also a registered provider with Aviva, AXA, BUPA, Cigna, Healix, and WPA. My work has been featured in The Times, The Guardian, The Telegraph, GQ, and many more, and I've appeared on the BBC and Channel 4. I'm also a registered aftercare provider for Hope Rehab Centre in Thailand.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-4xl font-semibold text-primary leading-relaxed">
            "The biggest thing that holds us back is often the story we tell ourselves. 
            Let's write a new one."
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-16 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to talk?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Taking the first step is often the hardest. Reach out for a confidential consultation.
            </p>
            <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </Link>
            <p className="text-sm text-gray-400 mt-6">
              Clinics in Central London & Online Worldwide
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
