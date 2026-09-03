import { Link } from './Link';

import type { ComparisonCopy } from '../i18n/copy/types';

const ROWS = [
  'setup',
  'stateShape',
  'reuse',
  'nested',
  'dates',
  'size',
  'deps',
  'routers',
] as const;

export const Comparison = ({
  copy,
  fullComparisonHref,
}: {
  copy: ComparisonCopy;
  /** Locale-aware href of `/vs/nuqs`; omitted on that page itself. */
  fullComparisonHref?: string;
}) => (
  <section
    className="flex w-full max-w-[640px] flex-col items-start"
    aria-labelledby="comparison-title"
  >
    <h2
      id="comparison-title"
      className="font-display text-ink mb-4 mt-12 text-3xl font-bold"
    >
      {copy.title}
    </h2>

    <p className="text-ink2 text-base leading-relaxed">{copy.intro}</p>

    <div className="mt-6 w-full overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--line)] text-left">
            <th scope="col" className="text-ink py-2 pr-4 font-semibold">
              {copy.colFeature}
            </th>
            <th
              scope="col"
              className="py-2 pr-4 font-mono font-semibold text-[var(--accent-on-soft)]"
            >
              state-in-url
            </th>
            <th scope="col" className="text-ink py-2 font-mono font-semibold">
              nuqs
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((key) => (
            <tr
              key={key}
              className="border-b border-[var(--line)] align-top last:border-b-0"
            >
              <th
                scope="row"
                className="text-ink py-2.5 pr-4 text-left font-medium"
              >
                {copy.rows[key].label}
              </th>
              <td className="text-ink2 py-2.5 pr-4">{copy.rows[key].siu}</td>
              <td className="text-ink2 py-2.5">{copy.rows[key].nuqs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-ink2 mt-2 text-sm leading-relaxed">{copy.sizeNote}</p>

    <p className="text-ink2 mt-4 text-base leading-relaxed">{copy.outro}</p>

    {fullComparisonHref && (
      <p className="mt-4 text-base leading-relaxed">
        <Link
          href={fullComparisonHref}
          className="font-semibold text-[var(--accent-on-soft)] hover:underline"
        >
          {copy.fullLink}
        </Link>
      </p>
    )}
  </section>
);
