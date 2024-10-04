import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
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

// issue with using shiki, because can't load wasm
export const config = {
  matcher: ['/useUrlState/:path*'],
};
