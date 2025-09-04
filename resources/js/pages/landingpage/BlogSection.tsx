
import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { LocalBusinessSchema } from '../../components/LocalBusinessSchema';

export function BlogSection() {
  return (
    <>
      <SEOHead
        title="HMO Management Sheffield | Stress-Free Property Solutions"
        description="Sheffield’s trusted HMO management specialists. Guaranteed rent, no voids, full compliance. Book your free consultation with Bijou Group today!"
        canonical="https://bijourelocation.co.uk/blog"
      />
      <LocalBusinessSchema
        name="Bijou Group"
        url="https://bijougroup.co.uk/blog"
        address={{
          street: "70 Clarkehouse Road",
          city: "Sheffield",
          region: "South Yorkshire",
          postalCode: "S10 2LJ",
          country: "UK"
        }}
        phone="+447495747930"
        logo="/logo.svg"
      />
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Blog</h2>
        <p className="mb-4">Our latest news and updates. (Blog content coming soon)</p>
      </section>
    </>
  );
}
