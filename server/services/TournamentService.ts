import { INewTournament } from '../../constants/interfaces';
import Tournament from '../models/Tournament';
import uuid from 'uuid/v1';

export default class TournamentService {
  public createTournament(payload: INewTournament, adminUser: string): boolean {
    const {
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
    } = payload;

    new Tournament({
      adminUser,
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      uuid: uuid(),
    }).save(err => {
      if (err) {
        console.error(err);
        return false;
      }
    });
    return true;
  }
}
