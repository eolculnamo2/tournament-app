import React, { useEffect, useState, useContext } from 'react';
import { getData, postData } from '../../helpers/api';
import { history } from '../../App';
import {
  INewTournamentModel,
  IRegisteredCompetitor,
} from '../../../../constants/interfaces';
import '../../scss/pages/ViewTournament.scss';
import { formatDate } from '../../helpers/helpers';
import GlobalContext from '../../contexts/global/GlobalContext';

function ViewTournament(): JSX.Element {
  const { state } = useContext(GlobalContext);
  const [tournament, setTournament] = useState<INewTournamentModel | null>(
    null
  );
  const [selectedEvents, setSelectedEvents] = useState<Array<string>>([]);

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

  const register = async () => {
    if (!selectedEvents.length) {
      alert('Must select at least one event');
      return;
    }

    if (tournament) {
      const payload: IRegisteredCompetitor = {
        username: state.username,
        events: selectedEvents,
      };

      const response = await postData(
        `/api/register-for-tournament/${tournament.uuid}`,
        JSON.stringify(payload)
      );

      if (response.notLoggedIn) {
        history.push('/');
      }

      if (response.message) {
        alert(response.message);
        return;
      }

      alert('Successfully registered');
    }
  };

  const isSelected = (event: string, i: number) => {
    if (selectedEvents.find(evt => evt === event)) {
      return 'ViewTournament__event-lbl--selected';
    }
    return '';
  };

  const handleEventSelect = (event: string) => {
    const eventsCopy = [...selectedEvents];
    const evtIndex = selectedEvents.indexOf(event);

    if (evtIndex > -1) {
      eventsCopy.splice(evtIndex, 1);
    } else {
      eventsCopy.push(event);
    }

    setSelectedEvents(eventsCopy);
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
            Cost: {`$${tournament.registrationCost}`}
          </h3>
          <h3 className="ViewTournament__sub-heading">
            Dates:{' '}
            {`${formatDate(tournament.startDate)} - ${formatDate(
              tournament.endDate
            )}`}
          </h3>
          <h3>Events:</h3>
          {tournament.events.map((event: string, i: number) => (
            <div
              className={`ViewTournament__event-lbl ${isSelected(event, i)}`}
              key={event}
              onClick={() => handleEventSelect(event)}
            >
              <input
                type="checkbox"
                checked={
                  selectedEvents.find(evt => evt === event) !== undefined
                }
                readOnly
              />
              {event}
            </div>
          ))}
          <button className="ViewTournament__register-btn" onClick={register}>
            Register
          </button>
        </div>
      )}
    </>
  );
}

export default ViewTournament;
