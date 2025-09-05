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
        <li ref={ref} className="opacity-0" style={{transform: 'scale(0.8) translateY(20px)'}}>
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
        const animatedCards = new Set<number>();

        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            // Animate header when it comes into view
            if (headerRef.current && !hasAnimatedHeader) {
                const rect = headerRef.current.getBoundingClientRect();
                if (rect.top < windowHeight * 0.8) {
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

            // Animate each service card individually when it comes into view
            cardRefs.current.forEach((cardRef, idx) => {
                if (cardRef && !animatedCards.has(idx)) {
                    const rect = cardRef.getBoundingClientRect();
                    
                    // Trigger when card is visible in viewport
                    if (rect.top < windowHeight * 0.85) {
                        animatedCards.add(idx);
                        
                        animate(cardRef, {
                            opacity: [0, 1],
                            scale: [0.8, 1],
                            translateY: [20, 0],
                            duration: 600,
                            easing: 'easeOutCubic',
                            complete: () => {
                                if (cardRef) {
                                    cardRef.style.opacity = '1';
                                    cardRef.style.transform = 'scale(1) translateY(0)';
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

    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <>
            {/* <SEOHead
                title="Property Management Services Sheffield | Bijou Group"
                description="Sheffield property management made simple. Rent collection, arrears, maintenance & tenant find services for landlords & investors. Get a free consult."
                canonical="https://bijourelocation.co.uk/sheffield-property-management-services"
            /> */}
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