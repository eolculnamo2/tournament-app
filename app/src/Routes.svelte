<script>
  import { Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication/Authentication.svelte';
  import Dashboard from './pages/Dashboard/Dashboard.svelte';
  import CreateTournament from './pages/CreateTournament/CreateTournament.svelte';
</script>

<Route path="/" component={AuthenticationPage} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/create-tournament" component={CreateTournament} />
