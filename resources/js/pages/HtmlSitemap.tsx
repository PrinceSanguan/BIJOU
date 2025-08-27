import React from 'react';
import { Link } from '@inertiajs/react';

export default function HtmlSitemap() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">HTML Sitemap</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        {/* Add more links as needed */}
      </ul>
    </main>
  );
}
