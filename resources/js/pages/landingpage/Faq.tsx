import React, { useState } from 'react';

const faqs = [
  {
    question: 'How much are HMO management fees in Sheffield?',
    answer:
      'Our transparent management fees start from just 10% + VAT for guaranteed rent, with no hidden costs. We offer the most competitive rates for professional HMO management Sheffield services.',
  },
  {
    question: 'What is guaranteed rent and how does it work?',
    answer: 'Our guaranteed rent scheme pays you a fixed monthly amount regardless of occupancy. We handle all tenant issues, maintenance, and void periods – you simply receive consistent income.',
  },
  {
    question: 'Do I need to be at home during the cleaning?',
    answer: 'Absolutely. We manage all HMO licensing Sheffield requirements, from selective licensing in S2 and S10 to mandatory HMO licenses. Our 100% compliance pass rate gives you complete confidence',
  },
  {
    question: 'Which Sheffield areas do you cover?',
    answer: 'We cover all Sheffield areas, specializing in S2, S10, areas near the University, hospitals, and high-demand rental locations throughout the city.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full max-w-5xl mx-auto mt-24 mb-16 px-4">
      <div className="flex items-center justify-center mb-8">
        <span className="flex-1 h-0.5 bg-[#FFD700] max-w-[120px] mr-6" />
        <h2 className="text-center text-[#0E5248] text-lg sm:text-xl md:text-2xl font-normal tracking-[0.2em] font-['Roboto_Serif',serif] uppercase">
          Frequently Asked Questions
        </h2>
        <span className="flex-1 h-0.5 bg-[#FFD700] max-w-[120px] ml-6" />
      </div>
      <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
        {faqs.map((faq, idx) => (
          <div key={faq.question}>
            <button
              className={`w-full text-left px-6 py-5 focus:outline-none flex items-center justify-between group ${openIndex === idx ? 'text-[#0E5248] font-semibold' : 'text-[#12443A] font-medium'}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-[20px] leading-6">
                {faq.question}
              </span>
              <span className={`ml-2 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''} text-[#0E5248] text-2xl`}>▾</span>
            </button>
            {openIndex === idx && faq.answer && (
              <div className="px-6 pb-5 text-[15px] text-[#12443A] opacity-80">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
