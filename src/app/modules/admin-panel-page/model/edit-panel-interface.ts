export interface ISportTypes {
  title: string,
  code: string,
}

export interface INewPlayer {
  playerName: string,
  playerNick: string,
  sportTypeCode: number,
  playerBirthday: Date,
  playerTeamId: string
}

export interface INewObjectId {
  id: string,
}

export interface INewNews {
  newsTitle: string,
  newsSportTypeCode: number,
  newsSubTitle: string,
  newsText: string,
  newsPhoto: string,
}

export interface INewMatch {
  firstTeamId: string,
  secondTeamId: string,
  date: Date,
  score: IScore,
  isCompleted: boolean,
  sportTypeCode: number,
}

interface IScore {
  firstTeam: number,
  secondTeam: number,
}

export interface INewTeam {
  teamName: string,
  sportTypeCode: number,
  teamLogo: string,
}

export interface INews {
  newsDate: Date,
  newsId: string,
  newsPhoto: string,
  newsSubtitle: string,
  newsText: string,
  newsTitle: string,
  sportType: ISportTypes,
}
