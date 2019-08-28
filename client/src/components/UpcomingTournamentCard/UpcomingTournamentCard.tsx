import React, { FC } from 'react';
import { INewTournament } from '../../../../constants/interfaces';
import { formatDate } from '../../helpers/helpers';

const UpcomingTournamentCard: FC<INewTournament> = ({
  tournamentName,
  hostClub,
  startDate,
  endDate,
  uuid,
}): JSX.Element => {
  const goToTournamentView = () => {
    window.location.href = `/view-tournament?tournamentId=${uuid}`;
  };

  return (
    <div onClick={goToTournamentView} className="UpcomingTournamentCard">
      <h3>{tournamentName}</h3>
      <div>
        <div>Hosted by: {hostClub}</div>
        <div>Dates: {`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
      </div>
    </div>
  );
};

export default UpcomingTournamentCard;
