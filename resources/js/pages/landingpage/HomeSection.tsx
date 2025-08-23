
import React, { useEffect, useRef, useState } from 'react';

export function HomeSection() {

  const [shineOnce, setShineOnce] = useState(false);
  const [shineHold, setShineHold] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let triggered = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setShineOnce(true);
          triggered = true;
          observer.disconnect();
          setTimeout(() => {
            setShineHold(true);
            setShineOnce(false);
          }, 2500);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden touch-pan-y"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/11532497.png"
        preload="none"
      />
      {/* Edge vignette overlay (top, bottom, left, right) and dark overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Top vignette */}
        <div className="absolute top-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-b from-black/70 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-black/70 to-transparent" />
        {/* Left vignette */}
        <div className="absolute top-0 left-0 w-8 sm:w-16 lg:w-32 h-full bg-gradient-to-r from-black/70 to-transparent" />
        {/* Right vignette */}
        <div className="absolute top-0 right-0 w-8 sm:w-16 lg:w-32 h-full bg-gradient-to-l from-black/70 to-transparent" />
      </div>
      {/* Background geometric pattern (hidden) */}
      {/* <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-amber-600 to-orange-700 transform rotate-45 rounded-lg shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-yellow-500 to-amber-600 transform -rotate-12 rounded-lg shadow-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-br from-orange-500 to-red-600 transform rotate-12 rounded-lg shadow-lg"></div>
      </div> */}
      
      {/* Architectural lines overlay (simplified for mobile) */}
      {/* <div className="absolute inset-0 opacity-10 sm:opacity-15 lg:opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0 400L200 200L400 400L600 150L800 350L1000 100L1200 300" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <path d="M0 500L150 350L350 500L550 250L750 450L950 200L1200 400" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <path d="M0 300L250 100L450 300L650 50L850 250L1050 0L1200 200" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        </svg>
      </div> */}

      {/* Main content */}
      <div className="relative z-30 text-center px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-6 sm:mb-8">
          <p className="text-white text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 opacity-90 drop-shadow-md">
            <span className="text-white">WE ARE INFINITY.</span>
          </p>
          <div className="flex justify-center items-center w-full">
            <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-3 sm:mb-4 px-2 drop-shadow-lg font-serif">
              <span className="block w-full max-w-full mx-auto text-center text-white/80 font-serif font-medium leading-none">
                <span className="block text-white">HMO Management Sheffield</span>
                <span className="block text-[#EFBF04] font-serif font-medium leading-none">
                  Stress-Free Property <span className="text-white">Solutions</span>
                </span>
              </span>
            </h1>
          </div>
          <p className="text-white text-xs sm:text-sm md:text-base font-light opacity-90 mb-6 sm:mb-8 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 drop-shadow-md font-space text-center leading-[1.5]">
            We're Sheffield's trusted HMO management specialists, offering professional property services that eliminate your stress while maximizing your returns. Professional HMO letting agents serving Sheffield landlords & investors.
          </p>
        </div>

        {/* Buttons - stacked on mobile, side by side on larger screens */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto w-full">
          <button className="hero-shine-btn inline-block px-4 sm:px-5 py-2.5 sm:py-2 bg-white text-[#4f4e44] font-medium tracking-widest text-xs transition-all duration-300 rounded hover:bg-[#FFD700] hover:text-[#4f4e44] shadow-xl w-full sm:w-auto relative overflow-hidden">
            I'm a Landlord
          </button>
          <button className="hero-shine-btn inline-block px-4 sm:px-5 py-2.5 sm:py-2 bg-white text-[#4f4e44] font-medium tracking-widest text-xs transition-all duration-300 rounded hover:bg-[#FFD700] hover:text-[#4f4e44] shadow-xl w-full sm:w-auto relative overflow-hidden">
            I'm Looking for Properties
          </button>
        </div>
      </div>

      {/* Bottom section with social links and scroll indicator */}
  <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-0 right-0 flex flex-col sm:flex-row justify-between items-end px-2 sm:px-6 z-40 w-full">
        {/* Social links - horizontal on mobile, vertical on larger screens */}
  <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 lg:space-y-6">
          {/* Instagram */}
          <a href="#" className="social-gold-shine w-5 h-5 sm:w-6 sm:h-6 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] rounded" aria-label="Instagram" tabIndex={0}>
            <svg viewBox="0 0 24 24" className="icon-gold-shine">
              <defs>
                <linearGradient id="icon-gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="40%" stopColor="#FFB300" />
                  <stop offset="60%" stopColor="#FFF8DC" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" className="social-gold-shine w-5 h-5 sm:w-6 sm:h-6 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] rounded" aria-label="Facebook" tabIndex={0}>
            <svg viewBox="0 0 24 24" className="icon-gold-shine">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.019 3.676 9.163 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.163 22 17.019 22 12z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="social-gold-shine w-5 h-5 sm:w-6 sm:h-6 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] rounded" aria-label="LinkedIn" tabIndex={0}>
            <svg viewBox="0 0 24 24" className="icon-gold-shine">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.25c.414-.586 1.36-1.25 2.5-1.25 1.933 0 3.5 1.567 3.5 3.5v5.5z"/>
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" className="social-gold-shine w-5 h-5 sm:w-6 sm:h-6 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] rounded" aria-label="X" tabIndex={0}>
            <svg viewBox="0 0 24 24" className="icon-gold-shine">
              <path d="M17.53 3.5h3.47l-7.57 8.62 8.93 10.38h-7.03l-5.61-6.52-6.41 6.52H2.47l8.09-9.21L1.53 3.5h7.18l5.01 5.83 5.81-5.83zm-2.01 16.13h2.13l-6.01-6.98-2.13 2.36 6.01 6.98z"/>
            </svg>
          </a>
      {/* Social icon gold shine effect inside icon */}
      <style>
        {`
          .icon-gold-shine path {
            fill: #fff;
            transition: fill 0.4s, background-position 1.1s;
          }
          .social-gold-shine:hover .icon-gold-shine path {
            fill: url(#icon-gold-gradient);
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside-icon 1.1s 1 linear;
          }
          @keyframes shine-inside-icon {
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
        `}
      </style>
      {/* Social icon gold shine effect */}
      <style>
        {`
          .social-gold-shine {
            display: inline-block;
          }
          .icon-gold-shine path {
            fill: #fff;
            transition: fill 0.4s, background-position 1.1s;
          }
          .social-gold-shine:hover .icon-gold-shine path {
            fill: url(#icon-gold-gradient);
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            background-size: 200% 100%;
            background-position: 120% 0;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            animation: shine-inside-icon 1.1s 1 linear;
          }
          @keyframes shine-inside-icon {
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
        `}
      </style>
        </div>

        {/* Scroll indicator - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:flex flex-col items-center">
          <div className="writing-mode-vertical text-white text-sm font-medium tracking-widest opacity-70 mb-4">
            SCROLL
          </div>
          <div className="w-0.5 h-12 lg:h-16 bg-white opacity-30 mb-2"></div>
          <div className="text-white opacity-50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 16.5l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Geometric accent elements - fewer on mobile */}
  <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
  <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40"></div>
  <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
      
      {/* Custom CSS for vertical text and gold gradient */}
      <style>
        {`
          /* Shine effect for hero buttons with gold gradient */
          .hero-shine-btn {
            position: relative;
            overflow: hidden;
            background: #fff;
            color: #4f4e44;
            transition: background 0.3s, color 0.3s;
          }
          .hero-shine-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            width: 60%;
            height: 100%;
            background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
            opacity: 0.7;
            pointer-events: none;
            transition: left 0.3s;
          }
          .hero-shine-btn:hover {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 100%);
            color: #4f4e44;
          }
          .hero-shine-btn:hover::before {
            animation: btn-gold-shine 1.1s forwards;
          }
          @keyframes btn-gold-shine {
            0% {
              left: -75%;
            }
            60% {
              left: 110%;
            }
            100% {
              left: 110%;
            }
          }
          .writing-mode-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }

          /* Metallic gold gradient text */
          .gold-gradient-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            position: relative;
            display: inline-block;
          }

          /* Shine animation INSIDE the text */
          .metallic-gold-shine,
          .metallic-gold-shine-hold {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 30%, #FFF8DC 50%, #FFD700 70%, #FFB300 100%);
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            display: inline-block;
          }
          .metallic-gold-shine {
            background-position: 120% 0;
            animation: shine-inside 2.5s 1 linear;
          }
          .metallic-gold-shine-hold {
            background-position: 45% 0 !important;
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

          /* Ensure video covers properly on mobile */
          @media (max-width: 640px) {
            video {
              object-position: center;
            }
          }
        `}
      </style>
    </section>
  );
}
