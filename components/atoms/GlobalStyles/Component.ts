import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

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

   /*
    * Define global typography
    */
   html,
   body {
    -webkit-font-smoothing: antialiased;
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
