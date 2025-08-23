import React from 'react';

export function TrustedCompaniesSection() {
  return (
    <section className="relative py-10 sm:py-16 px-3 sm:px-6 bg-white overflow-x-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-6xl mx-auto relative z-20">
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-20 gap-y-6"
        >
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/ARLA_Propertymark_Protected.png" alt="ARLA Propertymark Protected" className="w-full h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/COHO 2.png" alt="COHO" className="w-full h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/GIP.jpeg" alt="GIP" className="w-full h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/ICO.jpeg" alt="ICO" className="w-full h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/PRS.png" alt="PRS" className="w-full h-full object-contain mx-auto" />
          </div>
          <div className="flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200">
            <img src="/images/logos/TDS.png" alt="TDS" className="w-full h-full object-contain mx-auto" />
          </div>
        </div>

        {/* Pagination dots removed */}
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          @media (max-width: 400px) {
            .w-24 { width: 6rem !important; }
            .h-10 { height: 2.5rem !important; }
          }
        `}
      </style>
    </section>
  );
}