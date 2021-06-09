import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { cssVariables } from '@theme/variables';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  /*
   * Reset box-sizing property
   */
   *,
   *::after,
   *::before {
      box-sizing: border-box;
   }

    /* Setup theme variables */
    ${cssVariables}

   /*
    * Define global typography
    */
   html {
    -webkit-font-smoothing: antialiased;
     font-size: 62.5%;
   }

   html,
   body {
     font-family: var(--font-family-primary);
     color: var(--text-color);
   }

   body {
      font-size: 1.6rem;
   }

   #__next{
      overflow-x: hidden;
   }

   /*
   * Reset top margins on titles that are first childs.
   */
   h1:first-child,
   h2:first-child,
   h3:first-child,
   h4:first-child,
   h5:first-child,
   h6:first-child {
    margin-top: 0;
   }

   img {
    max-width: 100%;
    height: auto;
   }
`;
