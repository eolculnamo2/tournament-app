import INewTournament from '../../constants/interfaces/INewTournament';

export default class TournamentService {
  public createTournament(payload: INewTournament) {
    // make db call here
    console.log(JSON.stringify(payload, null, 3));
  }
}
