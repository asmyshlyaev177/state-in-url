const fs = require('fs');
const path = require('path');

// Read the llms.txt file
const llmsTxtPath = path.join(__dirname, '..', 'public', 'llms.txt');
const content = fs.readFileSync(llmsTxtPath, 'utf-8');

// Escape backticks and ${} in the content
const escapedContent = content
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

// Generate the middleware file
const middlewareContent = `import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Auto-generated from public/llms.txt by scripts/generate-middleware-content.js

export async function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('accept') || '';

  // Check if the request prefers markdown/plain text over HTML
  const acceptsMarkdown = acceptHeader.includes('text/markdown');
  const acceptsPlainText = acceptHeader.includes('text/plain');
  const acceptsHtml = acceptHeader.includes('text/html');

  // Serve markdown if text/plain or text/markdown is requested before text/html
  const shouldServeMarkdown =
    (acceptsMarkdown || acceptsPlainText) &&
    (!acceptsHtml ||
     acceptHeader.indexOf('text/markdown') < acceptHeader.indexOf('text/html') ||
     acceptHeader.indexOf('text/plain') < acceptHeader.indexOf('text/html'));

  if (shouldServeMarkdown && url.pathname === '/') {
    return new NextResponse(LLMS_TXT_CONTENT, {
      status: 200,
      headers: {
        'Content-Type': acceptsMarkdown ? 'text/markdown; charset=utf-8' : 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  }

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
  matcher: ['/useUrlState/:path*', '/'],
};

const LLMS_TXT_CONTENT = \`${escapedContent}\`;

`;

// Write the middleware file
const middlewarePath = path.join(__dirname, '..', 'src', 'middleware.ts');
fs.writeFileSync(middlewarePath, middlewareContent, 'utf-8');

console.log('✅ Middleware content generated from public/llms.txt');
