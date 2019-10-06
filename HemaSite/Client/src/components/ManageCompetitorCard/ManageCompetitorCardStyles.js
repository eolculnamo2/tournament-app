import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  BORDER_GRAY1
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const cardWrap = css `
  margin: .5em 0;
  border: 1px solid ${BORDER_GRAY1};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, .3);
  padding: 1em;
`

export const indent = css `
  margin-left: 2em;
`

export const label = css `
  font-weight: 700;
`