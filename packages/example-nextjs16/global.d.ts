import type { HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Custom element loaded from https://asmyshlyaev177.dev/for-hire-badge.js
       * — see the script tag in src/app/template.tsx.
       */
      'for-hire-badge': HTMLAttributes<HTMLElement> & {
        theme?: 'auto' | 'light' | 'dark';
        position?:
          | 'bottom-right'
          | 'bottom-left'
          | 'top-right'
          | 'top-left';
        label?: string;
      };
    }
  }
}

declare module '*.html';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export = content;
}

export type {};
