import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  PRIMARY_BLUE
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const card = css `
  width: 100%;
  padding: .5em 1em;
  margin: .5em 0;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, .7);
  background-color: ${PRIMARY_BLUE};
  color: white;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: .8;
  }
`