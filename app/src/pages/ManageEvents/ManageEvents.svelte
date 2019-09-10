<script>
  import { onMount } from 'svelte';
  import UpcomingTournamentCard from '../../components/UpcomingTournamentCard/UpcomingTournamentCard.svelte';
  import { header, subheading, wrapper } from './ManageEventsStyles.js';
  import { getRequest } from '../../globals/helpers.js';
  let tournaments = [];

  onMount(async () => {
    tournaments = await getRequest('api/get-owned-tournaments');
  });
</script>

<div class={wrapper}>
  <h3 class={header}>Manage Tournaments</h3>
  <div class={subheading}>Select a Tournament to View/Edit</div>
  {#each tournaments as tournament (tournament.uuid)}
    <UpcomingTournamentCard {...tournament} />
  {/each}
</div>
