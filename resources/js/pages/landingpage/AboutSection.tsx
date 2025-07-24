import React from 'react';

export function AboutSection() {
  return (
    <section className="relative py-10 sm:py-20 px-3 sm:px-6 bg-gray-50 overflow-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Section header with decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-12 px-2">
          <div className="hidden sm:block w-16 h-0.5 bg-gray-300 mr-4"></div>
          <h2 className="text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 uppercase">
            ABOUT US
          </h2>
          <div className="hidden sm:block w-16 h-0.5 bg-gray-300 ml-4"></div>
        </div>
        {/* Main content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800 font-light px-1 sm:px-0">
            At <span className="text-[#4f4e44] font-medium">The Bijou Group</span>, property management is more than a service—it’s our legacy. With over 20 years of experience in the housing sector, 15+ years supporting a family property business, and 8 years running our own firm, we offer landlords and investors a fully informed, hands-on approach. Whether you're navigating compliance, dealing with tenants, or growing your portfolio, we’re here as your one-stop property solution.
          </p>
        </div>
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
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