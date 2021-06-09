import React from 'react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Head as GtmHead, Body as GtmBody } from '@lib/react-gtm';
import { ServerStyleSheet } from 'styled-components';
import resolveGtmContainerId from '@misc/resolve-gtm-container-id';
import PerformanceMark from '@lib/react-performance-api/performance-mark/Component';

// Refer to: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <PerformanceMark name="styles-start" />
            <PerformanceMark name="initial-styles-start" />
            {initialProps.styles}
            <PerformanceMark name="initial-styles-end" />
            <PerformanceMark name="sheet-styles-start" />
            {sheet.getStyleElement()}
            <PerformanceMark name="sheet-styles-end" />
            <PerformanceMark name="initial-styles-end" />
            <PerformanceMark name="styles-end" />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const containerId = resolveGtmContainerId();

    return (
      <Html>
        <Head>
          <PerformanceMark name="head-start" />

          <PerformanceMark name="gtm-start" />
          <GtmHead containerId={containerId} />
          <PerformanceMark name="gtm-end" />

          <PerformanceMark name="fonts-start" />

          <PerformanceMark name="local-fonts-preload-start" />
          <link
            rel="preload"
            href="fonts/AvenirNext-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="fonts/AvenirNext-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <PerformanceMark name="local-fonts-preload-end" />

          <PerformanceMark name="local-fonts-start" />
          <link href="./fonts/fonts.css" rel="stylesheet" />
          <PerformanceMark name="local-fonts-end" />

          <PerformanceMark name="google-fonts-start" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          />
          <PerformanceMark name="google-fonts-end" />

          <PerformanceMark name="fonts-end" />

          <PerformanceMark name="head-end" />
        </Head>
        <body>
          <PerformanceMark name="body-start" />

          <GtmBody containerId={containerId} />

          <PerformanceMark name="main-start" />
          <Main />
          <PerformanceMark name="main-end" />

          <PerformanceMark name="next-scripts-body-start" />
          <NextScript />
          <PerformanceMark name="next-scripts-body-end" />

          <PerformanceMark name="body-end" />
        </body>
      </Html>
    );
  }
}
