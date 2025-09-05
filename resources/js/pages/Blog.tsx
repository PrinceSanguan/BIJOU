

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
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Blog | Bijou Group Sheffield HMO Management"
        description="Stay informed with expert articles, landlord tips, HMO management advice, compliance updates, and Sheffield property investment news from Bijou Group. Our blog is your go-to resource for successful property management, legal compliance, investment strategies, and the latest trends in the Sheffield rental market. Join our community of informed landlords and property investors."
        canonical="https://bijougroup.co.uk/blog"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/blog' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' },
        { name: 'Blog', url: 'https://bijougroup.co.uk/blog' }
      ]} />
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
      <FAQSchema
        faqs={[
          {
            question: 'What topics does the Bijou Group blog cover?',
            answer: 'Our blog covers HMO management, compliance, investment tips, and property news for Sheffield landlords.'
          },
          {
            question: 'How often is the blog updated?',
            answer: 'We regularly post new articles and updates relevant to property owners and investors.'
          },
          {
            question: 'Can I suggest a blog topic?',
            answer: 'Yes, contact us with your suggestions for future blog content.'
          }
        ]}
      />
      <HeaderBlack />
      <main role="main">  
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#EFBF04] my-8 font-serif">
          Sheffield Landlord Blog & HMO News
        </h1>
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