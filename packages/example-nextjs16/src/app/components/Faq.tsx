import React from 'react';

import type { FaqCopy } from '../i18n/copy/types';

/**
 * A FAQ block, rendered as a definition list so the question/answer pairing
 * survives without styling. The same items go out as FAQPage JSON-LD through
 * `faqPageJsonLd` in `jsonLd.ts`; routes emit that, this renders the DOM, and
 * both read one copy object so they cannot disagree.
 */
export const Faq = ({ copy, id }: { copy: FaqCopy; id: string }) => (
  <section
    className="flex w-full max-w-[640px] flex-col items-start"
    aria-labelledby={id}
  >
    <h2
      id={id}
      className="font-display text-ink mb-4 mt-12 text-3xl font-bold"
    >
      {copy.title}
    </h2>
    <dl className="w-full">
      {copy.items.map((item) => (
        <div
          key={item.q}
          className="border-b border-[var(--line)] py-4 last:border-b-0"
        >
          <dt className="text-ink font-semibold">{item.q}</dt>
          <dd className="text-ink2 mt-2 text-base leading-relaxed">{item.a}</dd>
        </div>
      ))}
    </dl>
  </section>
);
