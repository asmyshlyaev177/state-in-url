'use client';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { kv } from '@vercel/kv';
import React from 'react';

import { isVercel } from './domain';

const getArg1 = { extendedResult: true };
const getArg2 = { immediate: false };

export const Stats = () => {
  const { getData } = useVisitorData(getArg1, getArg2);

  React.useEffect(() => {
    if (isVercel) {
      try {
        getData({ ignoreCache: true }).then((data) => {
          kv.lpush(`visitors`, data);
        });
      } catch (err) {
        console.log('fprntjs/redis error', err);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
