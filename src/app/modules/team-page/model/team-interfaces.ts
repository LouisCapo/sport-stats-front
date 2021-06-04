export interface ITeam {
	teamId: string;
	teamName: string;
	teamLogo: string;
	teamMembers: ITeamMember[];
	teamStats: ITeamStats[];
	lastMatches: ILastMatch[];
	sportType: ITeamSportType;
	memberAverageAge: number;
}

interface ITeamSportType {
	sportTypeCode: number,
	sportTypeTitle: string
}

export interface ITeamMember {
	memberName: string;
	memberNick: string;
	memberPhoto: string;
	memberId: string;
}

interface ITeamStats {
	title: string;
	value: string;
}

interface ILastMatch {
	matchId: string,
	firstTeam: ITeamInfo,
	secondTeam: ITeamInfo,
	score: {
		firstTeam: number,
		secondTeam: number,
	}
}

export interface ITeamInfo {
	teamName: string;
	teamLogo: string;
	teamId: string;
}
