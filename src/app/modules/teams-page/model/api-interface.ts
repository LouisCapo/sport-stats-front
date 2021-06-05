import { ISportTypes } from '../../../shared/model/api-inteface';

export interface ITeamListResponce {
  data: ITeamItem[],
}

export interface ITeamItem {
  teamId: string,
  teamName: string,
  teamLogo: string,
  sportType: ISportTypes,
  teamMembers: ITeamMember[],
}

export interface ITeamMember {
  playerId: string,
  playerName: string,
  playerNick: string,
  playerPhoto: string,
}
