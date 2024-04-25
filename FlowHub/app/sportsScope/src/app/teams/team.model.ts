// team.model.ts
export interface Team {
  name: string;
  logo: string;
  players: string[];
  location: string;
}

export interface TeamUpdate {
  name: string;
  logo: string;
  players: string[];
  location: string;
}
