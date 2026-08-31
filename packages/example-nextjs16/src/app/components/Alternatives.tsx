import type { AlternativesCopy } from '../i18n/copy/types';

/**
 * Library display names stay here: identifiers, never translated. Order is
 * the pitch order — ours first, then the strongest alternative, then the rest
 * by how often the queries name them.
 */
const LIBS = [
  { key: 'siu', name: 'state-in-url' },
  { key: 'nuqs', name: 'nuqs' },
  { key: 'tanstack', name: 'TanStack Router' },
  { key: 'useQueryParams', name: 'use-query-params' },
  { key: 'useSearchParams', name: 'useSearchParams' },
] as const;

export const Alternatives = ({ copy }: { copy: AlternativesCopy }) => (
  <section
    className="flex w-full max-w-[980px] flex-col items-start"
    aria-labelledby="alternatives-title"
  >
    <h2
      id="alternatives-title"
      className="font-display text-ink mb-4 mt-12 text-3xl font-bold"
    >
      {copy.title}
    </h2>

    <p className="text-ink2 max-w-[640px] text-base leading-relaxed">
      {copy.intro}
    </p>

    <div className="mt-6 w-full overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--line)] text-left">
            <th scope="col" className="text-ink py-2 pr-4 font-semibold">
              {copy.colLibrary}
            </th>
            <th scope="col" className="text-ink py-2 pr-4 font-semibold">
              {copy.colSetup}
            </th>
            <th scope="col" className="text-ink py-2 pr-4 font-semibold">
              {copy.colNested}
            </th>
            <th scope="col" className="text-ink py-2 pr-4 font-semibold">
              {copy.colSize}
            </th>
            <th scope="col" className="text-ink py-2 font-semibold">
              {copy.colPick}
            </th>
          </tr>
        </thead>
        <tbody>
          {LIBS.map(({ key, name }) => (
            <tr
              key={key}
              className="border-b border-[var(--line)] align-top last:border-b-0"
            >
              <th
                scope="row"
                className={`py-2.5 pr-4 text-left font-mono font-medium ${
                  key === 'siu' ? 'text-[var(--accent-on-soft)]' : 'text-ink'
                }`}
              >
                {name}
              </th>
              <td className="text-ink2 py-2.5 pr-4">{copy.rows[key].setup}</td>
              <td className="text-ink2 py-2.5 pr-4">{copy.rows[key].nested}</td>
              <td className="text-ink2 py-2.5 pr-4">{copy.rows[key].size}</td>
              <td className="text-ink2 py-2.5">{copy.rows[key].pick}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
