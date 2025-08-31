import React, { useEffect, useRef } from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';
import { animate } from 'animejs';

export default function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasAnimatedTitle = false;
    let hasAnimatedSection = false;
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      if (titleRef.current && !hasAnimatedTitle) {
        const rect = titleRef.current.getBoundingClientRect();
        if ((windowHeight - rect.top) / windowHeight > 0.2) {
          hasAnimatedTitle = true;
          animate(titleRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 700,
            easing: 'easeOutCubic',
            complete: () => {
              titleRef.current!.style.opacity = '1';
              titleRef.current!.style.transform = 'translateY(0)';
            }
          });
        }
      }
      if (sectionRef.current && !hasAnimatedSection) {
        const rect = sectionRef.current.getBoundingClientRect();
        if ((windowHeight - rect.top) / windowHeight > 0.25) {
          hasAnimatedSection = true;
          animate(sectionRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            easing: 'easeOutCubic',
            complete: () => {
              sectionRef.current!.style.opacity = '1';
              sectionRef.current!.style.transform = 'translateY(0)';
            }
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="Contact Us | Bijou Group Sheffield HMO Management"
        description="Contact Bijou Group for HMO property management in Sheffield. Get in touch for landlord support, property services, and expert advice."
        canonical="https://bijougroup.co.uk/contact"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/contact' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' },
        { name: 'Contact', url: 'https://bijougroup.co.uk/contact' }
      ]} />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/contact"
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
      <FAQSchema
        faqs={[
          {
            question: 'How do I contact Bijou Group?',
            answer: 'You can call us at +447495747930 or use the contact form on our website.'
          },
          {
            question: 'What are your business hours?',
            answer: 'We are available Monday to Friday, 9am to 5pm.'
          },
          {
            question: 'Where is your office located?',
            answer: '70 Clarkehouse Road, Sheffield, S10 2LJ, UK.'
          }
        ]}
      />
      <div className="min-h-screen flex flex-col cursor-default">
        <HeaderBlack className="sticky top-0 z-50" />
        <main className="flex-grow flex items-center justify-center w-full py-12 px-4 overflow-x-hidden">
          <div className="w-full max-w-[1562px] px-4">
            <h1 ref={titleRef} className="text-7xl font-bold text-[#EFBF04] text-center mb-12 font-serif opacity-0">Contact Us</h1>
            <div ref={sectionRef} className="opacity-0">
              <ContactSection />
            </div>
          </div>
        </main>
        <Footer enableScrollAnimation={true} />
      </div>
    </>
  );
}
