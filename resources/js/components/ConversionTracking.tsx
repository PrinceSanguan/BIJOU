import React from 'react';
import { Helmet } from 'react-helmet';

export const ConversionTracking: React.FC<{ script: string }> = ({ script }) => (
  <Helmet>
    <script>{script}</script>
  </Helmet>
);
