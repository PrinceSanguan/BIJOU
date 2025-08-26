import React from 'react';
import { SchemaInjector } from './SchemaInjector';

interface LocalBusinessSchemaProps {
  name: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  url: string;
  logo: string;
  geo?: { lat: number; lng: number };
  hours?: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name,
  address,
  phone,
  url,
  logo,
  geo,
  hours,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    image: logo,
    telephone: phone,
    url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    ...(geo && { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } }),
    ...(hours && { openingHours: hours }),
  };
  return <SchemaInjector schema={schema} />;
};
