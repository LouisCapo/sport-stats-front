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

interface ITeamMember {
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
	firstTeam: ITeamInfo;
	secondTeam: ITeamInfo;
	winningTeam: string;
	matchScore: string;
}

interface ITeamInfo {
	teamName: string;
	teamLogo: string;
	teamId: string;
}
