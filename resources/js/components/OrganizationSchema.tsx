import React from 'react';
import { SchemaInjector } from './SchemaInjector';

export const OrganizationSchema = () => (
  <SchemaInjector
    schema={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Bijou Group',
      url: 'https://bijougroup.co.uk/',
      logo: 'https://bijougroup.co.uk/logo.svg',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+447495747930',
          contactType: 'customer service',
          areaServed: 'GB',
          availableLanguage: ['English']
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '70 Clarkehouse Road',
        addressLocality: 'Sheffield',
        addressRegion: 'South Yorkshire',
        postalCode: 'S10 2LJ',
        addressCountry: 'UK'
      }
    }}
  />
);
