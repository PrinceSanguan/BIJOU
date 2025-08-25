
import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import Hero from '@/pages/Testimonials/Hero';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';

import MissionandVision from './AboutUs/MissionandVision';
import Record from './Testimonials/Record';
import { Cta } from '@/pages/landingpage/Cta';

export default function Testimonials() {
  return (
    <>
      <HeaderBlack />
      <main className="container mx-auto py-12 cursor-default" role="main">
      <Hero />
      <TestimonialsSection />
      <TrustedCompaniesSection />
  <MissionandVision />
  <Record />
  <Cta />
      </main>
      <Footer />
    </>
  );
}
