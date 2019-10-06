import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  DARK1,
  BORDER_GRAY1,
  SECONDARY_RED,
  SECONDARY_BLUE,
  PRIMARY_BLUE
} from '../../globals/styles-variables.js';
const {
  css
} = emotion;

export const tabWrap = css `
  margin: 2em 0;
  border-bottom: 4px solid ${DARK1};
  display: flex;
`;

export const tab = css `
  padding: .75em 1.5em;
  margin-right: 1em;
  background-color: ${BORDER_GRAY1};
  border-radius: 7px 7px 0 0;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`

export const activeTab = css `
  ${tab};
  background-color: ${PRIMARY_BLUE};
  color: white;
`