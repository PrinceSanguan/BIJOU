import React, { useEffect, useRef } from 'react';
import styles from './MissionAndVision.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';
import type { FC } from 'react';

interface SectionProps {
    title: string;
    image: string;
    alt: string;
    children: React.ReactNode;
    reverse?: boolean;
    ref?: React.Ref<HTMLElement>;
    className?: string;
}

const Section: FC<SectionProps> = React.forwardRef<HTMLElement, SectionProps>(({ title, image, alt, children, reverse, className }, ref) => (
    <section ref={ref} className={`${styles.section} ${className || ''}`}>
        <div className={reverse ? styles.rowReverse : styles.row}>
            <div className={styles.textCol}>
                <h2 className={styles.heading}>{title}</h2>
                <div className={styles.text}>{children}</div>
            </div>
            <div className={styles.imgCol}>
                <img src={image} alt={alt} className={styles.image} />
            </div>
        </div>
    </section>
));


const MissionAndVision: FC = () => {
    const mainRef = useRef<HTMLElement>(null);
    const missionRef = useRef<HTMLElement>(null);
    const visionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const main = mainRef.current;
        if (!main) return;

        const animationTriggered: Record<string, boolean> = {
            mission: false,
            vision: false
        };

        const handleScroll = () => {
            if (!main) return;

            const rect = (main as HTMLElement).getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const mainTop = rect.top;
            const mainHeight = rect.height;
            const scrollProgress = Math.max(0, Math.min(1, (windowHeight - mainTop) / (windowHeight + mainHeight)));

            // Mission section slides in from left at 20% scroll progress
            if (scrollProgress > 0.2 && !animationTriggered.mission && missionRef.current) {
                animationTriggered.mission = true;
                animate(missionRef.current, {
                    translateX: ['-800px', '0px'],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
            }

            // Vision section slides in from right at 40% scroll progress
            if (scrollProgress > 0.4 && !animationTriggered.vision && visionRef.current) {
                animationTriggered.vision = true;
                animate(visionRef.current, {
                    translateX: ['100px', '0px'],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>{/* 
                        <SEOHead
                                title="About Bijou Relocation | HMO Property Management Sheffield Experts"
                                description="Learn about Bijou Relocation – Sheffield’s trusted HMO property management experts. 20+ years’ experience, guaranteed rent & hassle-free landlord solutions."
                                canonical="https://bijourelocation.co.uk/about-us"
                        /> */}
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
            <main ref={mainRef} className={styles.main}>
                <Section
                    ref={missionRef}
                    title="Our Mission"
                    image="/images/AboutUs/Mission.jpg"
                    alt="Our Mission"
                    className="opacity-0"
                >
                    <p>
                        Our mission is to revolutionise HMO property management through uncompromising compliance, expert legal guidance, and profit-maximisation strategies. We believe landlords deserve hands-off HMO solutions that generate consistent returns while maintaining the highest management standards.
                    </p>
                    <p>
                        Our landlord support South Yorkshire extends beyond routine maintenance to include market analysis, tenant screening excellence, and forward-thinking property improvements that enhance long-term value.
                    </p>
                </Section>
                <Section
                    ref={visionRef}
                    title="Our Vision"
                    image="/images/AboutUs/IMG-20250701-WA0001.webp"
                    alt="Our Vision"
                    reverse
                    className="opacity-0"
                >
                    <p>
                        We're building a trusted rental market where both landlords and tenants thrive through transparent practices and sustainable growth. Our primary focus on Sheffield and South Yorkshire allows us to develop deep local expertise while building lasting community relationships.
                    </p>
                    <p>
                        As trusted HMO property experts, we understand the unique characteristics of the local rental market. This includes specialized knowledge of student accommodation demands and young professional housing preferences, enabling us to position properties for maximum success.
                    </p>
                </Section>
            </main>
        </>
    );
};

export default MissionAndVision;