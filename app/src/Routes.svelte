<script>
  import { Router, Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication.svelte';

  export let url = '';
</script>

<Router {url}>
  <div>
    <Route path="/" component={AuthenticationPage} />
  </div>
</Router>
