import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Therapy Services in London | Individual, Couples & Performance Coaching',
  description: 'Professional therapy services: Individual counselling, couples therapy, Brainspotting for trauma, and performance coaching. Central London, Harrow & Hertfordshire.',
  openGraph: {
    title: 'Therapy Services | Stefan Walters',
    description: 'Individual therapy, couples counselling, Brainspotting, and performance coaching in London.',
  },
};

export default function ServicesPage() {
  const servicesSchemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        serviceType: 'Individual Therapy',
        provider: { '@type': 'Person', name: 'Stefan Walters' },
        description: 'One-on-one therapy for anxiety, depression, trauma, and personal growth'
      },
      {
        '@type': 'Service',
        serviceType: 'Couples Therapy',
        provider: { '@type': 'Person', name: 'Stefan Walters' },
        description: 'Emotionally Focused Therapy (EFT) for couples and relationships'
      },
      {
        '@type': 'Service',
        serviceType: 'Brainspotting Therapy',
        provider: { '@type': 'Person', name: 'Stefan Walters' },
        description: 'Advanced trauma processing using brain-body based therapy'
      },
      {
        '@type': 'Service',
        serviceType: 'Performance Coaching',
        provider: { '@type': 'Person', name: 'Stefan Walters' },
        description: 'Peak performance coaching for professionals and creatives'
      }
    ]
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchemaData) }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mt-4 mb-6">
              How I Can Help
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you&apos;re working on individual growth, relationship challenges, 
              trauma recovery, or performance optimization, I offer tailored support.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Therapy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/KewGardens-18.webp"
                alt="Individual Therapy"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Individual Therapy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                One-on-one therapy provides a confidential space to explore anxiety, depression, 
                trauma, life transitions, and personal growth. Using an integrative approach, 
                we&apos;ll work together to understand patterns, process difficult experiences, 
                and build practical strategies for lasting change.
              </p>
              
              <h3 className="font-semibold text-primary mb-3">I work with:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Anxiety and panic disorders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Depression and low mood</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Trauma and PTSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Life transitions and identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Stress and burnout</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Couples Therapy */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-primary mb-6">Couples Therapy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Relationships are the most important—and most challenging—part of life. 
                Using Emotionally Focused Therapy (EFT), I help couples rebuild trust, 
                improve communication, and deepen emotional connection. Whether you&apos;re 
                facing a specific crisis or want to strengthen your bond, therapy can help.
              </p>
              
              <h3 className="font-semibold text-primary mb-3">Common issues:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Communication breakdowns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Trust and betrayal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Conflict patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Emotional distance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Life transitions as a couple</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                Book Consultation
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/KewGardens-19.webp"
                alt="Couples Therapy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brainspotting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/KewGardens-20.webp"
                alt="Brainspotting Therapy"
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Brainspotting</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Brainspotting is a brain-body based therapy that accesses deep trauma and 
                emotional wounds stored in the nervous system. Unlike traditional talk therapy, 
                it works directly with your brain&apos;s natural healing capacity to process 
                difficult experiences at a neurological level.
              </p>
              
              <h3 className="font-semibold text-primary mb-3">Particularly effective for:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Trauma and PTSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Anxiety and phobias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Physical pain with emotional roots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Performance blocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Attachment wounds</span>
                </li>
              </ul>
              
              <div className="flex gap-4">
                <Link href="/brainspotting" className="btn btn-primary">
                  Learn More
                </Link>
                <Link href="/contact" className="btn btn-text">
                  Book Session →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Coaching */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-primary mb-6">Performance Coaching</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                High performance doesn&apos;t have to mean burnout. I work with executives, 
                entrepreneurs, creatives, and athletes to optimize performance while maintaining 
                wellbeing. Using a combination of performance psychology and therapeutic techniques, 
                we&apos;ll identify blocks, build resilience, and unlock your potential.
              </p>
              
              <h3 className="font-semibold text-primary mb-3">Focus areas:</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Performance anxiety and blocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Flow state and peak performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Leadership and decision-making</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Work-life integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Preventing burnout</span>
                </li>
              </ul>
              
              <Link href="/contact" className="btn btn-primary">
                Book Consultation
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/images/KewGardens-21.webp"
                alt="Performance Coaching"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">How long does therapy take?</h3>
              <p className="text-gray-600 leading-relaxed">
                This depends entirely on your goals and circumstances. Some people benefit from 
                short-term work (8-12 sessions), while others prefer ongoing support. We&apos;ll 
                discuss this in our initial consultation and regularly review progress.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">How much does it cost?</h3>
              <p className="text-gray-600 leading-relaxed">
                Individual sessions: £150/hour<br />
                Couples sessions: £180/90 minutes<br />
                Initial consultation: Free 15 minutes
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Do you offer online sessions?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! I offer both in-person and online sessions. Many clients find online 
                therapy just as effective, and it provides more flexibility around scheduling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Are you registered?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, I&apos;m fully registered with BACP (British Association for Counselling 
                and Psychotherapy) and BPS (British Psychological Society). I also hold 
                professional indemnity insurance and receive regular clinical supervision.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-3">What&apos;s your cancellation policy?</h3>
              <p className="text-gray-600 leading-relaxed">
                I require 48 hours notice for cancellations. Cancellations with less than 
                48 hours notice will be charged in full unless there are exceptional circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your needs and see if we&apos;re a good fit.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
