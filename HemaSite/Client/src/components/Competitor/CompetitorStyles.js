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

export const CompetitorContainer = css`
  width: 21.875em;
  display: flex;
  flex-direction: column;
`;

export const CompetitorName = css`
  text-align: center;
  font-size: 1.5em;
  color: ${DARK1};
  font-family: ${PRIMARY_FONT};
`;

export const CompetitorScore = css`
  width: 50%;
  margin: 0.938em auto;
  border: 1px solid ${BORDER_GRAY1};
  color: ${DARK1};
  border-radius: 0.188em;
  text-align: center;
  line-height: 1.563em;
`;

export const CompetitorScoreAdjustContainer = css`
  width: 100%;
  padding: 0.625em;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CompetitorDeductScore = css`
  background-color: ${DANGER_RED};
  width: 9.375em;
  margin: 0.313em auto;
  border-radius: 0.188em;
  color: ${DARK1};
  cursor: pointer;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${DANGER_RED};
    border: none;
    outline: none;
  }

  @media (min-width: 20em) {
    margin: auto;
  }
`;

export const CompetitorAddScore = css`
  background-color: ${FL_GREEN};
  width: 9.375em;
  margin: 0.313em auto;
  border-radius: 0.188em;
  color: ${DARK1};
  cursor: pointer;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${FL_GREEN};
    border: none;
    outline: none;
  }

  @media (min-width: 20em) {
    margin: auto;
  }
`;

export const CompetitorPenaltyContainer = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0.625em;
  box-sizing: border-box;

  @media (min-width: 20em) {
    flex-wrap: nowrap;
  }
`;

export const CompetitorPenaltyCountContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin: 0.313em auto;

  @media (min-width: 20em) {
    width: 50%;
    justify-content: space-evenly;
    margin: auto;
  }
`;

export const CompetitorPenaltyCount = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  width: 1.688em;
  height: 1.688em;
  text-align: center;
  border: 1px solid ${BORDER_GRAY1};
  border-radius: 0.188em;
  margin: auto 0.313em;

  @media (min-width: 20em) {
    margin: 0;
  }
`;

export const CompetitorPenaltyDeduct = css`
  background-color: ${DANGER_RED};
  width: 1.563em;
  height: 1.563em;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${DANGER_RED};
    border: none;
    outline: none;
  }
`;

export const CompetitorPenaltyAdd = css`
  background-color: ${FL_GREEN};
  width: 1.563em;
  height: 1.563em;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 2px ${BORDER_GRAY1};

  &:active {
    box-shadow: none;
    border: none;
  }

  &:focus {
    background-color: ${FL_GREEN};
    border: none;
    outline: none;
  }
`;

export const CompetitorPenaltyImgContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 20em) {
    width: 50%;
    justify-content: flex-end;
    margin-right: 0.625em;
  }
`;

export const CompetitorPenaltyImg = css`
  background-color: ${SECONDARY_RED};
  height: 1.375em;
  width: 1.375em;
  border-radius: 0.188em;
  padding: 0.188em;
`;

export const CompetitorLineBreak = css`
  border-bottom: 1px solid black;
  margin: 0.5em 0;
`;
