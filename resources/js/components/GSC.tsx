import React from 'react';
import { Helmet } from 'react-helmet';

export const GSC: React.FC<{ verification: string }> = ({ verification }) => (
  <Helmet>
    <meta name="google-site-verification" content={verification} />
  </Helmet>
);
