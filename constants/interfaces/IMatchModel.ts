import { Document } from 'mongoose';
import { IMatch } from '.';

export default interface IMatchModel extends Document, IMatch {}
