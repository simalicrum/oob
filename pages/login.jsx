import Head from 'next/head';
import Layout from '../components/Layout';
import Login from '../components/Login';

export default function Home() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}
