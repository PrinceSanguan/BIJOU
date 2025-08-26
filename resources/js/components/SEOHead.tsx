import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  meta?: Array<{ name: string; content: string }>;
  og?: { [key: string]: string };
  twitter?: { [key: string]: string };
  children?: React.ReactNode;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  meta = [],
  og = {},
  twitter = {},
  children,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    {meta.map((m, i) => (
      <meta key={i} name={m.name} content={m.content} />
    ))}
    {/* Open Graph */}
    {Object.entries(og).map(([property, content]) => (
      <meta key={property} property={`og:${property}`} content={content} />
    ))}
    {/* Twitter Card */}
    {Object.entries(twitter).map(([name, content]) => (
      <meta key={name} name={`twitter:${name}`} content={content} />
    ))}
    {children}
  </Helmet>
);
