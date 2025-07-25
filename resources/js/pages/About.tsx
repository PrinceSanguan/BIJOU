
import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12" role="main">
        <head>
          <title>About The Bijou Group | Property Management Experts</title>
          <meta name="description" content="Learn about The Bijou Group, led by CEO Karen Hodgson, with 20+ years of housing experience. Expert property management, sourcing, staging, tenant management, maintenance, and legal support for landlords." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </head>
        <h1 className="text-3xl font-bold mb-4 text-primary">About The Bijou Group</h1>
        <p className="mb-4">Led by CEO Karen Hodgson, with 20+ years of housing experience, 8+ years running her own business, and 15+ years helping her family property business.</p>
        <p>The Bijou Group provides expert property management, sourcing, staging, tenant management, maintenance, and legal support for landlords.</p>
      </main>
      <Footer />
    </>
  );
}
