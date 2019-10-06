import emotion from 'emotion/dist/emotion.umd.min.js';

import {
  DARK1,
  PRIMARY_FONT,
  BORDER_GRAY1,
  DANGER_RED,
  FL_GREEN,
  SECONDARY_RED,
} from '../../globals/styles-variables';

const { css } = emotion;

export const JudgesTableTitle = css`
  text-align: center;
  font-family: ${PRIMARY_FONT};
  color: ${DARK1};
`;

export const JudgesTableNameInputBlock = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  font-family: ${PRIMARY_FONT};

  @media (min-width: 45em) {
    width: 21.875em;
  }
`;

export const JudgesTableNameInputContainer = css`
  width: 100%;
  max-width: 50em;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const JudgesTableLabel = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const JudgesTableVSText = css`
  font-family: ${PRIMARY_FONT};
`;

export const JudgesTableButton = css`
  outline: none;
  width: 9.375em;
  background-color: ${FL_GREEN};
  cursor: pointer;
  border-radius: 0.188em;
  padding: 0.313em;
  font-family: ${PRIMARY_FONT};
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${FL_GREEN};
    outline: none;
    border: none;
  }
`;

export const JudgesTableButtonContainer = css`
  width: 100%;
  margin-top: 1.25em;
  text-align: center;
  font-family: ${PRIMARY_FONT};
`;

export const JudgesTableCompetitorsContainer = css`
  max-width: 50em;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const JudgesTableButtonsContainer = css`
  display: flex;
  flex-direction: column;
`;

export const JudgesTableSubmitButton = css`
  margin: 0.938em auto;
  width: 19.378em;
  cursor: pointer;
  background-color: ${SECONDARY_RED};
  color: white;
  border-radius: 0.188em;
  border: none;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${SECONDARY_RED};
    outline: none;
    border: none;
  }

  @media (min-width: 40.625em) {
    margin: 0.938em 1.563em;
  }
`;

export const JudgesTableEditNamesButton = css`
  margin: 0.938em auto;
  width: 19.375em;
  cursor: pointer;
  background-color: ${BORDER_GRAY1};
  color: ${DARK1};
  border-radius: 0.188em;
  border: none;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 40.625em) {
    margin: 0.938em 1.563em;
  }
`;

export const JudgesTableLineBreak = css`
  border-bottom: 1px solid black;
  margin: 0.5em 0;
`;

export const JudgesTableRoundContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.938em 1.563em;
  justify-content: space-around;
`;

export const JudgesTableRoundInput = css`
  width: 85px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.2em;
`;
