<script>
  import ManageCompetitorCard from '../ManageCompetitorCard/ManageCompetitorCard.svelte';
  import { globalBtn1 } from '../../globals/global-styles.js';
  import { postRequest } from '../../globals/helpers.js';
  import { fieldTitle, fieldItem } from './EditDetailsStyles.js';

  export let tournament;

  async function saveChanges() {
    const response = await postRequest(
      '/api/tournament/update-tournament',
      tournament
    );
  }
</script>

{#if tournament && tournament.hostClub}
  <h3 class={fieldTitle}>Host Club</h3>
  <div
    bind:innerHTML={tournament.hostClub}
    contenteditable="true"
    class={fieldItem}>
    {tournament.hostClub}
  </div>
{/if}
{#if tournament && tournament.tournamentName}
  <h3 class={fieldTitle}>Tournament Name</h3>
  <div
    bind:innerHTML={tournament.tournamentName}
    contenteditable="true"
    class={fieldItem}>
    {tournament.tournamentName}
  </div>
{/if}
{#if tournament && tournament.startDate}
  <h3 class={fieldTitle}>Start Date</h3>
  <div
    bind:innerHTML={tournament.startDate}
    contenteditable="true"
    class={fieldItem}>
    {tournament.startDate}
  </div>
{/if}
<h3 class={fieldTitle}>End Date</h3>
<div contenteditable="true" class={fieldItem}>
  {tournament && tournament.endDate}
</div>
{#if tournament && tournament.registrationCost}
  <h3 class={fieldTitle}>Registration Cost</h3>
  <div contenteditable="true" class={fieldItem}>
    {tournament.registrationCost}
  </div>
{/if}
{#if tournament && tournament.events}
  <h3 class={fieldTitle}>Events</h3>
  {#each tournament.events as event (event)}
    <div class={fieldItem}>{event.eventName}</div>
  {/each}
{/if}
{#if tournament && tournament.competitors}
  <h3 class={fieldTitle}>Competitors</h3>
  {#each tournament.competitors as competitor (competitor.username)}
    <ManageCompetitorCard
      firstName={competitor.firstName}
      lastName={competitor.lastName}
      events={competitor.events} />
  {/each}
{/if}
<button on:click={saveChanges} class={globalBtn1}>Save Changes</button>
