import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import ignore from 'rollup-plugin-ignore';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
// import copy from 'rollup-plugin-copy';
import pkg from './package.json';

const input = 'packages/index.ts';

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: { clearScreen: false } };

// TODO: subpatch exports ?
// https://dev.to/receter/organize-your-library-with-subpath-exports-4jb9

console.log({ isProduction, sourcemap });

// const external = [
//   ...Object.keys(pkg.peerDependencies || {}),
//   (id) => /^react$|^react-dom$|^next|^next\/navigation|^\@next|^@babel\/runtime/.test(id),
// ];
const external = ['react', 'react-dom', 'next/navigation']

const plugins = [
  // ignore(['fs', 'net', 'react', 'react-dom', 'prop-types', 'PropTypes', 'next', 'next/navigation', '@next']),
  resolve({
    include: ['node_modules/**'],
  }),
  typescript({
    tsconfig: './tsconfig.json',
    compilerOptions: { sourceMap: sourcemap, declarationMap: sourcemap },
  }),

  // commonjs(),
  !isProduction && sourcemaps(),
  isProduction && terser({ ecma: '2020' }),
  // copy({
  //   targets: [
  //     { src: './package.json', dest: 'dist' },
  //   ]
  // }),
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
      // name: 'state-in-url',
      // globals: {
      //   'react': 'React',
      //   'next': 'next'
      // },
      sourcemap
    }],
    ...clearScreen,
  },
];
