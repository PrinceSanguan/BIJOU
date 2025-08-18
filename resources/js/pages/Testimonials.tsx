
import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import Hero from '@/pages/Testimonials/Hero';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import MissionandVision from './AboutUs/MissionandVision';

export default function Testimonials() {
  return (
    <>
      <HeaderBlack />
      <main className="container mx-auto py-12" role="main">
      <Hero />
      <TestimonialsSection />
      <TrustedCompaniesSection />
      <MissionandVision />
      </main>
      <Footer />
    </>
  );
}
