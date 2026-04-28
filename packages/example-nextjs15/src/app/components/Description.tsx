import { Share } from "./Share"
import { Word } from "./Word"

export const Description = () => (
  <section className='flex flex-col items-start w-full max-w-[600px] mt-4'>
    <h2 className='text-3xl mt-12 mb-4 font-bold font-display text-ink'>
      Why state-in-url?
    </h2>

    <div className='text-base leading-relaxed space-y-3 text-ink2'>
      <p>URL state libraries exist, but most are either too cumbersome to set up or too limited in what they can store. state-in-url aims to be the one that just works.</p>
      <p><Word>state-in-url</Word> provides the <Word>useUrlState</Word> hook for Next.js and react-router. Store state without boilerplate, implement deep links, and share data between unrelated client components — no provider needed. API mirrors <Word>React.useState</Word>.</p>
      <p>Structure and types are preserved, with full TypeScript support.</p>
    </div>

    <h3 className='mt-8 mb-2 font-bold text-base font-display text-ink'>Code quality</h3>
    <p className='text-base leading-relaxed text-ink2'>Built with best practices and TDD — production-ready.</p>

    <h3 className='mt-8 mb-2 font-bold text-base font-display text-ink'>Other frameworks or pure JS</h3>
    <p className='text-base leading-relaxed text-ink2'>More hooks and helpers for serialization and decoding of data.</p>

    <p className='mt-8 text-base text-ink2'>
      Check out the{' '}
      <a href="https://github.com/asmyshlyaev177/state-in-url" target="_blank" rel="noopener" className="font-semibold text-brand hover:underline">GitHub page</a>
      {' '}— a star goes a long way.
    </p>

    <p className='mt-12 mb-4 text-xs font-bold uppercase tracking-widest text-brand self-center'>Share with other devs</p>
    <Share />

    <a href="https://www.uneed.best/tool/state-in-url" target="_blank" rel="noopener" className="mt-8 max-w-80 self-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://www.uneed.best/EMBED2B.png" alt="Uneed Embed Badge" loading="lazy" />
    </a>
    <div className="mb-8"></div>
  </section>
)
