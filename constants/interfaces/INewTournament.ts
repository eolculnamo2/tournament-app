export default interface INewTournament {
  hostClub: string;
  eventName: string;
  startDate: Date | null;
  endDate: Date | null;
  registrationCost: number;
}
