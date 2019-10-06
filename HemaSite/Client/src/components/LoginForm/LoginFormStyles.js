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
  border-radius: 8px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, .3);
  max-width: 390px;
  margin: auto;
  margin-bottom: 1em;
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
  border-bottom: 1px solid $borderGray1;
  padding: .75em 1em;
  text-align: center;
`