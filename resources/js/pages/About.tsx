

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

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us | Bijou Group Sheffield HMO Management"
        description="Learn about Bijou Group, Sheffield's trusted HMO property management experts. Meet our team, discover our mission, and see why landlords choose us."
        canonical="https://bijougroup.co.uk/about"
      />
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
      <div>
        <header>
          <HeaderBlack />
        </header>
        <main className='cursor-default'>
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
