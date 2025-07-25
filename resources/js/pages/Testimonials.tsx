
import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Testimonials() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12" role="main">
        <head>
          <title>Testimonials | The Bijou Group</title>
          <meta name="description" content="Hear from our satisfied landlords and tenants. Read testimonials about The Bijou Group's property management services." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Testimonials</h1>
        <p className="mb-4">Hear from our satisfied landlords and tenants. (Add testimonials here)</p>
      </main>
      <Footer />
    </>
  );
}
