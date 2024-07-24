import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';

const input = 'packages/index.ts';

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: { clearScreen: false } };

// TODO: subpatch exports ?
// https://dev.to/receter/organize-your-library-with-subpath-exports-4jb9

console.log({ isProduction, sourcemap });

const external = ['react', 'react-dom', 'next/navigation']

const plugins = [
  resolve({
    include: ['node_modules/**'],
  }),
  typescript({
    tsconfig: './tsconfig.json',
    compilerOptions: { sourceMap: sourcemap, declarationMap: sourcemap },
  }),

  !isProduction && sourcemaps(),
  isProduction && terser({ ecma: '2022' }),
  filesize(),
].filter(Boolean);

export default [
  {
    input,
    plugins,
    external,
    output: [{ file: pkg.exports.import.default, format: 'es', sourcemap }],
    ...clearScreen,
  },
  {
    input,
    plugins,
    external,
    output: [{
      file: pkg.exports.require.default,
      format: 'cjs',
      sourcemap
    }],
    ...clearScreen,
  },
];
