<script>
  import { Router, Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication/Authentication.svelte';
  import Dashboard from './pages/Dashboard/Dashboard.svelte';
  import Header from './components/Header/Header.svelte';
  export let url = '';
</script>

<Router {url}>
  <Header />
  <Route path="/" component={AuthenticationPage} />
  <Route path="/dashboard" component={Dashboard} />
</Router>
