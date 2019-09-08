<script>
  import { headerWrap, logoImg, linksWrap } from './HeaderStyles.js';
  import { Link } from 'svelte-routing';
  import { validatedRoute } from '../../globals/helpers.js';
</script>

<div class={headerWrap}>
  <Link to={validatedRoute('/')}>
    <img class={logoImg} src="/images/logo.png" alt="Sword Point HEMA Tournament Software" />
  </Link>
  <ul class={linksWrap}>
    <li>HOME</li>
    <li>HOME</li>
    <li>HOME</li>
    <li>HOME</li>
  </ul>
</div>
