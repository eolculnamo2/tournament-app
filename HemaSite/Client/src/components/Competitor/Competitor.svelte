<script>
  import {
    CompetitorContainer,
    CompetitorName,
    CompetitorScore,
    CompetitorScoreAdjustContainer,
    CompetitorDeductScore,
    CompetitorAddScore,
    CompetitorPenaltyContainer,
    CompetitorPenaltyImgContainer,
    CompetitorPenaltyImg,
    CompetitorPenaltyCountContainer,
    CompetitorPenaltyDeduct,
    CompetitorPenaltyCount,
    CompetitorPenaltyAdd,
    CompetitorLineBreak,
  } from './CompetitorStyles.js';
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

<div class={CompetitorContainer}>
  <h3 class={CompetitorName}>{competitor}</h3>
  <h4 class={CompetitorScore}>{competitorScore}</h4>
  <div class={CompetitorScoreAdjustContainer}>
    <button
      class={CompetitorDeductScore}
      on:click={e => handleScoreAdjust(-1, competitorNum)}>
      -1
    </button>
    <button
      class={CompetitorAddScore}
      on:click={e => handleScoreAdjust(1, competitorNum)}>
      +1
    </button>
  </div>
  <div class={CompetitorScoreAdjustContainer}>
    <button
      class={CompetitorDeductScore}
      on:click={e => handleScoreAdjust(-2, competitorNum)}>
      -2
    </button>
    <button
      class={CompetitorAddScore}
      on:click={e => handleScoreAdjust(2, competitorNum)}>
      +2
    </button>
  </div>
  <div class={CompetitorScoreAdjustContainer}>
    <button
      class={CompetitorDeductScore}
      on:click={e => handleScoreAdjust(-3, competitorNum)}>
      -3
    </button>
    <button
      class={CompetitorAddScore}
      on:click={e => handleScoreAdjust(3, competitorNum)}>
      +3
    </button>
  </div>
  <div class={CompetitorPenaltyContainer}>
    <div class={CompetitorPenaltyImgContainer}>
      <img
        class={CompetitorPenaltyImg}
        src={penalty_symbol}
        alt="penalty symbol" />
    </div>
    <div class={CompetitorPenaltyCountContainer}>
      <button
        on:click={e => handlePenaltyAdjust(-1, competitorNum)}
        class={CompetitorPenaltyDeduct}>
        -
      </button>
      <div class={CompetitorPenaltyCount}>{penaltyCount}</div>
      <button
        on:click={e => handlePenaltyAdjust(1, competitorNum)}
        class={CompetitorPenaltyAdd}>
        +
      </button>
    </div>
  </div>
  <div class={CompetitorLineBreak} />
</div>
