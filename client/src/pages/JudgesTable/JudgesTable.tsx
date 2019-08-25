import React, { useState } from 'react';
import Competitor from '../../components/Competitor/Competitor';
import '../../scss/pages/judges-table.scss';

function JudgesTable(): JSX.Element {
  // Local State
  const [competitor1Score, setCompetitor1Score] = useState(0);
  const [competitor1Penalties, setCompetitor1Penalties] = useState(0);
  const [comp1Name, setComp1Name] = useState('');
  const [competitor2Score, setCompetitor2Score] = useState(0);
  const [competitor2Penalties, setCompetitor2Penalties] = useState(0);
  const [comp2Name, setComp2Name] = useState('');
  const [namesSubmitted, setNamesSubmitted] = useState(false);

  const handleScoreAdjust = (
    e: React.MouseEvent,
    num: number,
    comp: string
  ) => {
    switch (comp) {
      case 'comp1':
        setCompetitor1Score(competitor1Score + num);
        break;
      case 'comp2':
        setCompetitor2Score(competitor2Score + num);
      default:
        break;
    }
  };

  const handlePenaltyAdjust = (
    e: React.MouseEvent,
    num: number,
    comp: string
  ) => {
    switch (comp) {
      case 'comp1':
        if (
          competitor1Penalties + num >= 0 &&
          competitor1Penalties + num <= 5
        ) {
          setCompetitor1Penalties(competitor1Penalties + num);
        }
        break;
      case 'comp2':
        if (
          competitor2Penalties + num >= 0 &&
          competitor2Penalties + num <= 5
        ) {
          setCompetitor2Penalties(competitor2Penalties + num);
        }
      default:
        break;
    }
  };

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
    switch (e.currentTarget.name) {
      case 'comp1':
        setComp1Name(e.currentTarget.value);
        break;
      case 'comp2':
        setComp2Name(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const handleSubmitNames = () => {
    if (comp1Name && comp2Name) {
      setNamesSubmitted(true);
    }
  };

  const toggleNamesSubmitted = () => {
    setNamesSubmitted(!namesSubmitted);
  };

  const handleSubmitScore = () => {
    alert('Scores have been submitted');
  };

  return (
    <div>
      <h1 className="JudgesTable__title">Judge's Table</h1>
      <div>
        {!namesSubmitted ? (
          <div className="JudgesTable__name-input-container">
            <div className="JudgesTable__name-input-block">
              <label className="JudgesTable__label" htmlFor="comp1">
                Competitor 1
              </label>
              <input
                name="comp1"
                value={comp1Name}
                type="text"
                onChange={handleNameChange}
              />
            </div>
            <h3 className="JudgesTable__vs-text">VS</h3>
            <div className="JudgesTable__name-input-block">
              <label className="JudgesTable__label" htmlFor="comp2">
                Competitor 2
              </label>
              <input
                name="comp2"
                value={comp2Name}
                type="text"
                onChange={handleNameChange}
              />
            </div>
            <div className="JudgesTable__button-container">
              <button
                className="JudgesTable__button"
                onClick={handleSubmitNames}
              >
                Submit Names
              </button>
            </div>
          </div>
        ) : (
          <div className="JudgesTable__competitors-container">
            <Competitor
              competitor={comp1Name}
              competitorNum={'comp1'}
              competitorScore={competitor1Score}
              handleScoreAdjust={handleScoreAdjust}
              handlePenaltyAdjust={handlePenaltyAdjust}
              penaltyCount={competitor1Penalties}
            />

            <Competitor
              competitor={comp2Name}
              competitorNum={'comp2'}
              competitorScore={competitor2Score}
              handleScoreAdjust={handleScoreAdjust}
              handlePenaltyAdjust={handlePenaltyAdjust}
              penaltyCount={competitor2Penalties}
            />
            <div className="JudgesTable__buttons-container">
              <button
                className="JudgesTable__submit-button"
                onClick={handleSubmitScore}
              >
                Submit Final Score
              </button>
              <button
                className="JudgesTable__edit-names-button"
                onClick={toggleNamesSubmitted}
              >
                Edit Names
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default JudgesTable;
