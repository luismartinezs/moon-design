import React, { ReactChild, ReactNode } from 'react';
// import '../styles/globals.css';
import '../styles/themes.css';
import '../styles/custom.css';
import '../styles/output.min.css';
// import '@moon/core/lib/loader/styles.css';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { DocsThemeProvider } from '../components/themes/DocsThemeProvider';
import type { AppProps } from 'next/app';

type GetLayout = (page: ReactNode) => ReactChild & ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout;

  return (
    <>
      {/* TODO Add favicon.ico*/}
      <Head>
        <title>Moon Design System</title>
        <meta name="description" content="Moon Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DocsThemeProvider>
        {getLayout ? (
          getLayout(<Component {...pageProps} />)
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </DocsThemeProvider>
    </>
  );
}
export default MyApp;
