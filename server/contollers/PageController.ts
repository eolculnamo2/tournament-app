// page level server side get routes

// External Dependencies
import path from 'path';
import { Router } from 'express';

// Internal Dependencies
import pages from '../../client/src/pages';
import { IPathComponent } from '../../constants/interfaces';

const router: Router = Router();
const routes: Array<string> = pages.map((route: IPathComponent) => route.path);

router.get(routes, (req, res) =>
  res.sendFile(path.join(__dirname, '../..', '/client/index.html'))
);

export default router;
