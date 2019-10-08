import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  BORDER_GRAY1
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const rosterMatchWrap = css `
  border: 1px dashed ${BORDER_GRAY1};
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
`

export const eventName = css `
  margin: 0;
  margin-bottom: .25em;
`