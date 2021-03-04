import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import DefaultMetatags from '@components/molecules/DefaultMetatags/Component';
import Favicons from '@components/molecules/Favicons/Component';
import { usePageView } from '@lib/react-gtm/next/use-page-view';
import { GlobalStyles } from '@components/atoms/GlobalStyles/Component';
import { defaultTheme } from '../theme/default';

export default function App(props: AppProps) {
  usePageView();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyles />
          <props.Component {...props.pageProps} />
        </>
      </ThemeProvider>

      <Head>
        <DefaultMetatags />
        <Favicons />
      </Head>
    </>
  );
}
