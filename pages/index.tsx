import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-4 pt-48 text-center font-inter">
        <div className="max-w-5xl">
          <h1 className="text-6xl font-bold text-gray-900">
            Want help getting your business off the ground?
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Starting your own business is a pain in the ass. We're here to help
            and it's easy. Let's get going!
          </p>
          <div className="mt-8 w-auto">
            <a href="#">
              <button className="rounded-lg bg-gray-900 py-3 px-6 text-center text-sm text-white hover:bg-gray-700">
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
