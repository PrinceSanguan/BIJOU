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
      className="relative py-16 px-2 md:px-0 min-h-[60vh] bg-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/YghbMKtbAHDfM5m2u6bnMXpG8.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
      }}
    >
      {/* Minimal geometric accent */}
      <div className="absolute top-0 right-0 w-32 h-16 bg-green-100 rounded-bl-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-24 h-12 bg-green-100 rounded-tr-3xl opacity-50"></div>
      <div className="relative z-10 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Info and contact */}
        <div className="text-center md:text-left px-2 md:px-0">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4 tracking-tight">
              Ready to <span className="text-green-600 font-semibold">simplify</span> your property journey?
            </h2>
            <p className="text-lg mb-6 text-black">
              Reach out to us today. Whether you’re a <span className="text-green-600 font-semibold">landlord</span>, <span className="text-green-600 font-semibold">investor</span>, or <span className="text-green-600 font-semibold">tenant</span>—we’re here to help.
            </p>
            <div className="mt-8 text-left text-black text-base space-y-2">
              <div className="flex items-center">
                <span className="mr-2 inline-block" aria-label="Location">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M12 21c-.3 0-.6-.1-.8-.3C8.1 17.2 5 13.3 5 10a7 7 0 1 1 14 0c0 3.3-3.1 7.2-6.2 10.7-.2.2-.5.3-.8.3z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <span>Based in <span className="text-green-600 font-semibold">Sheffield</span> – Covering <span className="text-green-600 font-semibold">South Yorkshire</span> and <span className="text-green-600 font-semibold">30km radius</span></span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 inline-block" aria-label="Email">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
                </span>
                <a href="mailto:info@bijourelocation.co.uk" className="underline text-green-600 font-semibold hover:text-[#FFD700] transition">info@bijourelocation.co.uk</a>
              </div>
              <div className="flex items-center">
                <span className="mr-2 inline-block" aria-label="Phone">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.29a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.16.59 3.29.72A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <a href="tel:+447495747930" className="underline text-green-600 font-semibold hover:text-[#FFD700] transition">+44 7495 747930</a>
              </div>
            </div>
          </div>
        </div>
        {/* Right side - Contact form */}
        <div className="w-full max-w-md mx-auto md:mx-0">
          <form className="space-y-5 bg-white bg-opacity-90 rounded-2xl shadow-lg p-5 border border-gray-100">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none placeholder-gray-400 text-black transition"
                autoComplete="given-name"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none placeholder-gray-400 text-black transition"
                autoComplete="family-name"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none placeholder-gray-400 text-black transition"
              autoComplete="email"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none placeholder-gray-400 text-black transition"
              autoComplete="tel"
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none text-black transition"
            >
              <option value="">I am a...</option>
              <option value="Landlord">Landlord</option>
              <option value="Estate Agent">Estate Agent</option>
              <option value="Tenant">Tenant</option>
              <option value="Investor">Investor</option>
              <option value="Other">Other</option>
            </select>
            <div className="relative">
              <label className="block text-black mb-2 font-medium">I am interested in:</label>
              <div className="">
                <button
                  type="button"
                  className="w-full px-3 py-2 bg-transparent border-b border-green-600 text-black rounded focus:outline-none flex justify-between items-center"
                  onClick={() => setDropdownOpen(v => !v)}
                >
                  <span>{formData.interests.length > 0 ? formData.interests.map(i => <span key={i} className="text-green-600 font-semibold">{i}</span>) : 'Select interests'}</span>
                  <svg className={`ml-2 w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border border-green-600 rounded shadow-lg z-20 max-h-56 overflow-auto">
                    {['Comprehensive HMO & Buy-to-Let Management','Tenant Find Services','Rent Collection & Arrears','Maintenance & Repairs','Check-ins, Check-outs & Inventories','Renters (Reform) Bill Guidance','Property Sourcing & Staging for Investors','Eviction & Legal Support'].map(service => (
                      <button
                        type="button"
                        key={service}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 focus:bg-green-100 ${formData.interests.includes(service) ? 'bg-green-100 text-green-700' : 'bg-white text-black'}`}
                        onClick={() => handleDropdownSelect(service)}
                      >
                        <span className="inline-block mr-2 align-middle text-green-600 font-semibold">
                          {formData.interests.includes(service) ? '✔️' : ''}
                        </span>
                        <span className={formData.interests.includes(service) ? 'text-green-600 font-semibold' : ''}>{service}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-transparent border-b border-green-600 focus:border-green-600 focus:outline-none placeholder-gray-400 text-black transition resize-none"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 focus:bg-green-700 transition-colors duration-200 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}