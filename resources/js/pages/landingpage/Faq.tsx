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
    <section className="w-full max-w-5xl mx-auto mt-24 mb-16 px-2 sm:px-4">
      <div className="flex items-center justify-center mb-8">
        <span className="flex-1 h-0.5 bg-[#FFD700] max-w-[120px] mr-2 sm:mr-6" />
        <h2 className="text-center text-[#0E5248] text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-[0.2em] font-['Roboto_Serif',serif] uppercase">
          Frequently Asked Questions
        </h2>
        <span className="flex-1 h-0.5 bg-[#FFD700] max-w-[120px] ml-2 sm:ml-6" />
      </div>
      <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.question}>
              <button
                className={`w-full text-left px-4 sm:px-6 py-4 sm:py-5 focus:outline-none flex items-center justify-between group transition-colors duration-150 ${isOpen ? 'text-[#0E5248] font-semibold bg-[#FFD700]/5' : 'text-[#12443A] font-medium'} rounded-lg focus-visible:ring-2 focus-visible:ring-[#FFD700]`}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenIndex(isOpen ? -1 : idx);
                  }
                }}
                style={{ minHeight: '56px' }}
              >
                <span className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 select-text">
                  {faq.question}
                </span>
                <span className={`ml-2 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FFD700]/20' : 'bg-transparent'} text-[#0E5248] text-xl sm:text-2xl`}>
                  ▾
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6 ${isOpen ? 'max-h-40 sm:max-h-56 md:max-h-72 py-3 sm:py-5' : 'max-h-0 py-0'} text-sm sm:text-base md:text-[15px] text-[#12443A] opacity-80`}
                aria-hidden={!isOpen}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;
