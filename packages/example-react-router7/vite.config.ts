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
      // Force react-router to resolve from local node_modules
      'react-router': path.resolve(__dirname, 'node_modules/react-router'),
    },
  },
});
