// Locale code → that language's copy.
//
// Static imports so each locale's strings are bundled with the routes that use
// them; a dynamic import keyed on the route param would pull all nine into
// every page.

import { copy as en } from './en';
import { copy as es } from './es';
import { copy as fr } from './fr';
import { copy as ja } from './ja';
import { copy as ko } from './ko';
import { copy as ptBR } from './pt-br';
import { copy as ru } from './ru';
import { copy as vi } from './vi';
import { copy as zhCN } from './zh-cn';
import type { SiteCopy } from './types';

export type { SiteCopy };

const BY_CODE: Record<string, SiteCopy> = {
  en,
  'zh-CN': zhCN,
  ja,
  ko,
  ru,
  es,
  'pt-BR': ptBR,
  fr,
  vi,
};

/**
 * Falls back to English rather than throwing. The only way to get here with an
 * unknown code is a locale that is in the routing table but has no copy module
 * yet, and an English page is a better answer to that than a 500.
 */
export const copyFor = (code: string): SiteCopy => BY_CODE[code] ?? en;
