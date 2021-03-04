import React from 'react';
import Error from 'next/error';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { resolveLocaleIdentifier } from '@i18n/localization';
import { getKlot } from '@i18n/translate';
import LanguageSwitch from '@components/organisms/LanguageSwitch/Component';

export const getStaticProps: GetStaticProps<{ title: string }> = async ctx => {
  const localeIdentifier = resolveLocaleIdentifier(
    ctx.locale || ctx.defaultLocale || '',
  );
  const klot = getKlot(localeIdentifier);

  return {
    props: {
      title: klot('Page not found'),
    },
  };
};

export default function NotFound(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  return (
    <>
      <LanguageSwitch />
      <Error title={props.title} statusCode={404} />
    </>
  );
}
