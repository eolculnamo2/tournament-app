import emotion from 'emotion/dist/emotion.umd.min.js';
import {
  DARK1,
  DANGER_RED,
  FL_GREEN,
  PRIMARY_BLUE,
} from '../../globals/styles-variables';
const { css } = emotion;

export const JudgesTableTitle = css`
  text-align: center;
  //   font-family: $primaryFontFamily;
  //   color: $textColorDark;
  font-family: 'Roboto';
  color: gray;
`;

export const JudgesTableNameInputBlock = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  //   font-family: $primaryFontFamily;
  font-family: 'Roboto';

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
  //   font-family: $primaryFontFamily;
  font-family: 'Roboto';
`;

export const JudgesTableButton = css`
  outline: none;
  width: 9.375em;
  //   background-color: $fl-green;
  background-color: green;
  cursor: pointer;
  border-radius: 0.188em;
  padding: 0.313em;
  //   font-family: $primaryFontFamily;
  font-family: 'Roboto';
  //   box-shadow: 1px 1px 2px $borderGray1;
  box-shadow: 1px 1px 2px gray;

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    outline: none;
  }
`;

export const JudgesTableButtonContainer = css`
  width: 100%;
  margin-top: 1.25em;
  text-align: center;
  //   font-family: $primaryFontFamily;
  font-family: 'Roboto';
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
  //   background-color: $secondaryRed;
  background-color: red;
  color: white;
  height: 1.563em;
  line-height: 1.563em;
  border-radius: 0.188em;
  border: none;
  box-shadow: 1px 1px 2px gray;

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

export const JudgesTableEditNamesButton = css`
  margin: 0.938em auto;
  width: 19.375em;
  cursor: pointer;
  background-color: $borderGray1;
  //   color: $textColorDark;
  color: black;
  height: 1.563em;
  line-height: 1.563em;
  border-radius: 0.188em;
  border: none;
  //   box-shadow: 1px 1px 2px $borderGray1;
  box-shadow: 1px 1px 2px gray;

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
  //   width: 100%;
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
