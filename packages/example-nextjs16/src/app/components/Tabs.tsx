'use client'

import { Link } from './Link'
import { usePathname, useRouter } from 'next/navigation'

import { localePrefix, localeFromParam, stripLocale } from '../i18n'
import type { TabsCopy } from '../i18n/copy/types'

const scroll = false;

export const Tabs = ({ className = '', copy }: { className: string; copy: TabsCopy }) => {
  const pathname = usePathname();
  const router = useRouter();

  // The tabs switch router, not language, so they stay inside whichever
  // language the reader is already in. `TABS` lists the routes
  // locale-independently and the prefix is applied here.
  //
  // Without this the mobile <select> threw on every translated page:
  // `TABS.find(t => t.url === pathname)!` matched nothing at `/ja`, and the
  // non-null assertion turned that into a 500 rather than a wrong tab.
  const segment = pathname.split('/').filter(Boolean)[0] ?? '';
  const prefix = localeFromParam(segment) ? `/${segment}` : '';
  const here = stripLocale(pathname);
  const hrefOf = (url: string) => `${prefix}${url}`.replace(/\/$/, '') || '/';
  const current = TABS.find((tab) => tab.url === here) ?? TABS[0];

  return (
    <nav className={`z-10 ${className}`} data-testid="tabs">
      <div className='sm:hidden '>
        <label htmlFor="tabs" className="sr-only">{copy.selectLabel}</label>
        <select id="tabs" value={hrefOf(current.url)} onChange={(ev) => {
          router.push(ev.target.value, { scroll })
        }} className="px-4 pr-8 py-3 border text-sm rounded-lg text-ink block w-full bg-surface-2 border-line focus:ring-brand focus:border-brand">
          {TABS.map((en) => (
            <option value={hrefOf(en.url)} key={en.text} className='w-full p-4'>{en.text}</option>
          ))}
        </select>
      </div>
      <ul className="fw-tabs max-sm:hidden">
        {TABS.map((en) => (
          <li key={en.text} className="flex">
            <Link
              href={hrefOf(en.url)}
              scroll={scroll}
              className="fw-tab"
              aria-current={here === en.url ? 'page' : undefined}
            >
              {en.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Framework names, paired 1:1 with their locale-independent routes. Neither
// the labels nor the paths are translated.
const TABS = [
  { text: "Next.js", url: '/' },
  { text: "react-router", url: '/react-router' },
  { text: "remix", url: '/remix' },
  { text: "astro", url: '/astro' },
]
