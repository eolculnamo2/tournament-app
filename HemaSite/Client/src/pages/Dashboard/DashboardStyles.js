import emotion from 'emotion/dist/emotion.umd.min.js';
const {
  css
} = emotion;


export const circleWrap = css `
  max-width: 1000px;
  margin: auto;
  padding: 0em 2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`

export const circle = css `
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: $secondaryRed;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, .7);
  transition: all .2s;
  cursor: pointer;
  margin: 1em 2em;

  &:hover {
    opacity: .9;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, .7);
    transition: all .2s;
  }
`

export const circleTxt = css `
  color: white;
  font-size: 1.1em;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`

export const logo = css `
display: block;
margin: auto;
margin-top: 2em;
margin-bottom: 2em;
max-width: 450px;
`