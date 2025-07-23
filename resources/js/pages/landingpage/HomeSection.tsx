import React from 'react';

export function HomeSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Edge vignette overlay (top, bottom, left, right) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top vignette */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Left vignette */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black/70 to-transparent" />
        {/* Right vignette */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/70 to-transparent" />
      </div>
      {/* Background geometric pattern (optional, can be removed if video is enough) */}
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-600 to-orange-700 transform rotate-45 rounded-lg shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500 to-amber-600 transform -rotate-12 rounded-lg shadow-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-500 to-red-600 transform rotate-12 rounded-lg shadow-lg"></div>
      </div>
      
      {/* Architectural lines overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400L200 200L400 400L600 150L800 350L1000 100L1200 300" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <path d="M0 500L150 350L350 500L550 250L750 450L950 200L1200 400" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <path d="M0 300L250 100L450 300L650 50L850 250L1050 0L1200 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-white text-sm font-medium tracking-[0.3em] mb-6 opacity-90">
            <span className="text-green-500">WE ARE INFINITY.</span>
          </p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
            Property Management Made <span className="text-green-500">Personal</span>
          </h1>
          <p className="text-white text-sm md:text-base font-light opacity-90 mb-8">
            Trusted Experts in <span className="text-green-500">HMO</span> & <span className="text-green-500">Buy-to-Let</span> Services Across <span className="text-green-500">Sheffield</span> and <span className="text-green-500">South Yorkshire</span>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button className="inline-block px-5 py-2 bg-green-600 text-white font-medium tracking-widest text-xs transition-all duration-300 rounded hover:bg-white hover:text-[#FFD700]">
            I'm a Landlord
          </button>
          <button className="inline-block px-5 py-2 bg-green-600 text-white font-medium tracking-widest text-xs transition-all duration-300 rounded hover:bg-white hover:text-[#FFD700]">
            I'm Looking for Properties
          </button>
        </div>
      </div>

      {/* Bottom section with social links and scroll indicator */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-between items-end px-6 z-40">
        {/* Social links */}
        <div className="flex flex-col space-y-6">
          {/* Instagram */}
          <a href="#" className="w-6 h-6 text-white hover:text-opacity-70 transition-colors" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="w-6 h-6 text-white hover:text-opacity-70 transition-colors" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="w-6 h-6 text-white hover:text-opacity-70 transition-colors" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.25c.414-.586 1.36-1.25 2.5-1.25 1.933 0 3.5 1.567 3.5 3.5v5.5z"/>
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" className="w-6 h-6 text-white hover:text-opacity-70 transition-colors" aria-label="X">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.53 3.5h3.47l-7.57 8.62 8.93 10.38h-7.03l-5.61-6.52-6.41 6.52H2.47l8.09-9.21L1.53 3.5h7.18l5.01 5.83 5.81-5.83zm-2.01 16.13h2.13l-6.01-6.98-2.13 2.36 6.01 6.98z"/>
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center">
          <div className="writing-mode-vertical text-white text-sm font-medium tracking-widest opacity-70 mb-4">
            SCROLL
          </div>
          <div className="w-0.5 h-16 bg-white opacity-30 mb-2"></div>
          <div className="text-white opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16.5l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Geometric accent elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
      
      {/* Custom CSS for vertical text */}
      <style>
        {`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}
      </style>
    </section>
  );
}