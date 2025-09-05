

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
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function Testimonials() {
  return (
    <>
      <SEOHead
        title="Property Management Testimonials Sheffield | Bijou Group"
        description="Read genuine testimonials from Sheffield landlords who trust Bijou Group for HMO property management. Discover real experiences, stress-free solutions, guaranteed rent, and full compliance. See why property owners recommend us."
        canonical="https://bijougroup.co.uk/sheffield-property-management-testimonials"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/sheffield-property-management-testimonials' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' },
        { name: 'Testimonials', url: 'https://bijougroup.co.uk/sheffield-property-management-testimonials' }
      ]} />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/sheffield-property-management-testimonials"
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
            question: 'What do landlords say about Bijou Group?',
            answer: 'Our testimonials page features real feedback from Sheffield landlords who trust us with their HMO properties.'
          },
          {
            question: 'How can I submit a testimonial?',
            answer: 'Contact us to share your experience as a Bijou Group client.'
          },
          {
            question: 'Where can I read more reviews?',
            answer: 'See our Testimonials page or check our Google reviews for more feedback.'
          }
        ]}
      />
      <HeaderBlack />
      <main className="container mx-auto py-12 cursor-default" role="main">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#EFBF04] my-8 font-serif">
          {/* Removed non-design heading per Figma design system */}
        </h1>
        <Hero />
        <TestimonialsSection enableScrollAnimation={true} />
        <TrustedCompaniesSection />
        <MissionandVision />
        <Record />
        <Cta />
      </main>
      <Footer enableScrollAnimation={true} />
    </>
  );
}
