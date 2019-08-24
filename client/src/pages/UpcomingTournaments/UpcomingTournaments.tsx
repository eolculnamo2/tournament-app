import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/api';
import { INewTournament } from '../../../../constants/interfaces';
import { UpcomingTournamentCard } from '../../components';
import '../../scss/pages/UpcomingTournaments.scss';

function UpcomingTournaments(): JSX.Element {
  // local state
  const [tournaments, setTournaments] = useState<Array<INewTournament>>([]);

  useEffect(() => {
    (async () => {
      const response = await getData('/api/get-upcoming-tournaments');
      setTournaments(response);
    })();
  }, []);

  return (
    <div className="UpcomingTournaments">
      <h3 className="UpcomingTournaments__header">Upcoming Tournaments</h3>
      {tournaments.map((tournament: INewTournament, i: number) => (
        <UpcomingTournamentCard key={`${i}tournamentCard`} {...tournament} />
      ))}
    </div>
  );
}

export default UpcomingTournaments;
