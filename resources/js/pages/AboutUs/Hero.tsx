
import React from 'react';
import styles from './Hero.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

const heroImage = '/images/AboutUs/hero.jpg';


const Hero: React.FC = () => {
    return (
        <>
            <SEOHead
                title="About Us | Bijou Group Sheffield"
                description="About page meta description with CTA and location."
                canonical="https://yourdomain.com/about"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                address={{
                    street: "70 Clarkehouse Road",
                    city: "Sheffield",
                    region: "South Yorkshire",
                    postalCode: "S10 2LJ",
                    country: "England"
                }}
                phone="+447495747930"
                url="https://yourdomain.com"
                logo="/images/Circular logo.png"
            />
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>About Us</h1>
                    <p className={styles.heroDesc}>
                        When you need proven HMO property management Sheffield expertise that delivers results, Bijou Relocation stands as your trusted partner. Founded by Karen Hodgson, our company combines over 20 years of housing sector expertise with 15+ years of family business background and 8+ years of dedicated business leadership. We specialise in comprehensive property management, strategic property sourcing, professional staging, tenant management, and complete legal support for landlords across Sheffield and South Yorkshire.
                    </p>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div className={styles.heroImageInner}>
                        <img
                            src={heroImage}
                            alt="About Us"
                            className={styles.heroImage}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;