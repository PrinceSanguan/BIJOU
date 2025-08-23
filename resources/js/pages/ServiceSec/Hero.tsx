
import React, { useState } from 'react';

function Hero() {
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
          <section className="relative w-full py-10 sm:py-14 md:py-20 px-1 sm:px-4 md:px-6 bg-white text-black overflow-x-hidden min-h-[80vh] flex items-center justify-center">
            {/* Geometric accent elements */}
            <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
            <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

            <div className="relative z-10 w-full max-w-full md:max-w-3xl lg:max-w-5xl mx-auto">
              {/* Section header */}
              <div className="text-center mb-8 sm:mb-12 md:mb-16 px-1 sm:px-2">
                <div className="flex flex-row items-center justify-center mt-0 -mt-2">
                  <h2 className="font-medium leading-tight relative inline-block px-2 sm:px-6 md:px-8 py-2 sm:py-3 gold-title font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[96px]" style={{fontFamily: 'Roboto Serif, serif'}}>
                    <span className="gold-gradient-title-static">Our Services</span>
                  </h2>
                </div>
                <div className="flex justify-center w-full mt-1">
                  <p className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-[#0E5248] text-center font-sans text-sm sm:text-base md:text-lg lg:text-2xl font-normal leading-snug sm:leading-7 md:leading-8 lg:leading-9 m-0 px-1 md:px-0">
                    We offer a full suite of property management and investment services tailored for <span className="text-[#FFD700] font-semibold">landlords</span>, <span className="text-[#FFD700] font-semibold">tenants</span>, and <span className="text-[#FFD700] font-semibold">investors</span>.
                  </p>
                </div>
              </div>

              {/* Carousel */}
              <div className="flex flex-col items-center justify-center mt-0 md:-mt-16">
                <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col items-center">
                  <div
                    className="relative flex items-center justify-center mb-2 sm:mb-4 w-full h-auto lg:w-[1301px] lg:h-[631px]"
                  >
                    {/* Third (outer left) card - hidden on mobile and small tablets, shown on md+ */}
                    <img
                      src={services[(current - 2 + services.length) % services.length].img}
                      alt={services[(current - 2 + services.length) % services.length].title}
                      className="hidden md:block lg:block absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-75 transition-all duration-500 shadow-md left-0 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[503px] lg:h-[303px] z-0"
                      aria-hidden="true"
                      onError={(e) => { 
                        e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                      }}
                    />
                    {/* Previous image - hidden on mobile, smaller on tablet */}
                    <img
                      src={services[(current === 0 ? services.length - 1 : current - 1)].img}
                      alt={services[(current === 0 ? services.length - 1 : current - 1)].title}
                      className="hidden sm:block absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-90 transition-all duration-500 shadow-md left-2 md:left-8 lg:left-24 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[671px] lg:h-[404px] z-10"
                      aria-hidden="true"
                      onError={(e) => { 
                        e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                      }}
                    />
                    {/* Current image - always visible, responsive */}
                    <div
                      className={
                        [
                          "relative z-20 flex items-center justify-center opacity-100 transition-all duration-500 rounded-[30px] bg-cover bg-center",
                          "w-full aspect-[4/3]",
                          "sm:w-[220px] sm:aspect-[4/3]",
                          "md:w-[480px] md:aspect-[2/1]",
                          "lg:w-[797px] lg:h-[480px]"
                        ].join(' ')
                      }
                      style={{ background: `url(${services[current].img}) lightgray 50% / cover no-repeat` }}
                    ></div>
                    {/* Next image - hidden on mobile, smaller on tablet */}
                    <img
                      src={services[(current === services.length - 1 ? 0 : current + 1)].img}
                      alt={services[(current === services.length - 1 ? 0 : current + 1)].title}
                      className="hidden sm:block absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-90 transition-all duration-500 shadow-md right-2 md:right-8 lg:right-24 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[671px] lg:h-[404px] z-10"
                      aria-hidden="true"
                      onError={(e) => { 
                        e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                      }}
                    />
                    {/* Third (outer right) card - hidden on mobile and small tablets, shown on md+ */}
                    <img
                      src={services[(current + 2) % services.length].img}
                      alt={services[(current + 2) % services.length].title}
                      className="hidden md:block lg:block absolute top-1/2 -translate-y-1/2 object-cover bg-[#FFD700]/10 opacity-100 scale-75 transition-all duration-500 shadow-md right-0 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[503px] lg:h-[303px] z-0"
                      aria-hidden="true"
                      onError={(e) => { 
                        e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-center w-full mt-2 sm:mt-0 px-1 md:px-0">
                    <h3
                      className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-[#EFBF04] text-center font-sans font-bold text-base sm:text-xl md:text-2xl lg:text-4xl leading-snug mb-2 mt-0"
                    >
                      {services[current].title}
                    </h3>
                    <p
                      className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-[#0E5248] text-center font-sans text-xs sm:text-base md:text-lg lg:text-2xl font-normal leading-snug sm:leading-7 md:leading-8 lg:leading-9 mb-4 mt-0"
                    >
                      {services[current].desc}
                    </p>
                    <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mt-4">
                      <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous service"
                        className="rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] w-8 h-8 flex items-center justify-center text-base sm:text-lg transition-colors duration-200 hover:bg-[#4f4e44] hover:text-white focus:outline-none"
                      >
                        &#8592;
                      </button>
                      <button
                        className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 bg-[#EFBF04] text-white rounded-lg font-sans text-xs sm:text-base md:text-lg font-bold shadow-md transition-colors duration-200 hover:bg-[#0E5248] hover:text-white focus:outline-none"
                      >
                        View Services
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next service"
                        className="rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] w-8 h-8 flex items-center justify-center text-base sm:text-lg transition-colors duration-200 hover:bg-[#4f4e44] hover:text-white focus:outline-none"
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
              @media (max-width: 1023px) {
                .gold-gradient-title-static {
                  font-size: 2rem !important;
                }
              }
              @media (max-width: 900px) {
                .gold-gradient-title-static {
                  font-size: 1.5rem !important;
                }
              }
              @media (max-width: 767px) {
                .gold-gradient-title-static {
                  font-size: 1.1rem !important;
                }
              }
            `}</style>
          </section>
        );
  }

export default Hero;