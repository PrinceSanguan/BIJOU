import React from 'react';
import { Helmet } from 'react-helmet';

export const GA4: React.FC<{ measurementId: string }> = ({ measurementId }) => (
  <Helmet>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
    <script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `}</script>
  </Helmet>
);
