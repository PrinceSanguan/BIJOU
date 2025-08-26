

import React from 'react';
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
                        <h1 className={styles.heroTitle}>{title}</h1>
                    </div>
                    <div className={styles.heroDescCol}>
                        <p className={styles.heroSubtitle}>{subtitle}</p>
                        <div className={styles.heroButtonRow}>
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