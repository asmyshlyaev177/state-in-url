import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globalSetup: './setup-tests.ts',
    environment: 'happy-dom',
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
    coverage: {
      enabled: true,
      include: ['packages/urlstate'],
      provider: 'istanbul',
      reportsDirectory: './coverage-reports',
      reporter: ['lcov', 'json', 'html'],
    },
    globals: true,
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
});
