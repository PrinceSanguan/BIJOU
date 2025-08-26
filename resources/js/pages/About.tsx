

import React from 'react';
import HeaderBlack from '@/components/HeaderBlack';
import { Footer } from '@/components/Footer';
import Hero from '@/pages/AboutUs/Hero';
import MissionandVision from '@/pages/AboutUs/MissionandVision';
import Team from '@/pages/AboutUs/Team';
import WhyUs from '@/pages/AboutUs/WhyUs';
import TeamTestimonials from '@/pages/AboutUs/TeamTestimonials';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | Bijou Group Sheffield HMO Management"
        description="Learn about Bijou Group, Sheffield's trusted HMO property management experts. Meet our team, discover our mission, and see why landlords choose us."
        canonical="https://bijougroup.co.uk/about"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/about' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' },
        { name: 'About', url: 'https://bijougroup.co.uk/about' }
      ]} />
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
      <FAQSchema
        faqs={[
          {
            question: 'Who is Bijou Group?',
            answer: 'Bijou Group is a Sheffield-based HMO property management company with years of experience and local expertise.'
          },
          {
            question: 'What makes Bijou Group different?',
            answer: 'Our team’s local knowledge and commitment to maximizing landlord returns set us apart.'
          },
          {
            question: 'Where can I meet the team?',
            answer: 'Visit our About page to learn more about our team and mission.'
          }
        ]}
      />
      <div>
        <header>
          <HeaderBlack />
        </header>
        <main className='cursor-default'>
          {/* Removed non-design heading per Figma design system */}
          <Hero />
          <MissionandVision />
          <TeamTestimonials />
          <Team />
          <WhyUs />
          <ContactSection />
          <TestimonialsSection />
          <TrustedCompaniesSection />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
