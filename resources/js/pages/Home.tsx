

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
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function Home() {
  return (
    <>
      <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield’s trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijougroup.co.uk/"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' }
      ]} />
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
      <FAQSchema
        faqs={[
          {
            question: 'What is HMO management?',
            answer: 'HMO management involves handling all aspects of Houses in Multiple Occupation, including tenant sourcing, compliance, rent collection, and maintenance.'
          },
          {
            question: 'Why choose Bijou Group for HMO management?',
            answer: 'Bijou Group offers guaranteed rent, expert compliance, and stress-free property management for Sheffield landlords.'
          },
          {
            question: 'How do I get started?',
            answer: 'Contact us via our website or call +447495747930 to discuss your property needs.'
          }
        ]}
      />
      <Header />
      <main className="w-full" role="main">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#EFBF04] my-8 font-serif">
          Sheffield HMO Property Management & Lettings
        </h1>
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
