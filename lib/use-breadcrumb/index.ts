import { useRouter } from 'next/router';
import { resolveLocaleIdentifier } from '@i18n/localization';

export default function useBreadcrumb() {
  const router = useRouter();
  const locale = resolveLocaleIdentifier(router.locale || '');
  const asPath = router.asPath === '/' ? '' : router.asPath;

  // Get elligible crumb parts from path, excluding the first empty string.
  const pathWithoutParam = asPath.split('?');
  const paths = pathWithoutParam[0].split('/');

  return paths.map((_, index, array) => {
    const title = router.locales?.includes(array[index])
      ? // Route is home locale
        'Home'
      : // Route is home default locale (empty split part on asPath)
      !array[index]
      ? 'Home'
      : // Route is not home, read current crumb to create title.
        // Decode URI to ensure special characters are maintainted.
        decodeURIComponent(array[index])
          // Remove dashes and underscores.
          .replace(/[-_]/g, ' ');
    // Create the breadcrumb by joining the locale and all all items until the current index together.
    const crumb = locale.toPath(array.slice(0, index + 1).join('/') || '/');

    return {
      title,
      crumb,
      isActive: locale.toPath(asPath) === crumb,
    };
  });
}
