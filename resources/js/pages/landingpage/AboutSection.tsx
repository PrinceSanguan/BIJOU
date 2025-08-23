import React from 'react';

export function AboutSection() {
  return (
    <section
  className="relative flex items-center justify-center min-h-[320px] py-10 sm:py-20 px-3 sm:px-6"
      style={{ backgroundColor: '#0E5248' }}
    >
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div
        className="flex flex-col items-center justify-center text-center relative z-20"
  style={{ width: '1159px', height: '320px' }}
      >
        {/* Section header with decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 gap-[29px]">
          <div className="hidden sm:block mr-4">
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
          <h2 className="text-[24px] font-normal tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase font-['Roboto_Serif',serif]">
            ABOUT US
          </h2>
          <div className="hidden sm:block ml-4">
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
        </div>
        {/* Main content with 57px gap from title */}
  <div style={{ marginTop: '40px' }} className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <p className="text-sm sm:text-base md:text-lg text-white font-medium px-1 sm:px-0 font-space" style={{ letterSpacing: 0, lineHeight: '36px' }}>
              At <span className="gold-gradient-text font-medium">Bijou Group</span>, HMO management is more than a service - it's our legacy. With years of experience managing HMO’s across Sheffield, we know the local market inside out. From student areas in S2 and S10 to professional house shares near Sheffield hospitals, our local knowledge ensures your property performs at its best.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white font-medium px-1 sm:px-0 font-space" style={{ letterSpacing: 0, lineHeight: '36px', marginTop: '24px' }}>
              Whether you're navigating complex HMO licensing Sheffield requirements, dealing with problem tenants, or seeking to maximize your rental returns, we're here to provide expert guidance with a personal touch that sets us apart from other letting agents.
            </p>
            
              <ul className="mt-8 flex flex-row justify-center items-center gap-12 text-white text-base font-space" style={{ listStyle: 'none', padding: 0, width: '100%' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#EFBF04',
                    color: '#fff',
                    fontSize: '0.8em',
                    fontWeight: 700,
                  }}>
                    ✓
                  </span> No voids
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#EFBF04',
                    color: '#fff',
                    fontSize: '0.8em',
                    fontWeight: 700,
                  }}>
                    ✓
                  </span> Full Compliance
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#EFBF04',
                    color: '#fff',
                    fontSize: '0.8em',
                    fontWeight: 700,
                  }}>
                    ✓
                  </span> Transparent Fees
                </li>
            </ul>
            <p className="text-white text-base font-space mt-6" style={{ textAlign: 'center', letterSpacing: 0, lineHeight: '32px' }}>
              <span style={{ color: '#EFBF04' }}>We handle everything so you can focus on building your property portfolio.</span>
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