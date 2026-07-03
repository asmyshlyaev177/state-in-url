import { Share } from "./Share"
import { Word } from "./Word"

export const Description = () => (
  <section className='flex flex-col items-start w-full max-w-[640px] mt-4'>
    <h2 className='text-3xl mt-12 mb-4 font-bold font-display text-ink'>
      Why state-in-url?
    </h2>

    <div className='text-base leading-relaxed space-y-3 text-ink2'>
      <p>URL state libraries exist, but most are either cumbersome to set up or limited in what they can store. <Word>state-in-url</Word> aims to be the one that just works: an API that mirrors <Word>React.useState</Word>, with the URL as the store.</p>
      <p>Store state without boilerplate, build deep links, and share data between unrelated client components — no provider needed. Structure and types are preserved end to end: a <Word>Date</Word> goes in, a <Word>Date</Word> comes out.</p>
      <p>Built test-first, with unit and cross-browser e2e suites running on every commit.</p>
    </div>

    <h3 className='mt-8 mb-2 font-bold text-lg font-display text-ink'>Not on Next.js or react-router?</h3>
    <p className='text-base leading-relaxed text-ink2'>The <Word>encodeState</Word> / <Word>decodeState</Word> helpers work with any framework or plain JS — the hooks are a convenience on top.</p>

    <p className='mt-8 text-base text-ink2'>
      Check out the{' '}
      <a href="https://github.com/asmyshlyaev177/state-in-url" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">GitHub page</a>
      {' '}— a star goes a long way.
    </p>

    <h3 className='mt-12 mb-4 font-bold text-lg font-display text-ink self-center'>Share it with other devs</h3>
    <Share />

    <a href="https://www.uneed.best/tool/state-in-url" target="_blank" rel="noopener" className="mt-8 max-w-80 self-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://www.uneed.best/EMBED2B.png" alt="Uneed Embed Badge" loading="lazy" />
    </a>
    <div className="mb-8"></div>
  </section>
)
