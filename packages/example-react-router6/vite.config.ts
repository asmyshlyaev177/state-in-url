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
      'react-router': path.resolve(__dirname, 'node_modules/react-router'),
      'react-router-dom': path.resolve(
        __dirname,
        'node_modules/react-router-dom',
      ),
    },
  },
});
