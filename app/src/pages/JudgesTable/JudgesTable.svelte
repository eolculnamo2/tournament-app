<script>
  import {
    JudgesTableTitle,
    JudgesTableNameInputContainer,
    JudgesTableNameInputBlock,
    JudgesTableLabel,
    JudgsTableVSText,
    JudgesTableButtonContainer,
    JudgesTableButton,
    JudgesTableCompetitorsContainer,
    JudgesTableButtonsContainer,
    JudgesTableSubmitButton,
    JudgesTableEditNamesButton,
    JudgesTableRoundContainer,
    JudgesTableRoundInput,
  } from './JudgesTableStyles.js';
  import Competitor from '../../components/Competitor/Competitor.svelte';
  let namesSubmitted = false;
  let comp1Name;
  let competitor1Score = 0;
  let competitor1Penalties = 0;
  let comp2Name;
  let competitor2Score = 0;
  let competitor2Penalties = 0;
  let round = 1;

  function handleNameChange(e) {
    console.log('e.target.name: ', e.target.name);
    switch (e.target.name) {
      case 'comp1':
        comp1Name = e.target.value;
        break;
      case 'comp2':
        comp2Name = e.target.value;
        break;
      default:
        break;
    }
  }

  function handleSubmitNames() {
    console.log('handling submit names');
    namesSubmitted = comp1Name && comp2Name;
    // if (comp1Name && comp2Name) {
    //     namesSubmitted = true;
    // }
  }

  async function handleSubmitScore() {
    console.log('handleSubmitScore');
    let winner =
      competitor1Score - competitor2Score > 0
        ? comp1Name
        : competitor1Score - competitor2Score < 0
        ? comp2Name
        : 'tie';

    let matchResults = {
      round,
      fighter1: comp1Name,
      fighter2: comp2Name,
      winner,
      event: 'Fight between 1 and 2.',
      tournamentId: uuid(),
    };
    const response = await postData(
      'score/save-match-result',
      JSON.stringify(matchResults)
    );

    if (response.success) {
      round += 1;
      competitor1Score = 0;
      competitor2Score = 0;
      alert(response.status);
    }
  }

  function toggleNamesSubmitted() {
    console.log('toggleNamesSubmitted');
    namesSubmitted = !namesSubmitted;
  }

  function handleRoundChange() {
    if (parseInt(e.target.value) >= 0) {
      round = parseInt(e.target.value);
    }
  }

  function handleScoreAdjust(num, comp) {
    console.log('handleScoreAdjust: num', num);
    console.log('handleScoreAdjust comp: ', comp);
    switch (comp) {
      case 'comp1':
        if (competitor1Score + num >= 0) {
          competitor1Score = competitor1Score + num;
        }
        break;
      case 'comp2':
        if (competitor2Score + num >= 0) {
          competitor2Score = competitor2Score + num;
        }
      default:
        break;
    }
  }

  function handlePenaltyAdjust(num, comp) {
    switch (comp) {
      case 'comp1':
        if (
          competitor1Penalties + num >= 0 &&
          competitor1Penalties + num <= 5
        ) {
          competitor1Penalties = competitor1Penalties + num;
        }
        break;
      case 'comp2':
        if (
          competitor2Penalties + num >= 0 &&
          competitor2Penalties + num <= 5
        ) {
          setCompetitor2Penalties(competitor2Penalties + num);
        }
      default:
        break;
    }
  }
</script>

<style>

</style>

<div>
  <h1 class={JudgesTableTitle}>Judge's Table</h1>
  <div>
    {#if namesSubmitted}
      <div class={JudgesTableNameInputContainer}>
        <div class={JudgesTableNameInputBlock}>
          <label class={JudgesTableLabel} htmlFor="comp1">Competitor 1</label>
          <input
            name="comp1"
            value={comp1Name}
            type="text"
            on:change={handleNameChange} />
        </div>
        <h3 class={JudgsTableVSText}>VS</h3>
        <div class={JudgesTableNameInputBlock}>
          <label class={JudgesTableLabel} htmlFor="comp2">Competitor 2</label>
          <input
            name="comp2"
            value={comp2Name}
            type="text"
            on:change={handleNameChange} />
        </div>
        <div class={JudgesTableButtonContainer}>
          <button class={JudgesTableButton} onClick={handleSubmitNames}>
            Submit Names
          </button>
        </div>
      </div>
    {:else}
      <div class={JudgesTableCompetitorsContainer}>
        <Competitor
          competitor={comp1Name}
          competitorNum={'comp1'}
          competitorScore={competitor1Score}
          {handleScoreAdjust}
          {handlePenaltyAdjust}
          penaltyCount={competitor1Penalties} />

        <Competitor
          competitor={comp2Name}
          competitorNum={'comp2'}
          competitorScore={competitor2Score}
          {handleScoreAdjust}
          {handlePenaltyAdjust}
          penaltyCount={competitor2Penalties} />
        <div class={JudgesTableButtonsContainer}>
          <button class={JudgesTableSubmitButton} on:click={handleSubmitScore}>
            Submit Final Score
          </button>
          <button
            class={JudgesTableEditNamesButton}
            on:click={toggleNamesSubmitted}>
            Edit Names
          </button>
          <div class={JudgesTableRoundContainer}>
            <h3>Round</h3>
            <input
              class={JudgesTableRoundInput}
              type="number"
              on:change={handleRoundChange}
              value={round} />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
