import React from 'react';

export function TrustedCompaniesSection() {
  return (
    <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center space-x-12 md:space-x-16 lg:space-x-20">
          <div className="flex-shrink-0">
            <img src="/images/logos/ARLA_Propertymark_Protected.png" alt="ARLA Propertymark Protected" className="w-32 h-16 object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logos/COHO 2.png" alt="COHO" className="w-32 h-16 object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logos/GIP.jpeg" alt="GIP" className="w-32 h-16 object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logos/ICO.jpeg" alt="ICO" className="w-32 h-16 object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logos/PRS.png" alt="PRS" className="w-32 h-16 object-contain" />
          </div>
          <div className="flex-shrink-0">
            <img src="/images/logos/TDS.png" alt="TDS" className="w-32 h-16 object-contain" />
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
          <div className="w-2 h-2 bg-[#FFD700] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}