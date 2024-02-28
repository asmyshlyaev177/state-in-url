import { Suspense } from 'react';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';

const Page = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-4">
        <h2>Page for testing purposes</h2>
      </div>
      <div className="flex gap-4">
        <Suspense>
          <Comp1 className="basis-1/2" />
        </Suspense>
        <Suspense>
          <Comp2 className="basis-1/2" />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
