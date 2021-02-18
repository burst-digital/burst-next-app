import { Site } from '@constants/site';
import React from 'react';

const site = Site.eurofiber;

// Refer to: https://realfavicongenerator.net/
export default function Favicons() {
  // @TODO: make variable resolution dynamic based on envvar/domain.
  switch (site) {
    default:
    case Site.eurofiber: {
      return (
        <>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/eurofiber/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/eurofiber/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/eurofiber/favicon-16x16.png"
          />
          <link rel="manifest" href="/eurofiber/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/eurofiber/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/eurofiber/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-config"
            content="/eurofiber/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </>
      );
    }
  }
}
