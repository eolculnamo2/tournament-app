import React from 'react';
import '../../scss/pages/create-tournament.scss';
import CreateTournamentForm from '../../components/CreateTournamentForm/CreateTournamentForm';

function CreateTournament(): JSX.Element {
  return (
    <div className="CreateTournament">
      <CreateTournamentForm />
    </div>
  );
}

export default CreateTournament;
