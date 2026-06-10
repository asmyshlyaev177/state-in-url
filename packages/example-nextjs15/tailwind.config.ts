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
  theme: {
    extend: {
      ...(sharedConfig.theme?.extend ?? {}),
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: 'var(--ink)',
        ink2: 'var(--ink-2)',
        brand: 'var(--brand)',
        'brand-strong': 'var(--brand-strong)',
        'brand-dim': 'var(--brand-dim)',
        surface: {
          DEFAULT: 'var(--surface)',
          0: 'var(--surface-0)',
          1: 'var(--surface-1)',
          2: 'var(--surface-2)',
        },
        line: 'var(--line)',
      },
    },
  },
  plugins: [TailwindForm],
};
export default config;
