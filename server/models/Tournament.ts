import mongoose, { Schema } from 'mongoose';
import { INewTournamentModel } from '../../constants/interfaces';

const Tournament: Schema = new Schema({
  adminUser: { type: String, required: true, unique: true },
  hostClub: { type: String, required: true },
  eventName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  registrationCost: { type: Number, required: true },
});

export default mongoose.model<INewTournamentModel>('tournaments', Tournament);
