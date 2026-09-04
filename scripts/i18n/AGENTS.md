# AGENTS — translations

Repo-wide guide: [`AGENTS.md`](../../AGENTS.md). Translator prompt:
[`TRANSLATING.md`](TRANSLATING.md). Protected terms: [`GLOSSARY.md`](GLOSSARY.md).

Eight languages besides English: `zh-CN`, `ja`, `ko`, `ru`, `es`, `pt-BR`, `fr`,
`vi`. Declared once in [`locales.mjs`](locales.mjs) — with an `indexed` flag
per locale: only `ja`, `ru` and `vi` are told to crawlers, the rest are
`noindex` (`localeMetadata` in `seoStuff.ts`), out of every hreflang cluster
and out of `sitemap.ts`, while staying built and linked. The Search Console
figures behind the split are in the table's comment. The README suffixes and the
language-switcher line both derive from that list, so adding a language is an
edit there plus `pnpm i18n:init`.

`README.md` is the English source and is also what npmjs.com renders. Each
translation is `README.<tag>.md` beside it, keeping BCP 47 case. The old
`README.CN.md` and `README.KO.md` were renamed to `README.zh-CN.md` and
`README.ko.md`; a stub remains at the Chinese path for inbound links, and
deliberately **not** at the Korean one — `README.KO.md` and `README.ko.md`
differ only in case and cannot coexist on macOS or Windows.

```bash
pnpm i18n:toc      # rebuild every table of contents from its own headings
pnpm i18n:check    # structure, links, anchors, drift
pnpm i18n status   # what is translated, what has drifted
pnpm i18n diff ko  # the English diff a stale translation still owes
```

**The table of contents is generated, never hand-written.** Translating a
heading changes the anchor GitHub derives from it, so a hand-copied English
anchor silently points at nothing — run `pnpm i18n:toc` after any heading
change, in any language. It regenerates the block between `<!-- toc:start -->`
and `<!-- toc:end -->` using GitHub's own slug algorithm, Unicode included.
Its first run fixed a link that had been broken in the English README since
the "Personal website" heading became "Hire me".

**Every translation records the git blob hash of the English README it came
from**, in the `<!-- i18n:meta … -->` line. That is what makes drift
detectable, and it was needed: the Chinese and Korean translations sat two
commits behind for months — missing the whole "Using with AI coding agents"
section — with nothing to say so. Never hand-edit that line; `pnpm i18n stamp
<locale>` writes it once a translation is current.

## The demo site

`packages/example-nextjs16` is localized too: `/ja`, `/zh-cn` and six more, each
with `/react-router` and `/remix` under it. Copy lives in
`src/app/i18n/copy/<dir>.ts`, checked with `pnpm i18n:copy:check`.

The routing is the part worth knowing about. Only a **root layout** may render
`<html>`, and App Router gives `params` only to the layout owning the dynamic
segment — so one root layout could never know which language it was rendering.
The site therefore has **two root layouts**, via route groups: `app/(en)/` for
the unprefixed English pages and the Playwright fixtures, and `app/[locale]/`
for the translations. `shell/RootDocument.tsx` is the shared body so they
cannot drift, and `dynamicParams = false` turns an unknown first segment into a
404 rather than an English page under a made-up language.

Route groups shape the layout tree, not URLs: everything is served where it
always was. `src/proxy.ts` still matches `/` exactly, so agents keep getting
the English Markdown and the locale roots have one representation each.

`sitemap.ts`, `robots.txt/route.ts` and `next.config.mjs`'s `headers()` are all
generated from the locale table now — 27 URLs each, where they used to hold
three literals.

## Adding a language

Add it to [`locales.mjs`](locales.mjs), run `pnpm i18n:init` and
`pnpm i18n:copy:init` for the skeletons, then hand
[`TRANSLATING.md`](TRANSLATING.md) to a model. Nothing else holds a language
list — switcher line, demo picker, sitemap, robots and `headers()` all read it.
