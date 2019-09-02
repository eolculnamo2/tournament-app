// page level server side get routes
import path from 'path';
import { Router } from 'express';

const router: Router = Router();
const routes: Array<string> = [
  '/',
  '/dashboard',
  '/create-tournament',
  '/judges-table',
  '/upcoming-tournaments',
  '/view-tournament',
  '/manage-event',
  '/manage-event-list',
];

router.get(routes, (req, res) => res.sendFile(path.join(__dirname, '../..', '/client/index.html')));

export default router;
