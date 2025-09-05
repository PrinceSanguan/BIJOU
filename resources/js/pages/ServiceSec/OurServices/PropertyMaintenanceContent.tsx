import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const PropertyMaintenanceContent: React.FC = () => (
  <>
    <SEOHead
      title="Property Maintenance Sheffield | Fast Repairs & Compliance"
      description="Bijou Group’s Property Maintenance in Sheffield delivers rapid response repairs, vetted tradespeople, and full compliance for landlords. We keep your rentals safe, legal, and in top condition year-round with proactive care and 24/7 emergency support."
      canonical="https://bijougroup.co.uk/services/property-maintenance"
      og={{
        title: "Property Maintenance & Repairs in Sheffield",
  description: "Professional property maintenance and repairs for Sheffield landlords. Bijou Group delivers rapid response, vetted tradespeople, full compliance, and proactive care to keep your rentals safe, legal, and in top condition year-round.",
        url: "https://bijougroup.co.uk/services/property-maintenance",
        image: "/images/servicesimg/property-maintenance.jpg"
      }}
      twitter={{
        title: "Property Maintenance & Repairs in Sheffield",
  description: "Professional property maintenance and repairs for Sheffield landlords. Bijou Group delivers rapid response, vetted tradespeople, full compliance, and proactive care to keep your rentals safe, legal, and in top condition year-round."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly do you respond to emergency repairs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our 24/7 emergency hotline ensures response within 2 hours for urgent issues like heating failures, water leaks, or electrical faults. Non-emergency repairs are typically scheduled within 24-48 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide maintenance services for HMO properties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialise in HMO maintenance including fire safety systems, electrical testing, gas safety checks, and licensing compliance."
            }
          }
        ]
      })}
    </script>
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0E5248] text-center mb-2 font-serif drop-shadow-lg" aria-label="Property Maintenance & Repairs in Sheffield">
            Property Maintenance & Repairs in Sheffield
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-2xl font-semibold text-center text-[#0E5248] mb-4">Keep your property safe, compliant, and in top condition with our vetted network of <span className='text-[#EFBF04] font-semibold'>professional tradespeople</span>.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-2 w-full">
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center mb-2 sm:mb-0"
            >
              Book Free Property Assessment
            </a>
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center"
            >
              Report a Repair Today
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full h-8 md:h-12 bg-white" />
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Don't Let Property Problems Become Expensive Disasters
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mt-4 text-lg text-center">Property maintenance issues escalate quickly without professional attention. Delayed repairs lead to tenant complaints, costly emergency call-outs, and potential legal compliance breaches. A simple leak can cause structural damage costing <span className='text-[#EFBF04] font-semibold'>thousands</span>, whilst electrical faults create serious safety risks.</p>
        <p className="mt-4 text-lg text-center">Sheffield landlords face particular challenges with older Victorian properties requiring frequent attention and HMO licensing demanding strict compliance standards.</p>
        <p className="mt-4 text-lg text-center">Our comprehensive property maintenance service eliminates these risks through proactive care and rapid response systems. We maintain your property's condition, ensure legal compliance, and keep tenants satisfied through professional, reliable service that protects your investment long-term.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Our Professional Maintenance & Repair Process
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">24/7 Emergency Response System</h3>
        <p>Urgent issues like heating failures, water leaks, electrical faults, and security problems receive immediate attention. Our emergency hotline connects you with qualified tradespeople within 2 hours, preventing minor problems becoming major disasters that could cost <span className='text-[#EFBF04] font-semibold'>thousands in damages</span>.</p>
        <h3 className="text-xl font-bold mt-6">Scheduled Routine Maintenance Checks</h3>
        <p>Proactive inspections of boilers, electrical systems, plumbing, and safety equipment identify potential issues before they become emergencies. Annual gas safety checks, electrical testing, and HMO compliance inspections ensure your property meets all legal requirements whilst maintaining optimal condition.</p>
        <h3 className="text-xl font-bold mt-6">Vetted Professional Tradespeople Network</h3>
        <p>Every tradesperson in our network undergoes rigorous vetting including qualifications verification, insurance confirmation, and performance monitoring. Only Gas Safe registered engineers, NICEIC approved electricians, and fully qualified professionals work on your property, ensuring quality and compliance.</p>
        <h3 className="text-xl font-bold mt-6">Comprehensive Digital Reporting</h3>
        <p>After every job, you receive detailed digital reports including photographs, work completed, materials used, and recommendations for future maintenance. This transparent documentation helps with warranty claims, insurance, and provides complete maintenance history for your property records.</p>
        <h3 className="text-xl font-bold mt-6">Full Legal Compliance Assurance</h3>
        <p>All repairs and maintenance work adheres to current UK property standards, Sheffield council requirements, and HMO licensing conditions. We ensure gas safety certificates, electrical inspections, and fire safety measures meet legal obligations, protecting you from potential fines or legal issues.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Choose Our Service
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Complete Peace of Mind</h3>
        <p>Know your property remains in safe, compliant condition with professional oversight. Regular maintenance prevents unexpected breakdowns whilst ensuring tenant safety and satisfaction. Sleep better knowing qualified professionals monitor your investment's condition continuously.</p>
        <h3 className="text-xl font-bold mt-6">Maximum Tenant Satisfaction</h3>
        <p>Quick repair responses reduce complaints and improve tenant retention significantly. Happy tenants stay longer, provide better references, and treat properties with more respect. Our professional service maintains positive landlord-tenant relationships whilst protecting your rental income.</p>
        <h3 className="text-xl font-bold mt-6">Enhanced Property Longevity</h3>
        <p>Preventative maintenance extends the lifespan of heating systems, electrical installations, plumbing, and structural elements. Regular professional care prevents deterioration, maintains property values, and reduces long-term replacement costs significantly compared to reactive maintenance approaches.</p>
        <h3 className="text-xl font-bold mt-6">Complete Financial Control</h3>
        <p>Transparent pricing, detailed quotes, and budget planning tools help control maintenance costs effectively. Prevent expensive emergency repairs through scheduled maintenance whilst avoiding legal fines for non-compliance. Our service pays for itself through problem prevention.</p>
        <h3 className="text-xl font-bold mt-6">Scalable Multi-Property Management</h3>
        <p>Perfect for HMO operators and portfolio landlords managing multiple properties. Centralised maintenance coordination, bulk purchasing power, and streamlined processes reduce costs whilst ensuring consistent standards across your entire property portfolio through professional management.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Sheffield Property Maintenance Expertise
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p>Operating in Sheffield for over 8 years, we understand local property challenges from Victorian terraces to modern HMO conversions. Our extensive knowledge covers Sheffield City Council licensing requirements, typical property issues in different areas, and local supplier networks for rapid response.</p>
        <p>We maintain properties across all Sheffield areas: student accommodations in Broomhill requiring frequent maintenance, professional HMOs in Crookes needing compliance oversight, and family rentals in Ecclesall requiring careful tenant consideration. Each property type demands different maintenance approaches and priorities.</p>
        <p className="mt-4 text-lg text-center">Local Insight: Over <span className='text-[#EFBF04] font-semibold'>80% of Sheffield landlords</span> cite maintenance delays as the primary source of tenant complaints and void periods. Our rapid response system prevents these issues, maintaining tenant satisfaction and rental income continuity.</p>
        <p className="mt-4 text-lg text-center">Proven Results: In 2024, we reduced average emergency call-outs by <span className='text-[#EFBF04] font-semibold'>50%</span> for our managed properties through proactive maintenance scheduling and professional oversight.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-10">Trusted by Sheffield's Professional Landlords
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <span className='text-[#EFBF04] font-semibold'>"Their emergency response is incredible. When our HMO lost heating on Christmas Eve, they had an engineer there within 90 minutes. Tenants were delighted with the professional service."</span><br />— Rachel Thompson, 6-Property HMO Portfolio
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <span className='text-[#EFBF04] font-semibold'>"The routine maintenance programme identified a potential boiler issue before it failed. Saved us hundreds in emergency repair costs and prevented tenant disruption completely."</span><br />— Mark Stevens, Crookes Landlord
          </blockquote>
          <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
            <span className='text-[#EFBF04] font-semibold'>"Professional, reliable, and transparent pricing. Their digital reports are fantastic for insurance claims and maintaining property records. Highly recommended for serious landlords."</span><br />— Lisa Chen, Property Investor
          </blockquote>
        </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Professional Credentials: Gas Safe registered engineers | NICEIC approved electricians | SafeAgent member | Fully insured tradespeople | 8+ years Sheffield experience</div>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border-2 border-[#EFBF04]/40">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Property Maintenance FAQ
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <div className="mt-6">
          <h3 className="text-xl font-bold mt-4">How quickly do you respond to emergency repairs?</h3>
          <p>Our 24/7 emergency hotline ensures response within <span className='text-[#EFBF04] font-semibold'>2 hours</span> for urgent issues like heating failures, water leaks, or electrical faults. Non-emergency repairs are typically scheduled within 24-48 hours depending on complexity and parts availability.</p>
          <h3 className="text-xl font-bold mt-4">Do you provide maintenance services for HMO properties?</h3>
          <p>Yes, we specialise in HMO maintenance including fire safety systems, electrical testing, gas safety checks, and licensing compliance. Our team understands Sheffield's HMO requirements and ensures all properties meet council standards completely.</p>
          <h3 className="text-xl font-bold mt-4">Are all your tradespeople qualified and fully insured?</h3>
          <p>Absolutely. Every tradesperson undergoes rigorous vetting including qualification verification, insurance confirmation, and ongoing performance monitoring. Only Gas Safe, NICEIC, and professionally qualified tradespeople work on our clients' properties.</p>
          <h3 className="text-xl font-bold mt-4">How is maintenance work documented and reported?</h3>
          <p>You receive comprehensive digital reports after every job including photographs, work completed, materials used, costs, and future recommendations. All documentation is accessible through our landlord portal for easy record-keeping and warranty claims.</p>
          <h3 className="text-xl font-bold mt-4">Do you ensure compliance with UK property safety standards?</h3>
          <p>Yes, all maintenance work adheres to current UK building regulations, safety standards, and Sheffield council requirements. We handle gas safety certificates, electrical inspections, fire safety compliance, and HMO licensing requirements professionally and reliably.</p>
        </div>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 border-2 border-[#EFBF04]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E5248] mb-2 drop-shadow-lg">Protect Your Investment with Professional Property Care
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90">Don't wait for small problems to become expensive disasters. Our comprehensive maintenance service keeps your property safe, compliant, and in excellent condition whilst ensuring tenant satisfaction and protecting your investment value.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90">Join <span className='text-[#EFBF04] font-semibold'>200+ Sheffield landlords</span> who trust us with their property maintenance. Book your assessment today.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 mb-8">
          <a href="#" className="bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04]">Book Property Assessment</a>
          <span className="font-bold ml-4 self-center">Emergency: 07XXX XXXXXX</span>
          <span className="font-bold ml-4 self-center">Email: maintenance@bijourelocation.co.uk</span>
        </div>
      </div>
    </section>
  </>
);

export default PropertyMaintenanceContent;
