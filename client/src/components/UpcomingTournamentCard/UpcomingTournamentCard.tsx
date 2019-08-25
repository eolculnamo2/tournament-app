import React, { FC } from 'react';
import moment from 'moment';
import { INewTournament } from '../../../../constants/interfaces';

const UpcomingTournamentCard: FC<INewTournament> = ({
  tournamentName,
  hostClub,
  startDate,
  endDate,
}): JSX.Element => {
  const formatDate = (date: Date | null): string => {
    if (date) {
      return moment(date).format('MMMM Do YYYY');
    }
    return '';
  };

  return (
    <div className="UpcomingTournamentCard">
      <h3>{tournamentName}</h3>
      <div>
        <div>Hosted by: {hostClub}</div>
        <div>Dates: {`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
      </div>
    </div>
  );
};

export default UpcomingTournamentCard;
