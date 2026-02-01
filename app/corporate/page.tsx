import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Wellbeing & Performance | Stefan Walters',
  description: 'Evidence-based organisational wellbeing and performance coaching for companies and teams.',
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-white py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Corporate Wellbeing & Performance
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Organisations Thrive When Their People Do
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* Introduction */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              High performance isn't just about strategy, process, or even talent. It's about creating environments where people feel psychologically safe, emotionally regulated, and genuinely connected to the work they do.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I work with organisations to embed wellbeing and performance coaching into their culture—not as a tick-box exercise, but as a strategic investment in their people.
            </p>
          </div>

          {/* What I Offer */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
              What I Offer
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-tech-blue p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Leadership & Team Coaching
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Helping leaders navigate complexity, build psychological safety, and create high-performing teams.
                </p>
              </div>
              
              <div className="bg-tech-blue p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Organisational Consultancy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Strategic support for culture change, systemic wellbeing initiatives, and performance optimization.
                </p>
              </div>
              
              <div className="bg-tech-blue p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Training & Workshops
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Evidence-based training on stress management, emotional intelligence, resilience, and peak performance.
                </p>
              </div>
              
              <div className="bg-tech-blue p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Mental Health Support
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Clinical supervision, crisis support, and embedded therapeutic services for employee wellbeing.
                </p>
              </div>
            </div>
          </div>

          {/* Track Record */}
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-primary">
              A Track Record That Speaks for Itself
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I've worked with organizations across sports, media, and corporate sectors—including the Wembley Stallions American Football team, where I helped players overcome performance anxiety, build mental resilience, and unlock their potential on and off the field.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're looking to improve team dynamics, reduce burnout, or create a culture where people genuinely thrive, I bring a combination of clinical expertise, systemic thinking, and practical, human-centered coaching.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary to-accent text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Invest in Your People?
            </h3>
            <p className="text-lg mb-8 text-white/90">
              Let's talk about how I can support your organization.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
