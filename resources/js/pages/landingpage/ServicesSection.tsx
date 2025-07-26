import React, { useState } from 'react';

export function ServicesSection() {
  const services = [
    {
      title: 'Comprehensive HMO & Buy-to-Let Management',
      desc: 'We handle day-to-day operations, tenant issues, and compliance—so you don’t have to.',
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
    <section className="relative w-full py-16 sm:py-20 px-3 sm:px-6 bg-white text-black overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background geometric pattern with accent gold (hidden) */}
      {/* <div className="absolute inset-0 opacity-20 sm:opacity-10 pointer-events-none z-0">
        <div className="absolute top-1/4 right-0 w-40 h-40 sm:w-96 sm:h-96 border border-[#FFD700] transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-80 sm:h-80 border border-[#FFD700] transform -rotate-12 rounded-lg"></div>
        <div className="absolute top-0 right-1/3 w-28 h-28 sm:w-72 sm:h-72 border border-[#FFD700] transform rotate-12 rounded-lg"></div>
      </div> */}

      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 px-2">
          <p className="text-[#4f4e44] text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 uppercase opacity-90">
            <span className="text-[#4f4e44]">SERVICES</span>
          </p>
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 mb-4 sm:mb-8">
            <span className="hidden sm:inline-block">
              <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q16 0 32 10 Q48 20 64 10" stroke="#4f4e44" strokeWidth="2" fill="none"/>
                <circle cx="8" cy="10" r="2" fill="#4f4e44"/>
                <circle cx="56" cy="10" r="2" fill="#4f4e44"/>
              </svg>
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
              What We <span className="text-[#4f4e44]">Do</span>.
            </h2>
            <span className="hidden sm:inline-block">
              <svg width="64" height="20" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 Q16 0 32 10 Q48 20 64 10" stroke="#4f4e44" strokeWidth="2" fill="none"/>
                <circle cx="8" cy="10" r="2" fill="#4f4e44"/>
                <circle cx="56" cy="10" r="2" fill="#4f4e44"/>
              </svg>
            </span>
          </div>
          <p className="text-xs sm:text-lg leading-relaxed max-w-3xl mx-auto text-black">
            We offer a full suite of property management and investment services tailored for <span className="text-[#4f4e44] font-semibold">landlords</span>, <span className="text-[#4f4e44] font-semibold">tenants</span>, and <span className="text-[#4f4e44] font-semibold">investors</span>.
          </p>
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
                onError={e => { e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; }}
              />
              {/* Current image */}
              <img
                src={services[current].img}
                alt={services[current].title}
                className="relative z-10 w-64 sm:w-[32rem] h-56 sm:h-[20rem] object-cover rounded-2xl bg-[#FFD700]/10 shadow-xl transition-all duration-500"
                onError={e => { e.currentTarget.src = 'https://placehold.co/512x224/FFD700/fff?text=Service+Image'; }}
              />
              {/* Next image */}
              <img
                src={services[(current === services.length - 1 ? 0 : current + 1)].img}
                alt={services[(current === services.length - 1 ? 0 : current + 1)].title}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-36 sm:w-64 h-36 sm:h-64 object-cover rounded-xl bg-[#FFD700]/10 opacity-60 scale-90 transition-all duration-500 z-0 shadow-md"
                style={{ filter: 'blur(1px)' }}
                aria-hidden="true"
                onError={e => { e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; }}
              />
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold text-black mb-2 sm:mb-4 leading-snug">
              {services[current].title.split(/(&|and|for|with|to|by|of|in|on|at|from|as|with|through|into|after|over|between|out|against|during|without|before|under|around|among)/gi).map((word, i) =>
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
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition ${current === idx ? 'bg-[#FFD700]' : 'bg-[#e5e5e0]'}`}
                  aria-label={`Go to service ${idx + 1}`}
                  style={{ boxShadow: 'none' }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next service"
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] hover:bg-[#4f4e44] hover:text-white hover:border-[#4f4e44] transition mt-2 sm:mt-0"
              style={{ boxShadow: 'none' }}
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          @media (max-width: 640px) {
            .services-section-img {
              object-position: center;
            }
          }
        `}
      </style>
    </section>
  );
}