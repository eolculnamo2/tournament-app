<script>
  import Datepicker from 'svelte-calendar';
  import {
    lineBreak,
    globalErrorTxt,
    globalInput,
    globalLabel,
  } from '../../globals/global-styles.js';
  import {
    btnEvent,
    deleteBtn,
    header,
    tournamentFormWrap,
    tournamentSubmit,
  } from './CreateTournamentStyles.js';
</script>

<Datepicker />
<div class={tournamentFormWrap}>
  <h3 class={header}>Create Tournament</h3>
  <div class={lineBreak} />
  <div class={globalLabel}>Hosting Club</div>
  <input class={globalInput} type="text" />

  <div class={globalErrorTxt}>Hosting Club is Required</div>

  <div class={globalLabel}>Tournament Name</div>
  <input class={globalInput} type="text" />
  <div class={globalErrorTxt}>Event Name is Required</div>
  <div class={globalLabel}>
    Tournament Events (i.e. Men's/Women's Longsword, Sword and Buckler, etc.)
  </div>
  <!-- Each goes here -->
  <input class={globalInput} placeholder="Event #1" />
  <button class={deleteBtn}>Delete Event</button>
  <button class={btnEvent}>Add Event</button>
  <div class={globalErrorTxt}>Tournaments must have at least one event.</div>
  <div class={globalLabel}>Event Start Date</div>
  <div class={globalErrorTxt}>Start Date is Required</div>
  <div class={globalLabel}>Event End Date</div>
  <div class={globalErrorTxt}>End Date is Required</div>
  <div class={globalLabel}>Registration Cost (US Dollars)</div>
  <input class={globalInput} type="number" />
  <button class={tournamentSubmit} type="button">Create Event</button>
</div>
