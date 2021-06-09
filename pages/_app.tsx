import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import DefaultMetatags from '@components/molecules/DefaultMetatags/Component';
import Favicons from '@components/molecules/Favicons/Component';
import { usePageView } from '@lib/react-gtm/next/use-page-view';
import { GlobalStyles } from '@components/atoms/GlobalStyles/Component';
import { defaultTheme } from '../theme/default';
import Breadcrumb from '@components/molecules/Breadcrumb/Component';
import { CookieMessage } from '@components/organisms/CookieMessage/Component';

export default function App(props: AppProps) {
  usePageView();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyles />

          <Breadcrumb />
          <props.Component {...props.pageProps} />

          <CookieMessage />
        </>
      </ThemeProvider>

      <DefaultMetatags />
      <Favicons />
    </>
  );
}
