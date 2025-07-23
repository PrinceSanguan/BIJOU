import React from 'react';

export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header with decorative line */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-0.5 bg-gray-300 mr-4"></div>
          <h2 className="text-sm font-medium tracking-[0.3em] text-gray-600 uppercase">
            ABOUT US
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 ml-4"></div>
        </div>
        
        {/* Main content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg leading-relaxed text-gray-800 font-light">
            At <span className="text-[#4f4e44] font-medium">The Bijou Group</span>, property management is more than a service—it’s our legacy. With over 20 years of experience in the housing sector, 15+ years supporting a family property business, and 8 years running our own firm, we offer landlords and investors a fully informed, hands-on approach. Whether you're navigating compliance, dealing with tenants, or growing your portfolio, we’re here as your one-stop property solution.
          </p>
        </div>
      </div>
    </section>
  );
}