import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  FL_GREEN
} from '../../globals/styles-variables.js';
import {
  globalBtn1
} from '../../globals/global-styles.js';
const {
  css
} = emotion;

export const wrapper = css `
  max-width: 800px;
  padding: 1em;
  margin: auto;
  margin-top: 2em;
`

export const heading = css `
  text-align: center;
`

export const subHeading = css `
  margin: 0;
`

export const registerBtn = css `
  ${globalBtn1};
  max-width: 250px;
`

export const eventLbl = css `
  padding: .35em;
  cursor: pointer;
`

export const eventLblSelected = css `
  ${eventLbl};
  background-color: ${FL_GREEN}
`