import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/api';
import { history } from '../../App';
import { INewTournamentModel } from '../../../../constants/interfaces';
import '../../scss/pages/ViewTournament.scss';
import { formatDate } from '../../helpers/helpers';

function ViewTournament(): JSX.Element {
  const [tournament, setTournament] = useState<INewTournamentModel | null>(
    null
  );

  const getTournamentDetails = async () => {
    const tournamentUuid = new URLSearchParams(
      document.location.search.substring(1)
    ).get('tournamentId');

    if (tournamentUuid) {
      // make get request here
      const response = await getData(
        `/api/tournament-details/${tournamentUuid}`
      );
      setTournament(response);
    } else {
      alert('Tournament not found');
      history.push('/dashboard');
    }
  };

  useEffect(() => {
    getTournamentDetails();
  }, []);

  return (
    <>
      {tournament && (
        <div className="ViewTournament">
          <h1 className="ViewTournament__heading">
            {tournament.tournamentName}
          </h1>
          <h3 className="ViewTournament__sub-heading">{tournament.hostClub}</h3>
          <h3 className="ViewTournament__sub-heading">
            Dates:{' '}
            {`${formatDate(tournament.startDate)} - ${formatDate(
              tournament.endDate
            )}`}
          </h3>
          <h3>Events:</h3>
          {tournament.events.map((event: string) => (
            <div>{event}</div>
          ))}
          <button>Register</button>
        </div>
      )}
    </>
  );
}

export default ViewTournament;
