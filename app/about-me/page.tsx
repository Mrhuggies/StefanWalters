import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Stefan Walters | Psychotherapist & Performance Coach',
  description: 'Learn about Stefan Walters - Systemic Psychotherapist specializing in relationships, performance, and wellbeing.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/KewGardens-15.webp"
                  alt="Stefan Walters - Psychotherapist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                About
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                About Stefan
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Success on the Outside Doesn't Always Mean Peace on the Inside
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-4xl font-bold text-primary mb-6">My Background</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Before I became a therapist, I spent a decade in the music industry — working in publishing and management at Sanctuary Records, Sony, and Universal Music Group, and as a performing musician myself. It gave me a front-row seat to something that is often unseen: the gap between outward success and inner wellbeing.
            </p>

            <p className="text-lg leading-relaxed">
              High-achievers are often the last people anyone thinks need help. But the pressure of public life, the demands of high performance, and the weight of holding everything together can quietly erode the things that matter most — your relationships, your mental health, your sense of who you actually are.
            </p>

            <p className="text-lg leading-relaxed">
              That's the world I work in. And it's where I can help.
            </p>
          </div>
        </div>
      </section>

      {/* What I Help With */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-4 text-center">
            What I Help With
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
            I work with individuals, couples, families, and teams, across a wide range of challenges. Some of the most common include:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Relationship Difficulties</h3>
              <p className="text-gray-600">Including infidelity and fidelity issues</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Separation & Divorce</h3>
              <p className="text-gray-600">Co-parenting support and navigating transitions</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Trauma Recovery</h3>
              <p className="text-gray-600">Complex trauma and narcissistic abuse</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Anxiety & Depression</h3>
              <p className="text-gray-600">Mood disorders and mental health support</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Grief & Bereavement</h3>
              <p className="text-gray-600">Processing loss and finding a path forward</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Performance Blocks</h3>
              <p className="text-gray-600">Stage fright and performance anxiety</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Addiction & Compulsive Behaviour</h3>
              <p className="text-gray-600">Breaking patterns and building recovery</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Sexual Dysfunction</h3>
              <p className="text-gray-600">Confidential and non-judgmental support</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Parenting & Family Dynamics</h3>
              <p className="text-gray-600">Family relationships and parenting challenges</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Neurodivergence</h3>
              <p className="text-gray-600">ADHD coaching, autistic burnout, and SEN support</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mt-10 text-center max-w-3xl mx-auto">
            Whatever you're facing, my role is to help you uncover the source — and rediscover your purpose.
          </p>
        </div>
      </section>

      {/* Beyond the Individual */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="text-4xl font-bold text-primary mb-6">Beyond the Individual</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              As well as private practice, I work as a consultant and coach with organisations, teams, and groups. In 2025, I was invited to work with the <a href="https://wembleystallions.co.uk/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Wembley Stallions American Football</a> team in northwest London as they faced the three biggest matches in their history. Working alongside the coaches and players throughout their training, I used performance coaching to build team cohesion and a unified vision. They won all three matches and earned promotion to the UK Premiership.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6">Who I Work With</h2>
          
          <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              I work with people of all backgrounds, cultures, ages, genders, and sexual orientations — in person in London, or online, wherever you are in the world.
            </p>
            
            <p className="text-lg leading-relaxed">
              If something isn't right and you're ready to change it, I'd be glad to help.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's have a conversation about what you're facing and how I can help.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
