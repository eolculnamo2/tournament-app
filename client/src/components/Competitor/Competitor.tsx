import React from 'react';
import { ICompetitor } from '../../../../constants/interfaces';
import '../../scss/components/Competitor.scss';

const penalty_symbol = require('../../images/penalty_symbol.png');

const Competitor = ({
  competitor,
  competitorNum,
  competitorScore,
  handleScoreAdjust,
  handlePenaltyAdjust,
  penaltyCount,
}: ICompetitor): JSX.Element => {
  return (
    <div className="Competitor__container">
      <h3 className="Competitor__name">{competitor}</h3>
      <h4 className="Competitor__score">{competitorScore}</h4>
      <div className="Competitor__score-adjust-container">
        <button
          className="Competitor__deduct-score"
          onClick={e => handleScoreAdjust(e, -1, competitorNum)}
        >
          -1
        </button>
        <button
          className="Competitor__add-score"
          onClick={e => handleScoreAdjust(e, 1, competitorNum)}
        >
          +1
        </button>
      </div>
      <div className="Competitor__score-adjust-container">
        <button
          className="Competitor__deduct-score"
          onClick={e => handleScoreAdjust(e, -2, competitorNum)}
        >
          -2
        </button>
        <button
          className="Competitor__add-score"
          onClick={e => handleScoreAdjust(e, 2, competitorNum)}
        >
          +2
        </button>
      </div>
      <div className="Competitor__score-adjust-container">
        <button
          className="Competitor__deduct-score"
          onClick={e => handleScoreAdjust(e, -3, competitorNum)}
        >
          -3
        </button>
        <button
          className="Competitor__add-score"
          onClick={e => handleScoreAdjust(e, 3, competitorNum)}
        >
          +3
        </button>
      </div>
      <div className="Competitor__penalty-container">
        <div className="Competitor__penalty-img-container">
          <img
            className="Competitor__penalty-img"
            src={penalty_symbol}
            alt="penalty symbol"
          />
        </div>
        <div className="Competitor__penalty-count-container">
          <button
            onClick={e => handlePenaltyAdjust(e, -1, competitorNum)}
            className="Competitor__penalty-deduct"
          >
            -
          </button>
          <div className="Competitor__penalty-count">{penaltyCount}</div>
          <button
            onClick={e => handlePenaltyAdjust(e, 1, competitorNum)}
            className="Competitor__penalty-add"
          >
            +
          </button>
        </div>
      </div>
      <div className="Competitor__line-break" />
    </div>
  );
};

export default Competitor;
