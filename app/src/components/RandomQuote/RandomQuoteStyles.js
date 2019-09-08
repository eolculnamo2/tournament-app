import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  SECONDARY_FONT
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const quoteWrapper = css `
  margin: 2em auto;
  max-width: 500px;
  font-family: ${SECONDARY_FONT};
`

export const quoteText = css `
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
`