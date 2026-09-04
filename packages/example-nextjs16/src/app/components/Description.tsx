import { Link } from "./Link"
import { Share } from "./Share"
import { Word } from "./Word"
import type { SiteCopy } from "../i18n/copy/types"

export const Description = ({ copy, nextjsHref }: { copy: SiteCopy; nextjsHref: string }) => (
  <section className='flex flex-col items-start w-full max-w-[640px] mt-4'>
    <h2 className='text-3xl mt-12 mb-4 font-bold font-display text-ink'>
      {copy.description.title}
    </h2>

    <div className='text-base leading-relaxed space-y-3 text-ink2'>
      <p>{copy.description.whyLead} <Word>state-in-url</Word> {copy.description.whyMid} <Word>React.useState</Word>{copy.description.whyTail}</p>
      <p>{copy.description.storeLead} <Word>Date</Word> {copy.description.dateMid} <Word>Date</Word> {copy.description.dateTail}</p>
      <p>{copy.description.tested}</p>
    </div>

    <h3 className='mt-8 mb-2 font-bold text-lg font-display text-ink'>{copy.description.suspenseTitle}</h3>
    <p className='text-base leading-relaxed text-ink2'>{copy.description.suspenseLead} <Word>useSearchParams</Word>{copy.description.suspenseAfterHook} <Word>Suspense</Word> {copy.description.suspenseAfterBoundary} <Word>cacheComponents</Word> {copy.description.suspenseAfterFlag} <Word>history.pushState</Word> {copy.description.suspenseTail}</p>
    <p className='mt-3 text-base leading-relaxed'>
      <Link href={nextjsHref} className="font-semibold text-[var(--accent-on-soft)] hover:underline">{copy.nextjs.crumb}</Link>
    </p>

    <h3 className='mt-8 mb-2 font-bold text-lg font-display text-ink'>{copy.description.otherTitle}</h3>
    <p className='text-base leading-relaxed text-ink2'>{copy.description.helpersLead} <Word>encodeState</Word> / <Word>decodeState</Word> {copy.description.helpersTail}</p>

    <p className='mt-8 text-base text-ink2'>
      {copy.description.ctaLead}{' '}
      <a href="https://github.com/asmyshlyaev177/state-in-url" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">{copy.description.ctaLinkText}</a>
      {' '}{copy.description.ctaTail}
    </p>

    <h3 className='mt-12 mb-4 font-bold text-lg font-display text-ink self-center'>{copy.share.title}</h3>
    <Share copy={copy.share} />

    <a href="https://www.uneed.best/tool/state-in-url" target="_blank" rel="noopener" className="mt-8 max-w-80 self-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://www.uneed.best/EMBED2B.png" alt={copy.description.uneedBadgeAlt} loading="lazy" />
    </a>
    <div className="mb-8"></div>
  </section>
)
