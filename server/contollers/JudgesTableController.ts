import { Router } from 'express';
import JudgesTableService from '../services/JudgesTableService';
import { IMatch } from '../../constants/interfaces';

const router: Router = Router();
const { saveMatchResult } = new JudgesTableService();

router.post('/save-match-result', req => saveMatchResult(req.body as IMatch));

export default router;
