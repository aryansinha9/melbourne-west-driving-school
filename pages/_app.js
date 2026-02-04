import Layout from '@/components/Layout';
import '@/styles/globals.css';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Melbourne West Driving School</title>
        <meta name="description" content="Safe and confident driving lessons in Melbourne West." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;