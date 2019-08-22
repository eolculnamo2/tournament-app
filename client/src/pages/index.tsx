import IPathComponent from '../../../constants/interfaces/IPathComponent';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import CreateTournament from './CreateTournament/CreateTournament';
import JudgesTable from './JudgesTable/JudgesTable';

const routes: Array<IPathComponent> = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/create-tournament', component: CreateTournament },
  { path: '/judges-table', component: JudgesTable },
];
export default routes;
