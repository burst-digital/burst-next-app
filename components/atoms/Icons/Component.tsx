import dynamic from 'next/dynamic';
import React from 'react';

type IconID =  "arrow-right" | "arrow-left";

export const ArrowRight = dynamic<{ className?: string }>(
  () => import('@icons/arrow-right.svg'),
  {
    loading: () => <span />,
    ssr: false,
  },
);

export function IconMapper(icon: IconID) {
  switch (icon) {
    case 'arrow-right':
      return <ArrowRight />;

    default:
      return null;
  }
}
