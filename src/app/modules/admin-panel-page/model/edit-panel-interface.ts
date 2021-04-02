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
