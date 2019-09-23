<script>
  import { onMount } from 'svelte';
  import { postRequest } from '../../globals/helpers.js';
  let matches = [];
  let afterMount = false;
  export let tournamentId;

  async function generateRosters() {
    await postRequest('/api/generate-matches', { uuid: tournamentId });
  }

  onMount(() => {
    afterMount = true;
  });
</script>

<h1>Roster</h1>
{#if afterMount && !matches.length}
  <p>
    No matches generated. Click generate matches to randomly create matches.
  </p>
  <button on:click={generateRosters}>Generate Matches</button>
{:else}
  <div>Matches go here</div>
  <button on:click={generateRosters}>Regenerate Matches</button>
{/if}
