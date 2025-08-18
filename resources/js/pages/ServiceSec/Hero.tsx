import React, { useState } from 'react';

export default function Hero() {
  const services = [
    {
      title: 'Comprehensive HMO & Buy-to-Let Management',
      desc: 'We handle day-to-day operations, tenant issues, and compliance—so you don\'t have to.',
      img: '/images/servicesimg/IMG-20250701-WA0001.jpg'
    },
    {
      title: 'Tenant Find Services',
      desc: 'We market your property, conduct viewings, and perform thorough checks to place the right tenants fast.',
      img: '/images/servicesimg/IMG-20241117-WA0008.jpeg'
    },
    {
      title: 'Rent Collection & Arrears',
      desc: 'From timely collection to managing late payments, we keep your rental income secure and stress-free.',
      img: '/images/servicesimg/IMG-20240422-WA0006.jpg'
    },
    {
      title: 'Maintenance & Repairs',
      desc: 'Access our trusted trades network for fast, reliable fixes—from urgent jobs to regular upkeep.',
      img: '/images/servicesimg/IMG-20240419-WA0068~2.jpg'
    },
    {
      title: 'Check-ins, Check-outs & Inventories',
      desc: 'We ensure full documentation and accountability at every move-in and move-out.',
      img: '/images/servicesimg/IMG-20240419-WA0010~2.jpg'
    },
    {
      title: 'Renters (Reform) Bill Guidance',
      desc: 'Stay legally compliant with our expert advice and implementation support.',
      img: '/images/servicesimg/20241117_144131.jpg'
    },
    {
      title: 'Property Sourcing & Staging for Investors',
      desc: 'We find, assess, and style your investment properties to attract tenants and boost ROI.',
      img: '/images/servicesimg/20241117_135948~3.jpg'
    },
    {
      title: 'Eviction & Legal Support',
      desc: 'We guide you through possession processes with real court experience and legal know-how.',
      img: '/images/servicesimg/20240415_134340~2.jpg'
    }
  ];
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent(c => (c === 0 ? services.length - 1 : c - 1));
  const goNext = () => setCurrent(c => (c === services.length - 1 ? 0 : c + 1));

  return (
    <section className="relative w-full py-16 sm:py-20 px-3 sm:px-6 bg-white text-black overflow-hidden min-h-[80vh] flex items-center justify-center mt-10">

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 px-2">
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-8">
            <h1 className='text-7xl font-bold font-serif text-[#FFD700]'> Our Services</h1>
        </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center h-44 sm:h-80 mb-3 sm:mb-4">
              {/* Previous image */}
              <img
                src={services[(current === 0 ? services.length - 1 : current - 1)].img}
                alt={services[(current === 0 ? services.length - 1 : current - 1)].title}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-36 sm:w-64 h-36 sm:h-64 object-cover rounded-xl bg-[#FFD700]/10 opacity-60 scale-90 transition-all duration-500 z-0 shadow-md"
                style={{ filter: 'blur(1px)' }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
              {/* Current image */}
              <img
                src={services[current].img}
                alt={services[current].title}
                className="relative z-10 w-64 sm:w-[32rem] h-56 sm:h-[20rem] object-cover rounded-2xl bg-[#FFD700]/10 shadow-xl transition-all duration-500"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/512x224/FFD700/fff?text=Service+Image'; 
                }}
              />
              {/* Next image */}
              <img
                src={services[(current === services.length - 1 ? 0 : current + 1)].img}
                alt={services[(current === services.length - 1 ? 0 : current + 1)].title}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-64 h-36 sm:h-64 object-cover rounded-xl bg-[#FFD700]/10 opacity-60 scale-90 transition-all duration-500 z-0 shadow-md"
                style={{ filter: 'blur(1px)' }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold text-[#FFD700] mb-2 sm:mb-4 leading-snug">
              {services[current].title.split(/(&|and|for|with|to|by|of|in|on|at|from|as|through|into|after|over|between|out|against|during|without|before|under|around|among)/gi).map((word, i) =>
                ["Management", "Services", "Arrears", "Repairs", "Inventories", "Guidance", "Investors", "Support"].includes(word.trim()) ?
                  <span key={i} className="text-[#4f4e44] font-semibold">{word}</span> : word
              )}
            </h3>
            <p className="text-xs sm:text-base leading-relaxed mb-2 sm:mb-4 text-black">
              {services[current].desc.split(/(secure|trusted|compliance|tenants|ROI|court|legal|support|network|documentation|accountability|advice|implementation|investment|properties|possession|experience|know-how)/gi).map((word, i) =>
                ["secure", "trusted", "compliance", "tenants", "ROI", "court", "legal", "support", "network", "documentation", "accountability", "advice", "implementation", "investment", "properties", "possession", "experience", "know-how"].includes(word.trim()) ?
                  <span key={i} className="text-[#4f4e44] font-semibold">{word}</span> : word
              )}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-4 sm:gap-8 w-full">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous service"
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] hover:bg-[#4f4e44] hover:text-white hover:border-[#4f4e44] transition mb-2 sm:mb-0"
              style={{ boxShadow: 'none' }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next service"
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] hover:bg-[#4f4e44] hover:text-white hover:border-[#4f4e44] transition"
              style={{ boxShadow: 'none' }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`
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
          0% { left: -60%; }
          70% { left: 70%; }
          100% { left: 70%; }
        }
      `}</style>
    </section>
  );
}