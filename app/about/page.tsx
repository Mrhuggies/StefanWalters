import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Stefan Walters | Psychotherapist & Brainspotting Specialist',
  description: 'Learn about Stefan Walters - Systemic Psychotherapist with 20+ years experience specializing in trauma, relationships, and peak performance therapy.',
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
                About Stefan
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Helping people reconnect with themselves
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                I&apos;m a Systemic Psychotherapist with over twenty years of experience working with 
                individuals, couples, and groups. My approach is grounded in evidence-based practice,
                but always tailored to your unique needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8">My Approach</h2>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <p>
              I believe that therapy should be a collaborative process. My role isn&apos;t to give 
              you answers, but to help you find your own. Whether you&apos;re struggling with anxiety, 
              navigating relationship challenges, processing trauma, or seeking to optimize your 
              performance, I provide a safe, non-judgmental space for exploration and growth.
            </p>

            <p>
              My training spans multiple therapeutic modalities, which allows me to adapt my approach 
              to what works best for you. I specialize in Brainspotting—a powerful brain-body based 
              therapy for processing trauma—and Emotionally Focused Therapy (EFT) for couples work.
            </p>

            <p>
              Over the years, I&apos;ve worked with everyone from corporate executives to creative 
              professionals, from couples on the brink of separation to individuals healing from 
              deep trauma. What unites all my clients is a desire for change and a willingness to 
              look honestly at themselves and their patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-tech-blue">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Qualifications & Training
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                Systemic Family Therapist
              </h3>
              <p className="text-gray-600">
                Qualified in systemic and family therapy approaches
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                EFT Certified
              </h3>
              <p className="text-gray-600">
                Fully trained Emotionally Focused Couples Therapist
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                Brainspotting Certified
              </h3>
              <p className="text-gray-600">
                Advanced training in Brainspotting trauma therapy
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                BACP Registered
              </h3>
              <p className="text-gray-600">
                British Association for Counselling and Psychotherapy
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                BPS Member
              </h3>
              <p className="text-gray-600">
                British Psychological Society
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                Extensive clinical experience across diverse settings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8">My Philosophy</h2>
          
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              I don&apos;t believe in one-size-fits-all therapy. What works for one person might not 
              work for another, which is why I draw from multiple therapeutic approaches. Some 
              clients need deep trauma processing through Brainspotting. Others benefit more from 
              talking therapy and cognitive reframing. Most need a combination.
            </p>

            <p>
              What I do believe in is the therapeutic relationship. Research consistently shows that 
              the quality of the relationship between therapist and client is the single biggest 
              predictor of therapeutic success. That&apos;s why I prioritize creating a space where you 
              feel genuinely heard, understood, and accepted.
            </p>

            <p>
              I also believe therapy should be practical. While insight is valuable, what matters 
              most is whether your life actually improves. Does therapy help you sleep better, 
              communicate more effectively, feel less anxious, connect more deeply? That&apos;s how I 
              measure success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I offer a free 15-minute consultation call to see if we&apos;re a good fit. 
            No pressure, no obligation—just a chance to chat.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
