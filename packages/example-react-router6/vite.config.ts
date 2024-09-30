import { defineConfig } from 'vite';

import { getConfig } from '../shared/vite-config';

// https://vitejs.dev/config/
export default defineConfig({
  ...getConfig(),
});
