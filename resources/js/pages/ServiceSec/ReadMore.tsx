
import styles from './ReadMore.module.css';

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

const heroImage = '/images/AboutUs/hero.jpg';

export default function ReadMore() {
    return (
        <section className={styles.readMoreSection}>
            <div className={styles.readMoreContainer}>
                <ReadMoreCard
                    title="Tenant Find Services"
                    text="We advertise across major platforms, conduct viewings, and carry out thorough referencing checks to find reliable tenants quickly and reduce voids."
                    image={heroImage}
                    imageAlt="Tenant Find Services"
                />
                <ReadMoreCard
                    title="Property Management"
                    text="Comprehensive property management services including maintenance coordination, rent collection, and regular property inspections to ensure your investment remains in top condition."
                    image={heroImage}
                    imageAlt="Property Management"
                    reverse
                />
                <ReadMoreCard
                    title="Full Property Management"
                    text="End-to-end property management solutions that handle everything from tenant sourcing to maintenance, giving you complete peace of mind as a property owner."
                    image={heroImage}
                    imageAlt="Full Property Management"
                />
            </div>
        </section>
    );
}