import { Document } from 'mongoose';
import { INewTournament } from '.';

export default interface INewTournamentModel extends Document, INewTournament {
  adminUser: string;
  uuid: string;
}
