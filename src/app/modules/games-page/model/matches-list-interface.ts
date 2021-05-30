export interface IMatchesListInterface {
  matchId: String,
  firstTeam: ITeamInfo,
  secondTeam: ITeamInfo,
  date: Date,
  score: IScoreInfo,
  sportType: ISportType,
  isCompleted: Boolean,
}

interface ITeamInfo {
  teamId: string,
  teamName: string,
  teamLogo: string,
}

interface IScoreInfo {
  firstTeam: number,
  secondTeam: number,
}

interface ISportType {
  sportCode: number,
  sportTitle: string,
}
