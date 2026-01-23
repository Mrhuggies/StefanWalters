import Link from 'next/link';
import { Facebook, Instagram, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand & Contact */}
          <div className="space-y-3">
            <h3 className="text-xl font-display font-bold text-primary">Stefan Walters</h3>
            <p className="text-gray-600">Systemic Psychotherapist</p>
            <a href="mailto:stefan@walters.com" className="text-accent hover:underline block">
              stefan@walters.com
            </a>
            <a href="tel:+447123456789" className="text-gray-600 hover:text-accent block">
              +44 7123 456 789
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-600 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/brainspotting" className="text-gray-600 hover:text-accent transition-colors">Brainspotting</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-primary">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Substack"
              >
                <BookOpen size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Stefan Walters. All rights reserved. 
            <span className="mx-2">•</span>
            Registered with BACP & BPS
          </p>
        </div>
      </div>
    </footer>
  );
}
