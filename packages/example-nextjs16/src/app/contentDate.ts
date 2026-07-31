/**
 * The date the site content last actually changed, as an ISO-8601 string.
 *
 * Everything that advertises freshness — the sitemap's `lastModified`,
 * `dateModified` in the JSON-LD, the `last-modified` meta tag, and the footer —
 * reads this, so they agree with each other.
 *
 * It deliberately isn't `new Date()`. A timestamp that moves on every build (or
 * worse, every request) claims the page changed when nothing did, which is the
 * kind of signal crawlers learn to ignore.
 *
 * The value is read from the HEAD commit in next.config.mjs and inlined here at
 * build time. It has to be resolved there rather than here: `template.tsx` is
 * shared by every route including the Edge-runtime ones, and the Edge runtime
 * has no `node:child_process`, so reading git from app code fails the build
 * with "Native module not found: node:child_process".
 */
export const CONTENT_LAST_MODIFIED =
  process.env.NEXT_PUBLIC_CONTENT_LAST_MODIFIED || new Date().toISOString();
