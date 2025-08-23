import React from 'react';
import styles from './Record.module.css';

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
  );
};

export default Record;
