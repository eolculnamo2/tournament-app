import { Document } from 'mongoose';

export default interface IUserModel extends Document {
  username: string;
  password: string;
  email: string;
}
