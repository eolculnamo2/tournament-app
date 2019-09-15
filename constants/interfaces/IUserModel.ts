import { Document } from 'mongoose';
import { IUser } from '.';

export default interface IUserModel extends Document, IUser {}
