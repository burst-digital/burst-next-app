import styled from 'styled-components';
import { gridColumn, GridColumnProps, space, SpaceProps } from 'styled-system';

export const Grid = styled('div')<SpaceProps>`
  display: grid;
  grid-template-columns: 0 repeat(4, 1fr) 0;
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  @media (min-width: 600px) {
    grid-template-columns: 0 repeat(8, 1fr) 0;
  }

  @media (min-width: 720px) {
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  @media (min-width: 960px) {
    grid-template-columns: 40px repeat(12, 1fr) 40px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 104px repeat(12, 1fr) 104px;
  }

  @media (min-width: 1600px) {
    grid-template-columns: 176px repeat(12, 1fr) 176px;
  }

  ${space}
`;

export const Column = styled('div')<GridColumnProps & SpaceProps>`
  ${gridColumn}
  ${space}
`;
