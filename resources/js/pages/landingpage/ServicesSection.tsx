

import React, { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

export function ServicesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const carouselRef = useRef(null);
  const centerImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const farLeftImageRef = useRef(null);
  const farRightImageRef = useRef(null);
  const carouselContentRef = useRef(null);
  
  const services = [
    {
      title: 'Rent Arrears Management',
      desc: "We handle all rent collection and arrears so you get paid on time, every time.",
      img: '/images/servicesimg/Rectangle 18480-1.webp'
    },
    {
      title: 'Eviction and Possession Assistance',
      desc: "We manage the entire eviction process to help you regain control of your property quickly and legally.",
      img: '/images/servicesimg/Rectangle 18480-2.webp'
    },
    {
      title: 'Property Staging and Room Setup',
      desc: "We transform empty properties into attractive, rent-ready homes that fill faster.",
      img: '/images/servicesimg/Rectangle 18480-3.webp'
    },
    {
      title: 'Inventories with Photographic Evidence',
      desc: "We create detailed photographic inventories to protect you from deposit disputes.",
      img: '/images/servicesimg/Rectangle 18480-4.webp'
    },
    {
      title: 'Property Compliance & Certification',
      desc: "We handle all safety certificates and compliance so your property stays legal and protected.",
      img: '/images/servicesimg/Rectangle 18480-5.webp'
    },
    {
      title: 'Tenancy Management',
      desc: "We take care of agreements, renewals, and tenant relations for stress-free management.",
      img: '/images/servicesimg/Rectangle 18480-6.webp'
    },
    {
      title: 'Landlord Support and Advice',
      desc: "Get expert guidance and support for every landlord challenge you face.",
      img: '/images/servicesimg/Rectangle 18480-7.webp'
    },
    {
      title: 'Rent Management and Collection',
      desc: "We automate rent collection and reporting to keep your finances on track.",
      img: '/images/servicesimg/Rectangle 18480-8.webp'
    }
  ];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  // For swipe/drag
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animationTriggered: Record<string, boolean> = {
      title: false,
      subtitle: false,
      carousel: false,
      centerImage: false,
      sideImages: false,
      outerImages: false,
      carouselContent: false
    };

    const handleScroll = () => {
      if (!section) return;

      const rect = (section as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

      // Title appears at 10% scroll progress
      if (scrollProgress > 0.1 && !animationTriggered.title && titleRef.current) {
        animationTriggered.title = true;
        animate(titleRef.current, {
          translateY: ['50px', '0px'],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutCubic'
        });
      }

      // Subtitle appears at 30% scroll progress
      if (scrollProgress > 0.3 && !animationTriggered.subtitle && subtitleRef.current) {
        animationTriggered.subtitle = true;
        animate(subtitleRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      // Carousel appears at 50% scroll progress
      if (scrollProgress > 0.5 && !animationTriggered.carousel && carouselRef.current) {
        animationTriggered.carousel = true;
        animate(carouselRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 700,
          easing: 'easeOutCubic'
        });

        // Center image appears first
        setTimeout(() => {
          if (!animationTriggered.centerImage && centerImageRef.current) {
            animationTriggered.centerImage = true;
            animate(centerImageRef.current, {
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 600,
              easing: 'easeOutCubic'
            });
          }
        }, 100);

        // Side images appear next
        setTimeout(() => {
          if (!animationTriggered.sideImages) {
            animationTriggered.sideImages = true;
            if (leftImageRef.current) {
              animate(leftImageRef.current, {
                translateX: ['-50px', '0px'],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
              });
            }
            if (rightImageRef.current) {
              animate(rightImageRef.current, {
                translateX: ['50px', '0px'],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
              });
            }
          }
        }, 120);

        // Outer images appear last
        setTimeout(() => {
          if (!animationTriggered.outerImages) {
            animationTriggered.outerImages = true;
            if (farLeftImageRef.current) {
              animate(farLeftImageRef.current, {
                translateX: ['-30px', '0px'],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutCubic'
              });
            }
            if (farRightImageRef.current) {
              animate(farRightImageRef.current, {
                translateX: ['30px', '0px'],
                opacity: [0, 1],
                duration: 400,
                easing: 'easeOutCubic'
              });
            }
          }
        }, 400);

        // Carousel content (title, description, buttons) appears last
        setTimeout(() => {
          if (!animationTriggered.carouselContent && carouselContentRef.current) {
            animationTriggered.carouselContent = true;
            animate(carouselContentRef.current, {
              translateY: ['20px', '0px'],
              opacity: [0, 1],
              duration: 500,
              easing: 'easeOutCubic'
            });
          }
        }, 550);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goPrev = () => {
    setPrev(current);
    setDirection('left');
    setCurrent(c => (c === 0 ? services.length - 1 : c - 1));
  };
  const goNext = () => {
    setPrev(current);
    setDirection('right');
    setCurrent(c => (c === services.length - 1 ? 0 : c + 1));
  };

  // Touch/Pointer/Mouse event handlers for swipe/drag
  const handleDragStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    if ('touches' in e) {
      setDragStartX(e.touches[0].clientX);
    } else {
      setDragStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    let clientX;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    // Optionally, you can add visual feedback here
  };

  const handleDragEnd = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || dragStartX === null) return;
    let clientX;
    if ('changedTouches' in e) {
      clientX = e.changedTouches[0].clientX;
    } else if ('clientX' in e) {
      clientX = e.clientX;
    } else {
      clientX = 0;
    }
    const diff = clientX - dragStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
    setDragging(false);
    setDragStartX(null);
  };

  return (
    <>
      <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield’s trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijourelocation.co.uk/services"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/services"
        address={{
          street: "70 Clarkehouse Road",
          city: "Sheffield",
          region: "South Yorkshire",
          postalCode: "S10 2LJ",
          country: "UK"
        }}
        phone="+447495747930"
        logo="/logo.svg"
      />
      <section ref={sectionRef} className="relative w-full py-10 sm:py-14 md:py-20 px-1 sm:px-4 md:px-6 bg-white text-black overflow-x-hidden min-h-[80vh] flex items-center justify-center">
      {/* Geometric accent elements */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

  <div className="relative z-10 w-full max-w-full md:max-w-3xl lg:max-w-5xl mx-auto">
        {/* Section header */}
  <div ref={titleRef} className="text-center mb-8 sm:mb-12 md:mb-16 px-1 sm:px-2 opacity-0">
          <p className="text-[#17635C] mb-0 uppercase opacity-90 font-serif tracking-widest text-lg sm:text-xl md:text-2xl font-normal" style={{fontFamily: 'Roboto Serif, serif'}}>SERVICES</p>
          <div className="flex flex-row items-center justify-center -mt-2">
            <h2 className="font-medium leading-tight relative inline-block px-2 sm:px-6 md:px-8 py-2 sm:py-3 gold-title font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[96px]" style={{fontFamily: 'Roboto Serif, serif'}}>
              <span className="gold-gradient-title-static">What We Do</span>
            </h2>
          </div>
          <div ref={subtitleRef} className="flex justify-center w-full mt-1 opacity-0">
            <p className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-[#0E5248] text-center font-sans text-sm sm:text-base md:text-lg lg:text-2xl font-normal leading-snug sm:leading-7 md:leading-8 lg:leading-9 m-0 px-1 md:px-0">
              We offer a full suite of property management and investment services tailored for <span className="text-[#FFD700] font-semibold">landlords</span>, <span className="text-[#FFD700] font-semibold">tenants</span>, and <span className="text-[#FFD700] font-semibold">investors</span>.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="flex flex-col items-center justify-center mt-0 md:-mt-16 opacity-0">
          <div className="w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-5xl mx-auto flex flex-col items-center">
            <div
              className="relative flex items-center justify-center mb-2 sm:mb-4 w-full h-auto lg:w-[1301px] lg:h-[631px] select-none"
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              onMouseDown={handleDragStart}
              onMouseMove={dragging ? handleDragMove : undefined}
              onMouseUp={handleDragEnd}
              onMouseLeave={dragging ? handleDragEnd : undefined}
              style={{touchAction: 'pan-y'}}
            >
              <div
                ref={farLeftImageRef}
                className="hidden md:block lg:block absolute top-1/2 -translate-y-1/2 overflow-hidden left-0 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[503px] lg:h-[303px] z-0 group cursor-pointer hover:ring-4 hover:ring-[#EFBF04]/60 opacity-0"
                aria-hidden="true"
                onClick={() => window.location.href = `/services/${((current - 2 + services.length) % services.length) + 1}`}
              >
                <img
                  src={services[(current - 2 + services.length) % services.length].img}
                  alt={services[(current - 2 + services.length) % services.length].title}
                  className="object-cover scale-130 w-full h-full transition-transform duration-500 bg-[#FFD700]/10 opacity-100 shadow-md group-hover:scale-140"
                  onError={(e) => { 
                    e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                  }}
                  draggable={false}
                />
              </div>
              <div
                ref={leftImageRef}
                className="hidden sm:block absolute top-1/2 -translate-y-1/2 overflow-hidden left-2 md:left-8 lg:left-24 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[671px] lg:h-[404px] z-10 group cursor-pointer hover:ring-4 hover:ring-[#EFBF04]/60 opacity-0"
                aria-hidden="true"
                onClick={() => window.location.href = `/services/${(current === 0 ? services.length - 1 : current - 1) + 1}`}
              >
                <img
                  src={services[(current === 0 ? services.length - 1 : current - 1)].img}
                  alt={services[(current === 0 ? services.length - 1 : current - 1)].title}
                  className="object-cover scale-130 w-full h-full transition-transform duration-500 bg-[#FFD700]/10 opacity-100 shadow-md group-hover:scale-140"
                  onError={(e) => { 
                    e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                  }}
                  draggable={false}
                />
              </div>
              <div
                ref={centerImageRef}
                className={[
                  "relative z-20 flex items-center justify-center overflow-hidden rounded-[30px] group cursor-pointer hover:ring-4 hover:ring-[#EFBF04]/60 opacity-0",
                  "w-full aspect-[4/3]",
                  "sm:w-[220px] sm:aspect-[4/3]",
                  "md:w-[480px] md:aspect-[2/1]",
                  "lg:w-[797px] lg:h-[480px]"
                ].join(' ')}
                onClick={() => window.location.href = `/services/${current + 1}`}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    transform: `translateX(${direction === 'right' ? '-100%' : '100%'})`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    opacity: 0,
                  }}
                  key={prev}
                >
                  <img
                    src={services[prev].img}
                    alt={services[prev].title}
                    className="w-full h-full object-cover scale-130"
                    draggable={false}
                  />
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                    transform: `translateX(0%)`,
                    position: 'relative',
                    zIndex: 2,
                  }}
                  key={current}
                >
                  <img
                    src={services[current].img}
                    alt={services[current].title}
                    className="w-full h-full object-cover scale-130 transition-transform duration-500 group-hover:scale-140"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image';
                    }}
                    draggable={false}
                  />
                </div>
              </div>
              <div
                ref={rightImageRef}
                className="hidden sm:block absolute top-1/2 -translate-y-1/2 overflow-hidden right-2 md:right-8 lg:right-24 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[671px] lg:h-[404px] z-10 group cursor-pointer hover:ring-4 hover:ring-[#EFBF04]/60 opacity-0"
                aria-hidden="true"
                onClick={() => window.location.href = `/services/${(current === services.length - 1 ? 0 : current + 1) + 1}`}
              >
                <img
                  src={services[(current === services.length - 1 ? 0 : current + 1)].img}
                  alt={services[(current === services.length - 1 ? 0 : current + 1)].title}
                  className="object-cover scale-130 w-full h-full transition-transform duration-500 bg-[#FFD700]/10 opacity-100 shadow-md group-hover:scale-140"
                  onError={(e) => { 
                    e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                  }}
                  draggable={false}
                />
              </div>
              <div
                ref={farRightImageRef}
                className="hidden md:block lg:block absolute top-1/2 -translate-y-1/2 overflow-hidden right-0 rounded-[30px] w-[120px] h-[72px] md:w-[260px] md:h-[220px] lg:w-[503px] lg:h-[303px] z-0 group cursor-pointer hover:ring-4 hover:ring-[#EFBF04]/60 opacity-0"
                aria-hidden="true"
                onClick={() => window.location.href = `/services/${((current + 2) % services.length) + 1}`}
              >
                <img
                  src={services[(current + 2) % services.length].img}
                  alt={services[(current + 2) % services.length].title}
                  className="object-cover scale-130 w-full h-full transition-transform duration-500 bg-[#FFD700]/10 opacity-100 shadow-md group-hover:scale-140"
                  onError={(e) => { 
                    e.currentTarget.src = 'https://placehold.co/256x128/FFD700/fff?text=Service+Image'; 
                  }}
                  draggable={false}
                />
              </div>
            </div>
            <div ref={carouselContentRef} className="flex flex-col items-center w-full mt-2 sm:mt-0 px-1 md:px-0 opacity-0">
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
                  className="rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] w-8 h-8 flex items-center justify-center text-base sm:text-lg transition-colors duration-200 hover:bg-[#4f4e44] hover:text-white focus:outline-none cursor-pointer"
                >
                  &#8592;
                </button>
                <button
                  className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 bg-[#EFBF04] text-white rounded-lg font-sans text-xs sm:text-base md:text-lg font-bold shadow-md transition-colors duration-200 hover:bg-[#0E5248] hover:text-white focus:outline-none cursor-pointer"
                  onClick={() => window.location.href = '/services'}
                >
                  View Services
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next service"
                  className="rounded-full border border-[#4f4e44] bg-transparent text-[#4f4e44] w-8 h-8 flex items-center justify-center text-base sm:text-lg transition-colors duration-200 hover:bg-[#4f4e44] hover:text-white focus:outline-none cursor-pointer"
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
    </>
  );
}