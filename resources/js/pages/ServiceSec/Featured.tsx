import { router } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './Featured.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

const services: string[] = [
    'Rent Arrears Management',
    'Eviction and Possession Assistance',
    'Property Staging and Room Setup',
    'Inventories with Photographic Evidence',
    'Property Compliance & Certification',
    'Tenancy Management',
    'Landlord Support and Advice',
    'Rent Management and Collection',
    'Property Maintenance and Repair',
    'Bespoke Property Sourcing',
    'Tenant Find Services',
    'Full-Service Property',
    'Marketing for Rooms & Units',
    'Renters Compliance Advice',
    'Check-ins and Check-outs',
];

type ServiceCardProps = {
    title: string;
    onClick: () => void;
    ref?: React.Ref<HTMLLIElement>;
};

function ServiceCard({ title, onClick, ref }: ServiceCardProps) {
    return (
        <li ref={ref} className="opacity-0">
            <button
                type="button"
                className={styles.serviceCard}
                onClick={onClick}
                tabIndex={0}
                aria-label={title}
            >
                <span className={styles.serviceTitle}>{title}</span>
            </button>
        </li>
    );
}


function Featured() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLUListElement>(null);
    const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        let hasAnimatedHeader = false;
        let hasAnimatedCards = false;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            // Animate header when 20% visible
            if (headerRef.current && !hasAnimatedHeader) {
                const rect = headerRef.current.getBoundingClientRect();
                if ((windowHeight - rect.top) / windowHeight > 0.2) {
                    hasAnimatedHeader = true;
                    animate(headerRef.current, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 700,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (headerRef.current) {
                                headerRef.current.style.opacity = '1';
                                headerRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }

            // Animate service cards when 30% visible
            if (!hasAnimatedCards && cardRefs.current.length > 0) {
                const firstCard = cardRefs.current[0];
                if (firstCard) {
                    const rect = firstCard.getBoundingClientRect();
                    if ((windowHeight - rect.top) / windowHeight > 0.3) {
                        hasAnimatedCards = true;
                        cardRefs.current.forEach((cardRef, idx) => {
                            if (cardRef) {
                                animate(cardRef, {
                                    opacity: [0, 1],
                                    scale: [0.8, 1],
                                    duration: 500,
                                    delay: idx * 100, // 100ms delay between each card
                                    easing: 'easeOutCubic',
                                    complete: () => {
                                        if (cardRef) {
                                            cardRef.style.opacity = '1';
                                            cardRef.style.transform = 'scale(1)';
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <>
            <SEOHead
                title="Other Featured Services | Bijou Group Sheffield HMO Management"
                description="Explore more HMO management services for Sheffield landlords. Rent arrears, eviction, compliance, and more."
                canonical="https://bijougroup.co.uk/services/featured"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url="https://bijougroup.co.uk/services/featured"
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
            <section className={styles.featuredSection} aria-labelledby="featured-services-title">
                <div ref={headerRef} className={`${styles.headerRow} opacity-0`}>
                    <hr className={styles.headerLine} />
                    <h2 id="featured-services-title" className={styles.headerTitle}>Other Featured Services</h2>
                    <hr className={styles.headerLine} />
                </div>
                <ul ref={gridRef} className={styles.servicesGrid}>
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={service}
                            title={service}
                            onClick={() => navigateToService(idx + 1)}
                            ref={(el: HTMLLIElement | null) => {
                                cardRefs.current[idx] = el;
                            }}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Featured;