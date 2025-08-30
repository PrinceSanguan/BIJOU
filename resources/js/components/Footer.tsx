

import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export function Footer({ enableScrollAnimation = false }: { enableScrollAnimation?: boolean }) {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const addressRef = useRef(null);
  const contactInfoRef = useRef(null);
  const quickLinksRef = useRef(null);
  const socialsRef = useRef(null);
  const legalRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    if (!enableScrollAnimation) return;
    
    const footer = footerRef.current;
    if (!footer) return;

    const animationTriggered: Record<string, boolean> = {
      logo: false,
      address: false,
      contactInfo: false,
      quickLinks: false,
      socials: false,
      legal: false,
      copyright: false
    };

    const handleScroll = () => {
      if (!footer) return;

      const rect = (footer as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const footerTop = rect.top;
      const footerHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - footerTop) / (windowHeight + footerHeight)));

      // Logo appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.logo && logoRef.current) {
        animationTriggered.logo = true;
        animate(logoRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      // Address appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.address && addressRef.current) {
        animationTriggered.address = true;
        animate(addressRef.current, {
          translateY: ['25px', '0px'],
          opacity: [0, 1],
          duration: 550,
          easing: 'easeOutCubic'
        });
      }

      // Contact info appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.contactInfo && contactInfoRef.current) {
        animationTriggered.contactInfo = true;
        animate(contactInfoRef.current, {
          translateY: ['25px', '0px'],
          opacity: [0, 1],
          duration: 550,
          easing: 'easeOutCubic'
        });
      }

      // Quick Links appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.quickLinks && quickLinksRef.current) {
        animationTriggered.quickLinks = true;
        animate(quickLinksRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutCubic'
        });
      }

      // Socials appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.socials && socialsRef.current) {
        animationTriggered.socials = true;
        animate(socialsRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutCubic'
        });
      }

      // Legal appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.legal && legalRef.current) {
        animationTriggered.legal = true;
        animate(legalRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutCubic'
        });
      }

      // Copyright appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.copyright && copyrightRef.current) {
        animationTriggered.copyright = true;
        animate(copyrightRef.current, {
          translateY: ['20px', '0px'],
          opacity: [0, 1],
          duration: 450,
          easing: 'easeOutCubic'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollAnimation]);

  return (
    <footer ref={footerRef} className="w-full bg-[#0E5248] text-white py-8 px-4 font-space">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 cursor-default">
        {/* Left: Logo and Contact */}
        <div className="flex flex-col md:w-1/3 gap-2">
          <div ref={logoRef} className={`flex items-center gap-3 mb-2 ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <img src="/images/Circular logo.png" alt="Bijou Group Logo" className="w-12 h-12 bg-white rounded-full p-1" />
            <span className="text-[#EFBF04] text-lg font-bold tracking-wide">BIJOU GROUP</span>
          </div>
          <div ref={addressRef} className={`text-sm leading-relaxed text-white ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            70 Clarkehouse Road, Sheffield, South<br />
            Yorkshire, England, S10 2LJ
          </div>
          <div ref={contactInfoRef} className={`flex gap-8 mt-2 text-sm ${enableScrollAnimation ? 'opacity-0' : ''}`}>
            <div>
              <div className="text-white">Phone number</div>
              <div className="text-white">+447495747930</div>
            </div>
            <div>
              <div className="text-white">Email</div>
              <div className="text-white">info@bijourelocation.co.uk</div>
            </div>
          </div>
        </div>

        {/* Center: Quick Links & Socials & Legal */}
        <div className="flex flex-1 flex-wrap justify-between md:justify-end gap-8">
          <div ref={quickLinksRef} className={enableScrollAnimation ? 'opacity-0' : ''}>
            <div className="font-bold mb-2 text-white">Quick Links</div>
            <ul className="space-y-1 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div ref={socialsRef} className={enableScrollAnimation ? 'opacity-0' : ''}>
            <div className="font-bold mb-2 text-white">Socials</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
            </ul>
          </div>
          <div ref={legalRef} className={enableScrollAnimation ? 'opacity-0' : ''}>
            <div className="font-bold mb-2 text-white">Legal</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Terms of Service</a></li> 
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={copyrightRef} className={`w-full flex justify-center mt-8 cursor-default ${enableScrollAnimation ? 'opacity-0' : ''}`}>
        <div className="text-xs text-white font-space text-center">
          © <a href="https://choros.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#EFBF04]">Choros.io</a> 2025 | All rights reserved.
        </div>
      </div>
    </footer>
  );
}