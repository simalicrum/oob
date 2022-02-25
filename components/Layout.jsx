import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, session, status }) {
  return (
    <>
      <Head>
        <title>core</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto min-h-screen font-inter">
        <Navbar session={session} status={status} />
        {children}
      </main>
    </>
  );
}
