import klot from 'klot';
import { useLocaleIdentifier } from '@i18n/localization';
import en from '@i18n/translations/en.json';
import nl from '@i18n/translations/nl.json';
import fr from '@i18n/translations/fr.json';

export function useKlot() {
  const localeIdentifier = useLocaleIdentifier();

  return klot(localeIdentifier.language, { en, nl, fr });
}
