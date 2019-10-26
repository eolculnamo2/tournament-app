<script>
  import { headerWrap, logoImg, linksWrap } from './HeaderStyles.js';
  import { Link } from 'svelte-routing';
  import { username } from '../../store/global-store.js';
  import { validatedRoute } from '../../globals/helpers.js';
</script>

<div class={headerWrap}>
  <Link to={validatedRoute($username, '/')}>
    <img
      class={logoImg}
      src="/images/sword-point-white.svg"
      alt="Sword Point HEMA Tournament Software" />
  </Link>
  <ul class={linksWrap}>
    <li>HOME</li>
    <li>HOME</li>
    <li>HOME</li>
    <li>HOME</li>
  </ul>
</div>
