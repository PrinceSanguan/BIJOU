

import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import { Service } from '@/types';
import Featured from '../Featured';
import WithUs from '../WithUs';
import { Cta } from '@/pages/landingpage/Cta';
import { SEOHead } from '../../../components/SEOHead';
import { LocalBusinessSchema } from '../../../components/LocalBusinessSchema';

interface TemplateProps {
    service: Service;
}

export default function Template({ service }: TemplateProps) {
    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Service not found</h1>
                    <p className="mt-2 text-gray-600">The requested service could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEOHead
                title={`${service.title} | Bijou Group Sheffield HMO Management`}
                description={service.description || 'Learn more about our HMO management services for Sheffield landlords.'}
                canonical={`https://bijougroup.co.uk/services/${service.id || encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url={`https://bijougroup.co.uk/services/${service.id || encodeURIComponent(service.title.toLowerCase().replace(/\s+/g, '-'))}`}
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
            <HeaderBlack />
            <main role="main" className="cursor-default">  
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#EFBF04] text-center px-4 mb-8 mt-8 font-robot-serif">Our Services</h1>
                        {service.subtext && (
                            <div className={`text-lg text-center text-[#0E5248] px-4 mt-2 mb-8 font-medium${service.subtext === 'Stop losing sleep over problem tenants, compliance headaches, and empty properties' ? ' font-space-grotesk' : ''}`}>
                                {service.subtext}
                            </div>
                        )}
                        <div className="relative mb-16">
                           
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/servicesimg/20240415_134340~2.jpg';
                                }}
                            />
                           
                        </div>
                        <h1 className="text-2xl md:text-5xl font-bold text-[#0E5248] text-center px-4 font-robot-serif">
                            {service.title}
                        </h1>
                        {(() => {
                            const desc = service.description || '';
                            const mid = Math.floor(desc.length / 2);
                            // Find the nearest space after the midpoint for a clean split
                            let splitIdx = desc.indexOf(' ', mid);
                            if (splitIdx === -1) splitIdx = mid;
                            const first = desc.slice(0, splitIdx).trim();
                            const second = desc.slice(splitIdx).trim();
                            return [first, second].map((para: string, idx: number) => (
                                <p
                                    key={idx}
                                    className="text-xl text-center px-4 mt-10 font-space-grotesk text-green-700"
                                    style={idx > 0 ? { marginTop: '1.5rem' } : {}}
                                >
                                    {para}
                                </p>
                            ));
                        })()}
                    </div>
                </section>
                <div className="mt-12 mb-12">
                    <Featured />
                    <WithUs />
                    <Cta />
                </div>
            </main>
            <Footer />
        </>
    );
}