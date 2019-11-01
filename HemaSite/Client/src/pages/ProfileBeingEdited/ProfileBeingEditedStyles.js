import {
  PRIMARY_BLUE,
  PRIMARY_FONT,
  SECONDARY_RED,
  BORDER_GRAY1,
  DARK1,
  DARK2,
  DARK3
} from "../../globals/styles-variables.js"
import emotion from 'emotion/dist/emotion.umd.min.js';
const {
  css
} = emotion;

export const pageDiv = css `
  width:70%;
  margin:auto;
  display:grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr .5fr;
  grid-template-areas:
  "ImageInput ProfileInfo"
  "form form"
  ". button";
`

export const title = css `
  font-family:${PRIMARY_FONT}
  color: ${PRIMARY_BLUE};
  font-size: 2em;
  margin:0;
`

export const imageDiv = css `
  grid-area:ImageInput;
  justify-self:center;
  align-self:center;
  `

export const profileInfoDiv = css `
  grid-area:ProfileInfo;
  align-self:center;
  `

export const formDiv = css `
  grid-area:form;
  justify-self:center;
  align-self:center;
  `

export const playerStats = css `
  margin:0;
  `

export const playerName = css `
  margin:0;
  `
export const addImage = css `
  width:7em;
  height:7em;
  `
export const cancelButton = css `
  grid-area:button;
  justify-self:center;
  width:7em;

  button{
    background-color: ${DARK3};
    border-radius: 3px;
    border: 1px solid ${BORDER_GRAY1};
    width: 100%;
    border:0;
    padding: .1em;
    color: white;
    font-size: 1em;
    cursor: pointer;
    outline: none;
    text-transform: capitalize;
  }

  &:hover {
    opacity: .8;
  }
`

export const saveButton = css `
    grid-area:button;
    justify-self:left;
    width:7em;

    button{
      background-color: ${SECONDARY_RED};
      border-radius: 3px;
      border: 1px solid ${BORDER_GRAY1};
      width: 100%;
      border:0;
      padding: .1em;
      color: white;
      font-size: 1em;
      cursor: pointer;
      outline: none;
      text-transform: capitalize;
    }

    &:hover {
      opacity: .8;
    }
   `