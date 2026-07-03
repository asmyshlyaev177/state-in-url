'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const scroll = false;

export const Tabs = ({ className = '' }: { className: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`z-10 ${className}`} data-testid="tabs">
      <div className='sm:hidden '>
        <label htmlFor="tabs" className="sr-only">Select framework</label>
        <select id="tabs" value={TABS.find(en => en.url === pathname)!.url} onChange={(ev) => {
          router.push(ev.target.value, { scroll })
        }} className="px-4 pr-8 py-3 border text-sm rounded-lg text-ink block w-full bg-surface-2 border-line focus:ring-brand focus:border-brand">
          {TABS.map((en) => (
            <option value={en.url} key={en.text} className='w-full p-4'>{en.text}</option>
          ))}
        </select>
      </div>
      <ul className="fw-tabs max-sm:hidden">
        {TABS.map((en) => (
          <li key={en.text} className="flex">
            <Link
              href={en.url}
              scroll={scroll}
              className="fw-tab"
              aria-current={pathname === en.url ? 'page' : undefined}
            >
              {en.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const TABS = [
  { text: "Next.js", url: '/' },
  { text: "react-router", url: '/react-router' },
  { text: "remix", url: '/remix' },
]
