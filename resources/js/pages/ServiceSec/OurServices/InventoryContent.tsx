import React from 'react';
import { SEOHead } from '../../../components/SEOHead';

const InventoryContent: React.FC = () => (
  <>
    <SEOHead
      title="Inventories Sheffield | Photographic Evidence & Reports"
      description="Bijou Group’s Inventories service in Sheffield protects your deposits and avoids costly disputes with court-ready photographic evidence. We provide detailed reports, expert documentation, and legally compliant inventories for stress-free property management. Safeguard your rental investment with our professional inventory solutions."
      canonical="https://bijougroup.co.uk/services/inventories-photographic-evidence"
      og={{
        title: "Inventories with Photographic Evidence | Bijou Group",
  description: "Protect your deposits and avoid costly disputes with court-ready inventories in Sheffield. Bijou Group provides detailed photographic evidence, comprehensive reports, and expert documentation for stress-free, legally compliant property management.",
        url: "https://bijougroup.co.uk/services/inventories-photographic-evidence",
        image: "/images/servicesimg/inventories.jpg"
      }}
      twitter={{
        title: "Inventories with Photographic Evidence | Bijou Group",
  description: "Protect your deposits and avoid costly disputes with court-ready inventories in Sheffield. Bijou Group provides detailed photographic evidence, comprehensive reports, and expert documentation for stress-free, legally compliant property management."
      }}
    />
    {/* HERO SECTION */}
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-white py-12">
      <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-10 border border-[#EFBF04]/40">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0E5248] text-center mb-2 font-robot-serif drop-shadow-lg">
            Inventories with Photographic Evidence in Sheffield
            <span className="block w-16 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
          </h1>
          <h2 className="text-2xl font-semibold text-center text-[#0E5248] mb-4">Our <span className='text-[#EFBF04] font-semibold'>Services</span></h2>
          <p className="mt-4 text-lg text-center">We create professional inventories with photographic evidence providing vital protection against deposit disputes for Sheffield landlords.</p>
        </div>
      </div>
    </section>
    <div className="w-full h-8 md:h-12 bg-white" />
    {/* PRIMARY SERVICE SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Professional Property Inventories with Photographic Evidence
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4">Deposit disputes drain thousands from landlords annually due to inadequate property documentation. Research shows that <span className='text-[#EFBF04] font-semibold'>60% of deposit claims fail</span> because landlords cannot provide sufficient evidence of property condition at tenancy commencement.</p>
        <p className="mb-4">Our specialized inventories with photographic evidence service eliminates this risk completely. We document every surface, fixture, and furnishing with high-resolution photography paired with detailed written descriptions, creating an indisputable record of your property's condition.</p>
        <p className="mb-4">Each inventory includes room-by-room photographic documentation, precise condition assessments, and detailed item descriptions. Our inventories with photographic evidence provide court-admissible documentation that protects your deposit claims while maintaining professional tenant relationships through transparent property management practices.</p>
      </div>
    </section>
    {/* WHY CHOOSE US SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 border border-[#EFBF04]/30">
        <h2 className="text-3xl font-bold text-[#0E5248] text-center mb-2">Why Property Owners Choose Our Photographic Inventory Service
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <h3 className="text-xl font-bold mt-6">Guaranteed Evidence Protection</h3>
        <p>Our comprehensive inventories with photographic evidence provide undeniable proof of property condition. Every surface, appliance, and furnishing is professionally documented with detailed photography and written descriptions that eliminate deposit dispute uncertainties.</p>
        <h3 className="text-xl font-bold mt-6">Complete Documentation Coverage</h3>
        <p>From structural elements to decorative details, our thorough photographic inventories capture everything. We ensure no aspect of your property goes undocumented, providing complete protection through our detailed inventories with photographic evidence process.</p>
        <h3 className="text-xl font-bold mt-6">Professional Photography Standards</h3>
        <p>Our experienced inventory specialists use professional equipment to create high-quality photographic evidence. Each image meets legal documentation standards while our detailed descriptions complement the visual evidence for maximum protection.</p>
        <h3 className="text-xl font-bold mt-6">Full Dispute Resolution Support</h3>
        <p>When deposit disputes arise, our inventories with photographic evidence provide compelling documentation for deposit protection schemes. Our professional reports streamline the resolution process and significantly increase successful claim rates.</p>
      </div>
    </section>
    {/* FINAL CTA SECTION */}
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 border-2 border-[#EFBF04]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0E5248] mb-2 drop-shadow-lg">Ready for Complete Property Protection?
          <span className="block w-12 h-1 bg-[#EFBF04] mx-auto mt-3 rounded-full"></span>
        </h2>
        <p className="mb-4 text-lg text-[#0E5248]/90">Protect your investment with professional inventories with photographic evidence that eliminate deposit disputes and provide peace of mind.</p>
        <p className="mb-4 text-lg text-[#0E5248]/90">Whether you need comprehensive property documentation, ongoing inventory management, or professional photographic evidence services, our expert team delivers the protection you need.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 mb-8">
          <a href="#" className="bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04]">Secure Your Property Investment</a>
          <a href="#" className="bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 border-2 border-[#EFBF04]">Get Professional Inventory Service</a>
        </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 mt-8 mb-8 w-full">
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#EFBF04] hover:bg-[#FFD700] text-[#0E5248] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
            >
              Secure Your Property Investment
            </a>
            <a
              href="#"
              className="w-full sm:w-auto max-w-xs bg-[#0E5248] hover:bg-[#0E5248]/90 text-[#EFBF04] px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg transition-all duration-200 text-center"
            >
              Get Professional Inventory Service
            </a>
          </div>
        <div className="text-center text-sm text-gray-500 mt-4 mb-8">Professional Inventory Services<br />Phone: +447495747930<br />Email: info@bijougroup.co.uk<br />Address: 70 Clarkehouse Road, Sheffield, South Yorkshire, England, S10 2LJ<br />Connect With Us: Facebook | Instagram | LinkedIn | Twitter | YouTube<br />© 2023 Professional Property Documentation Services | Terms of Service | Privacy Policy</div>
      </div>
    </section>
  </>
);

export default InventoryContent;
