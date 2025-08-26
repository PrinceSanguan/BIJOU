


import { Footer } from '@/components/Footer';
import Hero from '@/pages/ServiceSec/Hero';
import HeaderBlack from '@/components/HeaderBlack';
import Featured from '@/pages/ServiceSec/Featured';
import ReadMore from '@/pages/ServiceSec/ReadMore';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services | Bijou Group Sheffield HMO Management"
        description="Explore Bijou Group's HMO management services for Sheffield landlords: rent collection, compliance, tenant sourcing, and more."
        canonical="https://bijougroup.co.uk/services"
        robots="index, follow"
        hreflangs={[{ hreflang: 'en-gb', href: 'https://bijougroup.co.uk/services' }]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://bijougroup.co.uk/' },
        { name: 'Services', url: 'https://bijougroup.co.uk/services' }
      ]} />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/services"
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
            question: 'What services do you offer?',
            answer: 'We offer HMO management, tenant sourcing, compliance, maintenance, and more for Sheffield landlords.'
          },
          {
            question: 'Do you handle legal compliance?',
            answer: 'Yes, we ensure your HMO property meets all legal and safety requirements.'
          },
          {
            question: 'Can you help with property staging?',
            answer: 'Absolutely, we provide property staging to maximize rental appeal.'
          }
        ]}
      />
      <div>
        <main className='cursor-default'>
          {/* Removed non-design heading per Figma design system */}
          <HeaderBlack />
          <div className="mb-1">
            <Hero />
          </div>
          <div className="mt-1 mb-1">
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
