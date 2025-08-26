import React from 'react';
import { SchemaInjector } from './SchemaInjector';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbListSchema: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => (
  <SchemaInjector
    schema={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: item.url
      }))
    }}
  />
);
