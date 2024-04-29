export interface Game {
    _id?: string;  // Optional if not known yet (e.g., before creation)
    name: string;
    location: string;
    homeTeam: string;
    awayTeam: string;
    date: string;  // ISO string format for dates
    time: string;  // Could be a specific time format or ISO string
    played: boolean;
    homeTeamScore?: number;  // Optional, may not be known at creation
    awayTeamScore?: number;  // Optional, may not be known at creation
}
