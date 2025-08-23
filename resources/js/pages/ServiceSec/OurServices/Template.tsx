
import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import { Service } from '@/types';
import Featured from '../Featured';
import WithUs from '../WithUs';
import { Cta } from '@/pages/landingpage/Cta';

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
            <HeaderBlack />
            <main role="main">  
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#EFBF04] text-center px-4 mb-8 mt-8">Our Services</h1>
                        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
                           
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
                        <h1 className="text-2xl md:text-5xl font-bold text-[#0E5248] text-center px-4">
                                    {service.title}
                        </h1>
                        <p className="text-xl text-center px-4 mt-10">
                                    {service.description}
                        </p>
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