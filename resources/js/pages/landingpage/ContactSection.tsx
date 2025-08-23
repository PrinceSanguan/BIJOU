import React, { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    interests: [] as string[],
    message: ''
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownSelect = (service: string) => {
    setFormData(prev => {
      const interests = prev.interests.includes(service)
        ? prev.interests.filter(i => i !== service)
        : [...prev.interests, service];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual submission logic here
  };

  return (
    <section
      className="relative py-10 sm:py-16 px-2 sm:px-6 min-h-[60vh] bg-white flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#fff' }}
    >
  <div className="relative z-10 w-full max-w-[1700px] mx-auto flex justify-center items-center">
  <div className="w-full bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row items-stretch min-h-[800px] p-6" style={{ backgroundColor: '#fff', boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12), inset 0 0 8px 1px rgba(0,0,0,0.10)' }}>
          {/* Map side - always first */}
          <div className="order-1 md:order-none relative w-full md:w-1/2 h-[320px] md:h-auto flex items-end">
            <div className="w-full h-full overflow-hidden flex items-stretch">
              <iframe
                title="Google Map Sheffield"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px', width: '100%', height: '100%', display: 'block', boxSizing: 'border-box' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23714.96407326213!2d-1.5070706!3d53.3780556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879826d2b7b1b0b%3A0x6e8b2e7b2e7b2e7b!2sSheffield!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
              ></iframe>
            </div>
            {/* Contact info card */}
            <div className="absolute left-4 bottom-4 bg-[#0E5248] bg-opacity-95 text-white rounded-xl shadow-lg px-6 py-3 flex flex-col gap-2 min-w-[220px] max-w-[320px]">
              <div className="flex items-center gap-2 text-sm">
                <span aria-label="Location">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21c-.3 0-.6-.1-.8-.3C8.1 17.2 5 13.3 5 10a7 7 0 1 1 14 0c0 3.3-3.1 7.2-6.2 10.7-.2.2-.5.3-.8.3z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                70 Clarkehouse Road, Sheffield, South Yorkshire, England, S10 2LJ
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span aria-label="Phone">
                  <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.29a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.16.59 3.29.72A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href="tel:+447495747930" className="underline text-[#FFD700] hover:text-white transition font-semibold">+447495747930</a>
              </div>
            </div>
          </div>
          {/* Form side - always second */}
          <div className="order-2 md:order-none w-full md:w-1/2 flex flex-col h-full p-0">
            <form className="flex flex-col flex-1 h-full w-full px-8 pt-6 pb-0 gap-0 bg-white bg-opacity-90 rounded-none shadow-none border-0" style={{ minHeight: '100%' }}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#12443A] leading-tight mb-2" style={{ fontFamily: 'Roboto Serif, serif' }}>Ready to simplify your property journey?</h2>
              <p className="text-[15px] text-[#12443A] mb-6 leading-snug">Reach out to us today. Whatever you're a landlord, investor, or tenant - we're here to help.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Full Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none placeholder-gray-400 text-black text-[15px] mb-8 transition rounded-md"
                  style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                  autoComplete="given-name"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none placeholder-gray-400 text-black text-[15px] mb-8 transition rounded-md"
                  style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                  autoComplete="family-name"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none placeholder-gray-400 text-black text-[15px] mb-8 transition rounded-md"
                style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                autoComplete="email"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none placeholder-gray-400 text-black text-[15px] mb-8 transition rounded-md"
                style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                autoComplete="tel"
              />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none text-black text-[15px] mb-8 transition rounded-md"
                  style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                >
                  <option value="">I am a...</option>
                  <option value="Landlord">Landlord</option>
                  <option value="Estate Agent">Estate Agent</option>
                  <option value="Tenant">Tenant</option>
                  <option value="Investor">Investor</option>
                  <option value="Other">Other</option>
                </select>
                <div className="relative mb-8" style={{ position: 'relative' }}>
                  <label className="block text-[#12443A] mb-2 font-medium text-[15px]">I am interested in:</label>
                  <div className="">
                    <button
                      type="button"
                      className="w-full px-4 pb-6 pt-2 bg-transparent text-black rounded-md focus:outline-none flex justify-between items-center text-[15px] mb-8"
                      style={{ boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)', border: 'none', borderRadius: '0.375rem' }}
                      onClick={() => setDropdownOpen(v => !v)}
                    >
                      <span>{formData.interests.length > 0 ? formData.interests.map(i => <span key={i} className="text-[#12443A] font-semibold">{i}</span>) : 'Select interests'}</span>
                      <svg className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute left-0 right-0 mt-2 bg-white border border-[#12443A] rounded shadow-lg z-20 max-h-56 overflow-auto">
                        {['Comprehensive HMO & Buy-to-Let Management','Tenant Find Services','Rent Collection & Arrears','Maintenance & Repairs','Check-ins, Check-outs & Inventories','Renters (Reform) Bill Guidance','Property Sourcing & Staging for Investors','Eviction & Legal Support'].map(service => (
                          <button
                            type="button"
                            key={service}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-[#e5e5e0] focus:bg-[#e5e5e0] ${formData.interests.includes(service) ? 'bg-[#e5e5e0] text-[#12443A]' : 'bg-white text-black'}`}
                            onClick={() => handleDropdownSelect(service)}
                          >
                            <span className="inline-block mr-2 align-middle text-[#12443A] font-semibold">
                              {formData.interests.includes(service) ? '✔️' : ''}
                            </span>
                            <span className={formData.interests.includes(service) ? 'text-[#12443A] font-semibold' : ''}>{service}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              <div className="mb-0 mt-2">
                <label className="block text-[#12443A] mb-2 font-medium text-[15px]">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 pb-6 pt-2 bg-transparent focus:outline-none placeholder-gray-400 text-black text-[15px] min-h-[120px] pr-32 transition rounded-md mb-8"
                    style={{ minHeight: '120px', resize: 'none', border: 'none', borderRadius: '0.375rem', boxShadow: 'inset 0 4px 24px 0 rgba(0,0,0,0.10)' }}
                  />
                  <button
                    type="submit"
                    className="absolute bottom-[3rem] right-4 bg-[#12443A] text-white px-8 py-2 rounded-lg shadow-md hover:bg-[#0E5248] transition font-semibold text-[15px]"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}