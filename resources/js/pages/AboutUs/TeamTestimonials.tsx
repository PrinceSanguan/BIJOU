import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function TeamTestimonials() {
  return (
  <section className="w-full max-w-6xl mx-auto mt-20 mb-16 px-4">
      {/* Section Title */}
      <h2
        className="mx-auto flex items-center justify-center"
        style={{
          width: 805,
          height: 56,
          flexShrink: 0,
          color: '#F5C000',
          textAlign: 'center',
          fontFamily: 'Roboto Serif, serif',
          fontSize: 48,
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: 'normal',
        }}
      >
        People Behind Bijou Relocation
      </h2>
      <p
        className="text-center mx-auto"
        style={{
          width: 1147,
          height: 71,
          flexShrink: 0,
          color: '#0E5248',
          textAlign: 'center',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 24,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '36px',
          margin: '23px auto 0 auto',
        }}
      >
        Our dedicated team brings together local expertise, professional qualifications, and genuine passion for property management excellence.
      </p>
      {/* Main Card */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center mb-14 min-h-[300px]" style={{ marginTop: 103, marginLeft: -260 }}>
        {/* Image */}
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            width: 405,
            height: 470,
            flexShrink: 0,
            borderRadius: 12,
            background: 'url(/images/11532497.png) lightgray 50% / cover no-repeat',
            boxShadow: '0 10px 20px 5px rgba(0, 0, 0, 0.25)',
          }}
        />
        {/* Info */}
  <div className="flex flex-col items-start justify-center max-w-xl pl-2 md:pl-0">
          <h3
            style={{
              width: 383,
              height: 56,
              flexShrink: 0,
              color: '#F5C000',
              fontFamily: 'Roboto Serif, serif',
              fontSize: 48,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              marginBottom: 8,
            }}
          >
            Karen Hodgson
          </h3>
          <div
            style={{
              width: 347,
              height: 27,
              flexShrink: 0,
              color: '#0E5248',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 24,
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '36px',
              marginBottom: 16,
            }}
          >
            Founder & Managing Director
          </div>
          {/* Social Media Icons */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 24, marginBottom: 24, alignItems: 'center' }}>
            <a href="#" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E5248', borderRadius: 6, width: 28, height: 28, transition: 'background 0.2s' }} className="hover:bg-[#EFBF04] group">
              <Instagram size={16} color="#fff" style={{ display: 'block', margin: 'auto' }} />
            </a>
            <a href="#" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E5248', borderRadius: 6, width: 28, height: 28, transition: 'background 0.2s' }} className="hover:bg-[#EFBF04] group">
              <Facebook size={16} color="#fff" style={{ display: 'block', margin: 'auto' }} />
            </a>
            <a href="#" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E5248', borderRadius: 6, width: 28, height: 28, transition: 'background 0.2s' }} className="hover:bg-[#EFBF04] group">
              <Linkedin size={16} color="#fff" style={{ display: 'block', margin: 'auto' }} />
            </a>
          </div>
          <div className="flex flex-row items-center gap-5 mb-5">
            <a href="#" aria-label="Instagram" className="text-[#12443A] text-xl hover:text-[#EFBF04]">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" aria-label="Facebook" className="text-[#12443A] text-xl hover:text-[#EFBF04]">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#12443A] text-xl hover:text-[#EFBF04]">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <p
            style={{
              width: 885,
              height: 232,
              flexShrink: 0,
              color: '#0E5248',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 24,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '36px',
              margin: 0,
            }}
          >
            Karen leads Bijou Relocation with over 20 years in the housing sector, developing deep understanding of residential management and commercial property operations. Her 15+ years of family business experience provided invaluable insights into building sustainable, relationship-focused enterprises, while 8+ xyears of independent business leadership prove her ability to deliver consistent results.
          </p>
        </div>
      </div>
      {/* Support Team Section */}
  <div className="flex flex-col items-center" style={{ marginTop: 130 }}>
        <div className="flex items-center w-full justify-center mb-3">
          <span style={{ display: 'flex', alignItems: 'flex-end', marginRight: 24, position: 'relative', top: '-6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="2" viewBox="0 0 104 2" fill="none">
              <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
            </svg>
          </span>
          <span
            style={{
              width: 323,
              height: 37,
              flexShrink: 0,
              color: '#EFBF04',
              textAlign: 'center',
              fontFamily: 'Roboto Serif, serif',
              fontSize: 24,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              letterSpacing: '2.4px',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            OUR SUPPORT TEAM
          </span>
          <span style={{ display: 'flex', alignItems: 'flex-end', marginLeft: 24, position: 'relative', top: '-6px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="2" viewBox="0 0 104 2" fill="none">
              <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM1 1V2H104V1V0H1V1Z" fill="#0E5248" stroke="#0E5248" strokeWidth="2" />
            </svg>
          </span>
        </div>
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 25 }}>
          <p
            style={{
              width: 1342,
              height: 159,
              flexShrink: 0,
              color: '#0E5248',
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 24,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '36px',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Our experienced property managers Sheffield team includes qualified maintenance coordinators, tenant relations specialists, and compliance experts delivering seamless service. Our landlord support specialists understand modern property investor pressures, providing guidance and practical solutions for portfolio expansion, complex tenant situations, and evolving regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
