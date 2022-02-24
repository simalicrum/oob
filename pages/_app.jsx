import { SessionProvider, useSession } from 'next-auth/react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import PageSpinner from '../components/PageSpinner';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }
  console.log('Auth happened');
  return (
    <Layout>
      <PageSpinner />
    </Layout>
  );
}
