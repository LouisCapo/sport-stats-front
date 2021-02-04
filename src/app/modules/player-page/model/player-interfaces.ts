export interface IPlayer {
	playerName: string;
	playerNick: string;
	playerId: string;
	playerTeam: IPlayerTeam;
	playerPhoto: string;
	playerAchievements: string[];
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
