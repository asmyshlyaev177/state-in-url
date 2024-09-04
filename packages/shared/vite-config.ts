import react from '@vitejs/plugin-react';
import path from 'path';

const shared = 'packages/shared';

// https://vitejs.dev/config/
export const getConfig = () => ({
  root: '.',
  plugins: [react()],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  resolve: {
    preserveSymlinks: true,
    // TODO: doesn't work?
    alias: [
      {
        find: /^shared\/components$/,
        replacement: `${path.resolve(__dirname, shared)}/components/index.ts`,
      },
      {
        find: /^shared\/components(.*)$/,
        replacement: `${path.resolve(__dirname, shared)}/components/$1`,
      },
      {
        find: /^shared\/(.*)$/,
        replacement: `${path.resolve(__dirname, shared)}/$1`,
      },
      {
        find: /^shared\/styles\.css$/,
        replacement: `${path.resolve(__dirname, shared)}/styles.css`,
      },
    ],
  },
});

export default getConfig;
