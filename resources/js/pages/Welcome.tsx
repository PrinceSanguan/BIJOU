import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { HomeSection } from '@/pages/landingpage/HomeSection';
import { AboutSection } from '@/pages/landingpage/AboutSection';
import { ServicesSection } from '@/pages/landingpage/ServicesSection';
import { ContactSection } from '@/pages/landingpage/ContactSection';
import { TestimonialsSection } from '@/pages/landingpage/TestimonialsSection';
import { TrustedCompaniesSection } from '@/pages/landingpage/TrustedCompaniesSection';
import { BlogSection } from '@/pages/landingpage/BlogSection';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            {/* Header with absolute positioning over hero */}
            <div className="relative z-50">
                <Header />
            </div>
            
            {/* Hero section takes full viewport */}
            <HomeSection />
            
            {/* Other sections with full width layout */}
            <main className="w-full">
                <AboutSection />
                <ServicesSection />
                <ContactSection />
                <TestimonialsSection />
                <TrustedCompaniesSection />
                {/* <BlogSection /> */}
            </main>
            
            <Footer />
        </>
    );
}