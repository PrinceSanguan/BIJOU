import styles from './ReadMore.module.css';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

type ReadMoreCardProps = {
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    buttonLabel?: string;
    reverse?: boolean;
    onButtonClick?: () => void;
    ref?: React.Ref<HTMLElement>;
};

function ReadMoreCard({ title, text, image, imageAlt, buttonLabel = 'Read More', reverse = false, onButtonClick, ref }: ReadMoreCardProps) {
    return (
        <article ref={ref} className={`${styles.readMoreCard} ${reverse ? styles.reverse : ''} opacity-0`} style={{transform: 'scale(0.95)'}}>
            <img
                src={image}
                alt={imageAlt}
                className={styles.readMoreImage}
                onError={e => {
                    (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x600/0E5248/FFFFFF?text=${encodeURIComponent(imageAlt)}`;
                }}
            />
            <div className={styles.readMoreContent}>
                <h2 className={styles.readMoreTitle}>{title}</h2>
                <p className={styles.readMoreText}>{text}</p>
                {buttonLabel && (
                    <button className={styles.readMoreButton} onClick={onButtonClick} type="button">
                        {buttonLabel}
                    </button>
                )}
            </div>
        </article>
    );
}


// Service-specific images (matching backend)
const tenantFindImage = '/images/servicesimg/Rectangle 18480.webp';
const rentManagementImage = '/images/servicesimg/Rectangle 18480 (1).webp';
const maintenanceImage = '/images/servicesimg/Rectangle 18480 (2).webp';

function ReadMore() {
    const cardRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const animatedCards = new Set<number>();

        const handleScroll = () => {
            cardRefs.current.forEach((cardRef, idx) => {
                if (cardRef && !animatedCards.has(idx)) {
                    const rect = cardRef.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Trigger when card is visible in viewport (top of card is above bottom of screen)
                    if (rect.top < windowHeight * 0.8) {
                        animatedCards.add(idx);
                        
                        // Check if card has reverse class to determine slide direction
                        const isReverse = cardRef.classList.contains(styles.reverse);
                        const slideDirection = isReverse ? 50 : -50; // Right for reverse, left for normal

                        animate(cardRef, {
                            opacity: [0, 1],
                            translateX: [slideDirection, 0],
                            scale: [0.95, 1],
                            duration: 800,
                            easing: 'easeOutCubic',
                            complete: () => {
                                if (cardRef) {
                                    cardRef.style.opacity = '1';
                                    cardRef.style.transform = 'translateX(0) scale(1)';
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

    // Handler to navigate to the correct service page by service id
    const goToService = (id: number) => {
        window.location.href = `/services/${id}`;
    };
    return (
        <>
            <SEOHead
                title="Property Management Services Sheffield | Bijou Group"
                description="Sheffield property management made simple. Rent collection, arrears, maintenance & tenant find services for landlords & investors. Get a free consult."
                canonical="https://bijourelocation.co.uk/sheffield-property-management-services"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url="https://bijougroup.co.uk/services/read-more"
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
            <section className={styles.readMoreSection}>
                <div className={styles.readMoreContainer}>
                    <ReadMoreCard
                        title="Tenant Find Services"
                        text="We advertise across major platforms, conduct viewings, and carry out thorough referencing checks to find reliable tenants quickly and reduce costly void periods."
                        image={tenantFindImage}
                        imageAlt="Tenant Find Services"
                        onButtonClick={() => goToService(11)}
                        ref={(el: HTMLElement | null) => {
                            cardRefs.current[0] = el;
                        }}
                    />
                    <ReadMoreCard
                        title="Rent Management and Collection"
                        text="We ensure rent is paid on time, handle arrears promptly, and provide transparent monthly statements to keep your finances in check. Our guaranteed rent Sheffield service offers complete peace of mind."
                        image={rentManagementImage}
                        imageAlt="Rent Management and Collection"
                        reverse
                        onButtonClick={() => goToService(8)}
                        ref={(el: HTMLElement | null) => {
                            cardRefs.current[1] = el;
                        }}
                    />
                    <ReadMoreCard
                        title="Property Maintenance and Repairs"
                        text="Our network of vetted tradespeople ensures prompt and professional maintenance for everything from emergency repairs to routine upkeep across Sheffield properties."
                        image={maintenanceImage}
                        imageAlt="Property Maintenance and Repairs"
                        onButtonClick={() => goToService(9)}
                        ref={(el: HTMLElement | null) => {
                            cardRefs.current[2] = el;
                        }}
                    />
                </div>
            </section>
        </>
    );
}

export default ReadMore;