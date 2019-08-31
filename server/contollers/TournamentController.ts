import { Router } from 'express';
import TournamentService from '../services/TournamentService';
import { Request, Response } from 'express';
const router: Router = Router();

const {
  createTournament,
  getUpcomingTournaments,
  getTournamentDetails,
  registerForMatch,
} = new TournamentService();

//**** GET REQUESTS ****\\
router.get('/get-upcoming-tournaments', (req: Request, res: Response) => {
  getUpcomingTournaments(res);
});

router.get('/tournament-details/:tournamentId', (req: Request, res: Response) => {
  getTournamentDetails(req.params.tournamentId, res);
});
//**** END GET REQUESTS ****\\

//**** POST REQUESTS ****\\
router.post('/create-tournament', (req: Request, res: Response) => {
  if (req.user) {
    const success: boolean = createTournament(req.body, req.user.username);
    res.send({ success });
  } else {
    res.send({ success: false });
  }
});

router.post('/register-for-tournament/:uuid', (req: Request, res: Response) => {
  if (!req.user.username) res.send({ notLoggedIn: true });

  registerForMatch(req.params.uuid, req.user.username, res);
});
//**** END POST REQUESTS ****\\

export default router;
