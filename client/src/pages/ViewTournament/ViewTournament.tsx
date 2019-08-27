import React, { useEffect } from 'react';
import { getData } from '../../helpers/api';
import '../../scss/pages/ViewTournament.scss';
import { history } from '../../App';

function ViewTournament(): JSX.Element {
  const getTournamentDetails = () => {
    const tournamentUuid = new URLSearchParams(
      document.location.search.substring(1)
    ).get('tournamentId');

    if (tournamentUuid) {
      // make get request here
      // getData(`/get-tournament-details/`);
    } else {
      history.push('/dashboard');
    }
  };

  useEffect(() => {
    getTournamentDetails();
  }, []);

  return (
    <div>
      <h1>View Tournament</h1>
    </div>
  );
}

export default ViewTournament;
