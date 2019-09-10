// page level server side get routes
import path from 'path';
import { Router } from 'express';

const router: Router = Router();

// /client/index.html for react
// /app/public/index.html for svelte
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../..', '/app/public/index.html'))
);

export default router;
