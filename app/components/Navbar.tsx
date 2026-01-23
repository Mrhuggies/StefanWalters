'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-display font-bold text-primary tracking-tight hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            Stefan Walters
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <Link href="/about" className="text-primary hover:text-accent transition-colors font-medium">
                About
              </Link>
            </li>
            
            <li>
              <Link href="/services" className="text-primary hover:text-accent transition-colors font-medium">
                Services
              </Link>
            </li>
            
            <li>
              <Link href="/brainspotting" className="text-primary hover:text-accent transition-colors font-medium">
                Brainspotting
              </Link>
            </li>
            
            <li>
              <Link href="/blog" className="text-primary hover:text-accent transition-colors font-medium">
                Blog
              </Link>
            </li>
            
            <li>
              <Link href="/contact" className="text-primary hover:text-accent transition-colors font-medium">
                Contact
              </Link>
            </li>
            
            {/* Social Icons */}
            <li className="flex items-center gap-3 ml-2 pl-6 border-l border-gray-200">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-accent transition-colors"
                aria-label="Substack"
              >
                <BookOpen size={18} />
              </a>
            </li>

            {/* Email - Right Side */}
            <li className="ml-4">
              <a 
                href="mailto:stefan@walters.com" 
                className="text-accent hover:underline font-medium"
              >
                stefan@walters.com
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 space-y-2 border-t border-gray-200">
            <li>
              <Link 
                href="/about" 
                className="block text-primary hover:text-accent transition-colors font-medium py-3 hover:bg-tech-blue px-4 rounded-lg"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block text-primary hover:text-accent transition-colors font-medium py-3 hover:bg-tech-blue px-4 rounded-lg"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/brainspotting" 
                className="block text-primary hover:text-accent transition-colors font-medium py-3 hover:bg-tech-blue px-4 rounded-lg"
                onClick={closeMenu}
              >
                Brainspotting
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block text-primary hover:text-accent transition-colors font-medium py-3 hover:bg-tech-blue px-4 rounded-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block text-primary hover:text-accent transition-colors font-medium py-3 hover:bg-tech-blue px-4 rounded-lg"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t border-gray-200 mt-4">
              <a 
                href="mailto:stefan@walters.com" 
                className="block text-accent hover:underline font-medium py-3 px-4"
              >
                stefan@walters.com
              </a>
            </li>
            <li className="flex items-center gap-4 px-4 pt-2 pb-4">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
