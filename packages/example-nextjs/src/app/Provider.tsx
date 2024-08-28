import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import React from 'react';

import { isVercel } from './domain';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return !isVercel ? (
    children
  ) : (
    <FpjsProvider
      loadOptions={{
        apiKey: process.env.FINGERPRINT_KEY || '',
        region: 'ap',
      }}
    >
      {children}
    </FpjsProvider>
  );
};
