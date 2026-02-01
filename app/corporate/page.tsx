import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Wellbeing & Performance | Stefan Walters',
  description: 'Workplace mental health support, team performance coaching, and wellbeing workshops for organisations. Building trust, communication, and a shared sense of purpose.',
  keywords: ['corporate wellbeing', 'team coaching', 'workplace mental health', 'organisational consultancy', 'performance coaching'],
  openGraph: {
    title: 'Corporate Wellbeing & Performance | Stefan Walters',
    description: 'Helping organisations build trust, communication, and lasting wellbeing.',
  },
};

export default function CorporatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Organisational Support
              </span>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Corporate Wellbeing & Performance
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Organisations thrive when their people do. The strongest teams aren't built on 
                talent alone — they're built on trust, connection, and emotional resilience.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block">
                Let's Talk
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/stefan4.png"
                alt="Corporate Coaching Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              When those foundations are solid, performance follows naturally. When they're not, 
              no amount of strategy or ambition can compensate.
            </p>
            <p>
              I work with organisations to build exactly that: deep, lasting wellbeing from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-center">
            Drawing on a background in counselling psychology, performance coaching, and 
            organisational consultancy, I provide tailored support for companies at every level 
            — from one-off workshops to ongoing strategic programmes.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Workplace Mental Health Support</h3>
              <p className="text-gray-600">Partnering with HR teams and Occupational Health providers to embed meaningful, accessible mental health provision across your organisation.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Team Performance Coaching</h3>
              <p className="text-gray-600">Helping teams build a shared vision, strengthen communication, and perform at their collective best.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Wellbeing Workshops & Speaking</h3>
              <p className="text-gray-600">Engaging, evidence-based sessions on relationships, resilience, and mental health — delivered to teams, conferences, or corporate events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            A Track Record That Speaks for Itself
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              In 2025, I was invited to consult with the <a href="https://wembleystallions.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Wembley Stallions American Football</a> team 
              ahead of the three biggest matches in their history — a semi-final, a final, and a 
              promotional game. Working closely with the coaches and players throughout their 
              training, I applied performance coaching strategies to build team cohesion and a 
              unified sense of purpose. They won all three matches and earned promotion to the 
              UK Premiership.
            </p>
            <p>
              Previously, I served as Clinical Team Lead for addiction services in NHS Brent, 
              and as Clinical Lead at the Wellbeing Centre in Lloyd's of London — giving me 
              direct experience of the pressures and complexities that come with delivering 
              mental health support within large organisations.
            </p>
            <p>
              I regularly teach on the psychology diploma course at the Albany Centre, have 
              presented at international conferences, and have been published worldwide. I've 
              also delivered specialist workshops for organisations including Mankind, the ACPNL, 
              and JCounselling.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're looking to invest in the wellbeing and performance of your people — and 
            see real, lasting results — I'd be glad to talk about how I can help.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
