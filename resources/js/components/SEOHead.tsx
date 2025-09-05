import React from 'react';
import { Head } from '@inertiajs/react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  hreflangs?: Array<{ hreflang: string; href: string }>;
  meta?: Array<{ name: string; content: string }>;
  og?: { [key: string]: string };
  twitter?: { [key: string]: string };
  jsonLd?: object | object[];
  children?: React.ReactNode;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  robots = 'index, follow',
  hreflangs = [],
  meta = [],
  og = {},
  twitter = {},
  jsonLd,
  children,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    <link rel="canonical" href={canonical} />
    {hreflangs.map((h, i) => (
      <link key={i} rel="alternate" hrefLang={h.hreflang} href={h.href} />
    ))}
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
    {/* JSON-LD Schema */}
    {jsonLd && (
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    )}
    {children}
  </Head>
);
