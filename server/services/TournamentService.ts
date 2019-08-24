import uuid from 'uuid/v1';
import moment, { Moment } from 'moment';
import {
  INewTournament,
  INewTournamentModel,
} from '../../constants/interfaces';
import Tournament from '../models/Tournament';

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

  public async getUpcomingTournaments(): Promise<Array<INewTournamentModel>> {
    let futureTournaments: Array<INewTournamentModel> = [];

    await Tournament.find({}, (err, allTournaments) => {
      if (err) throw Error(err);

      const today: Moment = moment(new Date());

      futureTournaments = allTournaments.filter(
        (tournament: INewTournamentModel) => {
          if (tournament.endDate) {
            const endDate: Moment = moment(tournament.endDate);
            return today.diff(endDate) < 0;
          }
        }
      );
    });
    return futureTournaments;
  }
}
