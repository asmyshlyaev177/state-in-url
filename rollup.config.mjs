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

const bundle = (config) => ({
  sourcemap,
  preserveModules: true,
  preserveModulesRoot: './packages/urlstate',
  ...config,
});

export default {
  input: glob.sync("packages/urlstate/**/index.ts", { ignore: "**/*.test.*" }),
  // The CJS half is emitted but deliberately NOT reachable through the exports
  // map, so normal resolution can only ever pick the ESM build: subscribers.ts
  // keeps its store in module-scoped WeakMaps, and two builds live in one graph
  // would mean two stores and useSharedState silently not sharing. Reaching the
  // .cjs takes an explicit file path (a Jest moduleNameMapper, a bundler alias),
  // which is a whole-process substitution rather than a second copy.
  //
  // .cjs, not .js: the package is "type": "module", so a .js here would be
  // parsed as ESM and fail.
  output: [
    bundle({
      dir: 'dist',
      format: 'es',
      entryFileNames: '[name].mjs',
      // next ships no `exports` map (checked on 14.2, 15.5 and 16.3), so Node
      // resolves this as a file path — and ESM does no extension guessing, so
      // the bare specifier is ERR_MODULE_NOT_FOUND for anything that loads this
      // build through Node rather than a bundler (a Vitest suite with the
      // package externalized, say). The source keeps the bare specifier, which
      // is what the .d.ts and every bundler want; only the emitted ESM needs
      // the extension. CJS is unaffected — require() still guesses extensions.
      paths: { 'next/navigation': 'next/navigation.js' }
    }),
    bundle({
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      interop: 'auto'
    })
  ],
  ...clearScreen,
  plugins,
  external,
}
