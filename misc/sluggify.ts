export default function sluggify(input = '') {
  return input
    .toLowerCase()
    .replace(/[_'()]/gu, '')
    .replace(/[^\w\u007F-\uFFFF]/gu, ' ')
    .trim()
    .replace(/ +/gu, '-');
}
