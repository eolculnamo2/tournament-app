import React from 'react';
// import {ICompetitor} from "../../../../constants/interfaces";

interface ICompetitor {
  competitor: string;
  competitorNum: string;
  competitorScore: number;
  handleScoreAdjust(e: React.MouseEvent, num: number, comp: string): void;
}

const Competitor = ({
  competitor,
  competitorNum,
  competitorScore,
  handleScoreAdjust,
}: ICompetitor): JSX.Element => {
  return (
    <div>
      <h3>{competitor}</h3>
      <p>{competitorScore}</p>
      <div>
        <button onClick={e => handleScoreAdjust(e, -1, competitorNum)}>
          -1
        </button>
        <button onClick={e => handleScoreAdjust(e, 1, competitorNum)}>
          +1
        </button>
      </div>
      <div>
        <button onClick={e => handleScoreAdjust(e, -2, competitorNum)}>
          -2
        </button>
        <button onClick={e => handleScoreAdjust(e, 2, competitorNum)}>
          +2
        </button>
      </div>
      <div>
        <button onClick={e => handleScoreAdjust(e, -3, competitorNum)}>
          -3
        </button>
        <button onClick={e => handleScoreAdjust(e, 3, competitorNum)}>
          +3
        </button>
      </div>
    </div>
  );
};

export default Competitor;
