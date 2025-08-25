import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
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

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <title>Welcome | The Bijou Group</title>
                <meta name="description" content="The Bijou Group: Comprehensive property management, sourcing, staging, tenant management, maintenance, and legal support for landlords and investors." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            {/* Header with absolute positioning over hero */}
            <header className="relative z-50" role="banner">
                <Header />
            </header>
            {/* Hero section takes full viewport */}
            <div className="cursor-default">
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