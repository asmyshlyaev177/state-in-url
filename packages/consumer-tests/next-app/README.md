The smallest real Next.js App Router app that uses `state-in-url/next`, built by
`scripts/check-consumers.mjs` against the packed tarball.

It exists because `packages/example-*` cannot answer this: the Vite and Astro
examples alias `state-in-url` to the library **source**, and the Next examples
reach it through a `workspace:*` symlink. Neither resolves the published
`exports` map out of a real `node_modules`, which is where a packaging mistake
shows up — `next/navigation` without its `.js`, for one.
