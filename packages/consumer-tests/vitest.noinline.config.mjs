import { defineConfig } from 'vitest/config';

// Deliberately no `server.deps.inline`: react-router 8 points `default` and
// `module-sync` at the same file, so Vite and Node cannot disagree about which
// build to load and the package needs no consumer-side workaround.
export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/**/*.test.{mjs,cjs}'],
  },
});
