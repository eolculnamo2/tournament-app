import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  BORDER_GRAY1,
  SECONDARY_BLUE,
  PRIMARY_BLUE
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const loginHeader = css `
  color: ${PRIMARY_BLUE};
`

export const formWrap = css `
  margin: auto;
  width: 500px;
  border: 1px solid ${BORDER_GRAY1}'
  border-radius: 4px;
  margin-top: 2em;
  padding: 2em;
`

export const smallText = css `
  text-align: center;
  font-size: .8em;

  &:hover {
    color: ${SECONDARY_BLUE};
    opacity: .8;
  }
`