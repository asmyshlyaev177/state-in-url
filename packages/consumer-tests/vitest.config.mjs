import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/**/*.test.{mjs,cjs}'],
    // The workaround the README documents. Without it Vitest externalizes
    // state-in-url, Node loads it while Vite loads the test file, and the two
    // resolvers land on different react-router builds — so its React context
    // exists twice and useNavigate() throws with the provider right there.
    server: { deps: { inline: ['state-in-url'] } },
  },
});
