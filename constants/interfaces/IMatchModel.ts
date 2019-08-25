import { Document } from 'mongoose';

export default interface IMatchModel extends Document {
  round: number;
  fighter1: string;
  fighter2: string;
  winner: string;
  uuid: string;
}
