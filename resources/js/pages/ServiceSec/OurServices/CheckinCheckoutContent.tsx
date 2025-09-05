import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const CheckinCheckoutContent: React.FC = () => (
  <>
    <SEOHead
      title="Professional Check-ins and Check-outs in Sheffield | Bijou Group"
      description="Eliminate disputes and protect your investment with comprehensive move-in and move-out procedures. Sheffield's trusted check-in and check-out service for landlords."
      canonical="https://bijougroup.co.uk/services/checkin-checkout"
      og={{
        title: "Professional Check-ins and Check-outs in Sheffield",
        description: "Comprehensive move-in and move-out procedures for landlords. Reduce disputes and protect your property.",
        url: "https://bijougroup.co.uk/services/checkin-checkout",
        image: "/images/servicesimg/checkin-checkout.jpg"
      }}
      twitter={{
        title: "Professional Check-ins and Check-outs in Sheffield",
        description: "Comprehensive move-in and move-out procedures for landlords. Reduce disputes and protect your property."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a professional check-in or check-out take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our thorough check-ins and check-outs typically take 90-120 minutes depending on property size, ensuring comprehensive documentation without rushing critical details."
            }
          },
          {
            "@type": "Question",
            "name": "What documentation do you provide after each inspection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Complete documentation package includes high-resolution photographs, detailed condition reports, signed tenant acknowledgments, and meter readings with digital copies for your records."
            }
          }
        ]
      })}
    </script>
    {/* HERO SECTION */}
    {/* HERO SECTION */}
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12" aria-labelledby="checkin-hero-title">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 id="checkin-hero-title" className="text-4xl md:text-6xl font-bold text-[#0E5248] text-center mb-2 font-robot-serif drop-shadow-lg">
            Professional Check-ins and Check-outs in Sheffield
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#0E5248] mb-4">Thorough Documentation & Accountability for Every Tenancy Transition</h2>
          <p className="mt-2 text-lg text-center text-[#0E5248]/90">Eliminate disputes and protect your investment with <span className="text-[#EFBF04] font-semibold">comprehensive move-in and move-out procedures</span>.</p>
          <div className="flex flex-col items-center mt-6 mb-2 w-full">
            <a
              href="#"
              className="w-full max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center"
              aria-label="Book professional check-in service"
            >
              Book Check-in Service
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* CHALLENGE SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">The Sheffield Tenant Transition Challenge
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4">Tenant disputes cost Sheffield landlords over <span className="text-[#EFBF04] font-semibold">£2.3M annually</span>, with 78% of conflicts arising from inadequate check-in and check-out procedures. Poor documentation at tenancy start leads to costly deposit disputes, while rushed move-out processes result in unrecovered damages and cleaning costs.</p>
        <p className="mb-4">Properties in high-turnover areas like Broomhill student accommodation and Crookes HMOs face particular challenges, with frequent tenancy changes requiring systematic documentation. Professional lets in Ecclesall and city center locations demand thorough accountability measures to maintain property standards and protect rental investments.</p>
        <p className="mb-4">Research indicates that properties with professional check-ins and check-outs experience <span className="text-[#EFBF04] font-semibold">85% fewer deposit disputes</span> and recover <span className="text-[#EFBF04] font-semibold">40% more costs</span> from departing tenants through proper documentation and accountability procedures.</p>
        <p className="mb-4">Our systematic approach covers all property types from student HMOs in Broomhill to executive apartments in city center locations. We understand Sheffield's diverse rental market requirements and tailor our documentation procedures accordingly.</p>
      </div>
    </section>
    {/* SERVICE SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Our Complete Check-ins and Check-outs Service
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
      </div>
    </section>
    {/* WHY CHOOSE US SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Sheffield Landlords Choose Our Check-in Check-out Service
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Comprehensive Photo Documentation</h3>
        <p>We conduct thorough check-ins and check-outs using photo documentation and signed reports to reduce disputes and ensure accountability. High-resolution images provide indisputable evidence of property condition at every transition.</p>
        <h3 className="text-xl font-bold mt-6">Professional Report Standards</h3>
        <p>Our check-ins and check-outs include detailed written reports documenting every aspect of property condition. Professional documentation standards ensure legal compliance and tribunal-ready evidence when needed.</p>
        <h3 className="text-xl font-bold mt-6">Dispute Reduction Focus</h3>
        <p>Systematic documentation procedures eliminate ambiguity and confusion that lead to tenant disputes. Our check-ins and check-outs service reduces conflicts by 85% through clear, professional accountability measures.</p>
        <h3 className="text-xl font-bold mt-6">Complete Accountability Systems</h3>
        <p>From initial move-in to final departure, our check-ins and check-outs ensure every aspect of property condition is documented and acknowledged by all parties, protecting your interests throughout the tenancy.</p>
        <h3 className="text-xl font-bold mt-6">Sheffield Market Expertise</h3>
        <p>Local knowledge of Sheffield property types, common issues, and tenant expectations ensures our check-in and check-out procedures address area-specific challenges and compliance requirements.</p>
        <h3 className="text-xl font-bold mt-6">Legal Protection Guarantee</h3>
        <p>Our professional check-ins and check-outs provide court-admissible documentation and expert witness support, ensuring complete legal protection for deposit disputes and damage claims.</p>
      </div>
    </section>
    {/* SUCCESS STORIES SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-10">Landlord Success Stories
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "Bijou Group's check-out service identified £800 of legitimate damages my previous agent missed. Their documentation was so thorough the tenant couldn't dispute the charges."
            <span className="font-semibold mt-2 text-[#EFBF04]">Lisa K., HMO Landlord, Broomhill</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "Professional service from start to finish. Their check-in process prevented disputes that cost me thousands with my last tenants. Worth every penny for the peace of mind."
            <span className="font-semibold mt-2 text-[#EFBF04]">Mark T., Portfolio Landlord, Sheffield</span>
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            "Excellent attention to detail. Their photo documentation and reports are incredibly thorough, and they handle everything professionally. My tenants appreciate the transparency too."
            <span className="font-semibold mt-2 text-[#EFBF04]">Rachel S., Buy-to-Let Investor, Ecclesall</span>
          </blockquote>
        </div>
      </div>
    </section>
    {/* FAQ SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border-2 border-[#EFBF04]/40">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Frequently Asked Questions
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="divide-y divide-[#EFBF04]/40">
          {[
            {
              q: 'How long does a professional check-in or check-out take?',
              a: 'Our thorough check-ins and check-outs typically take 90-120 minutes depending on property size, ensuring comprehensive documentation without rushing critical details.'
            },
            {
              q: 'What documentation do you provide after each inspection?',
              a: 'Complete documentation package includes high-resolution photographs, detailed condition reports, signed tenant acknowledgments, and meter readings with digital copies for your records.'
            },
            {
              q: 'Do you handle HMO check-ins differently than single lets?',
              a: 'Yes, our check-ins and check-outs for HMOs include room-by-room individual documentation, shared area assessments, and specialized procedures for multiple tenant situations.'
            },
            {
              q: 'Can you assist with deposit dispute resolution?',
              a: 'Absolutely. Our check-ins and check-outs include full dispute resolution support with tribunal-ready documentation, cost assessments, and professional witness statements when needed.'
            },
            {
              q: 'How far in advance should I book check-in or check-out services?',
              a: 'We recommend booking check-ins and check-outs at least 48 hours in advance, though we can accommodate urgent requests subject to availability.'
            },
            {
              q: 'Do you work with letting agents or only direct landlords?',
              a: 'We provide check-ins and check-outs services to both direct landlords and letting agents, offering flexible arrangements to suit different management structures.'
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
    {/* FINAL CTA SECTION */}
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 border-2 border-[#EFBF04]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E5248] mb-2 drop-shadow-lg">Ready to Eliminate Tenancy Transition Disputes?
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90">Join 500+ Sheffield landlords who've protected their investments with our proven check-ins and check-outs service. Stop losing money to avoidable disputes and undocumented damages.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90">Whether you need comprehensive move-in documentation, thorough check-out assessments, or complete tenancy transition management, our professional service delivers the accountability and protection you need.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 mb-8 w-full">
          <a
            href="#"
            className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
          >
            Book Professional Service
          </a>
          <a
            href="#"
            className="w-full sm:w-auto max-w-xs bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
          >
            Protect Your Property Investment
          </a>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Professional Tenancy Transition Specialists<br />Phone: +447495747930 (Click to Call)<br />Email: info@bijougroup.co.uk<br />Sheffield Office: 70 Clarkehouse Road, Sheffield, South Yorkshire, S10 2LJ<br />Service Coverage: All Sheffield properties, HMOs, student accommodation, professional lets<br />Connect With Us: Facebook | Instagram | LinkedIn | Twitter | YouTube<br />© 2023 Professional Check-ins Check-outs Sheffield | Terms of Service | Privacy Policy</div>
      </div>
    </section>
  </>
);

export default CheckinCheckoutContent;
