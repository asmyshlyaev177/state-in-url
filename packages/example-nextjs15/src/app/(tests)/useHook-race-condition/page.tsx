import React, { Suspense } from 'react';

import { Component } from './Component';

export default async function Page() {
  return (<Suspense><Component /></Suspense>)
}
