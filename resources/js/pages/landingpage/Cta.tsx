import React from 'react';

export function Cta() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-24 mb-16 px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left: Title and Buttons */}
      <div className="flex-1 flex flex-col items-start justify-center min-w-[340px]">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[44px] font-bold leading-tight text-[#12443A] mb-6" style={{fontFamily: 'Roboto Serif, serif'}}>
          Ready for <span style={{ color: '#EFBF04', fontWeight: 500 }}>Stress-Free</span> HMO<br className="hidden sm:block" /> Management in Sheffield?
        </h2>
        <div className="flex flex-row gap-4 mt-2">
          <button className="bg-white text-[#12443A] border border-gray-200 rounded-lg px-6 py-2 shadow-md hover:shadow-lg font-medium text-[15px] transition-all duration-200">
            Want to Increase Your Returns?
          </button>
          <button className="bg-white text-[#12443A] border border-gray-200 rounded-lg px-6 py-2 shadow-md hover:shadow-lg font-medium text-[15px] transition-all duration-200">
            I'm Looking for Properties
          </button>
        </div>
      </div>
      {/* Right: Description */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl text-[#12443A] text-[18px] font-space text-center">
        <p className="mb-3" style={{ lineHeight: '1.6', fontWeight: 400 }}>
          Join 150+ Sheffield landlords who’ve transformed their property investments with <span style={{ color: '#EFBF04' }}>Bijou Group’s</span> professional management services.
        </p>
        <p style={{ lineHeight: '1.6', fontWeight: 400 }}>
          Whether you’re looking for guaranteed rent, full HMO management, or exploring Sheffield property investment opportunities, our trusted local experts are here to help.
        </p>
      </div>
    </section>
  );
}

export default Cta;
