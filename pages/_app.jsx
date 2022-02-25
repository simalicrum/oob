import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { useSession } from 'next-auth/react';
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
  return <PageSpinner />;
}
