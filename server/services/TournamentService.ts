import uuid from 'uuid/v1';
import moment, { Moment } from 'moment';
import { Response } from 'express';
import {
  INewTournament,
  INewTournamentModel,
  ITournamentService,
} from '../../constants/interfaces';
import Tournament from '../models/Tournament';
import Match from '../models/Match';

export default class TournamentService implements ITournamentService {
  public createTournament(payload: INewTournament, adminUser: string): boolean {
    const {
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      competitors,
    } = payload;

    new Tournament({
      adminUser,
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      competitors,
      uuid: uuid(),
    }).save(err => {
      if (err) {
        console.error(err);
        return false;
      }
    });
    return true;
  }

  public getUpcomingTournaments(
    response: Response
  ): Array<INewTournament> | void {
    Tournament.find({}, (err, allTournaments) => {
      if (err) throw Error(err);

      let futureTournaments: Array<INewTournamentModel> = [];
      const today: Moment = moment(new Date());

      // Filter tournaments that have not yet ended and format into INewTournament
      futureTournaments = allTournaments.filter(
        (tournament: INewTournamentModel) => {
          if (tournament.endDate) {
            const endDate: Moment = moment(tournament.endDate);
            return today.diff(endDate) < 0;
          }
        }
      );
      response.send(futureTournaments);
    });
  }

  public createMatch(
    fighter1: string,
    fighter2: string,
    event: string,
    tournamentId: string
  ) {
    new Match({
      round: 1,
      fighter1,
      fighter2,
      event,
      winner: '',
      tournamentId,
      uuid: uuid(),
    }).save();
  }
}
