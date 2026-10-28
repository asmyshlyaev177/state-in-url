import { isWebKit } from '../utils';

export const SYMBOLS = {
  date: '⏲',
  undefined: '∙undefined',
  escape: '↪',
} as const;

// history writes allowed: WebKit 100 per 30 s (30000/330 ≈ 91), Blink and Gecko 200 per 10 s (10000/70 ≈ 143)
export const TIMEOUT = isWebKit ? 330 : 70;
