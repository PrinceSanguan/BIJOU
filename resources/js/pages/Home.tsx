import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to The Bijou Group</h1>
      <p className="text-lg mb-6">Comprehensive property management for HMO and Buy-to-Let landlords. Sourcing, staging, tenant management, maintenance, and legal support.</p>
      <div className="mt-8">
        <a href="/about" className="btn btn-primary mr-4">About Us</a>
        <a href="/services" className="btn btn-secondary mr-4">Services</a>
        <a href="/contact" className="btn btn-outline">Contact</a>
      </div>
    </div>
  );
}
