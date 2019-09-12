<script>
  import { onMount } from 'svelte';
  import ManageEventCard from '../../components/ManageEventCard/ManageEventCard.svelte';
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
  <h3>Current/Future Tournaments</h3>
  {#each tournaments as tournament (tournament.uuid)}
    {#if tournament.upcomingTournament}
      <ManageEventCard {...tournament} />
    {/if}
  {/each}
  <h3>Past Tournaments</h3>
  {#each tournaments as tournament (tournament.uuid)}
    {#if !tournament.upcomingTournament}
      <ManageEventCard {...tournament} />
    {/if}
  {/each}
</div>
