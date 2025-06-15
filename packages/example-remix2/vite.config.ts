import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  // server: {
  //   warmup: {
  //     clientFiles: [
  //       './app/routes/**/*',
  //       './app/root.tsx',
  //       './app/entry.client.tsx',
  //       '!**/*.server.ts',
  //     ]
  //   }
  // },
  plugins: [
    remix({
      future: {
        // unstable_optimizeDeps: true,
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  // build: {
  //   rollupOptions: {
  //     external: ['react-router', 'react-router-dom', '@types/react', '@types/react-dom']
  //   }
  // }
});
