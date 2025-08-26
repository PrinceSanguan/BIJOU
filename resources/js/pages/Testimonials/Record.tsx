
import React from 'react';
import styles from './Record.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

const recordData = [
  {
    highlight: '95%',
    title: 'Client Retention Rate',
    description: 'Our clients stay with us year after year because we consistently deliver professional fixed rental income solutions and genuine peace of mind.',
    highlightColor: styles.gold,
    highlightExtra: '',
  },
  {
    highlight: '2 Weeks',
    title: 'Average Void Periods',
    description: 'Extensive tenant network ensures properties are occupied quickly with quality tenants through our proven screening process.',
    highlightColor: styles.gold,
    highlightExtra: '',
  },
  {
    highlight: '24/7',
    title: 'Emergency Response',
    description: 'Round-the-clock support means happy tenants and protected investments with immediate issue resolution.',
    highlightColor: styles.gold,
    highlightExtra: '',
  },
  {
    highlight: '100%',
    title: 'Compliance Record',
    description: 'Expert knowledge ensures every property meets all licensing requirements and safety standards without exception.',
    highlightColor: styles.gold,
    highlightExtra: '',
  },
];


const Record: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Proven Track Record | Bijou Group Sheffield HMO Management"
        description="Discover Bijou Group's proven track record: high client retention, fast tenant placement, 24/7 support, and 100% compliance for Sheffield landlords."
        canonical="https://bijougroup.co.uk/testimonials/track-record"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/testimonials/track-record"
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
      <section className={styles.recordSection} aria-label="Proven Track Record">
        <div className={styles.headingWrap}>
          <div className={styles.headingDivider} />
          <h2 className={styles.heading}>PROVEN TRACK RECORD</h2>
          <div className={styles.headingDivider} />
        </div>
        <div className={styles.recordGrid}>
          {recordData.map((item, idx) => (
            <article className={styles.recordCard} key={idx}>
              <div className={styles.cardTitleRow}>
                <span className={styles.highlight + ' ' + item.highlightColor}>{item.highlight}</span>
                <span className={styles.cardTitleText}>
                  {item.title}
                </span>
              </div>
              <div className={styles.description}>{item.description}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Record;
