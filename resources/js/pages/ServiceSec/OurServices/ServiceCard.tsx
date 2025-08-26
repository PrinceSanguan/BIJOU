
import React from 'react';
import styles from './ServiceCard.module.css';
import { SEOHead } from '../../../components/SEOHead';
import { LocalBusinessSchema } from '../../../components/LocalBusinessSchema';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt?: string;
  children?: React.ReactNode;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, alt, children }) => {
  return (
    <>
      <SEOHead
        title={`${title} | Bijou Group Sheffield HMO Management`}
        description={description}
        canonical={`https://bijougroup.co.uk/services/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`}
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url={`https://bijougroup.co.uk/services/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`}
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
    </>
  );
};

export default ServiceCard;
