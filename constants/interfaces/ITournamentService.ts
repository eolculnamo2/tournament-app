import { Request, Response } from 'express';
import { INewTournament, IEditTournamentDetails } from '.';

export default interface ITournamentService {
  createTournament: (payload: INewTournament, adminUser: string) => boolean;
  getUpcomingTournaments: (response: Response) => Array<INewTournament> | void;
  createMatch: (fighter1: string, fighter2: string, event: string, tournamentId: string) => void;
  getTournamentDetails: (id: string, res: Response) => void;
  registerForMatch: (uuid: string, req: Request, res: Response) => void;
  getUsersOwnedTournaments: (username: string, res: Response) => void;
  editTournamentDetails: (uuid: string, updateBody: IEditTournamentDetails, res: Response) => void;
  generateMatches: (uuid: string, res: Response) => void;
}
