/** MANY TO ONE WITH TOURNAMENT */

import mongoose, { Schema } from 'mongoose';
import { IMatchModel } from '../../constants/interfaces';

const Match: Schema = new Schema({
  event: { type: String, required: true },
  round: { type: Number, required: true }, // round starting with 1
  fighter1: { type: String }, // username 1
  fighter2: { type: String }, // username 2
  winner: { type: String }, // username of winner
  uuid: { type: String, required: true, unique: true },
  tournamentId: { type: String, required: true }, // tournament uuid
});

export default mongoose.model<IMatchModel>('matches', Match);
