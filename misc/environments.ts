// In case of multiple sites
// import { Site } from '@constants/site';

export function getOrigin() {
  return (
    process.env.WEBSITE_ORIGIN ||
    process.env.NEXT_PUBLIC_WEBSITE_ORIGIN ||
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
