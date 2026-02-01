import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Stefan Walters | Book a Consultation',
  description: 'Get in touch with Stefan Walters for therapy consultations. Central London, Harrow, Hertfordshire, and online sessions available.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-bg to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-primary mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Taking the first step can feel daunting. I&apos;m here to make it as 
              comfortable as possible. Reach out for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re looking for individual therapy, couples counselling, or want 
              to explore Brainspotting, I&apos;d love to hear from you. I offer a free 15-minute 
              consultation call to see if we&apos;re a good fit.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-tech-blue p-10 rounded-2xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Email</h3>
                  <a 
                    href="mailto:Stefan@stefanwalters.com" 
                    className="text-2xl text-accent hover:underline font-medium block mb-2"
                  >
                    Stefan@stefanwalters.com
                  </a>
                  <p className="text-gray-600">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-tech-blue p-10 rounded-2xl">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Phone</h3>
                  <a 
                    href="tel:07526456477" 
                    className="text-2xl text-accent hover:underline font-medium block mb-2"
                  >
                    07526 456 477
                  </a>
                  <p className="text-gray-600">
                    Leave a voicemail if I&apos;m in session
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white p-10 rounded-2xl border border-gray-200">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-tech-blue rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Locations</h3>
                  <div className="text-gray-600 space-y-2">
                    <p className="font-medium">📍 Central London Clinic</p>
                    <p className="font-medium">📍 Harrow Clinic</p>
                    <p className="font-medium">📍 Hertfordshire Clinic</p>
                    <p className="text-accent font-semibold mt-4">
                      💻 Online Sessions Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-200">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-tech-blue rounded-full flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Availability</h3>
                  <div className="text-gray-600 space-y-2">
                    <p><span className="font-medium">Monday - Friday:</span> 9am - 8pm</p>
                    <p><span className="font-medium">Saturday:</span> 10am - 4pm</p>
                    <p><span className="font-medium">Sunday:</span> By appointment</p>
                    <p className="text-sm text-gray-500 mt-4">
                      Evening and weekend slots available
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-tech-blue">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            What to Expect
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here&apos;s what happens after you get in touch
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-primary mb-3">1. Initial Contact</h3>
              <p className="text-gray-600">
                Reach out via email or phone. I typically respond within 24 hours.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-primary mb-3">2. Free Consultation</h3>
              <p className="text-gray-600">
                We&apos;ll have a 15-minute call to discuss your needs and answer questions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-3">3. First Session</h3>
              <p className="text-gray-600">
                If we&apos;re a good fit, we&apos;ll schedule your first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Send me an email and let&apos;s start the conversation.
          </p>
          <a 
            href="mailto:Stefan@stefanwalters.com" 
            className="btn btn-primary text-xl px-10 py-4"
          >
            Email Stefan
          </a>
        </div>
      </section>
    </>
  );
}
