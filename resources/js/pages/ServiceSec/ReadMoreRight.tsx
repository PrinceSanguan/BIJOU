import styles from './ReadMoreRight.module.css';

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
    );
};

export default ReadMoreRight;
