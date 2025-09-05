import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const TenancyManagementContent: React.FC = () => (
  <>
    <SEOHead
      title="Tenancy Management Sheffield | Stress-Free Landlord Service"
      description="Bijou Group’s Tenancy Management in Sheffield provides end-to-end service for landlords—handling agreements, deposits, renewals, inspections, compliance, tenant relations, and reporting. Enjoy legal compliance, tenant satisfaction, and maximized returns with our professional, stress-free property management."
      canonical="https://bijougroup.co.uk/services/tenancy-management"
      og={{
        title: "Professional Tenancy Management for Today's Landlords",
  description: "End-to-end tenancy management for landlords in Sheffield. Bijou Group handles agreements, deposits, renewals, inspections, compliance, tenant relations, and reporting—professional, stress-free property management.",
        url: "https://bijougroup.co.uk/services/tenancy-management",
        image: "/images/servicesimg/tenancy-management.jpg"
      }}
      twitter={{
        title: "Professional Tenancy Management for Today's Landlords",
  description: "End-to-end tenancy management for landlords in Sheffield. Bijou Group handles agreements, deposits, renewals, inspections, compliance, tenant relations, and reporting—professional, stress-free property management."
      }}
    />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does your tenancy management service include?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Complete end-to-end management covering agreements, deposits, inspections, renewals, tenant communications, maintenance coordination, and detailed reporting."
            }
          },
          {
            "@type": "Question",
            "name": "How do you ensure legal compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We stay current with all landlord legislation, handle deposit registration with approved schemes, coordinate safety certificates, and maintain detailed records."
            }
          }
        ]
      })}
    </script>
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-3xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0E5248] text-center mb-2 font-robot-serif drop-shadow-lg">
            Professional Tenancy Management for Today's Landlords
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-center text-[#0E5248] mb-4">From tenancy agreements and deposits to renewals and inspections, we ensure your tenancies are <span className='text-[#EFBF04] font-semibold'>compliant</span> and professionally managed.</h2>
          <p className="mt-2 text-lg text-center text-[#0E5248]/90">Running rental properties shouldn't feel like a second job. Between drafting agreements, handling deposits, coordinating inspections, and managing renewals, many landlords find themselves <span className='text-[#EFBF04] font-semibold'>overwhelmed</span> by the administrative demands of modern property management.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 mb-2 w-full">
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center mb-2 sm:mb-0"
            >
              Request Your Free Consultation
            </a>
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04] text-center"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
    <div className="w-full h-8 md:h-12 bg-white" />
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Landlords Trust Our Management Services
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Complete Compliance Confidence</h3>
        <p>Stay ahead of changing regulations without the headache. We handle all legal requirements, from deposit registration to safety certificates, ensuring your properties meet every <span className='text-[#EFBF04] font-semibold'>standard</span>.</p>
        <h3 className="text-xl font-bold mt-6">Professional Tenant Relations</h3>
        <p>No more late-night calls or weekend disruptions. Our team manages all tenant communications, requests, and concerns through proper channels, maintaining positive relationships while protecting your <span className='text-[#EFBF04] font-semibold'>interests</span>.</p>
        <h3 className="text-xl font-bold mt-6">Detailed Reporting & Transparency</h3>
        <p>Know exactly what's happening with your properties. Regular updates keep you informed about inspections, renewals, maintenance, and financial performance without overwhelming you with unnecessary details.</p>
        <h3 className="text-xl font-bold mt-6">Maximized Investment Returns</h3>
        <p>Our management process is designed to protect your investment and maximize your <span className='text-[#EFBF04] font-semibold'>rental income</span>.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Landlords Trust Our Management Services
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Complete Compliance Confidence</h3>
        <p>Stay ahead of changing regulations without the headache. We handle all legal requirements, from deposit registration to safety certificates, ensuring your properties meet every <span className='text-[#EFBF04] font-semibold'>standard</span>.</p>
        <h3 className="text-xl font-bold mt-6">Professional Tenant Relations</h3>
        <p>No more late-night calls or weekend disruptions. Our team manages all tenant communications, requests, and concerns through proper channels, maintaining positive relationships while protecting your <span className='text-[#EFBF04] font-semibold'>interests</span>.</p>
        <h3 className="text-xl font-bold mt-6">Detailed Reporting & Transparency</h3>
        <p>Know exactly what's happening with your properties. Regular updates keep you informed about inspections, renewals, maintenance, and financial performance without overwhelming you with unnecessary details.</p>
        <h3 className="text-xl font-bold mt-6">Maximized Investment Returns</h3>
        <p>Our management process is designed to protect your investment and maximize your <span className='text-[#EFBF04] font-semibold'>rental income</span>.</p>
      </div>
    </section>
    
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Our Comprehensive Management Process
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Agreement Setup</h3>
        <p>We prepare robust tenancy agreements tailored to your property and circumstances. Every document is legally compliant and clearly structured to protect both parties while establishing clear expectations from the start.</p>
        <h3 className="text-xl font-bold mt-6">Deposit Handling</h3>
        <p>Professional deposit management including registration with approved protection schemes, detailed inventory creation, and fair resolution of any end-of-tenancy disputes that may arise.</p>
        <h3 className="text-xl font-bold mt-6">Ongoing Support</h3>
        <p>Complete rent collection, maintenance coordination, and tenant relationship management. We handle the day-to-day operations while keeping you informed of anything requiring your attention.</p>
        <h3 className="text-xl font-bold mt-6">Regular Inspections</h3>
        <p>Scheduled property visits to assess condition, identify maintenance needs, and ensure tenancy terms are being met. Every inspection includes detailed reports with recommendations for improvements.</p>
        <h3 className="text-xl font-bold mt-6">Renewal Management</h3>
        <p>Smooth tenancy extensions and rent reviews that maintain occupancy while ensuring market-appropriate returns. We handle negotiations and paperwork to minimize disruption.</p>
      </div>
    </section>
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Specialized Service Areas
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Houses in Multiple Occupation (HMO)</h3>
        <p>Complex multi-tenant arrangements require <span className='text-[#EFBF04] font-semibold'>specialized knowledge</span>. We manage individual agreements, coordinate shared facilities, ensure licensing compliance, and handle the unique challenges of multi-occupancy properties.</p>
        <h3 className="text-xl font-bold mt-6">Buy-to-Let Properties</h3>
        <p>Long-term investment success depends on stable tenancies and professional management. Our approach focuses on tenant retention, property maintenance, and strategic rent optimization to maximize your <span className='text-[#EFBF04] font-semibold'>returns</span>.</p>
        <h3 className="text-xl font-bold mt-6">Portfolio Management</h3>
        <p>Whether you own two properties or twenty, our scalable systems provide consistent professional management across your entire portfolio while maintaining personal attention to each property's specific needs.</p>
      </div>
    </section>
    <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2 mt-10">Client Experiences
      <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
    </h2>
    <div className="mt-6 grid md:grid-cols-3 gap-8">
      <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
        "The difference has been remarkable. What used to take hours of my time each week is now handled professionally and efficiently. I actually enjoy being a landlord again."
      </blockquote>
      <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
        "Their attention to detail during inspections and renewals has prevented several potential issues. My properties are in better condition now than when I managed them myself."
      </blockquote>
      <blockquote className="bg-white rounded-xl shadow-md border-2 border-[#EFBF04] pl-6 pr-4 py-6 mb-4 flex flex-col gap-2 text-base text-[#0E5248]">
        "Working with landlords in Sheffield for years, they understand the local market perfectly. My rental yields have improved while my stress levels have dropped significantly."
      </blockquote>
    </div>
    <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2 mt-10">Common Questions Answered
      <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
    </h2>
    <div className="mt-6 bg-white rounded-xl shadow-md p-8 border-2 border-[#EFBF04]/40">
      <h3 className="text-xl font-bold mt-4">What does your tenancy management service include?</h3>
      <p>Complete end-to-end management covering agreements, deposits, inspections, renewals, tenant communications, maintenance coordination, and detailed reporting. Essentially everything needed to run your rental property <span className='text-[#EFBF04] font-semibold'>professionally</span>.</p>
      <h3 className="text-xl font-bold mt-4">How do you ensure legal compliance?</h3>
      <p>We stay current with all landlord legislation, handle deposit registration with approved schemes, coordinate safety certificates, and maintain detailed records. Our systems are designed to prevent <span className='text-[#EFBF04] font-semibold'>compliance issues</span> before they occur.</p>
      <h3 className="text-xl font-bold mt-4">Can you manage multiple properties effectively?</h3>
      <p>Absolutely. Our systems scale efficiently whether you have one property or dozens. Each property receives individual attention while benefiting from our streamlined processes and bulk purchasing power.</p>
      <h3 className="text-xl font-bold mt-4">How often do you inspect properties?</h3>
      <p>Standard quarterly inspections with detailed photographic reports. Additional visits are arranged as needed for maintenance issues, tenant concerns, or specific circumstances requiring attention.</p>
      <h3 className="text-xl font-bold mt-4">What happens when tenancies end?</h3>
      <p>We handle complete checkout procedures including inventory comparison, deposit assessment, any necessary negotiations, property preparation for new tenants, and marketing to minimize <span className='text-[#EFBF04] font-semibold'>void periods</span>.</p>
    </div>
    <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2 mt-10">Transform Your Property Management Experience
      <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
    </h2>
    <p className="mt-4 text-lg text-center">Stop juggling <span className='text-[#EFBF04] font-semibold'>compliance requirements</span>, tenant issues, and endless paperwork. Let our experienced team handle every aspect of your tenancy management while you focus on what matters most to you.</p>
    <p className="mt-4 text-lg text-center">Professional management that protects your investment, maintains your properties, and delivers <span className='text-[#EFBF04] font-semibold'>peace of mind</span>. Based in Sheffield with expertise built through years of helping landlords achieve better results with less stress.</p>
    <div className="text-center mt-8 mb-8">
      <a href="#" className="bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04]">Book Your Free Consultation Today</a>
    </div>
  </>
);

export default TenancyManagementContent;
