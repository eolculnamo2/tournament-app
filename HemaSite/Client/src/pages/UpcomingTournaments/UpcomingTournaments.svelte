<script>
  import UpcomingTournamentCard from '../../components/UpcomingTournamentCard/UpcomingTournamentCard.svelte';
  import { header, wrapper } from './UpcomingTournamentsStyles.js';
  import { getRequest } from '../../globals/helpers.js';
  let tournaments = [];

  (async () => {
    tournaments = await getRequest('/api/tournament/upcoming-tournaments');
  })();
</script>

<div class={wrapper}>
  <h3 class={header}>Upcoming Tournaments</h3>
  {#each tournaments as tournament (tournament.uuid)}
    <UpcomingTournamentCard {...tournament} />
  {/each}
</div>
