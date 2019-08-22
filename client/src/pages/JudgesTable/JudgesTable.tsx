import React, { useState } from 'react';

function JudgesTable(): JSX.Element {
  // Local State
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div>
      <h1>Judge's Table</h1>
    </div>
  );
}

export default JudgesTable;
