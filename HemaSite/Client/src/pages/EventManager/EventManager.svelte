<script>
  import { onMount } from 'svelte';
  import EditDetails from '../../components/EditDetails/EditDetails.svelte';
  import Roster from '../../components/Roster/Roster.svelte';
  import { globalFormWrap1 } from '../../globals/global-styles.js';
  import { getRequest } from '../../globals/helpers.js';
  import { activeTab, tab, tabWrap } from './EventManagerStyles.js';

  const tabNames = Object.freeze({
    editDetails: 'edit-details',
    roster: 'roster',
  });

  // state
  let tournament;
  let tabView = tabNames.editDetails;

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

  onMount(() => {
    getTournamentDetails();
  });
</script>

<div class={globalFormWrap1}>
  <h1>Event Manager Page</h1>
  <div class={tabWrap}>
    <div
      class={tabView === tabNames.editDetails ? activeTab : tab}
      on:click={() => (tabView = tabNames.editDetails)}>
      Edit Details
    </div>
    <div
      class={tabView === tabNames.roster ? activeTab : tab}
      on:click={() => (tabView = tabNames.roster)}>
      Roster
    </div>
  </div>
  {#if tabView === tabNames.editDetails}
    <EditDetails {tournament} />
  {:else if tabView === tabNames.roster}
    <Roster matches={tournament.matches} tournamentId={tournament.uuid} />
  {/if}
</div>
