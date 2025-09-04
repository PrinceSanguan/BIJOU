import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const EvictionContent: React.FC = () => (
  <>
    <SEOHead
      title="Evictions Made Simple, Legal & Stress-Free | Bijou Group"
      description="Legal eviction support for Sheffield landlords. Fast, compliant possession recovery and court representation."
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
  <h1 className="text-4xl md:text-6xl font-bold text-center text-[#EFBF04] my-8 font-serif" aria-label="Evictions Made Simple, Legal & Stress-Free">Evictions Made Simple, Legal & Stress-Free</h1>
    <h2 className="text-2xl font-bold text-center mt-6">From difficult tenants to court proceedings, we handle the legal side so you can take back control of your property – fast and fairly.</h2>
    <div className="text-center mt-4 mb-8">
      <a href="#" className="bg-[#EFBF04] text-[#0E5248] px-6 py-3 rounded font-bold">Get Legal Eviction Support Today</a>
    </div>
    <h2 className="text-2xl font-bold mt-10">About Our Eviction & Possession Service</h2>
    <p className="mt-4 text-lg text-center">Evicting tenants is one of the most stressful experiences any landlord faces. Whether dealing with rent arrears, property damage, or tenants who simply refuse to leave, the legal process is complex and mistakes are costly.</p>
    <p className="mt-4 text-lg text-center">One wrong move—incorrect notice periods, improper serving procedures, or missing court deadlines—can delay possession by months and cost thousands in legal fees. Meanwhile, mortgage payments continue and rental income stops.</p>
    <p className="mt-4 text-lg text-center">Our eviction assistance service handles every aspect of the legal process professionally. From serving compliant notices to court representation, we ensure fast, lawful possession recovery whilst protecting your rights as a landlord throughout Sheffield and South Yorkshire.</p>
    <h2 className="text-2xl font-bold mt-10">When Good Tenancies Go Bad</h2>
    <h3 className="text-xl font-bold mt-6">Tenants Who Won't Leave Despite Proper Notice</h3>
    <p>You've served notice correctly, waited the required period, but they're still there. Every day costs you money whilst they live rent-free in your property.</p>
    <h3 className="text-xl font-bold mt-6">Rent Arrears Mounting While Mortgage Payments Continue</h3>
    <p>Three months behind on rent, but your mortgage, insurance, and maintenance costs keep coming. The financial pressure builds whilst legal processes drag on.</p>
    <h3 className="text-xl font-bold mt-6">Fear of Making Costly Legal Mistakes</h3>
    <p>Eviction law changes frequently. One procedural error invalidates months of work and forces you to start over, extending the nightmare indefinitely.</p>
    <h3 className="text-xl font-bold mt-6">Court Stress Without Professional Support</h3>
    <p>Standing in court alone, facing experienced tenant representatives whilst trying to navigate complex legal procedures. It's intimidating and overwhelming for most landlords.</p>
    <h2 className="text-2xl font-bold mt-10">Why We Handle Evictions Differently</h2>
    <h3 className="text-xl font-bold mt-6">Proven Local Court Experience</h3>
    <p>We've handled hundreds of possession cases in Sheffield County Court. Our team knows local procedures, court staff, and how judges typically rule on different case types.</p>
    <h3 className="text-xl font-bold mt-6">Complete Legal Compliance Guaranteed</h3>
    <p>Every notice, document, and procedure follows current UK housing law exactly. We stay updated on regulatory changes so your case proceeds without delays or complications.</p>
    <h3 className="text-xl font-bold mt-6">Full Court Representation Included</h3>
    <p>You won't face court alone. Our experienced representatives attend every hearing, present your case professionally, and handle all legal arguments on your behalf.</p>
    <h3 className="text-xl font-bold mt-6">Faster Property Recovery</h3>
    <p>Our systematic approach typically achieves possession orders 40% faster than landlords attempting DIY evictions. Professional handling prevents costly mistakes and delays.</p>
    <h3 className="text-xl font-bold mt-6">Complete Peace of Mind Throughout</h3>
    <p>Know that qualified professionals are managing your case correctly. Focus on your business whilst we handle the legal complexities and stress.</p>
    <h2 className="text-2xl font-bold mt-10">How We Get Your Property Back</h2>
    <h3 className="text-xl font-bold mt-6">Initial Legal Assessment</h3>
    <p>We review your tenancy agreement, rent records, and circumstances to determine the strongest legal grounds for possession. Clear advice on your options and realistic timescales.</p>
    <h3 className="text-xl font-bold mt-6">Serve Legally Compliant Notices</h3>
    <p>Whether Section 8 (rent arrears, breach of tenancy) or Section 21 (no-fault eviction), we prepare and serve notices correctly with proper documentation and timescales.</p>
    <h3 className="text-xl font-bold mt-6">Court Application Preparation</h3>
    <p>If tenants don't comply, we prepare all court documents, witness statements, and evidence bundles. Everything submitted correctly and on time to prevent delays.</p>
    <h3 className="text-xl font-bold mt-6">Professional Court Representation</h3>
    <p>Our team attends hearings, presents your case, and handles all legal arguments. You can attend for support, but we manage the entire court process professionally.</p>
    <h3 className="text-xl font-bold mt-6">Bailiff Coordination & Enforcement</h3>
    <p>Once possession orders are granted, we coordinate with court bailiffs to ensure lawful eviction occurs smoothly and efficiently.</p>
    <h2 className="text-2xl font-bold mt-10">What We Actually Do</h2>
    <h3 className="text-xl font-bold mt-6">Section 8 Evictions (Fault-Based)</h3>
    <p>Rent arrears, persistent late payments, property damage, anti-social behaviour, or breach of tenancy terms. We build strong cases with proper evidence and legal arguments.</p>
    <h3 className="text-xl font-bold mt-6">Section 21 Evictions (No-Fault)</h3>
    <p>End assured shorthold tenancies without proving fault. Requires precise compliance with notice periods, deposit protection, and prescribed information requirements.</p>
    <h3 className="text-xl font-bold mt-6">Accelerated Possession Proceedings</h3>
    <p>Fast-track court process for straightforward Section 21 cases. Typically achieves possession orders without court hearings when properly prepared.</p>
    <h3 className="text-xl font-bold mt-6">Complex Court Proceedings</h3>
    <p>Defended cases, vulnerable tenant considerations, and appeals. Our experience handles even the most challenging possession cases successfully.</p>
    <h3 className="text-xl font-bold mt-6">Post-Judgment Enforcement</h3>
    <p>When tenants ignore court orders, we coordinate bailiff action and ensure lawful possession is regained efficiently.</p>
    <h2 className="text-2xl font-bold mt-10">What Clients Tell Us</h2>
    <div className="mt-6">
      <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
        "I wasted 3 months trying to serve notices myself. They got it sorted in 6 weeks and I finally got my flat back." — Mark, Sheffield landlord
      </blockquote>
      <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
        "Thought I'd have to face court alone. Their team handled everything while I focused on finding new tenants." — Sarah, property investor
      </blockquote>
      <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
        "4 months of no rent nearly bankrupted me. They recovered the property and got a judgment for the arrears." — David, HMO owner
      </blockquote>
    </div>
    <h2 className="text-2xl font-bold mt-10">Common Questions</h2>
    <div className="mt-6">
      <h3 className="text-xl font-bold mt-4">How long does the eviction process typically take?</h3>
      <p>Section 21 cases average 3-4 months from notice to possession. Section 8 cases vary depending on grounds but typically 4-6 months. Our professional approach minimises delays significantly.</p>
      <h3 className="text-xl font-bold mt-4">What are your fees for eviction assistance?</h3>
      <p>Fixed fees based on case complexity, typically £800-£1,500 including court representation. Much less expensive than DIY mistakes that extend proceedings by months.</p>
      <h3 className="text-xl font-bold mt-4">Do you attend court hearings with landlords?</h3>
      <p>Yes, full court representation is included. Our team presents your case whilst you can attend for support or leave everything to us.</p>
      <h3 className="text-xl font-bold mt-4">Can you help recover rent arrears during proceedings?</h3>
      <p>Absolutely. We claim outstanding rent, court costs, and interest through the possession proceedings, maximising your financial recovery.</p>
      <h3 className="text-xl font-bold mt-4">What if tenants still won't leave after court orders?</h3>
      <p>We coordinate with court bailiffs to enforce possession orders lawfully. This final step ensures you regain your property without further complications.</p>
    </div>
    <h2 className="text-2xl font-bold mt-10">Get Your Property Back</h2>
    <p className="mt-4">Don't let problem tenants drag you into financial difficulty while legal processes drag on indefinitely. With our proven eviction expertise and full court support, we'll help you regain possession quickly, legally, and with minimal stress.</p>
    <p className="mt-4">Professional handling means faster results, lower costs, and complete peace of mind throughout the entire process.</p>
    <div className="text-center mt-8 mb-8">
      <a href="#" className="bg-[#EFBF04] text-[#0E5248] px-6 py-3 rounded font-bold">Book Your Free Consultation Today</a>
    </div>
    <div className="text-center text-sm text-gray-500 mt-4 mb-8">Bijou Relocation Sheffield<br />Phone: 0114 XXX XXXX | Email: legal@bijourelocation.co.uk</div>
  </>
);

export default EvictionContent;
