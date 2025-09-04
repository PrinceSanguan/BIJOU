import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

const heroImage = '/images/AboutUs/hero.jpg';


const Hero: React.FC = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const imageRef = useRef(null);

    const animateHeroImage = () => {
        const heroImageElement = document.querySelector(`.${styles.heroImage}`);
        if (heroImageElement) {
            animate(heroImageElement, {
                scale: [1, 1.05, 1],
                duration: 2000,
                easing: 'easeInOutQuad',
                loop: true
            });
        }
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const animationTriggered: Record<string, boolean> = {
            title: false,
            description: false,
            image: false
        };

        const handleScroll = () => {
            if (!section) return;

            const rect = (section as HTMLElement).getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

            // Title appears at 20% scroll progress
            if (scrollProgress > 0.2 && !animationTriggered.title && titleRef.current) {
                animationTriggered.title = true;
                animate(titleRef.current, {
                    translateY: ['50px', '0px'],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
            }

            // Description appears at 30% scroll progress
            if (scrollProgress > 0.3 && !animationTriggered.description && descRef.current) {
                animationTriggered.description = true;
                animate(descRef.current, {
                    translateY: ['40px', '0px'],
                    opacity: [0, 1],
                    duration: 700,
                    easing: 'easeOutCubic'
                });
            }

            // Image appears at 40% scroll progress
            if (scrollProgress > 0.4 && !animationTriggered.image && imageRef.current) {
                animationTriggered.image = true;
                animate(imageRef.current, {
                    translateY: ['60px', '0px'],
                    opacity: [0, 1],
                    duration: 900,
                    easing: 'easeOutCubic',
                    complete: () => {
                        // Start the continuous scale animation after the initial reveal
                        animateHeroImage();
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
                        <SEOHead
                                title="About Bijou Relocation | HMO Property Management Sheffield Experts"
                                description="Learn about Bijou Relocation – Sheffield’s trusted HMO property management experts. 20+ years’ experience, guaranteed rent & hassle-free landlord solutions."
                                canonical="https://bijourelocation.co.uk/about-us"
                        />
                        {/* Organization Schema for SEO */}
                        <script type="application/ld+json">{`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Bijou Relocation",
                            "url": "https://bijourelocation.co.uk/about-us",
                            "logo": "https://bijourelocation.co.uk/logo.png",
                            "description": "Bijou Relocation are Sheffield’s trusted HMO property management specialists. We provide guaranteed rent, compliance, and stress-free landlord solutions.",
                            "founder": {
                                "@type": "Person",
                                "name": "Karen Hodgson"
                            },
                            "foundingDate": "2015",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Sheffield",
                                "addressRegion": "South Yorkshire",
                                "addressCountry": "UK"
                            },
                            "sameAs": [
                                "https://www.facebook.com/bijourelocation",
                                "https://www.linkedin.com/company/bijourelocation"
                            ]
                        }
                        `}</script>
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
            <section ref={sectionRef} className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <h1 ref={titleRef} className={`${styles.heroTitle} opacity-0`}>About Bijou Relocation – Experts in HMO Property Management Sheffield</h1>
                    <p ref={descRef} className={`${styles.heroDesc} opacity-0`}>
                        When you need proven HMO property management Sheffield expertise that delivers results, Bijou Relocation stands as your trusted partner. Founded by Karen Hodgson, our company combines over 20 years of housing sector expertise with 15+ years of family business background and 8+ years of dedicated business leadership. We specialise in comprehensive property management, strategic property sourcing, professional staging, tenant management, and complete legal support for landlords across Sheffield and South Yorkshire.
                    </p>
                </div>
                <div className={styles.heroImageWrapper}>
                    <div ref={imageRef} className={`${styles.heroImageInner} opacity-0`}>
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