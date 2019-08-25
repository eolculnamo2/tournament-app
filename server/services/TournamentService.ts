import uuid from 'uuid/v1';
import moment, { Moment } from 'moment';
import { Response } from 'express';
import {
  INewTournament,
  INewTournamentModel,
  ITournamentService,
} from '../../constants/interfaces';
import Tournament from '../models/Tournament';

export default class TournamentService implements ITournamentService {
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

  public getUpcomingTournaments(
    response: Response
  ): Array<INewTournament> | void {
    Tournament.find({}, (err, allTournaments) => {
      if (err) throw Error(err);

      let futureTournaments: Array<INewTournament> = [];
      const today: Moment = moment(new Date());

      // Filter tournaments that have not yet ended and format into INewTournament
      futureTournaments = allTournaments
        .filter((tournament: INewTournamentModel) => {
          if (tournament.endDate) {
            const endDate: Moment = moment(tournament.endDate);
            return today.diff(endDate) < 0;
          }
        })
        .map((tournament: INewTournamentModel) => {
          return {
            hostClub: tournament.hostClub,
            tournamentName: tournament.tournamentName,
            events: tournament.events,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            registrationCost: tournament.registrationCost,
          };
        });
      response.send(futureTournaments);
    });
  }
}
