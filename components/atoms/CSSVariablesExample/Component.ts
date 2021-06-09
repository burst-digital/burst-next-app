import styled from 'styled-components';

export const CSSVariablesExample = styled('p')`
  color: var(--text-color);

  &.color__red{
    --text-color: var(--color-red-900);
  }

  &.color__blue{
    --text-color: var(--color-blue-900);
  }

  .theme__dark & {
    --text-color: var(--color-white-100);

    background-color: var(--color-black-900);
    padding: 0.3rem;
  }
`;
