<script>
  import { Link } from 'svelte-routing';
  import { username } from '../../store/global-store.js';
  import { validatedRoute } from '../../globals/helpers.js';
</script>

<style>
  .wrapper {
    margin: auto;
    max-width: 800px;
    padding: 2em;
  }

  h1 {
    color: #324354;
  }
</style>

<div class="wrapper">
  <h1>Page Not Found</h1>
  <p>Check your URL and try again. The page you are looking for may no longer be available.</p>
  <p>If you need help or think something is wrong, please contact us.</p>
  <Link to={validatedRoute($username, '/')}>Click here to go home</Link>
</div>
