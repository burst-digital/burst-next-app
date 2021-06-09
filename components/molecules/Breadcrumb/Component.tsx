import classnames from 'classnames';
import React from 'react';
import useBreadcrumb from '@misc/breadcrumb';
import InternalOrExternalLink from '@components/atoms/Link/Component';
import { BreadcrumbWrapper } from '@components/molecules/Breadcrumb/styled';
import { useKlot } from '@i18n/translate';

export default function Breadcrumb() {
  const breadcrumb = useBreadcrumb();
  const wrapperRef = React.useRef<HTMLElement>(null);
  const listRef = React.useRef<HTMLOListElement>(null);
  const itemRefs = React.useRef(
    breadcrumb.map(() => React.createRef<HTMLLIElement>()),
  );
  const [overflowIndexes, setOverflowIndex] = React.useState<
    Array<{ index: number; maxSize: number }>
  >([]);
  const t = useKlot();

  // Custom overflow check to add elipsis when the breadcrumbs overflow the screen
  // Can't use text-over: elipsis in CSS since this requires a set width in px.
  React.useEffect(() => {
    function checkHasOverflow() {
      if (wrapperRef.current && listRef.current) {
        let cumulativeElementSize = 0;
        const overflowing: Array<{ index: number; maxSize: number }> = [];
        const wrapperWidth = wrapperRef.current.clientWidth;

        itemRefs.current.forEach((element, index) => {
          if (element.current && wrapperRef.current) {
            const elementSize = element.current.offsetWidth;
            cumulativeElementSize += elementSize;

            if (cumulativeElementSize >= wrapperRef.current.offsetWidth) {
              overflowing.push({
                index,
                maxSize:
                  wrapperWidth - (cumulativeElementSize - elementSize) - 10, // remove extra 10px just to be sure..
              });
            }
          }
        });

        setOverflowIndex(overflowing);
      }
    }

    window.addEventListener('resize', checkHasOverflow);
    window.addEventListener('load', checkHasOverflow);

    return () => {
      window.removeEventListener('resize', checkHasOverflow);
      window.removeEventListener('load', checkHasOverflow);
    };
  }, []);

  // Don't show on home
  if (breadcrumb.length === 1) {
    return null;
  }

  return (
    <BreadcrumbWrapper
      ref={wrapperRef}
    >
      <ol className="breadcrumb__list" ref={listRef}>
        {breadcrumb.map((crumb, index) => {
          const isOverflowing = overflowIndexes.some(el => el.index === index);
          const isFirstOverflow =
            isOverflowing && index === overflowIndexes[0].index;
          return (
            <li
              ref={itemRefs.current[index]}
              key={`bread-crumb--${crumb.crumb}`}
              className={classnames({
                'breadcrumb__list-item': true,
                'breadcrumb__list-item--first-overflow': isFirstOverflow,
                'breadcrumb__list-item--overflows': isOverflowing,
              })}
            >
              {crumb.isActive ? (
                <span
                  style={{
                    width: isFirstOverflow
                      ? `${overflowIndexes[0].maxSize}px`
                      : 'auto',
                  }}
                >
                  {crumb.title}
                </span>
              ) : (
                <InternalOrExternalLink
                  href={crumb.crumb}
                  style={{
                    width: isFirstOverflow
                      ? `${overflowIndexes[0].maxSize}px`
                      : 'auto',
                  }}
                >
                  {index === 0 ? <>{t('Home')}</> : <>{crumb.title}</>}
                </InternalOrExternalLink>
              )}
              {index !== breadcrumb.length - 1 && !isOverflowing && (
                <p className="breadcrumb__separator">&nbsp; /</p>
              )}
            </li>
          );
        })} 
      </ol>
    </BreadcrumbWrapper>
  );
}
