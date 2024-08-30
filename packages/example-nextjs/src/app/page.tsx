import { Skeleton } from '@nextui-org/skeleton';
import dynamic from 'next/dynamic';

import { GithubLink } from './components/GithubLink';
import { UrlBox } from './components/UrlBox';
import { Form } from './Form';
import { Logo } from './Logo';
import { Provider } from './Provider';
import { Status } from './Status';

const CodeBlocks = dynamic(
  () => import('./components/CodeBlocksNext').then((mod) => mod.CodeBlocks),
  {
    loading: () => (
      <Skeleton
        isLoaded={false}
        className="bg-white min-h-[1466px] min-[384px]:min-h-[1366px] sm:min-h-[1186px] md:min-h-[1126px]"
      ></Skeleton>
    ),
  },
);
const Footer = dynamic(
  () => import('./components/Footer').then((mod) => mod.Footer),
  { loading: () => <Skeleton isLoaded={false} className=""></Skeleton> },
);

const Stats = dynamic(() => import('./Stats').then((mod) => mod.Stats), {
  loading: () => null,
});

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <Provider>
      <main
        className="bg-gradient-to-b
     from-orange-200 to-orange-400 p-4"
      >
        <div className="flex flex-col items-center container ml-auto mr-auto">
          <div className="flex flex-col items-center bg-gradient-to-t from-stone-50 to-white w-full p-2 pt-8 xl:max-w-[80%] lg:p-[4em] rounded-lg lg:pt-6">
            <div className="text-center min-h-[35vh] md:min-h-[25vh] flex flex-col justify-center mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-1">
                <div className="text-center md:text-left ml-4 flex flex-col items-center min-[800px]:items-left min-[800px]:flex-row gap-6">
                  <Logo className="relative block min-w-[150px] max-w-[150px] drop-shadow-xl hover:drop-shadow-2xl transition ease-in duration-150" />

                  <div>
                    <h1 className="text-6xl font-semibold tracking-wide text-neutral-700 mb-2 drop-shadow-sm">
                      State in url
                    </h1>
                    <p className="text-2xl max-w-[700px] font-light text-neutral-700 mb-2 drop-shadow-sm">
                      State management and deep links
                    </p>
                    <p className="text-3xl tracking-wide text-neutral-800 max-w-[700px] mt-2  drop-shadow-sm">
                      Share complex state between unrelated React.js components
                      and sync it to the URL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-2 sm:p-8 max-w-4xl w-full">
              <header className="mb-2 flex justify-between items-center max-[450px]:flex-wrap gap-2">
                <h2 className="text-3xl font-bold text-gray-800">
                  Demo with Next.js
                </h2>
                <div className="order-first min-[450px]:order-last max-[450px]:basis-full flex justify-end">
                  <GithubLink className="" />
                </div>
              </header>

              <div className="mb-3">
                <UrlBox />
              </div>

              <div className="flex flex-col md:flex-row gap-8 relative">
                <Form
                  className="flex max-h-[550px] flex-col md:flex-row gap-8 basis-1/2"
                  searchParams={searchParams}
                />
                <Status
                  className="flex-1 w-full max-h-[550px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-1"
                  sp={searchParams}
                />
              </div>
            </div>

            <div className="mt-14">
              <CodeBlocks />
            </div>
          </div>
        </div>

        <Footer />

        <Stats />
      </main>
    </Provider>
  );
}
