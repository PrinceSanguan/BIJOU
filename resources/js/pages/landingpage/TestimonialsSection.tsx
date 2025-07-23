import React, { useState } from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: '“Karen and her team made everything seamless—from tenant placement to full management. A truly hands-off experience.”',
      author: 'James R.',
      role: 'Landlord in Sheffield',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      text: '“Professional, reliable, and legally sharp. I wouldn’t trust my HMO portfolio with anyone else.”',
      author: 'Michelle D.',
      role: 'Investor',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      text: '“The Bijou Group helped me source, stage, and let my first rental within weeks. Absolutely worth it.”',
      author: 'Mark E.',
      role: 'First-time Landlord',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="text-green-600 text-sm font-medium tracking-[0.3em] mb-12 uppercase">
          <span className="text-green-600">WHAT OUR CLIENTS SAY</span>
        </p>
        {/* Testimonial content */}
        <div className="mb-12">
          <p className="text-2xl md:text-3xl leading-relaxed text-black font-light mb-10">
            {testimonials[active].text.split(/(Bijou Group|seamless|Professional|reliable|legally sharp|portfolio|source|stage|let|rental|worth|experience)/gi).map((word, i) =>
              ["Bijou Group", "seamless", "Professional", "reliable", "legally sharp", "portfolio", "source", "stage", "let", "rental", "worth", "experience"].includes(word.trim()) ?
                <span key={i} className="text-green-600 font-semibold">{word}</span> : word
            )}
          </p>
          {/* Author section */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#FFD700]">
              <img 
                src={testimonials[active].img}
                alt={testimonials[active].author}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg font-medium text-black mb-1">{testimonials[active].author}</h4>
            <p className="text-green-600 text-sm">{testimonials[active].role}</p>
          </div>
        </div>
        {/* Pagination dots */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full border border-[#FFD700] transition-colors ${active === idx ? 'bg-green-600' : 'bg-[#FFD700]'}`}
              onClick={() => setActive(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}