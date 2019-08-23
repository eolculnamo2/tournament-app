import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../scss/pages/create-tournament.scss';
import INewTournament from '../../../../constants/interfaces/INewTournament';
import {
  displayRequiredErrMsg,
  checkVars,
  arrayHasNoValues,
  numberNotNegative,
} from '../../helpers/validations';
import { removeBlankValues } from '../../helpers/helpers';
import { postData } from '../../helpers/api';
import { history } from '../../App';

function CreateTournamentForm(): JSX.Element {
  // State: payload
  const [hostClub, setHostClub] = useState<string>('');
  const [tournamentName, setTournamentName] = useState<string>('');
  const [events, setEvents] = useState<Array<string>>(['']);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [registrationCost, setRegistrationCost] = useState<number | null>(null);

  //Validations
  const [dirty, setDirty] = useState<boolean>(false);
  const displayRequiredErr: (val: any) => boolean = displayRequiredErrMsg(
    dirty
  );
  const requiredVariables: Array<any> = [
    hostClub,
    tournamentName,
    startDate,
    endDate,
    registrationCost,
    events,
  ];

  const canSubmit = (): boolean => {
    // Combine all validations
    const validations: Array<boolean> = [
      checkVars(requiredVariables),
      !arrayHasNoValues(events),
      numberNotNegative(registrationCost),
    ];
    return validations.find((x: boolean) => x === false) === undefined;
  };

  const handleSubmit = async () => {
    setDirty(true);
    if (canSubmit()) {
      setEvents(removeBlankValues(events));

      const payload: INewTournament = {
        hostClub,
        tournamentName,
        startDate,
        endDate,
        registrationCost,
        events,
      };

      const response = await postData(
        '/api/create-tournament',
        JSON.stringify(payload)
      );
      // @todo Replace with custom modals
      if (!response.success) {
        alert('Tournament creation failed.');
      } else {
        alert('Tournament successfully created');
        history.push('/dashboard');
      }
    }
  };

  const handleEventChange = (val: string, i: number) => {
    const updatedEvents: Array<string> = events;
    updatedEvents[i] = val;
    setEvents([...updatedEvents]);
  };

  const addEvent = () => {
    const updatedEvents: Array<string> = events;
    updatedEvents.push('');
    setEvents([...updatedEvents]);
  };

  const deleteEvent = () => {
    const updatedEvents: Array<string> = events;
    updatedEvents.pop();
    setEvents([...updatedEvents]);
  };

  const registrationCostErrorMsg = (): JSX.Element => {
    let errorMsg = '';

    if (displayRequiredErr(registrationCost)) {
      errorMsg = 'Registration Cost is Required';
    } else if (!numberNotNegative(registrationCost) && dirty) {
      errorMsg = 'Registration Cost cannot be Negative';
    }

    return <div className="Global__error-msg">{errorMsg}</div>;
  };

  return (
    <>
      <h3 className="CreateTournament__heading">Create Tournament</h3>
      <div className="CreateTournament__line-break" />
      <div className="CreateTournament__label">Hosting Club</div>
      <input
        className="CreateTournament__input"
        onChange={e => setHostClub(e.target.value)}
        type="text"
        value={hostClub}
      />
      {displayRequiredErr(hostClub) && (
        <div className="Global__error-msg">Hosting Club is Required</div>
      )}
      <div className="CreateTournament__label">Tournament Name</div>
      <input
        className="CreateTournament__input"
        onChange={e => setTournamentName(e.target.value)}
        type="text"
        value={tournamentName}
      />
      {displayRequiredErr(tournamentName) && (
        <div className="Global__error-msg">Event Name is Required</div>
      )}
      <div className="CreateTournament__label">
        Tournament Events (i.e. Men's/Women's Longsword, Sword and Buckler,
        etc.)
      </div>
      {events.map((event: string, i: number) => {
        return (
          <input
            className="CreateTournament__input CreateTournament__input--m-t"
            onChange={e => handleEventChange(e.target.value, i)}
            placeholder={`Event # ${i + 1}`}
            key={`event-input${i}`}
            type="text"
            value={event}
          />
        );
      })}
      <button
        className="CreateTournament__btn-event CreateTournament__btn-event--delete"
        onClick={deleteEvent}
      >
        Delete Event
      </button>
      <button className="CreateTournament__btn-event" onClick={addEvent}>
        Add Event
      </button>
      {(displayRequiredErr(events) || (arrayHasNoValues(events) && dirty)) && (
        <div className="Global__error-msg">
          Tournaments must have at least one event.
        </div>
      )}
      <div className="CreateTournament__label">Event Start Date</div>
      <DatePicker selected={startDate} onChange={setStartDate} />
      {displayRequiredErr(startDate) && (
        <div className="Global__error-msg">Start Date is Required</div>
      )}
      <div className="CreateTournament__label">Event End Date</div>
      <DatePicker selected={endDate} onChange={setEndDate} />
      {displayRequiredErr(endDate) && (
        <div className="Global__error-msg">End Date is Required</div>
      )}
      <div className="CreateTournament__label">
        Registration Cost (US Dollars)
      </div>
      <input
        className="CreateTournament__input"
        onChange={e => setRegistrationCost(+e.target.value)}
        type="number"
        value={registrationCost === null ? '' : registrationCost}
      />
      {registrationCostErrorMsg()}
      <button
        className="CreateTournament__btn"
        type="button"
        onClick={handleSubmit}
      >
        Create Event
      </button>
    </>
  );
}

export default CreateTournamentForm;
