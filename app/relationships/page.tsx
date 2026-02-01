import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Relationships & Couples Therapy | Stefan Walters',
  description: 'EFT couples therapy in London. Rebuild connection, trust, and intimacy with Emotionally Focused Therapy. One of the first UK therapists trained in EFT.',
  keywords: ['couples therapy London', 'EFT therapy', 'emotionally focused therapy', 'marriage counselling', 'relationship therapy'],
  openGraph: {
    title: 'Relationships & Couples Therapy | Stefan Walters',
    description: 'Rebuild connection and intimacy with Emotionally Focused Therapy (EFT).',
  },
};

export default function RelationshipsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Couples & Relationships
              </span>
              <h1 className="text-5xl font-bold text-primary leading-tight">
                Rebuilding Connection, Together
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A different kind of couples therapy — one that goes deeper than communication 
                skills to heal the emotional bond at the heart of your relationship.
              </p>
              <Link href="/contact" className="btn btn-primary inline-block">
                Book a Consultation
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/KewGardens-15.webp"
                alt="Couples Therapy Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Different Kind of Couples Therapy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            A Different Kind of Couples Therapy
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Every relationship has cycles — moments where you feel close, and moments where 
              you drift apart. When those cycles tip toward disconnection, it can feel like 
              something fundamental has broken. It hasn't. But it does need attention.
            </p>
            <p>
              I specialise in EFT (Emotionally Focused Therapy), one of the most thoroughly 
              researched and effective approaches to couples work available today. Trained in 
              the USA and one of the first therapists in the UK to offer dedicated EFT couples 
              counselling, I use this approach because the results speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Why EFT Works */}
      <section className="py-20 bg-tech-blue">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Why EFT Works
          </h2>
          <div className="bg-white rounded-2xl p-10 space-y-6 text-gray-600">
            <p className="text-lg">
              Most couples therapy focuses on communication skills or conflict resolution. EFT 
              goes deeper — to the emotional bond at the heart of your relationship.
            </p>
            <p className="text-lg">
              Rooted in attachment theory, EFT works on the principle that the pain couples feel 
              — the arguments, the withdrawal, the sense of growing apart — is driven by a fear 
              of disconnection. When we address that fear directly, the cycles of conflict begin 
              to dissolve, and a more secure, more intimate connection can take their place.
            </p>
            <p className="text-lg">
              It's not about learning new rules or techniques. It's about rediscovering the 
              emotional safety you need to truly be close again.
            </p>
          </div>
        </div>
      </section>

      {/* What the Research Says */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            What the Research Says
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              The evidence behind EFT is compelling. Around <strong className="text-primary">90% of couples</strong> who 
              complete a course of EFT report significant improvement in their relationship. 
              Nearly three-quarters are classified as fully recovered by the end of treatment 
              — no longer distressed.
            </p>
            <p>
              What sets EFT apart from other forms of couples therapy is that these gains last. 
              Rather than fading after treatment ends, couples who complete EFT continue to 
              improve over the following two years, without any further sessions. Research also 
              shows EFT is effective across a wide range of couples — including those who 
              haven't responded well to other approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">
            Who I Work With
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            I work with couples at all stages — whether you're navigating conflict, feeling 
            disconnected, preparing for marriage, or working through the aftermath of a separation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Couples Counselling</h3>
              <p className="text-gray-600">Breaking negative cycles and rebuilding emotional closeness.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Premarital Therapy</h3>
              <p className="text-gray-600">Starting your marriage with a strong, secure foundation.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Sex Therapy</h3>
              <p className="text-gray-600">Addressing intimacy concerns in a safe, confidential space.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary mb-3">Post-Separation Mediation</h3>
              <p className="text-gray-600">Helping you and your partner communicate respectfully, even after a relationship has ended, especially when co-parenting may be necessary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Seeking help isn't a sign that your relationship has failed — it's a sign that 
            you care enough to fight for it. I'd be glad to help you find your way back to each other.
          </p>
          <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
