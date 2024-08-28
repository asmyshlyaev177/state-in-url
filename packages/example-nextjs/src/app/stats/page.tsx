'use client';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { kv } from '@vercel/kv';
import React from 'react';

const Stats = () => {
  React.useEffect(() => {
    try {
      kv.lrange<
        Awaited<ReturnType<ReturnType<typeof useVisitorData>['getData']>>
      >('visitors', -100, -1).then((data) => {
        console.log({ data });
      });
    } catch (error) {
      console.log('err', error);
    }
  }, []);

  return null;
};

export default Stats;
