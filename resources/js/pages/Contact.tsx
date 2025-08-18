
import React from 'react';
import { Footer } from '@/components/Footer';
import HeaderBlack from '@/components/HeaderBlack';
import { ContactSection } from '@/pages/landingpage/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderBlack className="sticky top-0 z-50" />
      <main className="flex-grow flex items-center justify-center w-full py-12 px-4 overflow-x-hidden">
        <div className="w-full max-w-[1562px] px-4">
        <h1 className="text-7xl font-bold text-[#EFBF04] text-center mb-12 font-serif">Contact Us</h1>
          <ContactSection />
        </div>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
}
