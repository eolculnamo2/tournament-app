<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { formatDate, getRequest } from '../../globals/helpers.js';
  import {
    wrapper,
    heading,
    subHeading,
    registerBtn,
    eventLbl,
    eventLblSelected,
  } from './RegisterForTournamentStyles.js';

  // state
  let tournament;
  let selectedEvents = [];

  async function getTournamentDetails() {
    const tournamentUuid = new URLSearchParams(document.location.search.substring(1)).get(
      'tournamentId'
    );

    if (tournamentUuid) {
      tournament = await getRequest(`/api/tournament-details/${tournamentUuid}`);
    } else {
      alert('Tournament not found');
      navigate('/dashboard');
    }
  }

  const handleEventClick = event => {
    const index = selectedEvents.indexOf(event);
    if (index > -1) {
      selectedEvents.splice(index, 1);
      selectedEvents = [...selectedEvents];
      return;
    }
    selectedEvents = [...selectedEvents, event];
  };

  onMount(() => {
    getTournamentDetails();
  });
</script>

{#if tournament}
  <div class={wrapper}>
    <h1 class={heading}>{tournament.tournamentName}</h1>
    <h3 class={subHeading}>{tournament.hostClub}</h3>
    <h3 class={subHeading}>Cost: {`$${tournament.registrationCost}`}</h3>
    <h3 class={subHeading}>
      Dates:{' '} {`${formatDate(tournament.startDate)} - ${formatDate(tournament.endDate)}`}
    </h3>
    <h3>Events:</h3>
    {#each tournament.events as event, i (event)}
      <div
        class={selectedEvents.find(evt => evt === event) !== undefined ? eventLblSelected : eventLbl}
        on:click={() => handleEventClick(event)}>
        <input
          type="checkbox"
          checked={selectedEvents.find(evt => evt === event) !== undefined}
          readOnly />
        {event}
      </div>
    {/each}
    <button class={registerBtn}>Register</button>
  </div>
{/if}
