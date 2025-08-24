
import React from 'react';
import styles from './MissionAndVision.module.css';
import type { FC } from 'react';

interface SectionProps {
    title: string;
    image: string;
    alt: string;
    children: React.ReactNode;
    reverse?: boolean;
}

const Section: FC<SectionProps> = ({ title, image, alt, children, reverse }) => (
    <section className={styles.section}>
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
);

const MissionAndVision: FC = () => (
    <main className={styles.main}>
        <Section
            title="Our Mission"
            image="/images/AboutUs/Mission.jpg"
            alt="Our Mission"
        >
            <p>
                Our mission is to revolutionise HMO property management through uncompromising compliance, expert legal guidance, and profit-maximisation strategies. We believe landlords deserve hands-off HMO solutions that generate consistent returns while maintaining the highest management standards.
            </p>
            <p>
                Our landlord support South Yorkshire extends beyond routine maintenance to include market analysis, tenant screening excellence, and forward-thinking property improvements that enhance long-term value.
            </p>
        </Section>
        <Section
            title="Our Vision"
            image="/images/AboutUs/IMG-20250701-WA0001.webp"
            alt="Our Vision"
            reverse
        >
            <p>
                We're building a trusted rental market where both landlords and tenants thrive through transparent practices and sustainable growth. Our primary focus on Sheffield and South Yorkshire allows us to develop deep local expertise while building lasting community relationships.
            </p>
            <p>
                As trusted HMO property experts, we understand the unique characteristics of the local rental market. This includes specialized knowledge of student accommodation demands and young professional housing preferences, enabling us to position properties for maximum success.
            </p>
        </Section>
    </main>
);

export default MissionAndVision;