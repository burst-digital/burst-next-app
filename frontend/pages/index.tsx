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
  formatShortDate,
  formatTime,
} from '@i18n/internationalization';

export default function Homepage() {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();
  const t = useKlot();

  console.log(localeIdentifier.locale);

  return (
    <>
      <H1>Homepage</H1>
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
      <h3>
        Short date: {formatDate(new Date(), localeIdentifier.locale)}
      </h3>
      <h3>Time: {formatTime(new Date(), localeIdentifier.locale)}</h3>
      <h3>Currency: {formatCurrency(89.99, localeIdentifier.locale)}</h3>

      <h2>Current locale</h2>
      <pre>{JSON.stringify(localeIdentifier, null, 4)}</pre>

      <h2>Locales</h2>
      <pre>{JSON.stringify(localeIdentifiersByRegion, null, 4)}</pre>
    </>
  );
}
