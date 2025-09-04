import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import styles from './TeamTestimonials.module.css';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

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
const SupportTeam: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let hasAnimatedHeader = false;
    let hasAnimatedDesc = false;
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      if (headerRef.current && !hasAnimatedHeader) {
        const rect = headerRef.current.getBoundingClientRect();
        if ((windowHeight - rect.top) / windowHeight > 0.2) {
          hasAnimatedHeader = true;
          animate(headerRef.current, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 700,
            easing: 'easeOutCubic',
            complete: () => {
              headerRef.current!.style.opacity = '1';
              headerRef.current!.style.transform = 'translateY(0)';
            }
          });
        }
      }
      if (descRef.current && !hasAnimatedDesc) {
        const rect = descRef.current.getBoundingClientRect();
        if ((windowHeight - rect.top) / windowHeight > 0.25) {
          hasAnimatedDesc = true;
          animate(descRef.current, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'easeOutCubic',
            complete: () => {
              descRef.current!.style.opacity = '1';
              descRef.current!.style.transform = 'translateY(0)';
            }
          });
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.supportSection}>
      <div ref={headerRef} className={`${styles.supportHeader} opacity-0`}>
        <span style={{ display: 'flex', alignItems: 'flex-end', marginRight: '1rem', position: 'relative', top: '-0.075rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="2" viewBox="0 0 104 2" fill="none">
            <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
          </svg>
        </span>
        <span className={styles.supportTitle}>OUR SUPPORT TEAM</span>
        <span style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '1rem', position: 'relative', top: '-0.075rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="2" viewBox="0 0 104 2" fill="none">
            <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
          </svg>
        </span>
      </div>
      <div className={styles.supportDesc}>
        <p ref={descRef} className={`${styles.supportText} opacity-0`}>
          Our experienced property managers Sheffield team includes qualified maintenance coordinators, tenant relations specialists, and compliance experts delivering seamless service. Our landlord support specialists understand modern property investor pressures, providing guidance and practical solutions for portfolio expansion, complex tenant situations, and evolving regulatory requirements.
        </p>
      </div>
    </div>
  );
};


const TeamTestimonials: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let hasAnimatedTitle = false;
    let hasAnimatedSubtitle = false;
    let hasAnimatedContent = false;

    const handleScroll = () => {
      if (!titleRef.current || !subtitleRef.current || !contentRef.current) return;

      const titleRect = titleRef.current.getBoundingClientRect();
      const subtitleRect = subtitleRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress for each element
      const titleProgress = Math.max(0, Math.min(1, (windowHeight - titleRect.top) / (windowHeight * 0.8)));
      const subtitleProgress = Math.max(0, Math.min(1, (windowHeight - subtitleRect.top) / (windowHeight * 0.8)));
      const contentProgress = Math.max(0, Math.min(1, (windowHeight - contentRect.top) / (windowHeight * 0.8)));

      // Animate title when 20% visible
      if (titleProgress > 0.2 && !hasAnimatedTitle) {
        hasAnimatedTitle = true;
        animate(titleRef.current, {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: 'easeOutCubic',
          complete: () => {
            if (titleRef.current) {
              titleRef.current.style.opacity = '1';
              titleRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      }

      // Animate subtitle when 25% visible
      if (subtitleProgress > 0.25 && !hasAnimatedSubtitle) {
        hasAnimatedSubtitle = true;
        animate(subtitleRef.current, {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: 'easeOutCubic',
          complete: () => {
            if (subtitleRef.current) {
              subtitleRef.current.style.opacity = '1';
              subtitleRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      }

      // Animate content when 30% visible
      if (contentProgress > 0.3 && !hasAnimatedContent) {
        hasAnimatedContent = true;
        animate(contentRef.current, {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 1000,
          easing: 'easeOutCubic',
          complete: () => {
            if (contentRef.current) {
              contentRef.current.style.opacity = '1';
              contentRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // Slight delay for initial check to ensure proper rendering

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
      <section className={styles.section}>
        <h2 ref={titleRef} className={`${styles.title} opacity-0`}>People Behind Bijou Relocation</h2>
        <p ref={subtitleRef} className={`${styles.subtitle} opacity-0`}>
          Our dedicated team brings together local expertise, professional qualifications, and genuine passion for property management excellence.
        </p>
        <div ref={contentRef} className="opacity-0">
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
        </div>
      </section>
    </>
  );
};

export default TeamTestimonials;
