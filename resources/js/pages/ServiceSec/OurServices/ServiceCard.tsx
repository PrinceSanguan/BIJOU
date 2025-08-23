import React from 'react';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  children?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, alt, children }) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={alt || title}
          className={styles.image}
          onError={e => {
            (e.currentTarget as HTMLImageElement).src = '/images/servicesimg/20240415_134340~2.jpg';
          }}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </article>
  );
};

export default ServiceCard;
