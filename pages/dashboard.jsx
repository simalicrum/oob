import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import Secret from '../components/Secret';

export default function Dashboard() {
  const { data: session, status } = useSession();
  return (
    <Layout session={session} status={status}>
      <Secret />
    </Layout>
  );
}

Dashboard.auth = true;
