
import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

export function AboutSection() {
  return (
    <>
      <SEOHead
        title="About Us | Bijou Group Sheffield HMO Management"
        description="Learn about Bijou Group's legacy in Sheffield HMO management, our expertise, and how we help landlords maximize returns."
        canonical="https://bijougroup.co.uk/about"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/about"
        address={{
          street: "70 Clarkehouse Road",
          city: "Sheffield",
          region: "South Yorkshire",
          postalCode: "S10 2LJ",
          country: "UK"
        }}
        phone="+447495747930"
        logo="/logo.svg"
      />
    <section
      className="relative flex items-center justify-center min-h-[320px] py-10 sm:py-20 px-2 sm:px-6 bg-[#0E5248] overflow-x-hidden"
    >
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div
        className="flex flex-col items-center justify-center text-center relative z-20 w-full max-w-5xl min-h-[320px]"
      >
        {/* Section header with decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 gap-4 sm:gap-[29px] w-full max-w-2xl mx-auto">
          <div className="hidden sm:block mr-4">
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase font-['Roboto_Serif',serif]">
            ABOUT US
          </h2>
          <div className="hidden sm:block ml-4">
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
        </div>
        {/* Main content with responsive gap from title */}
        <div className="w-full flex items-center justify-center mt-10 sm:mt-12">
          <div className="flex flex-col items-center w-full">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-medium px-1 sm:px-0 font-space leading-[2.25]">
              At <span className="gold-gradient-text font-medium">Bijou Group</span>, HMO management is more than a service - it's our legacy. With years of experience managing HMO’s across Sheffield, we know the local market inside out. From student areas in S2 and S10 to professional house shares near Sheffield hospitals, our local knowledge ensures your property performs at its best.
            </p>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-medium px-1 sm:px-0 font-space leading-[2.25] mt-6">
              Whether you're navigating complex HMO licensing Sheffield requirements, dealing with problem tenants, or seeking to maximize your rental returns, we're here to provide expert guidance with a personal touch that sets us apart from other letting agents.
            </p>
            <ul className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-white text-sm sm:text-base font-space w-full max-w-2xl mx-auto">
              <li className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EFBF04] text-white text-base font-bold">✓</span>
                <span>No voids</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EFBF04] text-white text-base font-bold">✓</span>
                <span>Full Compliance</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#EFBF04] text-white text-base font-bold">✓</span>
                <span>Transparent Fees</span>
              </li>
            </ul>
            <p className="text-white text-xs xs:text-sm sm:text-base mt-6 font-space text-center leading-8">
              <span className="text-[#EFBF04]">We handle everything so you can focus on building your property portfolio.</span>
            </p>
          </div>
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
        `}
      </style>
    </section>
    </>
  );
}