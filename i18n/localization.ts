import { useRouter } from 'next/router';
import { useMemo } from 'react';

enum Language {
  nl = 'nl',
  en = 'en',
  fr = 'fr',
}

enum Region {
  be = 'be',
  nl = 'nl',
  fr = 'fr',
  intl = 'intl',
}

const DEFAULT_LANGUAGE = Language.en;
const DEFAULT_REGION = Region.intl;

export function useLocaleIdentifier() {
  const router = useRouter();

  const locale = useMemo(() => router.locale ?? router.defaultLocale ?? '', [
    router.locale,
    router.defaultLocale,
  ]);

  return resolveLocaleIdentifier(locale);
}

export type LocaleIdentifier = ReturnType<typeof resolveLocaleIdentifier>;

export function resolveLocaleIdentifier(locale: string) {
  const [language, region, script] = locale.split('-');

  return {
    locale,
    language: language in Language ? (language as Language) : DEFAULT_LANGUAGE,
    region: region in Region ? (region as Region) : DEFAULT_REGION,
    script: script ?? '',
    toPath(path = '/') {
      if (this.region === Region.intl) {
        return path;
      }

      return `/${this.locale}${path}`;
    },
  };
}

export function useRegionalLocaleIdentifiers() {
  const router = useRouter();

  const locales = useMemo(() => router.locales ?? [], [router.locales]);

  return resolveLocalesByRegion(locales);
}

export function resolveLocalesByRegion(locales: string[]) {
  return locales.reduce((obj, locale) => {
    const localeIdentifier = resolveLocaleIdentifier(locale);

    return {
      ...obj,
      [localeIdentifier.region]: [
        ...(obj[localeIdentifier.region] ?? []),
        localeIdentifier,
      ],
    };
  }, {} as Record<Region, LocaleIdentifier[]>);
}
