import { Router } from 'express';
import TournamentService from '../services/TournamentService';
const router: Router = Router();

const { createTournament, getUpcomingTournaments } = new TournamentService();

//**** GET REQUESTS ****\\
router.get('/get-upcoming-tournaments', (req, res) =>
  res.send(getUpcomingTournaments())
);
//**** END GET REQUESTS ****\\
//**** POST REQUESTS ****\\
router.post('/create-tournament', (req, res) => {
  if (req.user) {
    const success: boolean = createTournament(req.body, req.user.username);
    res.send({ success });
  } else {
    res.send({ success: false });
  }
});
//**** END POST REQUESTS ****\\

export default router;
