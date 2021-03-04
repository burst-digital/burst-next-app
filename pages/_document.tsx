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

// Refer to: https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
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
          <GtmHead containerId={containerId} />
        </Head>
        <body>
          <GtmBody containerId={containerId} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
