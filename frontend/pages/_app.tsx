import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import DefaultMetatags from '@components/layout/DefaultMetatags/Component';
import Favicons from '@components/layout/Favicons/Component';

export default function App(props: AppProps) {
  return (
    <>
      <props.Component {...props.pageProps} />

      <Head>
        <DefaultMetatags />
        <Favicons />
      </Head>
    </>
  );
}
