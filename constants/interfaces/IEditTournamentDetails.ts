import { IRegisteredCompetitor } from '.';

export default interface IEditTournamentDetails {
  hostClub: string;
  tournamentName: string;
  startDate: string;
  endDate: string;
  registrationCost: number;
  events: Array<string>;
  competitors: Array<IRegisteredCompetitor>;
}
