
import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12" role="main">
        <head>
          <title>Contact Us | The Bijou Group</title>
          <meta name="description" content="Contact The Bijou Group for property management, sourcing, staging, tenant management, maintenance, and legal support." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
        <address className="not-italic mb-4">
          <p className="mb-2">Phone: <a href="tel:+447495747930" className="text-blue-600">+44 7495 747930</a></p>
          <p className="mb-2">Email: <a href="mailto:info@bijourelocation.co.uk" className="text-blue-600">info@bijourelocation.co.uk</a></p>
          <p className="mb-2">Business Name: The Bijou Group</p>
          <p>Current Website: <a href="https://bijourelocation.co.uk" className="text-blue-600">bijourelocation.co.uk</a></p>
        </address>
      </main>
      <Footer />
    </>
  );
}
