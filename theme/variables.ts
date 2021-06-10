import { css } from 'styled-components';

export const cssVariables = css`
  :root {
    /* CSS Variables for the XXX theme */

    /* Colors:
       Black */
    --color-black-900: #000000;

    /* Red */
    --color-red-900: #ff1100;

    /* White */
    --color-white-100: #ffffff;

    /* Blue */
    --color-blue-900: #1111ff;

    /* Fonts */
    --font-family-primary: 'avenir-next', serif;
    --font-family-secondary: 'Roboto', sans-serif;

    /* Spacing (4px steps) */
    --spacing-1x: 0.4rem;
    --spacing-2x: 0.8rem;
    --spacing-3x: 1.2rem;
    --spacing-4x: 1.6rem;
    --spacing-5x: 2rem;
    --spacing-6x: 2.4rem;
    --spacing-7x: 2.8rem;
    --spacing-8x: 3.2rem;
    --spacing-9x: 3.6rem;
    --spacing-10x: 4rem;
    --spacing-11x: 4.4rem;
    --spacing-12x: 4.8rem;
    --spacing-13x: 5.2rem;
    --spacing-14x: 5.6rem;
    --spacing-15x: 6rem;
    --spacing-16x: 6.4rem;
    --spacing-17x: 6.8rem;
    --spacing-18x: 7.2rem;
    --spacing-19x: 7.6rem;
    --spacing-20x: 8rem;
    --spacing-24x: 9.6rem;
    --spacing-30x: 12rem;

    /* Global variables */
    --text-color: var(--color-black-900);
  }
`;

export default cssVariables;
