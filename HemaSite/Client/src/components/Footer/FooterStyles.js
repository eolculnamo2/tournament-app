import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  PRIMARY_BLUE,
  PRIMARY_RED
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const footerWrap = css `
  background-color: ${PRIMARY_RED};
  color: white;
  min-height: 3em;
`