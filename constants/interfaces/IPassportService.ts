import { Request, Response } from 'express';
import { INewUser } from '.';

export default interface IPassportService {
  newUser: (user: INewUser, req: Request, res: Response) => void;
  handleLogin: (req: Request, res: Response) => void;
  logout: (req: Request, res: Response) => void;
  checkLogin: (req: Request, res: Response) => void;
}
