<script>
  const penalty_symbol = 'images/penalty_symbol.png';
  export let competitor;
  export let competitorNum;
  export let competitorScore;
  export let handleScoreAdjust;
  export let handlePenaltyAdjust;
  export let penaltyCount;
</script>

<style>

</style>

<div class="Competitor__container">
  <h3 class="Competitor__name">{competitor}</h3>
  <h4 class="Competitor__score">{competitorScore}</h4>
  <div class="Competitor__score-adjust-container">
    <button
      class="Competitor__deduct-score"
      on:click={e => handleScoreAdjust(-1, competitorNum)}>
      -1
    </button>
    <button
      class="Competitor__add-score"
      on:click={e => handleScoreAdjust(1, competitorNum)}>
      +1
    </button>
  </div>
  <div class="Competitor__score-adjust-container">
    <button
      class="Competitor__deduct-score"
      on:click={e => handleScoreAdjust(-2, competitorNum)}>
      -2
    </button>
    <button
      class="Competitor__add-score"
      on:click={e => handleScoreAdjust(2, competitorNum)}>
      +2
    </button>
  </div>
  <div class="Competitor__score-adjust-container">
    <button
      class="Competitor__deduct-score"
      on:click={e => handleScoreAdjust(-3, competitorNum)}>
      -3
    </button>
    <button
      class="Competitor__add-score"
      on:click={e => handleScoreAdjust(3, competitorNum)}>
      +3
    </button>
  </div>
  <div class="Competitor__penalty-container">
    <div class="Competitor__penalty-img-container">
      <img
        class="Competitor__penalty-img"
        src={penalty_symbol}
        alt="penalty symbol" />
    </div>
    <div class="Competitor__penalty-count-container">
      <button
        on:click={e => handlePenaltyAdjust(-1, competitorNum)}
        class="Competitor__penalty-deduct">
        -
      </button>
      <div class="Competitor__penalty-count">{penaltyCount}</div>
      <button
        on:click={e => handlePenaltyAdjust(1, competitorNum)}
        class="Competitor__penalty-add">
        +
      </button>
    </div>
  </div>
  <div class="Competitor__line-break" />
</div>
