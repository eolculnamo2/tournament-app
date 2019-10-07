<script>
  import { navigate } from 'svelte-routing';
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
    inputMoreMargTop,
    tournamentFormWrap,
    tournamentSubmit,
  } from './CreateTournamentStyles.js';
  import { postRequest } from '../../globals/helpers.js';
  import { noneAreBlank } from '../../globals/validations.js';

  // state
  let hostClub = '';
  let tournamentName = '';
  let startDate = new Date();
  let endDate = new Date();
  let registrationCost = 0;
  let events = [''];
  let dirty = false;

  async function submitForm() {
    dirty = true;
    const payload = {
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      competitors: [],
    };

    // @TODO create validation library
    const failingConditions = [
      !noneAreBlank(
        hostClub,
        tournamentName,
        startDate,
        endDate,
        registrationCost,
        events
      ),
      !events.find(x => x.length > 0),
      registrationCost < 0,
      registrationCost !== 0 && !registrationCost,
    ];

    if (failingConditions.find(x => x === true)) {
      return;
    }

    const response = await postRequest(
      '/api/tournament/create-tournament',
      payload
    );
    // @todo Replace with custom modals
    if (!response) {
      alert('Tournament creation failed.');
    } else {
      alert('Tournament successfully created');
      navigate('/dashboard');
    }
  }

  const deleteEvt = () => {
    if (events.length > 1) {
      events.length = events.length - 1;
    }
  };

  const addEvt = () => (events = [...events, '']);
</script>

<div class={tournamentFormWrap}>
  <h3 class={header}>Create Tournament</h3>
  <div class={lineBreak} />
  <div class={globalLabel}>Hosting Club</div>
  <input class={globalInput} bind:value={hostClub} type="text" />
  {#if dirty && !hostClub}
    <div class={globalErrorTxt}>Hosting Club is Required</div>
  {/if}
  <div class={globalLabel}>Tournament Name</div>
  <input class={globalInput} bind:value={tournamentName} type="text" />
  {#if dirty && !tournamentName}
    <div class={globalErrorTxt}>Tournament Name is Required</div>
  {/if}
  <div class={globalLabel}>
    Tournament Events (i.e. Men's/Women's Longsword, Sword and Buckler, etc.)
  </div>
  <!-- Each goes here -->
  {#each events as event, i ('event' + i)}
    <input
      class={inputMoreMargTop}
      bind:value={events[i]}
      placeholder={`Event #${i + 1}`} />
  {/each}
  <button class={deleteBtn} on:click={deleteEvt}>Delete Event</button>
  <button class={btnEvent} on:click={addEvt}>Add Event</button>
  {#if dirty && !events.find(x => x.length > 0)}
    <div class={globalErrorTxt}>Tournaments must have at least one event.</div>
  {/if}
  <div class={globalLabel}>Event Start Date</div>
  <Datepicker bind:selected={startDate} />
  <div class={globalLabel}>Event End Date</div>
  <Datepicker bind:selected={endDate} />
  <div class={globalLabel}>Registration Cost (US Dollars)</div>
  <input class={globalInput} bind:value={registrationCost} type="number" />
  <div class={globalErrorTxt}>
    {#if dirty && !registrationCost && registrationCost !== 0}
      Registration Cost is Required
    {:else if dirty && registrationCost < 0}
      Registration Cost cannot be Negative
    {/if}
  </div>
  <button class={tournamentSubmit} on:click={submitForm} type="button">
    Create Event
  </button>
</div>
