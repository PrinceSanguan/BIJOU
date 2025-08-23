

import { router } from '@inertiajs/react';
import styles from './Featured.module.css';

const services: string[] = [
    'Rent Arrears Management',
    'Eviction and Possession Assistance',
    'Property Staging and Room Setup',
    'Inventories with Photographic Evidence',
    'Property Compliance & Certification',
    'Tenancy Management',
    'Landlord Support and Advice',
    'Rent Management and Collection',
    'Property Maintenance and Repair',
    'Bespoke Property Sourcing',
    'Tenant Find Services',
    'Full-Service Property',
    'Marketing for Rooms & Units',
    'Renters Compliance Advice',
    'Check-ins and Check-outs',
];

type ServiceCardProps = {
    title: string;
    onClick: () => void;
};

function ServiceCard({ title, onClick }: ServiceCardProps) {
    return (
        <li>
            <button
                type="button"
                className={styles.serviceCard}
                onClick={onClick}
                tabIndex={0}
                aria-label={title}
            >
                <span className={styles.serviceTitle}>{title}</span>
            </button>
        </li>
    );
}


export default function Featured() {
    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <section className={styles.featuredSection} aria-labelledby="featured-services-title">
            <div className={styles.headerRow}>
                <hr className={styles.headerLine} />
                <h2 id="featured-services-title" className={styles.headerTitle}>Other Featured Services</h2>
                <hr className={styles.headerLine} />
            </div>
            <ul className={styles.servicesGrid}>
                {services.map((service, idx) => (
                    <ServiceCard key={service} title={service} onClick={() => navigateToService(idx + 1)} />
                ))}
            </ul>
        </section>
    );
}