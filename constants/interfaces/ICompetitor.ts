export default interface ICompetitor {
  competitor: string;
  competitorNum: string;
  competitorScore: number;
  handleScoreAdjust(e: React.MouseEvent, num: number, comp: string): void;
  handlePenaltyAdjust(e: React.MouseEvent, num: number, comp: string): void;
  penaltyCount: number;
}
