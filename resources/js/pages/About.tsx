import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4 text-primary">About The Bijou Group</h1>
        <p className="mb-4">Led by CEO Karen Hodgson, with 20+ years of housing experience, 8+ years running her own business, and 15+ years helping her family property business.</p>
        <p>The Bijou Group provides expert property management, sourcing, staging, tenant management, maintenance, and legal support for landlords.</p>
      </div>
      <Footer />
    </>
  );
}
