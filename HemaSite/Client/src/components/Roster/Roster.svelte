<script>
  import { onMount } from 'svelte';
  import { postRequest, getRequest } from '../../globals/helpers.js';
  import RosterMatch from '../RosterMatch/RosterMatch.svelte';
  let matches = [];
  export let tournamentId;

  async function generateRosters() {
    await postRequest('/api/generate-matches', { uuid: tournamentId });
  }
</script>

<h1>Roster</h1>
{#if !matches.length}
  <p>
    No matches generated. Click generate matches to randomly create matches.
  </p>
  <button on:click={generateRosters}>Generate Matches</button>
{:else}
  {#each matches as match (match.uuid)}
    <RosterMatch
      event={match.event}
      fighter1={match.fighter1}
      fighter2={match.fighter2} />
  {/each}
  <button on:click={generateRosters}>Regenerate Matches</button>
{/if}
