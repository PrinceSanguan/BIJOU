import React, { useState, useEffect } from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: '“Karen and her team made everything seamless—from tenant placement to full management. A truly hands-off experience.”',
      author: 'James R.',
      role: 'Landlord in Sheffield',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      text: '“Professional, reliable, and legally sharp. I wouldn’t trust my HMO portfolio with anyone else.”',
      author: 'Michelle D.',
      role: 'Investor',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      text: '“The Bijou Group helped me source, stage, and let my first rental within weeks. Absolutely worth it.”',
      author: 'Mark E.',
      role: 'First-time Landlord',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
  ];

  const [active, setActive] = useState(0);

  // Auto-advance testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-12 sm:py-20 px-3 sm:px-6 bg-white overflow-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Section header */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
          <span className="hidden sm:inline-block gold-vine-shine">
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldVineGradientL" x1="0" y1="12" x2="64" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700"/>
                  <stop offset="0.4" stopColor="#FFB300"/>
                  <stop offset="0.6" stopColor="#FFF8DC"/>
                  <stop offset="1" stopColor="#FFD700"/>
                </linearGradient>
              </defs>
              <path d="M0 12 Q16 0 32 12 Q48 24 64 12" stroke="url(#goldVineGradientL)" strokeWidth="2" fill="none"/>
              <ellipse cx="8" cy="12" rx="2.5" ry="3" fill="url(#goldVineGradientL)"/>
              <ellipse cx="56" cy="12" rx="2.5" ry="3" fill="url(#goldVineGradientL)"/>
              <circle cx="16" cy="8" r="1.2" fill="#4f4e44"/>
              <circle cx="48" cy="16" r="1.2" fill="#4f4e44"/>
              <rect className="gold-vine-shine-rect" x="0" y="0" width="64" height="24" fill="url(#goldVineShineL)" style={{mixBlendMode:'lighten'}}/>
              <defs>
                <linearGradient id="goldVineShineL">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)"/>
                  <stop offset="50%" stopColor="rgba(255,255,255,0.7)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="relative inline-block">
            <span className="absolute inset-0 rounded-lg bg-[#4f4e44] opacity-90 -z-10 w-full h-full block shadow-lg"></span>
            <p className="text-xs sm:text-sm font-extrabold tracking-[0.2em] sm:tracking-[0.3em] uppercase gold-gradient-title-shine relative px-4 py-1">
              <span className="gold-gradient-title-shine-text">WHAT OUR CLIENTS SAY</span>
            </p>
          </div>
          <span className="hidden sm:inline-block gold-vine-shine">
            <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldVineGradientR" x1="0" y1="12" x2="64" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700"/>
                  <stop offset="0.4" stopColor="#FFB300"/>
                  <stop offset="0.6" stopColor="#FFF8DC"/>
                  <stop offset="1" stopColor="#FFD700"/>
                </linearGradient>
              </defs>
              <path d="M0 12 Q16 0 32 12 Q48 24 64 12" stroke="url(#goldVineGradientR)" strokeWidth="2" fill="none"/>
              <ellipse cx="8" cy="12" rx="2.5" ry="3" fill="url(#goldVineGradientR)"/>
              <ellipse cx="56" cy="12" rx="2.5" ry="3" fill="url(#goldVineGradientR)"/>
              <circle cx="16" cy="8" r="1.2" fill="#4f4e44"/>
              <circle cx="48" cy="16" r="1.2" fill="#4f4e44"/>
              <rect className="gold-vine-shine-rect" x="0" y="0" width="64" height="24" fill="url(#goldVineShineR)" style={{mixBlendMode:'lighten'}}/>
              <defs>
                <linearGradient id="goldVineShineR">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)"/>
                  <stop offset="50%" stopColor="rgba(255,255,255,0.7)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        {/* Testimonial content */}
        <div className="mb-8 sm:mb-12">
          <p className="text-lg sm:text-2xl md:text-3xl leading-relaxed text-black font-light mb-6 sm:mb-10 px-2">
            {testimonials[active].text.split(/(Bijou Group|seamless|Professional|reliable|legally sharp|portfolio|source|stage|let|rental|worth|experience)/gi).map((word, i) =>
              ["Bijou Group", "seamless", "Professional", "reliable", "legally sharp", "portfolio", "source", "stage", "let", "rental", "worth", "experience"].includes(word.trim()) ?
                <span key={i} className="text-[#4f4e44] font-semibold">{word}</span> : word
            )}
          </p>
          {/* Author section */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-[#FFD700]">
              <img 
                src={testimonials[active].img}
                alt={testimonials[active].author}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-base sm:text-lg font-medium text-black mb-0.5 sm:mb-1">{testimonials[active].author}</h4>
            <p className="text-[#4f4e44] text-xs sm:text-sm">{testimonials[active].role}</p>
          </div>
        </div>
        {/* Pagination dots removed; now auto-advances */}
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          /* Gold gradient and shine for Testimonials title */
          .gold-gradient-title-shine-text {
            background: linear-gradient(90deg, #FFD700 0%, #FFB300 40%, #FFF8DC 60%, #FFD700 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            position: relative;
            display: inline-block;
          }
          .gold-gradient-title-shine-text::after {
            content: '';
            position: absolute;
            top: 0;
            left: -60%;
            width: 50%;
            height: 100%;
            background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
            opacity: 0.7;
            pointer-events: none;
            transition: none;
            z-index: 2;
            animation: gold-title-shine 2.2s 1 linear;
          }
          @keyframes gold-title-shine {
            0% {
              left: -60%;
            }
            70% {
              left: 70%;
            }
            100% {
              left: 70%;
            }
          }

          /* Gold vine shine animation */
          .gold-vine-shine {
            position: relative;
          }
          .gold-vine-shine-rect {
            position: absolute;
            top: 0;
            left: -60%;
            width: 50%;
            height: 100%;
            pointer-events: none;
            opacity: 0.7;
            mix-blend-mode: lighten;
            animation: gold-vine-shine-anim 2.2s 1 linear;
          }
          @keyframes gold-vine-shine-anim {
            0% {
              left: -60%;
            }
            70% {
              left: 70%;
            }
            100% {
              left: 70%;
            }
          }

          @media (max-width: 640px) {
            .testimonial-img {
              object-position: center;
            }
          }
        `}
      </style>
    </section>
  );
}