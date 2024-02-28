import { Suspense } from 'react';
import { Form } from './Form';
import { Status } from './Status';
import { RefreshButton } from './Refresh';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div
        className="flex max-[800px]:flex-col flex-row gap-8
       p-12 min-[800px]:max-h-[580px] max-w-[1100px] w-full"
      >
        <Suspense>
          <Form className="basis-3/7 w-full" />
        </Suspense>
        <RefreshButton className="basis-1/7 text-center self-center" />
        <Suspense>
          <Status className="basis-3/7 min-h-[300px] w-full" />
        </Suspense>
      </div>
    </main>
  );
}
