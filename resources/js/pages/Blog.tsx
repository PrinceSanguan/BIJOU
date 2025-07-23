import React from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Blog() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4 text-primary">Blog</h1>
        <p className="mb-4">Our latest news and updates. (Blog content coming soon)</p>
      </div>
      <Footer />
    </>
  );
}
