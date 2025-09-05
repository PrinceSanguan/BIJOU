import React from 'react';
import { SEOHead } from '../../../components/SEOHead';


const HmoBtlContent: React.FC = () => (
  <>
    <SEOHead
      title="HMO & BTL Management Sheffield | Complete Landlord Help"
      description="Bijou Group’s HMO & BTL Management in Sheffield provides expert management for Houses in Multiple Occupation and Buy-to-Let properties. We handle compliance, maintenance, and tenant sourcing for stress-free investment."
      canonical="https://bijougroup.co.uk/services/hmo-btl-management"
      og={{
        title: "Complete HMO & BTL Property Management in Sheffield",
        description: "Expert management for HMO and Buy-to-Let properties in Sheffield. Compliance, maintenance, and tenant sourcing handled for stress-free investment.",
        url: "https://bijougroup.co.uk/services/hmo-btl-management",
        image: "/images/servicesimg/hmo-btl.jpg"
      }}
      twitter={{
        title: "Complete HMO & BTL Property Management in Sheffield",
        description: "Expert management for HMO and Buy-to-Let properties in Sheffield. Compliance, maintenance, and tenant sourcing handled for stress-free investment."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are your management fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Between 8-12% of rental income depending on property type and services required. Most clients actually increase their net profit because we reduce void periods dramatically and solve problems before they become expensive disasters."
            }
          },
          {
            "@type": "Question",
            "name": "Do you specialize in student accommodation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We've worked with Sheffield students for over a decade. We understand academic calendars, group dynamics, deposit protection schemes, and how to handle the unique challenges of student lettings professionally."
            }
          }
        ]
      })}
    </script>

    {/* Hero Section */}
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0E5248] text-center mb-2 font-robot-serif drop-shadow-lg">
            Complete HMO & BTL Property Management in Sheffield
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#0E5248] mb-4">Stop losing sleep over problem tenants, compliance headaches, and empty properties</h2>
          <p className="mt-2 text-lg text-center text-[#0E5248]/90">We've been managing HMO and Buy-to-Let properties across Sheffield for over a decade. Our clients don't <span className="text-[#EFBF04] font-semibold">chase rent</span>, don't get <span className="text-[#EFBF04] font-semibold">3am maintenance calls</span>, and don't worry about council inspections. They just collect their <span className="text-[#EFBF04] font-semibold">monthly income</span>.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-2 w-full">
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center"
              aria-label="Book a Free Chat"
            >
              Book a Free Chat
            </a>
            <span className="font-bold text-[#EFBF04] w-full sm:w-auto max-w-xs text-center" aria-label="Call Karen: 0114 XXX XXXX">Call Karen: 0114 XXX XXXX</span>
          </div>
        </div>
      </div>
    </section>

    {/* The Drill Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">If You're a Sheffield Landlord, You Know The Drill...
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <ul className="list-disc ml-8 mt-4 text-lg text-[#0E5248]/90">
          <li>Your tenant stops paying rent. The boiler breaks down on a Sunday night. Sheffield Council wants another <span className="text-[#EFBF04] font-semibold">certificate</span>. The property sits empty for two months because you can't find decent tenants.</li>
          <li>Managing HMO and Buy-to-Let properties in Sheffield shouldn't feel like a second job. Between complex <span className="text-[#EFBF04] font-semibold">HMO licensing requirements</span>, competitive university rental markets, and Yorkshire's ever-changing property regulations - it's exhausting.</li>
          <li>That's exactly why we started this business. We eliminate the operational headaches so you can focus on what matters: <span className="text-[#EFBF04] font-semibold">growing your property portfolio</span> and enjoying the returns.</li>
        </ul>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Sheffield Landlords Choose Us
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">We Actually Know Sheffield Inside Out</h3>
        <p>We're not some national chain with a call center in Birmingham. We've been managing properties around Ecclesall Road since before it was trendy. We know which streets flood, which letting agents to avoid, and where students actually want to live.</p>
        <p>Been to every Sheffield Council meeting about HMO licensing changes. We know the inspectors by name. When new regulations drop, we're already implementing them for our clients. <span className="text-[#EFBF04] font-semibold">Local expertise</span> you can't get elsewhere.</p>
        <h3 className="text-xl font-bold mt-6">No More Compliance Nightmares</h3>
        <p>HMO licensing in Sheffield? <span className="text-[#EFBF04] font-semibold">We'll sort it</span>. Gas safety certificates? Done. Fire risk assessments? Handled. Electrical inspections? Already scheduled.</p>
        <p>You won't get nasty letters from Sheffield Council because we stay on top of everything. Our clients sleep well knowing their properties are fully compliant and protected from hefty fines. <span className="text-[#EFBF04] font-semibold">Zero compliance failures in over 10 years.</span></p>
        <h3 className="text-xl font-bold mt-6">Proper Local Maintenance Network</h3>
        <p>Sheffield tradesmen who actually turn up when they say they will. No more cowboys, no more waiting three weeks for a simple repair.</p>
        <p>Emergency call at midnight? Our trusted contractors are on it within hours. Routine maintenance? We schedule it before things break, protecting your property value and keeping tenants happy. <span className="text-[#EFBF04] font-semibold">Same-day response for emergencies, guaranteed.</span></p>
        <h3 className="text-xl font-bold mt-6">We Fill Empty Properties Fast</h3>
        <p>Empty properties cost you £100+ every single day. We typically get quality tenants placed within two weeks because we know exactly where to market and who to target.</p>
        <p>Student lets near University of Sheffield and Sheffield Hallam? We've got waiting lists. Professional couples in Kelham Island? We know precisely what they're looking for and how much they'll pay. <span className="text-[#EFBF04] font-semibold">Average void period: just 14 days.</span></p>
      </div>
    </section>

    {/* How We Transform Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">How We Transform Your Property Investment Experience
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <ol className="list-decimal ml-8 mt-4 text-lg text-[#0E5248]/90">
          <li><span className="text-[#EFBF04] font-semibold">Free Property Consultation (No Obligation):</span> We'll visit your property, walk through every room, spot potential issues, and give you brutally honest advice about rental potential. No hard sell, just straight talking about what works and what doesn't in today's Sheffield rental market.</li>
          <li><span className="text-[#EFBF04] font-semibold">Professional Tenant Sourcing & Screening:</span> Not just anyone with a pulse gets your keys. We verify income, check employment, contact previous landlords, and run comprehensive background checks. Takes about two weeks for most properties, but you get quality tenants who actually pay rent and look after your investment.</li>
          <li><span className="text-[#EFBF04] font-semibold">Complete Hands-Off Management:</span> Once tenants move in, we handle everything: rent collection, maintenance coordination, compliance monitoring, inspections, and tenant relations. You receive detailed monthly statements and only hear from us with good news.</li>
          <li><span className="text-[#EFBF04] font-semibold">Problem Resolution (So You Don't Have To):</span> Tenant disputes? We mediate. Emergency repairs? We coordinate. Council inspections? We're there. Legal issues? We've got trusted Sheffield solicitors on speed dial. You stay out of the drama completely.</li>
        </ol>
      </div>
    </section>

    {/* Specializations Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Our Sheffield Specializations
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">HMO Property Management Excellence</h3>
        <p>Managing a house full of students or young professionals requires special skills. Different personalities, shared kitchens, individual tenancy agreements, room-by-room lettings - it's genuinely complicated.</p>
        <p>We've mastered the art over 10+ years. We know how to maintain peace between housemates, enforce cleaning rotas, handle the inevitable relationship dramas, and keep everyone paying rent on time.</p>
        <p>Sheffield university properties are our specialty - we understand academic calendars, group bookings, and yes, how to handle end-of-tenancy cleaning (there's always mess).</p>
        <h3 className="text-xl font-bold mt-6">Buy-to-Let Property Management</h3>
        <p>From Victorian terraces in Crookes to modern city center apartments, we manage diverse BTL properties across Sheffield. Each area has unique characteristics, tenant expectations, and pricing strategies.</p>
        <p>We position your property competitively, target the right demographic, and maintain high standards that attract quality long-term tenants who treat your investment with respect.</p>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-10">Real Results From Real Sheffield Landlords
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <strong>Sarah, Ecclesall Road HMO Portfolio</strong><br />
            "I was managing four HMO properties myself and it was doing my head in. Constant tenant issues, compliance worries, properties sitting empty for months. These guys took over and everything just works now. Haven't had a void period in 18 months. Best decision I ever made."
            <span className="text-green-700 mt-2">Results: Zero void periods for 18 months, full compliance maintained, stress eliminated.</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <strong>James, First-Time HMO Investor</strong><br />
            "Bought my first HMO and had no clue about Sheffield Council licensing requirements. Karen walked me through everything, got all the paperwork sorted in six weeks, and found me brilliant tenants straight away. Couldn't have done it without their expertise."
            <span className="text-green-700 mt-2">Results: Full compliance achieved in 6 weeks, quality tenants placed immediately.</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <strong>Emma, London-Based Portfolio Owner</strong><br />
            "I've got twelve Sheffield properties and live in London. Used to get calls at all hours - broken boilers, rent arrears, tenant complaints. Now I just receive monthly statements. They handle everything locally, I just collect the income."
            <span className="text-green-700 mt-2">Results: Complete peace of mind for remote investor, consistent monthly income.</span>
          </blockquote>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border-2 border-[#EFBF04]/40">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Frequently Asked Questions
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="divide-y divide-[#EFBF04]/40">
          {[
            {
              q: 'What are your management fees?',
              a: 'Between 8-12% of rental income depending on property type and services required. Most clients actually increase their net profit because we reduce void periods dramatically and solve problems before they become expensive disasters.'
            },
            {
              q: 'How quickly do you fill vacant properties?',
              a: 'Usually 2-3 weeks for standard BTL properties. Individual HMO rooms often go within 7-14 days because we maintain strong relationships with local employers, universities, and have extensive tenant waiting lists.'
            },
            {
              q: 'Do you specialize in student accommodation?',
              a: 'Absolutely. We\'ve worked with Sheffield students for over a decade. We understand academic calendars, group dynamics, deposit protection schemes, and how to handle the unique challenges of student lettings professionally.'
            },
            {
              q: 'What makes you different from other Sheffield letting agents?',
              a: 'Three things: We\'re genuinely local (not a national chain), we\'re brutally honest about what works, and we specialize exclusively in HMO and BTL management. No sales, no property sourcing distractions - just expert management.'
            },
            {
              q: 'Can you help remote landlords effectively?',
              a: 'Half our clients live outside Sheffield. We provide comprehensive monthly reporting, handle all local interactions, and only contact you when absolutely necessary. Perfect for busy professionals or distant investors.'
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

    {/* CTA Section */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 border-2 border-[#EFBF04]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E5248] mb-2 drop-shadow-lg">Ready to Make Property Investment Actually Passive?
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90">Look, property investment in Sheffield should improve your life, not consume it. We've helped over 200 Sheffield landlords transform stressful property portfolios into genuine passive income streams.</p>
        <ul className="list-disc ml-8 mt-4 text-left inline-block text-[#0E5248]/90">
          <li>No more <span className="text-[#EFBF04] font-semibold">chasing rent payments</span></li>
          <li>No more <span className="text-[#EFBF04] font-semibold">emergency maintenance calls</span></li>
          <li>No more <span className="text-[#EFBF04] font-semibold">compliance worries</span></li>
          <li>No more <span className="text-[#EFBF04] font-semibold">difficult tenant conversations</span></li>
          <li>Just <span className="text-[#EFBF04] font-semibold">monthly income and peace of mind</span></li>
        </ul>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 mb-8 w-full">
          <a
            href="#"
            className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
          >
            Call Karen directly: 0114 XXX XXXX
          </a>
          <a
            href="#"
            className="w-full sm:w-auto max-w-xs bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
          >
            Book Online: Free Sheffield property consultation
          </a>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Managing Sheffield properties since 2013 • NRLA Members • Fully Insured & Bonded</div>
      </div>
    </section>
  </>
);

export default HmoBtlContent;
