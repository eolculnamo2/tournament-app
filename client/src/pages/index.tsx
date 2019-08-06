import IPathComponent from '../../../constants/interfaces/IPathComponent';
import Home from './Home';

// Used by both server's PageController and react router to sync page
// calls for requests made by server routing and front end routing.
const routes: Array<IPathComponent> = [{ path: '/', component: Home }];
export default routes;
