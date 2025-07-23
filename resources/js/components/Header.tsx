import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      <nav className="flex items-center justify-between py-6 px-6 w-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src="/images/Circular logo.png" alt="Bijou Group Logo" className="w-full h-full object-cover rounded-full" />
          </span>
          <span className="text-white font-medium text-lg">Bijou Group</span>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 group"
          aria-label="Toggle menu"
        >
          <span className="text-white font-medium tracking-widest text-sm hover:text-opacity-80 transition-colors">
            MENU
          </span>
          <div className="flex flex-col gap-1">
            <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-opacity-80"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-opacity-80"></span>
            <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:bg-opacity-80"></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile/Desktop Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40">
          <div className="container mx-auto px-6 py-8">
            {/* Close button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-2xl text-gray-600 hover:text-gray-800"
            >
              ×
            </button>
            
            {/* Menu Items */}
            <ul className="flex flex-col gap-8 mt-16 text-center text-2xl text-gray-800">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-amber-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}