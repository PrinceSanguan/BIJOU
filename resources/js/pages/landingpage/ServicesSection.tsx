import React, { useState } from 'react';

export function ServicesSection() {
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
    <section className="relative w-full py-16 sm:py-20 px-3 sm:px-6 bg-white text-black overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Geometric accent elements */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 px-2">
          <p
            className="text-[#4f4e44] mb-0 uppercase opacity-90"
            style={{ fontFamily: 'Roboto Serif, serif', fontSize: '24px', fontWeight: 400, letterSpacing: '0.2em' }}
          >
            SERVICES
          </p>
          <div className="flex flex-row items-center justify-center mt-0" style={{ marginTop: '-8px' }}>
            <h2 className="font-medium leading-tight relative inline-block px-8 py-3 gold-title" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '96px' }}>
              <span className="gold-gradient-title-static">What We Do</span>
            </h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '.5px' }}>
            <p
              style={{
                width: '965px',
                height: '75px',
                flexShrink: 0,
                color: '#0E5248',
                textAlign: 'center',
                fontFamily: 'var(--font-space)',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '36px',
                letterSpacing: 0,
                margin: 0
              }}
            >
              We offer a full suite of property management and investment services tailored for <span style={{ color: '#FFD700', fontWeight: 600 }}>landlords</span>, <span style={{ color: '#FFD700', fontWeight: 600 }}>tenants</span>, and <span style={{ color: '#FFD700', fontWeight: 600 }}>investors</span>.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col items-center justify-center" style={{ marginTop: '-100px' }}>
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <div
              className="relative flex items-center justify-center mb-3 sm:mb-4"
              style={{ width: '1301px', height: '631px', flexShrink: 0 }}
            >
              {/* Third (outer left) card */}
              <img
                src={services[(current - 2 + services.length) % services.length].img}
                alt={services[(current - 2 + services.length) % services.length].title}
                className="absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-75 transition-all duration-500 shadow-md"
                style={{
                  left: '0px',
                  width: '503px',
                  height: '303px',
                  flexShrink: 0,
                  borderRadius: '30px',
                  filter: 'none',
                  zIndex: 0
                }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
              {/* Previous image */}
              <img
                src={services[(current === 0 ? services.length - 1 : current - 1)].img}
                alt={services[(current === 0 ? services.length - 1 : current - 1)].title}
                className="absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-90 transition-all duration-500 shadow-md"
                style={{
                  left: '120px',
                  width: '671px',
                  height: '404px',
                  flexShrink: 0,
                  borderRadius: '30px',
                  filter: 'none',
                  zIndex: 1
                }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
              {/* Current image */}
              <div
                className="relative z-10 flex items-center justify-center opacity-100 transition-all duration-500"
                style={{
                  width: '797px',
                  height: '480px',
                  flexShrink: 0,
                  borderRadius: '30px',
                  background: `url(${services[current].img}) lightgray 50% / cover no-repeat`
                }}
              ></div>
              {/* Next image */}
              <img
                src={services[(current === services.length - 1 ? 0 : current + 1)].img}
                alt={services[(current === services.length - 1 ? 0 : current + 1)].title}
                className="absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-90 transition-all duration-500 shadow-md"
                style={{
                  right: '120px',
                  width: '671px',
                  height: '404px',
                  flexShrink: 0,
                  borderRadius: '30px',
                  filter: 'none',
                  zIndex: 1
                }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
              {/* Third (outer right) card */}
              <img
                src={services[(current + 2) % services.length].img}
                alt={services[(current + 2) % services.length].title}
                className="absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-75 transition-all duration-500 shadow-md"
                style={{
                  right: '0px',
                  width: '503px',
                  height: '303px',
                  flexShrink: 0,
                  borderRadius: '30px',
                  filter: 'none',
                  zIndex: 0
                }}
                aria-hidden="true"
                onError={(e) => { 
                  e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: '-32px' }}>
              <h3
                style={{
                  width: '745px',
                  height: 'auto',
                  flexShrink: 0,
                  color: '#EFBF04',
                  textAlign: 'center',
                  fontFamily: 'var(--font-space)',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '42px',
                  marginBottom: '8px',
                  marginTop: '0px'
                }}
              >
                  {services[current].title}
              </h3>
              <p
                style={{
                  width: '1024px',
                  height: '35px',
                  flexShrink: 0,
                  color: '#0E5248',
                  textAlign: 'center',
                  fontFamily: 'var(--font-space)',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '36px',
                  marginBottom: '16px',
                  marginTop: '0px'
                }}
              >
                {services[current].desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '24px' }}>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous service"
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #4f4e44', background: 'transparent', color: '#4f4e44', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#4f4e44'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4f4e44'; }}
                >
                  &#8592;
                </button>
                <button
                  style={{
                    padding: '10px 32px',
                    background: '#EFBF04',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-space)',
                    fontSize: '20px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(239,191,4,0.08)',
                    transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#0E5248'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = '#EFBF04'; e.currentTarget.style.color = '#fff'; }}
                >
                  View Services
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next service"
                  style={{
                    width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #4f4e44', background: 'transparent', color: '#4f4e44', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s, color 0.2s'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#4f4e44'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#4f4e44'; }}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .gold-gradient-title-static {
          background: linear-gradient(90deg, #FFD700 0%, #FFB300 50%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}