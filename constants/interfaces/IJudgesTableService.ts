import { IMatch } from '.';

export default interface IJudgesTableService {
  saveMatchResult: (result: IMatch) => void;
}
