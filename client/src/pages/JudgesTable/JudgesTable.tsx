import React, { useState } from 'react';
import Competitor from '../../components/Competitor/Competitor';

function JudgesTable(): JSX.Element {
  // Local State
  const [competitor1Score, setCompetitor1Score] = useState(0);
  const [comp1Name, setComp1Name] = useState('');
  const [competitor2Score, setCompetitor2Score] = useState(0);
  const [comp2Name, setComp2Name] = useState('');

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

  return (
    <div>
      <h1>Judge's Table</h1>
      <div>
        <label htmlFor="comp1">Competitor 1</label>
        <input
          name="comp1"
          value={comp1Name}
          type="text"
          onChange={handleNameChange}
        />
        <Competitor
          competitor={comp1Name}
          competitorNum={'comp1'}
          competitorScore={competitor1Score}
          handleScoreAdjust={handleScoreAdjust}
        />
        <label htmlFor="comp2">Competitor 2</label>
        <input
          name="comp2"
          value={comp2Name}
          type="text"
          onChange={handleNameChange}
        />
        <Competitor
          competitor={comp2Name}
          competitorNum={'comp2'}
          competitorScore={competitor2Score}
          handleScoreAdjust={handleScoreAdjust}
        />
      </div>
    </div>
  );
}

export default JudgesTable;
