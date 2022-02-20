import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto min-h-screen font-inter">
        <Navbar />
        {children}
      </main>
    </>
  );
}
