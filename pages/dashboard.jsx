import { getSession, useSession, signIn, signOut } from 'next-auth/react';
import Layout from '../components/Layout';
import Secret from '../components/Secret';

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Secret />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
