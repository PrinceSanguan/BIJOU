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
  <section className="relative pt-12 sm:pt-20 px-3 sm:px-6 bg-white overflow-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Section header */}
    <div className="mb-8 sm:mb-12 w-full flex items-center justify-center gap-4" style={{ alignItems: 'center' }}>
              <span style={{ display: 'inline-block', width: '103px', height: 0, borderBottom: '2px solid #FFD700', verticalAlign: 'middle', position: 'relative', top: '-4px' }} />
          <span
            className="uppercase"
            style={{
              width: '386px',
              height: '34.795px',
              display: 'inline-block',
              color: '#0E5248',
              textAlign: 'center',
              fontFamily: 'Roboto Serif, serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '2.4px',
              flexShrink: 0
            }}
          >
            WHAT OUR CLIENTS SAY
          </span>
              <span style={{ display: 'inline-block', width: '103px', height: 0, borderBottom: '2px solid #FFD700', verticalAlign: 'middle', position: 'relative', top: '-4px' }} />
        </div>
        {/* Testimonial content */}
        <div className="mb-8 sm:mb-12">
          <p className="text-lg sm:text-2xl md:text-3xl leading-relaxed font-light mb-6 sm:mb-10 px-2" style={{ color: '#0E5248' }}>
            {testimonials[active].text.split(/(Bijou Group|seamless|Professional|reliable|legally sharp|portfolio|source|stage|let|rental|worth|experience)/gi).map((word, i) =>
              ["Bijou Group", "seamless", "Professional", "reliable", "legally sharp", "portfolio", "source", "stage", "let", "rental", "worth", "experience"].includes(word.trim()) ?
                <span key={i} className="font-semibold" style={{ color: '#0E5248' }}>{word}</span> : word
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
            <p className="text-xs sm:text-sm" style={{ color: '#0E5248' }}>{testimonials[active].role}</p>
          </div>
          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`w-2 h-2 rounded-full border transition-all ${active === idx ? 'bg-[#0E5248] border-[#0E5248]' : 'bg-[#FFD700] border-[#FFD700]'}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
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