import TailwindForm from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

import { sharedConfig } from '../shared/tailwind';

const config: Config = {
  ...sharedConfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [TailwindForm],
};
export default config;
