import React from 'react';
import { H1 } from '@components/layout/Heading/Component';
import {
  useLocaleIdentifier,
  useRegionalLocaleIdentifiers,
} from '@misc/locale-identifiers';

export default function Homepage() {
  const localeIdentifier = useLocaleIdentifier();
  const localeIdentifiersByRegion = useRegionalLocaleIdentifiers();

  return (
    <>
      <H1>Homepage</H1>
      <h2>Current locale</h2>
      <pre>{JSON.stringify(localeIdentifier, null, 4)}</pre>

      <h2>Locales</h2>
      <pre>{JSON.stringify(localeIdentifiersByRegion, null, 4)}</pre>
    </>
  );
}
