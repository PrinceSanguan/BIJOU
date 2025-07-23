import React from 'react';

export function TrustedCompaniesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center space-x-12 md:space-x-16 lg:space-x-20">
          {/* Dropbox */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 6.134L6.069 9.797L12 13.459l5.931-3.662L12 6.134zM6.069 14.203l5.931 3.662 5.931-3.662L12 17.866 6.069 14.203z"/>
              <path d="M12 2L6.069 5.662 12 9.324l5.931-3.662L12 2z"/>
              <path d="M6.069 19.338L12 15.676l5.931 3.662L12 22.866 6.069 19.338z"/>
            </svg>
          </div>

          {/* Atom */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"/>
              <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2m0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"/>
              <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-60 12 12)"/>
            </svg>
          </div>

          {/* GitHub */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>

          {/* Alfred (Hat icon) */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c-1.1 0-2 .9-2 2v1c-3.3.5-6 3.2-6 6.5V15c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3.5c0-3.3-2.7-6-6-6.5V4c0-1.1-.9-2-2-2z"/>
              <ellipse cx="12" cy="16" rx="8" ry="1.5" opacity="0.3"/>
            </svg>
          </div>

          {/* Medium */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <text x="12" y="15" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">M</text>
            </svg>
          </div>

          {/* Messenger */}
          <div className="flex-shrink-0">
            <svg className="w-16 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M8 14l2.5-2.5L13 14l3-3" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-12">
          <div className="w-2 h-2 bg-[#FFD700] rounded-full border border-green-600"></div>
          <div className="w-2 h-2 bg-[#FFD700] rounded-full border border-green-600"></div>
          <div className="w-2 h-2 bg-[#FFD700] rounded-full border border-green-600"></div>
        </div>
      </div>
    </section>
  );
}