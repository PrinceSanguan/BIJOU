

import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import Hero from '@/pages/Blogs/Hero';
import Articles from '@/pages/Blogs/Articles';
import AboutUs from '@/pages/Blogs/AboutUs';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog | Bijou Group Sheffield HMO Management"
        description="Read the latest articles, tips, and news for Sheffield landlords from Bijou Group. HMO management, compliance, investment, and more."
        canonical="https://bijougroup.co.uk/blog"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/blog"
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
      <main role="main">  
        <div className="container mx-auto py-12">
          <Hero />
          <Articles />
        </div>

        <div className="justify-center items-center">
          <AboutUs />
        </div>
      
        <div className="container mx-auto py-12">
          <TestimonialsSection />
          <TrustedCompaniesSection />
        </div>
      </main>
      <Footer />
    </>
  );
}