import React from 'react';
import { SchemaInjector } from './SchemaInjector';

interface ServiceSchemaProps {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  url: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  provider,
  areaServed,
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
    },
    areaServed,
    url,
  };
  return <SchemaInjector schema={schema} />;
};
