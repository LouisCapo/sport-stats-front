import { ISportTypes } from "../../admin-panel-page/model/edit-panel-interface";

export interface IPlayer {
	playerName: string;
	playerNick: string;
	playerId: string;
	playerTeam: IPlayerTeam;
	playerPhoto: string;
	playerAge: number;
	playerBirthday: string;
	playerStats: IPlayerStats[];
	sportType: ISportTypes;
}

interface IPlayerTeam {
	teamName: string;
	teamId: string;
	teamLogo: string
}

interface IPlayerStats {
	title: string;
	value: string;
}

interface IPlayerAchievements {
	title: string;
	newsId: string;
}
