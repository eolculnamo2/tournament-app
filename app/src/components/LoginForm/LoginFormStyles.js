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
  color: white;
  margin: 0;

`

export const formWrap = css `
  margin: auto;
  width: 500px;
  border-radius: 4px;
  margin-top: 2em;
  overflow: hidden;
`
export const formBody = css `
  border: 1px solid ${BORDER_GRAY1};
  padding: 0 1em 1em 1em;
`
export const smallText = css `
  text-align: center;
  font-size: .8em;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: ${PRIMARY_BLUE};
    opacity: .8;
  }
`

export const formHead = css `
  border-bottom: 1px solid ${BORDER_GRAY1};
  background-color: ${PRIMARY_BLUE};
  color: white;
  margin: 0;
  padding: 1em .5em;
`