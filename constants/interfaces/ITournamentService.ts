import { Response } from 'express';
import { INewTournament } from '.';

export default interface ITournamentService {
  createTournament: (payload: INewTournament, adminUser: string) => boolean;
  getUpcomingTournaments: (response: Response) => Array<INewTournament> | void;
  createMatch: (
    fighter1: string,
    fighter2: string,
    event: string,
    tournamentId: string
  ) => void;
  getTournamentDetails: (id: string, res: Response) => void;
  registerForMatch: (uuid: string, username: string, res: Response) => void;
}
