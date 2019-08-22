import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../scss/pages/create-tournament.scss';

function CreateTournament(): JSX.Element {
  // Local State
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="CreateTournament">
      <h3 className="CreateTournament__heading">Create Tournament</h3>
      <div className="CreateTournament__line-break" />
      <div className="CreateTournament__label">Hosting Club</div>
      <input className="CreateTournament__input" type="text" />
      <div className="CreateTournament__label">Event Name</div>
      <input className="CreateTournament__input" type="text" />
      <div className="CreateTournament__label">Event Start Date</div>
      <DatePicker selected={startDate} onChange={setStartDate} />
      <div className="CreateTournament__label">Event End Date</div>
      <DatePicker selected={endDate} onChange={setEndDate} />
      <div className="CreateTournament__label">Event Cost (US Dollars)</div>
      <input className="CreateTournament__input" type="text" />{' '}
      <button className="CreateTournament__btn">Create Event</button>
    </div>
  );
}

export default CreateTournament;
