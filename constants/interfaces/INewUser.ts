import { IUser } from '.';

export default interface INewUser extends IUser {
  confirmPassword: string;
}
