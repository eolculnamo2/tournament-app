import IPathComponent from '../../../constants/interfaces/IPathComponent';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import CreateTournament from './CreateTournament/CreateTournament';

const routes: Array<IPathComponent> = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/create-tournament', component: CreateTournament },
];
export default routes;
