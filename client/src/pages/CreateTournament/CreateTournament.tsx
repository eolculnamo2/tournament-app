import React from 'react';
import '../../scss/pages/CreateTournament.scss';
import CreateTournamentForm from '../../components/CreateTournamentForm/CreateTournamentForm';

function CreateTournament(): JSX.Element {
  return (
    <div className="CreateTournament">
      <CreateTournamentForm />
    </div>
  );
}

export default CreateTournament;
