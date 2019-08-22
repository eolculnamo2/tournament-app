import { Document } from 'mongoose';

export default interface INewTournament extends Document {
  hostClub: string;
  eventName: string;
  startDate: Date | null;
  endDate: Date | null;
  registrationCost: number;
  adminUser?: string;
}
