import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

import { getConfig } from '../shared/vite-config';

// https://vitejs.dev/config/
export default defineConfig({
  ...getConfig(),
  resolve: {
    ...(getConfig().resolve || {}),
    alias: {
      ...(getConfig().resolve?.alias || {}),
      // Force react-router to resolve from local node_modules. The real path,
      // not the symlink: with preserveSymlinks its own imports (`cookie`) would
      // otherwise walk up to whatever version is hoisted at the repo root.
      'react-router': fs.realpathSync(
        path.resolve(__dirname, 'node_modules/react-router'),
      ),
    },
  },
});
