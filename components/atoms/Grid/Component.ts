import styled from 'styled-components';
import { gridColumn, GridColumnProps, space, SpaceProps } from 'styled-system';

export const Grid = styled('div')<SpaceProps>`
  display: grid;

  ${space}
`;

export const Column = styled('div')<GridColumnProps & SpaceProps>`
  ${gridColumn}
  ${space}
`;
