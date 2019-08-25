export default interface INewTournament {
  hostClub: string;
  tournamentName: string;
  events: Array<string>;
  startDate: Date | null;
  endDate: Date | null;
  registrationCost: number | null;
  competitors: Array<string>;
}
