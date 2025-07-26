import React from 'react';

export function AboutSection() {
  return (
    <section className="relative py-10 sm:py-20 px-3 sm:px-6" style={{ backgroundColor: '#4f4e44' }}>
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Section header with decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 px-2">
          <div className="hidden sm:block mr-4">
            <svg width="64" height="16" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vine-shine-gradient-left" x1="0" y1="8" x2="64" y2="8" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FFD700" />
                  <stop offset="40%" stop-color="#FFD700" />
                  <stop offset="50%" stop-color="#fff" stop-opacity="0.7">
                    <animate attributeName="offset" values="0.4;0.7;0.4" keyTimes="0;0.5;1" dur="2.5s" repeatCount="1" fill="freeze" />
                  </stop>
                  <stop offset="60%" stop-color="#FFD700" />
                  <stop offset="100%" stop-color="#FFD700" />
                </linearGradient>
              </defs>
              <path d="M0 8 Q16 0 32 8 Q48 16 64 8" stroke="url(#vine-shine-gradient-left)" strokeWidth="2" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="#FFD700"/>
              <circle cx="56" cy="8" r="2" fill="#FFD700"/>
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase">
            <span className="gold-gradient-text metallic-gold-shine">ABOUT US</span>
          </h2>
          <div className="hidden sm:block ml-4">
            <svg width="64" height="16" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vine-shine-gradient-right" x1="0" y1="8" x2="64" y2="8" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FFD700" />
                  <stop offset="40%" stop-color="#FFD700" />
                  <stop offset="50%" stop-color="#fff" stop-opacity="0.7">
                    <animate attributeName="offset" values="0.4;0.7;0.4" keyTimes="0;0.5;1" dur="2.5s" repeatCount="1" fill="freeze" />
                  </stop>
                  <stop offset="60%" stop-color="#FFD700" />
                  <stop offset="100%" stop-color="#FFD700" />
                </linearGradient>
              </defs>
              <path d="M0 8 Q16 0 32 8 Q48 16 64 8" stroke="url(#vine-shine-gradient-right)" strokeWidth="2" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="#FFD700"/>
              <circle cx="56" cy="8" r="2" fill="#FFD700"/>
            </svg>
          </div>
        </div>
        {/* Main content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white font-light px-1 sm:px-0">
            At <span className="text-white font-medium">The Bijou Group</span>, property management is more than a service—it’s our legacy. With over 20 years of experience in the housing sector, 15+ years supporting a family property business, and 8 years running our own firm, we offer landlords and investors a fully informed, hands-on approach. Whether you're navigating compliance, dealing with tenants, or growing your portfolio, we’re here as your one-stop property solution.
          </p>
        </div>
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          .gold-gradient-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            position: relative;
            display: inline-block;
          }
          .metallic-gold-shine {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 30%, #FFF8DC 50%, #FFD700 70%, #FFB300 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside 2.5s 1 linear;
            display: inline-block;
          }
          @keyframes shine-inside {
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
          @media (max-width: 640px) {
            .about-section-img {
              object-position: center;
            }
          }
        `}
      </style>
    </section>
  );
}