
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { HomeSection } from '@/pages/landingpage/HomeSection';
import { AboutSection } from '@/pages/landingpage/AboutSection';
import { ServicesSection } from '@/pages/landingpage/ServicesSection';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { Cta } from '@/pages/landingpage/Cta';
import { Faq } from '@/pages/landingpage/Faq';
// import { BlogSection } from '@/pages/landingpage/BlogSection';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '../components/SEOHead';
import { LocalBusinessSchema } from '../components/LocalBusinessSchema';
import { OrganizationSchema } from '../components/OrganizationSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { BreadcrumbListSchema } from '../components/BreadcrumbListSchema';
import { FAQSchema } from '../components/FAQSchema';

export default function Welcome() {
    return (
        <>
            <SEOHead
                title="Welcome | Bijou Group Sheffield HMO Management"
                description="The Bijou Group: Comprehensive property management, sourcing, staging, tenant management, maintenance, and legal support for landlords and investors."
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
                        question: 'What services does Bijou Group offer?',
                        answer: 'Bijou Group provides HMO management, property sourcing, staging, tenant management, maintenance, and legal support for landlords and investors in Sheffield.'
                    },
                    {
                        question: 'Where is Bijou Group located?',
                        answer: 'Our office is at 70 Clarkehouse Road, Sheffield, South Yorkshire, S10 2LJ, UK.'
                    },
                    {
                        question: 'How can I contact Bijou Group?',
                        answer: 'You can call us at +447495747930 or use the contact form on our website.'
                    }
                ]}
            />
            {/* Header with absolute positioning over hero */}
            <header className="relative z-50" role="banner">
                <Header />
            </header>
                        {/* Hero section takes full viewport */}
                        <div className="cursor-default">
                                {/* Removed empty h1 to eliminate unwanted whitespace above HomeSection */}
                                <HomeSection />
                        </div>
            {/* Other sections with full width layout */}
            <main className="w-full cursor-default" role="main">
                <AboutSection />
                <ServicesSection />
                <Faq />
                <ContactSection />
                <TestimonialsSection />
                <TrustedCompaniesSection />
                <Cta />
                {/* <BlogSection /> HIDDEN FOR NOW */}
            </main>
            <Footer />
        </>
    );
}