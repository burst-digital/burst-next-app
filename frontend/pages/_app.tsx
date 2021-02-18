import DefaultMetatags from '@components/layout/DefaultMetatags/Component';
import Favicons from '@components/layout/Favicons/Component';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import React from 'react';

export default function App(props: AppProps) {
  return (
    <>
      <props.Component />

      <Head>
        <DefaultMetatags />
        <Favicons />
      </Head>
    </>
  );
}
