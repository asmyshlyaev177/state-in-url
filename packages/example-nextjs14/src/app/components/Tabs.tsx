'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const scroll = false;

export const Tabs = ({ entries, className = '' }: { entries: { text: string, url: string }[], className: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className={`z-10 ${className}`}>
      <div className='sm:hidden '>
        <label htmlFor="tabs" className="sr-only">Select framework</label>
        <select id="tabs" onChange={(ev) => {
          router.push(ev.target.value, { scroll })
        }} className="px-4 pr-8 border text-sm rounded-lg text-white block w-full dark:bg-gray-700 border-gray-600 dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
          {entries.map((en) => (
            <option selected={en.url === pathname} value={en.url} key={en.text} className='w-full p-4'>{en.text}</option>
          ))}
        </select>
      </div>
      <ul className="text-sm font-medium text-center text-gray-500 rounded-lg shadow flex flex-nowrap dark:divide-gray-700 dark:text-gray-400">
        {entries.map((en, ind, arr) => (
          <Link href={en.url} scroll={scroll} className={`max-sm:hidden w-full self-stretch focus-within:z-10`} key={en.text}>
            <span className={` ${pathname === en.url && 'bg-orange-500' || 'bg-gray-100 dark:bg-gray-700'} h-full justify-stretch inline-flex items-center w-full
            transition sm:text-nowrap p-4 ${ind === 0 && 'rounded-s-lg' || ''} ${ind !== 0 && ind !== arr.length - 1 && 'border-r' || ''} ${ind === arr.length - 1 && 'border-s-0 rounded-e-lg' || ''} text-gray-900  border-gray-200 dark:border-gray-700 focus:ring-4 focus:ring-blue-300 active focus:outline-none  dark:text-white`} aria-current="page">{en.text}</span>
          </Link>
        ))}
      </ul>
    </nav>
  )
}
