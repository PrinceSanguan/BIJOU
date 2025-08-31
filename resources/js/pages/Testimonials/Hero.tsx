import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './Hero.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

export interface HeroProps {
    title?: string;
    subtitle?: string;
    onViewTestimonials?: () => void;
    onReadMore?: () => void;
}

const defaultTitle = (
    <>
        What People <br /> Say About Us
    </>
);

const defaultSubtitle = (
    <>
        <span>Join 200+ Sheffield landlords who've discovered stress-free property management with guaranteed returns</span>
        <p style={{ margin: 0, marginTop: '1.2rem' }}>From compliance headaches to consistent profits - see how our clients transformed their investments</p>
    </>
);

const Hero: React.FC<HeroProps> = ({
    title = defaultTitle,
    subtitle = defaultSubtitle,
    onViewTestimonials,
    onReadMore,
}) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let hasAnimatedTitle = false;
        let hasAnimatedSubtitle = false;
        let hasAnimatedButtons = false;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            // Animate title when 20% visible
            if (titleRef.current && !hasAnimatedTitle) {
                const rect = titleRef.current.getBoundingClientRect();
                if ((windowHeight - rect.top) / windowHeight > 0.2) {
                    hasAnimatedTitle = true;
                    animate(titleRef.current, {
                        opacity: [0, 1],
                        translateY: [40, 0],
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

            // Animate subtitle when 25% visible
            if (subtitleRef.current && !hasAnimatedSubtitle) {
                const rect = subtitleRef.current.getBoundingClientRect();
                if ((windowHeight - rect.top) / windowHeight > 0.25) {
                    hasAnimatedSubtitle = true;
                    animate(subtitleRef.current, {
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 700,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (subtitleRef.current) {
                                subtitleRef.current.style.opacity = '1';
                                subtitleRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }

            // Animate buttons when 30% visible
            if (buttonsRef.current && !hasAnimatedButtons) {
                const rect = buttonsRef.current.getBoundingClientRect();
                if ((windowHeight - rect.top) / windowHeight > 0.3) {
                    hasAnimatedButtons = true;
                    animate(buttonsRef.current, {
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        easing: 'easeOutCubic',
                        complete: () => {
                            if (buttonsRef.current) {
                                buttonsRef.current.style.opacity = '1';
                                buttonsRef.current.style.transform = 'translateY(0)';
                            }
                        }
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handler for Learn More button to navigate to /about
    const handleReadMore = () => {
        window.location.href = '/about';
        if (onReadMore) onReadMore();
    };
    // Handler for View Services button
    const handleViewServices = () => {
        window.location.href = '/services';
        if (onViewTestimonials) onViewTestimonials();
    };
    return (
        <>
            <SEOHead
                title="Testimonials | Bijou Group Sheffield HMO Management"
                description="See what Sheffield landlords say about Bijou Group's HMO management. Real testimonials, proven results, and stress-free property management."
                canonical="https://bijougroup.co.uk/testimonials"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url="https://bijougroup.co.uk/testimonials"
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
            <section className={styles.heroSection} aria-label="Testimonials Hero">
                <div className={styles.heroGrid}>
                    <div className={styles.heroTextCol}>
                        <h1 ref={titleRef} className={`${styles.heroTitle} opacity-0`}>{title}</h1>
                    </div>
                    <div className={styles.heroDescCol}>
                        <p ref={subtitleRef} className={`${styles.heroSubtitle} opacity-0`}>{subtitle}</p>
                        <div ref={buttonsRef} className={`${styles.heroButtonRow} opacity-0`}>
                            <button className={`${styles.heroButtonPrimary} ${styles.heroButtonPrimary}:hover:bg-[#EFBF04] ${styles.heroButtonPrimary}:hover:text-[#0E5248]`} onClick={handleViewServices} type="button">
                                View Services
                            </button>
                            <button className={`${styles.heroButtonSecondary} ${styles.heroButtonSecondary}:hover:bg-[#EFBF04] ${styles.heroButtonSecondary}:hover:text-[#0E5248]`} onClick={handleReadMore} type="button">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;