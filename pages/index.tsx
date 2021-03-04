// Base
import React from 'react';
import Head from 'next/head';

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

// Components
import { H1 } from '@components/atoms/Heading/Component';
import { Logo } from '@components/atoms/Logo/Component';
import { Card } from '@components/atoms/Card/Component';
import LanguageSwitch from '@components/organisms/LanguageSwitch/Component';
import { Grid, Column } from '@components/atoms/Grid/Component';

// Utils
import resolveApiUrl from '@misc/resolve-api-url';
import { getOrigin } from '@misc/environments';

export async function getStaticProps() {
  const url = resolveApiUrl(new URL(getOrigin()));

  return {
    revalidate: 5,
    props: {
      date: new Date().toString(),
      // homepage,
    },
  };
}

export default function Homepage(props: {
  date: string;
}) {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();
  const t = useKlot();

  return (
    <>
    <Head>
      <title>Default title</title>
    </Head>
    <Grid marginTop={20} marginBottom={20}>
      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '2 / 10',
          '960': '2 / 14',
        }}
      >
        <Logo />
        <H1>burst-digital/burst-next-app</H1>
        <small>{props.date}</small>
      </Column>
      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '2 / 10',
          '960': '2 / 14',
        }}
      >
        <Card>Dit is een column die over alle columns heen gaat</Card>
      </Column>
      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '2 / 4',
          '960': '2 / 6',
        }}
      >
        <Card>
          <LanguageSwitch />
        </Card>
      </Column>
      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '4 / 6',
          '960': '6 / 10',
        }}
      >
        <Card>
          <h2>Translation test</h2>
          <h3>{t('Optical fiber')}</h3>
        </Card>
      </Column>
      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '6 / 8',
          '960': '10 / 14',
        }}
      >
        <Card>
          <h2>Internationalization test</h2>
          <h3>Short date: {formatDate(new Date(), localeIdentifier.locale)}</h3>
          <h3>Time: {formatTime(new Date(), localeIdentifier.locale)}</h3>
          <h3>Currency: {formatCurrency(89.99, localeIdentifier.locale)}</h3>
        </Card>
      </Column>

      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '2 / 5',
          '960': '2 / 8',
        }}
      >
        <Card>
          <h2>Current locale</h2>
          <pre>{JSON.stringify(localeIdentifier, null, 4)}</pre>
        </Card>
      </Column>

      <Column
        gridColumn={{
          '_': '2 / 6',
          '600': '5 / 10',
          '960': '8 / 14',
        }}
      >
        <Card>
          <h2>Locales</h2>
          <pre>{JSON.stringify(localeIdentifiersByRegion, null, 4)}</pre>
        </Card>
      </Column>
    </Grid>
    </>
  );
}
