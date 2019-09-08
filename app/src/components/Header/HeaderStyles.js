import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  PRIMARY_BLUE
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const headerWrap = css `
  background-color:  ${PRIMARY_BLUE};
  width: 100%;
  box-sizing: border-box;
  padding: .5em 2em;;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`

export const linksWrap = css `
  min-width: 40vw;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`

export const logoImg = css `
  max-width: 100px;
`