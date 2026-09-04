// What this repo translates. The locale set itself lives in locales.mjs and is
// identical across the three repos that share this toolkit; only this file
// differs between them.

import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = path.resolve(fileURLToPath(new URL('../..', import.meta.url)));

/**
 * `source` is the English file, relative to the repo root. Its translations
 * are `<name>.<locale>.<ext>` beside it.
 *
 * `toc` turns on table-of-contents regeneration for that document and bounds
 * which heading levels appear; the document needs a `<!-- toc:start -->` /
 * `<!-- toc:end -->` pair for it to have anywhere to write. Set it to `null`
 * for documents without a table of contents.
 *
 * README.md is also the npm README — the root package.json *is* the published
 * `state-in-url` package. The translations are not in `files`, so they stay on
 * GitHub; the switcher line at the top of README.md does render on npmjs.com,
 * where its relative links resolve back to GitHub.
 */
export const documents = [
  // `min: 1` because the two H1s — the title inside the centred <div> and
  // "Demo" — are entries in this README's table of contents, and dropping
  // them would silently rewrite it.
  { source: 'README.md', toc: { min: 1, max: 5 } },

  // Reference documentation, all of it reachable from the root README. None
  // of it has a table of contents.
  { source: 'Limits.md', toc: null },

  // The per-module API docs. `packages/urlstate/README.md` is the index that
  // links to the other ten; a translated index links to the translated ones,
  // which the link check allows for by stripping the locale infix before
  // comparing.
  { source: 'packages/urlstate/README.md', toc: null },
  { source: 'packages/urlstate/constants/README.md', toc: null },
  { source: 'packages/urlstate/encoder/README.md', toc: null },
  { source: 'packages/urlstate/encodeState/README.md', toc: null },
  { source: 'packages/urlstate/next/useUrlState/README.md', toc: null },
  { source: 'packages/urlstate/react-router/useUrlState/README.md', toc: null },
  { source: 'packages/urlstate/react-router6/useUrlState/README.md', toc: null },
  { source: 'packages/urlstate/remix/useUrlState/README.md', toc: null },
  { source: 'packages/urlstate/astro/useUrlState/README.md', toc: null },
  { source: 'packages/urlstate/useLinkProps/README.md', toc: null },
  { source: 'packages/urlstate/useSharedState/README.md', toc: null },
  { source: 'packages/urlstate/useUrlEncode/README.md', toc: null },
  { source: 'packages/urlstate/useUrlStateBase/README.md', toc: null },

  // Deliberately not listed:
  //
  // - CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md — contributor-facing,
  //   and contributions, conduct reports and vulnerability reports all arrive
  //   in English. A translation that drifts here is worse than none.
  // - PRODUCT.md, AGENTS.md, CLAUDE.md — internal.
  // - skills/*/SKILL.md — ships inside the npm tarball and is loaded by name
  //   by tooling with no locale dimension.
  // - packages/example-nextjs14/README-llms-txt.md — an engineering note.
];
