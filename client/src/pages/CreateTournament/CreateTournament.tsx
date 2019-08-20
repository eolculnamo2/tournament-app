import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../scss/pages/create-dashboard.scss';

function CreateTournament(): JSX.Element {
  // Local State
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div className="CreateDashboard">
      <h3 className="CreateDashboard__heading">Create Tournament</h3>
      <div className="CreateDashboard__line-break" />
      <div className="CreateDashboard__label">Hosting Club</div>
      <input className="CreateDashboard__input" type="text" />
      <div className="CreateDashboard__label">Event Name</div>
      <input className="CreateDashboard__input" type="text" />
      <div className="CreateDashboard__label">Event Start Date</div>
      <DatePicker selected={startDate} onChange={setStartDate} />
      <div className="CreateDashboard__label">Event End Date</div>
      <DatePicker selected={endDate} onChange={setEndDate} />
      <div className="CreateDashboard__label">Event Cost (US Dollars)</div>
      <input className="CreateDashboard__input" type="text" />
    </div>
  );
}

export default CreateTournament;
