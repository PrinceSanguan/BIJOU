

import { router } from '@inertiajs/react';
import styles from './Featured.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

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


function Featured() {
    const navigateToService = (id: number) => {
        router.get(`/services/${id}`);
    };

    return (
        <>
            <SEOHead
                title="Other Featured Services | Bijou Group Sheffield HMO Management"
                description="Explore more HMO management services for Sheffield landlords. Rent arrears, eviction, compliance, and more."
                canonical="https://bijougroup.co.uk/services/featured"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url="https://bijougroup.co.uk/services/featured"
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
        </>
    );
}

export default Featured;