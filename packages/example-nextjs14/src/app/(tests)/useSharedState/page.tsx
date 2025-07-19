'use client';

import dynamic from 'next/dynamic';

const FirstComponent = dynamic(() => import('./Components').then(mod => mod.FirstComponent))
const SecondComponent = dynamic(() => import('./Components').then(mod => mod.SecondComponent))

const UseSharedStatePage = () => {
  return (
    <div className="p-8">
      <h1>useSharedState hook for React</h1>
      <div className="grid gap-4 grid-cols-2 w-full">
        <div className="basis-1/2">
          <FirstComponent />
        </div>
        <div className="basis-1/2">
          <SecondComponent />
        </div>
      </div>
    </div>
  );
};

export default UseSharedStatePage;
