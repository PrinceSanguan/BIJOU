import React, { useEffect, useRef } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

export function AboutSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const line5Ref = useRef(null);
  const line6Ref = useRef(null);
  const listRef = useRef(null);
  const finalParaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animationTriggered: Record<string, boolean> = {
      title: false,
      leftLine: false,
      rightLine: false,
      line1: false,
      line2: false,
      line3: false,
      line4: false,
      line5: false,
      line6: false,
      list: false,
      final: false
    };

    const handleScroll = () => {
      if (!section) return;

      const rect = (section as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));


      if (scrollProgress > 0.1 && !animationTriggered.title && titleRef.current) {
        animationTriggered.title = true;
        animate(titleRef.current, {
          translateY: ['100%', '0%'],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutCubic'
        });
      }

      // Left line appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.leftLine && leftLineRef.current) {
        animationTriggered.leftLine = true;
        animate(leftLineRef.current, {
          scaleX: [0, 1],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      // Right line appears at 17% scroll progress
      if (scrollProgress > 0.17 && !animationTriggered.rightLine && rightLineRef.current) {
        animationTriggered.rightLine = true;
        animate(rightLineRef.current, {
          scaleX: [0, 1],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      const lines = [
        { ref: line1Ref, progress: 0.2 },
        { ref: line2Ref, progress: 0.2 },
        { ref: line3Ref, progress: 0.2 },
        { ref: line4Ref, progress: 0.2 },
        { ref: line5Ref, progress: 0.2 },
        { ref: line6Ref, progress: 0.2 }
      ];

      lines.forEach((line, index) => {
        const triggerKey = `line${index + 1}`;
        if (scrollProgress > line.progress && !animationTriggered[triggerKey] && line.ref.current) {
          animationTriggered[triggerKey] = true;
          animate(line.ref.current, {
            translateY: ['30px', '0px'],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutCubic'
          });
        }
      });


      if (scrollProgress > 0.2 && !animationTriggered.list && listRef.current) {
        animationTriggered.list = true;
        animate(listRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutCubic'
        });
      }


      if (scrollProgress > 0.2 && !animationTriggered.final && finalParaRef.current) {
        animationTriggered.final = true;
        animate(finalParaRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutCubic'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield’s trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijourelocation.co.uk/about"
      /> */}
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/about"
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
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-[320px] py-10 sm:py-20 px-2 sm:px-6 bg-[#0E5248] overflow-x-hidden"
    >
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div
        className="flex flex-col items-center justify-center text-center relative z-20 w-full max-w-5xl min-h-[320px]"
      >
        {/* Section header with decorative line */}
        <div className="flex flex-col sm:flex-row items-center justify-center px-2 gap-4 sm:gap-[29px] w-full max-w-2xl mx-auto">
          <div ref={leftLineRef} className="hidden sm:block mr-4 opacity-0" style={{transformOrigin: 'left center'}}>
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
          <h2 ref={titleRef} className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-[0.2em] sm:tracking-[0.3em] text-white uppercase font-['Roboto_Serif',serif]">
            ABOUT US
          </h2>
          <div ref={rightLineRef} className="hidden sm:block ml-4 opacity-0" style={{transformOrigin: 'right center'}}>
            <svg width="103" height="2" viewBox="0 0 103 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="103" y2="1" stroke="#FFD700" strokeWidth="2" />
            </svg>
          </div>
        </div>
        {/* Main content with responsive gap from title */}
        <div className="w-full flex items-center justify-center mt-10 sm:mt-12">
          <div className="flex flex-col items-center w-full">
            <div className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-medium px-1 sm:px-0 font-space leading-[2.25] space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 gold-gradient-text">Why Sheffield Landlords Struggle with HMO Management</h2>
              <p>At <span className="gold-gradient-text">Bijou Relocation</span>, HMO management is more than a service - it's our legacy. With years of experience managing HMOs across Sheffield, we know the local market inside out. From student areas in S2 and S10 to professional house shares near Sheffield hospitals, our local knowledge ensures your property performs at its best.</p>
              <p>Whether you're navigating complex HMO licensing Sheffield requirements, dealing with problem tenants, or seeking to maximize your rental returns, we're here to provide expert guidance with a personal touch that sets us apart from other letting agents.</p>
              <p><strong>Our guarantee:</strong> No voids, full compliance, and transparent fees. We handle everything so you can focus on building your property portfolio.</p>
            </div>
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
        `}
      </style>
    </section>
    </>
  );
}