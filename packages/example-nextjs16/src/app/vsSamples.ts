/**
 * The side-by-side code samples for `/vs/nuqs`, as strings so the page and its
 * Markdown mirror (`vs/nuqs.md/route.ts`) render the same bytes. Samples stay
 * English everywhere, like every other code block on the site.
 *
 * The nuqs side is two files on purpose — the adapter is part of its setup
 * cost, and showing it as a second file states that without a word of copy.
 */
export const NUQS_ADAPTER_SAMPLE = `// app/layout.tsx
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}`;

export const NUQS_FILTERS_SAMPLE = `'use client';
import {
  useQueryStates,
  parseAsString,
  parseAsInteger,
  parseAsArrayOf,
  parseAsIsoDateTime,
} from 'nuqs';

export const Filters = () => {
  const [filters, setFilters] = useQueryStates({
    q: parseAsString.withDefault(''),
    page: parseAsInteger.withDefault(1),
    tags: parseAsArrayOf(parseAsString).withDefault([]),
    since: parseAsIsoDateTime,
  });

  return (
    <input
      value={filters.q}
      onChange={(ev) => setFilters({ q: ev.target.value, page: 1 })}
    />
  );
};`;

export const SIU_FILTERS_SAMPLE = `'use client';
import { useUrlState } from 'state-in-url/next';

export const filters = {
  q: '',
  page: 1,
  tags: [] as string[],
  since: undefined as Date | undefined,
};

// One reusable hook = the whole API for this feature
export const useFilters = () => useUrlState(filters);

export const SearchBox = () => {
  const { urlState, setUrl } = useFilters();

  return (
    <input
      value={urlState.q}
      onChange={(ev) => setUrl({ q: ev.target.value, page: 1 })}
    />
  );
};

export const ActiveTags = () => {
  // Same state, another component - no props, no context
  const { urlState } = useFilters();

  return <>{urlState.tags.join(', ')}</>; // tags is still string[]
};`;
