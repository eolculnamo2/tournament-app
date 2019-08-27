import React, { FC } from 'react';
import moment from 'moment';
import { INewTournament } from '../../../../constants/interfaces';

const UpcomingTournamentCard: FC<INewTournament> = ({
  tournamentName,
  hostClub,
  startDate,
  endDate,
  uuid,
}): JSX.Element => {
  const formatDate = (date: Date | null): string => {
    if (date) {
      return moment(date).format('MMMM Do YYYY');
    }
    return '';
  };

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
