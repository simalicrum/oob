import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PageSpinner from '../components/PageSpinner';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <Layout session={session} status={status}>
      <Hero />
    </Layout>
  );
}
