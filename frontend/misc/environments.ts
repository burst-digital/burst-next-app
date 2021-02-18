export function getOrigin() {
  return (
    process.env.WEBSITE_ORIGIN ||
    process.env.NEXT_PUBLIC_WEBSITE_ORIGIN ||
    'https://www.baderie.nl'
  );
}
