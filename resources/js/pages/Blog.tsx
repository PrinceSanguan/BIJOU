
import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import Hero from '@/pages/Blogs/Hero';
import Articles from '@/pages/Blogs/Articles';
import AboutUs from '@/pages/Blogs/AboutUs';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';

export default function Blog() {
  return (
    <>
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