import emotion from 'emotion/dist/emotion.umd.min.js';
const {
  css
} = emotion;

export const wrapper = css `
  margin: auto;
  max-width: 800px;
`

export const header = css `
  font-size: 1.75em;
  text-align: center;
  margin-top: 2em;
  margin-bottom: .5em;
`

export const subheading = css `
  text-align: center;
  margin-bottom: 2em;
`