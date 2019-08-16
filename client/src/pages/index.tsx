import IPathComponent from '../../../constants/interfaces/IPathComponent';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

const routes: Array<IPathComponent> = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
];
export default routes;
