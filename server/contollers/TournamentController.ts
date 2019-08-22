import { Router } from 'express';
import TournamentService from '../services/TournamentService';
const router: Router = Router();

const { createTournament } = new TournamentService();

router.post('/create-tournament', (req, res) => {
  if (req.user) {
    const success: boolean = createTournament(req.body, req.user.username);
    res.send({ success });
  } else {
    res.send({ success: false });
  }
});

export default router;
