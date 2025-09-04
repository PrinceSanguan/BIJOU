

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
import HmoBtlContent from './HmoBtlContent';
import TenancyManagementContent from './TenancyManagementContent';
import TenantFindContent from './TenantFindContent';
import RentManagementContent from './RentManagementContent';
import PropertyMaintenanceContent from './PropertyMaintenanceContent';
import PropertyComplianceContent from './PropertyComplianceContent';
import EvictionContent from './EvictionContent';
import RentArrearsContent from './RentArrearsContent';
import PropertyStagingContent from './PropertyStagingContent';
import InventoryContent from './InventoryContent';
import MarketingContent from './MarketingContent';
import PropertySourcingContent from './PropertySourcingContent';
import ReformBillComplianceContent from './ReformBillComplianceContent';
import CheckinCheckoutContent from './CheckinCheckoutContent';
import LandlordSupportContent from './LandlordSupportContent';

interface TemplateProps {
    service: Service;
}

export default function Template({ service }: TemplateProps) {
    // SEO/meta block
    let seoMetaBlock;
    if (service.id === 2) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Eviction & Possession Assistance Sheffield | Bijou Group"
                    description="Fast, lawful tenant eviction in Sheffield & South Yorkshire. Bijou Group handles notices, court, and possession recovery—protecting your income."
                    canonical="https://bijougroup.co.uk/eviction-possession-assistance-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/eviction-possession-assistance-sheffield"
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
            </>
        );
    } else if (service.id === 8) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Rent Management & Collection Sheffield | Bijou Group"
                    description="Secure your rental income with Bijou Group’s rent management & collection service in Sheffield. Stress-free, compliant, and reliable rent collection."
                    canonical="https://bijougroup.co.uk/rent-management-collection-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/rent-management-collection-sheffield"
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
            </>
        );
    } else if (service.id === 3) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Property Staging & Room Setup Sheffield | Bijou Group"
                    description="Stage your Sheffield rental for faster lets & higher rents. Bijou Group’s property staging turns empty spaces into homes tenants compete for."
                    canonical="https://bijougroup.co.uk/property-staging-room-setup-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/property-staging-room-setup-sheffield"
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
            </>
        );
    } else if (service.id === 4) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Inventories with Photographic Evidence | Bijou Group"
                    description="Protect your deposits with court-ready inventories. Bijou Group documents every detail with photos & reports for stress-free property management."
                    canonical="https://bijougroup.co.uk/inventories-photographic-evidence-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/inventories-photographic-evidence-sheffield"
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
            </>
        );
    } else if (service.id === 13) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Marketing for Rooms & Units in Sheffield | Bijou"
                    description="Fill vacancies 3x faster. Bijou’s expert marketing for rooms & units helps Sheffield landlords attract quality tenants and maximise rental income."
                    canonical="https://bijougroup.co.uk/sheffield-marketing-for-rooms-units"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-marketing-for-rooms-units"
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
            </>
        );
    } else if (service.id === 10) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Bespoke Property Sourcing in Sheffield | Bijou Group"
                    description="Find profitable Sheffield investments fast. Bijou’s bespoke property sourcing saves time, avoids costly mistakes & secures high-return deals."
                    canonical="https://bijougroup.co.uk/sheffield-bespoke-property-sourcing"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-bespoke-property-sourcing"
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
            </>
        );
    } else if (service.id === 14) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Renters Compliance Advice for Sheffield Landlords | Bijou"
                    description="Stay compliant with the Renters Reform Bill. Bijou’s expert compliance advice helps Sheffield landlords avoid £30k fines and protect rental income."
                    canonical="https://bijougroup.co.uk/sheffield-renters-compliance-advice"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-renters-compliance-advice"
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
            </>
        );
    } else if (service.id === 15) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Sheffield Rental Success: Check-ins & Check-outs | Bijou"
                    description="Cut costly disputes. Bijou’s expert check-ins & check-outs save Sheffield landlords millions with better documentation and accountability."
                    canonical="https://bijougroup.co.uk/sheffield-check-ins-check-outs"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-check-ins-check-outs"
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
            </>
        );
    } else if (service.id === 7) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Landlord Support & Advice Sheffield | Bijou Group"
                    description="Expert landlord support in Sheffield. Bijou Group helps you reduce voids, resolve disputes & grow your rental portfolio with trusted local advice."
                    canonical="https://bijougroup.co.uk/landlord-support-advice-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/landlord-support-advice-sheffield"
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
            </>
        );
    } else if (service.id === 12) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="HMO & Property Management Sheffield | Bijou Group"
                    description="Full-service property management in Sheffield & South Yorkshire. ARLA certified experts in HMO, rent collection & portfolio growth."
                    canonical="https://bijougroup.co.uk/hmo-property-management"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/hmo-property-management"
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
            </>
        );
    } else if (service.id === 6) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Tenancy Management Sheffield | Bijou Group"
                    description="Stress-free tenancy management in Sheffield. Bijou Group handles agreements, deposits, renewals & compliance—protecting your property & returns."
                    canonical="https://bijougroup.co.uk/tenancy-management-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/tenancy-management-sheffield"
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
            </>
        );
    } else if (service.id === 11) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Tenant Find & Property Management Sheffield | Bijou Group"
                    description="Fill your Sheffield rental fast with quality tenants. Professional tenant find, arrears management & full HMO services. Book your free consultation today."
                    canonical="https://bijougroup.co.uk/tenant-find-property-management"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/tenant-find-property-management"
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
            </>
        );
    } else if (service.id === 1) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Rent Arrears Management Sheffield | Bijou Group"
                    description="Stop losing rent to arrears. Bijou Group handles rent collection, arrears, and tenant management in Sheffield—protecting your income stress-free."
                    canonical="https://bijougroup.co.uk/rent-arrears-management-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/rent-arrears-management-sheffield"
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
            </>
        );
    } else if (service.id === 9) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Property Maintenance & Repair Sheffield | Bijou Group"
                    description="Avoid costly damage. Bijou’s property maintenance & repair services keep Sheffield rentals compliant, safe, and profitable in the long term."
                    canonical="https://bijougroup.co.uk/sheffield-property-maintenance-repair"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-property-maintenance-repair"
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
            </>
        );
    } else if (service.id === 5) {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Property Compliance & Certification Sheffield | Bijou Group"
                    description="Avoid costly fines. Bijou Group manages all property compliance & certificates in Sheffield—keeping your rentals safe, legal, and profitable."
                    canonical="https://bijougroup.co.uk/property-compliance-certification-sheffield"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/property-compliance-certification-sheffield"
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
            </>
        );
    } else {
        seoMetaBlock = (
            <>
                <SEOHead
                    title="Property Management Services Sheffield | Bijou Group"
                    description="Sheffield property management made simple. Rent collection, arrears, maintenance & tenant find services for landlords & investors. Get a free consult."
                    canonical="https://bijougroup.co.uk/sheffield-property-management-services"
                />
                <LocalBusinessSchema
                    name="Bijou Group"
                    url="https://bijougroup.co.uk/sheffield-property-management-services"
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
            </>
        );
    }

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

    // ...existing code...
    return (
        <>
            {service.id === 12 ? (
                <>
                    <SEOHead
                        title="HMO & Property Management Sheffield | Bijou Group"
                        description="Full-service property management in Sheffield & South Yorkshire. ARLA certified experts in HMO, rent collection & portfolio growth."
                        canonical="https://bijougroup.co.uk/hmo-property-management"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/hmo-property-management"
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
                </>
            ) : service.id === 6 ? (
                <>
                    <SEOHead
                        title="Tenancy Management Sheffield | Bijou Group"
                        description="Stress-free tenancy management in Sheffield. Bijou Group handles agreements, deposits, renewals & compliance—protecting your property & returns."
                        canonical="https://bijougroup.co.uk/tenancy-management-sheffield"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/tenancy-management-sheffield"
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
                </>
            ) : service.id === 11 ? (
                <>
                    <SEOHead
                        title="Tenant Find & Property Management Sheffield | Bijou Group"
                        description="Fill your Sheffield rental fast with quality tenants. Professional tenant find, arrears management & full HMO services. Book your free consultation today."
                        canonical="https://bijougroup.co.uk/tenant-find-property-management"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/tenant-find-property-management"
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
                </>
            ) : service.id === 1 ? (
                <>
                    <SEOHead
                        title="Rent Arrears Management Sheffield | Bijou Group"
                        description="Stop losing rent to arrears. Bijou Group handles rent collection, arrears, and tenant management in Sheffield—protecting your income stress-free."
                        canonical="https://bijougroup.co.uk/rent-arrears-management-sheffield"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/rent-arrears-management-sheffield"
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
                </>
            ) : service.id === 9 ? (
                <>
                    <SEOHead
                        title="Property Maintenance & Repair Sheffield | Bijou Group"
                        description="Avoid costly damage. Bijou’s property maintenance & repair services keep Sheffield rentals compliant, safe, and profitable in the long term."
                        canonical="https://bijougroup.co.uk/sheffield-property-maintenance-repair"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/sheffield-property-maintenance-repair"
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
                </>
            ) : service.id === 5 ? (
                <>
                    <SEOHead
                        title="Property Compliance & Certification Sheffield | Bijou Group"
                        description="Avoid costly fines. Bijou Group manages all property compliance & certificates in Sheffield—keeping your rentals safe, legal, and profitable."
                        canonical="https://bijougroup.co.uk/property-compliance-certification-sheffield"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/property-compliance-certification-sheffield"
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
                </>
            ) : (
                <>
                    <SEOHead
                        title="Property Management Services Sheffield | Bijou Group"
                        description="Sheffield property management made simple. Rent collection, arrears, maintenance & tenant find services for landlords & investors. Get a free consult."
                        canonical="https://bijougroup.co.uk/sheffield-property-management-services"
                    />
                    <LocalBusinessSchema
                        name="Bijou Group"
                        url="https://bijougroup.co.uk/sheffield-property-management-services"
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
                </>
            )}
            <HeaderBlack />
            <main role="main" className="cursor-default">  
                <section className="py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-[#EFBF04] text-center px-4 mb-8 mt-8 font-robot-serif opacity-0" style={{transform: 'translateY(30px)'}}>
                            {service.id === 12
                                ? 'HMO Property Management Sheffield | Landlord & Letting Services South Yorkshire'
                                : service.id === 6
                                    ? 'Tenancy & Property Letting Management Sheffield | Landlord Services'
                                    : service.id === 11
                                        ? 'Tenant Find & Property Letting Sheffield | HMO Management Experts'
                                        : service.id === 1
                                            ? 'Rent Arrears & Property Rental Management Sheffield | Landlord Support'
                                            : service.id === 9
                                                ? 'Property Maintenance, Compliance & Repair Sheffield | Professional Management'
                                                : service.id === 5
                                                    ? 'Property Compliance Services Sheffield | HMO Licensing & Certification'
                                                    : 'Property Management Sheffield | HMO, Letting, Landlord & Relocation Services'}
                        </h1>
                        {service.subtext && (
                            <div ref={subtextRef} className={`text-lg text-center text-[#0E5248] px-4 mt-2 mb-8 font-medium opacity-0${service.subtext === 'Stop losing sleep over problem tenants, compliance headaches, and empty properties' ? ' font-space-grotesk' : ''}`} style={{transform: 'translateY(20px)'}}>
                                {service.subtext}
                            </div>
                        )}
                        <div ref={imageRef} className="relative mb-16 opacity-0" style={{transform: 'scale(0.95)'}}>
                            <img 
                                src={service.image} 
                                alt={service.id === 12
                                    ? 'Sheffield HMO property management experts providing full-service landlord solutions'
                                    : service.id === 6
                                        ? 'Bijou Group managing tenancy agreements for Sheffield landlords'
                                        : service.id === 11
                                            ? 'Tenant screening and referencing service Sheffield landlords'
                                            : service.id === 1
                                                ? 'Bijou Group team managing tenant rent collection in Sheffield HMO'
                                                : service.id === 9
                                                    ? 'Bijou Group engineer carrying out property maintenance and repair in Sheffield rental'
                                                    : service.id === 5
                                                        ? 'Sheffield landlord receiving property compliance certification support'
                                                        : service.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/servicesimg/20240415_134340~2.jpg';
                                }}
                            />
                        </div>
                        {service.id === 12 ? (
                            <HmoBtlContent />
                        ) : service.id === 6 ? (
                            <TenancyManagementContent />
                        ) : service.id === 11 ? (
                            <TenantFindContent />
                        ) : service.id === 8 ? (
                            <RentManagementContent />
                        ) : service.id === 9 ? (
                            <PropertyMaintenanceContent />
                        ) : service.id === 5 ? (
                            <PropertyComplianceContent />
                        ) : service.id === 2 ? (
                            <EvictionContent />
                        ) : service.id === 1 ? (
                            <RentArrearsContent />
                        ) : service.id === 3 ? (
                            <PropertyStagingContent />
                        ) : service.id === 4 ? (
                            <InventoryContent />
                        ) : service.id === 13 ? (
                            <MarketingContent />
                        ) : service.id === 10 ? (
                            <PropertySourcingContent />
                        ) : service.id === 14 ? (
                            <ReformBillComplianceContent />
                        ) : service.id === 15 ? (
                            <CheckinCheckoutContent />
                        ) : service.id === 7 ? (
                            <LandlordSupportContent />
                        ) : (
                            <>
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
                            </>
                        )}
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