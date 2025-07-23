import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Testimonials() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4 text-primary">Testimonials</h1>
        <p className="mb-4">Hear from our satisfied landlords and tenants. (Add testimonials here)</p>
      </div>
      <Footer />
    </>
  );
}
