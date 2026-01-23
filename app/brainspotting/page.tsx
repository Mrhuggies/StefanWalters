import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brainspotting Therapy London | Advanced Trauma Treatment',
  description: 'Certified Brainspotting therapist in London. Powerful brain-body therapy for trauma, PTSD, anxiety, and performance issues. Central London, Harrow & Hertfordshire.',
  keywords: ['brainspotting therapy London', 'brainspotting', 'trauma therapy', 'PTSD treatment', 'brainspotting therapist'],
  openGraph: {
    title: 'Brainspotting Therapy | Stefan Walters',
    description: 'Advanced trauma treatment using Brainspotting - a powerful brain-body based therapy.',
  },
};

export default function BrainspottingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Brain-Body Therapy
              </span>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Brainspotting: Healing Beyond Words
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A powerful neurobiological therapy that accesses the brain's natural healing 
                capacity to process trauma, release emotional blocks, and transform your wellbeing.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block">
                Book a Session
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/KewGardens-30.webp"
                alt="Brainspotting Therapy Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Brainspotting */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            What is Brainspotting?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Brainspotting is a revolutionary therapeutic approach discovered by Dr. David Grand 
              in 2003. It's based on the profound discovery that where you look affects how you feel.
            </p>
            <p>
              Unlike traditional talk therapy, Brainspotting works directly with the brain and body 
              to process traumatic experiences, emotional blocks, and physical symptoms. By identifying 
              specific eye positions ("brainspots"), we can access the deeper parts of your brain 
              where trauma and difficult experiences are stored.
            </p>
            <p>
              This approach bypasses the conscious, thinking mind and goes straight to the source 
              of the issue, allowing for profound healing that can happen more quickly than with 
              conventional therapy alone.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            How Does Brainspotting Work?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-accent mb-4">01</div>
              <h3 className="text-xl font-bold text-primary mb-3">Identify the Issue</h3>
              <p className="text-gray-600">
                We begin by focusing on the issue, emotion, or physical sensation you want to work on. 
                This creates an activation in your nervous system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-accent mb-4">02</div>
              <h3 className="text-xl font-bold text-primary mb-3">Find the Brainspot</h3>
              <p className="text-gray-600">
                Using a pointer, we locate the eye position where you feel the strongest response. 
                This is your "brainspot" - a window into where the issue is held.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-accent mb-4">03</div>
              <h3 className="text-xl font-bold text-primary mb-3">Process & Release</h3>
              <p className="text-gray-600">
                While maintaining your gaze on this spot, your brain begins processing and releasing 
                the stored trauma or emotional charge naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Helps With */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            What Can Brainspotting Help With?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Trauma & PTSD</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Single incident trauma (accidents, assault, medical procedures)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Complex trauma and developmental trauma</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>PTSD and C-PTSD symptoms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Attachment wounds and relational trauma</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Anxiety & Performance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Performance anxiety and creative blocks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Sports performance issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Public speaking anxiety</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Generalized anxiety and panic</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Physical Symptoms</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Chronic pain with emotional components</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Tension and body-held stress</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Psychosomatic conditions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Medical trauma recovery</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Emotional Patterns</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Depression and low mood</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Anger and emotional dysregulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Self-esteem and confidence issues</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Addictive patterns and impulse control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Why Work With Me for Brainspotting?
          </h2>
          <div className="bg-white rounded-2xl p-10 space-y-6 text-gray-600">
            <p className="text-lg">
              As a fully certified Brainspotting therapist with 20+ years of clinical experience, 
              I bring a depth of knowledge that extends beyond the technique itself.
            </p>
            <p className="text-lg">
              My background in systemic therapy, attachment theory, and trauma-informed practice 
              means I can integrate Brainspotting seamlessly with other approaches to provide 
              truly holistic healing.
            </p>
            <p className="text-lg">
              I create a deeply attuned, safe therapeutic relationship where you can explore 
              difficult material without being overwhelmed. The quality of presence I bring 
              to sessions is as important as the technique itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Experience Brainspotting?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a consultation to learn more about how Brainspotting can help you 
            process trauma and unlock your healing potential.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Book a Session
            </Link>
            <Link href="/services" className="btn btn-text">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
