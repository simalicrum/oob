import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-4 pt-32 text-center font-inter sm:pt-48">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            Want help getting your business off the ground?
          </h1>

          <p className=" mt-6 text-xl text-gray-400">
            Starting your own business is a pain in the ass. We're here to help
            and it's easy. Let's get going!
          </p>
          <div className="mt-8 w-auto">
            <a href="#">
              <button className="w-full rounded-lg bg-gray-900 py-3 px-6 text-center text-sm text-white hover:bg-gray-700 sm:w-auto">
                Get started
              </button>
            </a>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
