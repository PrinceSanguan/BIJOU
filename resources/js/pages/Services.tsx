
import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12" role="main">
        <head>
          <title>Our Services | The Bijou Group</title>
          <meta name="description" content="Discover our property management services: sourcing, staging, tenant management, maintenance, legal support, and comprehensive HMO & Buy-to-Let management." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Our Services</h1>
        <ul className="list-disc pl-6">
          <li>Property sourcing & staging</li>
          <li>Tenant management</li>
          <li>Maintenance coordination</li>
          <li>Legal support</li>
          <li>Comprehensive HMO & Buy-to-Let management</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
