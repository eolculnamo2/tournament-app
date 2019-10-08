<script>
  import { cardWrap, indent, label } from './ManageCompetitorCardStyles.js';
  export let firstName;
  export let lastName;
  export let events;
</script>

<div class={cardWrap}>
  <div class={label}>Name:</div>
  <div class={indent}>{`${firstName} ${lastName}`}</div>
  <div class={label}>Events:</div>
  {#each events as event}
    <div class={indent}>{event}</div>
  {/each}
</div>
