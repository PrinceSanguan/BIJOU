
import styles from './ReadMoreRight.module.css';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

export type ReadMoreRightProps = {
    title: string;
    text: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
    children?: React.ReactNode;
};


const ReadMoreRight: React.FC<ReadMoreRightProps> = ({
    title,
    text,
    buttonLabel = 'Read More',
    onButtonClick,
    children,
}) => {
    return (
        <>
            <SEOHead
                title={title + ' | Bijou Group Sheffield HMO Management'}
                description={text}
                canonical={typeof window !== 'undefined' ? window.location.href : 'https://bijougroup.co.uk/services/read-more-right'}
            />
            <LocalBusinessSchema
                name="Bijou Group"
                url={typeof window !== 'undefined' ? window.location.href : 'https://bijougroup.co.uk/services/read-more-right'}
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
                <div className={styles.readMoreContent}>
                    <div style={{ flex: 1 }}>
                        <h2 className={styles.readMoreTitle}>{title}</h2>
                        <p className={styles.readMoreText}>{text}</p>
                        {buttonLabel && (
                            <button className={styles.readMoreButton} onClick={onButtonClick} type="button">
                                {buttonLabel}
                            </button>
                        )}
                    </div>
                    {children && (
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            {children}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ReadMoreRight;
