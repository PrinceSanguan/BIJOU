import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { Instagram, Linkedin } from 'lucide-react';
import styles from './Team.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    subtitle: string;
    socials?: { instagram?: string; linkedin?: string };
}

const members: TeamMember[] = [
    {
        name: 'John Doe',
        role: 'First Home Landlord',
        subtitle: 'John Doe',
        image: '',
        socials: {},
    },
    {
        name: 'John Doe',
        role: 'First Home Landlord',
        subtitle: 'John Doe',
        image: '',
        socials: {},
    },
    {
        name: 'John Doe',
        role: 'First Home Landlord',
        subtitle: 'John Doe',
        image: '',
        socials: {},
    },
];

const DEFAULT_TEAM_IMAGE = "https://placehold.co/320x320/0E5248/fff?text=Team+Member";

const TeamCard: React.FC<TeamMember> = ({ name, role, image, subtitle, socials }) => (
    <div className={styles.teamCard}>
        <img src={image} alt={name} className={styles.teamImg} />
        <div className={styles.cardContent}>
            <div className={styles.teamName}>{subtitle}</div>
            <div className={styles.teamRole}>{role}</div>
            <div className={styles.socialRow}>
                <a href={socials?.instagram || '#'} className={styles.socialIcon} aria-label="Instagram">
                    <Instagram size={20} />
                </a>
                <a href={socials?.linkedin || '#'} className={styles.socialIcon} aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
            </div>
        </div>
    </div>
);


const Team: React.FC = () => {
    const subtitleRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let hasAnimatedSubtitle = false;
        let hasAnimatedGrid = false;

        const handleScroll = () => {
            if (!subtitleRef.current || !gridRef.current) return;

            const subtitleRect = subtitleRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate subtitle visibility
            const subtitleProgress = (windowHeight - subtitleRect.top) / (windowHeight + subtitleRect.height);

            // Animate subtitle first
            if (subtitleProgress > 0.2 && !hasAnimatedSubtitle) {
                hasAnimatedSubtitle = true;
                animate(subtitleRef.current, {
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutCubic',
                    complete: () => {
                        if (subtitleRef.current) {
                            subtitleRef.current.style.opacity = '1';
                            subtitleRef.current.style.transform = 'translateY(0)';
                        }
                        // Start team cards animation after subtitle
                        animateTeamCards();
                    }
                });
            }
        };

        const animateTeamCards = () => {
            if (hasAnimatedGrid || !gridRef.current) return;
            hasAnimatedGrid = true;

            // Calculate center index
            const centerIndex = Math.floor(members.length / 2);
            
            // Create animation sequence starting from middle
            cardRefs.current.forEach((cardRef, idx) => {
                if (!cardRef) return;
                
                // Calculate delay based on distance from center
                const distanceFromCenter = Math.abs(idx - centerIndex);
                const delay = distanceFromCenter * 200; // 200ms delay for each position from center

                animate(cardRef, {
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 600,
                    delay,
                    easing: 'easeOutCubic',
                    complete: () => {
                        if (cardRef) {
                            cardRef.style.opacity = '1';
                            cardRef.style.transform = 'scale(1)';
                        }
                    }
                });
            });
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);

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
            <section className={styles.teamSection}>
                <div className={styles.teamTitle}>Meet Our Team</div>
                <div ref={subtitleRef} className={`${styles.teamSubtitle} opacity-0`}>
                    Lorem ipsum dolor sit amet. Est dolorem itaque quo distinctio corporis ad fugiat repudiandae sit quia necessitatibus<br />aut eveniet dignissimos sit iste
                </div>
                <div ref={gridRef} className={styles.teamGrid}>
                    {members.map((member, idx) => (
                        <div 
                            key={idx} 
                            ref={(el: HTMLDivElement | null) => {
                                cardRefs.current[idx] = el;
                            }}
                            className="opacity-0"
                        >
                            <TeamCard {...{ ...member, image: member.image || DEFAULT_TEAM_IMAGE }} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}


export default Team;