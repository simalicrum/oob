import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto min-h-screen font-inter">
        {children}
      </main>
    </>
  );
}
