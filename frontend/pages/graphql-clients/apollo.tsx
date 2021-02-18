import { ApolloProvider } from '@apollo/client';
import { useApollo, initializeApollo } from '@misc/apollo-client';
import { getOrigin } from '@misc/environments';
import { isServer } from '@misc/is-environment';
import resolveApiUrl from '@misc/resolve-api-url';

import { HomepageDocument, useHomepageQuery } from '@generated/_graphql-apollo';
import { GetStaticProps } from 'next';
import React from 'react';
import Link from 'next/link';
import { H1 } from '@components/layout/Heading/Component';
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

function Apollo(props: {
  children: React.ReactNode;
  initialApolloState: any;
  url: URL;
}) {
  const client = useApollo({
    url: props.url,
    initialApolloState: props.initialApolloState,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

function ApolloApp(props: {
  children: React.ReactNode;
  initialApolloState: any;
}) {
  const url = isServer()
    ? new URL(getOrigin())
    : resolveApiUrl(new URL(window.location.origin), { endpoint: '/api/cms' });

  return (
    <Apollo initialApolloState={props.initialApolloState ?? {}} url={url}>
      {props.children}
    </Apollo>
  );
}

export default function HomepageProxy(props: { initialApolloState: any }) {
  return (
    <ApolloApp initialApolloState={props.initialApolloState}>
      <Homepage />
    </ApolloApp>
  );
}

function Homepage() {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();
  const t = useKlot();

  const homepage: any = useHomepageQuery();

  return (
    <>
      <H1>{homepage.data?.homepage?.entity?.title}</H1>
      <h2>Language switch</h2>
      <nav>
        {Object.entries(localeIdentifiersByRegion).map(
          ([region, localeIdentifiers]) => (
            <React.Fragment key={`${region}--fragment`}>
              <h3 key={`${region}--h3`}>{region}</h3>
              <ul key={`${region}--ul`}>
                {localeIdentifiers.map(l =>
                  localeIdentifier.locale !== l.locale ? (
                    <li key={l.locale}>
                      <Link href="/" locale={l.locale}>
                        {l.language}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.locale}>
                      <span>{l.language} &mdash; you are here</span>
                    </li>
                  ),
                )}
              </ul>
            </React.Fragment>
          ),
        )}
      </nav>

      <h2>Translation test</h2>
      <h3>{t('Optical fiber')}</h3>

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

export const getStaticProps: GetStaticProps = async () => {
  const url = resolveApiUrl(new URL(getOrigin()));

  const apolloClient = initializeApollo(url);

  await apolloClient.query({ query: HomepageDocument });

  const initialApolloState = apolloClient.cache.extract();

  return {
    props: {
      initialApolloState,
    },
  };
};
