import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full bg-transparent absolute top-0 left-0 z-50 ${className}`}>
      <nav className="flex items-center justify-between py-6 px-6 w-full">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 group/logo cursor-pointer" aria-label="Go to home page">
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden">
            <img src="/images/Circular logo.png" alt="Bijou Group Logo" className="w-full h-full object-cover rounded-full" />
          </span>
          <span className="logo-gold-shine text-black font-medium text-lg transition-colors">Bijou Group</span>
        </a>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-3 group/hamburger menuicon-gold-shine"
          aria-label="Toggle menu"
        >
          <span className="menuicon-gold-shine-text text-black font-medium tracking-widest text-sm transition-colors">MENU</span>
          <div className="flex flex-col gap-1">
            <span className="menuicon-gold-shine-bar w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="menuicon-gold-shine-bar w-6 h-0.5 bg-black transition-all duration-300"></span>
            <span className="menuicon-gold-shine-bar w-6 h-0.5 bg-black transition-all duration-300"></span>
          </div>
        </button>
      {/* Gold shine effect for logo and menu icon */}
      <style>
        {`
          .logo-gold-shine {
            position: relative;
            display: inline-block;
            background: none;
            -webkit-background-clip: text;
            -webkit-text-fill-color: inherit;
            background-clip: text;
            text-fill-color: inherit;
            transition: color 0.3s, background-position 1.1s;
          }
          .group\/logo:hover .logo-gold-shine {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside-menu 1.1s 1 linear;
            color: #FFD700;
          }
          .menuicon-gold-shine:hover .menuicon-gold-shine-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside-menu 1.1s 1 linear;
            color: #FFD700;
          }
          .menuicon-gold-shine:hover .menuicon-gold-shine-bar {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            animation: shine-inside-menu 1.1s 1 linear;
            background-clip: border-box;
          }
        `}
      </style>
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
                  className="menu-gold-shine transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-gold-shine transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-gold-shine transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-gold-shine transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-gold-shine transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <Link 
                  href="/blog" 
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-gold-shine transition-colors"
                >
                  Blog
                </Link>
              </li> HIDDEN FOR NOW */}
      {/* Gold shine effect for menu items */}
      <style>
        {`
          .menu-gold-shine {
            position: relative;
            display: inline-block;
            background: none;
            -webkit-background-clip: text;
            -webkit-text-fill-color: inherit;
            background-clip: text;
            text-fill-color: inherit;
            transition: color 0.3s, background-position 1.1s;
          }
          .menu-gold-shine:hover {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside-menu 1.1s 1 linear;
            color: #FFD700;
          }
          @keyframes shine-inside-menu {
            0% {
              background-position: 120% 0;
            }
            70% {
              background-position: 45% 0;
            }
            100% {
              background-position: 45% 0;
            }
          }
        `}
      </style>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}