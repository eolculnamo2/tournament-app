<script>
  import { card } from './UpcomingTournamentCardStyles';
  import { formatDate } from '../../globals/helpers.js';
  export let tournamentName = '';
  export let hostClub = '';
  export let startDate = '';
  export let endDate = '';
  export let id;

  const goToTournamentView = () => {
    window.location.href = `/view-tournament?tournamentId=${id}`;
  };
</script>

<div on:click={goToTournamentView} class={card}>
  <h3>{tournamentName}</h3>
  <div>
    <div>Hosted by: {hostClub}</div>
    <div>Dates: {`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
  </div>
</div>
