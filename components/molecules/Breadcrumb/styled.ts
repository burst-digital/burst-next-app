import styled from 'styled-components';

export const BreadcrumbWrapper = styled('nav')`
  max-width: 100%;
  overflow: hidden;
  z-index: 10;

  .breadcrumb__list {
    align-items: center;
    display: inline-flex;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    line-height: 2rem;
    list-style: none;
    margin: 0;
    max-width: 100%;
    padding: 0 0 0 var(--spacing-2x);

    a {
      display: block;

      svg {
        display: block;
      }
    }
  }

  .breadcrumb__list-item {
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0 0.9rem 0 0;
    white-space: nowrap;

    a,
    span {
      white-space: nowrap;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &.breadcrumb__list-item--overflows {
      display: none;
    }

    &.breadcrumb__list-item--first-overflow {
      display: flex;
      padding-right: 0;

      span,
      a {
        text-overflow: ellipsis;
        overflow: hidden;
        display: block;
      }
    }
  }

  .breadcrumb__separator {
  }
`;
