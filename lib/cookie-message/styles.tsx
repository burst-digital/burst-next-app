import { Grid } from '@components/atoms/Grid/Component';
import styled from 'styled-components';

export const CookieMessage = styled(Grid)`
  --text-color: var(--color-white-100);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  color: var(--text-color);

  border-left: none;
  z-index: 15;

  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--color-black-900);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .cookie-message__content {
    position: relative;
  }

  .cookie-message__content--hidden {
    display: none;
  }

  .cookie-message__step-button {
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: none;
    display: inline-block;
    color: var(--text-color);
    text-decoration: underline;
    cursor: pointer;
  }
`;
