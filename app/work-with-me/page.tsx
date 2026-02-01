import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work With Me | Stefan Walters',
  description: 'Therapy and coaching services for individuals, couples, families, and teams. Specializing in relationships, mental health, and performance.',
};

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Therapy & Coaching
              </span>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Work With Me
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Taking the first step toward talking to someone is a big one — and it takes courage. If you're here, you're already on your way. I'm here to support you through whatever you're facing, and I'd love to help.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block">
                Get in Touch
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/stefan.webp"
                alt="Stefan Walters - Therapist"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-8">Why Work With Me?</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Feeling comfortable with your therapist isn't a nice bonus — it's essential. True change happens when you feel safe, understood, and free from judgement. That's the environment I create.
            </p>
            <p>
              I'm not a typical talk therapist. I work with the deep brain and nervous system, integrating both cognitive and somatic healing to address the root cause of your struggles — not just the surface symptoms. This means lasting, embodied change.
            </p>
            <p>
              I hold specialist training in EFT (Emotionally Focused Therapy), Attachment Theory, and Brainspotting, making me one of very few therapists in the UK qualified in all three.
            </p>
          </div>
        </div>
      </section>

      {/* How Can I Help - Intro */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6">How Can I Help?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Therapy isn't just for crisis — it's for anyone who wants to understand themselves better, navigate life's challenges, or simply feel more like themselves again. Here's what I work with:
          </p>
        </div>
      </section>

      {/* Relationships */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Category Card - Relationships */}
            <div className="md:col-span-2 bg-gradient-to-br from-accent to-primary text-white p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-6">Relationships</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-2">Couples Therapy</h4>
                  <p className="text-white/90">Using EFT and Attachment Theory, I help couples rebuild emotional connection, improve communication, and break cycles of disconnection. It's never too late to reconnect.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2">Premarital Therapy</h4>
                  <p className="text-white/90">A chance to strengthen your bond and get ahead of challenges before they arise. Often the everyday things — habits, expectations, finances — benefit most from early conversation.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2">Family Therapy</h4>
                  <p className="text-white/90">Families are complex systems. When one thing shifts, everything shifts. I work with families to improve communication, build understanding, and create space for positive change. Family estrangements are brutal and avoidable.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mental Health & Wellbeing */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white p-10 rounded-2xl">
            <h3 className="text-3xl font-bold text-primary mb-8">Mental Health & Wellbeing</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Depression</h4>
                <p className="text-gray-700">Whether it has a clear cause or not, depression is a serious and treatable condition. We'll work together to find your way back to a sense of purpose and flow.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Anxiety & Panic Attacks</h4>
                <p className="text-gray-700">From specific phobias to generalised anxiety, I'll help you develop the tools to regain control and rebuild your confidence.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Anger Management</h4>
                <p className="text-gray-700">Anger is almost always a response to something deeper — fear, hurt, or shame. I work with you to uncover and heal the root cause.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Grief & Bereavement</h4>
                <p className="text-gray-700">Loss changes us, but it doesn't have to break us. I'll help you honour your grief while finding a way to carry it with you.</p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">Addiction & Substance Abuse</h4>
                <p className="text-gray-700">Recovery starts with understanding why. I'll help you identify the patterns driving compulsive behaviour and support you in breaking the cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity & Neurodivergence + Specialized Support */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Identity & Neurodivergence */}
            <div className="bg-tech-blue p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Identity & Neurodivergence</h3>
              
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">SEN Support & ADHD Coaching</h4>
                <p className="text-gray-700">If you've always felt out of step with the world, there may be a reason. I help with diagnosis, support, and coaching — moving from surviving to thriving. I also offer parenting support for families navigating a child's diagnosis.</p>
              </div>
            </div>

            {/* Specialised Support */}
            <div className="bg-tech-blue p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-6">Specialised Support</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Sex Therapy</h4>
                  <p className="text-gray-700">A fully confidential, non-judgmental space to explore identity, performance, trauma, or any other concerns.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Medical & Palliative Care</h4>
                  <p className="text-gray-700">Facing a serious physical diagnosis is emotionally overwhelming. I provide the emotional support to help you through.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Dispute & Conflict Mediation</h4>
                  <p className="text-gray-700">Whether it's a family disagreement or a divorce settlement, I can facilitate respectful, productive dialogue as an impartial third party.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Professional</h3>
            
            <div>
              <h4 className="text-2xl font-bold mb-4">Organisational Consultancy & Team Building</h4>
              <p className="text-white/90 text-lg leading-relaxed">
                Strong teams start with strong connections. I help organisations build trust, communication, and a shared sense of purpose. In 2025, I consulted with the <a href="https://wembleystallions.co.uk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Wembley Stallions American Football</a> team ahead of their three biggest matches — they won all three and earned promotion to the UK Premiership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Whatever you're going through, you don't have to face it alone.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
