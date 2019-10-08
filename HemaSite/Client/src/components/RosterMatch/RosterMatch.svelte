<script>
  import { eventName, rosterMatchWrap } from './RosterMatchStyles.js';
  export let event;
  export let fighter1;
  export let fighter2;
</script>

<div class={rosterMatchWrap}>
  <h4 class={eventName}>{event}</h4>
  <div>
    <b>{fighter1}</b>
    vs
    <b>{fighter2}</b>
  </div>
</div>
