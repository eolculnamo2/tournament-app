import React, { FC } from 'react';
import { INewTournament } from '../../../../constants/interfaces';

const UpcomingTournamentCard: FC<INewTournament> = ({
  tournamentName,
}): JSX.Element => {
  return (
    <div className="UpcomingTournamentCard">
      <h3>{tournamentName}</h3>
    </div>
  );
};

export default UpcomingTournamentCard;
