'use client';
import { Suspense } from 'react';

import dynamic from 'next/dynamic';

const Form = dynamic(() => import('../../Form-for-test').then(mod => mod.Form))
const Status = dynamic(() => import('../../Status-for-test').then(mod => mod.Status))

export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="font-mono">state-in-url</span> Demo
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <Suspense fallback={null}>
          <Form className="flex max-h-[850px] flex-col md:flex-row gap-8 basis-1/2" />
        </Suspense>
        <Suspense fallback={null}>
          <Status
            className="flex-1 max-h-[450px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-0"
          />
        </Suspense>
      </div>
    </div>
  );
}
