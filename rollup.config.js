import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import { glob } from 'glob'

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: { clearScreen: false } };

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
    input: glob.sync("packages/urlstate/**/index.ts"),
    plugins,
    external,
    output: [{
      // file: pkg.exports.import.default,
      dir: 'dist',
      format: 'es',
      sourcemap,
      preserveModules: true,
      preserveModulesRoot: './packages/urlstate',
      entryFileNames: '[name].mjs'
    }],
    ...clearScreen,
  },
  // {
  //   input,
  //   plugins,
  //   external,
  //   output: [{
  //     file: pkg.exports.require.default,
  //     format: 'cjs',
  //     sourcemap
  //   }],
  //   ...clearScreen,
  // },
];
