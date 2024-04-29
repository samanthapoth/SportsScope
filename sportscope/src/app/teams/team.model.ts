import { Player } from './players/player.model'; // Ensure this path is correct

export interface Team {
  id: string;
  name: string;
  logo: string;
  players: Player[]; // Use Player[] instead of string[]
  location: string;
}