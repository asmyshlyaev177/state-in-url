import { Word } from "./Word"

export const Description = () => (
  <section className='flex flex-col items-center text-xl text-justify'>
    <h2 className='text-3xl mt-12 mb-4'>
      Motivation
    </h2>

    <div className='max-w-[600px] mb-2'>
      <div>Main goal is to provide state management with URI and good developer experience, there are many similar libraries, but non of them are easy enough to use.</div>
      <br />
      <div><Word>state-in-url</Word> provides <Word>useUrlState</Word> hook for Next.js/react-router. With it you can store state easily without a lot of boilerplate.<br />
        No need to wrap components in a provider, can share data between unrelated client components. API is very similar to <Word>React.useState.</Word>
        </div>
  <br />
      <div>Structure and types are preserved, with full Typescript support.</div>

      <h3 className='mb-4 mt-6 font-semibold text-center'>Code quality</h3>
      <div>Library developed with best practices and TDD in mind, and it&apos;s ready for production use.</div >
    </div>


      <h3 className='mt-8 mb-6 font-semibold'>Other frameworks or pure JS</h3>
      <div className='max-w-[600px]'>
        There are more hooks and helpers to deal with serialization/deconding of data, check out <a href="https://github.com/asmyshlyaev177/state-in-url" target="_blank" rel="noopener" className="text-blue-600 hover:underline">GitHub page</a>.
      </div>
  </section>
)
