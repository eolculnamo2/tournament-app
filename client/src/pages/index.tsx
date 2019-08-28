import IPathComponent from '../../../constants/interfaces/IPathComponent';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import CreateTournament from './CreateTournament/CreateTournament';
import JudgesTable from './JudgesTable/JudgesTable';
import UpcomingTournaments from './UpcomingTournaments/UpcomingTournaments';
import ViewTournament from './ViewTournament/ViewTournament';

const routes: Array<IPathComponent> = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/create-tournament', component: CreateTournament },
  { path: '/judges-table', component: JudgesTable },
  { path: '/upcoming-tournaments', component: UpcomingTournaments },
  { path: '/view-tournament', component: ViewTournament },
];
export default routes;
