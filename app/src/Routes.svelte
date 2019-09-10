<script>
  import { Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication/Authentication.svelte';
  import Dashboard from './pages/Dashboard/Dashboard.svelte';
  import CreateTournament from './pages/CreateTournament/CreateTournament.svelte';
  import UpcomingTournaments from './pages/UpcomingTournaments/UpcomingTournaments.svelte';
  import RegisterForTournament from './pages/RegisterForTournament/RegisterForTournament.svelte';
</script>

<Route path="/" component={AuthenticationPage} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/create-tournament" component={CreateTournament} />
<Route path="/upcoming-tournaments" component={UpcomingTournaments} />
<Route path="/view-tournament" component={RegisterForTournament} />
