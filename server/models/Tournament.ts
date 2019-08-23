import mongoose, { Schema } from 'mongoose';
import { INewTournamentModel } from '../../constants/interfaces';

const Tournament: Schema = new Schema({
  adminUser: { type: String, required: true },
  hostClub: { type: String, required: true },
  tournamentName: { type: String, required: true },
  events: { type: Array, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  registrationCost: { type: Number, required: true },
  uuid: { type: String, required: true, unique: true },
});

export default mongoose.model<INewTournamentModel>('tournaments', Tournament);
