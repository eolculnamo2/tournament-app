import INewTournament from '../../constants/interfaces/INewTournament';
import Tournament from '../models/Tournament';

export default class TournamentService {
  public createTournament(payload: INewTournament, adminUser: string): boolean {
    const {
      hostClub,
      eventName,
      startDate,
      endDate,
      registrationCost,
    } = payload;

    new Tournament({
      adminUser,
      hostClub,
      eventName,
      startDate,
      endDate,
      registrationCost,
    }).save(err => {
      if (err) {
        console.error(err);
        return false;
      }
    });
    return true;
  }
}
