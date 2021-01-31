export interface ITeam {
	teamId: string;
	teamName: string;
	teamLogo: string;
	teamMembers: ITeamMember[];
	teamStats: ITeamStats[];
	lastMatches: ILastMatch[];
	sportType: string;
}

interface ITeamMember {
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
