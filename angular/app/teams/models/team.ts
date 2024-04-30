import { Player } from '../players/models/player';

export interface Team {
  _id: string;
  creator: string;
  name: string;
  logo: string;
  players: string[]; // Define an array of arrays
  location: string;
}
