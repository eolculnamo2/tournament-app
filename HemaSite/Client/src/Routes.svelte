<script>
  import { Route } from 'svelte-routing';
  import AuthenticationPage from './pages/Authentication/Authentication.svelte';
  import Dashboard from './pages/Dashboard/Dashboard.svelte';
  import CreateTournament from './pages/CreateTournament/CreateTournament.svelte';
  import UpcomingTournaments from './pages/UpcomingTournaments/UpcomingTournaments.svelte';
  import RegisterForTournament from './pages/RegisterForTournament/RegisterForTournament.svelte';
  import ManageEvents from './pages/ManageEvents/ManageEvents.svelte';
  import EventManager from './pages/EventManager/EventManager.svelte';
  import JudgesTable from './pages/JudgesTable/JudgesTable.svelte';
  import Profile from './pages/Profile/Profile.svelte';
  import ProfileBeingEdited from './pages/ProfileBeingEdited/ProfileBeingEdited.svelte';
  import NotFound from './pages/NotFound/NotFound.svelte';
</script>

<Route path="/" component={AuthenticationPage} />
<Route path="/dashboard" component={Dashboard} />
<Route path="/create-tournament" component={CreateTournament} />
<Route path="/upcoming-tournaments" component={UpcomingTournaments} />
<Route path="/view-tournament" component={RegisterForTournament} />
<Route path="/manage-events" component={ManageEvents} />
<Route path="/event-manager" component={EventManager} />
<Route path="/judges-table" component={JudgesTable} />
<Route path="/profile" component={Profile} />
<Route path="/edit-profile" component={ProfileBeingEdited} />
<Route component={NotFound} />
