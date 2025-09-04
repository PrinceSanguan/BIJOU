import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const RentArrearsContent: React.FC = () => (
  <>
    <SEOHead
      title="Rent Arrears Management Sheffield | Bijou Group"
      description="Professional rent arrears recovery for Sheffield landlords. Communication, payment plans, and legal support to recover your money."
      canonical="https://bijougroup.co.uk/services/rent-arrears"
      og={{
        title: "Rent Arrears Management Sheffield",
        description: "Professional rent arrears recovery for Sheffield landlords. Communication, payment plans, and legal support to recover your money.",
        url: "https://bijougroup.co.uk/services/rent-arrears",
        image: "/images/servicesimg/rent-arrears.jpg"
      }}
      twitter={{
        title: "Rent Arrears Management Sheffield",
        description: "Professional rent arrears recovery for Sheffield landlords. Communication, payment plans, and legal support to recover your money."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you recover rent arrears professionally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use professional communication, realistic payment plans, and legal support when necessary to recover rent arrears for Sheffield landlords."
            }
          },
          {
            "@type": "Question",
            "name": "What is your recovery rate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recover money in 78% of cases we take on, with an average recovery of £2,100 per property."
            }
          }
        ]
      })}
    </script>
    {/* HERO SECTION */}
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-[#EFBF04] text-center px-4 mb-8 mt-8 font-robot-serif" aria-label="Rent Arrears Management Sheffield">Rent Arrears Management Sheffield</h1>
        <h2 className="text-2xl font-bold text-center mt-6">Stop chasing rent. We'll get your money back professionally - without destroying tenant relationships</h2>
        <p className="mt-4 text-lg text-center">One month behind becomes three. Suddenly you're £2,500 down and your tenant's avoiding your calls. We've recovered over £180,000 in unpaid rent for Sheffield landlords this year alone - through proper communication, realistic payment plans, and when necessary, court action that actually works.</p>
        <div className="text-center mt-4 mb-8">
          <a href="#" className="bg-[#EFBF04] text-[#0E5248] px-6 py-3 rounded font-bold mr-4">Want to Increase Your Returns?</a>
          <a href="#" className="bg-[#0E5248] text-[#EFBF04] px-6 py-3 rounded font-bold">I'm Looking for Properties</a>
        </div>
        {/* Hero Image placeholder: Bedroom image (provided) */}
      </div>
    </section>
    {/* PRIMARY SERVICE SECTION */}
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-6">Rent Management and Collection</h2>
        <p className="mb-4">Sheffield landlords lose thousands annually due to rent arrears and late payments. The National Residential Landlords Association reports that 47% of UK landlords experienced rent arrears in 2024, with average collection delays costing £2,100 per property yearly.</p>
        <p className="mb-4">Managing rent collection manually creates endless stress: chasing tenants via phone calls, tracking multiple payment dates, handling excuses, and maintaining complex spreadsheets. HMO landlords face even greater challenges with multiple tenants per property, increasing arrears risk exponentially.</p>
        <p className="mb-4">Our professional rent management service eliminates these headaches completely. We handle everything from automated collection to legal compliance, ensuring your rental income flows reliably whilst you focus on growing your property portfolio. With Sheffield's rental market tightening and the Renters Reform Bill introducing stricter landlord obligations, professional rent management isn't luxury—it's essential protection for your investment.</p>
        <h3 className="text-2xl font-bold mt-10">Every Sheffield Landlord's Worst Nightmare</h3>
        <p className="mb-4">You know the feeling. Rent was due yesterday. Your tenant's making excuses. Your mortgage payment is next week.</p>
        <p className="mb-4">We see it all the time - good tenants hit hard times, unreliable ones take advantage, and landlords end up thousands out of pocket whilst still paying all the bills. One Sheffield landlord we helped last month was £4,800 behind across two properties. Couldn't sleep, couldn't concentrate at work, considering selling up.</p>
        <p className="mb-4">That's not property investment - that's punishment.</p>
        <p className="mb-4">The worst part? Most landlords wait too long to take action. They hope things will sort themselves out. They don't want confrontation. Meanwhile, the debt grows bigger and harder to recover every single week.</p>
        <ul className="list-disc ml-8 mt-4 text-lg">
          <li>Tenants stop answering calls and avoid face-to-face conversations</li>
          <li>Informal "I'll pay you back" promises get broken repeatedly</li>
          <li>No proper paperwork means you can't prove what's owed in court</li>
          <li>Expensive solicitors charge thousands whether you recover anything or not</li>
          <li>Court processes drag on for months whilst arrears keep mounting</li>
          <li>Properties sit empty after messy evictions that could've been avoided</li>
        </ul>
      </div>
    </section>
    {/* SOLUTION SECTION */}
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-6">How We Actually Recover Your Money</h2>
        <p className="mb-4">Look, we're not miracle workers. But we are experienced debt collectors who understand Sheffield's rental market inside out. We've been doing this for fifteen years. We know which approaches work with different types of tenants, how to document everything properly for court, and - crucially - how to recover money without creating enemies who'll trash your property on the way out.</p>
        <p className="mb-4">Our approach is simple: Professional, firm, but fair. We've found that most tenants will engage properly when contacted by a third party who knows what they're doing. Many rental arrears get resolved without involving lawyers or bailiffs - saving everyone time, money, and stress.</p>
        <p className="mb-4">When court action is necessary, we've already built the case properly from day one. No scrambling for evidence, no weak documentation that gets thrown out by magistrates.</p>
        <ul className="list-disc ml-8 mt-4 text-lg">
          <li>We recover money in 78% of cases we take on</li>
          <li>Average recovery is £2,100 per property</li>
          <li>Half our successful recoveries end with tenants staying and paying reliably going forward</li>
          <li>Over £180,000 recovered for Sheffield landlords this year alone</li>
        </ul>
      </div>
    </section>
    {/* TRUST SECTION */}
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-6">Why Sheffield Landlords Trust Our Arrears Recovery</h2>
        <h3 className="text-xl font-bold mt-6">We Know What Works</h3>
        <p>Been recovering rent arrears in Sheffield since 2008. We understand local magistrates' courts, know which solicitors are worth using, and have relationships with bailiffs who actually do their jobs properly. Experience counts when your money's on the line.</p>
        <h3 className="text-xl font-bold mt-6">Professional but Not Aggressive</h3>
        <p>Our team handles difficult conversations so you don't have to. We're firm with tenants who take liberties but fair with those facing genuine hardship. Many of our successful recoveries end with tenants staying and paying reliably going forward.</p>
        <h3 className="text-xl font-bold mt-6">Proper Documentation Every Time</h3>
        <p>Everything documented to court standard from day one. If we end up needing possession proceedings, the paperwork's already bulletproof. No last-minute scrambling for evidence that might not hold up under scrutiny.</p>
        <h3 className="text-xl font-bold mt-6">Results That Actually Matter</h3>
        <p>78% recovery rate on cases we take on. Average recovered amount is £2,100 per property. More importantly - half our successful recoveries result in tenants staying as reliable payers, protecting your long-term rental income.</p>
      </div>
    </section>
    {/* CLIENT TESTIMONIALS */}
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-6">What Our Clients Actually Say</h2>
        <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
          David, Crookes HMO owner: "They recovered £3,200 across two properties and both tenants are still paying reliably six months later. Professional approach that actually maintains relationships."
        </blockquote>
        <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
          Sarah, Sheffield portfolio: "Saved me months of stress and legal fees. Got £1,800 back through a payment plan I never would have thought to suggest myself."
        </blockquote>
        <blockquote className="border-l-4 border-[#EFBF04] pl-4 italic mb-4">
          James, first-time landlord: "Didn't know what I was doing when my tenant stopped paying. They handled everything and recovered most of what was owed without court action."
        </blockquote>
      </div>
    </section>
    {/* FINAL CTA SECTION */}
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0E5248] mb-6">Ready for Stress-Free Rent Arrears Management in Sheffield?</h2>
        <p className="mb-4">Look, dealing with rent arrears properly takes experience, patience, and knowledge of what actually works in Sheffield's courts. We've helped over 120 local landlords recover unpaid rent this year whilst maintaining their sanity and protecting their investments.</p>
        <p className="mb-4">Stop losing sleep over unpaid rent. Let us handle the professional recovery process whilst you focus on growing your portfolio.</p>
        <div className="text-center mt-8 mb-8">
          <a href="#" className="bg-[#EFBF04] text-[#0E5248] px-6 py-3 rounded font-bold mr-4">Book Your Free Consultation Today</a>
          <a href="#" className="bg-[#0E5248] text-[#EFBF04] px-6 py-3 rounded font-bold">Download Our Landlord Services Guide</a>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Call Karen directly: 0114 XXX XXXX<br />Email: info@bijougroup.co.uk<br />Managing Sheffield properties since 2008 • Over £180,000 recovered this year • NRLA Members</div>
      </div>
    </section>
  </>
);

export default RentArrearsContent;
