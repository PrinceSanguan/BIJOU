
import React, { useEffect, useRef } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

export function TrustedCompaniesSection({ enableScrollAnimation = false }: { enableScrollAnimation?: boolean }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!enableScrollAnimation) return;
    
    const section = sectionRef.current;
    if (!section) return;

    const animationTriggered: Record<string, boolean> = {
      container: false,
      logos: false
    };

    const handleScroll = () => {
      if (!section) return;

      const rect = (section as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

      // Container appears at 20% scroll progress
      if (scrollProgress > 0.2 && !animationTriggered.container && containerRef.current) {
        animationTriggered.container = true;
        animate(containerRef.current, {
          translateY: ['40px', '0px'],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      // Logos appear one by one at 30% scroll progress
      if (scrollProgress > 0.3 && !animationTriggered.logos) {
        animationTriggered.logos = true;
        logoRefs.current.forEach((logo, index) => {
          if (logo) {
            setTimeout(() => {
              animate(logo, {
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
              });
            }, index * 100);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollAnimation]);
  return (
    <>
      <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield’s trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijourelocation.co.uk/trusted-companies"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/trusted-companies"
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
      <section ref={sectionRef} className="relative py-10 sm:py-16 px-3 sm:px-6 bg-white overflow-x-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div ref={containerRef} className={`max-w-6xl mx-auto relative z-20 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
        <div
          className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 sm:gap-12 md:gap-16 lg:gap-20 gap-y-6"
        >
          <div ref={el => { logoRefs.current[0] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/ARLA_Propertymark_Protected.png" alt="ARLA Propertymark Protected" className="w-full h-full object-contain mx-auto" />
          </div>
          <div ref={el => { logoRefs.current[1] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/COHO 2.png" alt="COHO" className="w-full h-full object-contain mx-auto" />
          </div>
          <div ref={el => { logoRefs.current[2] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/GIP.jpeg" alt="GIP" className="w-full h-full object-contain mx-auto" />
          </div>
          <div ref={el => { logoRefs.current[3] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/ICO.jpeg" alt="ICO" className="w-full h-full object-contain mx-auto" />
          </div>
          <div ref={el => { logoRefs.current[4] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/PRS.png" alt="PRS" className="w-full h-full object-contain mx-auto" />
          </div>
          <div ref={el => { logoRefs.current[5] = el; }} className={`flex-shrink-0 w-24 h-10 sm:w-28 sm:h-12 md:w-32 md:h-16 flex items-center justify-center transition-all duration-200 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/logos/TDS.png" alt="TDS" className="w-full h-full object-contain mx-auto" />
          </div>
        </div>

        {/* Pagination dots removed */}
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          @media (max-width: 400px) {
            .w-24 { width: 6rem !important; }
            .h-10 { height: 2.5rem !important; }
          }
        `}
      </style>
    </section>
    </>
  );
}