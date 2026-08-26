import {
  contrast,
  hexToRgb,
  lc,
  oklchToRgb,
  rgbToOklch,
  toHex,
} from '@asmyshlyaev177/design-tokens';
import { type ShikiTransformer } from 'shiki';

/**
 * github-dark's palette sits at Lc 50-51 on this site's code ground — under
 * the floor `tests/landing/contrast.spec.ts` holds body-size text to. Raising
 * each token's OKLCH lightness clears it while leaving hue and chroma alone,
 * so the theme still reads as github-dark.
 */

/** `--code-bg` in `styles.css`, which is what every token is painted on. */
const BACKGROUND = oklchToRgb({ L: 0.21, C: 0.018, h: 48 });

const LC_FLOOR = 60;
const WCAG_FLOOR = 4.5;
const STEP = 0.005;

const cache = new Map<string, string>();

const clears = (rgb: ReturnType<typeof oklchToRgb>) =>
  lc(rgb, BACKGROUND) >= LC_FLOOR && contrast(rgb, BACKGROUND) >= WCAG_FLOOR;

function lift(color: string): string {
  const cached = cache.get(color);
  if (cached) return cached;

  const { L, C, h } = rgbToOklch(hexToRgb(color));
  let lightness = L;
  let rgb = oklchToRgb({ L: lightness, C, h });

  while (lightness < 1 && !clears(rgb)) {
    lightness = Math.min(1, lightness + STEP);
    rgb = oklchToRgb({ L: lightness, C, h });
  }

  const result = lightness === L ? color : toHex(rgb);
  cache.set(color, result);
  return result;
}

export const shikiContrast: ShikiTransformer = {
  name: 'design-tokens-contrast',
  tokens(lines) {
    for (const line of lines) {
      for (const token of line) {
        // Shiki resolves theme colours to hex; a `var(...)` fg would not parse.
        if (token.color?.startsWith('#')) token.color = lift(token.color);
      }
    }
  },
};
