This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
The template used is [`burst-next-app`](https://github.com/burst-digital/burst-next-app)

## Getting Started

Set/update the following:

- [Environment files](#environment-files)
- [GraphQL](#graphQL)
- [Languages](#languages)
- [Miscellaneous](#misc)

If all is set, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Burst next app

This template is a boilerplate made for Burst projects.

### What's in the box?

This template consists of a few pre-installed npm modules we use often.

These are:

- [Axios](https://github.com/axios/axios)
- [GraphQL-request](https://github.com/prisma-labs/GraphQL-request)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Styled System](https://github.com/styled-system/styled-system)
- [klot](https://gitlab.com/straighter/klot/)

### What happens on what files?

If you are familiar with next you probably can follow, if not [check nextJS docs](https://nextjs.org/docs/basic-features/pages)

- `_app.tsx` - This includes a ThemeProvider, a Head with Metadata & Favicons, and the actual content.
- `_document.tsx` - This includes the needed code to make Styled Components work, and it has the Google Tag Manager component.
- `_error.tsx` - This is a custom error page, that isn't visible in development. It print the entire stack, so very helpful.
- `error-test.tsx` - This page is useful for testing the `_error.tsx` page.
- `404.tsx` - Custom 404 page, with already some components available.
- `homepage.cms.GraphQL` - An example query for GraphQL.
- `index.tsx` - A combination of everything.

## Details

### Environment files

Copy and rename `env.example.txt` to `.env.development` and `.env.production`.

### GraphQL

Update `codegen.yml` if needed. Currently the WEBSITE_ORIGIN is set to cms.domain.com.
All GraphQL related stuff is commented in the `index.tsx` page. If GraphQL is set up, it should be safe to update the query and uncomment the GraphQL related stuff.

#### Example GraphQL

A query example

```graphql
query Homepage {
  homepage: route(path: "/") {
    ... on EntityCanonicalUrl {
      entity {
        ... on NodeSpecialPage {
          title
        }
      }
    }
  }
}
```

A page example

```javascript
import { HomepageQuery } from '@generated/graphql-request';
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk';

const sdk = createGraphqlRequestSdk(url);
const homepage = await sdk.Homepage();

export default function Homepage(props: {
  homepage: HomepageQuery;
}) {
  return (
  <p>{(props.homepage as any).homepage.entity.title}</p>
  )
}

```

### Languages

You can change these values in `next.config.js` to add or remove languages.

```javascript
const defaultConfig = {
  i18n: {
    locales: [
      'en',
      'nl-nl',
      'en-nl',
      'nl-be',
      'en-be',
      'fr-be',
      'fr-fr',
      'en-fr',
    ],
    defaultLocale: 'en',
  },
};
```

### Aliases

We are using a few standard aliases in our codebase. These are not allowed to be changed, to ensure consistency in our codebases. However, you are allowed to add others.

```javascript
    "@components/*": ["components/*"],
    "@constants/*": ["constants/*"],
    "@generated/*": ["generated/*"],
    "@pages/*": ["pages/*"],
    "@i18n/*": ["i18n/*"],
    "@misc/*": ["misc/*"],
    "@lib/*": ["lib/*"]
```

### Theming

We have already set up a Theme Provider from Styled Components and a default theme in `./style-guide/default`

### Misc

Change the values in `./public/default/site.webmanifest`

### Ideas to do

- Determine if the Google Tag Manager should be removed ( see `./lib/react-gtm` )

### Scheduled to do

- Implement a fonts.css file instead of Global Styles from Styled Components
- Implement a working example of css variables and add top-level theme overrides
- Add usefull components we often use
  - _InternalExternalLink_
  - _Conditional Wrapper_
  - _React GTM_
  - _Sluggify function_
  - _useClientSideState_
  - Robots.txt
  - Sitemaps (api endpoint)
  - GraphQL (api endpoint
  - Middleware runner (?)
  - Breadcrumb
  - Redirect helper
  - SEO
  - 404
  - Cookiebar
  - SVGs ???

### Done

- ~~Add an example environment file~~
- ~~Add default meta tags~~
- ~~Add favicon~~

### Won't do

- We will not implement a state management solution as of now. This is too complex and is usually dependant of the type of project.
