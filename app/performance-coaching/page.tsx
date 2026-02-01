import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Coaching London | Brainspotting for Athletes & Performers',
  description: 'Unlock your flow state with performance coaching and Brainspotting. Helping athletes, musicians, actors, and creatives overcome blocks and perform at their best.',
  keywords: ['performance coaching London', 'brainspotting', 'flow state', 'sports psychology', 'performance anxiety', 'stage fright'],
  openGraph: {
    title: 'Performance Coaching | Stefan Walters',
    description: 'Unlock your flow state with performance coaching and Brainspotting therapy.',
  },
};

export default function PerformanceCoachingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Performance = Potential – Internal Interference
              </span>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                The Flow State Is Already In You
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every performer knows the feeling — that moment when everything clicks, the world 
                falls away, and you're operating at your absolute best. That's Flow. And when 
                something gets in the way of accessing it, everything suffers.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block">
                Get Back Into Flow
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/KewGardens-30.webp"
                alt="Performance Coaching Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Background */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I spent a decade in the music industry — first as a musician, then working with 
              artists at Sanctuary Records, Sony Music, and Universal Classics and Jazz — before 
              moving into psychology. I witnessed firsthand how transformative Flow can be, and 
              how devastating it is when it's blocked. Finding the tool to unlock it marked a 
              huge paradigm shift in my personal and professional life.
            </p>
            <p className="text-2xl font-semibold text-primary">
              That tool is Brainspotting.
            </p>
          </div>
        </div>
      </section>

      {/* What is Brainspotting */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            What Is Brainspotting?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Brainspotting is a leading-edge neurophysiological technique that works directly 
              with the subcortical brain — the deep, felt regions where performance blocks, 
              trauma, and emotional interference are held. Unlike talk therapy, which works at 
              the level of thought, Brainspotting works at the level of the nervous system, 
              where real change actually happens.
            </p>
            <p>
              I am fully certified in all Phases of Brainspotting, having trained personally 
              with founder David Grand at his Masterclass in London. I've been using the 
              technique professionally since 2015.
            </p>
            <p>
              If you've tried talk therapy before and felt stuck, Brainspotting offers something 
              fundamentally different — a way to process and dissolve what's been holding you 
              back, at the deepest level. Clients will often find that Brainspotting can unlock 
              issues which other forms of counselling may have overlooked or failed to fully 
              address; where they may have felt stuck for decades, or given up completely on 
              finding a cure.
            </p>
            <p>
              Brainspotting is not only effective in working with 'activating' issues – such as 
              trauma, addiction, anxiety, physiological blocks and pain, depression, and stress 
              – but also powerful as a tool for resourcing and expansion work.
            </p>
          </div>
        </div>
      </section>

      {/* Why Performers Get Blocked */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            Why Performers Get Blocked
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Performance blocks don't come from your conscious mind. They originate deep in 
              the subcortical brain, where past trauma, injury, or adverse experience may still 
              be held — often silently, for years. Stress and pressure create disorder in your 
              nervous system, and your emotional state has a direct, measurable impact on your 
              ability to perform — both mentally and physically.
            </p>
            <p>
              This can show up in ways you might recognise: the yips, the twisties, stage fright, 
              mental freeze, writer's block, stuttering, cramps, focal dystonia, the sophomore 
              slump, or a persistent sense of self-doubt. These aren't weaknesses. They're 
              signals from a nervous system under strain.
            </p>
            <p>
              Most performers try to push through — to mask the block and keep going. Over time, 
              this leads to burnout, compulsive coping strategies, and deeper injury. There's a 
              better way.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            How I Work
          </h2>
          <div className="bg-white rounded-2xl p-10 space-y-6 text-gray-600">
            <p className="text-lg">
              I help you shine a spotlight on whatever is standing between you and your best 
              performance — and dissolve it. As your brain re-orders itself, the block lifts, 
              and your focus naturally redirects toward where it belongs: optimal, expanded 
              performance.
            </p>
            <p className="text-lg">
              I work with athletes, actors, musicians, writers, and public figures. My services 
              are fully discreet, and available both online and in person — at my London office, 
              or at your location. I can work with individuals or with groups: bands, choirs, 
              casts, sports teams.
            </p>
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">
            A Proven Track Record
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              In 2025, I was invited to consult with the <a href="https://wembleystallions.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Wembley Stallions American Football</a> team in northwest London as they faced the three biggest matches in their 
              history — a semi-final, a final, and a promotional game. Working alongside the 
              coaches and players during training, I combined Brainspotting with performance 
              coaching to build a shared vision and optimise the team's performance.
            </p>
            <p className="text-2xl font-semibold text-primary text-center">
              They won all three matches and earned promotion to the UK Premiership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Get Back Into Flow?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If something is standing between you and your performance — whether it's a block 
            you can name or a feeling you can't quite explain — I can help you shift your 
            nervous system from force back into flow.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "When I'm rocking a groove, there is only nature working. Free from all prison 
              of my mind's construct. I trust my animal instincts completely. I let go of every 
              thought, let go of all the world, and KILL the groove."
            </p>
            <cite className="text-accent font-semibold not-italic">
              — Flea, bassist from the Red Hot Chili Peppers
            </cite>
          </blockquote>

          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "If something stands between you and your success, move it."
            </p>
            <cite className="text-accent font-semibold not-italic">
              — Dwayne 'The Rock' Johnson
            </cite>
          </blockquote>

          <blockquote className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "Do, or do not. There is no try."
            </p>
            <cite className="text-accent font-semibold not-italic">
              — Yoda
            </cite>
          </blockquote>
        </div>
      </section>
    </>
  );
}
