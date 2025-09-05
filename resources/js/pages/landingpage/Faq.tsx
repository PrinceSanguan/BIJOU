
import React, { useState, useEffect, useRef } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { FAQSchema } from '../../components/FAQSchema';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';
import { animate } from 'animejs';

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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const faqContainerRef = useRef(null);
  const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animationTriggered: Record<string, boolean> = {
      title: false,
      container: false,
      items: false
    };

    const handleScroll = () => {
      if (!section) return;

      const rect = (section as HTMLElement).getBoundingClientRect();
// Removed duplicate and misplaced code after the Faq function
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));

      // Title appears at 15% scroll progress
      if (scrollProgress > 0.15 && !animationTriggered.title && titleRef.current) {
        animationTriggered.title = true;
        animate(titleRef.current, {
          translateY: ['30px', '0px'],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutCubic'
        });
      }

      // FAQ container appears at 25% scroll progress
      if (scrollProgress > 0.25 && !animationTriggered.container && faqContainerRef.current) {
        animationTriggered.container = true;
        animate(faqContainerRef.current, {
          translateY: ['40px', '0px'],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic'
        });
      }

      // FAQ items appear one by one at 35% scroll progress
      if (scrollProgress > 0.35 && !animationTriggered.items) {
        animationTriggered.items = true;
        faqItemRefs.current.forEach((item, index) => {
          if (item) {
            setTimeout(() => {
              animate(item, {
                translateY: ['20px', '0px'],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutCubic'
              });
            }, 100 * index);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <section ref={sectionRef} className="w-full py-16 px-4 bg-white" aria-labelledby="faq-title">
     {/*  <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield's trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijourelocation.co.uk/faq"
        og={{
          title: "HMO Management Sheffield | Stress-Free Property Solutions",
          description: "Sheffield's trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!",
          url: "https://bijourelocation.co.uk/faq",
          image: "/logo.svg"
        }}
        twitter={{
          title: "HMO Management Sheffield | Stress-Free Property Solutions",
          description: "Sheffield's trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        }}
      /> */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/faq"
        address={{
          street: "70 Clarkehouse Road",
          city: "Sheffield",
          region: "South Yorkshire",
          postalCode: "S10 2LJ",
          country: "UK"
        }}
        phone="+447495747930"
        logo="/logo.svg"
      />
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} id="faq-title" className="text-4xl md:text-6xl font-bold text-center text-[#EFBF04] mb-8 font-serif">Frequently Asked Questions</h2>
        <div ref={faqContainerRef} className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              ref={el => { faqItemRefs.current[idx] = el; }}
              className={`bg-white rounded-lg shadow p-6 transition-all duration-300 ${openIndex === idx ? 'border-2 border-[#EFBF04]' : 'border border-gray-200'}`}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              tabIndex={0}
              onClick={() => setOpenIndex(idx)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setOpenIndex(idx);
              }}
            >
              <h3 className="text-xl font-bold mb-2" id={`faq-question-${idx}`}>{faq.question}</h3>
              {openIndex === idx && (
                <p className="text-lg" id={`faq-answer-${idx}`}>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
