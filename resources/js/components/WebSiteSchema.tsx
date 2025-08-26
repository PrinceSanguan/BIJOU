import React from 'react';
import { SchemaInjector } from './SchemaInjector';

export const WebSiteSchema = () => (
  <SchemaInjector
    schema={{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Bijou Group',
      url: 'https://bijougroup.co.uk/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://bijougroup.co.uk/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }}
  />
);
