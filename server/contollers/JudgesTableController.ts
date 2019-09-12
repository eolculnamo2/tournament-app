import { Router } from 'express';
import JudgesTableService from '../services/JudgesTableService';
import { IMatch } from '../../constants/interfaces';
import Match from '../models/Match';

const router: Router = Router();
const { saveMatchResult } = new JudgesTableService();

router.post('/save-match-result', async (req, res) => {
  const tournamentIdExists = await Match.findOne({
    tournamentId: req.body.tournamentId,
  });

  if (!tournamentIdExists) {
    saveMatchResult(req.body as IMatch);
    res.send({
      success: true,
      status: 'Match Saved',
    });
  } else {
    res.send({
      success: false,
      status: 'Tournament ID already exists.',
    });
  }
});

export default router;
