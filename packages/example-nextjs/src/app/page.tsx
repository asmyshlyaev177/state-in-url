import Image from 'next/image';

import { GithubLink } from './components/GithubLink';
import { Form } from './Form';
import { Status } from './Status';
import Logo from '../../../../assets/logo.svg';

export default async function Home({ searchParams }: { searchParams: object }) {
  return (
    <main
      className="min-h-screen bg-gradient-to-b
     from-orange-300 to-orange-500 p-4"
    >
      <div className="flex flex-col items-center container ml-auto mr-auto">
        <div className="flex flex-col items-center bg-stone-100 w-full p-2 lg:max-w-[80%] lg:p-[4em] rounded-lg lg:pt-6">
          <div className="text-center min-h-[35vh] md:min-h-[25vh] flex flex-col justify-center mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-1">
              <Image
                priority
                src={Logo}
                alt="state-in-url logo"
                width="200"
                height="200"
              />
              <div className="text-center md:text-left ml-4">
                <h1 className="text-6xl font-semibold tracking-wide text-neutral-700  mb-2">
                  State in url
                </h1>

                <p className="text-2xl max-w-[700px] font-light text-neutral-700 mb-2">
                  State management and deep links
                </p>
                <p className="text-3xl tracking-wide text-neutral-800 max-w-[700px] mt-2">
                  Share complex state between unrelated React.js components and
                  sync it to the URL
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
            <header className="mb-8 flex justify-between items-center flex-wrap gap-2">
              <h2 className="text-3xl font-bold text-gray-800">
                Demo with Next.js SSR
              </h2>
              <GithubLink className="ml-auto" />
            </header>

            <div className="flex flex-col md:flex-row gap-8">
              <Form
                className="flex max-h-[450px] flex-col md:flex-row gap-8 basis-1/2"
                sp={searchParams}
              />
              <Status
                className="flex-1 max-h-[450px] bg-gray-100
             rounded-lg p-4 flex flex-col shadow-md border border-grey
              basis-1/2 grow-0"
                sp={searchParams}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
