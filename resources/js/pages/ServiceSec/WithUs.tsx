
import React, { useEffect, useRef } from 'react';
import styles from './WithUs.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

interface WithUsCardProps {
  title: string;
  description: string;
  ref?: React.Ref<HTMLElement>;
}

function WithUsCard({ title, description, ref }: WithUsCardProps) {
  return (
    <article ref={ref} className={`${styles.card} opacity-0`} style={{transform: 'translateY(30px) scale(0.95)'}}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </article>
  );
}

const cards: WithUsCardProps[] = [
  {
    title: 'We Actually Know Sheffield',
    description:
      "We're not some national chain with a call center in Birmingham. We've been managing properties around Ecclesall Road since before it was trendy. We know which streets flood, which letting agents to avoid, and where students actually want to live.",
  },
  {
    title: 'Professional Tenant Sourcing & Screening',
    description:
      "Not just anyone with a pulse gets your keys. We verify income, check employment, contact previous landlords, and run comprehensive background checks. Takes about two weeks for most properties, but you get quality tenants who actually pay rent and look after your investment.",
  },
  {
    title: 'We Fill Empty Properties Fast',
    description:
      "Empty properties cost you £100+ every single day. We typically get quality tenants placed within two weeks because we know exactly where to market and who to target.",
  },
  {
    title: 'Free Property Consultation',
    description:
      "We'll visit your property, walk through every room, spot potential issues, and give you brutally honest advice about rental potential. No hard sell, just straight talking about what works and what doesn't in today's Sheffield rental market.",
  },
];


const WithUs: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let hasAnimatedHeading = false;
    const animatedCards = new Set<number>();

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // Animate heading when it comes into view
      if (headingRef.current && !hasAnimatedHeading) {
        const rect = headingRef.current.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          hasAnimatedHeading = true;
          animate(headingRef.current, {
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            easing: 'easeOutCubic',
            complete: () => {
              if (headingRef.current) {
                headingRef.current.style.opacity = '1';
                headingRef.current.style.transform = 'translateY(0)';
              }
            }
          });
        }
      }

      // Animate each card individually when it comes into view
      cardRefs.current.forEach((cardRef, idx) => {
        if (cardRef && !animatedCards.has(idx)) {
          const rect = cardRef.getBoundingClientRect();
          
          // Trigger when card is visible in viewport
          if (rect.top < windowHeight * 0.8) {
            animatedCards.add(idx);
            
            animate(cardRef, {
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.95, 1],
              duration: 700,
              delay: idx * 150, // Staggered delay for each card
              easing: 'easeOutCubic',
              complete: () => {
                if (cardRef) {
                  cardRef.style.opacity = '1';
                  cardRef.style.transform = 'translateY(0) scale(1)';
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

  return (
  <>
    <SEOHead
      title="Why Sheffield Landlords Stick With Us | Bijou Group"
      description="Discover why landlords choose Bijou Group for HMO management in Sheffield. Local expertise, fast tenant placement, and honest advice."
      canonical="https://bijougroup.co.uk/services/with-us"
    />
    <LocalBusinessSchema
      name="Bijou Group"
      url="https://bijougroup.co.uk/services/with-us"
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
    <section className={styles.withUsSection} aria-label="Why Sheffield Landlords Stick With Us">
      <h2 ref={headingRef} className={`${styles.heading} opacity-0`} style={{transform: 'translateY(40px)'}}>Why Sheffield Landlords Stick With Us</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, idx) => (
          <WithUsCard
            key={idx}
            title={card.title}
            description={card.description}
            ref={(el: HTMLElement | null) => {
              cardRefs.current[idx] = el;
            }}
          />
        ))}
      </div>
    </section>
  </>
);
};

export default WithUs;
