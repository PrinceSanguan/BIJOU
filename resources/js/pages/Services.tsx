

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
