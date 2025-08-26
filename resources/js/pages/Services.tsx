


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

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services | Bijou Group Sheffield HMO Management"
        description="Explore Bijou Group's HMO management services for Sheffield landlords: rent collection, compliance, tenant sourcing, and more."
        canonical="https://bijougroup.co.uk/services"
      />
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
      <div>
        <main className='cursor-default'>
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
