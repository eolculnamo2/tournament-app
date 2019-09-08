import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  PRIMARY_BLUE,
  BORDER_GRAY1,
  PRIMARY_RED
} from './styles-variables';
const {
  css
} = emotion;

export const globalInput = css `
  padding: .25em .5em;
  width: 100%;
  outline: none;
  border: 1px solid ${BORDER_GRAY1};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${PRIMARY_BLUE};
  }
`

export const globalLabel = css `
  margin-bottom: .25em;
  margin-top: .5em;
`

export const globalErrorTxt = css `
  color: red;
  margin-top: .2em;
  font-size: .875em;
`

export const globalBtn1 = css `
  background-color: ${PRIMARY_RED};
  width: 100%;
  margin-top: 1.2em;
  margin-bottom: .4em;
  padding: .3em;
  color: white;
  font-size: 1em;
  border-radius: 3px;
  border: 1px solid ${BORDER_GRAY1};
  cursor: pointer;
  outline: none;
  text-transform: capitalize;

  &:hover {
    opacity: .8;
  }
`