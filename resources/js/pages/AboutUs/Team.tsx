import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import styles from './Team.module.css';

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

const Team: React.FC = () => (
    <section className={styles.teamSection}>
        <div className={styles.teamTitle}>Meet Our Team</div>
        <div className={styles.teamSubtitle}>
            Lorem ipsum dolor sit amet. Est dolorem itaque quo distinctio corporis ad fugiat repudiandae sit quia necessitatibus<br />aut eveniet dignissimos sit iste
        </div>
        <div className={styles.teamGrid}>
            {members.map((member, idx) => (
                    <TeamCard key={idx} {...{ ...member, image: member.image || DEFAULT_TEAM_IMAGE }} />
            ))}
        </div>
    </section>
);

export default Team;