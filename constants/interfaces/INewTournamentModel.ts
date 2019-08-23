import { Document } from 'mongoose';

export default interface INewTournamentModel extends Document {
  hostClub: string;
  tournamentName: string;
  events: Array<string>;
  startDate: Date | null;
  endDate: Date | null;
  registrationCost: number;
  adminUser: string;
  uuid: string;
}
