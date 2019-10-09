<script>
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import { username, firstName, lastName } from '../../store/global-store.js';
  import {
    formatDate,
    getRequest,
    postRequest,
  } from '../../globals/helpers.js';
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
    const tournamentId = new URLSearchParams(
      document.location.search.substring(1)
    ).get('tournamentId');

    if (tournamentId) {
      tournament = await getRequest(
        `/api/tournament/tournament-details/${tournamentId}`
      );
    } else {
      alert('Tournament not found');
      navigate('/dashboard');
    }
  }

  async function register() {
    // @todo replace alerts with modals
    if (!selectedEvents.length) {
      alert('Must select at least one event');
      return;
    }

    if (tournament) {
      const payload = {
        events: selectedEvents.map(x => x.eventName),
      };

      const response = await postRequest(
        `/api/tournament/register/${tournament.id}`,
        payload
      );

      if (response.notLoggedIn) {
        navigate('/');
      }

      if (response.message) {
        alert(response.message);
        return;
      }

      alert('Successfully registered');
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
        class={selectedEvents.find(evt => evt.eventName === event.eventName) !== undefined ? eventLblSelected : eventLbl}
        on:click={() => handleEventClick(event)}>
        <input
          type="checkbox"
          checked={selectedEvents.find(evt => evt.eventName === event.eventName) !== undefined}
          readOnly />
        {event.eventName}
      </div>
    {/each}
    <button class={registerBtn} on:click={register}>Register</button>
  </div>
{/if}
