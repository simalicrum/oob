import Layout from '../components/Layout';
import Login from '../components/Login';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <Layout session={session} status={status}>
      <Login />
    </Layout>
  );
}
