
import React from 'react';
import styles from './Hero.module.css';

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
    return (
        <section className={styles.heroSection} aria-label="Testimonials Hero">
            <div className={styles.heroGrid}>
                <div className={styles.heroTextCol}>
                    <h1 className={styles.heroTitle}>{title}</h1>
                </div>
                <div className={styles.heroDescCol}>
                    <p className={styles.heroSubtitle}>{subtitle}</p>
                    <div className={styles.heroButtonRow}>
                        <button className={styles.heroButtonPrimary} onClick={onViewTestimonials} type="button">
                            View Testimonials
                        </button>
                        <button className={styles.heroButtonSecondary} onClick={onReadMore} type="button">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;