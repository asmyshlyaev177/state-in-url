import { sharedConfig } from '../shared/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: ['./src/**/*.{astro,ts,tsx}', '../shared/components/**/*.tsx'],
  plugins: [],
};
