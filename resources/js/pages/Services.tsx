import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4 text-primary">Our Services</h1>
        <ul className="list-disc pl-6">
          <li>Property sourcing & staging</li>
          <li>Tenant management</li>
          <li>Maintenance coordination</li>
          <li>Legal support</li>
          <li>Comprehensive HMO & Buy-to-Let management</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
