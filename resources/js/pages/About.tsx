
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

export default function About() {
  return (
    <>
      <div>
        <header>
          <HeaderBlack />
        </header>
        <main>
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
