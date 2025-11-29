import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Auto-generated from public/llms.txt by scripts/generate-middleware-content.js

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);

  // .search and .searchParams are incorrect
  const sp = (request.url?.includes?.('_next') ? '' : request.url)?.split?.('?')?.[1] || '';

  const requestHeaders = new Headers(request.headers);

  if (url !== null) {
    requestHeaders.set('searchParams', sp);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}
