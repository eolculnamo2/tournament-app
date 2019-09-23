import { Router } from 'express';
import TournamentService from '../services/TournamentService';
import { Request, Response } from 'express';
const router: Router = Router();

const {
  createTournament,
  getUpcomingTournaments,
  getTournamentDetails,
  getUsersOwnedTournaments,
  registerForMatch,
  editTournamentDetails,
  generateMatches,
} = new TournamentService();

const tournamentService = new TournamentService();
//**** GET REQUESTS ****\\
router.get('/get-upcoming-tournaments', (req: Request, res: Response) => {
  getUpcomingTournaments(res);
});

router.get('/tournament-details/:tournamentId', (req: Request, res: Response) => {
  getTournamentDetails(req.params.tournamentId, res);
});

router.get('/get-owned-tournaments', (req: Request, res: Response) => {
  getUsersOwnedTournaments(req.user.username, res);
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
  registerForMatch(req.params.uuid, req, res);
});

router.post('/edit-tournament-details', (req: Request, res: Response) => {
  if (!req.user.username) res.send({ notLoggedIn: true });
  editTournamentDetails(req.body.uuid, req.body, res);
});

router.post('/generate-matches', (req: Request, res: Response) => {
  if (!req.user.username) res.send({ notLoggedIn: true });
  tournamentService.generateMatches(req.body.uuid, res);
});
//**** END POST REQUESTS ****\\

export default router;
