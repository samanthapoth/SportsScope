export interface Game {
    _id?: string;  // Optional if not known yet (e.g., before creation)
    name: string;
    location: string;
    home_team: string;
    away_team: string;
    date: string;  // ISO string format for dates
    time: string;  // Could be a specific time format or ISO string
    played: boolean;
    home_team_score?: number;  // Optional, may not be known at creation
    away_team_score?: number;  // Optional, may not be known at creation
}
