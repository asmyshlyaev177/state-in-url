import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export const getConfig = () => ({
  root: '.',
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    sourceMap: true,
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      shared: `${path.resolve(__dirname, './')}`,
      'state-in-url': `${path.resolve(__dirname, '../urlstate')}`,
    },
  },
});

export default getConfig;
