import uuid from 'uuid/v1';
import moment, { Moment } from 'moment';
import { Request, Response } from 'express';
import {
  INewTournament,
  INewTournamentModel,
  ITournamentService,
  IRegisteredCompetitor,
  IEditTournamentDetails,
} from '../../constants/interfaces';
import Tournament from '../models/Tournament';
import Match from '../models/Match';
import Utilities from '../Utils/Utilities';

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

  public getUpcomingTournaments(response: Response): Array<INewTournament> | void {
    Tournament.find({}, (err, allTournaments) => {
      if (err) throw Error(err);

      let futureTournaments: Array<INewTournamentModel> = [];
      const today: Moment = moment(new Date());

      // Filter tournaments that have not yet ended and format into INewTournament
      futureTournaments = allTournaments.filter((tournament: INewTournamentModel) => {
        if (tournament.endDate) {
          const endDate: Moment = moment(tournament.endDate);
          return today.diff(endDate) < 0;
        }
      });
      response.send(futureTournaments);
    });
  }

  public getTournamentDetails(id: string, res: Response) {
    Tournament.find({ uuid: id }, (err, tournament) => {
      if (err) throw Error(err);
      res.send(tournament[0]);
    });
  }

  public async createMatch(
    fighter1: string,
    fighter2: string,
    event: string,
    tournamentId: string
  ) {
    await new Match({
      round: 1,
      fighter1,
      fighter2,
      event,
      winner: '',
      tournamentId,
      uuid: uuid(),
    }).save();
  }

  public registerForMatch(uuid: string, req: Request, res: Response) {
    Tournament.findOne({ uuid }, (err, tournament) => {
      if (err) throw Error(err);

      const { username, firstName, lastName } = req.user;

      const competitorSubmission: IRegisteredCompetitor = {
        username,
        firstName,
        lastName,
        events: req.body.events,
      };

      const notInTournament: boolean | null =
        tournament &&
        !tournament.competitors.find(user => user.username === competitorSubmission.username);

      if (tournament && notInTournament) {
        tournament.competitors.push(competitorSubmission);
        tournament.save((err, update) => {
          if (err) {
            throw err;
          }
          res.send(update);
        });
      } else if (tournament && !notInTournament) {
        res.send({ message: 'Already in tournament' });
      } else {
        res.send({ message: 'Error occurred' });
      }
    });
  }

  public getUsersOwnedTournaments(username: string, res: Response) {
    Tournament.find({ adminUser: username }, (err, tournaments) => {
      if (err) throw err;

      const today: Moment = moment(new Date());
      const payload = tournaments.map((tournament: INewTournament) => {
        if (tournament.endDate) {
          const endDate: Moment = moment(tournament.endDate);
          tournament.upcomingTournament = false;

          if (today.diff(endDate) < 0) {
            tournament.upcomingTournament = true;
          }
        }
        return tournament;
      });
      res.send(payload);
    }).lean();
    // lean() =>https://stackoverflow.com/questions/49662843/add-key-value-pair-to-returned-mongoose-object
  }

  public editTournamentDetails(uuid: string, updateBody: IEditTournamentDetails, res: Response) {
    const {
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      competitors,
    } = updateBody;

    const update = {
      hostClub,
      tournamentName,
      startDate,
      endDate,
      registrationCost,
      events,
      competitors,
    };

    Tournament.findOneAndUpdate({ uuid }, update, (err, response) => {
      if (err) throw err;
      res.send({ ...response });
    });
  }

  public generateMatches(tournamentId: string, res: Response) {
    Tournament.findOne({ uuid: tournamentId }, (err, response: INewTournament) => {
      if (err) throw err;
      // get rid of existing matches by tournamentId
      // deleteMany is an option if we decide to add conditional removal (i.e. by event)
      Match.deleteMany({ tournamentId }, async err => {
        if (err) throw err;

        // Iterate each event in tournament and splice event users event list from competitors copy and save new Match
        for (const event of response.events) {
          // filter and randomize competitors array

          const randomizedCompetitors: Array<IRegisteredCompetitor> = Utilities.shuffle(
            response.competitors.filter((c: IRegisteredCompetitor) => c.events.indexOf(event) > -1)
          );
          let forceStop = false;

          while (randomizedCompetitors.length || forceStop) {
            // no match. Create a bye round and kill loop
            if (randomizedCompetitors.length < 2) {
              await this.createMatch(randomizedCompetitors[0].username, '', event, tournamentId);
              forceStop = true;
              break;
            }

            // get random two competitors
            const fighterIndex1: number = Math.floor(Math.random() * randomizedCompetitors.length);
            const fighterIndex2: number =
              fighterIndex1 + 1 < randomizedCompetitors.length
                ? fighterIndex1 + 1
                : fighterIndex1 - 1;
            const fighter1 = randomizedCompetitors[fighterIndex1];
            const fighter2 = randomizedCompetitors[fighterIndex2];

            await this.createMatch(fighter1.username, fighter2.username, event, tournamentId);

            // splice their index from randomizedCompetitors'
            randomizedCompetitors.splice(fighterIndex1, 1);
            randomizedCompetitors.splice(fighterIndex2 - 1, 1);
          }
        }

        res.send({ success: true });
      });
    });
  }
}
