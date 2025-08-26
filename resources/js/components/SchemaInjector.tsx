import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaInjectorProps {
  schema: object;
}

export const SchemaInjector: React.FC<SchemaInjectorProps> = ({ schema }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  </Helmet>
);
