import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CreateTournament(): JSX.Element {
  // Local State
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div>
      <h3>Create Tournament</h3>
      <div>Hosting Club</div>
      <input type="text" />
      <div>Event Name</div>
      <input type="text" />
      <div>Event Start Date</div>
      <DatePicker selected={startDate} onChange={setStartDate} />
      <div>Event End Date</div>
      <DatePicker selected={endDate} onChange={setEndDate} />
      <div>Event Cost (US Dollars)</div>
      <input type="text" />
    </div>
  );
}

export default CreateTournament;
