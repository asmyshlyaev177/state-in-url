import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import filesize from 'rollup-plugin-filesize';
import { glob } from 'glob'
import sucrase from '@rollup/plugin-sucrase';

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: {
  clearScreen: false,
  chokidar: true
} };

console.log({ isProduction, sourcemap });

const external = ['react', 'react-dom', 'next/navigation', 'react-router-dom']

const plugins = [
  resolve({
    include: ['node_modules/**'],
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript']
  }),

  !isProduction && sourcemaps(),
  isProduction && terser({ ecma: '2022' }),
  // TODO: show total size of JS files
  isProduction && filesize({ showMinifiedSize: false }),
].filter(Boolean);

export default [
  {
    input: glob.sync("packages/urlstate/**/index.ts"),
    plugins,
    external,
    output: [{
      dir: 'dist',
      format: 'es',
      sourcemap,
      preserveModules: true,
      preserveModulesRoot: './packages/urlstate',
      entryFileNames: '[name].mjs'
    }],
    ...clearScreen,
  },
];
