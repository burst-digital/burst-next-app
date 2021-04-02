// In case of multiple sites
// import { Site } from '@constants/site';

export function getWebsiteApiOrigin() {
  return (
    process.env.WEBSITE_API_ORIGIN ??
    process.env.NEXT_PUBLIC_WEBSITE_URL ??
    'https://www.domain.com'
  );
}

// In case of multiple sites

// export function getSite() {
//   const site = process.env.SITE || process.env.NEXT_PUBLIC_SITE || '';

//   switch (site) {
//     default:
//     case Site.default: {
//       return Site.default;
//     }
//   }
// }
