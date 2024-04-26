// team.model.ts
export interface Team {
  id: string;
  name: string;
  logo: string;
  players: string[];
  location: string;
}

export interface TeamUpdate {
  id: string;
  name: string;
  logo: string;
  players: string[];
  location: string;
}
