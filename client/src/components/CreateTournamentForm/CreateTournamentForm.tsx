import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../scss/pages/create-tournament.scss';
import INewTournament from '../../../../constants/interfaces/INewTournament';
import { displayErrMsg, checkVars } from '../../helpers/validations';
import { postData } from '../../helpers/api';

function CreateTournamentForm(): JSX.Element {
  // State: payload
  const [hostClub, setHostClub] = useState<string>('');
  const [eventName, setEventName] = useState<string>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [registrationCost, setRegistrationCost] = useState<number>(0);

  //Validations
  const [dirty, setDirty] = useState<boolean>(false);
  const displayErr: (val: any) => boolean = displayErrMsg(dirty);
  const requiredVariables: Array<any> = [
    hostClub,
    eventName,
    startDate,
    endDate,
    registrationCost,
  ];

  const handleSubmit = async () => {
    setDirty(true);
    if (checkVars(requiredVariables)) {
      const payload: INewTournament = {
        hostClub,
        eventName,
        startDate,
        endDate,
        registrationCost,
      };

      await postData('/api/create-tournament', JSON.stringify(payload));
      // Add confirmation modal/ Rejection Modal logic here
    }
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
      {displayErr(hostClub) && (
        <div className="Global__error-msg">Hosting Club is Required</div>
      )}
      <div className="CreateTournament__label">Event Name</div>
      <input
        className="CreateTournament__input"
        onChange={e => setEventName(e.target.value)}
        type="text"
        value={eventName}
      />
      {displayErr(eventName) && (
        <div className="Global__error-msg">Event Name is Required</div>
      )}
      <div className="CreateTournament__label">Event Start Date</div>
      <DatePicker selected={startDate} onChange={setStartDate} />
      {displayErr(startDate) && (
        <div className="Global__error-msg">Start Date is Required</div>
      )}
      <div className="CreateTournament__label">Event End Date</div>
      <DatePicker selected={endDate} onChange={setEndDate} />
      {displayErr(endDate) && (
        <div className="Global__error-msg">End Date is Required</div>
      )}
      <div className="CreateTournament__label">
        Registration Cost (US Dollars)
      </div>
      <input
        className="CreateTournament__input"
        onChange={e => setRegistrationCost(+e.target.value)}
        type="number"
        value={registrationCost}
      />
      {displayErr(registrationCost) && (
        <div className="Global__error-msg">Registration Cost is Required</div>
      )}
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
