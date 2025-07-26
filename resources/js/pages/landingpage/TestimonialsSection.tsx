import React, { useState, useEffect } from 'react';

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

  // Auto-advance testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-12 sm:py-20 px-3 sm:px-6 bg-white overflow-hidden">
      {/* Geometric accent elements - fewer on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD700] rounded-full opacity-60 animate-pulse z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#FFD700] rounded-full opacity-40 z-10"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#FFD700] rounded-full opacity-50 z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Section header */}
        <p className="text-[#4f4e44] text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-8 sm:mb-12 uppercase">
          <span className="text-[#4f4e44]">WHAT OUR CLIENTS SAY</span>
        </p>
        {/* Testimonial content */}
        <div className="mb-8 sm:mb-12">
          <p className="text-lg sm:text-2xl md:text-3xl leading-relaxed text-black font-light mb-6 sm:mb-10 px-2">
            {testimonials[active].text.split(/(Bijou Group|seamless|Professional|reliable|legally sharp|portfolio|source|stage|let|rental|worth|experience)/gi).map((word, i) =>
              ["Bijou Group", "seamless", "Professional", "reliable", "legally sharp", "portfolio", "source", "stage", "let", "rental", "worth", "experience"].includes(word.trim()) ?
                <span key={i} className="text-[#4f4e44] font-semibold">{word}</span> : word
            )}
          </p>
          {/* Author section */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 sm:mb-4 border-2 border-[#FFD700]">
              <img 
                src={testimonials[active].img}
                alt={testimonials[active].author}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-base sm:text-lg font-medium text-black mb-0.5 sm:mb-1">{testimonials[active].author}</h4>
            <p className="text-[#4f4e44] text-xs sm:text-sm">{testimonials[active].role}</p>
          </div>
        </div>
        {/* Pagination dots removed; now auto-advances */}
      </div>

      {/* Custom CSS for mobile tweaks */}
      <style>
        {`
          @media (max-width: 640px) {
            .testimonial-img {
              object-position: center;
            }
          }
        `}
      </style>
    </section>
  );
}