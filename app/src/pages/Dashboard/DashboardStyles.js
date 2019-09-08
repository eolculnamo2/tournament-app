import emotion from 'emotion/dist/emotion.umd.min.js';
const {
  css
} = emotion;

export const title = css `
  text-align: center;
  font-size: 2.5em;
  margin: 2em 0 1em 0;
`
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

  &--red1 {
    background-color: $primaryRed;
  }

  &--red2 {
    background-color: $secondaryRed;
  }

  &--blue1 {
    background-color: $primaryBlue;
  }

  &--blue2 {
    background-color: $secondaryBlue;
  }

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