import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild'
import sourcemaps from 'rollup-plugin-sourcemaps';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import { glob } from 'glob'
import config from './tsconfig.json' with { type: "json" };

const isProduction = !process.env.IS_DEVELOPMENT;
const sourcemap = !isProduction;
const clearScreen = { watch: { clearScreen: false } };

console.log({ isProduction, sourcemap });

const external = ['react', 'react-dom', 'next/navigation', 'react-router', 'react-router-dom', '@remix-run', '@remix-run/node', '@remix-run/react']

const plugins = [
  resolve({
    include: ['node_modules/**'],
  }),
  typescript({
    tsconfig: './tsconfig.build.json',
    compilerOptions: { ...config.compilerOptions, sourceMap: sourcemap, declarationMap: sourcemap, declaration: true },
  }),


  !isProduction && sourcemaps(),
  esbuild({
    sourceMap: !isProduction, // default
    minify: false,
    minifyWhitespace: isProduction,
    minifyIdentifiers: isProduction,
    target: 'es2022', // default, or 'es20XX', 'esnext'
  }),
  filesize(),
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
