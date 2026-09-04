import node from '@astrojs/node';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

// Every page reads Astro.url.searchParams, so nothing can be prerendered.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
  vite: {
    resolve: {
      preserveSymlinks: true,
      // the library from source, like the other Vite examples
      alias: {
        shared: path.resolve(here, '../shared'),
        'state-in-url': path.resolve(here, '../urlstate'),
      },
    },
  },
});
