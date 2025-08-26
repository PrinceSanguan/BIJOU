

import styles from './ReadMore.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

type ReadMoreCardProps = {
    title: string;
    text: string;
    image: string;
    imageAlt: string;
    buttonLabel?: string;
    reverse?: boolean;
    onButtonClick?: () => void;
};

function ReadMoreCard({ title, text, image, imageAlt, buttonLabel = 'Read More', reverse = false, onButtonClick }: ReadMoreCardProps) {
    return (
        <article className={`${styles.readMoreCard} ${reverse ? styles.reverse : ''}`}>
            <img
                src={image}
                alt={imageAlt}
                className={styles.readMoreImage}
                onError={e => {
                    (e.currentTarget as HTMLImageElement).src = `https://placehold.co/800x600/0E5248/FFFFFF?text=${encodeURIComponent(imageAlt)}`;
                }}
            />
            <div className={styles.readMoreContent}>
                <h2 className={styles.readMoreTitle}>{title}</h2>
                <p className={styles.readMoreText}>{text}</p>
                {buttonLabel && (
                    <button className={styles.readMoreButton} onClick={onButtonClick} type="button">
                        {buttonLabel}
                    </button>
                )}
            </div>
        </article>
    );
}


// Service-specific images (matching backend)
const tenantFindImage = '/images/servicesimg/Rectangle 18480.webp';
const rentManagementImage = '/images/servicesimg/Rectangle 18480 (1).webp';
const maintenanceImage = '/images/servicesimg/Rectangle 18480 (2).webp';

function ReadMore() {
    // Handler to navigate to the correct service page by service id
    const goToService = (id: number) => {
        window.location.href = `/services/${id}`;
    };
    return (
        <>
            <SEOHead
                title="Read More About Our Services | Bijou Group Sheffield HMO Management"
                description="Learn more about our HMO management services for Sheffield landlords. Tenant find, rent collection, maintenance, and more."
                canonical="https://bijougroup.co.uk/services/read-more"
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url="https://bijougroup.co.uk/services/read-more"
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
            <section className={styles.readMoreSection}>
                <div className={styles.readMoreContainer}>
                    <ReadMoreCard
                        title="Tenant Find Services"
                        text="We advertise across major platforms, conduct viewings, and carry out thorough referencing checks to find reliable tenants quickly and reduce costly void periods."
                        image={tenantFindImage}
                        imageAlt="Tenant Find Services"
                        onButtonClick={() => goToService(11)}
                    />
                    <ReadMoreCard
                        title="Rent Management and Collection"
                        text="We ensure rent is paid on time, handle arrears promptly, and provide transparent monthly statements to keep your finances in check. Our guaranteed rent Sheffield service offers complete peace of mind."
                        image={rentManagementImage}
                        imageAlt="Rent Management and Collection"
                        reverse
                        onButtonClick={() => goToService(8)}
                    />
                    <ReadMoreCard
                        title="Property Maintenance and Repairs"
                        text="Our network of vetted tradespeople ensures prompt and professional maintenance for everything from emergency repairs to routine upkeep across Sheffield properties."
                        image={maintenanceImage}
                        imageAlt="Property Maintenance and Repairs"
                        onButtonClick={() => goToService(9)}
                    />
                </div>
            </section>
        </>
    );
}

export default ReadMore;