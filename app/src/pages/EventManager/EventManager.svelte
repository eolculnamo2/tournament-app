<script>
  import { onMount } from 'svelte';
  import { globalFormWrap1 } from '../../globals/global-styles.js';
  import { getRequest } from '../../globals/helpers.js';
  import { fieldTitle, fieldItem } from './EventManagerStyles.js';
  let tournament;

  async function getTournamentDetails() {
    const tournamentUuid = new URLSearchParams(
      document.location.search.substring(1)
    ).get('tournamentId');

    if (tournamentUuid) {
      tournament = await getRequest(
        `/api/tournament-details/${tournamentUuid}`
      );
    } else {
      alert('Tournament not found');
      navigate('/dashboard');
    }
  }

  onMount(() => {
    getTournamentDetails();
  });
</script>

<div class={globalFormWrap1}>
  <h1>Event Manager Page</h1>
  <h3 class={fieldTitle}>Host Club</h3>
  <div class={fieldItem}>{tournament && tournament.hostClub}</div>
  <h3 class={fieldTitle}>Tournament Name</h3>
  <div class={fieldItem}>{tournament && tournament.tournamentName}</div>
  <h3 class={fieldTitle}>Start Date</h3>
  <div class={fieldItem}>{tournament && tournament.startDate}</div>
  <h3 class={fieldTitle}>End Date</h3>
  <div class={fieldItem}>{tournament && tournament.endDate}</div>
  <h3 class={fieldTitle}>Registration Cost</h3>
  <div class={fieldItem}>{tournament && tournament.registrationCost}</div>
  <h3 class={fieldTitle}>Events</h3>
  <div class={fieldItem}>{tournament && tournament.events}</div>
  <h3 class={fieldTitle}>Competitors</h3>
  <div class={fieldItem}>{tournament && tournament.competitors}</div>
</div>
