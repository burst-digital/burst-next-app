import dynamic from 'next/dynamic';
import React from 'react';

export const ArrowRight = dynamic<{ className?: string }>(
  // @ts-ignore
  () => import('@icons/arrow-right.svg'),
  {
    loading: () => <span />,
    ssr: false,
  },
);

export function IconMapper(icon: string) {
  switch (icon) {
    case 'arrow-right':
      return <ArrowRight />;

    default:
      return null;
  }
}
