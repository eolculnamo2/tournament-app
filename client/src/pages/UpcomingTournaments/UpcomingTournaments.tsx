import React, { useEffect, useState } from 'react';
import { INewTournament } from '../../../../constants/interfaces';
import { UpcomingTournamentCard } from '../../components';
import '../../scss/pages/UpcomingTournaments.scss';

function UpcomingTournaments(): JSX.Element {
  // local state
  const [tournaments, setTournaments] = useState<Array<INewTournament>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getTournaments = async (signal: AbortSignal) => {
    try {
      const response = await fetch('/api/get-upcoming-tournaments', { signal });
      const data = await response.json();
      setTournaments([...data]);
      setLoading(true);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    // https://medium.com/@selvaganesh93/how-to-clean-up-subscriptions-in-react-components-using-abortcontroller-72335f19b6f7
    const abortController = new AbortController();
    const signal: AbortSignal = abortController.signal;
    getTournaments(signal);

    return () => abortController.abort();
  }, []);

  const viewUpcomingTournaments = (): JSX.Element => {
    if (tournaments.length || loading) {
      return (
        <>
          {tournaments.map((tournament: INewTournament, i: number) => (
            <UpcomingTournamentCard
              key={`${i}tournamentCard`}
              {...tournament}
            />
          ))}
        </>
      );
    }
    return (
      <h3 className="UpcomingTournaments__no-upcoming">
        No upcoming tournaments.
      </h3>
    );
  };

  return (
    <div className="UpcomingTournaments">
      <h3 className="UpcomingTournaments__header">Upcoming Tournaments</h3>
      {viewUpcomingTournaments()}
    </div>
  );
}

export default UpcomingTournaments;
