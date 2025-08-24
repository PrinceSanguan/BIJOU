import React from 'react';

export function Cta() {
  return (
  <section className="w-full max-w-7xl mx-auto mt-24 mb-16 px-2 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-8 bg-transparent border-none shadow-none">
      {/* Left: Title and Buttons */}
      <div className="flex-1 flex flex-col items-start justify-center min-w-0 w-full max-w-full">
        <h2 className="text-xl xs:text-2xl sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold leading-tight text-[#12443A] mb-6 font-serif break-words max-w-full" style={{fontFamily: 'Roboto Serif, serif'}}>
          Ready for <span style={{ color: '#EFBF04', fontWeight: 500 }}>Stress-Free</span> HMO<br className="hidden sm:block" /> Management in Sheffield?
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full max-w-full">
          <button
            className="bg-white text-[#12443A] border border-gray-200 rounded-lg px-4 sm:px-6 py-2 shadow-2xl hover:shadow-[0_8px_32px_rgba(16,68,58,0.25)] font-medium text-sm sm:text-[15px] transition-all duration-200 w-full sm:w-auto hover:bg-[#EFBF04] hover:border-[#EFBF04] hover:text-[#12443A]"
            style={{ boxShadow: '0 6px 24px 0 rgba(16,68,58,0.18)' }}
            onClick={() => { window.location.href = '/contact'; }}
          >
            Want to Increase Your Returns?
          </button>
          <button
            className="bg-white text-[#12443A] border border-gray-200 rounded-lg px-4 sm:px-6 py-2 shadow-2xl hover:shadow-[0_8px_32px_rgba(16,68,58,0.25)] font-medium text-sm sm:text-[15px] transition-all duration-200 w-full sm:w-auto hover:bg-[#EFBF04] hover:border-[#EFBF04] hover:text-[#12443A]"
            style={{ boxShadow: '0 6px 24px 0 rgba(16,68,58,0.18)' }}
            onClick={() => { window.location.href = '/contact'; }}
          >
            I'm Looking for Properties
          </button>
        </div>
      </div>
      {/* Right: Description */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl text-[#12443A] text-base xs:text-lg sm:text-[18px] font-space text-center w-full">
        <p className="mb-3 leading-relaxed font-normal break-words max-w-full">
          Join 150+ Sheffield landlords who’ve transformed their property investments with <span style={{ color: '#EFBF04' }}>Bijou Group’s</span> professional management services.
        </p>
        <p className="leading-relaxed font-normal break-words max-w-full">
          Whether you’re looking for guaranteed rent, full HMO management, or exploring Sheffield property investment opportunities, our trusted local experts are here to help.
        </p>
      </div>
    </section>
  );
}

export default Cta;
