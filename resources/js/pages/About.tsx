
import React from 'react';
import HeaderBlack from '@/components/HeaderBlack';
import { Footer } from '@/components/Footer';
import Hero from '@/AboutUs/Hero';
import MissionandVision from '@/AboutUs/MissionandVision';
import Team from '@/AboutUs/Team';
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
          <Team />
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
