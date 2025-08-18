
import React from 'react';
import { Footer } from '@/components/Footer';
import Hero from '@/pages/ServiceSec/Hero';
import HeaderBlack from '@/components/HeaderBlack';
import Featured from '@/pages/ServiceSec/Featured';
import ReadMore from '@/pages/ServiceSec/ReadMore';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';

export default function Services() {
  return (
    <>
    <div>
    <main>
        <HeaderBlack />
        <div className="mb-28">
          <Hero />
        </div>
        <div className="mt-12 mb-12">
        <Featured />
        </div>
        <ReadMore />
        <ContactSection />
        <TestimonialsSection />
        <TrustedCompaniesSection />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
    </>
  );
}
