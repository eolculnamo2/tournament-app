import { Document } from 'mongoose';

export default interface INewTournamentModel extends Document {
  hostClub: string;
  tournamentName: string;
  events: Array<string>;
  startDate: Date | null;
  endDate: Date | null;
  registrationCost: number | null;
  adminUser: string;
  uuid: string;
}
