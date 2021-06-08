// Base
import React from 'react';

// Localization
import {
  useLocaleIdentifier,
  useRegionalLocaleIdentifiers,
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

export async function getStaticProps() {
  // const url = getWebsiteApiOrigin();

  return {
    revalidate: 5,
    props: {
      date: new Date().toString(),
    },
  };
}

export default function Homepage(props: { date: string }) {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();
  const t = useKlot();

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
