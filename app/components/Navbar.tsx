'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, BookOpen, Menu, X, ChevronDown, Youtube } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workWithMeOpen, setWorkWithMeOpen] = useState(false);
  const [freeResourcesOpen, setFreeResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setWorkWithMeOpen(false);
    setFreeResourcesOpen(false);
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
            <li><Link href="/about-me" className="text-primary hover:text-accent transition-colors font-medium whitespace-nowrap">About Me</Link></li>
            
            <li className="relative group">
              <button 
                onMouseEnter={() => setWorkWithMeOpen(true)}
                onMouseLeave={() => setWorkWithMeOpen(false)}
                className="text-primary hover:text-accent transition-colors font-medium whitespace-nowrap flex items-center gap-1"
              >
                Work With Me
                <ChevronDown size={16} className={`transition-transform ${workWithMeOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                onMouseEnter={() => setWorkWithMeOpen(true)}
                onMouseLeave={() => setWorkWithMeOpen(false)}
                className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${workWithMeOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <Link href="/work-with-me" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Overview</Link>
                <Link href="/relationships" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Relationships</Link>
                <Link href="/performance-coaching" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Performance Coaching</Link>
                <Link href="/corporate" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Corporate Wellbeing & Performance</Link>
              </div>
            </li>
            
            <li className="relative group">
              <button 
                onMouseEnter={() => setFreeResourcesOpen(true)}
                onMouseLeave={() => setFreeResourcesOpen(false)}
                className="text-primary hover:text-accent transition-colors font-medium whitespace-nowrap flex items-center gap-1"
              >
                Free Resources
                <ChevronDown size={16} className={`transition-transform ${freeResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                onMouseEnter={() => setFreeResourcesOpen(true)}
                onMouseLeave={() => setFreeResourcesOpen(false)}
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${freeResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <Link href="/free-resources" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Blog</Link>
                <a href="https://www.facebook.com/people/Stefan-Walters-Performance-and-Wellbeing/61586176065368/" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Facebook</a>
                <a href="https://www.youtube.com/@thevisionarytherapist" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>YouTube</a>
                <a href="https://www.instagram.com/stefanwalterstherapy" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Instagram</a>
                <a href="https://substack.com/@stefanwaltersuk" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 text-primary hover:bg-accent hover:text-white transition-colors font-medium whitespace-nowrap" onClick={closeMenu}>Substack</a>
              </div>
            </li>
            <li><Link href="/contact" className="text-primary hover:text-accent transition-colors font-medium whitespace-nowrap">Contact</Link></li>
            
            {/* Social Icons */}
            <li className="flex items-center gap-3 ml-2 pl-6 border-l border-gray-200">
              <a href="https://www.facebook.com/people/Stefan-Walters-Performance-and-Wellbeing/61586176065368/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://www.youtube.com/@thevisionarytherapist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="YouTube"><Youtube size={18} /></a>
              <a href="https://www.instagram.com/stefanwalterstherapy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://substack.com/@stefanwaltersuk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Substack"><BookOpen size={18} /></a>
            </li>

            {/* Email - Right Side */}
            <li className="ml-4"><a href="mailto:Stefan@stefanwalters.com" className="text-accent hover:underline font-medium whitespace-nowrap">Stefan@stefanwalters.com</a></li>
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
            <li><Link href="/about-me" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg" onClick={closeMenu}>About Me</Link></li>
            <li><Link href="/work-with-me" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg" onClick={closeMenu}>Work With Me</Link></li>
            <li><Link href="/relationships" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Relationships</Link></li>
            <li><Link href="/performance-coaching" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Performance Coaching</Link></li>
            <li><Link href="/corporate" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Corporate Wellbeing & Performance</Link></li>
            <li><Link href="/free-resources" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg" onClick={closeMenu}>Free Resources</Link></li>
            <li><Link href="/free-resources" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Blog</Link></li>
            <li><a href="https://www.facebook.com/people/Stefan-Walters-Performance-and-Wellbeing/61586176065368/" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Facebook</a></li>
            <li><a href="https://www.youtube.com/@thevisionarytherapist" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ YouTube</a></li>
            <li><a href="https://www.instagram.com/stefanwalterstherapy" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Instagram</a></li>
            <li><a href="https://substack.com/@stefanwaltersuk" target="_blank" rel="noopener noreferrer" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg pl-8" onClick={closeMenu}>→ Substack</a></li>
            <li><Link href="/contact" className="block text-primary hover:text-accent hover:bg-tech-blue transition-colors font-medium py-3 px-4 rounded-lg" onClick={closeMenu}>Contact</Link></li>
            <li className="pt-4 border-t border-gray-200 mt-4">
              <a href="mailto:Stefan@stefanwalters.com" className="block text-accent hover:underline font-medium py-3 px-4">Stefan@stefanwalters.com</a>
            </li>
            <li className="flex items-center gap-4 px-4 pt-2 pb-4">
              <a href="https://www.facebook.com/people/Stefan-Walters-Performance-and-Wellbeing/61586176065368/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="https://www.youtube.com/@thevisionarytherapist" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="YouTube"><Youtube size={22} /></a>
              <a href="https://www.instagram.com/stefanwalterstherapy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="https://substack.com/@stefanwaltersuk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent transition-colors" aria-label="Substack"><BookOpen size={22} /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
