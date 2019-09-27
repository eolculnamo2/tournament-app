<script>
  import circleLinks from './dashboard-links-config.js';
  import {
    PRIMARY_RED,
    SECONDARY_RED,
    PRIMARY_BLUE,
    SECONDARY_BLUE,
    BORDER_GRAY1,
  } from '../../globals/styles-variables.js';
  import { circle, circleTxt, circleWrap, title } from './DashboardStyles.js';
  import { Link } from 'svelte-routing';
  import emotion from 'emotion/dist/emotion.umd.min.js';
  const { css } = emotion;

  function getColor(color) {
    switch (color) {
      case 'red1':
        return PRIMARY_RED;
      case 'red2':
        return SECONDARY_RED;
      case 'blue1':
        return PRIMARY_BLUE;
      case 'blue2':
        return SECONDARY_BLUE;
      default:
        return BORDER_GRAY1;
    }
  }
</script>

<h1 class={title}>Sword Point Tournaments</h1>
<div class={circleWrap}>
  {#each circleLinks as circleLink (JSON.stringify(circleLinks))}
    <Link to={circleLink.link}>
      <div
        class={css`
          ${circle};
          background-color: ${getColor(circleLink.color)};`}>
        <div class={circleTxt}>{circleLink.text}</div>
      </div>
    </Link>
  {/each}
</div>
