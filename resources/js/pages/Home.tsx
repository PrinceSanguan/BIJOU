

import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeSection } from '@/pages/landingpage/HomeSection';
import { AboutSection } from '@/pages/landingpage/AboutSection';
import { ServicesSection } from '@/pages/landingpage/ServicesSection';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { BlogSection } from '@/pages/landingpage/BlogSection';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home | Bijou Group Sheffield HMO Management"
        description="Bijou Group: Sheffield's trusted HMO property management experts. Guaranteed rent, compliance, tenant sourcing, and more for landlords."
        canonical="https://bijougroup.co.uk/"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/"
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
      <Header />
      <main className="w-full" role="main">
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <TestimonialsSection />
        <TrustedCompaniesSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
