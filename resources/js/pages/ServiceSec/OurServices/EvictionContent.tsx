import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const EvictionContent: React.FC = () => (
  <>
    <SEOHead
      title="Eviction Support Sheffield | Fast, Legal Possession Help"
      description="Bijou Group’s Eviction Support in Sheffield provides legal eviction services for landlords. We deliver fast, compliant possession recovery, full court representation, and expert guidance through every step."
      canonical="https://bijougroup.co.uk/services/eviction-support"
      og={{
        title: "Evictions Made Simple, Legal & Stress-Free",
        description: "Legal eviction support for Sheffield landlords. Fast, compliant possession recovery and court representation.",
        url: "https://bijougroup.co.uk/services/eviction-support",
        image: "/images/servicesimg/eviction-support.jpg"
      }}
      twitter={{
        title: "Evictions Made Simple, Legal & Stress-Free",
        description: "Legal eviction support for Sheffield landlords. Fast, compliant possession recovery and court representation."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does the eviction process typically take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Section 21 cases average 3-4 months from notice to possession. Section 8 cases vary depending on grounds but typically 4-6 months. Our professional approach minimises delays significantly."
            }
          },
          {
            "@type": "Question",
            "name": "Do you attend court hearings with landlords?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, full court representation is included. Our team presents your case whilst you can attend for support or leave everything to us."
            }
          }
        ]
      })}
    </script>
    {/* HERO SECTION */}
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0E5248] text-center mb-2 font-robot-serif drop-shadow-lg" aria-label="Evictions Made Simple, Legal & Stress-Free">
            Evictions Made Simple, Legal & Stress-Free
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#0E5248] mb-4">From difficult tenants to court proceedings, we handle the legal side so you can take back control of your property – fast and fairly.</h2>
          <div className="flex flex-col items-center mt-6 mb-2 w-full">
            <a
              href="#"
              className="w-full max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center"
            >
              Get Legal Eviction Support Today
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">About Our Eviction & Possession Service
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90 text-center">Evicting tenants is one of the most <span className="text-[#EFBF04] font-semibold">stressful experiences</span> any landlord faces. Whether dealing with rent arrears, property damage, or tenants who simply refuse to leave, the legal process is complex and mistakes are costly.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90 text-center">One wrong move—incorrect notice periods, improper serving procedures, or missing court deadlines—can delay possession by months and cost thousands in legal fees. Meanwhile, mortgage payments continue and rental income stops.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90 text-center">Our eviction assistance service handles every aspect of the legal process professionally. From serving compliant notices to court representation, we ensure <span className="text-[#EFBF04] font-semibold">fast, lawful possession recovery</span> whilst protecting your rights as a landlord throughout Sheffield and South Yorkshire.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">When Good Tenancies Go Bad
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Tenants Who Won't Leave Despite Proper Notice</h3>
        <p className="mb-4 text-[#0E5248]/90">You've served notice correctly, waited the required period, but they're still there. Every day costs you money whilst they live rent-free in your property.</p>
        <h3 className="text-xl font-bold mt-6">Rent Arrears Mounting While Mortgage Payments Continue</h3>
        <p className="mb-4 text-[#0E5248]/90">Three months behind on rent, but your mortgage, insurance, and maintenance costs keep coming. The financial pressure builds whilst legal processes drag on.</p>
        <h3 className="text-xl font-bold mt-6">Fear of Making Costly Legal Mistakes</h3>
        <p className="mb-4 text-[#0E5248]/90">Eviction law changes frequently. One procedural error invalidates months of work and forces you to start over, extending the nightmare indefinitely.</p>
        <h3 className="text-xl font-bold mt-6">Court Stress Without Professional Support</h3>
        <p className="mb-4 text-[#0E5248]/90">Standing in court alone, facing experienced tenant representatives whilst trying to navigate complex legal procedures. It's intimidating and overwhelming for most landlords.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why We Handle Evictions Differently
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Proven Local Court Experience</h3>
        <p className="mb-4 text-[#0E5248]/90">We've handled hundreds of possession cases in Sheffield County Court. Our team knows local procedures, court staff, and how judges typically rule on different case types.</p>
        <h3 className="text-xl font-bold mt-6">Complete Legal Compliance Guaranteed</h3>
        <p className="mb-4 text-[#0E5248]/90">Every notice, document, and procedure follows current UK housing law exactly. We stay updated on regulatory changes so your case proceeds without delays or complications.</p>
        <h3 className="text-xl font-bold mt-6">Full Court Representation Included</h3>
        <p className="mb-4 text-[#0E5248]/90">You won't face court alone. Our experienced representatives attend every hearing, present your case professionally, and handle all legal arguments on your behalf.</p>
        <h3 className="text-xl font-bold mt-6">Faster Property Recovery</h3>
        <p className="mb-4 text-[#0E5248]/90">Our systematic approach typically achieves possession orders 40% faster than landlords attempting DIY evictions. Professional handling prevents costly mistakes and delays.</p>
        <h3 className="text-xl font-bold mt-6">Complete Peace of Mind Throughout</h3>
        <p className="mb-4 text-[#0E5248]/90">Know that qualified professionals are managing your case correctly. Focus on your business whilst we handle the legal complexities and stress.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">How We Get Your Property Back
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Initial Legal Assessment</h3>
        <p className="mb-4 text-[#0E5248]/90">We review your tenancy agreement, rent records, and circumstances to determine the strongest legal grounds for possession. Clear advice on your options and realistic timescales.</p>
        <h3 className="text-xl font-bold mt-6">Serve Legally Compliant Notices</h3>
        <p className="mb-4 text-[#0E5248]/90">Whether Section 8 (rent arrears, breach of tenancy) or Section 21 (no-fault eviction), we prepare and serve notices correctly with proper documentation and timescales.</p>
        <h3 className="text-xl font-bold mt-6">Court Application Preparation</h3>
        <p className="mb-4 text-[#0E5248]/90">If tenants don't comply, we prepare all court documents, witness statements, and evidence bundles. Everything submitted correctly and on time to prevent delays.</p>
        <h3 className="text-xl font-bold mt-6">Professional Court Representation</h3>
        <p className="mb-4 text-[#0E5248]/90">Our team attends hearings, presents your case, and handles all legal arguments. You can attend for support, but we manage the entire court process professionally.</p>
        <h3 className="text-xl font-bold mt-6">Bailiff Coordination & Enforcement</h3>
        <p className="mb-4 text-[#0E5248]/90">Once possession orders are granted, we coordinate with court bailiffs to ensure lawful eviction occurs smoothly and efficiently.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">What We Actually Do
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Section 8 Evictions (Fault-Based)</h3>
        <p className="mb-4 text-[#0E5248]/90">Rent arrears, persistent late payments, property damage, anti-social behaviour, or breach of tenancy terms. We build strong cases with proper evidence and legal arguments.</p>
        <h3 className="text-xl font-bold mt-6">Section 21 Evictions (No-Fault)</h3>
        <p className="mb-4 text-[#0E5248]/90">End assured shorthold tenancies without proving fault. Requires precise compliance with notice periods, deposit protection, and prescribed information requirements.</p>
        <h3 className="text-xl font-bold mt-6">Accelerated Possession Proceedings</h3>
        <p className="mb-4 text-[#0E5248]/90">Fast-track court process for straightforward Section 21 cases. Typically achieves possession orders without court hearings when properly prepared.</p>
        <h3 className="text-xl font-bold mt-6">Complex Court Proceedings</h3>
        <p className="mb-4 text-[#0E5248]/90">Defended cases, vulnerable tenant considerations, and appeals. Our experience handles even the most challenging possession cases successfully.</p>
        <h3 className="text-xl font-bold mt-6">Post-Judgment Enforcement</h3>
        <p className="mb-4 text-[#0E5248]/90">When tenants ignore court orders, we coordinate bailiff action and ensure lawful possession is regained efficiently.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-10">What Clients Tell Us
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "I wasted 3 months trying to serve notices myself. They got it sorted in 6 weeks and I finally got my flat back."
            <span className="font-semibold mt-2 text-[#EFBF04]">Mark, Sheffield landlord</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "Thought I'd have to face court alone. Their team handled everything while I focused on finding new tenants."
            <span className="font-semibold mt-2 text-[#EFBF04]">Sarah, property investor</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "4 months of no rent nearly bankrupted me. They recovered the property and got a judgment for the arrears."
            <span className="font-semibold mt-2 text-[#EFBF04]">David, HMO owner</span>
          </blockquote>
        </div>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border-2 border-[#EFBF04]/40">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Frequently Asked Questions
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="divide-y divide-[#EFBF04]/40">
          {[
            {
              q: 'How long does the eviction process typically take?',
              a: 'Section 21 cases average 3-4 months from notice to possession. Section 8 cases vary depending on grounds but typically 4-6 months. Our professional approach minimises delays significantly.'
            },
            {
              q: 'What are your fees for eviction assistance?',
              a: 'Fixed fees based on case complexity, typically £800-£1,500 including court representation. Much less expensive than DIY mistakes that extend proceedings by months.'
            },
            {
              q: 'Do you attend court hearings with landlords?',
              a: 'Yes, full court representation is included. Our team presents your case whilst you can attend for support or leave everything to us.'
            },
            {
              q: 'Can you help recover rent arrears during proceedings?',
              a: 'Absolutely. We claim outstanding rent, court costs, and interest through the possession proceedings, maximising your financial recovery.'
            },
            {
              q: 'What if tenants still won\'t leave after court orders?',
              a: 'We coordinate with court bailiffs to enforce possession orders lawfully. This final step ensures you regain your property without further complications.'
            }
          ].map((faq, idx) => (
            <details key={idx} className="py-4 group border-l-4 border-[#EFBF04] pl-4">
              <summary className="cursor-pointer text-xl font-semibold text-[#0E5248] group-open:text-[#EFBF04] transition-colors">
                {faq.q}
              </summary>
              <p className="mt-2 text-lg text-[#0E5248]/90">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 border-2 border-[#EFBF04]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E5248] mb-2 drop-shadow-lg">Ready to Get Your Property Back?
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90">Don't let <span className="text-[#EFBF04] font-semibold">problem tenants</span> drag you into financial difficulty while legal processes drag on indefinitely. With our proven eviction expertise and full court support, we'll help you regain possession quickly, legally, and with minimal stress.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90">Professional handling means <span className="text-[#EFBF04] font-semibold">faster results</span>, lower costs, and complete peace of mind throughout the entire process.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 mb-8 w-full">
          <a
            href="#"
            className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
          >
            Book Your Free Consultation Today
          </a>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Bijou Relocation Sheffield<br />Phone: 0114 XXX XXXX | Email: legal@bijourelocation.co.uk</div>
      </div>
    </section>
  </>
);

export default EvictionContent;
