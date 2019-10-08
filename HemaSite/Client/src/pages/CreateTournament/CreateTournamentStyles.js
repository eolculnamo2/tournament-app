import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  globalBtn1,
  globalInput
} from '../../globals/global-styles.js';
import {
  DARK1,
  DANGER_RED,
  FL_GREEN,
  PRIMARY_BLUE
} from '../../globals/styles-variables';
const {
  css
} = emotion;

export const tournamentFormWrap = css `
  margin: auto;
  width: 500px;
`;

export const header = css `
  font-size: 1.75em;
  text-align: center;
  margin-top: 2em;
`

export const btnEvent = css `
  ${globalBtn1};
  background-color: ${FL_GREEN};
  width: 200px;
  color: ${DARK1}
`

export const deleteBtn = css `
  ${btnEvent};
  margin-right: .25em;
  background-color: ${DANGER_RED}
`

export const tournamentSubmit = css `
  ${globalBtn1};
  background-color: ${PRIMARY_BLUE};
  margin-bottom: 1em;
`

export const inputMoreMargTop = css `
  ${globalInput};
  margin-top: 1em;
`