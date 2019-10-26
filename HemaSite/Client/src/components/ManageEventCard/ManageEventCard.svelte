<script>
  import { Link } from 'svelte-routing';
  import { card } from './ManageEventCardStyles.js';
  import { formatDate } from '../../globals/helpers.js';
  export let tournamentName = '';
  export let hostClub = '';
  export let startDate = '';
  export let endDate = '';
  export let linkTo;
</script>

<Link to={linkTo}>
  <div class={card}>
    <h3>{tournamentName}</h3>
    <div>
      <div>Hosted by: {hostClub}</div>
      <div>Dates: {`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
    </div>
  </div>
</Link>
