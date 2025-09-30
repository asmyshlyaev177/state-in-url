import type { NextRequest } from 'next/server';
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

const LLMS_TXT_CONTENT = `# state-in-url

A React hook library for storing complex state objects in browser URLs with full TypeScript type preservation.

## What It Does

state-in-url synchronizes React state with URL query parameters, enabling:
- State sharing between unrelated components without prop drilling or context
- State persistence across page reloads via URL
- Shareable links that preserve application state
- Type-safe state management with full TypeScript inference

## Package Information

- **NPM:** https://www.npmjs.com/package/state-in-url
- **GitHub:** https://github.com/asmyshlyaev177/state-in-url
- **Website:** https://state-in-url.dev
- **Main Documentation:** https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/README.md

## Supported Frameworks

| Framework | Versions | Documentation |
|-----------|----------|---------------|
| Next.js | v14-v15 | https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/packages/urlstate/next/useUrlState/README.md |
| React Router | v7 | https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/packages/urlstate/react-router/useUrlState/README.md |
| React Router | v6 | https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/packages/urlstate/react-router6/useUrlState/README.md |
| Remix | v2 | https://raw.githubusercontent.com/asmyshlyaev177/state-in-url/refs/heads/master/packages/urlstate/remix/useUrlState/README.md |

## Installation

\`\`\`bash
npm install state-in-url
\`\`\`

## Import Paths by Framework

\`\`\`typescript
// Next.js
import { useUrlState } from "state-in-url/next";

// React Router v7
import { useUrlState } from "state-in-url/react-router";

// React Router v6
import { useUrlState } from "state-in-url/react-router6";

// Remix
import { useUrlState } from "state-in-url/remix";
\`\`\`

## Core API: useUrlState Hook

The primary hook for state management synchronized with URL query parameters.

**Returns:**
- \`urlState\`: Current state object with full type inference
- \`setState\`: Updates state immediately (batched URL sync)
- \`setUrl\`: Syncs state to URL immediately

## Basic Usage Example

\`\`\`typescript
// 1. Define state type using 'type', not 'interface'
type FormState = {
  searchQuery: string;
  isFiltered: boolean;
  page: number;
};

// 2. Create initial state as static const (never from props/functions)
const initialState: FormState = {
  searchQuery: "",
  isFiltered: false,
  page: 1
};

function SearchComponent() {
  const { urlState, setState, setUrl } = useUrlState(initialState);

  return (
    <div>
      {/* Read state - fully typed */}
      <p>Current search: {urlState.searchQuery}</p>
      <p>Page: {urlState.page}</p>

      {/* Update state + URL immediately */}
      <button onClick={() => setUrl({ page: urlState.page + 1 })}>
        Next Page
      </button>

      {/* Update state instantly, sync URL on blur */}
      <input
        value={urlState.searchQuery}
        onChange={(e) => setState({ searchQuery: e.target.value })}
        onBlur={() => setUrl()}
      />

      {/* Reset to initial state */}
      <button onClick={() => setUrl((_, initial) => initial)}>
        Reset
      </button>
    </div>
  );
}
\`\`\`

## Advanced Usage Patterns

### Functional Updates

\`\`\`typescript
// Using previous state
setUrl(prev => ({ ...prev, page: prev.page + 1 }));

// Accessing initial state
setUrl((prev, initial) => ({ ...prev, ...initial }));
setState((prev, initial) => initial); // full reset
\`\`\`

### Separate State Updates and URL Sync

For frequently updated inputs, update state immediately and sync URL separately:

\`\`\`typescript
<input
  value={urlState.query}
  onChange={(e) => setState({ query: e.target.value })} // instant
  onBlur={() => setUrl()} // sync to URL when done
/>
\`\`\`

### Next.js Server Components

Pass \`searchParams\` to avoid hydration errors:

\`\`\`typescript
export default function Page({ searchParams }: { searchParams: Record<string, string> }) {
  const { urlState, setUrl } = useUrlState(initialState, { searchParams });
  // ...
}
\`\`\`

## Recommended Pattern: Centralized State

Create custom hooks in separate files for better organization:

\`\`\`typescript
// hooks/useSearchState.ts
import { useUrlState } from "state-in-url/next";

type SearchState = {
  query: string;
  filters: string[];
  sortBy: "name" | "date";
};

const initialState: SearchState = {
  query: "",
  filters: [],
  sortBy: "name"
};

export function useSearchState() {
  return useUrlState(initialState);
}
\`\`\`

\`\`\`typescript
// Any component
import { useSearchState } from "@/hooks/useSearchState";

function SearchResults() {
  const { urlState, setUrl } = useSearchState();
  // State is automatically shared across all components using this hook
}
\`\`\`

## Critical Constraints and Limitations

1. **Type Definition:** Always use \`type\`, never \`interface\`
2. **Initial State:** Must be a static const, never from props/functions/destructuring
3. **Serialization:** Only JSON-serializable values (no functions, class instances, etc.)
4. **Security:** Never store sensitive data (API keys, tokens, passwords)
5. **Multiple Hooks:** Can use multiple hooks if top-level keys don't overlap
6. **URL Preservation:** Unrelated query parameters are preserved
7. **Throttling:** Updates are throttled for performance

## State Updates Behavior

- \`setState()\`: Updates state immediately, URL sync expected to be done manually
- \`setUrl()\`: Syncs state to URL immediately
- Both support functional updates with access to previous and initial state
- URL updates trigger state synchronization across all components using the same hook

## Type Safety

All state operations have full TypeScript type inference:
- \`urlState\` matches the shape of your initial state type
- \`setState\` and \`setUrl\` validate against your type
- Nested object properties are fully typed

## Documentation Resources

- Main README with comprehensive examples: GitHub repository
- Framework-specific guides: See documentation links per framework above
- JSDoc comments: Available in IDE for all exported functions
`;

