import { Router } from 'express';
import TournamentService from '../services/TournamentService';
const router: Router = Router();

const { createTournament } = new TournamentService();

router.post('/create-tournament', (req, res) => createTournament(req.body));

export default router;
