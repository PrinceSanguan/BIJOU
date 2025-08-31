

import React, { useEffect, useRef } from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import { Service } from '@/types';
import Featured from '../Featured';
import WithUs from '../WithUs';
import { Cta } from '@/pages/landingpage/Cta';
import { SEOHead } from '../../../components/SEOHead';
import { LocalBusinessSchema } from '../../../components/LocalBusinessSchema';
import { animate } from 'animejs';

interface TemplateProps {
    service: Service;
}

export default function Template({ service }: TemplateProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const serviceTitleRef = useRef<HTMLHeadingElement>(null);
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const animatedElements = new Set<string>();

        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            // Animate main title
            if (titleRef.current && !animatedElements.has('title')) {
                const rect = titleRef.current.getBoundingClientRect();
                if (rect.top < windowHeight * 0.8) {
                    animatedElements.add('title');
                    animate(titleRef.current, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 800,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (titleRef.current) {
                                titleRef.current.style.opacity = '1';
                                titleRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }

            // Animate subtext
            if (subtextRef.current && !animatedElements.has('subtext')) {
                const rect = subtextRef.current.getBoundingClientRect();
                if (rect.top < windowHeight * 0.8) {
                    animatedElements.add('subtext');
                    animate(subtextRef.current, {
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 700,
                        delay: 200,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (subtextRef.current) {
                                subtextRef.current.style.opacity = '1';
                                subtextRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }

            // Animate image
            if (imageRef.current && !animatedElements.has('image')) {
                const rect = imageRef.current.getBoundingClientRect();
                if (rect.top < windowHeight * 0.8) {
                    animatedElements.add('image');
                    animate(imageRef.current, {
                        opacity: [0, 1],
                        scale: [0.95, 1],
                        duration: 900,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (imageRef.current) {
                                imageRef.current.style.opacity = '1';
                                imageRef.current.style.transform = 'scale(1)';
                            }
                        }
                    });
                }
            }

            // Animate service title
            if (serviceTitleRef.current && !animatedElements.has('serviceTitle')) {
                const rect = serviceTitleRef.current.getBoundingClientRect();
                if (rect.top < windowHeight * 0.8) {
                    animatedElements.add('serviceTitle');
                    animate(serviceTitleRef.current, {
                        opacity: [0, 1],
                        translateY: [25, 0],
                        duration: 700,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (serviceTitleRef.current) {
                                serviceTitleRef.current.style.opacity = '1';
                                serviceTitleRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }

            // Animate description paragraphs
            paragraphRefs.current.forEach((paragraphRef, idx) => {
                if (paragraphRef && !animatedElements.has(`paragraph-${idx}`)) {
                    const rect = paragraphRef.getBoundingClientRect();
                    if (rect.top < windowHeight * 0.8) {
                        animatedElements.add(`paragraph-${idx}`);
                        animate(paragraphRef, {
                            opacity: [0, 1],
                            translateY: [20, 0],
                            duration: 600,
                            delay: idx * 200,
                            easing: 'easeOutCubic',
                            complete: () => {
                                if (paragraphRef) {
                                    paragraphRef.style.opacity = '1';
                                    paragraphRef.style.transform = 'translateY(0)';
                                }
                            }
                        });
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-[#EFBF04] text-center px-4 mb-8 mt-8 font-robot-serif opacity-0" style={{transform: 'translateY(30px)'}}>Our Services</h1>
                        {service.subtext && (
                            <div ref={subtextRef} className={`text-lg text-center text-[#0E5248] px-4 mt-2 mb-8 font-medium opacity-0${service.subtext === 'Stop losing sleep over problem tenants, compliance headaches, and empty properties' ? ' font-space-grotesk' : ''}`} style={{transform: 'translateY(20px)'}}>
                                {service.subtext}
                            </div>
                        )}
                        <div ref={imageRef} className="relative mb-16 opacity-0" style={{transform: 'scale(0.95)'}}>
                           
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
                        <h1 ref={serviceTitleRef} className="text-2xl md:text-5xl font-bold text-[#0E5248] text-center px-4 font-robot-serif opacity-0" style={{transform: 'translateY(25px)'}}>
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
                                    ref={(el: HTMLParagraphElement | null) => {
                                        paragraphRefs.current[idx] = el;
                                    }}
                                    className="text-xl text-center px-4 mt-10 font-space-grotesk text-green-700 opacity-0"
                                    style={idx > 0 ? { marginTop: '1.5rem', transform: 'translateY(20px)' } : { transform: 'translateY(20px)' }}
                                >
                                    {para}
                                </p>
                            ));
                        })()}
                    </div>
                </section>
                <div className="mt-12 mb-12">
                    <Featured />
                    <WithUs  />
                    <Cta enableScrollAnimation={true} />
                </div>
            </main>
            <Footer enableScrollAnimation={true} />
        </>
    );
}