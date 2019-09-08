<script>
  import { Router, Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication/Authentication.svelte';
  import Header from './components/Header/Header.svelte';
  export let url = '';
</script>

<Router {url}>
  <Header />
  <Route path="/" component={AuthenticationPage} />
</Router>
