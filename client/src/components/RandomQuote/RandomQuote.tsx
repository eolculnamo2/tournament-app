import React from 'react';
import { IRandomQuote } from '../../../../constants/interfaces';

const quotes: Array<IRandomQuote> = [
  {
    text: 'A despondent heart will always be defeated regardless of all skill.',
    author: 'Ringeck',
  },
];

function RandomQuote(): JSX.Element {
  const randomIndex: number = Math.floor(Math.random() * quotes.length);
  const { text, author }: IRandomQuote = quotes[randomIndex];
  return (
    <div className="RandomQuote">
      <p className="RandomQuote__text">“{text}"</p>
      <div className="RandomQuote__text">-{author}-</div>
    </div>
  );
}

export default RandomQuote;
