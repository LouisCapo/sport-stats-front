export interface IPlayer {
	playerName: string;
	playerNick: string;
	playerId: string;
	playerTeam: string;
	playerTeamId: string;
	playerPhoto: string;
	playerTeamIcon: string;
	playerAchievements: string[];
	playerStats: IPlayerStats[];
}

interface IPlayerStats {
	title: string;
	value: string;
}
