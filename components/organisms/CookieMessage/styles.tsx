import { Grid } from '@components/atoms/Grid/Component';
import styled from 'styled-components';

export const CookieMessage = styled(Grid)`
  --text-color: var(--color-white-100);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.4rem 3rem;
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
    opacity: 0.9;
    z-index: -1;
  }

  .cookie-message__content {
    position: relative;
  }

  .cookie-message__content--hidden {
    display: none;
  }

  .cookie-message__title {
    margin-bottom: 1.4rem;
  }

  .cookie-message__intro {
    display: inline-block;
  }

  .cookie-message__radio,
  .cookie-message__intro,
  .cookie-message__form {
    margin-bottom: 2.4rem;
  }

  .cookie-message__intro-link {
    color: var(--text-color);

  }

  .cookie-message__step-button {
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: none;
    display: inline-block;
    color: var(--text-color);
    margin-bottom: 2.4rem;
    text-decoration: underline;
    cursor: pointer;

  }

  .cookie-message__step-button--tablet {
    margin-bottom: 0;
    margin-left: 4.8rem;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .cookie-message__step-button--mobile-only {
    width: 100%;
    text-align: left;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
