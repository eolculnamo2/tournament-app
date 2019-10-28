import emotion from 'emotion/dist/emotion.umd.min.js';
const {
  css
} = emotion

import {SECONDARY_RED,BORDER_GRAY1} from "../../globals/styles-variables.js"

export const profilePage = css `
display:grid;
grid-auto-rows: 0.5fr 1fr 0.5fr;
grid-auto-columns: 1fr 1fr;
grid-template-areas:
"header header"
"profileimage stats"
"editbutton editbutton";
grid-gap:1em;
`

export const profileImage = css `
grid-area:profileimage;
justify-self:right;
align-self:center;
margin-right:3em;
`

export const profileHeader = css `
grid-area:header;
justify-self:center;
align-self:center;
`

export const statsDiv = css `
grid-area:stats;
justify-self:left;
align-self:center;
`

export const editButton = css `
grid-area:editbutton;
  justify-self:center;
  align-self:center;
  width:7em;
button{
  background-color: ${SECONDARY_RED}; 
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


`

