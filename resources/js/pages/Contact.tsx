import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="mb-2">Phone: <a href="tel:+447495747930" className="text-blue-600">+44 7495 747930</a></p>
        <p className="mb-2">Email: <a href="mailto:info@bijourelocation.co.uk" className="text-blue-600">info@bijourelocation.co.uk</a></p>
        <p className="mb-2">Business Name: The Bijou Group</p>
        <p>Current Website: <a href="https://bijourelocation.co.uk" className="text-blue-600">bijourelocation.co.uk</a></p>
      </div>
      <Footer />
    </>
  );
}
