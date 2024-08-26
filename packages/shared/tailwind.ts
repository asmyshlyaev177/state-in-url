import type { Config } from 'tailwindcss';

export const sharedConfig: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
};
