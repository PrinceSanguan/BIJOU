
import React from 'react';
import styles from './WithUs.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

interface WithUsCardProps {
  title: string;
  description: string;
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


const WithUs: React.FC = () => (
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
      <h2 className={styles.heading}>Why Sheffield Landlords Stick With Us</h2>
      <div className={styles.cardGrid}>
        {cards.map((card, idx) => (
          <article className={styles.card} key={idx}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default WithUs;
