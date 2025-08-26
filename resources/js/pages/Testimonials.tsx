

import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import Hero from '@/pages/Testimonials/Hero';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import MissionandVision from './AboutUs/MissionandVision';
import Record from './Testimonials/Record';
import { Cta } from '@/pages/landingpage/Cta';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';

export default function Testimonials() {
  return (
    <>
      <SEOHead
        title="Testimonials | Bijou Group Sheffield HMO Management"
        description="See what Sheffield landlords say about Bijou Group's HMO management. Real testimonials, proven results, and stress-free property management."
        canonical="https://bijougroup.co.uk/testimonials"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/testimonials"
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
