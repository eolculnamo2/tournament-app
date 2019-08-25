import { Response } from 'express';
import { INewTournament } from '.';

export default interface ITournamentService {
  createTournament: (payload: INewTournament, adminUser: string) => boolean;
  getUpcomingTournaments: (response: Response) => Array<INewTournament> | void;
}
