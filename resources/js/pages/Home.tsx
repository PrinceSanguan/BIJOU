
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

export default function Home() {
  return (
    <>
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
