export interface IPlayer {
	playerName: string;
	playerNick: string;
	playerId: string;
	playerTeam: IPlayerTeam;
	playerPhoto: string;
	playerAge: number;
	playerAchievements: IPlayerAchievements[];
	playerStats: IPlayerStats[];
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
