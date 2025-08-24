
import React from 'react';
import styles from './TeamTestimonials.module.css';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

// Reusable Social Icon Button
interface SocialButtonProps {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({ href, label, children, className }) => (
  <a
    href={href}
    aria-label={label}
    className={className || styles.socialIcon}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

// Main Card (Person)
interface PersonCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: { href: string; label: string; icon: React.ReactNode }[];
}
const DEFAULT_PERSON_IMAGE = "https://placehold.co/320x320/0E5248/fff?text=Team+Member";
const PersonCard: React.FC<PersonCardProps> = ({ name, role, bio, imageUrl, socials }) => {
  const img = imageUrl || DEFAULT_PERSON_IMAGE;
  return (
    <div className={styles.mainCard}>
      <div className={styles.image} style={{ backgroundImage: `url(${img})` }} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.role}>{role}</div>
        <div className={styles.socialRow}>
          {socials.map((s, i) => (
            <SocialButton key={i} href={s.href} label={s.label} className={styles.socialIcon}>
              {s.icon}
            </SocialButton>
          ))}
        </div>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

// Support Team Section
const SupportTeam: React.FC = () => (
  <div className={styles.supportSection}>
    <div className={styles.supportHeader}>
  <span style={{ display: 'flex', alignItems: 'flex-end', marginRight: '2.5rem', position: 'relative', top: '-0.075rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="2" viewBox="0 0 104 2" fill="none">
          <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
        </svg>
      </span>
      <span className={styles.supportTitle}>OUR SUPPORT TEAM</span>
  <span style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '2.5rem', position: 'relative', top: '-0.075rem' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="2" viewBox="0 0 104 2" fill="none">
          <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
        </svg>
      </span>
    </div>
    <div className={styles.supportDesc}>
      <p className={styles.supportText}>
        Our experienced property managers Sheffield team includes qualified maintenance coordinators, tenant relations specialists, and compliance experts delivering seamless service. Our landlord support specialists understand modern property investor pressures, providing guidance and practical solutions for portfolio expansion, complex tenant situations, and evolving regulatory requirements.
      </p>
    </div>
  </div>
);

const TeamTestimonials: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>People Behind Bijou Relocation</h2>
      <p className={styles.subtitle}>
        Our dedicated team brings together local expertise, professional qualifications, and genuine passion for property management excellence.
      </p>
      <PersonCard
        name="Karen Hodgson"
        role="Founder & Managing Director"
        bio="Karen leads Bijou Relocation with over 20 years in the housing sector, developing deep understanding of residential management and commercial property operations. Her 15+ years of family business experience provided invaluable insights into building sustainable, relationship-focused enterprises, while 8+ years of independent business leadership prove her ability to deliver consistent results."
        imageUrl=""
        socials={[
          { href: '#', label: 'Instagram', icon: <Instagram size={16} color="#fff" /> },
          { href: '#', label: 'Facebook', icon: <Facebook size={16} color="#fff" /> },
          { href: '#', label: 'LinkedIn', icon: <Linkedin size={16} color="#fff" /> },
        ]}
      />
      <SupportTeam />
    </section>
  );
};

export default TeamTestimonials;
