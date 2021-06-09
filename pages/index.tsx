// Base
import React from 'react';
import { GetStaticProps } from 'next';

// Graphql
// import resolveApiUrl from '@misc/resolve-api-url';
// import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk';
// import { getCmsUrl } from '@misc/environments';

// Constants
import {
  DEFAULT_REVALIDATE,
} from '@constants/revalidate';

// Localization
import {
  useLocaleIdentifier,
  useRegionalLocaleIdentifiers,
  // resolveLocaleIdentifier,
} from '@i18n/localization';

import { useKlot } from '@i18n/translate';
import {
  formatCurrency,
  formatDate,
  formatTime,
} from '@i18n/internationalization';

// SEO
import Metatags from '@components/molecules/Metatags/Component';

// Components
import LanguageSwitch from '@components/organisms/LanguageSwitch/Component';
import { CSSVariablesExample } from '@components/atoms/CSSVariablesExample/Component';
import { IconMapper } from '@components/atoms/Icons/Component';

// Redirects
// import { getRedirect } from '@misc/redirect';

export const getStaticProps: GetStaticProps = async ctx => {
  // const locale = ctx.locale ?? ctx.defaultLocale ?? '';
  // const localeIdentifier = resolveLocaleIdentifier(locale);

  // const url = resolveApiUrl(new URL(getCmsUrl()));
  // const sdk = createGraphqlRequestSdk(url);

  // const path = localeIdentifier.toPath('/');
  // const redirect = await getRedirect(path, sdk);

  // if (redirect) {
  //   return redirect;
  // }

  return {
    revalidate: DEFAULT_REVALIDATE, 
    props: {
      date: new Date().toString(),
    },
  };
}


export default function Homepage(props: { date: string }) {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();
  const t = useKlot();
  const Icon = IconMapper('arrow-right');

  return (
    <>
      <Metatags
        {...{
          title: 'Page title',
          description: 'Page description',
        }}
      />
      <h1>burst-digital/burst-next-app</h1>
      <small>{props.date}</small>
      <h2>CSS Variables test</h2>
      <CSSVariablesExample>All text now are colored by <pre style={{display: 'inline'}}>color: var(--text-color);</pre> which is black, but if you changed it by adding a class with: <pre style={{display: 'inline'}}>--text-color: var(--color-red-900);</pre>:</CSSVariablesExample>
      <CSSVariablesExample style={{display: 'inline'}} className="color__red">it turns red</CSSVariablesExample>
      <CSSVariablesExample style={{display: 'inline'}} className="color__blue"> or blue</CSSVariablesExample>
      <CSSVariablesExample style={{display: 'inline'}}> and it only applies to the element itself.</CSSVariablesExample>

      <CSSVariablesExample>It's also possible to add top-level theming. It's pretty easy, just add a class with <pre style={{display: 'inline'}}>.theme__dark & {`{...}`}</pre> so every {`<CSSVariablesExample>`} with a parent with the class `theme__dark` has a different styling.</CSSVariablesExample>
      <div className="theme__dark">
        <CSSVariablesExample>See?</CSSVariablesExample>
      </div>


      <h2>Icons</h2>
      <p>Use the iconMapper to retrieve icons: {Icon} </p>
      <div className="theme__dark">
        <CSSVariablesExample>Make sure to use currentColor as a color in the SVg to color them {Icon}</CSSVariablesExample>
      </div>

      <LanguageSwitch />
      <h2>Translation test</h2>
      <h3>{t('Test')}</h3>
      <h2>Internationalization test</h2>
      <h3>Short date: {formatDate(new Date(), localeIdentifier.locale)}</h3>
      <h3>Time: {formatTime(new Date(), localeIdentifier.locale)}</h3>
      <h3>Currency: {formatCurrency(89.99, localeIdentifier.locale)}</h3>
      <h2>Current locale</h2>
      <pre>{JSON.stringify(localeIdentifier, null, 4)}</pre>
      <h2>Locales</h2>
      <pre>{JSON.stringify(localeIdentifiersByRegion, null, 4)}</pre>
    </>
  );
}
