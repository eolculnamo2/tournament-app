import { IJudgesTableService, IMatch } from '../../constants/interfaces';
import Match from '../models/Match';
import uuid from 'uuid/v1';

export default class JudgesTableService implements IJudgesTableService {
  public saveMatchResult(result: IMatch) {
    new Match({ ...result, uuid: uuid() }).save();
  }
}
