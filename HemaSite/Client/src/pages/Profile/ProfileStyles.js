import {
  PRIMARY_BLUE, 
  PRIMARY_FONT,

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
grid-auto-rows: 1fr 1fr;
grid-template-areas: 
"ImageInput ProfileInfo"
"form form";
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